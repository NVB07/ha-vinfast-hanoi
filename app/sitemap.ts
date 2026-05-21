import type { MetadataRoute } from "next";
import { globalSupabase } from "@/utils/supabase/cached";
import { mockHomeCars } from "@/utils/mockData";
import { toSlug } from "@/utils/slug";
import { SITE_URL } from "@/lib/config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const now = new Date();

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: SITE_URL,
            lastModified: now,
            changeFrequency: "daily",
            priority: 1.0,
        },
        {
            url: `${SITE_URL}/bang-gia-xe`,
            lastModified: now,
            changeFrequency: "daily",
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/tin-tuc`,
            lastModified: now,
            changeFrequency: "daily",
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/lien-he`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${SITE_URL}/tra-gop`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.6,
        },
        {
            url: `${SITE_URL}/tinh-gia-lan-banh`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.6,
        },
    ];

    // Car product pages — from mock + DB custom cars
    let carPages: MetadataRoute.Sitemap = [];
    try {
        const { data: dbCars } = await globalSupabase
            .from("cars")
            .select("id, name, updated_at")
            .order("id", { ascending: true });

        const allCars = dbCars || [];

        // Merge: default car slugs from mockHomeCars, custom cars from DB
        const defaultSlugs = mockHomeCars.map((c) => ({
            slug: c.name.toLowerCase().replace(/\s+/g, "-"),
            updatedAt: now,
        }));

        const customSlugs = allCars
            .filter((c: any) => c.id > 12)
            .map((c: any) => ({
                slug: c.name.toLowerCase().replace(/\s+/g, "-"),
                updatedAt: c.updated_at ? new Date(c.updated_at) : now,
            }));

        const allSlugs = [...defaultSlugs, ...customSlugs];

        carPages = allSlugs.map(({ slug, updatedAt }) => ({
            url: `${SITE_URL}/san-pham/${slug}`,
            lastModified: updatedAt,
            changeFrequency: "weekly" as const,
            priority: 0.85,
        }));
    } catch (err) {
        console.error("Sitemap: failed to load cars:", err);
        // Fallback: only mock cars
        carPages = mockHomeCars.map((c) => ({
            url: `${SITE_URL}/san-pham/${c.name.toLowerCase().replace(/\s+/g, "-")}`,
            lastModified: now,
            changeFrequency: "weekly" as const,
            priority: 0.85,
        }));
    }

    // News article pages
    let newsPages: MetadataRoute.Sitemap = [];
    try {
        const { data: newsData } = await globalSupabase
            .from("news")
            .select("id, title, created_at, updated_at")
            .order("created_at", { ascending: false });

        if (newsData && newsData.length > 0) {
            newsPages = newsData.map((n: any) => ({
                url: `${SITE_URL}/tin-tuc/${toSlug(n.title)}`,
                lastModified: n.updated_at ? new Date(n.updated_at) : new Date(n.created_at),
                changeFrequency: "monthly" as const,
                priority: 0.7,
            }));
        }
    } catch (err) {
        console.error("Sitemap: failed to load news:", err);
    }

    return [...staticPages, ...carPages, ...newsPages];
}
