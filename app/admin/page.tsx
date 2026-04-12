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
import { mockHomeCars, mockSliders } from "@/utils/mockData";

const supabase = createClient();

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false, loading: () => <p className="text-[10px] text-gray-400">Đang tải editor...</p> });

export function EditCarForm({ mockCar, dbCar, onUpdated }: { mockCar: any; dbCar: any; onUpdated: () => void }) {
    const displayCar = dbCar || mockCar;
    const [descript, setDescript] = useState(displayCar?.descript || "");
    const [loading, setLoading] = useState(false);

    const quillModules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ color: [] }, { background: [] }],
            [{ list: "ordered" }, { list: "bullet" }],
            ["clean"],
        ],
    };

    const handleCarUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const updatedData = {
            id: displayCar.id,
            name: displayCar.name,
            image: displayCar.image,
            type: formData.get("type"),
            price: formData.get("price"),
            distance: formData.get("distance"),
            slot: formData.get("slot"),
            power: formData.get("power"),
            descript: descript,
        };

        setLoading(true);
        try {
            await supabase.from("cars").upsert([updatedData]);
            alert("Cập nhật thông tin Xe thành công!");
            onUpdated();
        } catch (error: any) {
            alert("Lỗi: " + error.message);
        }
        setLoading(false);
    };

    return (
        <form onSubmit={handleCarUpdate} className="border rounded-lg p-3 bg-white relative flex flex-col shadow-sm">
            <div className="flex items-center gap-3 mb-3 w-full">
                <div className="h-14 w-20 relative flex-shrink-0 bg-gray-50 rounded">
                    <Image src={displayCar.image} alt={displayCar.name} fill className="object-contain" />
                </div>
                <h3 className="font-bold text-sm text-[#0062BD] uppercase">{displayCar.name}</h3>
            </div>

            <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-2 mb-3">
                <div>
                    <label className="block text-[10px] font-medium text-gray-500 mb-0.5">Loại xe</label>
                    <Input name="type" defaultValue={displayCar.type} className="h-7 text-xs px-2" />
                </div>
                <div>
                    <label className="block text-[10px] font-medium text-gray-500 mb-0.5">Số chỗ</label>
                    <Input name="slot" defaultValue={displayCar.slot} className="h-7 text-xs px-2" />
                </div>
                <div>
                    <label className="block text-[10px] font-medium text-gray-500 mb-0.5">Giá chỉ từ</label>
                    <Input name="price" defaultValue={displayCar.price} className="h-7 text-xs px-2" />
                </div>
                <div>
                    <label className="block text-[10px] font-medium text-gray-500 mb-0.5">Quãng đường</label>
                    <Input name="distance" defaultValue={displayCar.distance} className="h-7 text-xs px-2" />
                </div>
                <div>
                    <label className="block text-[10px] font-medium text-gray-500 mb-0.5">Công suất</label>
                    <Input name="power" defaultValue={displayCar.power} className="h-7 text-xs px-2" />
                </div>
            </div>

            <div className="w-full mb-3">
                <label className="block text-[10px] font-medium text-gray-500 mb-0.5">Đoạn Mô tả (Hỗ trợ Định dạng)</label>
                <div className="bg-white [&_.ql-editor]:min-h-[80px] [&_.ql-editor]:text-xs">
                    <ReactQuill theme="snow" value={descript} onChange={setDescript} modules={quillModules} />
                </div>
            </div>

            <Button type="submit" disabled={loading} className="w-full mt-auto bg-[#0088FF] hover:bg-[#0066CC] h-7 text-[11px]">
                {loading ? "Lưu..." : "Cập Nhật"}
            </Button>
        </form>
    );
}

