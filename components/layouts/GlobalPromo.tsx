"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function GlobalPromo() {
    const [showPromoPopup, setShowPromoPopup] = useState(false);
    const [promoName, setPromoName] = useState("");
    const [promoPhone, setPromoPhone] = useState("");
    const [promoCar, setPromoCar] = useState("");
    const [promoLoading, setPromoLoading] = useState(false);

    useEffect(() => {
        const hasSeen = localStorage.getItem("hasSeenPromoPopup");
        if (!hasSeen) {
            const timer = setTimeout(() => {
                setShowPromoPopup(true);
            }, 2500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClosePromoPopup = () => {
        setShowPromoPopup(false);
        localStorage.setItem("hasSeenPromoPopup", "true");
    };

    const handlePromoSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!promoName || !promoPhone || !promoCar) {
            return alert("Vui lòng điền đầy đủ thông tin!");
        }
        setPromoLoading(true);

        try {
            const response = await fetch("/api/send-lead", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: promoName,
                    phone: promoPhone,
                    car: promoCar,
                }),
            });

            if (response.ok) {
                alert("Đăng ký nhận báo giá thành công! Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.");
                setPromoName("");
                setPromoPhone("");
                setPromoCar("");
                handleClosePromoPopup();
            } else {
                alert("Đã có lỗi xảy ra, vui lòng thử lại sau!");
            }
        } catch (err) {
            console.error("Promo submission error:", err);
            alert("Không thể gửi thông tin, vui lòng kiểm tra kết nối mạng!");
        } finally {
            setPromoLoading(false);
        }
    };

    const carOptions = [
        "VinFast VF 3",
        "VinFast VF 5 Plus",
        "VinFast VF e34",
        "VinFast VF 6",
        "VinFast VF 7",
        "VinFast VF 8",
        "VinFast VF 9"
    ];

    return (
        <>
            {/* Promo Popup Modal */}
            {showPromoPopup && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-[2px] z-[9999] flex items-center justify-center p-4">
                    <div className="absolute inset-0 cursor-default" onClick={handleClosePromoPopup}></div>

                    <div className="relative bg-white w-full max-w-[440px] rounded-2xl overflow-hidden shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200 flex flex-col">
                        <div className="relative aspect-[16/9] w-full bg-gray-100">
                            <Image src="/images/promo_banner.png" alt="VinFast VF8 & VF9 Campaign" fill className="object-cover" priority />
                            <button
                                type="button"
                                onClick={handleClosePromoPopup}
                                className="absolute top-3 right-3 text-white/90 hover:text-white bg-black/30 hover:bg-black/50 rounded-full p-1.5 transition-all cursor-pointer border-none outline-none z-20"
                                aria-label="Close promotion popup"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <form onSubmit={handlePromoSubmit} className="p-6 md:p-8 flex flex-col gap-4">
                            <h3 className="text-sm md:text-base font-extrabold text-gray-800 text-center tracking-tight leading-snug uppercase mb-2">
                                NHẬN BÁO GIÁ ƯU ĐÃI - MIỄN PHÍ 100% THUẾ TRƯỚC
                            </h3>

                            <Input
                                required
                                value={promoName}
                                onChange={(e) => setPromoName(e.target.value)}
                                className="bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 rounded-lg h-[42px] px-4 text-xs md:text-sm focus:ring-2 focus:ring-[#0062BD] focus:border-[#0062BD] transition-all w-full shadow-sm"
                                placeholder="Họ và tên"
                            />
                            <Input
                                required
                                type="tel"
                                value={promoPhone}
                                onChange={(e) => setPromoPhone(e.target.value)}
                                className="bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 rounded-lg h-[42px] px-4 text-xs md:text-sm focus:ring-2 focus:ring-[#0062BD] focus:border-[#0062BD] transition-all w-full shadow-sm"
                                placeholder="Số điện thoại"
                            />

                            <div className="flex flex-col gap-1">
                                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">CHỌN DÒNG XE VINFAST</label>
                                <div className="relative">
                                    <select
                                        required
                                        value={promoCar}
                                        onChange={(e) => setPromoCar(e.target.value)}
                                        className="w-full bg-white border border-gray-300 text-gray-700 rounded-lg h-[42px] px-4 appearance-none focus:ring-2 focus:ring-[#0062BD] focus:border-[#0062BD] transition-all text-xs md:text-sm outline-none cursor-pointer shadow-sm"
                                    >
                                        <option value="">== Chọn dòng xe VinFast ==</option>
                                        {carOptions.map((carName) => (
                                            <option key={carName} value={carName}>
                                                {carName}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                disabled={promoLoading}
                                className="bg-[#0088FF] hover:bg-[#0066CC] text-white font-bold rounded-lg h-[42px] text-[11px] md:text-xs uppercase transition-all shadow-md border-none mt-2 flex items-center justify-center gap-2"
                            >
                                {promoLoading ? "Đang gửi..." : "NHẬN BÁO GIÁ"}
                            </Button>
                        </form>
                    </div>
                </div>
            )}

            {/* Floating Promo Button to Open Popup (Left Aligned, Always Visible) */}
            <div className="fixed bottom-6 left-4 z-40 flex flex-col gap-4 items-start">
                <button
                    type="button"
                    onClick={() => setShowPromoPopup(true)}
                    className="relative flex items-center cursor-pointer group border-none outline-none bg-transparent hover:scale-105 transition-transform origin-left"
                >
                    {/* Main Circle Icon Button */}
                    <div className="w-10 h-10 bg-gradient-to-tr from-red-600 to-red-500 rounded-full flex items-center justify-center shadow-lg z-10 border-2 border-white">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581a1.8 1.8 0 0 0 2.546 0l4.319-4.319a1.8 1.8 0 0 0 0-2.546L11.16 3.659A2.25 2.25 0 0 0 9.568 3Z"
                            />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 7.5h.008v.008H6V7.5Z" />
                        </svg>
                    </div>

                    {/* Slide out Bubble text */}
                    <div className="bg-gray-100 text-gray-800 font-extrabold text-xs px-4 py-2 -ml-4 pl-6 rounded-r-full shadow-sm border border-gray-200 flex items-center gap-1.5 transition-all">
                        Tư vấn
                    </div>
                </button>
            </div>
        </>
    );
}
