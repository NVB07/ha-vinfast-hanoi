"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, User, Globe, Phone, ChevronDown, MessageCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const sliders = ["/images/slider/1.jpg", "/images/slider/2.png", "/images/slider/3.png", "/images/slider/4.webp"];
const homeCars = [
    {
        id: 1,
        name: "VF 3",
        image: "/images/homeCars/vf3.webp",
        type: "Mini SUV",
        price: "299.000.000 VNĐ (NEDC)",
        distance: "~ 210 km (NEDC)",
        slot: "4 chỗ",
    },
    {
        id: 2,
        name: "VF 5",
        image: "/images/homeCars/vf5.webp",
        type: "A SUV",
        price: "529.000.000 VNĐ (NEDC)",
        distance: "~ 326,4 km (NEDC)",
        slot: "5 chỗ",
    },
    {
        id: 3,
        name: "VF 6",
        image: "/images/homeCars/vf6.webp",
        type: "B SUV",
        price: "689.000.000 VNĐ (NEDC)",
        distance: "~ 480 km (NEDC)",
        slot: "5 chỗ",
    },
    {
        id: 4,
        name: "VF 7",
        image: "/images/homeCars/vf7.webp",
        type: "C SUV",
        price: "799.000.000 VNĐ (NEDC)",
        distance: "~ 431 km (NEDC)",
        slot: "5 chỗ",
    },
    {
        id: 5,
        name: "VF 8",
        image: "/images/homeCars/vf8.webp",
        type: "D SUV",
        price: "1.019.000.000 VNĐ (NEDC)",
        distance: "~ 471 km (NEDC)",
        slot: "5 chỗ",
    },
    {
        id: 6,
        name: "VF 9",
        image: "/images/homeCars/vf9.webp",
        type: "E SUV",
        price: "1.499.000.000 VNĐ (NEDC)",
        distance: "~ 626 km (NEDC)",
        slot: "6-7 chỗ",
    },
    {
        id: 7,
        name: "MINIO GREEN",
        image: "/images/homeCars/nimo.webp",
        type: "MiniCar",
        price: "269.000.000 VNĐ (NEDC)",
        distance: "~ 170 km (NEDC)",
        slot: "4 chỗ",
    },
    {
        id: 8,
        name: "HERIO GREEN",
        image: "/images/homeCars/herio.webp",
        type: "A SUV",
        price: "499.000.000 VNĐ (NEDC)",
        distance: "~ 326 km (NEDC)",
        slot: "5 chỗ",
    },
    {
        id: 9,
        name: "NERIO GREEN",
        image: "/images/homeCars/nerio.webp",
        type: "B SUV",
        price: "688.000.000 VNĐ (NEDC)",
        distance: "~ 318 km (NEDC)",
        slot: "5 chỗ",
    },
    {
        id: 10,
        name: "LIMO GREEN",
        image: "/images/homeCars/limo.webp",
        type: "MPV",
        price: "749.000.000 VNĐ (NEDC)",
        distance: "~ 450 km (NEDC)",
        slot: "7 chỗ",
    },
    {
        id: 11,
        name: "EC VAN",
        image: "/images/homeCars/ec.webp",
        type: "> 600kg",
        price: "285.000.000 VNĐ (NEDC)",
        distance: "~ 150 km (NEDC)",
        slot: "2 chỗ",
    },
    {
        id: 12,
        name: "E BUS",
        image: "/images/homeCars/ebus.jpg",
        type: "Car",
        price: "2.800.000.000 VNĐ (NEDC)",
        distance: "~ 250 km (NEDC)",
        slot: "Nhiều chỗ",
    },
];
export default function Home() {
    return (
        <div className="flex min-h-screen flex-col font-sans antialiased text-[#333]">
            {/* Navbar Section */}
            <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
                <div className="container mx-auto px-4 w-full">
                    {/* Main Navbar */}
                    <div className="flex h-[72px] items-center justify-between">
                        {/* Logo Left */}
                        <div className="flex items-center">
                            <Sheet>
                                <SheetTrigger render={<Button variant="ghost" size="icon" className="lg:hidden mr-2 p-0" />}>
                                    <Menu className="h-6 w-6" />
                                </SheetTrigger>
                                <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0 z-[100]">
                                    <div className="p-6 space-y-6 flex flex-col h-full bg-white">
                                        <div className="flex items-center gap-2">
                                            <div className="relative h-10 w-10">
                                                <Image src="/logo-vinfast.gif" alt="Logo" fill className="object-contain" />
                                            </div>
                                            <span className="text-base font-black tracking-[0.2em] font-sans text-gray-900 mt-0.5">V I N F A S T</span>
                                        </div>
                                        <Separator />
                                        <nav className="flex flex-col gap-6 font-bold text-base uppercase text-[#222]">
                                            <Link href="#" className="hover:text-[#0062BD]">
                                                GIỚI THIỆU
                                            </Link>
                                            <Link href="#" className="hover:text-[#0062BD] flex items-center justify-between">
                                                SẢN PHẨM <ChevronDown className="w-4 h-4 opacity-70" />
                                            </Link>
                                            <Link href="#" className="hover:text-[#0062BD]">
                                                BẢNG GIÁ XE
                                            </Link>
                                            <Link href="#" className="hover:text-[#0062BD] flex items-center justify-between">
                                                MUA XE <ChevronDown className="w-4 h-4 opacity-70" />
                                            </Link>
                                            <Link href="#" className="hover:text-[#0062BD] flex items-center justify-between">
                                                TIN TỨC <ChevronDown className="w-4 h-4 opacity-70" />
                                            </Link>
                                            <Link href="#" className="hover:text-[#0062BD]">
                                                LIÊN HỆ
                                            </Link>
                                        </nav>
                                        <div className="mt-auto pt-6 border-t font-semibold">
                                            <div className="flex items-center gap-2 mb-4">
                                                <Phone className="w-4 h-4 text-[#0062BD]" /> 1900 23 23 89
                                            </div>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>

                            <Link href="/" className="flex items-center group relative overflow-hidden pl-2">
                                <div className="relative h-10 w-10 md:h-12 md:w-12">
                                    <Image src="/logo-vinfast.gif" alt="VinFast Logo" fill className="object-contain" priority />
                                </div>
                                <span className="ml-2 md:ml-3 text-base md:text-[17px] font-black tracking-[0.2em] md:tracking-[0.3em] font-sans text-gray-900 group-hover:text-[#0062BD] transition-colors mt-0.5">
                                    V I N F A S T
                                </span>
                            </Link>
                        </div>

                        {/* Navigation Links - Right Aligned */}
                        <div className="hidden lg:flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-[#222]">
                            <Link href="#" className="hover:text-[#0062BD] transition-colors whitespace-nowrap">
                                GIỚI THIỆU
                            </Link>
                            <Link href="#" className="hover:text-[#0062BD] transition-colors flex items-center gap-1 group whitespace-nowrap">
                                SẢN PHẨM <ChevronDown className="w-3 h-3 opacity-60 group-hover:rotate-180 transition-transform" />
                            </Link>
                            <Link href="#" className="hover:text-[#0062BD] transition-colors whitespace-nowrap">
                                BẢNG GIÁ XE
                            </Link>
                            <Link href="#" className="hover:text-[#0062BD] transition-colors flex items-center gap-1 group whitespace-nowrap">
                                MUA XE <ChevronDown className="w-3 h-3 opacity-60 group-hover:rotate-180 transition-transform" />
                            </Link>
                            <Link href="#" className="hover:text-[#0062BD] transition-colors flex items-center gap-1 group whitespace-nowrap">
                                TIN TỨC <ChevronDown className="w-3 h-3 opacity-60 group-hover:rotate-180 transition-transform" />
                            </Link>
                            <Link href="#" className="hover:text-[#0062BD] transition-colors whitespace-nowrap">
                                LIÊN HỆ
                            </Link>
                        </div>

                        {/* Mobile Right Icons */}
                        <div className="flex items-center gap-2 md:hidden">
                            <Button variant="ghost" size="icon" className="text-gray-600 focus:bg-transparent">
                                <User className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-1">
                {/* Hero Section - Slider using Shadcn Carousel */}
                <section className="relative w-full overflow-hidden flex flex-col group">
                    <Carousel opts={{ align: "start", loop: true }} className="w-full h-full">
                        <CarouselContent>
                            {sliders.map((item, index) => (
                                <CarouselItem key={index} className="relative h-[300px] sm:h-[450px] md:h-[650px] lg:h-[750px] w-full">
                                    <a href="#name_registration" className="block w-full h-full relative overflow-hidden">
                                        {/* background blur */}
                                        <Image src={item} alt="" fill className="object-cover blur-xl scale-110" />

                                        {/* main image (FADE REAL) */}
                                        <div className="absolute inset-0 z-10 flex items-center justify-center">
                                            <img
                                                src={item}
                                                alt=""
                                                className="max-w-full max-h-full object-contain"
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

                        {/* Slider Arrows */}
                        <CarouselPrevious className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-black/20 hover:bg-black/50 text-white hover:text-white border-none rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center justify-center [&_svg]:w-6 [&_svg]:h-6" />
                        <CarouselNext className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-black/20 hover:bg-black/50 text-white hover:text-white border-none rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center justify-center [&_svg]:w-6 [&_svg]:h-6" />
                    </Carousel>

                    {/* Floating UI Elements (Zalo, Phone) */}
                </section>

                {/* Model Selector Section */}
                <section className="py-20 md:py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-4 max-w-[1400px] flex flex-col items-center">
                        <h2 className="text-sm md:text-base font-bold text-gray-600 mb-8 uppercase tracking-widest text-center">KHÁM PHÁ CÁC DÒNG XE VINFAST</h2>

                        <Tabs defaultValue="vf3" className="w-full">
                            <div className="flex flex-col items-center mb-6">
                                {/* Unified TabsList for proper Context Management in Base-UI */}
                                <TabsList className="bg-transparent !h-auto min-h-fit p-0 flex flex-col items-center gap-2 md:gap-3 mb-6 w-full">
                                    {/* Row 1: Car Models */}
                                    <div className="flex flex-wrap justify-center gap-1.5 md:gap-3 w-full">
                                        {["VF 3", "VF 5", "VF 6", "VF 7", "VF 8", "VF 9", "MINIO GREEN", "HERIO GREEN"].map((model) => (
                                            <TabsTrigger
                                                key={model}
                                                value={model.toLowerCase().replace(/ /g, "")}
                                                className="bg-white border border-gray-400 text-gray-700 rounded-md px-2.5 py-1.5 md:px-4 flex-none !h-auto text-[10px] md:text-[11px] font-bold uppercase transition-all hover:bg-gray-50 data-active:border-[#0088FF] data-active:bg-[#0088FF] data-active:text-white cursor-pointer shadow-sm"
                                            >
                                                {model}
                                            </TabsTrigger>
                                        ))}
                                    </div>
                                    {/* Row 2: Car Models */}
                                    <div className="flex flex-wrap justify-center gap-1.5 md:gap-3 w-full">
                                        {["NERIO GREEN", "LIMO GREEN", "EC VAN", "E BUS"].map((model) => (
                                            <TabsTrigger
                                                key={model}
                                                value={model.toLowerCase().replace(/ /g, "")}
                                                className="bg-white border border-gray-400 text-gray-700 rounded-md px-2.5 py-1.5 md:px-4 flex-none !h-auto text-[10px] md:text-[11px] font-bold uppercase transition-all hover:bg-gray-50 data-active:border-[#0088FF] data-active:bg-[#0088FF] data-active:text-white cursor-pointer shadow-sm"
                                            >
                                                {model}
                                            </TabsTrigger>
                                        ))}
                                    </div>
                                </TabsList>
                            </div>

                            {homeCars.map((model, index) => (
                                <TabsContent
                                    key={model.id}
                                    value={model.name.toLowerCase().replace(/ /g, "")}
                                    className="relative flex flex-col items-center justify-center animate-in fade-in duration-500"
                                >
                                    {/* High Precision Watermark Background */}
                                    {/* <div className="absolute inset-x-0 top-[40%] -translate-y-1/2 text-center pointer-events-none select-none z-0 overflow-hidden mix-blend-multiply">
                                        <span className="text-[180px] md:text-[300px] lg:text-[450px] font-black tracking-tighter block leading-none italic text-gray-200/60">
                                            {model.name.replace(/ /g, "")}
                                        </span>
                                    </div> */}

                                    <div className="relative z-10 w-full max-w-4xl">
                                        <div className="flex flex-col items-center">
                                            <div className="relative w-full h-[250px] md:h-[400px]">
                                                <Image src={model.image} alt={model.name} fill className="object-contain" />
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
                                                    <div className="text-[11px] text-gray-500 mb-1">Quãng đường lên tới</div>
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
                                    <Image src="/images/sources/sacxe.webp" alt="Promo" fill className="object-cover group-hover:scale-105 transition-all duration-700" />
                                    <div className="absolute inset-0 bg-blue-900/30"></div>
                                    <div className="absolute bottom-0 left-0  text-white text-xl  z-10 w-full  p-2 bg-black/50">
                                        <p className="uppercase font-bold">Pin & Trạm sạc ô tô điện</p>
                                        <p className="text-[14px]  italic">
                                            Với phương châm luôn đặt lợi ích Khách hàng lên hàng đầu, VinFast áp dụng chính sách cho thuê pin độc đáo, ưu việt và khác
                                            biệt với tất cả các mô hình cho thuê pin từ trước tới nay trên thế giới.
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
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 w-full bg-black/50 p-2 text-white    z-10">
                                        <p className="uppercase font-bold text-xl">BẢO HÀNH 10 NĂM</p>
                                        <p className="text-[14px]  italic">
                                            Với phương châm luôn đặt lợi ích Khách hàng lên hàng đầu, VinFast áp dụng chính sách bảo hành 10 năm cho tất cả các dòng xe
                                            của VinFast.
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
                                    {/* <Link href="#" className="text-[#0062BD] font-bold text-xs flex items-center hover:underline">
                                        Chi tiết <span className="ml-1 text-lg leading-none">&raquo;</span>
                                    </Link> */}
                                </div>
                                <div className="relative flex-1 w-full mt-4">
                                    <Image
                                        src="/images/sources/dausac.webp"
                                        alt="Charger"
                                        fill
                                        className="object-contain object-bottom group-hover:scale-[1.03] transition-all duration-700"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Warranty & Service Section - Replaces SẢN PHẨM KHÁC */}
                <section className="bg-gradient-to-r from-[#eef1f5] to-[#f4f6f9] py-16 md:py-20 overflow-hidden relative">
                    {/* Geometric background pattern (white lines tunnel) */}
                    <div className="absolute top-1/2 left-3/4 md:left-[60%] -translate-y-1/2 -translate-x-1/2 z-0 opacity-80 pointer-events-none scale-75 md:scale-100">
                        <div className="w-[800px] h-[800px] border-[1px] md:border-[2px] border-white/60 rotate-45 rounded-[40px] md:rounded-[80px] origin-center -ml-20"></div>
                        <div className="w-[600px] h-[600px] border-[2px] md:border-[4px] border-white/80 rotate-45 rounded-[30px] md:rounded-[60px] origin-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block"></div>
                        <div className="w-[400px] h-[400px] border-[5px] md:border-[10px] border-white rotate-45 rounded-[20px] md:rounded-[40px] origin-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    </div>

                    <div className="container mx-auto px-4 max-w-[1300px] flex flex-col md:flex-row items-center w-full min-h-[400px] md:min-h-[500px] relative z-10">
                        {/* Text Content - Left Side */}
                        <div className="md:w-[45%] lg:w-[40%] flex flex-col justify-center items-center md:items-start text-center md:text-left mb-12 md:mb-0 md:pl-12 lg:pl-16 relative z-20">
                            <h2 className="text-[#333] text-lg md:text-xl font-bold uppercase mb-4 tracking-wide pr-4">BẢO HÀNH &amp; DỊCH VỤ</h2>
                            <p className="text-gray-600 text-xs md:text-[13px] lg:text-sm mb-8 max-w-sm leading-relaxed pr-2">
                                VinFast Lê Quang Đạo đã đầu tư nghiêm túc và bài bản để phát triển hệ thống Showroom, Nhà phân phối và xưởng dịch vụ rộng khắp, đáp ứng
                                tối đa nhu cầu của Khách hàng.
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

                        {/* Car Image - Right Side */}
                        <div className="md:w-[55%] lg:w-[60%] relative h-[300px] md:h-[500px] w-full flex items-center justify-center md:justify-end relative z-10">
                            <Image src="/images/sources/vf9mn.png" alt="VinFast VF9 Service" fill className="object-contain md:object-right drop-shadow-2xl z-10" />
                        </div>
                    </div>
                </section>

                {/* Spirit Section - Full Image Background */}
                <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-[#222]">
                    <Image src="/images/sources/manhliet.webp" alt="Vietnam Spirit Background" fill className="object-cover" />
                    {/* Optional thin overlay to increase text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l  from-black/70 via-black/50 to-transparent" />

                    <div className="relative container mx-auto px-4 h-full max-w-[1300px] flex items-center justify-end">
                        <div className="w-full md:w-[50%] lg:w-[45%] flex flex-col justify-center items-start pl-4 md:pl-0 pr-4 md:pr-12 lg:pr-16">
                            <h3 className="text-white font-bold text-xl md:text-2xl  uppercase text-shadow-sm  mb-4 leading-snug drop-shadow-md">
                                Mãnh liệt Tinh thần Việt Nam <br />
                                Vì Tương lai Xanh
                            </h3>
                            <p className="text-white text-shadow-sm text-[13px] md:text-[15px]  mb-6 leading-relaxed drop-shadow-sm text-justify md:text-left">
                                Chiến dịch Mãnh liệt Tinh thần Việt Nam – Vì Tương lai Xanh là lời khẳng định mạnh mẽ của VinFast trong hành trình thúc đẩy cuộc cách mạng
                                xe điện và kiến tạo một tương lai bền vững. Chiến dịch không chỉ thể hiện tinh thần tiên phong của thương hiệu Việt trên bản đồ xe điện
                                toàn cầu mà còn kêu gọi cộng đồng cùng chung tay chuyển đổi xanh, góp phần xây dựng một Việt Nam phát triển vững bền, nơi giao thông không
                                chỉ hiện đại mà còn thân thiện với môi trường.
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
                        {/* Showroom & Community Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
                            <div className="group relative h-[250px] overflow-hidden rounded-md shadow-sm bg-black">
                                <Image
                                    src="/images/sources/daily.webp"
                                    alt="Store"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-all duration-700 opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                                <div className="absolute bottom-6 left-6 text-white flex items-center justify-between w-[90%]">
                                    <div>
                                        <div className="text-[10px] font-bold uppercase text-[#4aa5ff] mb-1 tracking-widest">HỆ THỐNG</div>
                                        <h4 className="text-xl font-bold uppercase tracking-tight">SHOWROOM VÀ ĐẠI LÝ</h4>
                                    </div>
                                    {/* <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">&rarr;</div> */}
                                </div>
                            </div>
                            <div className="group relative h-[250px] overflow-hidden rounded-md shadow-sm bg-black">
                                <Image
                                    src="/images/sources/toancau.webp"
                                    alt="Community"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-all duration-700 opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                                <div className="absolute bottom-6 left-6 text-white flex items-center justify-between w-[90%]">
                                    <div>
                                        <div className="text-[10px] font-bold uppercase text-[#4aa5ff] mb-1 tracking-widest">KẾT NỐI TOÀN CẦU</div>
                                        <h4 className="text-xl font-bold uppercase tracking-tight">CỘNG ĐỒNG VINFAST TOÀN CẦU</h4>
                                    </div>
                                    {/* <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">&rarr;</div> */}
                                </div>
                            </div>
                        </div>

                        {/* News Grid Refined - 2 columns! */}
                        <div className="text-center mb-10 text-[#0062BD]">
                            <h3 className="text-2xl font-bold uppercase tracking-widest mb-1">TIN TỨC HOẠT ĐỘNG</h3>
                            <div className="flex justify-center flex-wrap gap-2 text-xs font-semibold"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                <article
                                    key={i}
                                    className="group cursor-pointer bg-white overflow-hidden hover:shadow-sm transition-shadow rounded-md border border-gray-100 flex flex-col h-full shadow-sm"
                                >
                                    <div className="relative aspect-[16/9] w-full bg-gray-100">
                                        <Image
                                            src={`https://placehold.co/600x340/e9ecef/dee2e6?text=+`}
                                            alt={`Article ${i}`}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-all duration-500"
                                        />
                                        <div className="absolute top-2 left-2 bg-[#0062BD] text-white text-[10px] font-bold px-2 py-1 uppercase rounded-sm">Tin tức</div>
                                    </div>
                                    <div className="p-4 flex flex-col flex-1">
                                        <h4 className="font-semibold text-sm leading-snug group-hover:text-[#0062BD] transition-all line-clamp-2 mb-2">
                                            Tập đoàn Vingroup chính thức ra mắt mẫu xe SUV thế hệ mới {i} với công nghệ tự lái tiên tiến
                                        </h4>
                                        <p className="text-xs text-gray-500 line-clamp-2 mb-4 leading-relaxed">
                                            Đây là bước đột phá công nghệ, đánh dấu kỷ nguyên mới trong ngành công nghiệp ô tô điện tử Việt Nam.
                                        </p>
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

                {/* Lead Form - Replaces ĐĂNG KÝ NHẬN TƯ VẤN */}
                <section className="relative py-16 md:py-24 bg-[#1a1c24] border-t border-zinc-800 flex justify-center overflow-hidden">
                    {/* Placeholder for VinFast Logo Macro background */}
                    <Image src="/images/sources/contact.webp" alt="VinFast Registration Background" fill className="object-cover  object-left  opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-[#1e3a5a]/60" />

                    <div className="relative container mx-auto px-4 max-w-3xl z-10">
                        <div className="text-center mb-8">
                            <h2 className="text-[18px] md:text-[22px] font-bold text-white mb-2 md:mb-3">Đăng ký nhận thông tin</h2>
                            <p className="text-[11px] md:text-[13px] text-gray-200">Đăng ký nhận thông tin chương trình khuyến mãi, dịch vụ VinFast.</p>
                        </div>

                        {/* Vertically Stacked Inputs */}
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
                                    {["VF 3", "VF 5", "VF 6", "VF 7", "VF 8", "VF 9", "MINIO GREEN", "HERIO GREEN", "NERIO GREEN", "LIMO GREEN", "EC VAN", "E BUS"].map(
                                        (item) => (
                                            <option key={item}>{item}</option>
                                        ),
                                    )}
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

            {/* Global Footer */}
            <footer className="bg-[#fafafa] py-12 border-t border-gray-200 text-gray-700">
                <div className="container mx-auto px-4 max-w-[1200px]">
                    {/* Top - Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                        {/* Col 1 */}
                        <div className="lg:col-span-2">
                            <div className="relative h-12 w-32 mb-6">
                                <Image src="/logo-vinfast.gif" alt="VinFast" fill className="object-contain object-left" />
                            </div>
                            <h4 className="font-bold text-[13px] text-black mb-4 pr-10">Công ty TNHH Kinh doanh Thương mại và Dịch vụ VinFast</h4>
                            <p className="text-xs text-gray-600 mb-4 max-w-md leading-relaxed">
                                MST/MSDN: 0108926276 do Sở KHĐT TP Hà Nội cấp lần đầu ngày 01/10/2019 và các lần thay đổi tiếp theo
                            </p>

                            <h4 className="font-bold text-[13px] text-black mb-2">Địa chỉ :</h4>
                            <div className="text-xs text-gray-600 space-y-1.5 leading-relaxed">
                                <p>Vinfast Phan Trọng Tuệ : km2+500 đường Phan Trọng Tuệ, Thanh Liệt, Hà Nội</p>
                                <p>Vinfast Ngọc Hồi : 215 đường Ngọc Hồi, Ngọc Hồi , Hà Nội</p>
                                <p>Vinfast Lê Quang Đạo : số 1 Lê Quang Đạo, Từ Liêm, Hà Nội</p>
                            </div>
                        </div>

                        {/* Col 2 */}
                        <div className="flex flex-col gap-3">
                            <Link href="#" className="text-[11px] text-gray-500 hover:text-[#0088ff] transition-colors leading-relaxed">
                                VINFAST PHAN TRỌNG TUỆ - <br /> NGỌC HỒI - LÊ QUANG ĐẠO
                            </Link>
                            <Link href="#" className="text-[11px] text-gray-500 hover:text-[#0088ff] transition-colors uppercase">
                                VỀ VINFAST
                            </Link>
                            <Link href="#" className="text-[11px] text-gray-500 hover:text-[#0088ff] transition-colors uppercase">
                                TIN TỨC
                            </Link>
                            <Link href="#" className="text-[11px] text-gray-500 hover:text-[#0088ff] transition-colors uppercase">
                                SHOWROOM & DỊCH VỤ
                            </Link>
                            <Link href="#" className="text-[11px] text-gray-500 hover:text-[#0088ff] transition-colors uppercase">
                                ĐIỀU KHOẢN CHÍNH SÁCH
                            </Link>
                        </div>

                        {/* Col 3 */}
                        <div className="flex flex-col gap-1.5">
                            <h4 className="text-[10px] text-gray-500 uppercase mb-0.5">HOTLINE BÁN HÀNG</h4>
                            <p className="font-bold text-[#0088ff] text-[13px] hover:underline cursor-pointer">0964 988 275</p>
                            <p className="text-[11px] text-[#0088ff] mb-4 hover:underline cursor-pointer">duytu0311@gmail.com</p>

                            <h4 className="text-[10px] text-gray-500 uppercase mb-0.5">HOTLINE DỊCH VỤ</h4>
                            <p className="font-bold text-[#0088ff] text-[13px] hover:underline cursor-pointer">0964 988 275</p>
                            <p className="text-[11px] text-[#0088ff] mb-4 hover:underline cursor-pointer">duytu0311@gmail.com</p>

                            <h4 className="text-[11px] text-gray-600 mb-1.5">Kết nối với chúng tôi</h4>
                            <div className="flex gap-1.5">
                                <Link
                                    href="#"
                                    className="w-[22px] h-[22px] bg-[#0062BD] rounded-full flex items-center justify-center text-white text-[10px] font-bold hover:scale-110 transition-transform"
                                >
                                    f
                                </Link>
                                <Link
                                    href="#"
                                    className="w-[22px] h-[22px] bg-[#0062BD] rounded-full flex items-center justify-center text-white text-[10px] font-bold hover:scale-110 transition-transform"
                                >
                                    in
                                </Link>
                                <Link
                                    href="#"
                                    className="w-[22px] h-[22px] bg-[#0062BD] rounded-full flex items-center justify-center text-white text-[10px] font-bold hover:scale-110 transition-transform"
                                >
                                    yt
                                </Link>
                                <Link
                                    href="#"
                                    className="w-[22px] h-[22px] bg-[#0062BD] rounded-full flex items-center justify-center text-white text-[10px] font-bold hover:scale-110 transition-transform"
                                >
                                    ig
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Middle Map */}
                    {/* <div className="w-full h-[250px] md:h-[350px] mb-4 rounded border border-gray-200 overflow-hidden relative shadow-sm">
                        <Image src="https://placehold.co/1200x400/e9ecef/a3a3a3?text=Bản+Đồ+Google+Maps" alt="Map Placeholder" fill className="object-cover" />
                    </div> */}

                    {/* Copyright */}
                    <div className="flex justify-center pt-2">
                        <p className="text-[10px] md:text-[11px] text-gray-600 font-medium">VinFast. All rights reserved. &copy; Copyright 2025</p>
                    </div>
                </div>
            </footer>

            {/* Floating Contact Widget */}
            <div className="fixed bottom-6 left-4 z-50 flex flex-col gap-4 items-start">
                {/* Zalo Button */}
                <div className=" relative flex items-center cursor-pointer">
                    <div className="w-10 h-10 bg-[#0088FF] rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform z-10 border-2 border-white">
                        <span className="text-white text-[9px] font-black uppercase tracking-wider">ZALO</span>
                    </div>
                    <div className="absolute left-10 bg-gray-100 text-[#0062BD] text-[10px] font-bold px-3 py-1 rounded-r-md transition-opacity border border-gray-200 pointer-events-none whitespace-nowrap">
                        Chat Zalo
                    </div>
                </div>

                {/* Phone Button */}
                <div className="flex items-center cursor-pointer hover:scale-105 transition-transform origin-left">
                    <div className="w-10 h-10 bg-[#0088FF] rounded-full flex items-center justify-center shadow-lg z-10 border-2 border-white">
                        <svg className="w-4 h-4 text-white animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                        </svg>
                    </div>
                    <div className="bg-[#f2f2f2] text-[#ff0000] font-black text-xs md:text-sm px-4 py-2 -ml-4 pl-6 rounded-r-full shadow-sm border border-gray-200">
                        0964988275
                    </div>
                </div>
            </div>
        </div>
    );
}
