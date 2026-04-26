import React from "react";
import Image from "next/image";

const exteriorFeatures = [
    {
        image: "2.webp",
        title: "Đầu xe – Khí động học",
        desc: "Thiết kế khá vuông vức, tỷ lệ rộng theo chiều ngang với các chi tiết tối giản nhưng tạo các mặt phẳng nối tiếp, thể hiện sự bề thế to lớn",
    },
    { image: "3.jpg", title: "Đèn pha", desc: "Là dạng Bi-Led projector kép cho tính thẩm mỹ cực cao và chất lượng chiếu sáng tốt" },
    {
        image: "4.webp",
        title: "Dải led ban ngày",
        desc: "Logo chữ V cách điệu và 2 dải led định vị ban ngay tạo nối dài phần đầu xe là nhận diện đặc trưng vô cùng bắt mắt",
    },
    {
        image: "5.webp",
        title: "Thiết kế khí động học",
        desc: "Giảm lực cản không khí và tăng hiệu quả vận hành, đồng thời mang lại vẻ ngoài hiện đại và mạnh mẽ.",
    },
    {
        image: "6.jpg",
        title: "Thân xe",
        desc: "Với chiều dài tổng thể tới hơn 5 mét, VF9 là chiếc SUV fullzise nhà Vinfast nên phần thân xe cho cảm giác “miên man”",
    },
    {
        image: "7.jpg",
        title: "Mâm xe",
        desc: "Kích thước tới 20 inh, kiểu hợp kim đúc 2 tone màu tạo hình rất đẹp mắt, thời thượng",
    },
    {
        image: "8.jpg",
        title: "Tay nắm cửa",
        desc: "Dạng ẩn, mang đầy tính công nghệ và khí động học",
    },
    {
        image: "9.webp",
        title: "Cột C",
        desc: "Thiết kế kiểu “thắt eo”, sơn đen tạo hiệu ứng mui bay cho VF9, tại trung tâm là logo Vinfast đầy kiêu hãnh",
    },
    {
        image: "10.jpg",
        title: "Đuôi xe",
        desc: "Khá tối giản tương đồng với thiết kế đầu xe, điểm nhấn chính nắm ở cụm đèn hậu",
    },
    { image: "11.webp", title: "Đèn định vị sau", desc: "Vẫn là dải led đặc trưng nhà Vinfast, chạy dài quanh logo Vinfast" },
    { image: "12.webp", title: "Cản sau", desc: "Khá đơn giản với thanh nẹp sơn nhũ bạc tạo hình lippo tinh tế, cao cấp" },
];

const interiorFeatures = [
    {
        image: "13.webp",
        title: "Vô lăng",
        desc: "Thiết kế kiểu khá to bản và có D-cut giúp người lái thoải mái hơn, tích hợp nhiều nút bấm và cảm biến theo dõi người lái",
    },
    {
        image: "14.webp",
        title: "Màn hình trung tâm",
        desc: "Màn hình kích thước tới 15,6 inh, hiển thị sắc nét, tích hợp đủ các kết nối thông minh, hiển thị các thông tin vận hành xe đi kèm hệ giải trí 13 loa cao cấp",
    },
    {
        image: "15.webp",
        title: "Cần số dạng nút bấm",
        desc: "Khu vực trung tâm được khéo léo biến đổi thành cần số với các phím bấm đẹp mắt, khác lạ, đầy thú vị",
    },
    {
        image: "16.webp",
        title: "Bố trí ghế ngồi",
        desc: "Kiểu bố trí với phiên bản cao cấp, chỉ gồm 6 chỗ ngồi",
    },
    {
        image: "17.webp",
        title: "Hàng ghế hạng thương gia",
        desc: "Định vị là mẫu xe cao cấp nên chắc chắn điểm nhấn nội thất sẽ nằm ở hàng ghế thứ 2, vốn là chỗ dành cho các “chủ tịch” siêu “xịn xò”",
    },
    { image: "18.webp", title: "Ghế chỉnh điện", desc: "Ghế lái chỉnh điện 12 hướng cho bản plus và 8 hướng cho bản eco" },
    { image: "19.webp", title: "Chi tiết da ghế", desc: "Sử dụng chất liệu da vô cùng cao cấp, mềm mại, độ bền cao và có đục lỗ thực hiện tính năng sấy & làm mát" },
    {
        image: "20.webp",
        title: "Trần kính toàn cảnh",
        desc: "Cũng là 1 điểm nhấn quan trọng cho phần nội thất VF9, giúp hành khách gần gũi và cảm nhận thiên nhiên trực quan hơn",
    },
    { image: "21.webp", title: "Cửa gió điều hòa", desc: "Thiết kế rất tính tế, ẩn kín ở phần taplo" },
    {
        image: "22.jpg",
        title: "Màn hình hàng ghế 2",
        desc: "Là màn hình cảm ứng cỡ vừa, giúp điều khiển các tính năng trên xe cho người ngồi hàng ghế 2. Đặc biệt là các tính năng VIP",
    },
    { image: "23.webp", title: "Khoang hành lý", desc: "Với thể tích khoảng 900 lít đủ dùng cho mọi nhu cầu của chủ nhân" },
];

