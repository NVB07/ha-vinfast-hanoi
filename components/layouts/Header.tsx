import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User, Phone, ChevronDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Header() {
    return (
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
                                    <nav className="flex flex-col gap-6 font-bold text-base uppercase text-[#222] overflow-y-auto flex-1 min-h-0 pr-2 pb-4 pt-2">
                                        <Link href="/" className="hover:text-[#0062BD] transition-colors">
                                            TRANG CHỦ
                                        </Link>

                                        <details className="group">
                                            <summary className="flex items-center justify-between hover:text-[#0062BD] transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                                                SẢN PHẨM <ChevronDown className="w-4 h-4 opacity-70 group-open:rotate-180 transition-transform" />
                                            </summary>
                                            <div className="pl-4 pt-4 flex flex-col gap-4 font-semibold text-[13px] text-gray-600 normal-case border-l-2 border-l-gray-100 ml-2 mt-2">
                                                {[
                                                    "VF 3",
                                                    "VF 5",
                                                    "VF 6",
                                                    "VF 7",
                                                    "VF 8",
                                                    "VF 9",
                                                    "MINIO GREEN",
                                                    "HERIO GREEN",
                                                    "NERIO GREEN",
                                                    "LIMO GREEN",
                                                    "EC VAN",
                                                    "E BUS",
                                                ].map((car) => (
                                                    <Link key={car} href={`/san-pham/${car.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-[#0062BD] transition-colors">
                                                        {car}
                                                    </Link>
                                                ))}
                                            </div>
                                        </details>

                                        <Link href="#" className="hover:text-[#0062BD] transition-colors">
                                            BẢNG GIÁ XE
                                        </Link>

                                        <details className="group">
                                            <summary className="flex items-center justify-between hover:text-[#0062BD] transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                                                MUA XE <ChevronDown className="w-4 h-4 opacity-70 group-open:rotate-180 transition-transform" />
                                            </summary>
                                            <div className="pl-4 pt-4 flex flex-col gap-4 font-semibold text-[13px] text-gray-600 normal-case border-l-2 border-l-gray-100 ml-2 mt-2">
                                                <Link href="#" className="hover:text-[#0062BD] transition-colors">
                                                    TRẢ GÓP
                                                </Link>
                                                <Link href="#" className="hover:text-[#0062BD] transition-colors">
                                                    TÍNH GIÁ LĂN BÁNH
                                                </Link>
                                            </div>
                                        </details>

                                        <details className="group">
                                            <summary className="flex items-center justify-between hover:text-[#0062BD] transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                                                TIN TỨC <ChevronDown className="w-4 h-4 opacity-70 group-open:rotate-180 transition-transform" />
                                            </summary>
                                        </details>

                                        <Link href="#" className="hover:text-[#0062BD] transition-colors">
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
                    <div className="hidden lg:flex items-center gap-6 text-sm font-semibold uppercase tracking-widest text-[#222] h-full">
                        <Link href="/" className="hover:text-[#0062BD] transition-colors whitespace-nowrap h-full flex items-center">
                            TRANG CHỦ
                        </Link>

                        {/* Dropdown SẢN PHẨM ngang (Megamenu) */}
                        <div className="relative group h-full flex items-center">
                            <div className="hover:text-[#0062BD] transition-colors flex items-center gap-1 whitespace-nowrap cursor-pointer h-full">
                                SẢN PHẨM <ChevronDown className="w-3 h-3 opacity-60 group-hover:rotate-180 transition-transform" />
                            </div>
                            <div className="absolute top-[72px] left-1/2 -translate-x-1/2 w-[800px] bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 grid grid-cols-6 gap-x-2 gap-y-4 p-6 rounded-sm border-t-2 border-t-[#0088FF] pointer-events-auto">
                                {["VF 3", "VF 5", "VF 6", "VF 7", "VF 8", "VF 9", "MINIO GREEN", "HERIO GREEN", "NERIO GREEN", "LIMO GREEN", "EC VAN", "E BUS"].map(
                                    (car) => (
                                        <Link
                                            key={car}
                                            href={`/san-pham/${car.toLowerCase().replace(/\s+/g, "-")}`}
                                            className="hover:bg-gray-50 hover:text-[#0062BD] text-[13px] font-semibold text-gray-700 transition-colors p-2 text-center rounded whitespace-nowrap"
                                        >
                                            {car}
                                        </Link>
                                    ),
                                )}
                            </div>
                        </div>

                        <Link href="#" className="hover:text-[#0062BD] transition-colors whitespace-nowrap h-full flex items-center">
                            BẢNG GIÁ XE
                        </Link>

                        {/* Dropdown MUA XE */}
                        <div className="relative group h-full flex items-center">
                            <div className="hover:text-[#0062BD] transition-colors flex items-center gap-1 whitespace-nowrap cursor-pointer h-full">
                                MUA XE <ChevronDown className="w-3 h-3 opacity-60 group-hover:rotate-180 transition-transform" />
                            </div>
                            <div className="absolute top-[72px] left-1/2 -translate-x-1/2 w-[220px] bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col py-2 rounded-sm border-t-2 border-t-[#0088FF] pointer-events-auto">
                                <Link
                                    href="#"
                                    className="px-5 py-3 hover:bg-gray-50 hover:pl-6 hover:text-[#0062BD] text-[13px] font-semibold text-gray-700 transition-all"
                                >
                                    TRẢ GÓP
                                </Link>
                                <Link
                                    href="#"
                                    className="px-5 py-3 hover:bg-gray-50 hover:pl-6 hover:text-[#0062BD] text-[13px] font-semibold text-gray-700 transition-all"
                                >
                                    TÍNH GIÁ LĂN BÁNH
                                </Link>
                            </div>
                        </div>

                        {/* Dropdown TIN TỨC (Optional future dropdown base) */}
                        <div className="relative group h-full flex items-center">
                            <div className="hover:text-[#0062BD] transition-colors flex items-center gap-1 cursor-pointer h-full whitespace-nowrap">
                                TIN TỨC <ChevronDown className="w-3 h-3 opacity-60 group-hover:rotate-180 transition-transform" />
                            </div>
                        </div>

                        <Link href="#" className="hover:text-[#0062BD] transition-colors whitespace-nowrap h-full flex items-center">
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
    );
}
