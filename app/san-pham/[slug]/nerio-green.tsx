import React from "react";
import Image from "next/image";

const exteriorFeatures = [
    { image: "3.webp", title: "Đầu xe", desc: "Thiết kế bo tròn, tỷ lệ rộng theo chiều ngang toát lên sự rộng rãi" },
    { image: "4.webp", title: "Thân xe", desc: "Thiết kế ưu tiên cho khoang hành khách, hứa hẹn có 1 không gian thoải mái" },
    { image: "5.webp", title: "Mâm xe 18 inch", desc: "Mâm hợp kim 2 tone màu, kích thước tới 18 inh" },
    { image: "6.webp", title: "Đuôi xe", desc: "Hài hoà với tổng thể, nổi bật nhờ nhận diện cụm đèn hậu led chữ V cách điệu kéo dài" },
    { image: "7.webp", title: "Cản sau", desc: "Khá cầu kỳ với kiểu phối màu hiện đại, cản sau có chi tiết nổi khối giả bô và đèn phản quang theo tiêu chuẩn thế giới" },
    { image: "8.webp", title: "Cụm đèn hậu", desc: "Sử dụng công nghệ LED, tạo hình chữ V đặc trưng với nhận diện không lẫn vào đâu được" },
];

const interiorFeatures = [
    { image: "9.webp", title: "Hàng nghế trước", desc: "Thiết kế theo phong cách thể thao, tựa đầu liền vững chãi" },
    {
        image: "10.webp",
        title: "Màn hình trung tâm",
        desc: "Màn hình kích thước tới 10 inh đặt dọc, hiển thị sắc nét, tích hợp đủ các kết nối thông minh",
    },
    { image: "11.webp", title: "Thông số", desc: "Hiển thị các thông số về pin, vận hành, điều hoà" },
    { image: "12.webp", title: "Hàng ghế sau", desc: "Với độ ngả rất tốt và không gian để chân rộng rãi cho cả 3 người" },
    { image: "13.webp", title: "Khoang hành lý", desc: "Hiển thị các thông số về Với thể tích 290 lít và tăng lên tới 1.490 lít khi gập phẳng hàng ghế sau" },
    {
        image: "14.webp",
        title: "Màn hình đa thông tin",
        desc: "Sử dụng công nghệ full LCD cho mọi thông số rõ ràng, trực quan",
    },
    { image: "15.webp", title: "Cần số", desc: "Dạng núm xoay điện tử giúp khoang lái tăng tính thẩm mỹ và công nghệ hiện đại" },
];

const performanceFeatures = [
    {
        image: "16.webp",
        title: "Pin",
        desc: "Sử dụng khối pin hiện đại LFP với dung lượng 42 KWh, Nerio Green cho sự khả năng di chuyển tới 318 km cho mỗi lần sạc đầy pin",
    },
    {
        image: "17.webp",
        title: "Động cơ ",
        desc: "Sử dụng 01 động cơ điện đặt tại cầu trước với công suất 149 sức ngựa, Nerio Green cho thấy sự dư dả về sức mạnh phục vụ tốt mọi nhu cầu thông thường",
    },
    {
        image: "18.webp",
        title: "Sạc pin ",
        desc: "Theo công bố, Nerio Green có thể sạc siêu nhanh trong 18 phút để di chuyển quãng đường 180km. Sạc từ 10-70% trong khoảng 10 tiếng đối với sạc thường",
    },
];

