"use client";
import React from "react";
import Image from "next/image";

const exteriorFeatures = [
    { image: "3.webp", title: "Đầu xe", desc: "Thiết kế khá vuông vức, tỷ lệ rộng theo chiều ngang toát lên chất SUV đặc trưng" },
    { image: "4.webp", title: "Đèn pha", desc: "Là dạng Bi-halogen projector cho tính thẩm mỹ cực cao và chất lượng chiếu sáng tốt" },
    { image: "5.webp", title: "Mâm xe", desc: "Kích thước tới 16inh, và chỉ được trang bị vành thép, tuy nhiên sẽ có nhiều phương án độ mâm cá tính" },
    { image: "6.webp", title: "Cửa xe", desc: "Dễ dàng nhận thấy Minio Green chỉ có 2 cửa ra vào, tay nắm cửa màu đen khá tương phản nổi bật" },
    { image: "7.webp", title: "Đuôi xe", desc: "Rất nổi bật nhờ ốp đen bóng to bản của cụm đen hậu và cản sau đen mờ thể thao" },
    { image: "8.webp", title: "Cụm đèn hậu", desc: "Sử dụng công nghệ halogen nhưng cách tạo hình ấn tượng, kết hợp với logo Vinfast tạo nhận diện đẹp mắt" },
];

const interiorFeatures = [
    { image: "9.png", title: "Vô lăng", desc: "Thiết kế kiểu khá to bản và có D-cut giúp người lái thoải mái hơn" },
    {
        image: "10.png",
        title: "Màn hình trung tâm",
        desc: "Màn hình kích thước tới 10 inh, hiển thị sắc nét, tích hợp đủ các kết nối thông minh, hiển thị các thông tin vận hành xe",
    },
    { image: "11.png", title: "Điều hòa", desc: "Sở hữu kiểu điều hoà chỉnh cơ với giao diện siêu tối giản giúp người dùng dễ dàng thao tác" },
    { image: "12.png", title: "Khu Yên ngựa", desc: "Thiết kệ hạ thấp tăng không gian thoáng đãng. Cần số là dạng điện tử núm xoay đặc trưng nhà Vinfast" },
    { image: "13.png", title: "Hàng ngế sau", desc: "Dành cho 2 người lớn, và khá ngạc nhiên khi nó không hề chật chội như tưởng tượng" },
    {
        image: "14.png",
        title: "Cần số & phanh tay điện tử",
        desc: "Một chi tiết khá đáng khen là được trang bị kiểu cần số điện tử tích hợp vào cột lái khá gọn gàng và cao cấp",
    },
];

const performanceFeatures = [
    {
        image: "15.webp",
        title: "Pin Minio Green",
        desc: "Dung lượng pin khả dụng: 14,7 kWh – Quãng đường di chuyển (NEDC): 170 km mỗi lần sạc. Mỗi lần sạc đầy đủ dùng cho cả tuần đi làm hoặc sinh hoạt nội thành",
    },
    {
        image: "17.webp",
        title: "Động cơ",
        desc: "Được trang bị động cơ điện 20kW (27 mã lực) và mô-men xoắn 65 Nm, Minio Green giúp giảm thiểu khí thải và chi phí nhiên liệu.",
    },
    {
        image: "16.webp",
        title: "Sạc pin",
        desc: "Theo công bố của Vinfast, Minio có khả năng sạc nhanh công suất tối đa đạt 12KW giúp sạc đầy pin trong thời gian chỉ hơn 1 tiếng",
    },
];

