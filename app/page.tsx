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
        const { data: slidersData } = await supabase.from("sliders").select("*").order("created_at", { ascending: false });
        if (slidersData) sliders = slidersData;

        const { data: carsData } = await supabase.from("cars").select("*").order("created_at", { ascending: false });
        if (carsData) cars = carsData;

        const { data: newsData } = await supabase.from("news").select("*").order("created_at", { ascending: false });
        if (newsData) news = newsData;
    } catch (error) {
        console.error("Lỗi khi kết nối Supabase:", error);
    }

    return <HomeClient sliders={sliders} cars={cars} news={news} />;
}
