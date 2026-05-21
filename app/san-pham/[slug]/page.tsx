import { Metadata } from "next";
import { getCachedCars } from "@/utils/supabase/cached";
import { mockHomeCars } from "@/utils/mockData";
import fs from "fs";
import path from "path";
import { SITE_URL } from "@/lib/config";
import ProductDetailClient from "./ProductDetailClient";
import VF3Details from "./VF3Details";
import VF5Details from "./VF5Details";
import CarPrivileges from "./CarPrivileges";
import VF6Details from "./VF6Details";
import VF7Details from "./VF7Details";
import VF8Details from "./VF8Details";
import VF9Details from "./VF9Details";
import MINIOGREENDetails from "./minio-green";
import HERIOGREENDetails from "./herio-green";
import NERIOGREENDetails from "./nerio-green";
import LIMOGREENDetails from "./limo-green";

import ECVANDetails from "./ec-van";
import EBUSDetails from "./e-bus";

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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;

    // Nạp dữ liệu DB để lấy thông tin SEO chính xác
    const carsData = await getCachedCars();
    const cars = carsData || [];

    const dbCars = cars || [];
    const mergedCars = mockHomeCars.map((mockCar) => {
        const dbCar = dbCars.find((c) => c.id === mockCar.id);
        return dbCar ? { ...mockCar, ...dbCar } : mockCar;
    });
    const customCars = dbCars.filter((dbCar) => !mockHomeCars.some((m) => m.id === dbCar.id));
    const allCars = [...mergedCars, ...customCars];

    const car = allCars.find((c) => c.name.toLowerCase().replace(/\s+/g, "-") === slug);

    if (!car) return { title: "Không tìm thấy sản phẩm" };

    const title = `VinFast ${car.name} | Thông số, Giá lăn bánh & Ưu đãi`;
    const description = `Chi tiết về ${car.name}: Giá chỉ từ ${car.price}, quãng đường ${car.distance}, ${car.slot}. Xem ngay các ưu đãi đặc quyền khi mua xe điện VinFast tại Hà Nội.`;

    return {
        title,
        description,
        alternates: {
            canonical: `${SITE_URL}/san-pham/${slug}`,
        },
        openGraph: {
            title,
            description,
            url: `${SITE_URL}/san-pham/${slug}`,
            images: car.image ? [{ url: car.image, alt: `VinFast ${car.name}` }] : [],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: car.image ? [car.image] : [],
        },
    };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Nạp dữ liệu DB
    const carsData = await getCachedCars();
    const cars = carsData || [];

    // Nối dữ liệu
    const dbCars = cars || [];
    const mergedCars = mockHomeCars.map((mockCar) => {
        const dbCar = dbCars.find((c) => c.id === mockCar.id);
        return dbCar ? { ...mockCar, ...dbCar } : mockCar;
    });
    const customCars = dbCars.filter((dbCar) => !mockHomeCars.some((m) => m.id === dbCar.id));
    const allCars = [...mergedCars, ...customCars];

    const car = allCars.find((c) => c.name.toLowerCase().replace(/\s+/g, "-") === slug);

    if (!car) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl font-bold text-gray-500">Không tìm thấy nhãn hiệu xe này!</h1>
            </div>
        );
    }

    // Đọc ảnh slider từ database (Cloudinary) hoặc từ folder tương ứng (Bỏ khoảng trắng)
    let sliderImages: string[] = [];
    if (car.slider_images) {
        try {
            if (car.slider_images.startsWith("[") && car.slider_images.endsWith("]")) {
                sliderImages = JSON.parse(car.slider_images);
            } else {
                sliderImages = car.slider_images.split(",").map((s: string) => s.trim()).filter(Boolean);
            }
        } catch {
            sliderImages = car.slider_images.split(",").map((s: string) => s.trim()).filter(Boolean);
        }
    } else {
        const carFolderName = car.name.replace(/\s+/g, "");
        const dirPath = path.join(process.cwd(), "public", "images", "cars", carFolderName);
        try {
            if (fs.existsSync(dirPath)) {
                const files = fs.readdirSync(dirPath);
                sliderImages = files.filter((file) => /\.(png|jpe?g|webp|gif)$/i.test(file)).map((file) => `/images/cars/${carFolderName}/${file}`);
            }
        } catch (e) {
            console.error(e);
        }
    }

    // Mặc định nạp ảnh đại diện nếu thư mục con trống
    if (sliderImages.length === 0) {
        sliderImages.push(car.image);
    }

    return (
        <div className="bg-white min-h-screen py-10">
            <div className="container mx-auto px-4 max-w-6xl flex gap-10 items-start lg:flex-row flex-col">
                <ProductDetailClient car={car} sliderImages={sliderImages} />
            </div>

            {/* Phần hiển thị chi tiết chung - Các đặc quyền */}
            <CarPrivileges car={car.name !== "EC VAN" && car.name !== "E BUS" ? car : null} />

            {/* Thông tin liên quan (Rich Text) cho các xe custom */}
            {car.more_info && !isSystemDefaultCar(car.name, car.id) && (
                <div className="container mx-auto px-4 max-w-6xl mt-8 mb-16">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="h-px bg-gray-200 flex-1"></div>
                        <h2 className="text-xl md:text-2xl font-bold uppercase text-gray-800 text-center tracking-wide px-4">
                            Thông Tin Chi Tiết Dòng Xe {car.name?.toUpperCase()}
                        </h2>
                        <div className="h-px bg-gray-200 flex-1"></div>
                    </div>
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 md:p-10 prose prose-blue max-w-none text-gray-700 leading-relaxed [&_h1]:text-2xl [&_h1]:font-black [&_h1]:text-gray-900 [&_h1]:mt-6 [&_h1]:mb-4 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-5 [&_h2]:mb-3 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-gray-800 [&_h3]:mt-4 [&_h3]:mb-2 [&_p]:mb-4 [&_p]:text-sm [&_p]:md:text-base [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul_li]:mb-1.5 [&_ul_li]:text-sm [&_ul_li]:md:text-base [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol_li]:mb-1.5 [&_ol_li]:text-sm [&_ol_li]:md:text-base [&_strong]:font-bold [&_strong]:text-gray-900">
                        <div dangerouslySetInnerHTML={{ __html: car.more_info }} />
                    </div>
                </div>
            )}

            {/* Phần hiển thị chi tiết riêng cho từng dòng xe (nếu có) */}
            <VF3Details car={car} />
            <VF5Details car={car} />
            <VF6Details car={car} />
            <VF7Details car={car} />
            <VF8Details car={car} />
            <VF9Details car={car} />
            <MINIOGREENDetails car={car} />
            <HERIOGREENDetails car={car} />
            <NERIOGREENDetails car={car} />
            <LIMOGREENDetails car={car} />
            <ECVANDetails car={car} />
            <EBUSDetails car={car} />
        </div>
    );
}
