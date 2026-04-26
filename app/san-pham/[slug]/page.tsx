import { Metadata } from "next";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { mockHomeCars } from "@/utils/mockData";
import fs from "fs";
import path from "path";
import ProductDetailClient from "./ProductDetailClient";
import VF3Details from "./VF3Details";
import VF5Details from "./VF5Details";
import CarPrivileges from "./CarPrivileges";
import VF6Details from "./VF6Details";
import VF7Details from "./VF7Details";
import VF8Details from "./VF8Details";
import VF9Details from "./VF9Details";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;

    // Nạp dữ liệu DB để lấy thông tin SEO chính xác
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    const { data: carsData } = await supabase.from("cars").select("*");
    const cars = carsData || [];

    const mergedCars = mockHomeCars.map((mockCar) => {
        const dbCar = cars.find((c) => c.id === mockCar.id);
        return dbCar ? dbCar : mockCar;
    });

    const car = mergedCars.find((c) => c.name.toLowerCase().replace(/\s+/g, "-") === slug);

    if (!car) return { title: "Không tìm thấy sản phẩm" };

    const title = `VinFast ${car.name} | Thông số, Giá lăn bánh & Ưu đãi`;
    const description = `Chi tiết về ${car.name}: Giá chỉ từ ${car.price}, quãng đường ${car.distance}, ${car.slot}. Xem ngay các ưu đãi đặc quyền khi mua xe điện VinFast tại Hà Nội.`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [car.image],
        },
    };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Nạp dữ liệu DB
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    const { data: carsData } = await supabase.from("cars").select("*");
    const cars = carsData || [];

    // Nối dữ liệu
    const mergedCars = mockHomeCars.map((mockCar) => {
        const dbCar = cars.find((c) => c.id === mockCar.id);
        return dbCar ? dbCar : mockCar;
    });

    const car = mergedCars.find((c) => c.name.toLowerCase().replace(/\s+/g, "-") === slug);

    if (!car) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl font-bold text-gray-500">Không tìm thấy nhãn hiệu xe này!</h1>
            </div>
        );
    }

    // Đọc ảnh từ folder tương ứng (Bỏ khoảng trắng)
    let sliderImages: string[] = [];
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
            <CarPrivileges car={car} />

            {/* Phần hiển thị chi tiết riêng cho từng dòng xe (nếu có) */}
            <VF3Details car={car} />
            <VF5Details car={car} />
            <VF6Details car={car} />
            <VF7Details car={car} />
            <VF8Details car={car} />
            <VF9Details car={car} />
        </div>
    );
}
