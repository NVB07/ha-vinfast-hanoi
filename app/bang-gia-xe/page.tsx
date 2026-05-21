import { getCachedCars } from "@/utils/supabase/cached";
import Image from "next/image";
import { mockHomeCars } from "@/utils/mockData";
import { SITE_URL } from "@/lib/config";

export const metadata = {
    title: "Bảng Giá Xe Điện VinFast 2025 Mới Nhất | VinFast Hà Nội",
    description: "Cập nhật bảng giá xe VinFast 2025: VF 3, VF 5, VF 6, VF 7, VF 8, VF 9 mới nhất. Giá niêm yết và giá ưu đãi chính thức từ đại lý VinFast chính hãng tại Hà Nội. Liên hệ ngay để nhận báo giá tốt nhất!",
    keywords: ["bảng giá xe VinFast", "giá xe VinFast 2025", "giá VF 3", "giá VF 5", "giá VF 6", "giá VF 7", "giá VF 8", "giá VF 9", "giá lăn bánh VinFast", "giá ưu đãi VinFast"],
    alternates: { canonical: `${SITE_URL}/bang-gia-xe` },
    openGraph: {
        title: "Bảng Giá Xe Điện VinFast 2025 | VinFast Hà Nội",
        description: "Xem ngay bảng giá xe điện VinFast 2025 đầy đủ nhất. Giá niêm yết và ưu đãi chính thức từ đại lý VinFast chính hãng tại Hà Nội.",
        url: `${SITE_URL}/bang-gia-xe`,
        type: "website",
    },
};

export default async function BangGiaXePage() {
    let cars = [];
    try {
        const data = await getCachedCars();
        if (data) {
            cars = data;
        }
    } catch (error) {
        console.error("Lỗi khi fetch cars:", error);
    }

    // Merge DB cars with mockHomeCars
    const dbCars = cars || [];
    const mergedCars = mockHomeCars.map((mockCar) => {
        const dbCar = dbCars.find((c) => c.id === mockCar.id);
        return dbCar ? { ...mockCar, ...dbCar } : mockCar;
    });
    const customCars = dbCars.filter((dbCar) => !mockHomeCars.some((m) => m.id === dbCar.id));
    const displayCars = [...mergedCars, ...customCars];

    return (
        <main className="min-h-screen bg-white py-12 md:py-16">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#cc0000] uppercase mb-4">
                        BẢNG GIÁ XE VINFAST TẠI VINFAST
                    </h1>
                    <p className="text-gray-600 max-w-3xl mx-auto text-[15px] leading-relaxed">
                        Cập nhật bảng giá xe VinFast mới nhất, để biết thêm thông tin khuyến mãi quý khách vui lòng liên hệ tới hotline của chúng tôi được hỗ trợ tốt nhất.
                    </p>
                </div>

                <div className="flex flex-col gap-16 md:gap-20">
                    {displayCars.map((car, index) => {
                        // Determine if it has 2 prices
                        const hasTwoPrices = car.price_plus && car.price_plus.trim() !== "";
                        
                        return (
                            <div key={index} className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                                {/* Left: Image and Name */}
                                <div className="w-full md:w-1/3 flex flex-col items-center relative">
                                    <h2 className="text-xl md:text-2xl font-bold text-[#cc0000] uppercase mb-4 self-start md:self-center">
                                        VINFAST {car.name.toUpperCase()}
                                    </h2>
                                    <div className="absolute top-8 md:top-10 left-1/2 -translate-x-1/2 text-gray-100 font-black text-7xl md:text-8xl opacity-50 pointer-events-none select-none z-0 whitespace-nowrap">
                                        {car.name.replace("VF ", "VF").toUpperCase()}
                                    </div>
                                    <div className="relative w-full aspect-[4/3] max-w-[300px] z-10">
                                        <Image
                                            src={car.image}
                                            alt={car.name}
                                            fill
                                            className="object-contain drop-shadow-xl"
                                        />
                                    </div>
                                </div>

                                {/* Right: Table and Note */}
                                <div className="w-full md:w-2/3 flex flex-col pt-4 md:pt-12">
                                    <h3 className="text-center md:text-left text-gray-500 font-bold uppercase mb-4">
                                        GIẢM GIÁ TIỀN MẶT HẤP DẪN
                                    </h3>
                                    
                                    <div className="border border-gray-300 rounded-sm overflow-hidden mb-6">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="border-b border-gray-300">
                                                    <th className="p-3 px-4 text-[#006400] font-bold uppercase border-r border-gray-300 bg-white w-1/2 text-sm">
                                                        MẪU XE
                                                    </th>
                                                    <th className="p-3 px-4 text-[#006400] font-bold uppercase bg-white w-1/2 text-sm">
                                                        GIÁ KHUYẾN MÃI
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {hasTwoPrices ? (
                                                    <>
                                                        <tr className="border-b border-gray-300 bg-white">
                                                            <td className="p-3 px-4 text-gray-700 border-r border-gray-300 text-[15px]">
                                                                Vinfast {car.name} Eco
                                                            </td>
                                                            <td className="p-3 px-4 text-[15px]">
                                                                {car.price_promo ? (
                                                                    <div className="flex flex-col">
                                                                        <span className="line-through text-gray-400 text-xs font-normal">{car.price}</span>
                                                                        <span className="text-[#cc0000] font-bold">{car.price_promo}</span>
                                                                    </div>
                                                                ) : (
                                                                    <span className="text-[#cc0000] font-bold">{car.price}</span>
                                                                )}
                                                            </td>
                                                        </tr>
                                                        <tr className="bg-white">
                                                            <td className="p-3 px-4 text-gray-700 border-r border-gray-300 text-[15px]">
                                                                Vinfast {car.name} Plus
                                                            </td>
                                                            <td className="p-3 px-4 text-[15px]">
                                                                {car.price_plus_promo ? (
                                                                    <div className="flex flex-col">
                                                                        <span className="line-through text-gray-400 text-xs font-normal">{car.price_plus}</span>
                                                                        <span className="text-[#cc0000] font-bold">{car.price_plus_promo}</span>
                                                                    </div>
                                                                ) : (
                                                                    <span className="text-[#cc0000] font-bold">{car.price_plus}</span>
                                                                )}
                                                            </td>
                                                        </tr>
                                                    </>
                                                ) : (
                                                    <tr className="bg-white">
                                                        <td className="p-3 px-4 text-gray-700 border-r border-gray-300 text-[15px]">
                                                            Vinfast {car.name}
                                                        </td>
                                                        <td className="p-3 px-4 text-[15px]">
                                                            {car.price_promo ? (
                                                                <div className="flex flex-col">
                                                                    <span className="line-through text-gray-400 text-xs font-normal">{car.price}</span>
                                                                    <span className="text-[#cc0000] font-bold">{car.price_promo}</span>
                                                                </div>
                                                            ) : (
                                                                <span className="text-[#cc0000] font-bold">{car.price}</span>
                                                            )}
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="bg-[#f0f2f5] border-l-[3px] border-[#3b82f6] p-4 text-sm text-gray-600 italic">
                                        Giá trên là giá công bố của Hãng. Để được mua xe <span className="text-[#cc0000] font-medium">Giá tốt nhất + Khuyến Mãi nhiều nhất</span> hãy gọi cho ngay cho Phòng Bán Hàng
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
