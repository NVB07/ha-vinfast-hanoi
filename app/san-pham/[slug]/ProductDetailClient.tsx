"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, useCarousel } from "@/components/ui/carousel";

function ThumbnailArrows() {
    const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel();
    return (
        <>
            <button
                type="button"
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                aria-label="Previous slide"
                className="absolute -left-10 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center cursor-pointer border-none outline-none text-gray-500 hover:text-[#0088FF] disabled:opacity-30 disabled:cursor-not-allowed bg-transparent"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>
            <button
                type="button"
                onClick={scrollNext}
                disabled={!canScrollNext}
                aria-label="Next slide"
                className="absolute -right-10 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center cursor-pointer border-none outline-none text-gray-500 hover:text-[#0088FF] disabled:opacity-30 disabled:cursor-not-allowed bg-transparent"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M9 18l6-6-6-6" />
                </svg>
            </button>
        </>
    );
}

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
                    <div className="relative w-full px-10">
                        <Carousel opts={{ align: "start" }} className="w-full">
                            <CarouselContent className="-ml-4">
                                {sliderImages.map((img, idx) => (
                                    <CarouselItem key={idx} className="pl-4 basis-[120px] sm:basis-[140px]">
                                        <button
                                            onClick={() => setActiveImage(img)}
                                            className={`relative h-20 w-full flex-shrink-0 bg-white rounded border overflow-hidden transition-all duration-200 ${activeImage === img ? "border-[#0088FF] ring-[1.5px] ring-[#0088FF]" : "border-gray-200 hover:border-gray-300"}`}
                                        >
                                            <Image src={img} alt={`Thumb ${idx}`} fill className="object-contain p-1" />
                                        </button>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <ThumbnailArrows />
                        </Carousel>
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
            <div className="w-full lg:w-1/2 flex flex-col pt-4 lg:pt-0 min-w-0">
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
                        <span className="font-bold text-gray-800 text-lg">
                            {car.distance}
                            {car.distance_plus && (
                                <span className="text-sm font-medium text-gray-500 ml-1">
                                    <span className="text-gray-300 mx-1">|</span> {car.distance_plus}
                                </span>
                            )}
                        </span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <span className="text-[11px] text-gray-500 mb-3 font-medium uppercase tracking-wider">Công suất</span>
                        <span className="font-bold text-gray-800 text-lg">
                            {car.power || "Cập nhật..."}
                            {car.power_plus && (
                                <span className="text-sm font-medium text-gray-500 ml-1">
                                    <span className="text-gray-300 mx-1">|</span> {car.power_plus}
                                </span>
                            )}
                        </span>
                    </div>
                </div>

                {/* Price Blocks */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <div className="flex-1 border border-[#0088FF]/30 rounded-2xl bg-[#f8fbff] p-5 md:p-6 outline outline-1 outline-offset-[-1px] outline-[#0088FF]/20 shadow-sm">
                        <h2 className="uppercase font-bold text-gray-800 mb-1.5 text-base md:text-lg">
                            VINFAST {car.name} {car.price_plus ? "ECO" : ""}
                        </h2>
                        <p className="text-[11px] md:text-xs text-gray-500 mb-2 font-medium">Giá niêm yết</p>
                        <p className="text-xl md:text-2xl font-black text-[#0088FF]">{car.price}</p>
                    </div>

                    {car.price_plus && (
                        <div className="flex-1 border border-rose-500/30 rounded-2xl bg-rose-50/50 p-5 md:p-6 outline outline-1 outline-offset-[-1px] outline-rose-500/20 shadow-sm">
                            <h2 className="uppercase font-bold text-gray-800 mb-1.5 text-base md:text-lg">VINFAST {car.name} PLUS</h2>
                            <p className="text-[11px] md:text-xs text-gray-500 mb-2 font-medium">Giá niêm yết</p>
                            <p className="text-xl md:text-2xl font-black text-rose-600">{car.price_plus}</p>
                        </div>
                    )}
                </div>

                {/* Promotion Block */}
                {car.descript && car.descript !== "<p></p>" && (
                    <div className="border border-gray-200 rounded-2xl bg-white overflow-hidden shadow-sm">
                        {/* <div className="flex items-center gap-2 p-5 border-b border-gray-100 font-bold text-[#0088FF] bg-gray-50/50">
                        <Gift className="w-5 h-5 flex-shrink-0" /> <span className="text-[15px]">ƯU ĐÃI ĐẶC QUYỀN</span>
                    </div> */}

                        <div className="p-6 text-[13px]">
                            {car.descript ? (
                                <div
                                    className="[&_h1]:text-2xl [&_h1]:font-bold [&_h1]:mb-4 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mb-3 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:mb-2 [&_p]:mb-3 [&_li]:mb-3 [&_ul]:pl-5 [&_ul]:list-disc [&_ol]:pl-5 [&_ol]:list-decimal leading-relaxed text-gray-600"
                                    dangerouslySetInnerHTML={{ __html: car.descript.replace(/&nbsp;/g, " ") }}
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
