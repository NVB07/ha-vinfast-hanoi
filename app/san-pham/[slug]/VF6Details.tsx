import React from "react";
import Image from "next/image";

const exteriorFeatures = [
    { image: "3.webp", title: "Đầu xe", desc: "Thiết kế kiểu bo tròn, tạo dáng vẻ thân thiện và khí động học cao" },
    { image: "4.webp", title: "Cản trước", desc: "Sử dụng nhựa nhám, có khe lấy gió làm mát cho điều hoà và các chi tiết khác, Radar nằm trong gói ADAS cũng tích hợp" },
    { image: "5.webp", title: "Logo Vinfast", desc: "Logo chữ V cách điệu và 2 dải đèn led tạo nhận diện không thể lẫn vào đâu được" },
    {
        image: "6.webp",
        title: "Cụm đèn",
        desc: "Sử dụng kiểu đèn Led kết hợp projector, cho hiệu quả chiếu sáng tuyệt vời, nâng cao tính thẩm mỹ, dải đèn xi nhan led cực đẹp mắt",
    },
    { image: "7.webp", title: "Thân xe", desc: "Với định vị phân khúc B-SUV, VF6 cho một cảm nhận khá lanh lẹ, thanh thoát, cân đối" },
    { image: "8.webp", title: "Gương chiếu hậu", desc: "Thiết kế 2 tone màu, hiện đại thanh thoát, tích hợp đủ các tiện ích thông minh, hiện đại" },
    { image: "9.webp", title: "Mâm xe bản Plus", desc: "Dễ dàng nhận mâm xe VF6 thực sự “khổng lồ” với kích thước 19 inh cho bản Plus. Kích thước này là lớn nhất" },
    {
        image: "10.webp",
        title: "Mâm xe bản Eco",
        desc: "Mâm phiên bản eco với sự đơn giản và kích thước khiên tốn là 17 inh. Tuy nhiên cũng không hề kém cạnh các đối thủ trong phân khúc",
    },
    { image: "11.webp", title: "Đuôi xe", desc: "Thể hiện sự táo bạo với nhiều đường dập nổi chạy ngang đuôi xe, tăng vẻ bề thế của 1 mẫu SUV" },
    { image: "12.webp", title: "Cản sau", desc: "Được tạo hình cơ bản, nhưng lại nổi bật nhờ tạo hình khối sơn màu thân xe kéo dài, 4 cảm biến lùi" },
    { image: "13.webp", title: "Đèn định vị sau", desc: "Dải led định vị đặc trưng của Vinfast, cũng giúp nhận diện đặc trưng và hiện đại hơn" },
];

const interiorFeatures = [
    { image: "14.webp", title: "Khoang lái", desc: "Có phần tối giản hoá, tinh tế, không gian hướng tới vị trí người lái" },
    {
        image: "15.webp",
        title: "Màn hình trung tâm",
        desc: "Màn hình kích thước tới 12,9 inh, hiển thị sắc nét, tích hợp đủ các kết nối thông minh, hiển thị các thông tin vận hành xe đi kèm hệ giải trí 8 loa cao cấp",
    },
    { image: "16.webp", title: "Vô lăng", desc: "Thiết kế kiểu khá to bản và có D-cut giúp người lái thoải mái hơn" },
    {
        image: "17.webp",
        title: "Ghế ngồi bản Plus",
        desc: "Tất cả đều được bọc da cao cấp, có phối chỉ khâu khác màu tạo các điểm nhấn đơn giản nhưng khá hài hoà thị giác",
    },
    { image: "18.webp", title: "Ghế ngồi bản Eco", desc: "Cũng được bọc da tương tự trên bản Plus nhưng về chất liệu thì ở mức cơ bản hơn" },
    { image: "19.webp", title: "Cần số dạng nút bấm", desc: "Khu vực trung tâm được khéo léo biến đổi thành cần số với các phím bấm đẹp mắt, khác lạ, đầy thú vị" },
    { image: "20.webp", title: "Nút chỉnh volume", desc: "Được thiết kế khá tối giản theo ngôn ngữ chung của xe, nằm ở ngay trước bệ tỳ tay vô cùng thuận tiện" },
    { image: "21.webp", title: "Hàng ghế sau", desc: "Không gian rộng rãi là điều đáng tự hào của VF6, ngoài ra cũng có tích hợp bệ tỳ tay to bản" },
    { image: "22.webp", title: "Khoang hành lý", desc: "Với thể khi bình thường là 350 lít và tăng lên tới 1275 lít khi gập phẳng hàng ghế sau" },
];

