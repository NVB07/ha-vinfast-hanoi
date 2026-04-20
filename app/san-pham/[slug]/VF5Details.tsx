import React from "react";
import Image from "next/image";

const exteriorFeatures = [
    { image: "3.webp", title: "Đầu xe", desc: "Thiết kế kiểu bo tròn, tạo dáng vẻ thân thiện và khí động học cao" },
    { image: "4.webp", title: "Đèn pha", desc: "Là dạng Bi-halogen projector cho tính thẩm mỹ cực cao và chất lượng chiếu sáng tốt" },
    { image: "5.webp", title: "Logo Vinfast", desc: "Logo chữ V cách điệu và 2 đường chỉ được mạ crom kéo dài uyển chuyển 2 bên đầu xe" },
    { image: "6.webp", title: "Thân xe", desc: "Có thể cảm nhận thân xe khá dài so với chiều dài tổng thể chưa tới 4 mét. Trục cơ sở lớn hàng đầu phân khúc" },
    { image: "7.webp", title: "Mâm đúc", desc: "Được thiết kế hợp kim đúc đa sắc nhưng khá góc cạnh, mạnh mẽ" },
    { image: "8.webp", title: "Cổng sạc", desc: "Thiết kế ngay phía trên hốc bánh xe trước, 2 cổng sạc riêng biệt cho 2 chế độ sạc khác nhau" },
    { image: "9.webp", title: "Gương chiếu hậu", desc: "Được vuốt thon khí động học, ngoài ra có gập điện, chỉnh điện… khá đầy đủ" },
    { image: "10.webp", title: "Đuôi xe", desc: "Khá hài hoà với kiểu thiết kế đơn giản của tổng thể, phẩn cản sau màu đên mờ giúp tăng chất SUV" },
    { image: "11.webp", title: "Đèn hậu", desc: "Sử dụng công nghệ LED, tạo hình chữ V đặc trưng với nhận diện không lẫn vào đâu được" },
];

const interiorFeatures = [
    { image: "12.webp", title: "Vô lăng", desc: "Thiết kế kiểu khá to bản và có D-cut giúp người lái thoải mái hơn" },
    {
        image: "13.webp",
        title: "Ghế ngồi",
        desc: "Thiết kế form cơ bản, không cầu kỳ nhưng phù hợp với tất cả mọi người, được bọc da toàn bộ giúp không gian sang cao cấp hơn",
    },
    { image: "14.webp", title: "Màn hình", desc: "Kích thước 8 in, hiển thị sắc nét, điều khiển phần giải trí và hiển thị cài đặt, thông số hoạt động của xe" },
    { image: "15.webp", title: "Khu Yên ngựa", desc: "Thiết kệ hạ thấp tăng không gian thoáng đãng. Cần số là dạng điện tử núm xoay đặc trưng nhà Vinfast" },
    { image: "16.webp", title: "Khoang hành lý", desc: "Với thể tích khá bất ngờ cho mẫu xe hạng A lên tới 260 lít và tăng lên tới 900 lít khi gập phẳng hàng ghế sau" },
    { image: "17.webp", title: "Hàng ghế sau", desc: "Có không gian để chân vô cùng rộng rãi cho cả 3 người lớn, sàn xe siêu phẳng giúp việc để chân thoải mái hơn" },
];

const performanceFeatures = [
    {
        image: "18.webp",
        title: "Pin VF5",
        desc: "Sử dụng khối pin hiện đại LFP với dung lượng 37,2 KWh, VF5 cho sự khả năng di chuyển tới 300 km cho mỗi lần sạc đầy pin",
    },
    { image: "19.webp", title: "Động cơ VF5", desc: "VF5 sử dụng động cơ điện công suất tới 134 sức ngựa và dẫn động cầu trước tối ưu cho không gian phía sau" },
    {
        image: "20.webp",
        title: "Sạc pin VF5",
        desc: "Theo công bố của Vinfast, VF5 có khả năng sạc nhanh từ 10%-70% chỉ trong vòng 30 phút và 18 giờ sạc từ 0-100% đối với sạc thường 2,2 KW",
    },
];

const safetyFeatures = [
    { image: "22.webp", title: "Camera lùi", desc: "Giúp chủ xe dễ dàng quan sát khu vực phía sau trong các tình huống lùi xe" },
    {
        image: "23.webp",
        title: "Cảm biến áp suất lốp",
        desc: "Là trang bị cực quan trọng, cảnh báo tình trạng 4 lốp xe theo thời gian thực giúp chủ xe tránh những rắc rối không đáng có",
    },
    { image: "24.webp", title: "Túi khí", desc: "VF5 trang bị 6 túi khí, hỗ trợ công nghệ hiện đại như Apple Carplay và các tính năng ADAS thông minh" },
    { image: "25.webp", title: "Cảm biến đỗ xe", desc: "VF5 trang bị tới cảm biến đỗ sau giúp việc ra vào bãi đỗ đơn giản hơn nhiều" },
    {
        image: "26.jpg",
        title: "Cảm biến điểm mù",
        desc: "Phát hiện và cảnh báo phương tiện khác trong vùng điểm mù, giúp chủ xe chủ động xử lý tình huống an toàn, đặc biệt là tình huống chuyển làn",
    },
    {
        image: "27.jpg",
        title: "Cảnh báo phương tiện cắt ngang",
        desc: "Phát hiện và cảnh báo phương tiện cắt ngang khi đang lùi trong bãi đỗ ra, do tình huống này thường khuất tầm nhìn",
    },
];

