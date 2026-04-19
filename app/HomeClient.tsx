"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

import { Carousel, CarouselContent, CarouselItem, useCarousel } from "@/components/ui/carousel";

interface HomeClientProps {
    sliders: any[];
    cars: any[];
    news: any[];
}

import { mockSliders, mockHomeCars } from "@/utils/mockData";

function SliderArrows() {
    const { scrollPrev, scrollNext } = useCarousel();
    return (
        <>
            <button
                type="button"
                onClick={scrollPrev}
                aria-label="Previous slide"
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-12 md:h-12 rounded-full bg-black/20 hover:bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center cursor-pointer border-none outline-none"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>
            <button
                type="button"
                onClick={scrollNext}
                aria-label="Next slide"
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-12 md:h-12 rounded-full bg-black/20 hover:bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center cursor-pointer border-none outline-none"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                </svg>
            </button>
        </>
    );
}

export default function HomeClient({ sliders, cars, news }: HomeClientProps) {
    const displaySliders = sliders.length > 0 ? sliders.map((s) => s.image_url) : mockSliders;
    const displayCars = mockHomeCars.map((mockCar) => {
        const dbCar = cars.find((c) => c.id === mockCar.id);
        return dbCar ? dbCar : mockCar;
    });
    const router = useRouter();
    const displayNews =
        news.length > 0
            ? news
            : [1, 2, 3, 4, 5, 6, 7, 8].map((i) => ({
                  id: i,
                  title: `Tập đoàn Vingroup chính thức ra mắt mẫu xe SUV thế hệ mới ${i} với công nghệ tự lái tiên tiến`,
                  description: "Đây là bước đột phá công nghệ, đánh dấu kỷ nguyên mới trong ngành công nghiệp ô tô điện tử Việt Nam.",
                  image: `https://placehold.co/600x340/e9ecef/dee2e6?text=+`,
                  category: "Tin tức",
              }));

    return (
        <main className="flex-1 w-full">
            {/* Hero Section - Slider using Shadcn Carousel */}
            <section className="relative w-full overflow-hidden flex flex-col group">
                <Carousel opts={{ align: "start", loop: true }} className="w-full h-full">
                    <CarouselContent>
                        {displaySliders.map((item, index) => (
                            <CarouselItem key={index} className="relative h-[300px] sm:h-[450px] md:h-[650px] lg:h-[750px] w-full">
                                <a href="#name_registration" className="block w-full h-full relative overflow-hidden">
                                    {/* background blur */}
                                    <Image src={item} alt="" fill className="object-cover blur-xl scale-110" priority={index === 0} loading={index === 0 ? "eager" : "lazy"} sizes="100vw" />

                                    {/* main image (FADE REAL) */}
                                    <div className="absolute inset-0 z-10 flex items-center justify-center">
                                        <Image
                                            src={item}
                                            alt=""
                                            fill
                                            priority={index === 0}
                                            loading={index === 0 ? "eager" : "lazy"}
                                            sizes="100vw"
                                            className="object-contain"
                                            style={{
                                                WebkitMaskImage: `
  linear-gradient(to right, transparent, black 15%, black 85%, transparent),
  linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)
`,
                                                maskImage: `
  linear-gradient(to right, transparent, black 15%, black 85%, transparent),
  linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)
`,
                                                WebkitMaskComposite: "destination-in",
                                                maskComposite: "intersect",

                                                WebkitMaskRepeat: "no-repeat",
                                                maskRepeat: "no-repeat",

                                                WebkitMaskSize: "100% 100%",
                                                maskSize: "100% 100%",
                                            }}
                                        />
                                    </div>
                                </a>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <SliderArrows />
                </Carousel>
            </section>

            {/* Model Selector Section */}
            <section className="py-20 md:py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-[1400px] flex flex-col items-center">
                    <h2 className="text-sm md:text-base font-bold text-gray-600 mb-8 uppercase tracking-widest text-center">KHÁM PHÁ CÁC DÒNG XE VINFAST</h2>

                    <Tabs defaultValue={displayCars.length > 0 ? displayCars[0].name.toLowerCase().replace(/ /g, "") : "vf3"} className="w-full">
                        <div className="flex flex-col items-center mb-6">
                            {/* Unified TabsList for proper Context Management in Base-UI */}
                            <TabsList className="bg-transparent !h-auto min-h-fit p-0 flex flex-col items-center gap-2 md:gap-3 mb-6 w-full">
                                {/* Row 1: Car Models */}
                                <div className="flex flex-wrap justify-center gap-1.5 md:gap-3 w-full">
                                    {displayCars.slice(0, 8).map((model) => (
                                        <TabsTrigger
                                            key={model.id}
                                            value={model.name.toLowerCase().replace(/ /g, "")}
                                            className="bg-white border border-gray-400 text-gray-700 rounded-md px-2.5 py-1.5 md:px-4 flex-none !h-auto text-[10px] md:text-[11px] font-bold uppercase transition-all hover:bg-gray-50 data-active:border-[#0088FF] data-active:bg-[#0088FF] data-active:text-white cursor-pointer shadow-sm"
                                        >
                                            {model.name}
                                        </TabsTrigger>
                                    ))}
                                </div>
                                {/* Row 2: Car Models */}
                                <div className="flex flex-wrap justify-center gap-1.5 md:gap-3 w-full">
                                    {displayCars.slice(8).map((model) => (
                                        <TabsTrigger
                                            key={model.id}
                                            value={model.name.toLowerCase().replace(/ /g, "")}
                                            className="bg-white border border-gray-400 text-gray-700 rounded-md px-2.5 py-1.5 md:px-4 flex-none !h-auto text-[10px] md:text-[11px] font-bold uppercase transition-all hover:bg-gray-50 data-active:border-[#0088FF] data-active:bg-[#0088FF] data-active:text-white cursor-pointer shadow-sm"
                                        >
                                            {model.name}
                                        </TabsTrigger>
                                    ))}
                                </div>
                            </TabsList>
                        </div>

                        {displayCars.map((model) => (
                            <TabsContent
                                key={model.id}
                                value={model.name.toLowerCase().replace(/ /g, "")}
                                className="relative flex flex-col items-center justify-center animate-in fade-in duration-500"
                            >
                                <div className="relative z-10 w-full max-w-4xl">
                                    <div className="flex flex-col items-center">
                                        <div className="relative w-full h-[250px] md:h-[400px]">
                                            <Image src={model.image} alt={model.name} fill className="object-contain" sizes="(max-width: 768px) 100vw, 800px" loading="lazy" />
                                        </div>

                                        {/* Specs Grid - Specific 4 columns */}
                                        <div className="flex justify-between w-full max-w-3xl mt-4 pt-4">
                                            <div className="flex-1 flex flex-col items-center text-center px-1 md:px-4">
                                                <div className="text-[11px] text-gray-500 mb-1">Dòng xe</div>
                                                <div className="text-xs md:text-sm font-bold text-gray-800">{model.type}</div>
                                            </div>
                                            <div className="flex-1 flex flex-col items-center text-center px-1 md:px-4">
                                                <div className="text-[11px] text-gray-500 mb-1">Số chỗ ngồi</div>
                                                <div className="text-xs md:text-sm font-bold text-gray-800">{model.slot}</div>
                                            </div>
                                            <div className="flex-1 flex flex-col items-center text-center px-1 md:px-4">
                                                <div className="text-[11px] text-gray-500 mb-1">Quãng đường</div>
                                                <div className="text-xs md:text-sm font-bold text-gray-800">{model.distance}</div>
                                            </div>
                                            <div className="flex-1 flex flex-col items-center text-center px-1 md:px-4">
                                                <div className="text-[11px] text-gray-500 mb-1">Giá chỉ từ</div>
                                                <div className="text-xs md:text-sm font-bold text-gray-800">{model.price}</div>
                                            </div>
                                        </div>

                                        {/* CTAs */}
                                        <div className="flex gap-4 mt-12">
                                            <Button className="bg-[#0088FF] hover:bg-[#0066CC] text-white font-bold rounded-full px-8 h-10 text-xs shadow transition-all">
                                                Đăng ký lái thử
                                            </Button>
                                            <Button
                                                onClick={() => router.push(`/san-pham/${model.name.toLowerCase().replace(/ /g, "-")}`)}
                                                variant="outline"
                                                className="border-[#0088FF] text-[#0088FF] font-bold bg-white rounded-full px-8 h-10 text-xs hover:bg-blue-50 transition-all border-2"
                                            >
                                                Xem chi tiết
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </section>

            {/* Feature Grid - Specific 3 item layout */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[450px]">
                        {/* Left Column: Two Cards Stacked Vertically */}
                        <div className="flex flex-col gap-4">
                            {/* Promo Image */}
                            <div className="relative flex-1 bg-black rounded-md overflow-hidden group shadow min-h-[200px]">
                                <Image src="/images/sources/sacxe.webp" alt="Promo" fill className="object-cover group-hover:scale-105 transition-all duration-700" loading="lazy" sizes="(max-width: 768px) 100vw, 50vw" />
                                <div className="absolute inset-0 bg-blue-900/30"></div>
                                <div className="absolute bottom-0 left-0  text-white text-xl  z-10 w-full  p-2 bg-black/50">
                                    <p className="uppercase font-bold">Pin & Trạm sạc ô tô điện</p>
                                    <p className="text-[14px]  italic">
                                        Với phương châm luôn đặt lợi ích Khách hàng lên hàng đầu, VinFast áp dụng chính sách cho thuê pin độc đáo, ưu việt và khác biệt
                                        với tất cả các mô hình cho thuê pin từ trước tới nay trên thế giới.
                                    </p>
                                </div>
                            </div>
                            {/* Warranty Image */}
                            <div className="relative flex-1 bg-black rounded-md overflow-hidden group shadow min-h-[200px]">
                                <Image
                                    src="/images/sources/baohanh10nam.jpg"
                                    alt="Warranty"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-all duration-700"
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 w-full bg-black/50 p-2 text-white    z-10">
                                    <p className="uppercase font-bold text-xl">BẢO HÀNH 10 NĂM</p>
                                    <p className="text-[14px]  italic">
                                        Với phương châm luôn đặt lợi ích Khách hàng lên hàng đầu, VinFast áp dụng chính sách bảo hành 10 năm cho tất cả các dòng xe của
                                        VinFast.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: One Large Portrait Image */}
                        <div className="relative h-full bg-white rounded-md overflow-hidden group shadow min-h-[400px] border border-gray-100 flex flex-col relative">
                            <div className="p-8 pb-0">
                                <h3 className="text-xl font-bold text-gray-800 uppercase mb-2">HỆ SINH THÁI TOÀN DIỆN</h3>
                                <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                                    Giải pháp trạm sạc đa dạng, phủ sóng toàn quốc mang lại sự tiện lợi và an tâm.
                                </p>
                            </div>
                            <div className="relative flex-1 w-full mt-4">
                                <Image
                                    src="/images/sources/dausac.webp"
                                    alt="Charger"
                                    fill
                                    className="object-contain object-bottom group-hover:scale-[1.03] transition-all duration-700"
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Warranty & Service Section */}
            <section className="bg-gradient-to-r from-[#eef1f5] to-[#f4f6f9] py-16 md:py-20 overflow-hidden relative">
                <div className="absolute top-1/2 left-3/4 md:left-[60%] -translate-y-1/2 -translate-x-1/2 z-0 opacity-80 pointer-events-none scale-75 md:scale-100">
                    <div className="w-[800px] h-[800px] border-[1px] md:border-[2px] border-white/60 rotate-45 rounded-[40px] md:rounded-[80px] origin-center -ml-20"></div>
                    <div className="w-[600px] h-[600px] border-[2px] md:border-[4px] border-white/80 rotate-45 rounded-[30px] md:rounded-[60px] origin-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block"></div>
                    <div className="w-[400px] h-[400px] border-[5px] md:border-[10px] border-white rotate-45 rounded-[20px] md:rounded-[40px] origin-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </div>

                <div className="container mx-auto px-4 max-w-[1300px] flex flex-col md:flex-row items-center w-full min-h-[400px] md:min-h-[500px] relative z-10">
                    <div className="md:w-[45%] lg:w-[40%] flex flex-col justify-center items-center md:items-start text-center md:text-left mb-12 md:mb-0 md:pl-12 lg:pl-16 relative z-20">
                        <h2 className="text-[#333] text-lg md:text-xl font-bold uppercase mb-4 tracking-wide pr-4">BẢO HÀNH &amp; DỊCH VỤ</h2>
                        <p className="text-gray-600 text-xs md:text-[13px] lg:text-sm mb-8 max-w-sm leading-relaxed pr-2">
                            VinFast Lê Quang Đạo đã đầu tư nghiêm túc và bài bản để phát triển hệ thống Showroom, Nhà phân phối và xưởng dịch vụ rộng khắp, đáp ứng tối đa
                            nhu cầu của Khách hàng.
                        </p>
                        <div className="flex flex-row gap-3">
                            <Button className="bg-[#0088FF] hover:bg-[#0066CC] text-white font-bold rounded px-5 md:px-7 h-10 text-[10px] md:text-[11px] uppercase shadow transition-all tracking-wider md:w-auto w-[160px]">
                                Đặt lịch bảo dưỡng
                            </Button>
                            <Button
                                variant="outline"
                                className="border-none bg-white text-gray-700 font-bold rounded px-5 md:px-7 h-10 text-[10px] md:text-[11px] uppercase hover:bg-gray-50 shadow-sm transition-all tracking-wider md:w-auto w-[120px]"
                            >
                                Chính sách
                            </Button>
                        </div>
                    </div>

                    <div className="md:w-[55%] lg:w-[60%] relative h-[300px] md:h-[500px] w-full flex items-center justify-center md:justify-end relative z-10">
                        <Image src="/images/sources/vf9mn.webp" alt="VinFast VF9 Service" fill className="object-contain md:object-right drop-shadow-2xl z-10" loading="lazy" sizes="(max-width: 768px) 100vw, 60vw" />
                    </div>
                </div>
            </section>

            {/* Spirit Section - Full Image Background */}
            <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-[#222]">
                <Image src="/images/sources/manhliet.webp" alt="Vietnam Spirit Background" fill className="object-cover" loading="lazy" sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l  from-black/70 via-black/50 to-transparent" />

                <div className="relative container mx-auto px-4 h-full max-w-[1300px] flex items-center justify-end">
                    <div className="w-full md:w-[50%] lg:w-[45%] flex flex-col justify-center items-start pl-4 md:pl-0 pr-4 md:pr-12 lg:pr-16">
                        <h3 className="text-white font-bold text-xl md:text-2xl  uppercase text-shadow-sm  mb-4 leading-snug drop-shadow-md">
                            Mãnh liệt Tinh thần Việt Nam <br />
                            Vì Tương lai Xanh
                        </h3>
                        <p className="text-white text-shadow-sm text-[13px] md:text-[15px]  mb-6 leading-relaxed drop-shadow-sm text-justify md:text-left">
                            Chiến dịch Mãnh liệt Tinh thần Việt Nam – Vì Tương lai Xanh là lời khẳng định mạnh mẽ của VinFast trong hành trình thúc đẩy cuộc cách mạng xe
                            điện và kiến tạo một tương lai bền vững. Chiến dịch không chỉ thể hiện tinh thần tiên phong của thương hiệu Việt trên bản đồ xe điện toàn cầu
                            mà còn kêu gọi cộng đồng cùng chung tay chuyển đổi xanh, góp phần xây dựng một Việt Nam phát triển vững bền, nơi giao thông không chỉ hiện đại
                            mà còn thân thiện với môi trường.
                        </p>
                        <Button className="bg-[#0088FF] hover:bg-[#0066CC] text-white font-bold rounded px-6 py-2.5 h-10 text-[10px] md:text-[11px] uppercase shadow transition-all tracking-wider inline-flex w-auto outline-none border-none">
                            XEM CHI TIẾT
                        </Button>
                    </div>
                </div>
            </section>

            {/* Gallery & News - High Level Responsive */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
                        <div className="group relative h-[250px] overflow-hidden rounded-md shadow-sm bg-black">
                            <Image
                                src="/images/sources/daily.webp"
                                alt="Store"
                                fill
                                className="object-cover group-hover:scale-105 transition-all duration-700 opacity-80"
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                            <div className="absolute bottom-6 left-6 text-white flex items-center justify-between w-[90%]">
                                <div>
                                    <div className="text-[10px] font-bold uppercase text-[#4aa5ff] mb-1 tracking-widest">HỆ THỐNG</div>
                                    <h4 className="text-xl font-bold uppercase tracking-tight">SHOWROOM VÀ ĐẠI LÝ</h4>
                                </div>
                            </div>
                        </div>
                        <div className="group relative h-[250px] overflow-hidden rounded-md shadow-sm bg-black">
                            <Image
                                src="/images/sources/toancau.webp"
                                alt="Community"
                                fill
                                className="object-cover group-hover:scale-105 transition-all duration-700 opacity-80"
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                            <div className="absolute bottom-6 left-6 text-white flex items-center justify-between w-[90%]">
                                <div>
                                    <div className="text-[10px] font-bold uppercase text-[#4aa5ff] mb-1 tracking-widest">KẾT NỐI TOÀN CẦU</div>
                                    <h4 className="text-xl font-bold uppercase tracking-tight">CỘNG ĐỒNG VINFAST TOÀN CẦU</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mb-10 text-[#0062BD]">
                        <h3 className="text-2xl font-bold uppercase tracking-widest mb-1">TIN TỨC HOẠT ĐỘNG</h3>
                        <div className="flex justify-center flex-wrap gap-2 text-xs font-semibold"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {displayNews.map((n) => (
                            <article
                                key={n.id}
                                className="group cursor-pointer bg-white overflow-hidden hover:shadow-sm transition-shadow rounded-md border border-gray-100 flex flex-col h-full shadow-sm"
                            >
                                <div className="relative aspect-[16/9] w-full bg-gray-100">
                                    <Image
                                        src={n.image || `https://placehold.co/600x340/e9ecef/dee2e6?text=+`}
                                        alt={n.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-all duration-500"
                                        loading="lazy"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute top-2 left-2 bg-[#0062BD] text-white text-[10px] font-bold px-2 py-1 uppercase rounded-sm">
                                        {n.category || "Tin tức"}
                                    </div>
                                </div>
                                <div className="p-4 flex flex-col flex-1">
                                    <h4 className="font-semibold text-sm leading-snug group-hover:text-[#0062BD] transition-all line-clamp-2 mb-2">{n.title}</h4>
                                    <p className="text-xs text-gray-500 line-clamp-2 mb-4 leading-relaxed">{n.description}</p>
                                    <div className="mt-auto flex items-center justify-between text-[#0062BD] font-bold text-xs border-t border-gray-100 pt-3">
                                        <span>Xem chi tiết</span>
                                        <span>&rarr;</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div id="name_registration" className="flex justify-center mt-10">
                        <Button variant="outline" className="border-[#0062BD] text-[#0062BD] font-bold rounded-full px-10 hover:bg-blue-50">
                            XEM THÊM TIN TỨC
                        </Button>
                    </div>
                </div>
            </section>

            {/* Lead Form */}
            <section className="relative py-16 md:py-24 bg-[#1a1c24] border-t border-zinc-800 flex justify-center overflow-hidden">
                <Image src="/images/sources/contact.webp" alt="VinFast Registration Background" fill className="object-cover  object-left  opacity-80" loading="lazy" sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-[#1e3a5a]/60" />

                <div className="relative container mx-auto px-4 max-w-3xl z-10">
                    <div className="text-center mb-8">
                        <h2 className="text-[18px] md:text-[22px] font-bold text-white mb-2 md:mb-3">Đăng ký nhận thông tin</h2>
                        <p className="text-[11px] md:text-[13px] text-gray-200">Đăng ký nhận thông tin chương trình khuyến mãi, dịch vụ VinFast.</p>
                    </div>

                    <div className="flex flex-col gap-3 md:gap-4 max-w-2xl mx-auto">
                        <Input
                            className="bg-white border-0 text-gray-900 placeholder:text-gray-500 rounded-sm h-[44px] md:h-[50px] px-4 focus:ring-2 focus:ring-[#0062BD] transition-all text-[13px] md:text-sm w-full shadow-inner"
                            placeholder="Họ và tên"
                        />
                        <Input
                            className="bg-white border-0 text-gray-900 placeholder:text-gray-500 rounded-sm h-[44px] md:h-[50px] px-4 focus:ring-2 focus:ring-[#0062BD] transition-all text-[13px] md:text-sm w-full shadow-inner"
                            placeholder="Số điện thoại"
                        />
                        <div className="relative">
                            <select className="w-full bg-white border-0 text-gray-600 rounded-sm h-[44px] md:h-[50px] px-4 appearance-none focus:ring-2 focus:ring-[#0062BD] transition-all text-[13px] md:text-sm outline-none cursor-pointer shadow-inner">
                                <option>-- Chọn dòng xe VinFast --</option>
                                {displayCars.map((item) => (
                                    <option key={item.id}>{item.name}</option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </div>

                        <Button className="bg-[#0088FF] hover:bg-[#0066CC] text-white font-bold rounded-sm h-[38px] md:h-[42px] text-[11px] md:text-xs uppercase transition-all px-8 md:px-10 self-start mt-2 md:mt-4 shadow-lg border-none">
                            ĐĂNG KÝ NGAY
                        </Button>
                    </div>

                    <p className="mt-12 text-center text-[10px] md:text-[11px] text-gray-300 max-w-xl mx-auto leading-relaxed">
                        Bằng cách đăng ký, Quý khách xác nhận đã đọc, hiểu và đồng ý với Chính sách Quyền riêng tư của VinFast.
                    </p>
                </div>
            </section>
        </main>
    );
}