const performanceFeatures = [
    {
        image: "24.webp",
        title: "Pin VF9",
        desc: "Sử dụng khối pin hiện đại LFP với dung lượng 82 -92 KWh, VF9 cho sự khả năng di chuyển ấn tượng tới 626 km cho mỗi lần sạc đầy pin",
    },
    {
        image: "25.webp",
        title: "Động cơ VF9",
        desc: "Trang bị 2 động cơ điện cho tổng công suất tới 402 sức ngựa và khả năng tăng tốc từ 0 – 100km/h chỉ trong 6,8s quả là những con số vô cùng ấn tượng về khả năng vận hành cảu VF9",
    },
    {
        image: "26.webp",
        title: "Sạc pin VF9",
        desc: "Thời gian sạc từ 20% – 80% là 30 phút đối với các trạm sạc siêu nhanh, sạc thường khoảng 12-15 giờ để sạc từ 0-100%",
    },
    {
        image: "27.webp",
        title: "Vận hành mạnh mẽ",
        desc: "Với hệ thống khung gầm tiên tiến, đẳng cấp, được thiết kế bởi các kỹ sư hàng đầu thế giới, đi kèm những thông số kỹ thuật ấn tượng đủ đảm bảo cho VF9 khả năng vận hành tuyệt vời, đặc biệt là những tình huống ngập nước",
    },
];

