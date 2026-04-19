import React from "react";
import Image from "next/image";

const exteriorFeatures = [
    { image: "10.webp", title: "Đầu xe", desc: "Thiết kế khá vuông vức, tỷ lệ rộng theo chiều ngang toát lên chất SUV đặc trưng" },
    { image: "11.webp", title: "Đèn pha", desc: "Là dạng Bi-halogen projector cho tính thẩm mỹ cực cao và chất lượng chiếu sáng tốt" },
    { image: "12.png", title: "Logo Vinfast", desc: "Logo chữ V cách điệu và 2 đường chỉ được mạ crom nổi bật trên nền ốp đen tạo nhận diện đặc trưng Vinfast" },
    { image: "13.webp", title: "Cản trước", desc: "Thiết kế khá dày bản, sử dụng nhựa đen nhám, có giả khe hút gió tăng vẻ hầm hố" },
    { image: "14.webp", title: "Thân xe", desc: 'Với chiều dài tổng thể 3,1 mét, VF3 cho cảm giác tương đối "dễ thương"; phần đuôi xe kiểu Kei-car thực dụng' },
    { image: "15.webp", title: "Gương chiếu hậu", desc: "Thiết kế đặt dọc, nhỏ gọn, phù hợp với tổng thể. Gương chỉnh cơ và không tích hợp thêm tính năng nào" },
    { image: "16.webp", title: "Mâm xe", desc: "Kích thước tới 16inh, và chỉ được trang bị vành thép, tuy nhiên sẽ có nhiều phương án độ mâm cá tính" },
    { image: "17.webp", title: "Cửa xe", desc: "Dễ dàng nhận thấy VF3 chỉ có 2 cửa ra vào, tay nắm cửa màu đen khá tương phản nổi bật" },
    { image: "18.webp", title: "Đuôi xe", desc: "Rất nổi bật nhờ ốp đen bóng to bản của cụm đèn hậu và cản sau đen mờ thể thao" },
    { image: "19.webp", title: "Cụm đèn hậu", desc: "Sử dụng công nghệ halogen nhưng cách tạo hình ấn tượng, kết hợp với logo Vinfast tạo nhận diện đẹp mắt" },
];

const interiorFeatures = [
    { image: "20.webp", title: "Vô lăng", desc: "Thiết kế kiểu khá to bản và có D-cut giúp người lái thoải mái hơn" },
    {
        image: "21.webp",
        title: "Màn hình trung tâm",
        desc: "Màn hình kích thước tới 10 inh, hiển thị sắc nét, tích hợp đủ các kết nối thông minh, hiển thị các thông tin vận hành xe",
    },
    { image: "22.webp", title: "Điều hoà", desc: "Sở hữu kiểu điều hoà chỉnh cơ với giao diện siêu tối giản giúp người dùng dễ dàng thao tác" },
    { image: "23.webp", title: "Ghế ngồi", desc: 'Tất cả đều được bọc nỉ, có phối 2 tông màu rất "cute", chỉnh cơ 4 hướng' },
    { image: "24.webp", title: "Hàng ghế sau", desc: "Dành cho 2 người lớn, và khá ngạc nhiên khi nó không hề chật chội như tưởng tượng" },
    {
        image: "25.webp",
        title: "Cần số & phanh tay điện tử",
        desc: "Một chi tiết khá đáng khen cho VF3 là được trang bị kiểu cần số điện tử tích hợp vào cột lái khá gọn gàng và cao cấp",
    },
    { image: "26.webp", title: "Khoang hành lý", desc: "Với thể tích khiêm tốn chỉ 36 lít và tăng lên tới 285 lít khi gập phẳng hàng ghế sau" },
];

const performanceFeatures = [
    {
        image: "27.webp",
        title: "Pin VF3",
        desc: "Sử dụng khối pin hiện đại LFP với dung lượng 18,64 KWh, VF3 cho sự khả năng di chuyển tới 210 km cho mỗi lần sạc đầy pin",
    },
    { image: "28.webp", title: "Sạc pin VF3", desc: "Theo công bố của Vinfast, VF3 có khả năng sạc nhanh từ 10%-70% chỉ trong vòng 36 phút và 5 giờ đối với sạc thường" },
    {
        image: "29.webp",
        title: "Lanh lẹ",
        desc: "Với động cơ điện công suất 43 mã lực, 110 Nm mô men xoắn, VF3 cho khả năng vận hành siêu linh hoạt, nhẹ nhàng, tốc độ tối đa đạt 100km/h",
    },
];

