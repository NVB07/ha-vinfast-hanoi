import { createClient } from "@supabase/supabase-js";
import { unstable_cache } from "next/cache";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error("Missing Supabase credentials in environment variables");
}

export const globalSupabase = createClient(supabaseUrl, supabaseKey);

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
            const { data, error } = await globalSupabase.from("cars").select("*").order("id", { ascending: true });
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

export const getCachedNews = unstable_cache(
    async () => {
        try {
            const { data, error } = await globalSupabase.from("news").select("*").order("created_at", { ascending: false });
            if (error) {
                console.error("Error fetching news from Supabase:", error);
                return [];
            }
            // Strip HTML and truncate description to 250 characters for lightweight list cache
            const cleanedData = (data || []).map((n: any) => ({
                ...n,
                description: n.description ? n.description.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").substring(0, 250) : ""
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

export const getCachedNewsArticle = (id: number) => unstable_cache(
    async () => {
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
    },
    [`news_article_${id}`],
    { tags: [`news_article_${id}`, "news"], revalidate: 3600 }
)();

