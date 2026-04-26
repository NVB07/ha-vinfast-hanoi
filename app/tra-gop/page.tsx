import React from "react";
import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export const metadata = {
    title: "Mua Xe VinFast Trả Góp | VinFast",
    description: "Thủ tục và quy trình mua xe VinFast trả góp chi tiết.",
};

export default async function TraGopPage() {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    const { data: settings } = await supabase.from("general_settings").select("*").single();
    const phone = settings?.phone || settings?.zalo || "1900 23 23 89";

    return (
        <main className="min-h-screen bg-white py-12 md:py-16">
            <div className="container mx-auto px-4 max-w-4xl text-gray-700">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 uppercase">Mua Xe Trả Góp</h1>

                <p className="text-[15px] leading-relaxed mb-8">
                    Chúng tôi xin chia sẻ cùng Quý khách hàng các vấn đề liên quan đến việc mua trả góp một chiếc ô tô bao gồm:
                    <strong> Giấy tờ thủ tục, Quy trình triển khai, Một số vấn đề cần lưu ý</strong>.
                </p>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-[#0062BD] mb-4">1. Hồ sơ giấy tờ cần chuẩn bị</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-6 rounded-md border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-800 mb-3 uppercase">Khách hàng là cá nhân:</h3>
                            <ul className="list-disc pl-5 space-y-2 text-[14px] text-gray-600">
                                <li>
                                    <strong>Giấy tờ tùy thân:</strong> Căn cước công dân / Hộ chiếu.
                                </li>
                                <li>
                                    <strong>Nếu đã kết hôn:</strong> Giấy đăng ký kết hôn, CCCD của vợ/chồng.
                                </li>
                                <li>
                                    <strong>Nếu còn độc thân:</strong> Giấy xác nhận tình trạng hôn nhân.
                                </li>
                                <li>
                                    <strong>Giấy tờ chứng minh thu nhập cá nhân:</strong>
                                    <ul className="list-disc pl-5 mt-2 space-y-1">
                                        <li>Thu nhập từ lương: bảng lương, hợp đồng lao động tối thiểu 01 năm, sao kê tài khoản cá nhân, sổ tiết kiệm…</li>
                                        <li>Trường hợp có Công ty riêng: cung cấp giấy đăng ký kinh doanh và báo cáo tài chính công ty.</li>
                                        <li>Trường hợp là hộ kinh doanh: cung cấp ĐKKD cá thể và sổ ghi chép bán hàng 03 tháng gần nhất.</li>
                                        <li>Thu nhập từ cho thuê nhà/phòng trọ: cung cấp hợp đồng cho thuê…</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Giấy tờ chứng minh tài sản sở hữu có giá trị:</strong> nhà cửa, xe, bất động sản, cổ phiếu, cổ phần…
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-md border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-800 mb-3 uppercase">Khách hàng là doanh nghiệp:</h3>
                            <ul className="list-disc pl-5 space-y-2 text-[14px] text-gray-600">
                                <li>Giấy phép kinh doanh.</li>
                                <li>Báo cáo thuế 01 năm gần nhất.</li>
                                <li>Báo cáo hoá đơn VAT 01 năm gần nhất.</li>
                                <li>Điều lệ công ty / Biên bản họp hội đồng thành viên.</li>
                                <li>Bảng copy giấy đăng ký sử dụng mẫu dấu.</li>
                                <li>Giấy tờ chứng minh tài sản: Nhà máy, dây chuyền, máy móc, thiết bị, nhà xưởng, ôtô…</li>
                                <li>Đơn xin vay vốn và phương án trả lãi.</li>
                                <li>Hợp đồng kinh tế đầu ra, đầu vào.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-[#0062BD] mb-4">2. Các bước triển khai mua trả góp</h2>
                    <div className="space-y-4">
                        <div className="border-l-4 border-[#0062BD] pl-4">
                            <h4 className="font-bold text-gray-800">Bước 1:</h4>
                            <p className="text-[14px] text-gray-600">Cung cấp đầy đủ và chính xác các loại giấy tờ mà ngân hàng cho vay yêu cầu.</p>
                        </div>
                        <div className="border-l-4 border-[#0062BD] pl-4">
                            <h4 className="font-bold text-gray-800">Bước 2: Ngân hàng thẩm định hồ sơ</h4>
                            <p className="text-[14px] text-gray-600">
                                Sau khi thẩm định, nếu thiếu giấy tờ ngân hàng sẽ yêu cầu bổ sung. Nếu hồ sơ đầy đủ, ngân hàng sẽ phê duyệt cho vay và thông báo bảo lãnh
                                khoản vay.
                            </p>
                        </div>
                        <div className="border-l-4 border-[#0062BD] pl-4">
                            <h4 className="font-bold text-gray-800">Bước 3: Nộp tiền đối ứng, đăng ký xe</h4>
                            <p className="text-[14px] text-gray-600">
                                Người mua xe nộp một khoản tiền đối ứng cho hãng xe ô tô để được xuất hóa đơn và gửi hồ sơ đi làm các thủ tục nộp thuế trước bạ, bấm biển
                                số, đăng kiểm.
                            </p>
                        </div>
                        <div className="border-l-4 border-[#0062BD] pl-4">
                            <h4 className="font-bold text-gray-800">Bước 4: Ký hợp đồng vay</h4>
                            <p className="text-[14px] text-gray-600">
                                Sau khi đã nhận được biển số xe và bản gốc giấy đăng ký xe thì mang những giấy tờ đó lên ngân hàng để ký hợp vay. Đồng thời, đóng những
                                khoản phí liên quan và đi công chứng giấy tờ, ký vào giấy nhận nợ từ ngân hàng.
                            </p>
                        </div>
                        <div className="border-l-4 border-[#0062BD] pl-4">
                            <h4 className="font-bold text-gray-800">Bước 5: Nhận xe</h4>
                            <p className="text-[14px] text-gray-600">
                                Ký hợp đồng xong, ngân hàng sẽ cung cấp bản sao giấy đăng ký xe và chuyển tiền cho đại lý bán xe ô tô. Cuối cùng, bạn đến đại lý nhận xe
                                và hoàn tất giao dịch.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-[#0062BD] mb-4">3. Các lưu ý quan trọng khi mua xe trả góp</h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-bold text-red-600 mb-2 uppercase">Nợ xấu có thể không mua được</h3>
                            <p className="text-[14px] leading-relaxed text-gray-600 mb-2">
                                <strong>NỢ XẤU</strong> là các khoản nợ khó đòi khi người vay không thể trả nợ khi đến hạn phải thanh toán như đã cam kết trong hợp đồng
                                tín dụng. Thời gian quá hạn thanh toán trên 90 ngày thì bị coi là nợ xấu.
                            </p>
                            <p className="text-[14px] leading-relaxed text-gray-600 mb-2">
                                Những người dính nợ xấu sẽ bị liệt kê vào danh sách nợ xấu trên hệ thống của Trung tâm Thông tin Tín dụng Quốc gia Việt Nam CIC.
                            </p>
                            <p className="text-[14px] leading-relaxed text-gray-600 mb-2">
                                Người đã dính vào nợ xấu từ nhóm 3 trở đi sẽ rất khó đi vay tại bất cứ ngân hàng nào.
                            </p>
                            <p className="text-[14px] leading-relaxed text-gray-600 mb-4">
                                Toàn bộ thông tin liên quan tới lịch sử tín dụng của khách hàng sẽ được lưu lại trên hệ thống ngân hàng quốc gia từ 03 – 05 năm tính từ
                                thời điểm khách hàng đi vay vốn.
                            </p>
                            <div className="relative w-full aspect-4/3 max-w-2xl mx-auto rounded-md overflow-hidden shadow-sm my-6 border border-gray-200">
                                <Image src="/images/sources/tra-gop.jpg" alt="Thông tin nợ xấu" fill className="object-cover" />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">Phí trả nợ trước hạn</h3>
                            <p className="text-[14px] leading-relaxed text-gray-600 mb-2">
                                Nếu trả hết nợ sớm hơn so với thỏa thuận, có thể bạn sẽ bị phạt. Mỗi ngân hàng sẽ có mức phí phạt trả nợ trước hạn khác nhau, thường dao
                                động từ 1 – 4% và giảm dần theo năm.
                            </p>
                            <p className="text-[14px] leading-relaxed text-gray-600">
                                Thời gian vay trả góp do khách hàng lựa chọn và 1 phần phụ thuộc vào điều kiện tài chính của khách hàng, sẽ giao động từ 12 tháng – 96
                                tháng.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">Lãi suất</h3>
                            <p className="text-[14px] leading-relaxed text-gray-600">
                                Lãi suất mua xe trả góp thường cao hơn lãi suất vay đầu tư kinh doanh, bởi đây là hình thức vay tiêu dùng. Thông thường các đơn vị cho vay
                                sẽ ưu đãi lãi suất cố định cho 1 đến 3 năm đầu tiên. Các năm sau lãi suất về mức quy định của Nhà nước. Mức trung bình cho các năm ưu đãi
                                khoảng 6%-8%/năm và sau ưu đãi sẽ vào khoảng 11%-13%/năm.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="bg-gray-50 border-l-4 border-red-600 p-6 rounded-r-md mt-10">
                    <p className="text-[15px] text-gray-800 font-medium mb-2">Mọi thông tin xin liên hệ với chúng tôi.</p>
                    <p className="text-lg font-black text-red-600">HOTLINE : {phone}</p>
                </div>
            </div>
        </main>
    );
}