export default function AdminPage() {
    const [loading, setLoading] = useState(false);
    const [sliders, setSliders] = useState<any[]>([]);
    const [cars, setCars] = useState<any[]>([]);
    const [news, setNews] = useState<any[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const { data: sData } = await supabase.from("sliders").select("*").order("created_at", { ascending: false });
        if (sData) setSliders(sData);

        const { data: cData } = await supabase.from("cars").select("*").order("created_at", { ascending: false });
        if (cData) setCars(cData);

        const { data: nData } = await supabase.from("news").select("*").order("created_at", { ascending: false });
        if (nData) setNews(nData);
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

    // CAR HANDLERS
    // Đã chuyển sang EditCarForm component

    // NEWS HANDLERS
    const [newsForm, setNewsForm] = useState({ title: "", description: "", category: "Tin tức" });
    const [newsFile, setNewsFile] = useState<File | null>(null);
    const handleNewsSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newsFile) return alert("Vui lòng chọn ảnh!");
        if (!newsForm.title) return alert("Điền tiêu đề tin tức!");
        setLoading(true);
        try {
            const imageUrl = await uploadToCloudinary(newsFile);
            await supabase.from("news").insert([{ ...newsForm, image: imageUrl }]);
            alert("Thêm Tin Tức thành công!");
            setNewsForm({ title: "", description: "", category: "Tin tức" });
            setNewsFile(null);
            fetchData();
        } catch (error: any) {
            alert("Lỗi: " + error.message);
        }
        setLoading(false);
    };

    const handleDelete = async (table: string, id: number) => {
        if (!confirm("Bạn có chắc chắn muốn xóa?")) return;
        await supabase.from(table).delete().eq("id", id);
        fetchData();
    };

    return (
        <div className="container mx-auto py-10 px-4 max-w-5xl text-[#333]">
            <h1 className="text-3xl font-bold mb-8 uppercase text-center text-[#0062BD]">Trang Quản Trị (Admin)</h1>

            <Tabs defaultValue="sliders" className="w-full">
                <TabsList className="mb-8 p-1 bg-gray-100 flex h-auto overflow-x-auto rounded-lg">
                    <TabsTrigger value="sliders" className="flex-1 px-4 py-2 text-sm font-semibold whitespace-nowrap data-[state=active]:bg-white rounded-md shadow-sm">
                        Quản lý Sliders
                    </TabsTrigger>
                    <TabsTrigger value="cars" className="flex-1 px-4 py-2 text-sm font-semibold whitespace-nowrap data-[state=active]:bg-white rounded-md shadow-sm">
                        Quản lý Xe (Tabs)
                    </TabsTrigger>
                    <TabsTrigger value="news" className="flex-1 px-4 py-2 text-sm font-semibold whitespace-nowrap data-[state=active]:bg-white rounded-md shadow-sm">
                        Quản lý Tin Tức
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
                            <div key={s.id} className="relative aspect-[16/9] border rounded-lg overflow-hidden group">
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

                {/* TAB CARS */}
                <TabsContent value="cars">
                    <div className="mb-4">
                        <p className="text-gray-600 text-sm">Chỉnh sửa thông số văn bản và giá tiền cho các dòng xe đã có sẵn. Không cần tải lên ảnh mới.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        {mockHomeCars.map(mockCar => {
                            const dbCar = cars.find(c => c.id === mockCar.id);
                            return <EditCarForm key={mockCar.id} mockCar={mockCar} dbCar={dbCar} onUpdated={fetchData} />;
                        })}
                    </div>
                </TabsContent>

                {/* TAB NEWS */}
                <TabsContent value="news">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
                        <h2 className="text-xl font-bold mb-4">Thêm Tin Tức Mới</h2>
                        <form onSubmit={handleNewsSubmit} className="grid grid-cols-1 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Tiêu đề bài viết</label>
                                <Input value={newsForm.title} onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })} placeholder="Tiêu đề..." />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Mô tả ngắn</label>
                                <textarea
                                    className="w-full flex min-h-[80px] rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                    value={newsForm.description}
                                    onChange={(e) => setNewsForm({ ...newsForm, description: e.target.value })}
                                    placeholder="Nội dung mô tả..."
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Thể loại</label>
                                    <Input value={newsForm.category} onChange={(e) => setNewsForm({ ...newsForm, category: e.target.value })} placeholder="vd: Tin tức" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Ảnh bìa hình chữ nhật ngang</label>
                                    <Input type="file" accept="image/*" onChange={(e) => setNewsFile(e.target.files?.[0] || null)} className="cursor-pointer" />
                                </div>
                            </div>
                            <div className="pt-2">
                                <Button type="submit" disabled={loading} className="bg-[#0088FF] hover:bg-[#0066CC]">
                                    {loading ? "Đang tải..." : "Lưu Tin Tức"}
                                </Button>
                            </div>
                        </form>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {news.map((n) => (
                            <div key={n.id} className="border rounded-lg bg-white overflow-hidden group shadow-sm flex flex-col">
                                <div className="relative aspect-[16/9] w-full">
                                    <Image src={n.image} alt={n.title} fill className="object-cover" />
                                    <div className="absolute top-2 left-2 bg-[#0062BD] text-white text-[10px] font-bold px-2 py-1 rounded-sm">{n.category}</div>
                                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Button variant="destructive" size="sm" className="h-7 w-7 p-0" onClick={() => handleDelete("news", n.id)}>
                                            X
                                        </Button>
                                    </div>
                                </div>
                                <div className="p-4 flex-1 flex flex-col">
                                    <h4 className="font-semibold text-sm line-clamp-2 mb-2">{n.title}</h4>
                                    <p className="text-xs text-gray-500 line-clamp-2 mt-auto">{n.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
