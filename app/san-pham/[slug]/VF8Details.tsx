import React from "react";
import Image from "next/image";

const exteriorFeatures = [
    {
        image: "3.webp",
        title: "Đầu xe",
        desc: "Giảm lực cản không khí và tăng hiệu quả vận hành, đồng thời mang lại vẻ ngoài hiện đại và mạnh mẽ.",
    },
    { image: "4.webp", title: "Đèn pha", desc: "Sử dụng công nghệ full cho khả năng chiếu sáng đỉnh cao nhất" },
    { image: "5.webp", title: "Cản trước", desc: "Thiết kế đơn giản, với các đường nổi khối to bản tạo ánh nhìn “cơ bắp” cho mẫu xe SUV cỡ trung" },
    {
        image: "6.webp",
        title: "Thân xe",
        desc: "Thiết kế khá cân đối giữa chiều cao và chiều dài, thân xe cao lớn và đậm chất SUV",
    },
    {
        image: "7.jpg",
        title: "Mâm xe bản Lux",
        desc: "Kích thước lến tới 20 inh, thiết kế kiểu 5 chấu kép, 2 tone màu thanh thanh thoát, thể thao",
    },
    {
        image: "8.jpg",
        title: "Mâm xe bản Lux Plus",
        desc: "Kích thước lến tới 20 inh, thiết kế kiểu 5 chấu kép, có mạ vàng trang trí thượng hạng",
    },
    {
        image: "9.webp",
        title: "Mâm xe bản S",
        desc: "Kích thước tới 19 inh, các chấu to bản hơn, tạo hình kiểu cánh quạt, tạo hiệu ứng đẹp mắt khi di chuyển",
    },
    {
        image: "10.webp",
        title: "Gương chiếu hậu",
        desc: "Tự động lưu vị trí theo thói quen của chủ xe, tích hợp đèn báo rẽ và cảnh báo điểm mù tăng tăng cường sự an toàn cho Khách hàng.",
    },
    { image: "11.webp", title: "Đuôi xe", desc: "Thoáng nhìn đã thấy ngay sự bề thế, vững chãi nhờ thiết kế các đường dập nổi chạy ngang" },
    { image: "12.webp", title: "Đèn định vị sau", desc: "Vẫn là kiểu tạo hình chữ V cách điệu với 2 dải led chạy dài 2 bên hông nối vào tới logo ở gữa cốp xe" },
    { image: "13.webp", title: "Đèn xi nhan", desc: "Sử dụng công nghệ led, cho việc phát tín hiệu chính xác về thời gian và tính thẩm mỹ cao" },
    { image: "14.webp", title: "Cản sau", desc: "Khá đơn giản với 2 tone màu, tích hợp cảm biến lùi" },
];

const interiorFeatures = [
    {
        image: "15.webp",
        title: "Khoang lái bản Lux plus",
        desc: "Sử dụng tone màu chủ đạo là màu đen, VF8 Lux plus cho thấy sự khác biệt về độ cao cấp và sang trọng",
    },
    {
        image: "16.webp",
        title: "Màn hình trung tâm",
        desc: "Màn hình kích thước tới 15,6 inh, hiển thị sắc nét, tích hợp đủ các kết nối thông minh, hiển thị các thông tin vận hành xe",
    },
    {
        image: "17.jpg",
        title: "Vô lăng",
        desc: "Không chỉ tích hợp khả năng sưởi, vô lăng của VF 8 còn có thể ghi nhớ và tự động điều chỉnh theo thói quen lái xe của bạn",
    },
    {
        image: "18.webp",
        title: "Điều hòa",
        desc: "Sở hữu kiểu điều hoà tự động 2 vùng với giao diện siêu tối giản giúp người dùng dễ dàng thao tác",
    },
    { image: "19.webp", title: "Ghế ngồi", desc: "Tất cả đều được bọc da cao cấp, ghế lái chỉnh điện 12 hướng" },
    { image: "20.jpg", title: "Hàng ghế sau", desc: "Không gian vô cùng rộng rãi, tích hơp bệ tỳ tay cho những chuyến đi xa thoải mái hơn" },
    { image: "21.jpg", title: "Cần số", desc: "Dạng nút bấm rất đặc trưng cửa Vinfast, nâng cáo tính thẩm mỹ, hiện đại và công nghệ" },
    { image: "22.webp", title: "Trần kính", desc: "Tích hợp rèm điện, điều khiển đóng mở bằng giọng nói" },
    { image: "23.webp", title: "Khoang hành lý", desc: "Với thể tích 376 lít và tăng lên tới 1.373 lít khi gập phẳng hàng ghế sau" },
    {
        image: "24.jpg",
        title: "Khoang hành lý phía trước",
        desc: "Với dung tích chứa đồ không quá lớn nhưng đây cũng là 1 trong những tiện ích rất thú vị và khác biệt của VF8",
    },
];