const safetyFeatures = [
    { image: "27.webp", title: "Camera 360 độ", desc: "Giúp chủ xe dễ dàng quan sát khu vực phía quanh xe với độ sắc nét rất cao trong các tình huống di chuyển chậm" },
    {
        image: "28.webp",
        title: "Đọc biển báo giao thông",
        desc: "Là một trong những trang bị vô cùng tiên tiến đối với các dòng trên thị trường hiện nay được. Xe có khả năng đọc, hiểu các biển báo giao thông và cảnh báo cho người lái",
    },
    {
        image: "29.webp",
        title: "Cảm biến áp suất lốp",
        desc: "Là trang bị cực quan trọng, cảnh báo tình trạng 4 lốp xe theo thời gian thực giúp chủ xe tránh những rắc rối không đáng có",
    },
    {
        image: "30.webp",
        title: "Túi khí",
        desc: "Với tiêu chuẩn an toàn khắt khe, VF9 trang bị tới 11 túi khí an toàn cho hành khách với bản Plus và 6 túi khí cho bản Eco",
    },
    {
        image: "31.webp",
        title: "Cảm biến đỗ xe",
        desc: "VF9 được trang bị 4 cảm biến đỗ xe phía trước và 4 cảm biến phía sau giúp việc ra vào bãi đỗ trở nên vô cùng an toàn",
    },
    {
        image: "32.jpg",
        title: "Cảm biến điểm mù",
        desc: "Phát hiện và cảnh báo phương tiện khác trong vùng điểm mù, giúp chủ xe chủ động xử lý tình huống an toàn, đặc biệt là tình huống chuyển làn",
    },
    {
        image: "33.jpg",
        title: "Cảnh báo phương tiện cắt ngang",
        desc: "Phát hiện và cảnh báo phương tiện cắt ngang khi đang lùi trong bãi đỗ ra, do tình huống này thường khuất tầm nhìn",
    },
    {
        image: "34.webp",
        title: "Ga hành trình thích ứng",
        desc: "Với hệ thống radar hiện đại, xe có thể phát hiện xe đi phía trước và tự động điều chỉnh giữ khoảng cách, tốc độ an toàn với xe phía trước",
    },
    {
        image: "35.jpg",
        title: "Lùi chuồng tự động",
        desc: "Chỉ với 1 nút bấm, xe sẽ tự xác định vị trí đỗ phù hợp và tự động đánh lái, lùi vào đúng điểm đỗ 1 cách hoàn hảo nhất",
    },
    {
        image: "36.webp",
        title: "Cảnh báo lệch làn",
        desc: "Camera chuyên dụng sẽ phát hiện việc xe có nguy cơ đi lệch khỏi làn đường hiện hữu, đồng thời cảnh báo cho người lái",
    },
    {
        image: "37.webp",
        title: "Giữ làn",
        desc: "Xe tự động quét, nhận biệt làn đường đang di chuyển thông qua vạch kẻ đường, tự động điều chỉnh vô lăng để giúp xe luôn duy trì ở giữa làn",
    },
    {
        image: "38.webp",
        title: "Cảnh báo mở mửa",
        desc: "Khi xe đã dừng, người lái mở cửa xuống xe, radar sẽ tự động phát hiển và cảnh báo nếu phía sau có xe đang đi tới, có thể xảy ra va chạm nếu mở cửa",
    },
];