export default function VF5Details({ car }: { car: any }) {
    if (!car || !car.name.toUpperCase().includes("VF 5")) return null;

    return (
        <div className="container mx-auto px-4 max-w-6xl mt-12 flex flex-col gap-12">
            {/* KHỐI 2: BẢNG GIÁ CÁC PHIÊN BẢN */}
            <div className="mt-8">
                <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="h-px bg-gray-200 flex-1"></div>
                    <h2 className="text-xl md:text-2xl font-bold uppercase text-gray-800 text-center tracking-wide px-4 whitespace-nowrap">
                        BẢNG GIÁ CÁC PHIÊN BẢN VINFAST VF5
                    </h2>
                    <div className="h-px bg-gray-200 flex-1"></div>
                </div>

                <div className="w-full relative overflow-hidden rounded-2xl flex items-center justify-center min-h-[700px] mb-8 group bg-gray-50">
                    <Image
                        src="/images/cars/VF5/details/1.webp"
                        alt="Bảng giá VF5"
                        fill
                        className="object-cover z-0 group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                    {/* Overlay Bảng Gía */}
                    <div className="relative z-10 bg-white/40 backdrop-blur-md rounded-[2.5rem] shadow-2xl p-6 md:p-8 w-[95%] sm:w-[85%] md:w-[450px] my-10">
                        <h3 className="text-2xl md:text-3xl font-black uppercase text-gray-800 text-center mb-1 tracking-wide">VF5 PLUS BAO GỒM PIN</h3>
                        <p className="text-center font-black text-gray-800 mb-6 md:mb-8 text-sm md:text-base pb-6">
                            Giá: <span className="text-[#cc0000] text-xl md:text-2xl">{car.price}</span>
                        </p>

                        <div className="flex flex-col gap-[9px] md:gap-3 text-[10px] md:text-xs px-2 md:px-0">
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">Động cơ:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">01 Motor Điện 136 Hp</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">Hộp số:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">Tự động</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">Dẫn động:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">Cầu trước</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">Pin:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">37,23 KW</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">Quãng đường:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">300 km</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%] shrink-0">Thời gian sạc pin:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">10%-70%: 30 phút</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">Vành:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">Đúc 17 inh</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">Đèn:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">Halogen projector</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">Chìa khoá:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">Điều khiển</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">Ghế:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">Bọc da, Chỉnh cơ</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">Điều hoà:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">Chỉnh cơ</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">Màn hình:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">8 inh 4 loa</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">Sạc điện thoại:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">Thường</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">An toàn:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right max-w-full">6 túi khí, Chống lật, Cam lùi, Áp suất lốp</span>
                            </div>
                            <div className="flex justify-between pb-2">
                                <span className="text-black font-semibold w-[40%]">Cảnh báo:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right max-w-full">điểm mù, phương tiện phía sau</span>
                            </div>
                        </div>
                        <div className="mt-8 md:mt-10 flex justify-center px-4">
                            <button className="bg-[#0088FF] hover:bg-[#0066CC] text-white font-bold rounded-lg px-6 md:px-8 py-3.5 md:py-4 shadow-md transition-all tracking-wide text-xs md:text-sm flex items-center justify-center gap-2 w-full">
                                LIÊN HỆ NHẬN ƯU ĐÃI NGAY 🎁
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center mb-8">
                    <Image
                        src="/images/cars/VF5/details/2.webp"
                        alt="Hình ảnh đuôi xe VF5 ngang"
                        width={1200}
                        height={800}
                        className="w-full h-auto object-contain"
                        sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                </div>
            </div>

            {/* KHỐI 3: THIẾT KẾ NGOẠI THẤT */}
            <div className="mt-10 mb-8 max-w-5xl mx-auto w-full">
                <div className="mb-10 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-3 tracking-wide">THIẾT KẾ NGOẠI THẤT VINFAST VF5</h2>
                    <h3 className="text-lg md:text-xl font-bold text-[#cc0000] mb-4"> VinFast VF 5 – Vẻ đẹp của sự tối giản</h3>
                    <p className="text-gray-700 leading-relaxed text-[15px] mx-auto md:mx-0">
                        Với thiết kế hiện đại, độc đáo, được trang bị các công nghệ và tính năng thông minh vượt trội, khả năng vận hành mạnh mẽ, an toàn, VF 5 Plus hội
                        tụ đầy đủ các yếu tố người dùng trẻ tìm kiếm cho một chiếc xe điện đô thị lý tưởng.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
                    {exteriorFeatures.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                            <div className="w-full aspect-[4/3] relative overflow-hidden mb-5 border border-gray-100 shadow-sm rounded-sm">
                                <Image
                                    src={`/images/cars/VF5/details/${item.image}`}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <h4 className="text-[17px] font-bold text-gray-800 mb-2">{item.title}</h4>
                            <p className="text-sm text-gray-600 leading-relaxed px-2">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* KHỐI 4: THIẾT KẾ NỘI THẤT */}
            <div className="mt-10 mb-8 max-w-5xl mx-auto w-full">
                <div className="mb-10 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-3 tracking-wide">THIẾT KẾ NỘI THẤT VINFAST VF5</h2>
                    <h3 className="text-lg md:text-xl font-bold text-[#cc0000] mb-4">VF5 – Xe cỡ nhỏ nhưng không gian có dư</h3>
                    <p className="text-gray-700 leading-relaxed text-[15px] mx-auto md:mx-0">
                        Thiết kế thông minh và không gian nội thất tối ưu hóa của VF 5 mang lại trải nghiệm di chuyển tiện lợi, đảm bảo sự thoải mái và tiện nghi cho cả 5
                        chỗ ngồi. Màu sắc nội thất trang nhã, sạch sẽ giúp cả gia đình thoải mái trải nghiệm
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
                    {interiorFeatures.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                            <div className="w-full aspect-[4/3] relative overflow-hidden mb-5 border border-gray-100 shadow-sm rounded-sm">
                                <Image
                                    src={`/images/cars/VF5/details/${item.image}`}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <h4 className="text-[17px] font-bold text-gray-800 mb-2">{item.title}</h4>
                            <p className="text-sm text-gray-600 leading-relaxed px-2">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* KHỐI 5: KHẢ NĂNG VẬN HÀNH */}
            <div className="mt-10 mb-8 max-w-5xl mx-auto w-full">
                <div className="mb-10 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-3 tracking-wide">KHẢ NĂNG VẬN HÀNH VINFAST VF5</h2>
                    <h3 className="text-lg md:text-xl font-bold text-[#cc0000] mb-4">Mạnh mẽ nhất phân khúc A SUV</h3>
                    <p className="text-gray-700 leading-relaxed text-[15px] mx-auto md:mx-0">
                        Với thân hình nhỏ gọn và công suất "không có đối thủ" trong phân khúc, VF5 cho trải nghiệm tuyệt vời khi vận hành trong đô thị về sự linh hoạt và
                        lanh lẹ
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 mb-10">
                    {performanceFeatures.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                            <div className="w-full aspect-[4/3] relative overflow-hidden mb-5 border border-gray-100 shadow-sm rounded-sm">
                                <Image
                                    src={`/images/cars/VF5/details/${item.image}`}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <h4 className="text-[17px] font-bold text-gray-800 mb-2">{item.title}</h4>
                            <p className="text-sm text-gray-600 leading-relaxed px-2">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* KHỐI ẢNH NGANG SỐ 21 GIỮA VẬN HÀNH VÀ AN TOÀN */}
            <div className="w-full flex justify-center mb-8 max-w-6xl mx-auto px-4">
                <Image
                    src="/images/cars/VF5/details/21.webp"
                    alt="Hình ảnh Vinfast VF5"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain rounded-xl"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                />
            </div>

            {/* KHỐI 6: TRANG BỊ AN TOÀN */}
            <div className="mt-10 mb-16 max-w-5xl mx-auto w-full px-4 md:px-0">
                <div className="mb-10 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-3 tracking-wide">TRANG BỊ AN TOÀN VINFAST VF5</h2>
                    <h3 className="text-lg md:text-xl font-bold text-[#cc0000] mb-4">An tâm là điều Vinfast gửi gắm tới chủ xe VF5</h3>
                    <p className="text-gray-700 leading-relaxed text-[15px] mx-auto md:mx-0">
                        Với sứ mệnh sinh ra để di chuyển chủ yếu ở môi trường đô thị, VF5 cũng được trang bị khá nhiều hệ thống an toàn quan trọng và hiện đại, giúp chủ
                        nhân hoàn toàn an tâm trên mỗi chuyến đi
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
                    {safetyFeatures.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                            <div className="w-full aspect-[4/3] relative overflow-hidden mb-5 rounded-sm">
                                <Image
                                    src={`/images/cars/VF5/details/${item.image}`}
                                    alt={item.title}
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <h4 className="text-[17px] font-bold text-gray-800 mb-2">{item.title.replace(">", "")}</h4>
                            <p className="text-sm text-gray-600 leading-relaxed px-2">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
