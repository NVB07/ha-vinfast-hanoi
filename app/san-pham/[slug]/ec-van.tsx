export default function ECVANDetails({ car }: { car: any }) {
    if (!car || !car.name.toUpperCase().includes("EC VAN")) return null;

    return (
        <div className="container mx-auto px-4 max-w-6xl mt-12 flex flex-col gap-12">
            <div>
                <p className="text-2xl font-bold mb-3">Cách mạng xanh trong vận tải hàng hóa</p> EC Van tiên phong mang đến giải pháp vận chuyển thương mại đột phá, nổi
                bật với khả năng vận hành linh hoạt, êm ái và tiết kiệm chi phí. Sở hữu thiết kế hiện đại, tiện dụng cùng bảng màu ngoại thất với 4 lựa chọn nổi bật Xanh
                – Vàng – Trắng – Đỏ, EC Van không chỉ là phương tiện di chuyển mà còn là đối tác tin cậy, phương tiện sinh kế phù hợp cho kinh tế hộ gia đình, doanh
                nghiệp.
            </div>
        </div>
    );
}
