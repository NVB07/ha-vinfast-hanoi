import { getCachedSliders, getCachedCars, getCachedNews } from "@/utils/supabase/cached";
import HomeClient from "./HomeClient";

export default async function Home() {
    let sliders: any[] = [];
    let cars: any[] = [];
    let news: any[] = [];

    try {
        const [slidersData, carsData, newsData] = await Promise.all([
            getCachedSliders(),
            getCachedCars(),
            getCachedNews(),
        ]);

        if (slidersData) sliders = slidersData;
        if (carsData) cars = carsData;
        if (newsData) news = newsData;
    } catch (error) {
        console.error("Lỗi khi kết nối Supabase cached:", error);
    }

    return <HomeClient sliders={sliders} cars={cars} news={news} />;
}