export default function VF9Details({ car }: { car: any }) {
    if (!car || !car.name.toUpperCase().includes("VF 9")) return null;

    return (
        <div className="container mx-auto px-4 max-w-6xl mt-12 flex flex-col gap-12">
            {/* KHỐI 2: BẢNG GIÁ CÁC PHIÊN BẢN */}
            <div className="mt-8">
                <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="h-px bg-gray-200 flex-1"></div>
                    <h2 className="text-xl md:text-2xl font-bold uppercase text-gray-800 text-center tracking-wide px-4 whitespace-nowrap">
                        BẢNG GIÁ CÁC PHIÊN BẢN VINFAST VF9
                    </h2>
                    <div className="h-px bg-gray-200 flex-1"></div>
                </div>

                <div className="w-full relative overflow-hidden rounded-2xl flex items-center justify-center min-h-[700px] mb-8 group bg-gray-50">
                    <Image
                        src="/images/cars/VF9/details/0.webp"
                        alt="Bảng giá VF9"
                        fill
                        className="object-cover z-0 group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                    {/* Overlay Bảng Gía */}
                    <div className="relative z-10 flex flex-col md:flex-row gap-6 w-[95%] max-w-5xl my-10">
                        {/* Cột ECO */}
                        <div className="flex-1 bg-white/60 backdrop-blur-md rounded-[2.5rem] shadow-2xl p-6 md:p-8">
                            <h3 className="text-xl md:text-2xl font-black uppercase text-gray-800 text-center mb-1 tracking-wide">VF9 ECO Bao gồm pin</h3>
                            <p className="text-center font-black text-gray-800 mb-6 md:mb-8 text-sm md:text-base pb-6">
                                Giá: <span className="text-[#cc0000] text-xl md:text-2xl">{car.price || "689.000.000 VNĐ"}</span>
                            </p>

                            <div className="flex flex-col gap-[9px] md:gap-3 text-[10px] md:text-xs px-2 md:px-0">
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Động cơ:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">{car.power || "02 Motor Điện 402 Hp"}</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Hộp số:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Tự động</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Dẫn động:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">2 cầu AWD</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Pin:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">82 – 92 kW</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Quãng đường:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">{car.distance || "485 – 626 km"}</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%] shrink-0">Thời gian sạc pin:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">30 phút</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Vành:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Đúc 20 inh</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Đèn:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">LED Matrix</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Chìa khoá:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Smartkey</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Ghế:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Bọc da, Chỉnh điện 8h, Sưởi</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Điều hoà:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Tự động 2 vùng</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Màn hình:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">15,6 inh 13 loa</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Cửa sổ trời:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Không</span>
                                </div>

                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">An toàn:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right max-w-full">11 túi khí, Cam 360, Cảnh báo điểm mù</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Hỗ trợ lái ADAS:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right max-w-full">Full</span>
                                </div>
                                <div className="flex justify-between pb-2">
                                    <span className="text-black font-semibold w-[40%]">Lùi chuồng tự động, đọc biển giao thông:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right max-w-full">Full</span>
                                </div>
                            </div>
                            <div className="mt-6 md:mt-8 flex justify-center px-4">
                                <button className="bg-[#0088FF] hover:bg-[#0066CC] text-white font-bold rounded-lg px-6 py-3 shadow-md transition-all tracking-wide text-xs md:text-sm flex items-center justify-center gap-2 w-full">
                                    LIÊN HỆ NHẬN ƯU ĐÃI NGAY 🎁
                                </button>
                            </div>
                        </div>

                        {/* Cột PLUS */}
                        <div className="flex-1 bg-white/60 backdrop-blur-md rounded-[2.5rem] shadow-2xl p-6 md:p-8">
                            <h3 className="text-xl md:text-2xl font-black uppercase text-gray-800 text-center mb-1 tracking-wide">VF9 PLUS Bao gồm pin</h3>
                            <p className="text-center font-black text-gray-800 mb-6 md:mb-8 text-sm md:text-base pb-6">
                                Giá: <span className="text-[#cc0000] text-xl md:text-2xl">{car.price_plus || "949.000.000 VNĐ"}</span>
                            </p>

                            <div className="flex flex-col gap-[9px] md:gap-3 text-[10px] md:text-xs px-2 md:px-0">
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Động cơ:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">{car.power || "02 Motor Điện 402 Hp"}</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Hộp số:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Tự động</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Dẫn động:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">2 cầu AWD</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Pin:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">82 – 92 KW</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Quãng đường:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">{car.distance || "485 – 626 km"}</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%] shrink-0">Thời gian sạc pin:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">30 phút</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Vành:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Đúc 20 inh</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Đèn:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">LED Matrix</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Chìa khoá:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Smartkey</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Ghế:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Bọc da, Chỉnh điện 12h, Sưởi + Mát + Nhớ</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Điều hoà:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Tự động 3 vùng</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Màn hình:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">15,6 inh 13 loa</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Cửa sổ trời:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Trần kính panorama</span>
                                </div>

                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">An toàn:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right max-w-full">11 túi khí, Cam 360, Cảnh báo điểm mù</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Hỗ trợ lái ADAS:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right max-w-full">Full</span>
                                </div>
                                <div className="flex justify-between pb-2">
                                    <span className="text-black font-semibold w-[40%]">Lùi chuồng tự động, đọc biển giao thông:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right max-w-full">Full</span>
                                </div>
                            </div>
                            <div className="mt-6 md:mt-8 flex justify-center px-4">
                                <button className="bg-[#0088FF] hover:bg-[#0066CC] text-white font-bold rounded-lg px-6 py-3 shadow-md transition-all tracking-wide text-xs md:text-sm flex items-center justify-center gap-2 w-full">
                                    LIÊN HỆ NHẬN ƯU ĐÃI NGAY 🎁
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center mb-8">
                    <Image
                        src="/images/cars/VF9/details/1.webp"
                        alt="Hình ảnh đuôi xe VF9 ngang"
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
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-3 tracking-wide">THIẾT KẾ NGOẠI THẤT VINFAST VF9</h2>
                    <h3 className="text-lg md:text-xl font-bold text-[#cc0000] mb-4">Mạnh mẽ, bề thế – Nâng tầm thời thượng</h3>
                    <p className="text-gray-700 leading-relaxed text-[15px] mx-auto md:mx-0">
                        Vóc dáng bề thế của một chiếc SUV cỡ lớn cùng thiết kế giúp tối ưu tính khí động học để gia tăng quãng đường đi được, đem lại những trải nghiệm
                        đẳng cấp.{" "}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
                    {exteriorFeatures.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                            <div className="w-full aspect-[4/3] relative overflow-hidden mb-5 border border-gray-100 shadow-sm rounded-sm">
                                <Image
                                    src={`/images/cars/VF9/details/${item.image}`}
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
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-3 tracking-wide">THIẾT KẾ NỘI THẤT VINFAST VF9</h2>
                    <h3 className="text-lg md:text-xl font-bold text-[#cc0000] mb-4">Ấn tượng đến từng chi tiết</h3>
                    <p className="text-gray-700 leading-relaxed text-[15px] mx-auto md:mx-0">
                        Thiết kế tối giản mang hơi hướng tương lai nhưng không kém phần tinh tế từ studio danh tiếng Pininfarina đem lại trải nghiệm ấn tượng và cuốn hút
                        từ cái nhìn đầu tiên.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
                    {interiorFeatures.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                            <div className="w-full aspect-[4/3] relative overflow-hidden mb-5 border border-gray-100 shadow-sm rounded-sm">
                                <Image
                                    src={`/images/cars/VF9/details/${item.image}`}
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
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-3 tracking-wide">KHẢ NĂNG VẬN HÀNH VINFAST VF9</h2>
                    <h3 className="text-lg md:text-xl font-bold text-[#cc0000] mb-4">Biến giấc mơ thành hiện thực trên mọi hành trình</h3>
                    <p className="text-gray-700 leading-relaxed text-[15px] mx-auto md:mx-0">
                        Với sứ mệnh sinh ra để phục vụ các chuyến đi dài và phong cách hưởng thụ. VF9 có đầy đủ những yếu tố vận hành để “gánh vác” sứ mệnh to lớn ấy như
                        động cơ dư dả sức mạnh, hệ thống treo cân đối ổn định…
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 mb-10">
                    {performanceFeatures.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                            <div className="w-full aspect-[4/3] relative overflow-hidden mb-5 border border-gray-100 shadow-sm rounded-sm">
                                <Image
                                    src={`/images/cars/VF9/details/${item.image}`}
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
                    src="/images/cars/VF9/details/28.jpg"
                    alt="Hình ảnh Vinfast VF9"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain rounded-xl"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                />
            </div>

            {/* KHỐI 6: TRANG BỊ AN TOÀN */}
            <div className="mt-10 mb-16 max-w-5xl mx-auto w-full px-4 md:px-0">
                <div className="mb-10 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-3 tracking-wide">TRANG BỊ AN TOÀN VINFAST VF9</h2>
                    <h3 className="text-lg md:text-xl font-bold text-[#cc0000] mb-4">Công nghệ cho cuộc sống</h3>
                    <p className="text-gray-700 leading-relaxed text-[15px] mx-auto md:mx-0">
                        Hợp tác cùng những đối tác hàng đầu trên toàn cầu, VinFast áp dụng những công nghệ hiện đại với thiết kế tập trung vào con người, đem lại trải
                        nghiệm Trợ lý ảo cùng loạt Dịch vụ thông minh tiên tiến, đồng hành cùng bạn hướng tới tương lai tốt đẹp hơn.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
                    {safetyFeatures.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                            <div className="w-full aspect-[4/3] relative overflow-hidden mb-5 rounded-sm">
                                <Image
                                    src={`/images/cars/VF6/details/${item.image}`}
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
