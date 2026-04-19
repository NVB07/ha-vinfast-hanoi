import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import ProgressBarProvider from "@/components/ProgressBarProvider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "VinFast Hà Nội | Báo Giá Ô Tô Điện - Đăng Ký Lái Thử Ngay",
    description:
        "Đại lý phân phối xe ô tô điện VinFast (VF 3, VF 5, VF 6, VF 7, VF 8, VF 9) chính hãng tại Hà Nội. Cập nhật bảng giá lăn bánh mới nhất, chính sách cho thuê ưu đãi.",
    keywords: ["VinFast", "VinFast Hà Nội", "Ô tô điện", "VF 3", "VF 5", "VF 6", "VF 7", "VF 8", "VF 9", "Báo giá lăn bánh VinFast", "Giá xe VinFast"],
    openGraph: {
        title: "VinFast Hà Nội | Xe điện VinFast",
        description: "Trải nghiệm và khám phá hệ sinh thái xe điện VinFast chính hãng với nhiều tính năng vượt trội, ưu đãi lớn. Đăng ký lái thử miễn phí.",
        url: "https://ha-vinfast-hanoi.vercel.app", // Example URL
        siteName: "VinFast Hà Nội",
        images: [
            {
                url: "/images/sources/manhliet.webp",
                width: 1200,
                height: 630,
                alt: "Tinh Thần Việt Nam - VinFast",
            },
        ],
        locale: "vi_VN",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
            <body className="min-h-full flex flex-col font-sans antialiased text-[#333]">
                <ProgressBarProvider />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
