import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
    title: "Liên Hệ VinFast Hà Nội | Hotline & Địa Chỉ Showroom",
    description: "Liên hệ ngay với đại lý VinFast chính hãng tại Hà Nội. Hotline tư vấn, địa chỉ showroom, đặt lịch lái thử miễn phí và nhận báo giá ưu đãi nhất khu vực Hà Nội.",
    keywords: ["liên hệ VinFast Hà Nội", "hotline VinFast Hà Nội", "showroom VinFast Hà Nội", "địa chỉ VinFast Hà Nội", "đặt lịch lái thử VinFast"],
    alternates: { canonical: `${SITE_URL}/lien-he` },
    openGraph: {
        title: "Liên Hệ VinFast Hà Nội | Hotline & Showroom",
        description: "Liên hệ đại lý VinFast chính hãng tại Hà Nội. Tư vấn miễn phí, đặt lịch lái thử và nhận báo giá ưu đãi nhất.",
        url: `${SITE_URL}/lien-he`,
        type: "website",
    },
};

export default function LienHeLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
