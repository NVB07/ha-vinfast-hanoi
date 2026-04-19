import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Footer() {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    const { data: settings } = await supabase.from("general_settings").select("*").single();

    const phone = settings?.phone || settings?.zalo || "0345 726 0013";
    const email = settings?.email || " ";
    const addressStr =
        settings?.address ||
        "Vinfast Phan Trọng Tuệ : km2+500 đường Phan Trọng Tuệ, Thanh Liệt, Hà Nội\nVinfast Ngọc Hồi : 215 đường Ngọc Hồi, Ngọc Hồi , Hà Nội\nVinfast Lê Quang Đạo : số 1 Lê Quang Đạo, Từ Liêm, Hà Nội";
    const addresses = addressStr.split("\n");
    const fb = settings?.facebook || "#";
    const tiktok = settings?.tiktok || "#";
    const youtube = settings?.youtube || "#";
    const zalo = settings?.zalo || "0345726001";

    return (
        <>
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
                                {addresses.map((addr: string, i: number) => (
                                    <p key={i}>{addr}</p>
                                ))}
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
                            <a href={`tel:${phone}`} className="font-bold text-[#0088ff] text-[13px] hover:underline cursor-pointer">
                                {phone}
                            </a>
                            <a href={`mailto:${email}`} className="text-[11px] text-[#0088ff] mb-4 hover:underline cursor-pointer">
                                {email}
                            </a>

                            <h4 className="text-[10px] text-gray-500 uppercase mb-0.5">HOTLINE DỊCH VỤ</h4>
                            <a href={`tel:${phone}`} className="font-bold text-[#0088ff] text-[13px] hover:underline cursor-pointer">
                                {phone}
                            </a>
                            <a href={`mailto:${email}`} className="text-[11px] text-[#0088ff] mb-4 hover:underline cursor-pointer">
                                {email}
                            </a>

                            <h4 className="text-[11px] text-gray-600 mb-1.5">Kết nối với chúng tôi</h4>
                            <div className="flex gap-1.5">
                                <a
                                    href={fb}
                                    target="_blank"
                                    className="w-[22px] h-[22px] bg-[#0062BD] rounded-full flex items-center justify-center text-white text-[10px] font-bold hover:scale-110 transition-transform"
                                >
                                    f
                                </a>
                                <a
                                    href={tiktok}
                                    target="_blank"
                                    className="w-[22px] h-[22px] bg-[#0062BD] rounded-full flex items-center justify-center text-white text-[10px] font-bold hover:scale-110 transition-transform flex-col leading-[8px] pt-[2px]"
                                >
                                    <span>t</span>
                                    <span>k</span>
                                </a>
                                <a
                                    href={youtube}
                                    target="_blank"
                                    className="w-[22px] h-[22px] bg-[#0062BD] rounded-full flex items-center justify-center text-white text-[10px] font-bold hover:scale-110 transition-transform"
                                >
                                    yt
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="flex justify-center pt-2">
                        <p className="text-[10px] md:text-[11px] text-gray-600 font-medium">VinFast. All rights reserved. &copy; Copyright 2025</p>
                    </div>
                </div>
            </footer>

            {/* Floating Contact Widget */}
            <div className="fixed bottom-6 left-4 z-50 flex flex-col gap-4 items-start">
                <a href={`https://zalo.me/${zalo}`} target="_blank" className=" relative flex items-center cursor-pointer group">
                    <div className="w-10 h-10 bg-[#0088FF] rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform z-10 border-2 border-white">
                        <span className="text-white text-[9px] font-black uppercase tracking-wider">ZALO</span>
                    </div>
                    <div className="absolute left-10 bg-gray-100 text-[#0062BD] text-[10px] font-bold px-3 py-1 rounded-r-md transition-opacity border border-gray-200 pointer-events-none whitespace-nowrap">
                        Chat Zalo
                    </div>
                </a>

                <a href={`tel:${phone}`} className="flex items-center cursor-pointer hover:scale-105 transition-transform origin-left">
                    <div className="w-10 h-10 bg-[#0088FF] rounded-full flex items-center justify-center shadow-lg z-10 border-2 border-white">
                        <svg className="w-4 h-4 text-white animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                        </svg>
                    </div>
                    <div className="bg-[#f2f2f2] text-[#ff0000] font-black text-xs md:text-sm px-4 py-2 -ml-4 pl-6 rounded-r-full shadow-sm border border-gray-200">
                        {phone}
                    </div>
                </a>
            </div>
        </>
    );
}
