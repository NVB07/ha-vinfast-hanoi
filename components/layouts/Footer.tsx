import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import GlobalPromo from "./GlobalPromo";

export default async function Footer() {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    const { data: settings } = await supabase.from("general_settings").select("*").single();

    const phone = settings?.phone || settings?.zalo;
    const email = settings?.email || " ";
    const addressStr =
        settings?.address || "Vinfast Phan Trọng Tuệ : km2+500 đường Phan Trọng Tuệ, Thanh Liệt, Hà Nội\nVinfast Ngọc Hồi : 215 đường Ngọc Hồi, Ngọc Hồi , Hà Nội";
    const addresses = addressStr.split("\n");
    const fb = settings?.facebook || "";
    const tiktok = settings?.tiktok || "";
    const youtube = settings?.youtube || "";
    const zalo = settings?.zalo || "";

    return (
        <>
            {/* Global Footer */}
            <footer className="bg-[#fafafa] py-12 border-t border-gray-200 text-gray-700">
                <div className="container mx-auto px-4 maxW-[1200px]">
                    {/* Top - Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                        {/* Col 1 */}
                        <div className="lg:col-span-2">
                            <div className="relative h-12 w-32 mb-6">
                                <Image src="/logo-vinfast.gif" alt="VinFast" fill className="object-contain object-left" />
                            </div>
                            <h4 className="font-bold text-[13px] text-black mb-4 pr-10">Công ty TNHH Kinh doanh Thương mại và Dịch vụ VinFast</h4>
                            <p className="text-xs text-gray-600 mb-4 maxW-md leadingRelaxed">
                                MST/MSDN: 0108926276 do Sở KHĐT TP Hà Nội cấp lần đầu ngày 01/10/2019 và các lần thay đổi tiếp theo
                            </p>

                            <h4 className="font-bold text-[13px] text-black mb-2">Địa chỉ :</h4>
                            <div className="text-xs text-gray-600 space-y-1.5 leadingRelaxed">
                                {addresses.map((addr: string, i: number) => (
                                    <p key={i}>{addr}</p>
                                ))}
                            </div>
                        </div>

                        {/* Col 2 */}
                        <div className="flex flex-col gap-3">
                            <Link href="#" className="text-[11px] text-gray-500 hover:text-[#0088ff] transition-colors leadingRelaxed">
                                VINFAST PHAN TRỌNG TUỆ - NGỌC HỒI
                            </Link>
                            {/* <Link href="#" className="text-[11px] text-gray-500 hover:text-[#0088ff] transition-colors uppercase">
                                VỀ VINFAST
                            </Link> */}
                            <Link href="#" className="text-[11px] text-gray-500 hover:text-[#0088ff] transition-colors uppercase">
                                TIN TỨC
                            </Link>
                            {/* <Link href="#" className="text-[11px] text-gray-500 hover:text-[#0088ff] transition-colors uppercase">
                                SHOWROOM & DỊCH VỤ
                            </Link>
                            <Link href="#" className="text-[11px] text-gray-500 hover:text-[#0088ff] transition-colors uppercase">
                                ĐIỀU KHOẢN CHÍNH SÁCH
                            </Link> */}
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
                                {zalo && (
                                    <a
                                        href={`https://zalo.me/${zalo}`}
                                        target="_blank"
                                        className="w-[30px] h-[30px] p-0.5  border bg-[#0866FF] rounded-full flex items-center justify-center textWhite text-[10px] font-bold hover:scale-110 transition-transform"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M22.782 0.166016H27.199C33.2653 0.166016 36.8103 1.05701 39.9572 2.74421C43.1041 4.4314 45.5875 6.89585 47.2557 10.0428C48.9429 13.1897 49.8339 16.7347 49.8339 22.801V27.1991C49.8339 33.2654 48.9429 36.8104 47.2557 39.9573C45.5685 43.1042 43.1041 45.5877 39.9572 47.2559C36.8103 48.9431 33.2653 49.8341 27.199 49.8341H22.8009C16.7346 49.8341 13.1896 48.9431 10.0427 47.2559C6.89583 45.5687 4.41243 43.1042 2.7442 39.9573C1.057 36.8104 0.166016 33.2654 0.166016 27.1991V22.801C0.166016 16.7347 1.057 13.1897 2.7442 10.0428C4.43139 6.89585 6.89583 4.41245 10.0427 2.74421C13.1707 1.05701 16.7346 0.166016 22.782 0.166016Z"
                                                fill="#0068FF"
                                            />
                                            <path
                                                opacity="0.12"
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M49.8336 26.4736V27.1994C49.8336 33.2657 48.9427 36.8107 47.2555 39.9576C45.5683 43.1045 43.1038 45.5879 39.9569 47.2562C36.81 48.9434 33.265 49.8344 27.1987 49.8344H22.8007C17.8369 49.8344 14.5612 49.2378 11.8104 48.0966L7.27539 43.4267L49.8336 26.4736Z"
                                                fill="#001A33"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M7.779 43.5892C10.1019 43.846 13.0061 43.1836 15.0682 42.1825C24.0225 47.1318 38.0197 46.8954 46.4923 41.4732C46.8209 40.9803 47.1279 40.4677 47.4128 39.9363C49.1062 36.7779 50.0004 33.22 50.0004 27.1316V22.7175C50.0004 16.629 49.1062 13.0711 47.4128 9.91273C45.7385 6.75436 43.2461 4.28093 40.0877 2.58758C36.9293 0.894239 33.3714 0 27.283 0H22.8499C17.6644 0 14.2982 0.652754 11.4699 1.89893C11.3153 2.03737 11.1636 2.17818 11.0151 2.32135C2.71734 10.3203 2.08658 27.6593 9.12279 37.0782C9.13064 37.0921 9.13933 37.1061 9.14889 37.1203C10.2334 38.7185 9.18694 41.5154 7.55068 43.1516C7.28431 43.399 7.37944 43.5512 7.779 43.5892Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M20.5632 17H10.8382V19.0853H17.5869L10.9329 27.3317C10.7244 27.635 10.5728 27.9194 10.5728 28.5639V29.0947H19.748C20.203 29.0947 20.5822 28.7156 20.5822 28.2606V27.1421H13.4922L19.748 19.2938C19.8428 19.1801 20.0134 18.9716 20.0893 18.8768L20.1272 18.8199C20.4874 18.2891 20.5632 17.8341 20.5632 17.2844V17Z"
                                                fill="#0068FF"
                                            />
                                            <path d="M32.9416 29.0947H34.3255V17H32.2402V28.3933C32.2402 28.7725 32.5435 29.0947 32.9416 29.0947Z" fill="#0068FF" />
                                            <path
                                                d="M25.814 19.6924C23.1979 19.6924 21.0747 21.8156 21.0747 24.4317C21.0747 27.0478 23.1979 29.171 25.814 29.171C28.4301 29.171 30.5533 27.0478 30.5533 24.4317C30.5723 21.8156 28.4491 19.6924 25.814 19.6924ZM25.814 27.2184C24.2785 27.2184 23.0273 25.9672 23.0273 24.4317C23.0273 22.8962 24.2785 21.645 25.814 21.645C27.3495 21.645 28.6007 22.8962 28.6007 24.4317C28.6007 25.9672 27.3685 27.2184 25.814 27.2184Z"
                                                fill="#0068FF"
                                            />
                                            <path
                                                d="M40.4867 19.6162C37.8516 19.6162 35.7095 21.7584 35.7095 24.3934C35.7095 27.0285 37.8516 29.1707 40.4867 29.1707C43.1217 29.1707 45.2639 27.0285 45.2639 24.3934C45.2639 21.7584 43.1217 19.6162 40.4867 19.6162ZM40.4867 27.2181C38.9322 27.2181 37.681 25.9669 37.681 24.4124C37.681 22.8579 38.9322 21.6067 40.4867 21.6067C42.0412 21.6067 43.2924 22.8579 43.2924 24.4124C43.2924 25.9669 42.0412 27.2181 40.4867 27.2181Z"
                                                fill="#0068FF"
                                            />
                                            <path d="M29.4562 29.0944H30.5747V19.957H28.6221V28.2793C28.6221 28.7153 29.0012 29.0944 29.4562 29.0944Z" fill="#0068FF" />
                                        </svg>
                                    </a>
                                )}

                                {fb && (
                                    <a
                                        href={fb}
                                        target="_blank"
                                        className="w-[30px] h-[30px] p-1.5 border bg-[#0866FF] rounded-full flex items-center justify-center textWhite text-[10px] font-bold hover:scale-110 transition-transform"
                                    >
                                        <svg viewBox="-5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#fff">
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <title>facebook [#176]</title> <desc>Created with Sketch.</desc> <defs> </defs>
                                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                    <g id="Dribbble-Light-Preview" transform="translate(-385.000000, -7399.000000)" fill="#fff">
                                                        <g id="icons" transform="translate(56.000000, 160.000000)">
                                                            <path
                                                                d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z"
                                                                id="facebook-[#176]"
                                                            ></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </a>
                                )}
                                {tiktok && (
                                    <a
                                        href={tiktok}
                                        target="_blank"
                                        className="w-[30px] h-[30px] p-1 bg-black border rounded-full flex items-center justify-center textWhite text-[10px] font-bold hover:scale-110 transition-transform flex-col leading-[8px] pt-[2px]"
                                    >
                                        <svg className="" fill="#fff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <title>tiktok</title>
                                                <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path>
                                            </g>
                                        </svg>
                                    </a>
                                )}
                                {youtube && (
                                    <a
                                        href={youtube}
                                        target="_blank"
                                        className="w-[30px] h-[30px]  bg-[#FF0033] rounded-full flex items-center justify-center textWhite text-[10px] font-bold hover:scale-110 transition-transform"
                                    >
                                        <svg className="w-4 h-4 ml-1" viewBox="-0.5 0 8 8" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffff">
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <title>play [#1001]</title> <desc>Created with Sketch.</desc> <defs> </defs>
                                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                    <g id="Dribbble-Light-Preview" transform="translate(-427.000000, -3765.000000)" fill="#fff">
                                                        <g id="icons" transform="translate(56.000000, 160.000000)">
                                                            <polygon id="play-[#1001]" points="371 3605 371 3613 378 3609"></polygon>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </a>
                                )}
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
            <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-4 items-start">
                <a href={`https://zalo.me/${zalo}`} target="_blank" className=" relative flex items-center cursor-pointer group">
                    <div className="w-10 h-10 bg-[#0088FF] rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform z-10 border-2 borderWhite">
                        <span className="text-white text-[9px] font-black uppercase trackingWider">ZALO</span>
                    </div>
                    {/* <div className="absolute left-10 bg-gray-100 text-[#0062BD] text-[10px] font-bold px-3 py-1 roundedR-md transition-opacity border border-gray-200 pointer-events-none whitespace-nowrap">
                        Chat Zalo
                    </div> */}
                </a>

                <a href={`tel:${phone}`} className="flex items-center cursor-pointer hover:scale-105 transition-transform origin-left">
                    <div className="w-10 h-10 bg-[#0088FF] rounded-full flex items-center justify-center shadow-lg z-10 border-2 border-white">
                        <svg className="w-4 h-4 text-white animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                        </svg>
                    </div>
                    {/* <div className="bg-[#f2f2f2] text-[#ff0000] font-black text-xs md:text-sm px-4 py-2 -ml-4 pl-6 roundedR-full shadow-sm border border-gray-200">
                        {phone}
                    </div> */}
                </a>
            </div>

            {/* Global Promotion & Inquiry Widget */}
            <GlobalPromo />
        </>
    );
}
