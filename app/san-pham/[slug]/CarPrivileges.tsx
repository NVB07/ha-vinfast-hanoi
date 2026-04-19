import React from "react";
import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function CarPrivileges({ car }: { car: any }) {
    if (!car) return null;

    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    const { data: settings } = await supabase.from("general_settings").select("*").single();
    const phone = settings?.phone || settings?.zalo || "0345 726 001";

    return (
        <div className="container mx-auto px-4 max-w-6xl mt-24">
            <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-px bg-gray-200 flex-1"></div>
                <h2 className="text-xl md:text-2xl font-bold uppercase text-gray-800 text-center tracking-wide px-4 whitespace-nowrap">
                    NHỮNG ĐẶC QUYỀN SỞ HỮU VINFAST {car.name?.toUpperCase()}
                </h2>
                <div className="h-px bg-gray-200 flex-1"></div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <Image
                    src="/images/shared/1.webp"
                    alt="Đặc quyền 1"
                    width={600}
                    height={400}
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <Image
                    src="/images/shared/2.webp"
                    alt="Đặc quyền 2"
                    width={600}
                    height={400}
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <Image
                    src="/images/shared/3.webp"
                    alt="Đặc quyền 3"
                    width={600}
                    height={400}
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <Image
                    src="/images/shared/4.webp"
                    alt="Đặc quyền 4"
                    width={600}
                    height={400}
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                />
            </div>

            <div className="w-full relative overflow-hidden rounded-2xl flex items-center min-h-[450px] md:min-h-[500px] mt-4 shadow-sm group bg-gray-50 mb-12">
                <Image
                    src="/images/shared/5.png"
                    alt="Giá sạc pin"
                    fill
                    className="object-cover z-0 group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                />
                <div className="relative z-10 bg-white rounded-xl shadow-xl p-6 md:p-8 w-[90%] sm:w-[350px] md:w-[400px] flex flex-col items-center ml-[5%] md:ml-[10%] my-8">
                    <h3 className="text-xl md:text-2xl font-black uppercase text-gray-800 mb-6 tracking-wide">GIÁ SẠC PIN</h3>
                    <div className="w-full flex justify-between border-b border-gray-100 pb-3 mb-3 text-sm md:text-base px-2">
                        <span className="text-gray-500 font-medium">Đơn giá:</span>
                        <span className="text-[#cc0000] font-bold">{car.battery_price || "3.858 vnđ / KWh"}</span>
                    </div>
                    <div className="w-full flex justify-between border-b border-gray-100 pb-3 mb-4 text-sm md:text-base px-2">
                        <span className="text-gray-500 font-medium">Phí chiếm chỗ:</span>
                        <span className="text-[#cc0000] font-bold">{car.overtime_fee || "1000 vnđ / phút"}</span>
                    </div>
                    <p className="text-[11px] md:text-xs text-center text-gray-600 mb-6 md:mb-8 font-medium">Tính từ phút thứ 31 trở đi, sau khi sạc đầy</p>
                    <a
                        href={`tel:${phone}`}
                        className="bg-[#cd6b48] hover:bg-[#b05b3d] text-white font-bold rounded-lg px-6 py-3.5 w-full shadow-md transition-all text-sm md:text-[15px] tracking-wider uppercase text-center block"
                    >
                        Tư vấn: {phone}
                    </a>
                </div>
            </div>
        </div>
    );
}
