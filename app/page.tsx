import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import HomeClient from "./HomeClient";

export default async function Home() {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    // Dùng try-catch để phòng trường hợp DB chưa tạo bảng hoặc lỗi kết nối, vẫn render được trang với mock data
    let sliders = [];
    let cars = [];
    let news = [];

    try {
        const [slidersResult, carsResult, newsResult] = await Promise.all([
            supabase.from("sliders").select("*").order("created_at", { ascending: false }),
            supabase.from("cars").select("*").order("created_at", { ascending: false }),
            supabase.from("news").select("*").order("created_at", { ascending: false }),
        ]);

        if (slidersResult.data) sliders = slidersResult.data;
        if (carsResult.data) cars = carsResult.data;
        if (newsResult.data) news = newsResult.data;
    } catch (error) {
        console.error("Lỗi khi kết nối Supabase:", error);
    }

    return <HomeClient sliders={sliders} cars={cars} news={news} />;
}
