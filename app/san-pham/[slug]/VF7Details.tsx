import React from "react";
import Image from "next/image";

const exteriorFeatures = [
    {
        image: "2.webp",
        title: "Đầu xe",
        desc: "Chỉ cần 1 giây ngắn ngủi để bạn bị thu hút ngay lập tức bởi đầu xe VF7 được thiết kế quá đẹp mắt, xét trong phân khúc C-SUV",
    },
    { image: "3.webp", title: "Đèn pha", desc: "Là dạng Bi-Led projector cho tính thẩm mỹ cực cao và chất lượng chiếu sáng tốt" },
    { image: "4.webp", title: "Logo Vinfast", desc: "Logo chữ V kèm dải led cách điệu luôn là nhận diện đặc trưng, thể hiện tinh thần Việt trên mỗi sản phẩm" },
    {
        image: "5.webp",
        title: "Thân xe",
        desc: "Sở hữu chiều dài và chiều cao với tỉ lệ vô cùng cân đối khiến VF7 ấn tượng cả từ phía hông xe. Trụ A B C sơn đen tạo hiệu ứng mui bay rõ rệt",
    },
    {
        image: "6.webp",
        title: "Mâm xe bản Plus",
        desc: "Kích thước tới 20 inh là rất “khổng lồ” trong phân khúc C-SUV, thiết kế 5 chất khá cầu kỳ và tinh sảo giúp VF7 thể thao hơn",
    },
    {
        image: "7.webp",
        title: "Mâm xe bản Eco",
        desc: "Bản tiêu chuẩn cũng đã có bộ mâm 19 inh là một sự đầu tư rất lớn trong việc tạo lập hình ảnh trong mắt khách hàng, cũng như hình ảnh cho chủ sở hữu",
    },
    {
        image: "8.webp",
        title: "Tay nắm cửa",
        desc: "Tay nắm cửa dạng ẩn, khi không sử dụng sẽ ẩn vào thân xe, tạo sự liền mạch và tăng tính khí động học",
    },
    {
        image: "9.webp",
        title: "Gương chiếu hậu",
        desc: "Thiết kế khá điệu đà với 2 tông màu, các đường bo vuốt mềm mại giúp tăng tính thẩm mỹ và khí động học",
    },
    { image: "10.webp", title: "Đuôi xe", desc: "Thiết kế kiểu nâng cao phần trung tâm, các đường dập nổi chạy ngang giúp VF7 bề thế và thể thao hơn hẳn" },
    { image: "11.webp", title: "Cản sau", desc: "Khá cầu kỳ với kiểu phối màu hiện đại, cản sau có chi tiết nổi khối giả bô và đèn phản quang theo tiêu chuẩn thế giới" },
    { image: "12.webp", title: "Đèn hậu", desc: "Sử dụng công nghệ Led dải cho hiệu ứng tuyệt đẹp và nhận diện đặc trưng của nhà Vinfast" },
];

const interiorFeatures = [
    {
        image: "13.webp",
        title: "Khoang lái",
        desc: "Có phần tối giản hoá, tinh tế, không gian hướng tới vị trí người lái. Tạo cảm xúc điều khiểm một chiếc SUV thể thao thực thụ",
    },
    {
        image: "14.webp",
        title: "Màn hình trung tâm",
        desc: "Màn hình kích thước tới 12,9 inh, hiển thị sắc nét, tích hợp đủ các kết nối thông minh, hiển thị các thông tin vận hành xe đi kèm hệ giải trí 8 loa cao cấp",
    },
    { image: "15.webp", title: "Vô lăng", desc: "Thiết kế kiểu khá to bản và có D-cut giúp người lái thoải mái hơn" },
    {
        image: "16.webp",
        title: "Ghế ngồi",
        desc: "Tất cả đều được bọc da cao cấp, có phối chỉ khâu khác màu tạo các điểm nhấn đơn giản nhưng khá hài hoà thị giác",
    },
    { image: "17.webp", title: "Cần số dạng nút bấm", desc: "Khu vực trung tâm được khéo léo biến đổi thành cần số với các phím bấm đẹp mắt, khác lạ, đầy thú vị" },
    { image: "18.webp", title: "Nút chỉnh volume", desc: "Được thiết kế khá tối giản theo ngôn ngữ chung của xe, nằm ở ngay trước bệ tỳ tay vô cùng thuận tiện" },
    { image: "19.webp", title: "Trần kính toàn cảnh", desc: "Là trang bị tuỳ trọn trên dòng xe VF7, mang lại cảm giác đầy thú vị cho mọi giác quan trên các hành trình" },
    { image: "20.webp", title: "Hàng ghế sau", desc: "Không gian rộng rãi là điều đáng tự hào của VF7, ngoài ra cũng có tích hợp bệ tỳ tay to bản" },
];