const performanceFeatures = [
    {
        image: "23.webp",
        title: "Pin VF6",
        desc: "Sử dụng khối pin hiện đại LFP với dung lượng 59,6 KWh, VF6 cho sự khả năng di chuyển tới 399 km cho mỗi lần sạc đầy pin",
    },
    {
        image: "24.webp",
        title: "Động cơ VF6",
        desc: "Với động cơ điện công suất 204 mã lực, 310 Nm mô men xoắn, VF6 dễ dàng cho người lái “dính ghế” sau mỗi cú nhấp ga",
    },
    {
        image: "25.webp",
        title: "Sạc pin VF6",
        desc: "Theo công bố của Vinfast, VF6 có khả năng sạc nhanh từ 10%-70% chỉ trong vòng 24 phút và 9 giờ đối với sạc thường tới 100%",
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
        desc: "Với tiêu chuẩn an toàn khắt khe, VF6 trang bị tới 6 túi khí an toàn cho hành khách với bản Plus và 4 túi khi cho bản Eco",
    },
    {
        image: "31.webp",
        title: "Cảm biến đỗ xe",
        desc: "VF6 được trang bị 4 cảm biến đỗ xe phía trước và 4 cảm biến phía sau giúp việc ra vào bãi đỗ trở nên vô cùng an toàn",
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

export default function VF6Details({ car }: { car: any }) {
    if (!car || !car.name.toUpperCase().includes("VF 6")) return null;

    return (
        <div className="container mx-auto px-4 max-w-6xl mt-12 flex flex-col gap-12">
            {/* KHỐI 2: BẢNG GIÁ CÁC PHIÊN BẢN */}
            <div className="mt-8">
                <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="h-px bg-gray-200 flex-1"></div>
                    <h2 className="text-xl md:text-2xl font-bold uppercase text-gray-800 text-center tracking-wide px-4 whitespace-nowrap">
                        BẢNG GIÁ CÁC PHIÊN BẢN VINFAST VF6
                    </h2>
                    <div className="h-px bg-gray-200 flex-1"></div>
                </div>

                <div className="w-full relative overflow-hidden rounded-2xl flex items-center justify-center min-h-[700px] mb-8 group bg-gray-50">
                    <Image
                        src="/images/cars/VF6/details/1.webp"
                        alt="Bảng giá VF6"
                        fill
                        className="object-cover z-0 group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                    {/* Overlay Bảng Gía */}
                    <div className="relative z-10 flex flex-col md:flex-row gap-6 w-[95%] max-w-5xl my-10">
                        {/* Cột ECO */}
                        <div className="flex-1 bg-white/95 backdrop-blur-md rounded-[2.5rem] shadow-2xl p-6 md:p-8">
                            <h3 className="text-xl md:text-2xl font-black uppercase text-gray-800 text-center mb-1 tracking-wide">VF6 ECO BAO GỒM PIN</h3>
                            <p className="text-center font-black text-gray-800 mb-6 md:mb-8 text-sm md:text-base pb-6">
                                Giá: <span className="text-[#cc0000] text-xl md:text-2xl">{car.price || "689.000.000 VNĐ"}</span>
                            </p>

                            <div className="flex flex-col gap-[9px] md:gap-3 text-[10px] md:text-xs px-2 md:px-0">
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-gray-500 font-semibold w-[40%]">Động cơ:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">{car.power || "01 Motor Điện 136 Hp"}</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-gray-500 font-semibold w-[40%]">Hộp số:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Tự động</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-gray-500 font-semibold w-[40%]">Dẫn động:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Cầu trước</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-gray-500 font-semibold w-[40%]">Pin:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">59,6 KW</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-gray-500 font-semibold w-[40%]">Quãng đường:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">{car.distance || "399 km"}</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-gray-500 font-semibold w-[40%] shrink-0">Thời gian sạc pin:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">10%-70%: 24 phút</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-gray-500 font-semibold w-[40%]">Vành:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Đúc 17 inh</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-gray-500 font-semibold w-[40%]">Đèn:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Led</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-gray-500 font-semibold w-[40%]">Chìa khoá:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Smartkey</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-gray-500 font-semibold w-[40%]">Ghế:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Bọc da, Chỉnh cơ</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-gray-500 font-semibold w-[40%]">Điều hoà:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Tự động 1 vùng</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-gray-500 font-semibold w-[40%]">Màn hình:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">12,9 inh 6 loa</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-gray-500 font-semibold w-[40%]">Sạc điện thoại:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Thường</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-gray-500 font-semibold w-[40%]">An toàn:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right max-w-full">4 túi khí, Chống lật, Cam 360, Áp suất lốp</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-gray-500 font-semibold w-[40%]">Cảnh báo:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right max-w-full">điểm mù</span>
                                </div>
                                <div className="flex justify-between pb-2">
                                    <span className="text-gray-500 font-semibold w-[40%]">Lùi chuồng tự động, Đọc biển giao thông:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right max-w-full">Không</span>
                                </div>
                            </div>
                            <div className="mt-6 md:mt-8 flex justify-center px-4">
                                <button className="bg-[#0088FF] hover:bg-[#0066CC] text-white font-bold rounded-lg px-6 py-3 shadow-md transition-all tracking-wide text-xs md:text-sm flex items-center justify-center gap-2 w-full">
                                    LIÊN HỆ NHẬN ƯU ĐÃI NGAY 🎁
                                </button>
                            </div>
                        </div>

                        {/* Cột PLUS */}
                        <div className="flex-1 bg-white/95 backdrop-blur-md rounded-[2.5rem] shadow-2xl p-6 md:p-8">
                            <h3 className="text-xl md:text-2xl font-black uppercase text-gray-800 text-center mb-1 tracking-wide">VF6 PLUS BAO GỒM PIN</h3>
                            <p className="text-center font-black text-gray-800 mb-6 md:mb-8 text-sm md:text-base pb-6">
                                Giá: <span className="text-[#cc0000] text-xl md:text-2xl">{car.price_plus || "749.000.000 VNĐ"}</span>
                            </p>

                            <div className="flex flex-col gap-[9px] md:gap-3 text-[10px] md:text-xs px-2 md:px-0">
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-gray-500 font-semibold w-[40%]">Động cơ:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">{car.power_plus || "01 Motor Điện 204 Hp"}</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-gray-500 font-semibold w-[40%]">Hộp số:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Tự động</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-gray-500 font-semibold w-[40%]">Dẫn động:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Cầu trước</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-gray-500 font-semibold w-[40%]">Pin:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">59,6 KW</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-gray-500 font-semibold w-[40%]">Quãng đường:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">{car.distance_plus || "381 km"}</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-gray-500 font-semibold w-[40%] shrink-0">Thời gian sạc pin:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">10%-70%: 24 phút</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-gray-500 font-semibold w-[40%]">Vành:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Đúc 19 inh</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-gray-500 font-semibold w-[40%]">Đèn:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Led</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-gray-500 font-semibold w-[40%]">Chìa khoá:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Smartkey</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-gray-500 font-semibold w-[40%]">Ghế:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Bọc da, Chỉnh điện, Thông gió</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-gray-500 font-semibold w-[40%]">Điều hoà:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Tự động 2 vùng</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-gray-500 font-semibold w-[40%]">Màn hình:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">12,9 inh 8 loa</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-gray-500 font-semibold w-[40%]">Sạc điện thoại:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Thường</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-gray-500 font-semibold w-[40%]">An toàn:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right max-w-full">8 túi khí, Chống lật, Cam 360, Áp suất lốp</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-gray-500 font-semibold w-[40%]">Cảnh báo điểm mù, ADAS:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right max-w-full">Full tính năng</span>
                                </div>
                                <div className="flex justify-between pb-2">
                                    <span className="text-gray-500 font-semibold w-[40%]">Lùi chuồng tự động, Đọc biển giao thông:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right max-w-full">Có</span>
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
                        src="/images/cars/VF6/details/2.webp"
                        alt="Hình ảnh đuôi xe VF6 ngang"
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
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-3 tracking-wide">THIẾT KẾ NGOẠI THẤT VINFAST VF6</h2>
                    <h3 className="text-lg md:text-xl font-bold text-[#cc0000] mb-4"> Triết lý thiết kế “Cặp đối lập tự nhiên”</h3>
                    <p className="text-gray-700 leading-relaxed text-[15px] mx-auto md:mx-0">
                        VF 6 là tuyệt tác nghệ thuật được thiết kế dựa trên triết lý “Cặp đối lập tự nhiên”, tạo nên sự cân bằng hoàn hảo giữa các yếu tố tưởng chừng như
                        đối lập: thú vị – tinh tế, công nghệ – con người.{" "}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
                    {exteriorFeatures.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                            <div className="w-full aspect-[4/3] relative overflow-hidden mb-5 border border-gray-100 shadow-sm rounded-sm">
                                <Image
                                    src={`/images/cars/VF6/details/${item.image}`}
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
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-3 tracking-wide">THIẾT KẾ NỘI THẤT VINFAST VF6</h2>
                    <h3 className="text-lg md:text-xl font-bold text-[#cc0000] mb-4">VF6 là cái tên nổi bật trong phân khúc về sự tiện nghi, cao cấp</h3>
                    <p className="text-gray-700 leading-relaxed text-[15px] mx-auto md:mx-0">
                        Thiết kế nội thất lấy cảm hứng từ ngôi nhà thứ hai của gia đình với không gian rộng rãi, thoải mái cùng hai màu nội thất và chất liệu tự nhiên,
                        thân thiện với người dùng.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
                    {interiorFeatures.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                            <div className="w-full aspect-[4/3] relative overflow-hidden mb-5 border border-gray-100 shadow-sm rounded-sm">
                                <Image
                                    src={`/images/cars/VF6/details/${item.image}`}
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
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-3 tracking-wide">KHẢ NĂNG VẬN HÀNH VINFAST VF6</h2>
                    <h3 className="text-lg md:text-xl font-bold text-[#cc0000] mb-4">Lái xe VF6 nhưng trải nghiệm đã vượt xa phân khúc B</h3>
                    <p className="text-gray-700 leading-relaxed text-[15px] mx-auto md:mx-0">
                        Với sức mạnh của động cơ điện tương đương với những mẫu xe thuộc phân khúc C-SUV, VF 6 chắc chắn sẽ thỏa mãn niềm đam mê cầm lái của chủ sở hữu,
                        tự tin chinh phục mọi địa hình.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 mb-10">
                    {performanceFeatures.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                            <div className="w-full aspect-[4/3] relative overflow-hidden mb-5 border border-gray-100 shadow-sm rounded-sm">
                                <Image
                                    src={`/images/cars/VF6/details/${item.image}`}
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
                    src="/images/cars/VF6/details/26.webp"
                    alt="Hình ảnh Vinfast VF6"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain rounded-xl"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                />
            </div>

            {/* KHỐI 6: TRANG BỊ AN TOÀN */}
            <div className="mt-10 mb-16 max-w-5xl mx-auto w-full px-4 md:px-0">
                <div className="mb-10 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-3 tracking-wide">TRANG BỊ AN TOÀN VINFAST VF6</h2>
                    <h3 className="text-lg md:text-xl font-bold text-[#cc0000] mb-4">An tâm trên từng khoẳnh khắc</h3>
                    <p className="text-gray-700 leading-relaxed text-[15px] mx-auto md:mx-0">
                        Với sứ mệnh sinh ra để những cung đường thách thức nhất với mọi điều kiện giao thông, VF6 đều cho thấy khả năng bảo vệ an toàn đến tận cùng cho
                        mọi hành khách trên xe
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