const safetyFeatures = [
    { image: "22.webp", title: "Camera 360 độ", desc: "Giúp chủ xe dễ dàng quan sát khu vực phía quanh xe với độ sắc nét rất cao trong các tình huống di chuyển chậm" },
    {
        image: "23.webp",
        title: "Cảm biến áp suất lốp",
        desc: "Là trang bị cực quan trọng, cảnh báo tình trạng 4 lốp xe theo thời gian thực giúp chủ xe tránh những rắc rối không đáng có",
    },
    { image: "24.webp", title: "Túi khí", desc: "Với tiêu chuẩn an toàn khắt khe, Nerio Green trang bị tới 2 túi khí an toàn cho hàng ghế trước" },
    { image: "25.webp", title: "Cảm biến đỗ xe", desc: "Nerio Green được trang bị 4 cảm biến phía sau giúp việc ra vào bãi đỗ trở nên vô cùng an toàn" },
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

export default function NERIOGREENDetails({ car }: { car: any }) {
    if (!car || !car.name.toUpperCase().includes("NERIO GREEN")) return null;

    return (
        <div className="container mx-auto px-4 max-w-6xl mt-12 flex flex-col gap-12">
            {/* KHỐI 2: BẢNG GIÁ CÁC PHIÊN BẢN */}
            <div className="mt-8">
                <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="h-px bg-gray-200 flex-1"></div>
                    <h2 className="text-xl md:text-2xl font-bold uppercase text-gray-800 text-center tracking-wide px-4 whitespace-nowrap">
                        BẢNG GIÁ CÁC PHIÊN BẢN VINFAST NERIO GREEN
                    </h2>
                    <div className="h-px bg-gray-200 flex-1"></div>
                </div>

                <div className="w-full relative overflow-hidden rounded-2xl flex items-center justify-center min-h-[700px] mb-8 group bg-gray-50">
                    <Image
                        src="/images/cars/NERIOGREEN/details/1.jpg"
                        alt="Bảng giá NERIO GREEN"
                        fill
                        className="object-cover z-0 group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                    {/* Overlay Bảng Gía */}
                    <div className="relative z-10 bg-white/60 backdrop-blur-md rounded-[2.5rem] shadow-2xl p-6 md:p-8 w-[95%] sm:w-[85%] md:w-[450px] my-10">
                        <h3 className="text-2xl md:text-3xl font-black uppercase text-gray-800 text-center mb-1 tracking-wide">VINFAST NERIO GREEN</h3>
                        <p className="text-center font-black text-gray-800 mb-6 md:mb-8 text-sm md:text-base pb-6">
                            Giá xanh SM: <span className="text-[#cc0000] text-xl md:text-2xl">{car.price}</span>
                        </p>

                        <div className="flex flex-col gap-[9px] md:gap-3 text-[10px] md:text-xs px-2 md:px-0">
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">Động cơ:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">01 Motor Điện 149 Hp</span>
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
                                <span className="text-gray-800 font-bold w-[60%] text-right"> 42 KW</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">Quãng đường:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">{"318 km"}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%] shrink-0">Thời gian sạc pin 10%-70%:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">27 phút</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">Vành:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">Đúc 18 inh</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">Đèn:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">Led tự động</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">Chìa khoá:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">Smartkey</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">Ghế:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">Bọc da, Chỉnh điện</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">Điều hoà:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">Tự động 1 vùng</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">Màn hình:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">10 inh 6 loa</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">Cốp:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">Điện</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">An toàn:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right max-w-full">
                                    2 túi khí, Chống lật, Cam 360, ABS Cảm biến lùi, Cruise Control
                                </span>
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
                        src="/images/cars/NERIOGREEN/details/2.webp"
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
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-3 tracking-wide">THIẾT KẾ NGOẠI THẤT VINFAST NERIO GREEN</h2>
                    <h3 className="text-lg md:text-xl font-bold text-[#cc0000] mb-4">Ngoại thất hiện đại thu hút mọi ánh nhìn</h3>
                    <p className="text-gray-700 leading-relaxed text-[15px] mx-auto md:mx-0">
                        Ngôn ngữ thiết kế “Cân bằng động” giúp xe luôn nổi bật, hiện đại và hướng tới tương lai. Các đường nét cân đối tạo nên sự hài hoà, tượng trưng cho
                        sự chuyển động tiến tới tương lai. <br></br>Thiết kế tăng cường tính khí động học cho khả năng vận hành linh hoạt và tầm nhìn rộng mở. Ánh sáng
                        toả ra từ logo VinFast vuốt ra các góc tạo cảm giác phóng khoáng và sang trọng.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
                    {exteriorFeatures.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                            <div className="w-full aspect-[4/3] relative overflow-hidden mb-5 border border-gray-100 shadow-sm rounded-sm">
                                <Image
                                    src={`/images/cars/NERIOGREEN/details/${item.image}`}
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
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-3 tracking-wide">THIẾT KẾ NỘI THẤT VINFAST NERIO GREEN</h2>
                    <h3 className="text-lg md:text-xl font-bold text-[#cc0000] mb-4">Nội thất rộng rãi và tiện nghi</h3>
                    <p className="text-gray-700 leading-relaxed text-[15px] mx-auto md:mx-0">
                        Không gian thoáng đãng nhờ động cơ điện và hệ thống pin tinh giản đặt dưới sàn xe, đảm bảo sự thoải mái cho hành khách trên xe. Khoang lái được bố
                        trí tối ưu với thiết kế hơi hướng tương lai, giúp trải nghiệm lái hiệu quả và an toàn hơn.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
                    {interiorFeatures.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                            <div className="w-full aspect-[4/3] relative overflow-hidden mb-5 border border-gray-100 shadow-sm rounded-sm">
                                <Image
                                    src={`/images/cars/NERIOGREEN/details/${item.image}`}
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
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-3 tracking-wide">KHẢ NĂNG VẬN HÀNH VINFAST NERIO GREEN</h2>
                    <h3 className="text-lg md:text-xl font-bold text-[#cc0000] mb-4">Cỗ máy điện không biết mệt mỏi</h3>
                    <p className="text-gray-700 leading-relaxed text-[15px] mx-auto md:mx-0">
                        Thiết kế nhỏ gọn nhưng lại đầy thực dụng, là phương tiện tương đối lý tưởng phục vụ gia đình và kinh doanh với chi phí đầu tư ban đầu vừa phải
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 mb-10">
                    {performanceFeatures.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                            <div className="w-full aspect-[4/3] relative overflow-hidden mb-5 border border-gray-100 shadow-sm rounded-sm">
                                <Image
                                    src={`/images/cars/NERIOGREEN/details/${item.image}`}
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
                    src="/images/cars/NERIOGREEN/details/19.webp"
                    alt="Hình ảnh Vinfast"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain rounded-xl"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                />
            </div>

            {/* KHỐI 6: TRANG BỊ AN TOÀN */}
            <div className="mt-10 mb-16 max-w-5xl mx-auto w-full px-4 md:px-0">
                <div className="mb-10 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-3 tracking-wide">TRANG BỊ AN TOÀN VINFAST NERIO GREEN</h2>
                    <h3 className="text-lg md:text-xl font-bold text-[#cc0000] mb-4">An tâm là điều Vinfast gửi gắm tới chủ xe NERIO Green</h3>
                    <p className="text-gray-700 leading-relaxed text-[15px] mx-auto md:mx-0">
                        Với sứ mệnh sinh ra để di chuyển chủ yếu ở môi trường đô thị, NERIO Green cũng được trang bị khá nhiều hệ thống an toàn quan trọng và hiện đại,
                        giúp chủ nhân hoàn toàn an tâm trên mỗi chuyến đi
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