const performanceFeatures = [
    {
        image: "24.webp",
        title: "Pin VF8",
        desc: "Sử dụng khối pin hiện đại LFP với dung lượng 88,8 KWh, VF8 cho sự khả năng di chuyển tới 471 km cho mỗi lần sạc đầy pin",
    },
    {
        image: "25.webp",
        title: "Động cơ VF8",
        desc: "Theo công bố của Vinfast, VF8 có khả năng sạc siêu nhanh từ 10%-70% chỉ trong vòng 31 phút và 8 giờ đối với sạc nhanh 11 KW từ 10% – 100%",
    },
    {
        image: "20.webp",
        title: "Sạc pin VF8",
        desc: "Theo công bố của Vinfast, VF8 có khả năng sạc siêu nhanh từ 10%-70% chỉ trong vòng 24 phút và 8 giờ đối với sạc nhanh 11 KW từ 10% – 100%",
    },
    {
        image: "26.jpg",
        title: "Vận hành mạnh mẽ",
        desc: "Với động cơ điện công suất 402 mã lực, VF8 cho khả năng vận hành siêu linh hoạt, nhẹ nhàng, đạt tốc độ 100km/h chỉ trong hơn 5s. Cảm giác lái chính xác, đầm chắc",
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
        desc: "Với tiêu chuẩn an toàn khắt khe, VF8 trang bị tới 11 túi khí an toàn cho hành khách với bản Plus và 6 túi khí cho bản Eco",
    },
    {
        image: "31.webp",
        title: "Cảm biến đỗ xe",
        desc: "VF8 được trang bị 4 cảm biến đỗ xe phía trước và 4 cảm biến phía sau giúp việc ra vào bãi đỗ trở nên vô cùng an toàn",
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

export default function VF8Details({ car }: { car: any }) {
    if (!car || !car.name.toUpperCase().includes("VF 8")) return null;

    return (
        <div className="container mx-auto px-4 max-w-6xl mt-12 flex flex-col gap-12">
            {/* KHỐI 2: BẢNG GIÁ CÁC PHIÊN BẢN */}
            <div className="mt-8">
                <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="h-px bg-gray-200 flex-1"></div>
                    <h2 className="text-xl md:text-2xl font-bold uppercase text-gray-800 text-center tracking-wide px-4 whitespace-nowrap">
                        BẢNG GIÁ CÁC PHIÊN BẢN VINFAST VF8
                    </h2>
                    <div className="h-px bg-gray-200 flex-1"></div>
                </div>

                <div className="w-full relative overflow-hidden rounded-2xl flex items-center justify-center min-h-[700px] mb-8 group bg-gray-50">
                    <Image
                        src="/images/cars/VF8/details/1.webp"
                        alt="Bảng giá VF8"
                        fill
                        className="object-cover z-0 group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                    {/* Overlay Bảng Gía */}
                    <div className="relative z-10 flex flex-col md:flex-row gap-6 w-[95%] max-w-5xl my-10">
                        {/* Cột ECO */}
                        <div className="flex-1 bg-white/40 backdrop-blur-md rounded-[2.5rem] shadow-2xl p-6 md:p-8">
                            <h3 className="text-xl md:text-2xl font-black uppercase text-gray-800 text-center mb-1 tracking-wide">VF8 ECO Bao gồm pin</h3>
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
                                    <span className="text-gray-800 font-bold w-[60%] text-right">88,8 KW</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Quãng đường:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">{car.distance || "460 – 510 km"}</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%] shrink-0">Thời gian sạc pin:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">10%-70% 31 phút</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Vành:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Đúc 20 inh</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Đèn:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">LED</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Chìa khoá:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Smartkey</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Ghế:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Da thật, Chỉnh điện 12h, Sưởi + Mát + Nhớ</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Điều hoà:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Tự động 2 vùng</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Màn hình:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">15,6 inh 10 loa</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Cửa sổ trời:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Rộng</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Cốp:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Chỉnh điện</span>
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
                        <div className="flex-1 bg-white/40 backdrop-blur-md rounded-[2.5rem] shadow-2xl p-6 md:p-8">
                            <h3 className="text-xl md:text-2xl font-black uppercase text-gray-800 text-center mb-1 tracking-wide">VF8 PLUS Bao gồm pin</h3>
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
                                    <span className="text-gray-800 font-bold w-[60%] text-right">88,8 KW</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Quãng đường:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">{car.distance || "460 – 510 km"}</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%] shrink-0">Thời gian sạc pin:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">10%-70% 31 phút</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Vành:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Đúc 20 inh</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Đèn:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">LED</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Chìa khoá:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Smartkey</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Ghế:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Da thật, Chỉnh điện 12h, Sưởi + Mát + Nhớ</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Điều hoà:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Tự động 2 vùng</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Màn hình:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">15,6 inh 10 loa</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Cửa sổ trời:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Rộng</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Cốp:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Chỉnh điện</span>
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
                        src="/images/cars/VF8/details/2.webp"
                        alt="Hình ảnh đuôi xe VF8 ngang"
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
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-3 tracking-wide">THIẾT KẾ NGOẠI THẤT VINFAST VF8</h2>
                    <h3 className="text-lg md:text-xl font-bold text-[#cc0000] mb-4"> Thiết kế cá nhân hoá</h3>
                    <p className="text-gray-700 leading-relaxed text-[15px] mx-auto md:mx-0">
                        VF 8 thế hệ mới đem đến 10 lựa chọn màu ngoại thất phối hai màu độc quyền, phù hợp cho những chủ nhân yêu thích phong cách và sự sang trọng.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
                    {exteriorFeatures.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                            <div className="w-full aspect-[4/3] relative overflow-hidden mb-5 border border-gray-100 shadow-sm rounded-sm">
                                <Image
                                    src={`/images/cars/VF8/details/${item.image}`}
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
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-3 tracking-wide">THIẾT KẾ NỘI THẤT VINFAST VF8</h2>
                    <h3 className="text-lg md:text-xl font-bold text-[#cc0000] mb-4">Thăng hạng đẳng cấp</h3>
                    <p className="text-gray-700 leading-relaxed text-[15px] mx-auto md:mx-0">
                        VF 8 Lux dành cho những người hiểu rõ giá trị sang trọng và đẳng cấp, mong muốn tận hưởng trọn vẹn những trải nghiệm cho bản thân và gia đình.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
                    {interiorFeatures.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                            <div className="w-full aspect-[4/3] relative overflow-hidden mb-5 border border-gray-100 shadow-sm rounded-sm">
                                <Image
                                    src={`/images/cars/VF8/details/${item.image}`}
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
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-3 tracking-wide">KHẢ NĂNG VẬN HÀNH VINFAST VF8</h2>
                    <h3 className="text-lg md:text-xl font-bold text-[#cc0000] mb-4">Sẵn sàng cho mọi hành trình</h3>
                    <p className="text-gray-700 leading-relaxed text-[15px] mx-auto md:mx-0">
                        Với quãng đường di chuyển mỗi lần sạc đầy lên tới 471 km, kết hợp với hệ thống trạm sạc phủ sóng trên 63 tỉnh thành và nhiều ưu đãi đặc quyền dành
                        riêng độc đáo, VinFast VF 8 cam kết sẵn sàng cùng bạn chinh phục mọi hành trình, cùng bạn tận hưởng không khí trong lành và khung cảnh thiên nhiên
                        tươi đẹp trên mọi nẻo đường tại Việt Nam
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 mb-10">
                    {performanceFeatures.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                            <div className="w-full aspect-[4/3] relative overflow-hidden mb-5 border border-gray-100 shadow-sm rounded-sm">
                                <Image
                                    src={`/images/cars/VF8/details/${item.image}`}
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
                    src="/images/cars/VF8/details/27.webp"
                    alt="Hình ảnh Vinfast VF7"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain rounded-xl"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                />
            </div>

            {/* KHỐI 6: TRANG BỊ AN TOÀN */}
            <div className="mt-10 mb-16 max-w-5xl mx-auto w-full px-4 md:px-0">
                <div className="mb-10 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-3 tracking-wide">TRANG BỊ AN TOÀN VINFAST VF8</h2>
                    <h3 className="text-lg md:text-xl font-bold text-[#cc0000] mb-4">An toàn của gia đình bạn là ưu tiên trên hết của VinFast</h3>
                    <p className="text-gray-700 leading-relaxed text-[15px] mx-auto md:mx-0">
                        Tất cả các xe VinFast tuân thủ các tiêu chuẩn an toàn nghiêm ngặt nhất và được trang bị những công nghệ hiện đại theo chuẩn quốc tế, mang lại sự
                        yên tâm tuyệt đối cho gia đình bạn trên mọi chặng đường
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
