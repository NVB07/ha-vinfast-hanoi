import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import ProgressBarProvider from "@/components/ProgressBarProvider";
import { SITE_URL, OG_IMAGE } from "@/lib/config";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});



export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: "VinFast Hà Nội | Đại Lý Xe Điện VinFast Chính Hãng - Báo Giá & Lái Thử",
        template: "%s | VinFast Hà Nội",
    },
    description:
        "Đại lý phân phối xe điện VinFast chính hãng tại Hà Nội. Xem bảng giá VF 3, VF 5, VF 6, VF 7, VF 8, VF 9 mới nhất, chính sách trả góp ưu đãi, lái thử miễn phí. Liên hệ ngay để nhận báo giá tốt nhất!",
    keywords: [
        "VinFast Hà Nội", "Đại lý VinFast Hà Nội", "Mua xe VinFast", "Ô tô điện VinFast",
        "VF 3", "VF 5", "VF 6", "VF 7", "VF 8", "VF 9", "VF3", "VF5", "VF6", "VF7", "VF8", "VF9",
        "Bảng giá xe VinFast", "Giá lăn bánh VinFast", "VinFast trả góp", "Lái thử VinFast miễn phí",
        "Xe điện Hà Nội", "Mua xe điện", "VinFast chính hãng",
    ],
    authors: [{ name: "VinFast Hà Nội", url: SITE_URL }],
    creator: "VinFast Hà Nội",
    publisher: "VinFast Hà Nội",
    alternates: {
        canonical: SITE_URL,
    },
    openGraph: {
        title: "VinFast Hà Nội | Đại Lý Xe Điện Chính Hãng",
        description: "Trải nghiệm và khám phá hệ sinh thái xe điện VinFast chính hãng với nhiều tính năng vượt trội, ưu đãi lớn. Đăng ký lái thử miễn phí tại Hà Nội.",
        url: SITE_URL,
        siteName: "VinFast Hà Nội",
        images: [
            {
                url: OG_IMAGE,
                width: 1200,
                height: 630,
                alt: "VinFast Hà Nội - Đại lý xe điện chính hãng",
            },
        ],
        locale: "vi_VN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "VinFast Hà Nội | Đại Lý Xe Điện Chính Hãng",
        description: "Xem bảng giá xe điện VinFast mới nhất, nhận tư vấn và đặt lịch lái thử miễn phí tại Hà Nội.",
        images: [OG_IMAGE],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "gxDguHkDQTd3BvciwdtFkjm__IqiLRUdQPFvtBfiMe0",
    },
};


const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: "VinFast Hà Nội",
    description: "Đại lý phân phối xe điện VinFast chính hãng tại Hà Nội",
    url: SITE_URL,
    logo: `${SITE_URL}/logo-vinfast.gif`,
    image: `${SITE_URL}/images/sources/manhliet.webp`,
    telephone: "1900232389",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Hà Nội",
        addressCountry: "VN",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 21.0227,
        longitude: 105.8412,
    },
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "07:30",
            closes: "18:00",
        },
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday", "Sunday"],
            opens: "08:00",
            closes: "17:30",
        },
    ],
    sameAs: [
        "https://www.facebook.com/vinfasthanoi",
        "https://www.youtube.com/@VinFast",
    ],
    priceRange: "ƯƯƯ",
    servesCuisine: undefined,
    areaServed: {
        "@type": "City",
        name: "Hà Nội",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="min-h-full flex flex-col font-sans antialiased text-[#333]">
                <ProgressBarProvider />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