const safetyFeatures = [
    { image: "31.webp", title: "Cảm biến lùi", desc: "Phát tín hiệu cảnh báo cho người lái khi phát hiện vật thể phía sau khi lùi, sử dụng sóng radio" },
    {
        image: "32.webp",
        title: ">Kiểm soát lực kéo",
        desc: "Chủ động phát hiện tượng trượt của bánh xe dẫn động, can thiệp giúp xe khởi hành hoặc tăng tốc trên đường trơn",
    },
    { image: "33.webp", title: "HAC", desc: "Hệ thống hỗ trợ khởi hành ngang dốc, chống bị lùi xe khi chuyển từ chân phanh sang chân ga" },
    { image: "34.webp", title: "Túi khí", desc: "VF3 được trang bị 1 túi khí phía trước bên lái" },
];

export default function VF3Details({ car }: { car: any }) {
    if (!car || !car.name.toUpperCase().includes("VF 3")) return null;

    return (
        <div className="container mx-auto px-4 max-w-6xl mt-12 flex flex-col gap-12">

            {/* KHỐI 2: BẢNG GIÁ CÁC PHIÊN BẢN */}
            <div className="mt-8">
                <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="h-px bg-gray-200 flex-1"></div>
                    <h2 className="text-xl md:text-2xl font-bold uppercase text-gray-800 text-center tracking-wide px-4 whitespace-nowrap">
                        BẢNG GIÁ CÁC PHIÊN BẢN VINFAST VF3
                    </h2>
                    <div className="h-px bg-gray-200 flex-1"></div>
                </div>

                <div className="w-full relative overflow-hidden rounded-2xl flex items-center justify-center min-h-[700px] mb-8 group bg-gray-50">
                    <Image
                        src="/images/cars/VF3/details/6.png"
                        alt="Bảng giá VF3"
                        fill
                        className="object-cover z-0 group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                    {/* Overlay Bảng Gía */}
                    <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-[2.5rem] shadow-2xl p-6 md:p-8 w-[95%] sm:w-[85%] md:w-[450px] my-10">
                        <h3 className="text-2xl md:text-3xl font-black uppercase text-gray-800 text-center mb-1 tracking-wide">VF3 BAO GỒM PIN</h3>
                        <p className="text-center font-black text-gray-800 mb-6 md:mb-8 text-sm md:text-base pb-6">
                            Giá: <span className="text-[#cc0000] text-xl md:text-2xl">{car.price}</span>
                        </p>

                        <div className="flex flex-col gap-[9px] md:gap-3 text-[10px] md:text-xs px-2 md:px-0">
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-gray-500 font-semibold w-[40%]">Động cơ:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">{car.power || "01 Motor Điện 44 Hp"}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-gray-500 font-semibold w-[40%]">Hộp số:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">Tự động</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-gray-500 font-semibold w-[40%]">Quãng đường:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">{car.distance || "210 km"}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-gray-500 font-semibold w-[40%] shrink-0">Thời gian sạc pin 10%-70%:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">36 phút</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-gray-500 font-semibold w-[40%]">Vành:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">Thép 16 inch</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-gray-500 font-semibold w-[40%]">Đèn:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">Halogen projector</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-gray-500 font-semibold w-[40%]">Chìa khoá:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">Smartkey</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-gray-500 font-semibold w-[40%]">Ghế:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">Bọc nỉ, Chỉnh cơ</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-gray-500 font-semibold w-[40%]">Điều hoà:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">Chỉnh cơ</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-gray-500 font-semibold w-[40%]">Màn hình:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">10 inch 2 loa</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                <span className="text-gray-500 font-semibold w-[40%]">Sạc điện thoại:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right">Thường</span>
                            </div>
                            <div className="flex justify-between pb-2">
                                <span className="text-gray-500 font-semibold w-[40%]">An toàn:</span>
                                <span className="text-gray-800 font-bold w-[60%] text-right max-w-full">1 túi khí, ABS, TRC, Cam lùi, Cảm biến lùi</span>
                            </div>
                        </div>
                        <div className="mt-8 md:mt-10 flex justify-center px-4">
                            <button className="bg-[#0088FF] hover:bg-[#0066CC] text-white font-bold rounded-lg px-6 md:px-8 py-3.5 md:py-4 shadow-md transition-all tracking-wide text-xs md:text-sm flex items-center justify-center gap-2 w-full">
                                LIÊN HỆ NHẬN ƯU ĐÃI NGAY 🎁
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <Image
                        src="/images/cars/VF3/details/7.webp"
                        alt="Thiết kế tổng quan"
                        width={1000}
                        height={600}
                        className="w-full h-auto object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <Image
                        src="/images/cars/VF3/details/8.webp"
                        alt="Thông số vận hành"
                        width={1000}
                        height={600}
                        className="w-full h-auto object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

                <div className="w-full flex justify-center">
                    <Image
                        src="/images/cars/VF3/details/9.webp"
                        alt="Hình ảnh đuôi xe VF3"
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
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-3 tracking-wide">THIẾT KẾ NGOẠI THẤT VINFAST VF3</h2>
                    <h3 className="text-lg md:text-xl font-bold text-[#cc0000] mb-4">VinFast VF 3 – Xe nhỏ, giá trị lớn</h3>
                    <p className="text-gray-700 leading-relaxed text-[15px] mx-auto md:mx-0">
                        Với thiết kế tối giản, nhỏ gọn, cá tính và năng động, VinFast VF 3 sẽ luôn cùng bạn hoà nhịp với xu thế công nghệ di chuyển xanh toàn cầu, trải
                        nghiệm giá trị trên mỗi hành trình, và tự do thể hiện phong cách sống.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
                    {exteriorFeatures.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                            <div className="w-full aspect-[4/3] relative overflow-hidden mb-5 border border-gray-100 shadow-sm rounded-sm">
                                <Image
                                    src={`/images/cars/VF3/details/${item.image}`}
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
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-3 tracking-wide">THIẾT KẾ NỘI THẤT VINFAST VF3</h2>
                    <h3 className="text-lg md:text-xl font-bold text-[#cc0000] mb-4">VF3 luôn đủ chỗ cho mọi người</h3>
                    <p className="text-gray-700 leading-relaxed text-[15px] mx-auto md:mx-0">
                        Thiết kế thông minh và không gian nội thất tối ưu hóa của VF 3 mang lại trải nghiệm di chuyển tiện lợi, đảm bảo sự thoải mái và tiện nghi cho cả 4
                        chỗ ngồi. Màu sắc nội thất trang nhã, trẻ trung và cá tính, cùng chất liệu thân thiện tạo ra một không gian đặc biệt, nơi chứa đựng những kỷ niệm
                        đáng nhớ trên mọi hành trình khám phá phong cách sống của riêng bạn!
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
                    {interiorFeatures.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                            <div className="w-full aspect-[4/3] relative overflow-hidden mb-5 border border-gray-100 shadow-sm rounded-sm">
                                <Image
                                    src={`/images/cars/VF3/details/${item.image}`}
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
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-3 tracking-wide">KHẢ NĂNG VẬN HÀNH VINFAST VF3</h2>
                    <h3 className="text-lg md:text-xl font-bold text-[#cc0000] mb-4">Chiến binh đường phố không biết mệt mỏi</h3>
                    <p className="text-gray-700 leading-relaxed text-[15px] mx-auto md:mx-0">
                        Thiết kế nhỏ gọn cũng chính là thế mạnh đặc trưng khi vận hành trong điều kiện đô thị. VF3 cho thấy sự linh hoạt tuyệt đối kết hợp cùng quãng
                        đường di chuyển lớn khiến VF3 tự tin đưa chủ nhân tự tin chinh phục khắp phố phường
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 mb-10">
                    {performanceFeatures.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                            <div className="w-full aspect-[4/3] relative overflow-hidden mb-5 border border-gray-100 shadow-sm rounded-sm">
                                <Image
                                    src={`/images/cars/VF3/details/${item.image}`}
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

                <div className="w-full">
                    <Image
                        src="/images/cars/VF3/details/30.webp"
                        alt="Vận hành VF3"
                        width={1600}
                        height={900}
                        className="w-full h-auto object-contain"
                        sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                </div>
            </div>

            {/* KHỐI 6: TRANG BỊ AN TOÀN */}
            <div className="mt-10 mb-16 max-w-5xl mx-auto w-full">
                <div className="mb-10 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-3 tracking-wide">TRANG BỊ AN TOÀN VINFAST VF3</h2>
                    <h3 className="text-lg md:text-xl font-bold text-[#cc0000] mb-4">An tâm chinh phục hành trình</h3>
                    <p className="text-gray-700 leading-relaxed text-[15px] mx-auto md:mx-0">
                        Với sứ mệnh sinh ra để di chuyển chủ yếu ở môi trường đô thị, VF3 cũng được trang bị khá nhiều hệ thống an toàn quan trọng và hiện đại, giúp chủ
                        nhân thêm phần yên tâm khi cầm lái
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
                    {safetyFeatures.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                            <div className="w-full aspect-[4/3] relative overflow-hidden mb-5 rounded-sm">
                                <Image
                                    src={`/images/cars/VF3/details/${item.image}`}
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
