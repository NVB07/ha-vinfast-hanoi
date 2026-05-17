export default function EBUSDetails({ car }: { car: any }) {
    if (!car || !car.name.toUpperCase().includes("E BUS")) return null;

    return (
        <div className="container mx-auto px-4 max-w-6xl mt-12 flex flex-col gap-12">
            <div>
                <p className=" font-bold mb-3">
                    Dòng xe buýt điện cỡ nhỏ EB 6 cùng phiên bản xe chuyên chở học sinh (school bus) có thể tích hợp các công nghệ giám sát tiên tiến, giúp đảm bảo an
                    toàn tối đa và không để xảy ra trường hợp bỏ quên học sinh trên xe. Đây là những sản phẩm chiến lược trong tiến trình xanh hóa giao thông đô thị, vừa
                    góp phần thúc đẩy chuyển đổi xanh trong ngành vận tải, vừa nâng cao tiêu chuẩn, chất lượng dịch vụ di chuyển cho người dân.
                </p>
                Dòng xe buýt điện mới của VinFast có kích thước các chiều Dài x Rộng x Cao lần lượt là 6.200 x 2.200 x 2.900 (mm), khoảng sáng gầm xe đầy tải tối thiểu
                180mm, phù hợp với điều kiện vận hành tại các đô thị lớn và liên tỉnh. Xe được trang bị một động cơ điện có công suất tối đa 140kW, mô-men xoắn cực đại
                420Nm, hệ dẫn động cầu sau, có tốc độ tối đa 90 km/h.
            </div>
        </div>
    );
}
