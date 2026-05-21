/**
 * Cấu hình toàn cục của website.
 * Để đổi domain, chỉ cần sửa NEXT_PUBLIC_SITE_URL trong .env.local
 * hoặc trong Vercel Dashboard > Settings > Environment Variables
 */
export const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || "https://ha-vinfast-hanoi.vercel.app";

/** Ảnh OG mặc định cho toàn site */
export const OG_IMAGE = "/images/promo_banner.png";
