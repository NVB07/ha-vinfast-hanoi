"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ProductDetailClient({ car, sliderImages }: { car: any; sliderImages: string[] }) {
    const [activeImage, setActiveImage] = useState(sliderImages[0] || car.image);

    return (
        <>
            {/* Left Column: Image Gallery & Buttons */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                {/* Main Image */}
                <div className="relative aspect-[4/3] w-full bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex items-center justify-center p-8 group">
                    <Image src={activeImage} alt={car.name} fill className="object-contain" priority />
                </div>

                {/* Thumbnails */}
                {sliderImages.length > 1 && (
                    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin px-1 justify-center lg:justify-start">
                        {sliderImages.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveImage(img)}
                                className={`relative h-20 w-32 flex-shrink-0 bg-white rounded border overflow-hidden transition-all duration-200 ${activeImage === img ? "border-[#0088FF] ring-2 ring-[#0088FF]" : "border-gray-200 hover:border-gray-300"}`}
                            >
                                <Image src={img} alt={`Thumb ${idx}`} fill className="object-cover" />
                            </button>
                        ))}
                    </div>
                )}

                {/* CTA Buttons */}
                <div className="flex items-center gap-4 mt-2 justify-center lg:justify-start">
                    <Button className="bg-[#cc0000] hover:bg-[#aa0000] text-white font-bold rounded px-8 h-12 shadow transition-all uppercase tracking-wide text-sm">
                        MUA NGAY
                    </Button>
                    <Button className="bg-[#0088FF] hover:bg-[#0066CC] text-white font-bold rounded px-8 h-12 shadow transition-all uppercase tracking-wide text-sm">
                        ĐĂNG KÝ LÁI THỬ
                    </Button>
                </div>
            </div>

            {/* Right Column: Information */}
            <div className="w-full lg:w-1/2 flex flex-col pt-4 lg:pt-0">
                <h1 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 tracking-wide mb-4">VINFAST {car.name}</h1>

                <hr className="w-16 border-t-[3px] border-gray-200 mb-8" />

                {/* Specs Grid */}
                <div className="grid grid-cols-3 gap-4 pb-8 border-b border-gray-200 mb-8">
                    <div className="flex flex-col items-center justify-center text-center border-r border-gray-200 last:border-0 relative">
                        <span className="text-[11px] text-gray-500 mb-3 font-medium uppercase tracking-wider">Số chỗ ngồi</span>
                        <span className="font-bold text-gray-800 text-lg">{car.slot}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center border-r border-gray-200 last:border-0 relative">
                        <span className="text-[11px] text-gray-500 mb-3 font-medium uppercase tracking-wider">Quãng đường tối đa</span>
                        <span className="font-bold text-gray-800 text-lg">{car.distance}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <span className="text-[11px] text-gray-500 mb-3 font-medium uppercase tracking-wider">Công suất</span>
                        <span className="font-bold text-gray-800 text-lg">{car.power || "Cập nhật..."}</span>
                    </div>
                </div>

                {/* Price Block */}
                <div className="border border-[#0088FF]/30 rounded-2xl bg-[#f8fbff] p-6 mb-8 outline outline-1 outline-offset-[-1px] outline-[#0088FF]/20 shadow-sm">
                    <h2 className="uppercase font-bold text-gray-800 mb-1.5 text-lg">VINFAST {car.name}</h2>
                    <p className="text-xs text-gray-500 mb-2 font-medium">Giá niêm yết</p>
                    <p className="text-2xl font-black text-[#0088FF]">{car.price}</p>
                </div>

                {/* Promotion Block */}
                {car.descript && (
                    <div className="border border-gray-200 rounded-2xl bg-white overflow-hidden shadow-sm">
                        {/* <div className="flex items-center gap-2 p-5 border-b border-gray-100 font-bold text-[#0088FF] bg-gray-50/50">
                        <Gift className="w-5 h-5 flex-shrink-0" /> <span className="text-[15px]">ƯU ĐÃI ĐẶC QUYỀN</span>
                    </div> */}

                        <div className="p-6 text-[13px]">
                            {car.descript ? (
                                <div
                                    className="[&_h1]:text-2xl [&_h1]:font-bold [&_h1]:mb-4 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mb-3 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:mb-2 [&_p]:mb-3 [&_li]:mb-3 [&_ul]:pl-5 [&_ul]:list-disc [&_ol]:pl-5 [&_ol]:list-decimal leading-relaxed break-words"
                                    dangerouslySetInnerHTML={{ __html: car.descript }}
                                />
                            ) : (
                                <p className="text-gray-500 italic text-center">Đang cập nhật thông tin ưu đãi...</p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
