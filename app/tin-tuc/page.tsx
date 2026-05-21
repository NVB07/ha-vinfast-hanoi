import { getCachedNews } from "@/utils/supabase/cached";
import Image from "next/image";
import Link from "next/link";
import { toSlug, stripHtml } from "@/utils/slug";
import { Button } from "@/components/ui/button";

export const metadata = {
    title: "Tin Tức & Hoạt Động | VinFast Hà Nội",
    description: "Cập nhật những tin tức mới nhất về các dòng xe điện VinFast, chương trình khuyến mãi, ưu đãi lăn bánh và sự kiện nổi bật của VinFast tại Hà Nội.",
};

export default async function NewsPage() {
    let news: any[] = [];

    try {
        const newsResult = await getCachedNews();
        if (newsResult) news = newsResult;
    } catch (error) {
        console.error("Lỗi khi tải tin tức từ Supabase cached:", error);
    }

    // Fallback mock data if DB is empty
    const displayNews =
        news.length > 0
            ? news
            : [1, 2, 3, 4, 5, 6].map((i) => ({
                  id: i,
                  title: `Tập đoàn Vingroup chính thức ra mắt mẫu xe SUV thế hệ mới ${i} với công nghệ tự lái tiên tiến`,
                  description: "Đây là bước đột phá công nghệ, đánh dấu kỷ nguyên mới trong ngành công nghiệp ô tô điện tử Việt Nam.",
                  image: `https://placehold.co/600x340/e9ecef/dee2e6?text=VinFast+News+${i}`,
                  category: "Tin tức",
              }));

    return (
        <main className="flex-1 w-full bg-gray-50 min-h-screen py-10">
            <div className=" mx-auto px-4  max-w-5xl">
                {/* Breadcrumbs */}
                <nav className="text-xs text-gray-500 mb-6 flex items-center gap-2">
                    <Link href="/" className="hover:text-[#0062BD] transition-colors">
                        Trang chủ
                    </Link>
                    <span>/</span>
                    <span className="text-gray-800 font-medium">Tin tức</span>
                </nav>

                {/* Hero Header */}
                <div className="bg-gradient-to-r from-[#0062BD] to-[#0088FF] text-white rounded-2xl p-8 md:p-12 mb-10 shadow-lg relative overflow-hidden">
                    <div className="relative z-10 max-w-2xl">
                        <span className="bg-white/20 text-white text-[10px] font-bold px-3 py-1 uppercase rounded-full tracking-wider mb-4 inline-block backdrop-blur-sm">
                            CẬP NHẬT MỖI NGÀY
                        </span>
                        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">TIN TỨC & SỰ KIỆN VINFAST</h1>
                        <p className="text-sm text-blue-50/90 leading-relaxed">
                            Khám phá các tin tức hoạt động mới nhất, chương trình ưu đãi độc quyền xe điện VinFast, và các thông tin công nghệ tiên tiến hàng đầu.
                        </p>
                    </div>
                    {/* Decorative Background Shapes */}
                    <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-15 hidden md:block pointer-events-none">
                        <div className="w-full h-full border-[10px] border-white rotate-45 rounded-[40px] translate-x-12 translate-y-12"></div>
                    </div>
                </div>

                {/* Grid News Cards */}
                {displayNews.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {displayNews.map((n) => {
                            const slug = toSlug(n.title);
                            return (
                                <Link
                                    key={n.id}
                                    href={`/tin-tuc/${slug}`}
                                    className="group bg-white overflow-hidden hover:shadow-md transition-all duration-300 rounded-xl border border-gray-200/60 flex flex-col h-full shadow-sm"
                                >
                                    <div className="relative aspect-[16/10] w-full bg-gray-100 overflow-hidden">
                                        <Image
                                            src={n.image || `https://placehold.co/600x340/e9ecef/dee2e6?text=+`}
                                            alt={n.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-all duration-500"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                        <div className="absolute top-3 left-3 bg-[#0062BD] text-white text-[9px] font-bold px-2.5 py-1 uppercase rounded tracking-wider shadow-sm">
                                            {n.category || "Tin tức"}
                                        </div>
                                    </div>
                                    <div className="p-5 flex flex-col flex-1">
                                        <h2 className="font-bold text-sm leading-snug group-hover:text-[#0062BD] transition-all line-clamp-2 mb-2 text-gray-800">
                                            {n.title}
                                        </h2>
                                        <p className="text-xs text-gray-500 line-clamp-3 mb-5 leading-relaxed">{stripHtml(n.description)}</p>
                                        <div className="mt-auto flex items-center justify-between text-[#0062BD] font-bold text-xs border-t border-gray-100 pt-4">
                                            <span>Đọc tiếp</span>
                                            <span>&rarr;</span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-xl border shadow-sm">
                        <p className="text-gray-500 italic">Đang cập nhật các bài viết mới nhất...</p>
                    </div>
                )}
            </div>
        </main>
    );
}
