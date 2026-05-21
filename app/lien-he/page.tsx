"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/utils/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ContactInfo {
    phone: string;
    zalo: string;
    email: string;
    address: string;
    facebook: string;
    tiktok: string;
    youtube: string;
}

const DEFAULT_CONTACT: ContactInfo = {
    phone: "1900 23 23 89",
    zalo: "0345726001",
    email: "vinfasthanoi@vingroup.net",
    address: "Hà Nội, Việt Nam",
    facebook: "hhttps://www.facebook.com/FanpageHaVinFastMienBac",
    tiktok: "",
    youtube: "",
};

export default function ContactPage() {
    const [contact, setContact] = useState<ContactInfo>(DEFAULT_CONTACT);
    const [loading, setLoading] = useState(true);

    const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const supabase = createClient();
                const { data } = await supabase.from("general_settings").select("*").single();
                if (data) {
                    setContact({
                        phone: data.phone || DEFAULT_CONTACT.phone,
                        zalo: data.zalo || DEFAULT_CONTACT.zalo,
                        email: data.email || DEFAULT_CONTACT.email,
                        address: data.address || DEFAULT_CONTACT.address,
                        facebook: data.facebook || DEFAULT_CONTACT.facebook,
                        tiktok: data.tiktok || "",
                        youtube: data.youtube || "",
                    });
                }
            } catch (err) {
                console.error("Failed to load contact settings:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchSettings();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name || !form.phone) return alert("Vui lòng điền đầy đủ họ tên và số điện thoại!");
        setSending(true);
        try {
            const response = await fetch("/api/send-lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: form.name,
                    phone: form.phone,
                    car: `[Liên hệ] Email: ${form.email || "—"} | Nội dung: ${form.message || "Không có"}`,
                }),
            });
            if (response.ok) {
                setSent(true);
                setForm({ name: "", phone: "", email: "", message: "" });
            } else {
                alert("Có lỗi xảy ra, vui lòng thử lại sau!");
            }
        } catch {
            alert("Có lỗi xảy ra, vui lòng thử lại sau!");
        } finally {
            setSending(false);
        }
    };

    const addressLines = contact.address ? contact.address.split("\n").filter(Boolean) : ["Hà Nội, Việt Nam"];

    return (
        <main className="flex-1 w-full bg-gray-50 min-h-screen">
            {/* Hero Header */}
            <div className="relative bg-gradient-to-r from-[#0062BD] to-[#0088FF] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute right-0 bottom-0 w-[600px] h-[600px] border-[30px] border-white rotate-45 rounded-[60px] translate-x-40 translate-y-40" />
                    <div className="absolute right-0 bottom-0 w-[400px] h-[400px] border-[20px] border-white rotate-45 rounded-[40px] translate-x-20 translate-y-20" />
                </div>
                <div className="relative container mx-auto px-4 max-w-5xl py-12 md:py-16">
                    <nav className="text-xs text-blue-100 mb-6 flex items-center gap-2">
                        <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
                        <span>/</span>
                        <span className="text-white font-medium">Liên hệ</span>
                    </nav>
                    <div className="max-w-2xl">
                        <span className="bg-white/20 text-white text-[10px] font-bold px-3 py-1 uppercase rounded-full tracking-wider mb-4 inline-block backdrop-blur-sm">
                            HỖ TRỢ 24/7
                        </span>
                        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">LIÊN HỆ VỚI CHÚNG TÔI</h1>
                        <p className="text-sm text-blue-50/90 leading-relaxed max-w-xl">
                            Đại lý VinFast chính hãng tại Hà Nội — Chúng tôi sẵn sàng hỗ trợ bạn trải nghiệm, lái thử miễn phí và tư vấn chính sách ưu đãi tốt nhất.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-5xl py-12">

                {/* Contact Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">

                    {/* Phone */}
                    <a
                        href={`tel:${contact.phone.replace(/\s/g, "")}`}
                        className="group bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-[#0088FF] hover:shadow-md transition-all duration-300 flex flex-col items-center text-center gap-3"
                    >
                        <div className="w-12 h-12 bg-blue-50 group-hover:bg-[#0088FF] rounded-full flex items-center justify-center transition-colors duration-300">
                            <svg className="w-5 h-5 text-[#0088FF] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.302a12.017 12.017 0 0 1-5.905-5.905c-.242-.44-.076-.927.302-1.21l1.293-.97a2.25 2.25 0 0 0 .417-1.173L9.763 5.17c-.125-.501-.575-.852-1.091-.852H6.75A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Hotline</p>
                            <p className="text-sm font-extrabold text-gray-900 group-hover:text-[#0062BD] transition-colors">{loading ? "..." : contact.phone}</p>
                        </div>
                    </a>

                    {/* Zalo */}
                    <a
                        href={`https://zalo.me/${contact.zalo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-[#0088FF] hover:shadow-md transition-all duration-300 flex flex-col items-center text-center gap-3"
                    >
                        <div className="w-12 h-12 bg-blue-50 group-hover:bg-[#0088FF] rounded-full flex items-center justify-center transition-colors duration-300">
                            <svg className="w-5 h-5 text-[#0088FF] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 13.5c-.28.56-1.12 1.26-1.96 1.4-.52.1-1.16.14-3.78-.82-3.18-1.18-5.22-4.36-5.38-4.56-.16-.2-1.3-1.74-1.3-3.32s.84-2.34 1.14-2.66c.3-.32.66-.4.88-.4h.62c.2 0 .48.08.72.56.28.56.9 2.22.98 2.38.08.16.14.36.02.56-.12.22-.18.34-.34.52-.16.18-.34.4-.48.54-.16.16-.32.34-.14.66.18.32.8 1.32 1.72 2.14 1.18 1.06 2.18 1.38 2.5 1.54.32.16.5.14.68-.08.18-.22.78-.92 1-1.24.2-.32.4-.26.68-.16.28.1 1.78.84 2.08.98.3.14.5.22.58.34.08.12.08.72-.2 1.28z"/>
                            </svg>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Zalo</p>
                            <p className="text-sm font-extrabold text-gray-900 group-hover:text-[#0062BD] transition-colors">{loading ? "..." : contact.zalo}</p>
                        </div>
                    </a>

                    {/* Email */}
                    <a
                        href={`mailto:${contact.email}`}
                        className="group bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-[#0088FF] hover:shadow-md transition-all duration-300 flex flex-col items-center text-center gap-3"
                    >
                        <div className="w-12 h-12 bg-blue-50 group-hover:bg-[#0088FF] rounded-full flex items-center justify-center transition-colors duration-300">
                            <svg className="w-5 h-5 text-[#0088FF] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Email</p>
                            <p className="text-[11px] font-extrabold text-gray-900 group-hover:text-[#0062BD] transition-colors break-all">{loading ? "..." : (contact.email || "—")}</p>
                        </div>
                    </a>

                    {/* Facebook */}
                    {contact.facebook && (
                        <a
                            href={contact.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-[#0088FF] hover:shadow-md transition-all duration-300 flex flex-col items-center text-center gap-3"
                        >
                            <div className="w-12 h-12 bg-blue-50 group-hover:bg-[#0088FF] rounded-full flex items-center justify-center transition-colors duration-300">
                                <svg className="w-5 h-5 text-[#0088FF] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Facebook</p>
                                <p className="text-sm font-extrabold text-gray-900 group-hover:text-[#0062BD] transition-colors">VinFast Hà Nội</p>
                            </div>
                        </a>
                    )}
                </div>

                {/* Main Content: Map + Form */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

                    {/* Left: Address info + Social links */}
                    <div className="flex flex-col gap-6">

                        {/* Address block */}
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7 flex flex-col gap-5">
                            <div className="flex items-center gap-3 border-b border-gray-100 pb-5">
                                <div className="w-10 h-10 bg-[#0062BD] rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Địa chỉ Showroom</p>
                                    <h2 className="text-sm font-extrabold text-gray-900 mt-0.5">VinFast Hà Nội</h2>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 text-sm text-gray-700">
                                {addressLines.map((line, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <span className="mt-0.5 text-[#0062BD] flex-shrink-0">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l2 2" />
                                            </svg>
                                        </span>
                                        <span className="leading-relaxed">{line}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Working hours */}
                            <div className="bg-blue-50/60 rounded-xl p-4 border border-blue-100/60">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#0062BD] mb-2">Giờ làm việc</p>
                                <div className="flex flex-col gap-1 text-xs text-gray-700">
                                    <div className="flex justify-between">
                                        <span className="font-semibold">Thứ 2 – Thứ 6</span>
                                        <span>07:30 – 18:00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-semibold">Thứ 7 – Chủ nhật</span>
                                        <span>08:00 – 17:30</span>
                                    </div>
                                    <div className="flex justify-between mt-1 border-t border-blue-100 pt-1">
                                        <span className="font-bold text-[#0062BD]">Hotline hỗ trợ</span>
                                        <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="font-bold text-[#0062BD] hover:underline">{contact.phone}</a>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            {(contact.facebook || contact.tiktok || contact.youtube) && (
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Mạng xã hội</p>
                                    <div className="flex items-center gap-3">
                                        {contact.facebook && (
                                            <a href={contact.facebook} target="_blank" rel="noopener noreferrer"
                                               className="w-9 h-9 bg-[#1877f2] rounded-lg flex items-center justify-center text-white hover:opacity-80 transition-opacity shadow-sm">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                                </svg>
                                            </a>
                                        )}
                                        {contact.tiktok && (
                                            <a href={contact.tiktok} target="_blank" rel="noopener noreferrer"
                                               className="w-9 h-9 bg-[#010101] rounded-lg flex items-center justify-center text-white hover:opacity-80 transition-opacity shadow-sm">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
                                                </svg>
                                            </a>
                                        )}
                                        {contact.youtube && (
                                            <a href={contact.youtube} target="_blank" rel="noopener noreferrer"
                                               className="w-9 h-9 bg-[#FF0000] rounded-lg flex items-center justify-center text-white hover:opacity-80 transition-opacity shadow-sm">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Quick CTA buttons */}
                        <div className="grid grid-cols-2 gap-3">
                            <a href={`tel:${contact.phone.replace(/\s/g, "")}`}
                               className="flex items-center justify-center gap-2 bg-[#0088FF] hover:bg-[#0066CC] text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-md hover:-translate-y-0.5 text-xs uppercase tracking-wider">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.302a12.017 12.017 0 0 1-5.905-5.905c-.242-.44-.076-.927.302-1.21l1.293-.97a2.25 2.25 0 0 0 .417-1.173L9.763 5.17c-.125-.501-.575-.852-1.091-.852H6.75A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                Gọi ngay
                            </a>
                            <a href={`https://zalo.me/${contact.zalo}`} target="_blank" rel="noopener noreferrer"
                               className="flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-[#0088FF] border-2 border-[#0088FF] font-bold py-3.5 px-4 rounded-xl transition-all shadow-sm hover:-translate-y-0.5 text-xs uppercase tracking-wider">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 13.5c-.28.56-1.12 1.26-1.96 1.4-.52.1-1.16.14-3.78-.82-3.18-1.18-5.22-4.36-5.38-4.56-.16-.2-1.3-1.74-1.3-3.32s.84-2.34 1.14-2.66c.3-.32.66-.4.88-.4h.62c.2 0 .48.08.72.56.28.56.9 2.22.98 2.38.08.16.14.36.02.56-.12.22-.18.34-.34.52-.16.18-.34.4-.48.54-.16.16-.32.34-.14.66.18.32.8 1.32 1.72 2.14 1.18 1.06 2.18 1.38 2.5 1.54.32.16.5.14.68-.08.18-.22.78-.92 1-1.24.2-.32.4-.26.68-.16.28.1 1.78.84 2.08.98.3.14.5.22.58.34.08.12.08.72-.2 1.28z"/>
                                </svg>
                                Chat Zalo
                            </a>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7">
                        <div className="mb-6">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#0062BD]">GỬI TIN NHẮN CHO CHÚNG TÔI</span>
                            <h2 className="text-xl font-extrabold text-gray-900 mt-1.5">Đăng ký tư vấn & nhận báo giá</h2>
                            <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">Điền thông tin bên dưới, chuyên viên của chúng tôi sẽ liên hệ lại trong vòng <strong>15 phút</strong>.</p>
                        </div>

                        {sent ? (
                            <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-base font-extrabold text-gray-900">Gửi thành công!</p>
                                    <p className="text-sm text-gray-500 mt-1">Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong vòng 15 phút.</p>
                                </div>
                                <Button onClick={() => setSent(false)} variant="outline" className="border-[#0088FF] text-[#0088FF] text-xs font-bold mt-2">
                                    Gửi yêu cầu khác
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Họ và tên <span className="text-red-500">*</span></label>
                                    <Input
                                        required
                                        placeholder="Nguyễn Văn A"
                                        value={form.name}
                                        onChange={(e) => setForm(p => ({ ...p, name: e.target.value }))}
                                        className="h-10 text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Số điện thoại <span className="text-red-500">*</span></label>
                                    <Input
                                        required
                                        type="tel"
                                        placeholder="0xxx xxx xxx"
                                        value={form.phone}
                                        onChange={(e) => setForm(p => ({ ...p, phone: e.target.value }))}
                                        className="h-10 text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email <span className="text-gray-400 font-normal">(tuỳ chọn)</span></label>
                                    <Input
                                        type="email"
                                        placeholder="example@email.com"
                                        value={form.email}
                                        onChange={(e) => setForm(p => ({ ...p, email: e.target.value }))}
                                        className="h-10 text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Nội dung <span className="text-gray-400 font-normal">(tuỳ chọn)</span></label>
                                    <textarea
                                        rows={3}
                                        placeholder="Ví dụ: Tôi muốn tư vấn về VF 5, hỏi về chính sách trả góp..."
                                        value={form.message}
                                        onChange={(e) => setForm(p => ({ ...p, message: e.target.value }))}
                                        className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-none"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    disabled={sending}
                                    className="bg-[#0088FF] hover:bg-[#0066CC] text-white font-bold h-11 text-xs uppercase tracking-wider shadow-md mt-1"
                                >
                                    {sending ? "Đang gửi..." : "Gửi yêu cầu tư vấn"}
                                </Button>
                                <p className="text-[10px] text-gray-400 leading-relaxed text-center">
                                    Bằng cách gửi thông tin, bạn đồng ý để VinFast Hà Nội liên hệ hỗ trợ theo Chính sách Quyền riêng tư.
                                </p>
                            </form>
                        )}
                    </div>
                </div>

                {/* Google Map embed */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-10">
                    <div className="px-7 py-5 border-b border-gray-100 flex items-center justify-between">
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">VỊ TRÍ SHOWROOM</p>
                            <h3 className="text-base font-extrabold text-gray-900 mt-0.5">Bản đồ chỉ đường</h3>
                        </div>
                        <a
                            href={`https://www.google.com/maps/search/VinFast+${encodeURIComponent(addressLines[0] || "Hà Nội")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-bold text-[#0088FF] hover:underline flex items-center gap-1"
                        >
                            Xem trên Google Maps
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                    </div>
                    <div className="w-full h-[350px]">
                        <iframe
                            title="VinFast Hà Nội - Bản đồ"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238136.38869088658!2d105.70073882851562!3d21.02277419999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2sHanoi%2C%20Vietnam!5e0!3m2!1sen!2s!4v1715600000000!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                        />
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: (
                                <svg className="w-6 h-6 text-[#0088FF]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                </svg>
                            ),
                            title: "Đại lý chính hãng",
                            desc: "Được VinFast uỷ quyền chính thức, đảm bảo nguồn gốc xe và chính sách bảo hành đầy đủ."
                        },
                        {
                            icon: (
                                <svg className="w-6 h-6 text-[#0088FF]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            ),
                            title: "Hỗ trợ nhanh chóng",
                            desc: "Đội ngũ tư vấn chuyên nghiệp phản hồi trong vòng 15 phút, hỗ trợ 7 ngày/tuần."
                        },
                        {
                            icon: (
                                <svg className="w-6 h-6 text-[#0088FF]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                </svg>
                            ),
                            title: "Lái thử miễn phí",
                            desc: "Đặt lịch lái thử ngay hôm nay, chúng tôi đưa xe đến tận nơi theo yêu cầu của bạn."
                        },
                    ].map((item, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col items-center text-center gap-4 hover:border-[#0088FF] hover:shadow-md transition-all duration-300">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-sm font-extrabold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