const performanceFeatures = [
    {
        image: "23.webp",
        title: "Pin VF7",
        desc: "Sử dụng khối pin hiện đại LFP với dung lượng 59,6 -75,3 KWh, VF7 cho sự khả năng di chuyển từ 375 – 410 km cho mỗi lần sạc",
    },
    {
        image: "24.webp",
        title: "Động cơ VF7",
        desc: "Với 2 tuỳ chọn động cơ 1 motor cho công suất 177 sức ngựa và 2 motor cho công suất tới 353 sức ngựa, VF7 cho cảm giác “dính ghế” sau mỗi cú nhấp ga nhẹ nhàng",
    },
    {
        image: "25.webp",
        title: "Sạc pin VF7",
        desc: "VF7 cho khả năng sạc nhanh từ 10 – 70% tối ưu nhất trong 24 phút, và sạc thường 10 – 100% trong vòng 13 tiếng",
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
        desc: "Với tiêu chuẩn an toàn khắt khe, VF7 trang bị tới 8 túi khí an toàn cho hành khách với bản Plus và 6 túi khí cho bản Eco",
    },
    {
        image: "31.webp",
        title: "Cảm biến đỗ xe",
        desc: "VF7 được trang bị 4 cảm biến đỗ xe phía trước và 4 cảm biến phía sau giúp việc ra vào bãi đỗ trở nên vô cùng an toàn",
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

export default function VF7Details({ car }: { car: any }) {
    if (!car || !car.name.toUpperCase().includes("VF 7")) return null;

    return (
        <div className="container mx-auto px-4 max-w-6xl mt-12 flex flex-col gap-12">
            {/* KHỐI 2: BẢNG GIÁ CÁC PHIÊN BẢN */}
            <div className="mt-8">
                <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="h-px bg-gray-200 flex-1"></div>
                    <h2 className="text-xl md:text-2xl font-bold uppercase text-gray-800 text-center tracking-wide px-4 whitespace-nowrap">
                        BẢNG GIÁ CÁC PHIÊN BẢN VINFAST VF7
                    </h2>
                    <div className="h-px bg-gray-200 flex-1"></div>
                </div>

                <div className="w-full relative overflow-hidden rounded-2xl flex items-center justify-center min-h-[700px] mb-8 group bg-gray-50">
                    <Image
                        src="/images/cars/VF7/details/1.webp"
                        alt="Bảng giá VF7"
                        fill
                        className="object-cover z-0 group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                    {/* Overlay Bảng Gía */}
                    <div className="relative z-10 flex flex-col md:flex-row gap-6 w-[95%] max-w-5xl my-10">
                        {/* Cột ECO */}
                        <div className="flex-1 bg-white/40 backdrop-blur-md rounded-[2.5rem] shadow-2xl p-6 md:p-8">
                            <h3 className="text-xl md:text-2xl font-black uppercase text-gray-800 text-center mb-1 tracking-wide">VF7 ECO </h3>
                            <p className="text-center font-black text-gray-800 mb-6 md:mb-8 text-sm md:text-base pb-6">
                                Giá: <span className="text-[#cc0000] text-xl md:text-2xl">{car.price || "689.000.000 VNĐ"}</span>
                            </p>

                            <div className="flex flex-col gap-[9px] md:gap-3 text-[10px] md:text-xs px-2 md:px-0">
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Động cơ:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">{car.power || "01 Motor Điện 177 Hp"}</span>
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
                                    <span className="text-gray-800 font-bold w-[60%] text-right">59,6 KW</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Quãng đường:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">{car.distance || "430 km"}</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%] shrink-0">Thời gian sạc pin:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">24 phút</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Vành:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Hợp kim 19 inch</span>
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
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Bọc da, Chỉnh điện</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Điều hoà:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Tự động 2 vùng</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Màn hình:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">12,9 inh 8 loa</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Sạc điện thoại:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Thường</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">An toàn:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right max-w-full">6 túi khí, Chống lật, Cam 360, Áp suất lốp</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Hỗ trợ lái ADAS:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right max-w-full">Không</span>
                                </div>

                                <div className="flex justify-between pb-2">
                                    <span className="text-black font-semibold w-[40%]">Lùi chuồng tự động, đọc biển giao thông:</span>
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
                        <div className="flex-1 bg-white/40 backdrop-blur-md rounded-[2.5rem] shadow-2xl p-6 md:p-8">
                            <h3 className="text-xl md:text-2xl font-black uppercase text-gray-800 text-center mb-1 tracking-wide">VF7 PLUS</h3>
                            <p className="text-center font-black text-gray-800 mb-6 md:mb-8 text-sm md:text-base pb-6">
                                Giá: <span className="text-[#cc0000] text-xl md:text-2xl">{car.price_plus || "949.000.000 VNĐ"}</span>
                            </p>

                            <div className="flex flex-col gap-[9px] md:gap-3 text-[10px] md:text-xs px-2 md:px-0">
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Động cơ:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">{car.power_plus || "02 Motor Điện 353 Hp"}</span>
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
                                    <span className="text-gray-800 font-bold w-[60%] text-right">75,3 KW</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Quãng đường:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">{car.distance_plus || "496 km"}</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%] shrink-0">Thời gian sạc pin:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">26 – 28 phút</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Vành:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Hợp kim 20 inch</span>
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
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Bọc da, Chỉnh điện, Làm mát</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Điều hoà:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Tự động 2 vùng</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Màn hình:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">12,9 inh 8 loa</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Sạc điện thoại:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right">Không dây</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">An toàn:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right max-w-full">8 túi khí, Chống lật, Cam 360, Áp suất lốp</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300/40 pb-2">
                                    <span className="text-black font-semibold w-[40%]">Cảnh báo điểm mù, ADAS:</span>
                                    <span className="text-gray-800 font-bold w-[60%] text-right max-w-full">Full tính năng</span>
                                </div>
                                <div className="flex justify-between pb-2">
                                    <span className="text-black font-semibold w-[40%]">Lùi chuồng tự động, đọc biển giao thông:</span>
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
                        src="/images/cars/VF7/details/0.webp"
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
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-3 tracking-wide">THIẾT KẾ NGOẠI THẤT VINFAST VF7</h2>
                    <h3 className="text-lg md:text-xl font-bold text-[#cc0000] mb-4"> VF 7 là một bước tiến đột phá trong thiết kế xe ô tô của VinFast</h3>
                    <p className="text-gray-700 leading-relaxed text-[15px] mx-auto md:mx-0">
                        Triết lý thiết kế “Vũ trụ phi đối xứng”. Lấy cảm hứng từ vũ trụ và các vật thể bay trong không gian, VF 7 hiện thân cho sự tự do, công nghệ, thời
                        đại, cá tính, mạnh mẽ và thể thao, thoả mãn mọi tâm hồn đam mê thẩm mỹ và tốc độ. Những đường nét và hình khối được sử dụng nhịp nhàng và tinh tế,
                        mang đến cho chủ nhân VF 7 không gian trải nghiệm đầy phóng khoáng và tràn đầy năng lượng; song vẫn không làm mất đi sự tối giản, tinh khiết và
                        thời trang vốn có của mẫu xe đánh thức mọi đam mê.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
                    {exteriorFeatures.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                            <div className="w-full aspect-[4/3] relative overflow-hidden mb-5 border border-gray-100 shadow-sm rounded-sm">
                                <Image
                                    src={`/images/cars/VF7/details/${item.image}`}
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
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-3 tracking-wide">THIẾT KẾ NỘI THẤT VINFAST VF7</h2>
                    <h3 className="text-lg md:text-xl font-bold text-[#cc0000] mb-4">Kiến tạo không gian trải nghiệm phóng khoáng, tự do và tràn đầy năng lượng</h3>
                    <p className="text-gray-700 leading-relaxed text-[15px] mx-auto md:mx-0">
                        Tận hưởng hành trình trong không gian riêng tư và rộng rãi của chiếc xe, nơi mỗi chi tiết mang đậm dấu ấn cá nhân tạo nên cuộc phiêu lưu độc đáo
                        của riêng bạn.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
                    {interiorFeatures.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                            <div className="w-full aspect-[4/3] relative overflow-hidden mb-5 border border-gray-100 shadow-sm rounded-sm">
                                <Image
                                    src={`/images/cars/VF7/details/${item.image}`}
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
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-3 tracking-wide">KHẢ NĂNG VẬN HÀNH VINFAST VF7</h2>
                    <h3 className="text-lg md:text-xl font-bold text-[#cc0000] mb-4">Khả năng vận hành đỉnh cao trong mọi điều kiện</h3>
                    <p className="text-gray-700 leading-relaxed text-[15px] mx-auto md:mx-0">
                        Dù cho là so sánh với mẫu xe nào cùng phân khúc thì VF7 luôn cho thấy khả năng vận hành vượt trội, kể cả về sức mạnh động cơ, sự linh hoạt và cả
                        sự đầm chắc, êm ái
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
                    src="/images/cars/VF7/details/21.webp"
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
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-3 tracking-wide">TRANG BỊ AN TOÀN VINFAST VF7</h2>
                    <h3 className="text-lg md:text-xl font-bold text-[#cc0000] mb-4">Tiêu biểu cho dòng SUV với đầy đủ mọi tính năng an toàn trong thế giới xe hơi</h3>
                    <p className="text-gray-700 leading-relaxed text-[15px] mx-auto md:mx-0">
                        Hỗ trợ lái trên đường cao tốc. Ứng dụng công nghệ và trang thiết bị hiện đại nhất, hệ thống trợ lái nâng cao VinFast đem lại trải nghiệm lái thư
                        thái, dễ dàng để bạn an tâm tận hưởng cuộc sống
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