const safetyFeatures = [
    { image: "22.webp", title: "Camera lùi", desc: "Giúp chủ xe dễ dàng quan sát khu vực phía sau trong các tình huống lùi xe" },
    {
        image: "23.webp",
        title: "Cảm biến áp suất lốp",
        desc: "Là trang bị cực quan trọng, cảnh báo tình trạng 4 lốp xe theo thời gian thực giúp chủ xe tránh những rắc rối không đáng có",
    },
    { image: "24.webp", title: "Túi khí", desc: "Với tiêu chuẩn an toàn khắt khe, Minio Green trang bị tới 2 túi khí an toàn cho hàng ghế trước" },
    { image: "25.webp", title: "Cảm biến đỗ xe", desc: "Minio Green được trang bị 4 cảm biến phía sau giúp việc ra vào bãi đỗ trở nên vô cùng an toàn" },
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

export default function MINIOGREENDetails({ car }: { car: any }) {
    if (!car || !car.name.toUpperCase().includes("MINIO GREEN")) return null;

    return (
        <div className="container mx-auto px-4 max-w-6xl mt-12 flex flex-col gap-12">
            {/* KHỐI 2: BẢNG GIÁ CÁC PHIÊN BẢN */}
            <div className="mt-8">
                <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="h-px bg-gray-200 flex-1"></div>
                    <h2 className="text-xl md:text-2xl font-bold uppercase text-gray-800 text-center tracking-wide px-4 whitespace-nowrap">
                        BẢNG GIÁ CÁC PHIÊN BẢN VINFAST MINIO GREEN
                    </h2>
                    <div className="h-px bg-gray-200 flex-1"></div>
                </div>

                <div className="w-full relative overflow-hidden rounded-2xl flex items-center justify-center min-h-[700px] mb-8 group bg-gray-50">
                    <Image
                        src="/images/cars/MINIOGREEN/details/1.jpg"
                        alt="Bảng giá MINIO GREEN"
                        fill
                        className="object-cover z-0 group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                    {/* Overlay Bảng Gía */}
                    <div className="relative z-10 bg-white/60 backdrop-blur-md rounded-[2.5rem] shadow-2xl p-6 md:p-8 w-[95%] sm:w-[85%] md:w-[450px] my-10">
                        <h3 className="text-2xl md:text-3xl font-black uppercase text-gray-800 text-center mb-1 tracking-wide">VINFAST MINIO GREEN</h3>
                        <p className="text-center font-black text-gray-800 mb-6 md:mb-8 text-sm md:text-base pb-6">
                            Giá xanh SM:{" "}
                            {car.price_promo ? (
                                <>
                                    <span className="line-through text-gray-400 text-sm md:text-base mr-2">{car.price}</span>
                                    <span className="text-[#cc0000] text-xl md:text-2xl">{car.price_promo}</span>
                                </>
                            ) : (
                                <span className="text-[#cc0000] text-xl md:text-2xl">{car.price}</span>
                            )}
                        </p>

                        <div className="flex flex-col gap-[9px] md:gap-3 text-[10px] md:text-xs px-2 md:px-0">
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">Động cơ:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right"> 01 Motor Điện 27 Hp</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">Hộp số:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">Tự động</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">Dẫn động:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">Cầu sau</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">Pin:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">15,2 KW</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">Quãng đường:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">{"> 170 km"}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%] shrink-0">Công suất sạc:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">12 KW</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">Vành:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">Thép 13 inch</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">Đèn:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">Halogen</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">Chìa khoá:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">Điều khiển</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">Ghế:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">Nỉ, Chỉnh cơ</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">Điều hoà:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">Chỉnh cơ</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">Màn hình:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">8 inh 2 loa</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">Sạc điện thoại:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">Thường</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-black font-semibold w-[40%]">An toàn:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right max-w-full">1 túi khí, ABS, TSC</span>
                            </div>
                        </div>
                        <div className="mt-8 md:mt-10 flex justify-center px-4">
                            <button
                                onClick={() => {
                                    window.dispatchEvent(
                                        new CustomEvent("open-global-promo", {
                                            detail: {
                                                title: `Nhận tư vấn ${car.name}`,
                                                car: car.name,
                                            },
                                        }),
                                    );
                                }}
                                className="bg-[#0088FF] hover:bg-[#0066CC] text-white font-bold rounded-lg px-6 md:px-8 py-3.5 md:py-4 shadow-md transition-all tracking-wide text-xs md:text-sm flex items-center justify-center gap-2 w-full"
                            >
                                LIÊN HỆ NHẬN ƯU ĐÃI NGAY 🎁
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center mb-8">
                    <Image
                        src="/images/cars/MINIOGREEN/details/2.webp"
                        alt="Hình ảnh đuôi xe MINIO ngang"
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
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-3 tracking-wide">THIẾT KẾ NGOẠI THẤT VINFAST MINIO GREEN</h2>
                    <h3 className="text-lg md:text-xl font-bold text-[#cc0000] mb-4"> VinFast Minio Green – Vẻ đẹp của sự tối giản</h3>
                    <p className="text-gray-700 leading-relaxed text-[15px] mx-auto md:mx-0">
                        Với thiết kế hiện đại, độc đáo, được trang bị các công nghệ và tính năng thông minh vượt trội, khả năng vận hành mạnh mẽ, an toàn, Minio Green hội
                        tụ đầy đủ các yếu tố người dùng trẻ tìm kiếm cho một chiếc xe điện đô thị lý tưởng.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
                    {exteriorFeatures.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                            <div className="w-full aspect-[4/3] relative overflow-hidden mb-5 border border-gray-100 shadow-sm rounded-sm">
                                <Image
                                    src={`/images/cars/MINIOGREEN/details/${item.image}`}
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
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-3 tracking-wide">THIẾT KẾ NỘI THẤT MINIO GREEN</h2>
                    <h3 className="text-lg md:text-xl font-bold text-[#cc0000] mb-4">Minio Green – Xe cỡ nhỏ nhưng không gian có dư</h3>
                    <p className="text-gray-700 leading-relaxed text-[15px] mx-auto md:mx-0">
                        Thiết kế thông minh và không gian nội thất tối ưu hóa của Minio Green mang lại trải nghiệm di chuyển tiện lợi, đảm bảo sự thoải mái và tiện nghi
                        cho cả 4 chỗ ngồi. Màu sắc nội thất trang nhã, sạch sẽ giúp cả gia đình thoải mái trải nghiệm
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
                    {interiorFeatures.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                            <div className="w-full aspect-[4/3] relative overflow-hidden mb-5 border border-gray-100 shadow-sm rounded-sm">
                                <Image
                                    src={`/images/cars/MINIOGREEN/details/${item.image}`}
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
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-3 tracking-wide">KHẢ NĂNG VẬN HÀNH VINFAST MINIO GREEN</h2>
                    <h3 className="text-lg md:text-xl font-bold text-[#cc0000] mb-4">Mạnh mẽ nhất phân khúc compact điện</h3>
                    <p className="text-gray-700 leading-relaxed text-[15px] mx-auto md:mx-0">
                        Với thân hình nhỏ gọn và công suất “không có đối thủ” trong phân khúc, Minio Green cho trải nghiệm tuyệt vời khi vận hành trong đô thị về sự linh
                        hoạt và lanh lẹ
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 mb-10">
                    {performanceFeatures.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                            <div className="w-full aspect-[4/3] relative overflow-hidden mb-5 border border-gray-100 shadow-sm rounded-sm">
                                <Image
                                    src={`/images/cars/MINIOGREEN/details/${item.image}`}
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
                    src="/images/cars/MINIOGREEN/details/18.webp"
                    alt="Hình ảnh Vinfast MINIO"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain rounded-xl"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                />
            </div>

            {/* KHỐI 6: TRANG BỊ AN TOÀN */}
            <div className="mt-10 mb-16 max-w-5xl mx-auto w-full px-4 md:px-0">
                <div className="mb-10 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-3 tracking-wide">TRANG BỊ AN TOÀN VINFAST MINIO GREEN</h2>
                    <h3 className="text-lg md:text-xl font-bold text-[#cc0000] mb-4">An tâm là điều Vinfast gửi gắm tới chủ xe MINIO GREEN</h3>
                    <p className="text-gray-700 leading-relaxed text-[15px] mx-auto md:mx-0">
                        Với sứ mệnh sinh ra để di chuyển chủ yếu ở môi trường đô thị, MINIO GREEN cũng được trang bị khá nhiều hệ thống an toàn quan trọng và hiện đại,
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
