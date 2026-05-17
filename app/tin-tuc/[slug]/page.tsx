import { Metadata } from "next";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { toSlug, stripHtml } from "@/utils/slug";

interface NewsDetailParams {
    params: Promise<{ slug: string }>;
}

async function getArticle(slug: string) {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    let news: any[] = [];
    try {
        const { data: newsResult } = await supabase.from("news").select("*");
        if (newsResult) news = newsResult;
    } catch (e) {
        console.error(e);
    }

    // Mock fallback
    const displayNews =
        news.length > 0
            ? news
            : [1, 2, 3, 4, 5, 6].map((i) => ({
                  id: i,
                  title: `Tập đoàn Vingroup chính thức ra mắt mẫu xe SUV thế hệ mới ${i} với công nghệ tự lái tiên tiến`,
                  description: "Đây là bước đột phá công nghệ, đánh dấu kỷ nguyên mới trong ngành công nghiệp ô tô điện tử Việt Nam.",
                  image: `https://placehold.co/600x340/e9ecef/dee2e6?text=VinFast+News+${i}`,
                  category: "Tin tức",
                  created_at: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString(),
              }));

    const article = displayNews.find((n) => toSlug(n.title) === slug);
    const otherArticles = displayNews.filter((n) => toSlug(n.title) !== slug).slice(0, 4);

    return { article, otherArticles };
}

export async function generateMetadata({ params }: NewsDetailParams): Promise<Metadata> {
    const { slug } = await params;
    const { article } = await getArticle(slug);

    if (!article) {
        return { title: "Không tìm thấy bài viết" };
    }

    return {
        title: `${article.title} | VinFast Hà Nội`,
        description: stripHtml(article.description).substring(0, 160),
        openGraph: {
            title: article.title,
            description: stripHtml(article.description).substring(0, 160),
            images: [article.image || "/images/sources/manhliet.webp"],
        },
    };
}

export default async function NewsDetailPage({ params }: NewsDetailParams) {
    const { slug } = await params;
    const { article, otherArticles } = await getArticle(slug);

    if (!article) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50">
                <h1 className="text-2xl font-bold text-gray-500 mb-4">Không tìm thấy bài viết!</h1>
                <Link href="/tin-tuc">
                    <span className="text-[#0062BD] hover:underline text-sm font-semibold">&larr; Quay lại danh sách tin tức</span>
                </Link>
            </div>
        );
    }

    const formatDate = (isoString?: string) => {
        if (!isoString) return "";
        const date = new Date(isoString);
        return date.toLocaleDateString("vi-VN", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    return (
        <main className="flex-1 w-full bg-gray-50 py-10">
            <div className="container mx-auto px-4 max-w-5xl">
                {/* Breadcrumbs */}
                <nav className="text-xs text-gray-500 mb-6 flex items-center gap-2">
                    <Link href="/" className="hover:text-[#0062BD] transition-colors">
                        Trang chủ
                    </Link>
                    <span>/</span>
                    <Link href="/tin-tuc" className="hover:text-[#0062BD] transition-colors">
                        Tin tức
                    </Link>
                    <span>/</span>
                    <span className="text-gray-800 font-medium truncate max-w-[200px] sm:max-w-xs">{article.title}</span>
                </nav>

                {/* Main Content Card */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200/50">
                    {/* Category Badge & Date */}
                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-[#0062BD] text-white text-[9px] font-bold px-2.5 py-1 uppercase rounded tracking-wider shadow-sm">
                            {article.category || "Tin tức"}
                        </span>
                        {article.created_at && <span className="text-xs text-gray-400">Đăng ngày {formatDate(article.created_at)}</span>}
                    </div>

                    {/* Title */}
                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 leading-tight mb-6 tracking-tight">{article.title}</h1>

                    <hr className="w-12 border-t-[3px] border-[#0062BD] mb-6" />

                    {/* Article Main Cover Image */}
                    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-8 shadow-sm bg-gray-100">
                        <Image
                            src={article.image || `https://placehold.co/600x340/e9ecef/dee2e6?text=+`}
                            alt={article.title}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, 800px"
                        />
                    </div>

                    {/* Rich Text Body */}
                    <div className="text-sm leading-relaxed text-gray-600">
                        {article.description && article.description.includes("<") ? (
                            <div
                                className="[&_h1]:text-2xl [&_h1]:font-black [&_h1]:text-gray-800 [&_h1]:mt-6 [&_h1]:mb-3 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-gray-800 [&_h2]:mt-5 [&_h2]:mb-3 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-gray-800 [&_h3]:mt-4 [&_h3]:mb-2 [&_p]:mb-4 [&_p]:leading-relaxed [&_li]:mb-2 [&_ul]:pl-5 [&_ul]:list-disc [&_ol]:pl-5 [&_ol]:list-decimal [&_strong]:font-bold [&_strong]:text-gray-800 ql-editor"
                                dangerouslySetInnerHTML={{ __html: article.description.replace(/&nbsp;/g, " ") }}
                            />
                        ) : (
                            <p className="whitespace-pre-wrap">{article.description}</p>
                        )}
                    </div>
                </div>

                {/* Related Articles Section at Bottom */}
                <div className="mt-12 pt-10 border-t border-gray-200/80">
                    <h3 className="font-extrabold text-gray-800 text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-5 bg-[#0062BD] rounded-full inline-block"></span>
                        BÀI VIẾT KHÁC
                    </h3>

                    {otherArticles.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {otherArticles.slice(0, 3).map((item) => {
                                const otherSlug = toSlug(item.title);
                                return (
                                    <Link
                                        key={item.id}
                                        href={`/tin-tuc/${otherSlug}`}
                                        className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200/60 flex flex-col h-full hover:shadow-md transition-all duration-300"
                                    >
                                        <div className="relative aspect-[16/10] w-full bg-gray-50 overflow-hidden">
                                            <Image
                                                src={item.image || `https://placehold.co/600x340/e9ecef/dee2e6?text=+`}
                                                alt={item.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                sizes="(max-width: 768px) 100vw, 300px"
                                            />
                                        </div>
                                        <div className="p-4 flex flex-col flex-1">
                                            <span className="text-[10px] text-gray-400 mb-2 block font-medium">{formatDate(item.created_at)}</span>
                                            <h4 className="font-bold text-xs leading-snug text-gray-800 group-hover:text-[#0062BD] transition-colors line-clamp-2">
                                                {item.title}
                                            </h4>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    ) : (
                        <p className="text-xs text-gray-400 italic">Đang cập nhật các bài viết khác...</p>
                    )}
                </div>
            </div>
        </main>
    );
}
