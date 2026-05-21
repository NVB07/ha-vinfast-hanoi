import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Quản Trị | VinFast Hà Nội",
    description: "Trang quản trị nội bộ VinFast Hà Nội.",
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false,
        },
    },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
