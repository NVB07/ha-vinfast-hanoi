import { createClient } from "@supabase/supabase-js";
import { unstable_cache } from "next/cache";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error("Missing Supabase credentials in environment variables");
}

export const globalSupabase = createClient(supabaseUrl, supabaseKey, {
    global: {
        fetch: (url, options) => fetch(url, { ...options, cache: "no-store" })
    }
});

export const getCachedGeneralSettings = unstable_cache(
    async () => {
        try {
            const { data, error } = await globalSupabase.from("general_settings").select("*").single();
            if (error) {
                console.error("Error fetching general_settings from Supabase:", error);
                return null;
            }
            return data;
        } catch (err) {
            console.error("Failed to get general_settings:", err);
            return null;
        }
    },
    ["general_settings"],
    { tags: ["general_settings"], revalidate: 3600 }
);

export const getCachedSliders = unstable_cache(
    async () => {
        try {
            const { data, error } = await globalSupabase.from("sliders").select("*").order("created_at", { ascending: false });
            if (error) {
                console.error("Error fetching sliders from Supabase:", error);
                return [];
            }
            return data || [];
        } catch (err) {
            console.error("Failed to get sliders:", err);
            return [];
        }
    },
    ["sliders"],
    { tags: ["sliders"], revalidate: 3600 }
);

export const getCachedCars = unstable_cache(
    async () => {
        try {
            const { data, error } = await globalSupabase
                .from("cars")
                .select("id, name, image, type, price, distance, slot, created_at, power, battery_price, overtime_fee, price_plus, distance_plus, power_plus, price_promo, price_plus_promo, slider_images, is_pinned, pin_order, menu_order")
                .order("id", { ascending: true });
            if (error) {
                console.error("Error fetching cars from Supabase:", error);
                return [];
            }
            return data || [];
        } catch (err) {
            console.error("Failed to get cars:", err);
            return [];
        }
    },
    ["cars"],
    { tags: ["cars"], revalidate: 3600 }
);

export const getCachedCarMoreInfo = (id: number) => unstable_cache(
    async () => {
        try {
            const { data, error } = await globalSupabase
                .from("cars")
                .select("more_info, descript")
                .eq("id", id)
                .single();
            if (error) {
                console.error(`Error fetching detail fields for car ${id} from Supabase:`, error);
                return null;
            }
            return data ? { more_info: data.more_info || null, descript: data.descript || null } : null;
        } catch (err) {
            console.error(`Failed to get detail fields for car ${id}:`, err);
            return null;
        }
    },
    [`car_more_info_${id}`],
    { tags: [`car_more_info_${id}`, "cars"], revalidate: 3600 }
)();

export const getCachedNews = unstable_cache(
    async () => {
        try {
            const { data, error } = await globalSupabase
                .from("news")
                .select("id, title, image, category, created_at, is_pinned")
                .order("created_at", { ascending: false });
            if (error) {
                console.error("Error fetching news from Supabase:", error);
                return [];
            }
            // Generate professional, lightweight descriptions to completely bypass large DB/HTML cache issues
            const cleanedData = (data || []).map((n: any) => ({
                ...n,
                description: `Cập nhật tin tức hoạt động mới nhất, chương trình khuyến mãi và ưu đãi lăn bánh cực kỳ hấp dẫn liên quan đến ${n.title || "xe điện VinFast"} tại Hà Nội.`
            }));
            return cleanedData;
        } catch (err) {
            console.error("Failed to get news:", err);
            return [];
        }
    },
    ["news"],
    { tags: ["news"], revalidate: 3600 }
);

export const getCachedNewsArticle = async (id: number) => {
    try {
        const { data, error } = await globalSupabase.from("news").select("*").eq("id", id).single();
        if (error) {
            console.error("Error fetching single news from Supabase:", error);
            return null;
        }
        return data;
    } catch (err) {
        console.error("Failed to get single news:", err);
        return null;
    }
};

