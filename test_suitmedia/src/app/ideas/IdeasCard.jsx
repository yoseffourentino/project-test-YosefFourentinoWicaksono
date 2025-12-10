import Image from "next/image";

export default function IdeasCard({ item }) {
    return (
        <div className=" rounded-md overflow-hidden bg-white shadow-xl">
            <div className="relative w-full aspect-4/3">
                <Image
                    src={item.small_image?.[0]?.url || ''}
                    alt={item.title}
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            <div className="p-4">
                <p className="text-sm text-gray-500 mt-2">
                    {new Date(item.published_at).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    })}
                </p>
                <h3 className="text-[18px] font-semibold line-clamp-3 h-20">
                    {item.title}
                </h3>
            </div>
        </div>
    );
}