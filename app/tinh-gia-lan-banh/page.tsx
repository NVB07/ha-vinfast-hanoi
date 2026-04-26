import React from "react";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export const metadata = {
    title: "Tính Giá Lăn Bánh Xe VinFast | VinFast",
    description: "Công cụ tính giá lăn bánh xe VinFast và các câu hỏi thường gặp.",
};

export default async function TinhGiaLanBanhPage() {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    const { data: settings } = await supabase.from("general_settings").select("*").single();
    const phone = settings?.phone || settings?.zalo || "1900 23 23 89";

    return (
        <main className="min-h-screen bg-white py-12 md:py-16">
            <div className="container mx-auto px-4 max-w-4xl text-gray-700">
                <div className="mb-12">
                    <h1 className="text-3xl font-bold text-gray-700 mb-4">Bảng giá xe VinFast lăn bánh</h1>
                    <p className="text-[15px] leading-relaxed">
                        <strong className="text-gray-800">Giá lăn bánh xe VinFast</strong> tùy thuộc vào từng loại xe, phiên bản, khu vực và thời gian nhận xe. Để biết thông tin chi tiết, sử dụng công cụ tính giá xe lăn bánh hoặc liên hệ <strong>HOTLINE</strong> chúng tôi để có giá nhanh nhất : <strong>{phone}</strong>
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-gray-700 mb-6">Các câu hỏi liên quan</h2>
                    
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-bold text-gray-700 mb-2">Giá xe VinFast bao gồm những gì?</h3>
                            <p className="text-[15px] leading-relaxed text-gray-600">
                                Xe VinFast được công bố giá đã bao gồm: thuế giá trị gia tăng VAT 10%, chưa bao gồm chi phí, đăng ký, đăng kiểm, lăn bánh. Vui lòng liên hệ Hotline <strong>{phone}</strong> để biết thêm thông tin chi tiết.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-gray-700 mb-2">Có xe VinFast giao ngay không? Đặt bao lâu thì có xe?</h3>
                            <p className="text-[15px] leading-relaxed text-gray-600">
                                Hiện nay lượng xe VinFast có xe giao ngay tùy thuộc vào từng phiên bản, màu sắc và từng khu vực. Vui lòng liên hệ để có thông tin chính xác.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-gray-700 mb-2">Xe có đủ màu không?</h3>
                            <p className="text-[15px] leading-relaxed text-gray-600">
                                Một số màu sắc phổ biến sẽ có xe giao sớm hơn so với những màu còn lại, ví dụ: trắng, đỏ. Nếu đặt hàng sẽ đảm bảo có màu xe giao cho Khách hàng.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-gray-700 mb-2">Xe có hỗ trợ trả góp không?</h3>
                            <p className="text-[15px] leading-relaxed text-gray-600">
                                Mua xe VinFast sẽ được hỗ trợ trả góp lên đến 70%, đang áp dụng chính sách ưu đãi lãi suất 0% trong 2 năm đầu.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-gray-700 mb-2">Bảo hành xe như thế nào?</h3>
                            <p className="text-[15px] leading-relaxed text-gray-600">
                                Xe được bảo hành 3 năm không giới hạn Km trên toàn quốc và tại các đại lý ủy quyền chính thức của VinFast
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-gray-700 mb-2">Chi phí bảo dưỡng xe như thế nào?</h3>
                            <p className="text-[15px] leading-relaxed text-gray-600">
                                Giá bảo dưỡng xe VinFast rất cạnh tranh với chi phí thấp, cấp bảo dưỡng dài từ 7.500 km. Chỉ từ 1 triệu đồng cho mỗi lần đến xưởng dịch vụ.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
