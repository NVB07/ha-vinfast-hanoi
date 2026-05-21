"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import { createClient } from "@/utils/supabase/client";
import { uploadToCloudinary } from "@/utils/cloudinary";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockHomeCars } from "@/utils/mockData";
import { stripHtml } from "@/utils/slug";
import { revalidateCacheAction } from "@/app/actions/revalidate";

const supabase = createClient();

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false, loading: () => <p className="text-[10px] text-gray-400">Đang tải editor...</p> });

const quillModules = {
    toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["clean"],
    ],
};

const isSystemDefaultCar = (name?: string, id?: number) => {
    if (id !== undefined && id !== null) {
        return id <= 12;
    }
    if (!name) return false;
    const clean = name.toLowerCase().replace(/\s+/g, "");
    const defaultPatterns = [
        "vf3", "vf5", "vf6", "vf7", "vf8", "vf9", 
        "miniogreen", "minio", "heriogreen", "herio", "neriogreen", "nerio", "limogreen", "limo", 
        "ecvan", "ec", "ebus"
    ];
    return defaultPatterns.includes(clean);
};

export default function AdminPage() {
    const [loading, setLoading] = useState(false);
    const [sliders, setSliders] = useState<any[]>([]);
    const [cars, setCars] = useState<any[]>([]);
    const [news, setNews] = useState<any[]>([]);
    const [settings, setSettings] = useState<any>({
        phone: "",
        address: "",
        facebook: "",
        tiktok: "",
        youtube: "",
        email: "",
        zalo: "",
    });

    // CAR CRUD & DIALOG STATES
    const [isCarDialogOpen, setIsCarDialogOpen] = useState(false);
    const [editingCar, setEditingCar] = useState<any | null>(null);
    const [dbHasPinnedColumn, setDbHasPinnedColumn] = useState(true);
    const [carIsPinned, setCarIsPinned] = useState(false);
    const [dbHasMoreInfoColumn, setDbHasMoreInfoColumn] = useState(true);
    const [carMoreInfo, setCarMoreInfo] = useState("");
    const [carForm, setCarForm] = useState({
        name: "",
        type: "",
        slot: "",
        price: "",
        price_promo: "",
        distance: "",
        power: "",
        price_plus: "",
        price_plus_promo: "",
        distance_plus: "",
        power_plus: "",
        battery_price: "",
        overtime_fee: "",
    });
    const [carDescript, setCarDescript] = useState("");
    const [carImageFile, setCarImageFile] = useState<File | null>(null);
    const [carImageUrl, setCarImageUrl] = useState("");
    const [carSliderFiles, setCarSliderFiles] = useState<FileList | null>(null);
    const [carSliderUrls, setCarSliderUrls] = useState<string[]>([]);
    const [uploadingImage, setUploadingImage] = useState(false);
    const [uploadingSliders, setUploadingSliders] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const { data: sData } = await supabase.from("sliders").select("*").order("created_at", { ascending: false });
        if (sData) setSliders(sData);

        const { data: cData } = await supabase.from("cars").select("*").order("id", { ascending: true });
        if (cData) {
            setCars(cData);
            if (cData.length > 0) {
                const hasPinnedCol = cData.some(car => "is_pinned" in car);
                setDbHasPinnedColumn(hasPinnedCol);
                const hasMoreInfoCol = cData.some(car => "more_info" in car);
                setDbHasMoreInfoColumn(hasMoreInfoCol);
            }
        }

        const { data: nData } = await supabase.from("news").select("*").order("created_at", { ascending: false });
        if (nData) setNews(nData);

        const { data: setts } = await supabase.from("general_settings").select("*").single();
        if (setts) setSettings(setts);
    };

    const handleSettingsSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { error } = await supabase.from("general_settings").upsert([{ id: 1, ...settings }]);
            if (error) throw error;
            await revalidateCacheAction("general_settings");
            alert("Lưu Cấu hình thành công!");
        } catch (error: any) {
            alert("Lỗi: " + error.message);
        }
        setLoading(false);
    };

    // SLIDER HANDLERS
    const [sliderFiles, setSliderFiles] = useState<FileList | null>(null);
    const handleSliderSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!sliderFiles || sliderFiles.length === 0) return alert("Vui lòng chọn ít nhất 1 ảnh!");
        setLoading(true);
        try {
            const uploadPromises = Array.from(sliderFiles).map(async (file) => {
                const imageUrl = await uploadToCloudinary(file);
                return { image_url: imageUrl };
            });
            const insertData = await Promise.all(uploadPromises);

            await supabase.from("sliders").insert(insertData);
            await revalidateCacheAction("sliders");
            alert(`Thêm ${insertData.length} Slider thành công!`);

            setSliderFiles(null);
            const fileInput = document.getElementById("slider-upload-input") as HTMLInputElement;
            if (fileInput) fileInput.value = "";
            fetchData();
        } catch (error: any) {
            alert("Lỗi: " + error.message);
        }
        setLoading(false);
    };

    // NEWS HANDLERS
    const [newsForm, setNewsForm] = useState({ title: "", description: "", category: "Tin tức" });
    const [newsFile, setNewsFile] = useState<File | null>(null);
    const [editingNews, setEditingNews] = useState<any | null>(null);

    const handleNewsSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newsForm.title) return alert("Điền tiêu đề tin tức!");
        if (!editingNews && !newsFile) return alert("Vui lòng chọn ảnh!");
        setLoading(true);
        try {
            let imageUrl = editingNews?.image || "";
            if (newsFile) {
                imageUrl = await uploadToCloudinary(newsFile);
            }

            if (editingNews) {
                const { error } = await supabase
                    .from("news")
                    .update({ ...newsForm, image: imageUrl })
                    .eq("id", editingNews.id);
                if (error) throw error;
                await revalidateCacheAction("news");
                alert("Cập nhật Tin Tức thành công!");
                setEditingNews(null);
            } else {
                const { error } = await supabase
                    .from("news")
                    .insert([{ ...newsForm, image: imageUrl }]);
                if (error) throw error;
                await revalidateCacheAction("news");
                alert("Thêm Tin Tức thành công!");
            }

            setNewsForm({ title: "", description: "", category: "Tin tức" });
            setNewsFile(null);
            const fileInput = document.getElementById("news-upload-input") as HTMLInputElement;
            if (fileInput) fileInput.value = "";
            fetchData();
        } catch (error: any) {
            alert("Lỗi: " + error.message);
        }
        setLoading(false);
    };

    const handleEditNewsClick = (n: any) => {
        setEditingNews(n);
        setNewsForm({
            title: n.title,
            description: n.description,
            category: n.category || "Tin tức",
        });
        setNewsFile(null);
        const formElement = document.getElementById("news-form-title");
        if (formElement) {
            formElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleDelete = async (table: string, id: number) => {
        if (!confirm("Bạn có chắc chắn muốn xóa?")) return;
        await supabase.from(table).delete().eq("id", id);
        await revalidateCacheAction(table);
        fetchData();
    };

    // CAR ACTION HANDLERS
    const handleAddCarClick = () => {
        setEditingCar(null);
        setCarIsPinned(false);
        setCarMoreInfo("");
        setCarForm({
            name: "",
            type: "",
            slot: "",
            price: "",
            price_promo: "",
            distance: "",
            power: "",
            price_plus: "",
            price_plus_promo: "",
            distance_plus: "",
            power_plus: "",
            battery_price: "",
            overtime_fee: "",
        });
        setCarDescript("");
        setCarImageUrl("");
        setCarImageFile(null);
        setCarSliderFiles(null);
        setCarSliderUrls([]);
        setIsCarDialogOpen(true);
    };

    const handleEditCarClick = (car: any) => {
        setEditingCar(car);
        setCarIsPinned(!!car.is_pinned);
        setCarMoreInfo(car.more_info || "");
        setCarForm({
            name: car.name || "",
            type: car.type || "",
            slot: car.slot || "",
            price: car.price || "",
            price_promo: car.price_promo || "",
            distance: car.distance || "",
            power: car.power || "",
            price_plus: car.price_plus || "",
            price_plus_promo: car.price_plus_promo || "",
            distance_plus: car.distance_plus || "",
            power_plus: car.power_plus || "",
            battery_price: car.battery_price || "",
            overtime_fee: car.overtime_fee || "",
        });
        setCarDescript(car.descript || "");
        setCarImageUrl(car.image || "");
        setCarImageFile(null);
        setCarSliderFiles(null);
        
        if (car.slider_images) {
            if (car.slider_images.startsWith("[")) {
                try {
                    setCarSliderUrls(JSON.parse(car.slider_images));
                } catch (e) {
                    setCarSliderUrls(car.slider_images.split(",").map((s: string) => s.trim()).filter(Boolean));
                }
            } else {
                setCarSliderUrls(car.slider_images.split(",").map((s: string) => s.trim()).filter(Boolean));
            }
        } else {
            setCarSliderUrls([]);
        }
        setIsCarDialogOpen(true);
    };

    const handleDeleteCar = async (id: number) => {
        const car = displayCars.find((c) => c.id === id);
        if (car && isSystemDefaultCar(car.name, car.id)) {
            alert("Không thể xóa dòng xe mặc định của hệ thống!");
            return;
        }
        if (!confirm("Bạn có chắc chắn muốn xóa dòng xe custom này?")) return;
        setLoading(true);
        try {
            const { error } = await supabase.from("cars").delete().eq("id", id);
            if (error) throw error;
            await revalidateCacheAction("cars");
            alert("Xóa xe thành công!");
            fetchData();
        } catch (error: any) {
            alert("Lỗi khi xóa: " + error.message);
        }
        setLoading(false);
    };

    const handleCarSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!carForm.name.trim()) return alert("Vui lòng điền Tên xe!");

        // Kiểm tra trùng tên xe (không phân biệt chữ hoa thường và khoảng trắng)
        const cleanInput = carForm.name.toLowerCase().replace(/\s+/g, "");
        if (!editingCar) {
            const nameExists = displayCars.some(
                (c) => c.name.toLowerCase().replace(/\s+/g, "") === cleanInput
            );
            if (nameExists) {
                alert(`Lỗi: Tên xe "${carForm.name}" đã tồn tại trên hệ thống (hoặc trùng với xe mặc định)! Vui lòng chọn tên khác.`);
                return;
            }
        } else {
            const nameExistsOther = displayCars.some(
                (c) => c.id !== editingCar.id && c.name.toLowerCase().replace(/\s+/g, "") === cleanInput
            );
            if (nameExistsOther) {
                alert(`Lỗi: Tên xe "${carForm.name}" trùng với tên của một xe khác đang có trên hệ thống! Vui lòng chọn tên khác.`);
                return;
            }
        }

        setLoading(true);
        try {
            let finalImageUrl = carImageUrl;
            if (carImageFile) {
                setUploadingImage(true);
                finalImageUrl = await uploadToCloudinary(carImageFile);
                setUploadingImage(false);
            }

            let finalSliderUrlString = editingCar?.slider_images || "";
            if (carSliderFiles && carSliderFiles.length > 0) {
                setUploadingSliders(true);
                const uploadPromises = Array.from(carSliderFiles).map(async (file) => {
                    return await uploadToCloudinary(file);
                });
                const newSliderUrls = await Promise.all(uploadPromises);
                finalSliderUrlString = newSliderUrls.join(",");
                setUploadingSliders(false);
            }

            const carPayload: any = {
                name: carForm.name,
                type: carForm.type,
                slot: carForm.slot,
                price: carForm.price,
                price_promo: carForm.price_promo,
                distance: carForm.distance,
                power: carForm.power,
                price_plus: carForm.price_plus,
                price_plus_promo: carForm.price_plus_promo,
                distance_plus: carForm.distance_plus,
                power_plus: carForm.power_plus,
                battery_price: carForm.battery_price,
                overtime_fee: carForm.overtime_fee,
                descript: carDescript,
                image: finalImageUrl,
                slider_images: finalSliderUrlString,
            };

            if (editingCar) {
                carPayload.id = editingCar.id;
            } else {
                // Tự động sinh ID duy nhất và an toàn (>= 13) cho xe mới thêm để tránh xung đột với chuỗi sequence trong PostgreSQL (gây ghi đè xe có sẵn)
                const maxId = cars.reduce((max, car) => (car.id > max ? car.id : max), 12);
                carPayload.id = maxId + 1;
            }

            if (dbHasPinnedColumn) {
                carPayload.is_pinned = carIsPinned;
            }

            const isCustomCar = !editingCar || !isSystemDefaultCar(carForm.name, editingCar.id);
            if (dbHasMoreInfoColumn && isCustomCar) {
                carPayload.more_info = carMoreInfo;
            }

            const { error } = await supabase.from("cars").upsert([carPayload]);
            if (error) throw error;

            await revalidateCacheAction("cars");
            alert(editingCar ? "Cập nhật xe thành công!" : "Thêm xe mới thành công!");
            setIsCarDialogOpen(false);
            fetchData();
        } catch (error: any) {
            if (error.message && (error.message.includes("is_pinned") || error.code === "42703")) {
                alert("Lỗi: Cột 'is_pinned' chưa tồn tại trong cơ sở dữ liệu. Vui lòng chạy câu lệnh SQL nâng cấp ở banner thông báo màu vàng!");
            } else if (error.message && (error.message.includes("more_info") || error.code === "42703")) {
                alert("Lỗi: Cột 'more_info' chưa tồn tại trong cơ sở dữ liệu. Vui lòng chạy câu lệnh SQL nâng cấp ở banner thông báo màu vàng!");
            } else {
                alert("Lỗi khi lưu thông tin xe: " + error.message);
            }
        }
        setLoading(false);
    };

    // MERGE MOCK CARS & DATABASE CUSTOM CARS
    const mergedCars = mockHomeCars.map((mockCar) => {
        const dbCar = cars.find((c) => c.id === mockCar.id);
        return dbCar ? { ...mockCar, ...dbCar } : mockCar;
    });
    const customCars = cars
        .filter((dbCar) => !mockHomeCars.some((m) => m.id === dbCar.id))
        .sort((a, b) => a.id - b.id);
    const displayCars = [...mergedCars, ...customCars];

    return (
        <div className="container mx-auto py-10 px-4 max-w-5xl text-[#333] relative">
            <h1 className="text-3xl font-bold mb-8 uppercase text-center text-[#0062BD]">Trang Quản Trị (Admin)</h1>

            <Tabs defaultValue="sliders" className="w-full">
                <TabsList className="mb-8 p-1 bg-gray-100 flex h-auto overflow-x-auto rounded-lg">
                    <TabsTrigger value="sliders" className="flex-1 px-4 py-2 text-sm font-semibold whitespace-nowrap data-[state=active]:bg-white rounded-md shadow-sm">
                        Quản lý Sliders
                    </TabsTrigger>
                    <TabsTrigger value="cars" className="flex-1 px-4 py-2 text-sm font-semibold whitespace-nowrap data-[state=active]:bg-white rounded-md shadow-sm">
                        Quản lý Xe (Danh sách)
                    </TabsTrigger>
                    <TabsTrigger value="news" className="flex-1 px-4 py-2 text-sm font-semibold whitespace-nowrap data-[state=active]:bg-white rounded-md shadow-sm">
                        Quản lý Tin Tức
                    </TabsTrigger>
                    <TabsTrigger value="settings" className="flex-1 px-4 py-2 text-sm font-semibold whitespace-nowrap data-[state=active]:bg-white rounded-md shadow-sm">
                        Cấu hình chung
                    </TabsTrigger>
                </TabsList>

                {/* TAB SLIDERS */}
                <TabsContent value="sliders">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
                        <h2 className="text-xl font-bold mb-4">Thêm Slider Mới (Chọn nhiều ảnh cùng lúc)</h2>
                        <form onSubmit={handleSliderSubmit} className="flex gap-4 items-end">
                            <div className="flex-1">
                                <label className="block text-sm font-medium mb-2 pr-1 text-gray-700">Chọn Ảnh Desktop (Cloudinary) - Có thể quét chọn nhiều ảnh</label>
                                <Input
                                    id="slider-upload-input"
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    onChange={(e) => setSliderFiles(e.target.files)}
                                    className="cursor-pointer"
                                />
                            </div>
                            <Button type="submit" disabled={loading} className="bg-[#0088FF] hover:bg-[#0066CC] min-w-[120px]">
                                {loading ? "Đang tải..." : "Lưu Slider"}
                            </Button>
                        </form>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sliders.map((s) => (
                            <div key={s.id} className="relative aspect-[16/9] border rounded-lg overflow-hidden group bg-gray-50">
                                <Image src={s.image_url} alt="Slider" fill className="object-cover" />
                                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Button variant="destructive" size="sm" onClick={() => handleDelete("sliders", s.id)}>
                                        Xóa
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabsContent>

                {/* TAB CARS (CRUD Table) */}
                <TabsContent value="cars" className="space-y-6">
                    {!dbHasPinnedColumn && (
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm animate-in fade-in slide-in-from-top-4 duration-300">
                            <div className="flex items-start gap-3">
                                <span className="text-2xl mt-0.5">⚠️</span>
                                <div>
                                    <h4 className="text-sm font-bold text-amber-800">Cơ sở dữ liệu của bạn thiếu cột "is_pinned"</h4>
                                    <p className="text-xs text-amber-700 mt-1 max-w-2xl leading-normal">
                                        Để ghim xe lên Trang chủ, vui lòng truy cập **Supabase Dashboard** {"->"} **SQL Editor** và chạy câu lệnh bên phải. Hệ thống sẽ tự động kích hoạt tính năng ghim xe ngay lập tức!
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 min-w-[280px]">
                                <div className="bg-amber-950/5 text-amber-900 border border-amber-950/10 font-mono text-[10px] p-2 rounded select-all whitespace-nowrap overflow-x-auto">
                                    ALTER TABLE cars ADD COLUMN is_pinned BOOLEAN DEFAULT FALSE;
                                </div>
                                <button 
                                    onClick={() => {
                                        navigator.clipboard.writeText("ALTER TABLE cars ADD COLUMN is_pinned BOOLEAN DEFAULT FALSE;");
                                        alert("Đã sao chép câu lệnh SQL!");
                                    }}
                                    className="bg-amber-700 hover:bg-amber-800 text-white font-bold text-[10px] uppercase py-1.5 px-3 rounded shadow transition-all self-end"
                                >
                                    Sao chép câu lệnh SQL
                                </button>
                            </div>
                        </div>
                    )}
                    {!dbHasMoreInfoColumn && (
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm animate-in fade-in slide-in-from-top-4 duration-300">
                            <div className="flex items-start gap-3">
                                <span className="text-2xl mt-0.5">⚠️</span>
                                <div>
                                    <h4 className="text-sm font-bold text-amber-800">Cơ sở dữ liệu của bạn thiếu cột "more_info"</h4>
                                    <p className="text-xs text-amber-700 mt-1 max-w-2xl leading-normal">
                                        Để thêm thông tin chi tiết (Rich Text) cho các xe tự thêm, vui lòng truy cập **Supabase Dashboard** {"->"} **SQL Editor** và chạy câu lệnh bên phải. Hệ thống sẽ tự động kích hoạt tính năng này ngay lập tức!
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 min-w-[280px]">
                                <div className="bg-amber-950/5 text-amber-900 border border-amber-950/10 font-mono text-[10px] p-2 rounded select-all whitespace-nowrap overflow-x-auto">
                                    ALTER TABLE cars ADD COLUMN more_info TEXT;
                                </div>
                                <button 
                                    onClick={() => {
                                        navigator.clipboard.writeText("ALTER TABLE cars ADD COLUMN more_info TEXT;");
                                        alert("Đã sao chép câu lệnh SQL!");
                                    }}
                                    className="bg-amber-700 hover:bg-amber-800 text-white font-bold text-[10px] uppercase py-1.5 px-3 rounded shadow transition-all self-end"
                                >
                                    Sao chép câu lệnh SQL
                                </button>
                            </div>
                        </div>
                    )}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                        <div>
                            <h2 className="text-xl font-bold text-gray-900">Quản Lý Danh Sách Xe VinFast</h2>
                            <p className="text-xs text-gray-500 mt-1">
                                Chỉnh sửa thông số kỹ thuật, giá bán và thêm mới/xóa dòng xe custom tiện lợi.
                            </p>
                        </div>
                        <Button 
                            onClick={handleAddCarClick}
                            className="bg-[#0088FF] hover:bg-[#0066CC] text-white font-bold text-xs uppercase px-5 py-2.5 rounded-lg flex items-center gap-1.5 shadow-sm transition-all whitespace-nowrap"
                        >
                            <span className="text-base font-black">+</span> Thêm Xe Mới
                        </Button>
                    </div>

                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200 text-xs font-bold text-gray-600 uppercase">
                                        <th className="py-4 px-6">Hình ảnh</th>
                                        <th className="py-4 px-6">Tên Xe</th>
                                        <th className="py-4 px-6">Phân Khúc</th>
                                        <th className="py-4 px-6">Bản Eco/Base (Gốc / Ưu đãi)</th>
                                        <th className="py-4 px-6">Bản Plus (Gốc / Ưu đãi)</th>
                                        <th className="py-4 px-6 text-right">Thao Tác</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-sm">
                                    {displayCars.map((car) => {
                                        const isCustom = car.id > 12;
                                        return (
                                            <tr key={car.id} className="hover:bg-gray-50/40 transition-colors">
                                                <td className="py-4 px-6">
                                                    <div className="relative h-14 w-20 rounded bg-gray-50 border border-gray-100 overflow-hidden flex-shrink-0">
                                                        {car.image ? (
                                                            <Image 
                                                                src={car.image} 
                                                                alt={car.name} 
                                                                fill 
                                                                className="object-contain p-1"
                                                            />
                                                        ) : (
                                                            <div className="flex items-center justify-center h-full text-xs text-gray-400">Không ảnh</div>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6 font-bold text-gray-900 uppercase">
                                                    <div className="flex flex-col gap-1">
                                                        <div className="flex items-center gap-1.5">
                                                            <span>{car.name}</span>
                                                            {isCustom && (
                                                                <span className="text-[9px] bg-green-50 text-green-600 font-extrabold px-1.5 py-0.5 rounded border border-green-200 uppercase tracking-wider">Mới</span>
                                                            )}
                                                        </div>
                                                        {dbHasPinnedColumn && car.is_pinned && (
                                                            <span className="inline-flex items-center gap-1 text-[9px] bg-blue-50 text-blue-600 border border-blue-200 font-bold px-1.5 py-0.5 rounded w-fit uppercase">
                                                                📌 Ghim trang chủ
                                                            </span>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6 text-gray-600 font-medium">
                                                    {car.type || "—"}
                                                </td>
                                                <td className="py-4 px-6">
                                                    <div className="flex flex-col">
                                                        <span className="font-semibold text-gray-800">{car.price || "—"}</span>
                                                        {car.price_promo && (
                                                            <span className="text-xs text-rose-600 font-bold mt-0.5">Ưu đãi: {car.price_promo}</span>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6">
                                                    <div className="flex flex-col">
                                                        <span className="font-semibold text-gray-800">{car.price_plus || "—"}</span>
                                                        {car.price_plus_promo && (
                                                            <span className="text-xs text-rose-600 font-bold mt-0.5">Ưu đãi: {car.price_plus_promo}</span>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            onClick={() => handleEditCarClick(car)}
                                                            className="text-xs h-8 px-3 border-gray-200 hover:border-[#0088FF] hover:text-[#0088FF] transition-all"
                                                        >
                                                            Sửa
                                                        </Button>
                                                        {isCustom && (
                                                            <Button
                                                                variant="destructive"
                                                                size="sm"
                                                                onClick={() => handleDeleteCar(car.id)}
                                                                className="text-xs h-8 px-3 transition-all"
                                                            >
                                                                Xóa
                                                            </Button>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </TabsContent>

                {/* TAB NEWS */}
                <TabsContent value="news">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
                        <h2 id="news-form-title" className="text-xl font-bold mb-4 text-[#0062BD]">
                            {editingNews ? `Sửa Tin Tức: "${editingNews.title}"` : "Thêm Tin Tức Mới"}
                        </h2>
                        <form onSubmit={handleNewsSubmit} className="grid grid-cols-1 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Tiêu đề bài viết</label>
                                <Input value={newsForm.title} onChange={(e) => setNewsForm(prev => ({ ...prev, title: e.target.value }))} placeholder="Tiêu đề..." />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Mô tả bài viết (Hỗ trợ Định dạng)</label>
                                <div className="bg-white [&_.ql-editor]:min-h-[150px] [&_.ql-editor]:text-sm">
                                    <ReactQuill
                                        theme="snow"
                                        value={newsForm.description}
                                        onChange={(val) => setNewsForm(prev => ({ ...prev, description: val }))}
                                        modules={quillModules}
                                        placeholder="Nội dung mô tả bài viết..."
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Thể loại</label>
                                    <Input value={newsForm.category} onChange={(e) => setNewsForm(prev => ({ ...prev, category: e.target.value }))} placeholder="vd: Tin tức" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Ảnh bìa hình chữ nhật ngang {editingNews && "(Bỏ trống để giữ ảnh cũ)"}
                                    </label>
                                    <Input id="news-upload-input" type="file" accept="image/*" onChange={(e) => setNewsFile(e.target.files?.[0] || null)} className="cursor-pointer" />
                                </div>
                            </div>
                            <div className="pt-2 flex gap-3">
                                <Button type="submit" disabled={loading} className="bg-[#0088FF] hover:bg-[#0066CC]">
                                    {loading ? "Đang tải..." : editingNews ? "Cập Nhật Tin Tức" : "Lưu Tin Tức"}
                                </Button>
                                {editingNews && (
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => {
                                            setEditingNews(null);
                                            setNewsForm({ title: "", description: "", category: "Tin tức" });
                                            setNewsFile(null);
                                            const fileInput = document.getElementById("news-upload-input") as HTMLInputElement;
                                            if (fileInput) fileInput.value = "";
                                        }}
                                    >
                                        Hủy Sửa
                                    </Button>
                                )}
                            </div>
                        </form>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {news.map((n) => (
                            <div key={n.id} className="border rounded-lg bg-white overflow-hidden shadow-sm flex flex-col">
                                <div className="relative aspect-[16/9] w-full bg-gray-100">
                                    <Image src={n.image} alt={n.title} fill className="object-cover" />
                                    <div className="absolute top-2 left-2 bg-[#0062BD] text-white text-[10px] font-bold px-2 py-1 rounded-sm">{n.category}</div>
                                </div>
                                <div className="p-4 flex-1 flex flex-col">
                                    <h4 className="font-semibold text-sm line-clamp-2 mb-2">{n.title}</h4>
                                    <p className="text-xs text-gray-500 line-clamp-2 mb-4 leading-relaxed">{stripHtml(n.description)}</p>
                                    <div className="mt-auto pt-3 border-t border-gray-100 flex justify-between gap-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="flex-1 text-xs h-7 text-[#0062BD] border-[#0062BD]/30 hover:bg-blue-50"
                                            onClick={() => handleEditNewsClick(n)}
                                        >
                                            Sửa
                                        </Button>
                                        <Button
                                            variant="destructive"
                                            size="sm"
                                            className="flex-1 text-xs h-7"
                                            onClick={() => handleDelete("news", n.id)}
                                        >
                                            Xóa
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabsContent>

                {/* TAB SETTINGS */}
                <TabsContent value="settings">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8 max-w-2xl mx-auto">
                        <h2 className="text-xl font-bold mb-4">Cấu Hình Chung</h2>
                        <form onSubmit={handleSettingsSubmit} className="flex flex-col gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Số điện thoại / Hotline</label>
                                <Input value={settings.phone || ""} onChange={(e) => setSettings({ ...settings, phone: e.target.value })} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Số Zalo (vd: 0345726001)</label>
                                <Input value={settings.zalo || ""} onChange={(e) => setSettings({ ...settings, zalo: e.target.value })} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <Input value={settings.email || ""} onChange={(e) => setSettings({ ...settings, email: e.target.value })} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Địa chỉ (Có thể nhập nhiều dòng)</label>
                                <textarea
                                    rows={4}
                                    className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                    value={settings.address || ""}
                                    onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Facebook Link</label>
                                <Input value={settings.facebook || ""} onChange={(e) => setSettings({ ...settings, facebook: e.target.value })} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">TikTok Link</label>
                                <Input value={settings.tiktok || ""} onChange={(e) => setSettings({ ...settings, tiktok: e.target.value })} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">YouTube Link</label>
                                <Input value={settings.youtube || ""} onChange={(e) => setSettings({ ...settings, youtube: e.target.value })} />
                            </div>
                            <Button type="submit" disabled={loading} className="w-full bg-[#0088FF] hover:bg-[#0066CC]">
                                {loading ? "Đang lưu..." : "Lưu Thay Đổi"}
                            </Button>
                        </form>
                    </div>
                </TabsContent>
            </Tabs>

            {/* LARGE CUSTOM MODAL OVERLAY FOR ADDING / EDITING CAR */}
            {isCarDialogOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[2px] p-4 overflow-y-auto">
                    <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-gray-100 max-h-[90vh] flex flex-col my-8 animate-in fade-in zoom-in-95 duration-200">
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-[#0062BD] to-[#0088FF] rounded-t-2xl text-white">
                            <h3 className="font-extrabold text-base tracking-wider uppercase">
                                {editingCar ? `Cập Nhật Xe: ${editingCar.name}` : "Thêm Dòng Xe Mới VinFast"}
                            </h3>
                            <button
                                onClick={() => setIsCarDialogOpen(false)}
                                className="text-white/80 hover:text-white hover:bg-white/10 w-8 h-8 rounded-full flex items-center justify-center transition-colors text-lg font-bold"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleCarSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
                            {/* SECTION 1: GENERAL INFO & IMAGES */}
                            <div className="space-y-4">
                                <h4 className="font-bold text-xs text-[#0062BD] uppercase tracking-wider border-b pb-1.5">1. Thông Tin Cơ Bản & Hình Ảnh</h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                    <div>
                                                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Tên Dòng Xe *</label>
                                                        <Input
                                                            value={carForm.name}
                                                            onChange={(e) => setCarForm({ ...carForm, name: e.target.value })}
                                                            placeholder="Ví dụ: VF 3, VF 5..."
                                                            className="h-9 text-xs px-3"
                                                            required
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Phân Khúc / Loại Xe</label>
                                                        <Input
                                                            value={carForm.type}
                                                            onChange={(e) => setCarForm({ ...carForm, type: e.target.value })}
                                                            placeholder="Ví dụ: Mini SUV, B SUV..."
                                                            className="h-9 text-xs px-3"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Số Chỗ Ngồi</label>
                                                        <Input
                                                            value={carForm.slot}
                                                            onChange={(e) => setCarForm({ ...carForm, slot: e.target.value })}
                                                            placeholder="Ví dụ: 4 chỗ, 5 chỗ..."
                                                            className="h-9 text-xs px-3"
                                                        />
                                                    </div>
                                                </div>

                                                {dbHasPinnedColumn && (
                                                    <div className="flex items-center gap-2.5 bg-blue-50/50 border border-blue-100/50 p-3.5 rounded-xl mt-1.5 shadow-sm">
                                                        <input
                                                            type="checkbox"
                                                            id="car-is-pinned"
                                                            checked={carIsPinned}
                                                            onChange={(e) => setCarIsPinned(e.target.checked)}
                                                            className="h-4 w-4 text-[#0088FF] focus:ring-[#0088FF] rounded border-gray-300 cursor-pointer"
                                                        />
                                                        <div className="flex flex-col cursor-pointer" onClick={() => setCarIsPinned(!carIsPinned)}>
                                                            <span className="text-xs font-bold text-gray-800">📌 Ghim lên trang chủ (Khám phá các dòng xe VinFast)</span>
                                                            <span className="text-[10px] text-gray-500 mt-0.5">Xe được ghim sẽ hiển thị tại các thẻ Tabs chọn trên Trang chủ</span>
                                                        </div>
                                                    </div>
                                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                                    {/* FEATURED IMAGE */}
                                    <div className="bg-gray-50/50 p-4 rounded-xl border border-gray-100 flex flex-col gap-3">
                                        <label className="block text-xs font-bold text-gray-700">Ảnh Đại Diện Xe (Hình ảnh xe ngang, nền trong suốt/trắng)</label>
                                        <div className="flex items-center gap-3">
                                            <Input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0] || null;
                                                    setCarImageFile(file);
                                                    if (file) {
                                                        setCarImageUrl(URL.createObjectURL(file));
                                                    }
                                                }}
                                                className="cursor-pointer h-9 text-xs px-2 bg-white"
                                            />
                                        </div>
                                        <div className="text-[10px] text-gray-400">Hoặc dán link ảnh có sẵn:</div>
                                        <Input
                                            value={carImageUrl}
                                            onChange={(e) => setCarImageUrl(e.target.value)}
                                            placeholder="https://cloudinary.com/.../img.png"
                                            className="h-8 text-xs px-3 bg-white"
                                        />
                                        {carImageUrl && (
                                            <div className="mt-2 border rounded-lg p-2 bg-white flex justify-center items-center h-28 relative">
                                                <Image src={carImageUrl} alt="Preview featured" fill className="object-contain p-1" />
                                            </div>
                                        )}
                                    </div>

                                    {/* COLOR SLIDER IMAGES */}
                                    <div className="bg-gray-50/50 p-4 rounded-xl border border-gray-100 flex flex-col gap-3">
                                        <label className="block text-xs font-bold text-gray-700">Ảnh Màu Sắc Bàn Xoay (Slider - Chọn nhiều tệp)</label>
                                        <Input
                                            type="file"
                                            multiple
                                            accept="image/*"
                                            onChange={(e) => setCarSliderFiles(e.target.files)}
                                            className="cursor-pointer h-9 text-xs px-2 bg-white"
                                        />
                                        <p className="text-[10px] text-gray-400 leading-normal">
                                            Chọn các file ảnh màu sắc xe (tốt nhất là nền trong suốt) để hiển thị thanh trượt chọn màu xe tại trang chi tiết.
                                        </p>

                                        {carSliderUrls.length > 0 && (
                                            <div className="mt-1 flex flex-col gap-1.5">
                                                <span className="text-[10px] font-semibold text-gray-500">Các ảnh slider hiện tại ({carSliderUrls.length}):</span>
                                                <div className="grid grid-cols-5 gap-2 border rounded-lg p-2 bg-white overflow-y-auto max-h-[85px]">
                                                    {carSliderUrls.map((url, i) => (
                                                        <div key={i} className="relative aspect-square border rounded overflow-hidden bg-gray-50">
                                                            <Image src={url} alt={`Slider ${i}`} fill className="object-contain p-0.5" />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* SECTION 2: ECO/BASE DETAILS */}
                            <div className="space-y-4 pt-2">
                                <h4 className="font-bold text-xs text-[#0062BD] uppercase tracking-wider border-b pb-1.5">2. Bản ECO / BASE - Giá Bán & Thông Số</h4>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-600 mb-1">Giá Niêm Yết</label>
                                        <Input
                                            value={carForm.price}
                                            onChange={(e) => setCarForm({ ...carForm, price: e.target.value })}
                                            placeholder="Ví dụ: 322.000.000 VNĐ"
                                            className="h-9 text-xs px-3"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-600 mb-1 text-rose-600">Giá Ưu Đãi</label>
                                        <Input
                                            value={carForm.price_promo}
                                            onChange={(e) => setCarForm({ ...carForm, price_promo: e.target.value })}
                                            placeholder="Ví dụ: 310.000.000 VNĐ"
                                            className="h-9 text-xs px-3 border-rose-100 focus:border-rose-300"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-600 mb-1">Quãng Đường</label>
                                        <Input
                                            value={carForm.distance}
                                            onChange={(e) => setCarForm({ ...carForm, distance: e.target.value })}
                                            placeholder="Ví dụ: 210 km"
                                            className="h-9 text-xs px-3"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-600 mb-1">Công Suất</label>
                                        <Input
                                            value={carForm.power}
                                            onChange={(e) => setCarForm({ ...carForm, power: e.target.value })}
                                            placeholder="Ví dụ: 43 Hp / 32 kW"
                                            className="h-9 text-xs px-3"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* SECTION 3: PLUS DETAILS */}
                            <div className="space-y-4 pt-2">
                                <h4 className="font-bold text-xs text-[#0062BD] uppercase tracking-wider border-b pb-1.5">3. Bản PLUS - Giá Bán & Thông Số</h4>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-600 mb-1">Giá Niêm Yết Plus</label>
                                        <Input
                                            value={carForm.price_plus}
                                            onChange={(e) => setCarForm({ ...carForm, price_plus: e.target.value })}
                                            placeholder="Ví dụ: 379.000.000 VNĐ"
                                            className="h-9 text-xs px-3"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-600 mb-1 text-rose-600">Giá Ưu Đãi Plus</label>
                                        <Input
                                            value={carForm.price_plus_promo}
                                            onChange={(e) => setCarForm({ ...carForm, price_plus_promo: e.target.value })}
                                            placeholder="Ví dụ: 360.000.000 VNĐ"
                                            className="h-9 text-xs px-3 border-rose-100 focus:border-rose-300"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-600 mb-1">Quãng Đường Plus</label>
                                        <Input
                                            value={carForm.distance_plus}
                                            onChange={(e) => setCarForm({ ...carForm, distance_plus: e.target.value })}
                                            placeholder="Ví dụ: 210 km"
                                            className="h-9 text-xs px-3"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-600 mb-1">Công Suất Plus</label>
                                        <Input
                                            value={carForm.power_plus}
                                            onChange={(e) => setCarForm({ ...carForm, power_plus: e.target.value })}
                                            placeholder="Ví dụ: 43 Hp / 32 kW"
                                            className="h-9 text-xs px-3"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* SECTION 4: CHARGING FEES */}
                            <div className="space-y-4 pt-2">
                                <h4 className="font-bold text-xs text-[#0062BD] uppercase tracking-wider border-b pb-1.5">4. Đơn Giá Thuê Pin & Chi Phí Sạc</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Đơn giá sạc pin (hoặc Gói thuê pin)</label>
                                        <Input
                                            value={carForm.battery_price}
                                            onChange={(e) => setCarForm({ ...carForm, battery_price: e.target.value })}
                                            placeholder="Ví dụ: 3.858 vnđ / KWh hoặc 900.000 vnđ/tháng"
                                            className="h-9 text-xs px-3"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Phí chiếm chỗ sạc (đóng thêm nếu quá giờ)</label>
                                        <Input
                                            value={carForm.overtime_fee}
                                            onChange={(e) => setCarForm({ ...carForm, overtime_fee: e.target.value })}
                                            placeholder="Ví dụ: 1.000 vnđ / phút"
                                            className="h-9 text-xs px-3"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* SECTION 5: DETAILED PROMO DESCRIPTION */}
                            <div className="space-y-4 pt-2">
                                <h4 className="font-bold text-xs text-[#0062BD] uppercase tracking-wider border-b pb-1.5">5. Mô Tả Khuyến Mãi & Ưu Đãi (Rich Text)</h4>
                                <div className="bg-white [&_.ql-editor]:min-h-[140px] [&_.ql-editor]:text-xs rounded-xl overflow-hidden border border-gray-200">
                                    <ReactQuill
                                        theme="snow"
                                        value={carDescript}
                                        onChange={setCarDescript}
                                        modules={quillModules}
                                        placeholder="Ví dụ: Khuyến mãi trước bạ 100%, Tặng phụ kiện cao cấp chính hãng..."
                                    />
                                </div>
                            </div>

                            {/* SECTION 6: DETAILED ADDITIONAL INFO (Rich Text) */}
                            {dbHasMoreInfoColumn && (!editingCar || !isSystemDefaultCar(editingCar.name, editingCar.id)) && (
                                <div className="space-y-4 pt-2">
                                    <h4 className="font-bold text-xs text-[#0062BD] uppercase tracking-wider border-b pb-1.5">6. Thông tin liên quan (Hiển thị dưới Đặc quyền sở hữu)</h4>
                                    <div className="bg-white [&_.ql-editor]:min-h-[140px] [&_.ql-editor]:text-xs rounded-xl overflow-hidden border border-gray-200">
                                        <ReactQuill
                                            theme="snow"
                                            value={carMoreInfo}
                                            onChange={setCarMoreInfo}
                                            modules={quillModules}
                                            placeholder="Nhập thông tin chi tiết liên quan đến dòng xe này (sẽ hiển thị dưới phần những đặc quyền sở hữu)..."
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Submit and Cancel Buttons */}
                            <div className="flex justify-end gap-3 pt-6 border-t border-gray-100">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => setIsCarDialogOpen(false)}
                                    className="px-5 h-10 text-xs font-bold text-gray-500"
                                >
                                    Đóng
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="px-6 h-10 text-xs font-bold bg-[#0088FF] hover:bg-[#0066CC] text-white flex items-center justify-center gap-1.5"
                                >
                                    {loading ? (
                                        <>
                                            <span className="animate-spin inline-block w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full mr-1"></span>
                                            {uploadingImage ? "Đang tải ảnh..." : uploadingSliders ? "Đang tải slider..." : "Đang lưu..."}
                                        </>
                                    ) : (
                                        "Lưu Thông Tin"
                                    )}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
