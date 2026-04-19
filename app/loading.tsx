export default function Loading() {
    return (
        <main className="flex-1 w-full">
            {/* Hero Skeleton */}
            <section className="relative w-full h-[300px] sm:h-[450px] md:h-[650px] lg:h-[750px] bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse" />

            {/* Model Selector Skeleton */}
            <section className="py-20 md:py-24 bg-white">
                <div className="container mx-auto px-4 max-w-[1400px] flex flex-col items-center">
                    <div className="h-4 w-64 bg-gray-200 rounded animate-pulse mb-8" />
                    <div className="flex flex-wrap justify-center gap-2 mb-10">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <div key={i} className="h-8 w-16 bg-gray-200 rounded-md animate-pulse" />
                        ))}
                    </div>
                    <div className="w-full max-w-4xl h-[250px] md:h-[400px] bg-gray-100 rounded animate-pulse" />
                </div>
            </section>
        </main>
    );
}
