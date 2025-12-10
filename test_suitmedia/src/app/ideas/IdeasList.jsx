"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { fetchIdeas } from "../../utils/api";
import IdeasControls from "./IdeasControls";
import IdeasCard from "./IdeasCard";

export default function IdeasList() {
    const params = useSearchParams();
    const router = useRouter();
    const scrollPosRef = useRef(0);
    const page = Number(params.get("page")) || 1;
    const size = Number(params.get("size")) || 10;
    const sort = params.get("sort") || "-published_at";

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function load() {
            setLoading(true);
            const result = await fetchIdeas({ page, size, sort });
            setData(result);
            setLoading(false);
        }
        load();
    }, [page, size, sort]);

    const updateURL = (changes) => {
        scrollPosRef.current = window.scrollY;
        
        const query = new URLSearchParams(params.toString());
        Object.entries(changes).forEach(([key, val]) => {
            query.set(key, String(val));
        });
        router.push(`?${query.toString()}`);
    };

    useEffect(() => {
        if (!loading && data) {
            if (scrollPosRef.current > 0) {
                window.scrollTo(0, scrollPosRef.current);
                scrollPosRef.current = 0;
            }
        }
    }, [data, loading]);

    const totalPages =
        data?.meta?.pages ??
        data?.meta?.pagination?.pages ??
        data?.meta?.total_pages ??
        (data?.meta?.total ? Math.ceil(data.meta.total / size) : undefined) ??
        1;

    const totalItems = data?.meta?.total ?? 0;
    const startItem = (page - 1) * size + 1;
    const endItem = Math.min(page * size, totalItems);

    return (
        <div className="max-w-[1400px] flex flex-col mx-auto mt-15 mb-10 px-15"> 
            <div className="flex justify-between items-center">
                <div className="text-[16px] text-gray-600">
                    Showing {startItem} - {endItem} of {totalItems} items
                </div>
                <IdeasControls
                    sort={sort}
                    size={size}
                    onSort={(v) => updateURL({ sort: v, page: 1 })}
                    onSize={(v) => updateURL({ size: v, page: 1 })}
                />
            </div>

            {loading && <p>Loading...</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {data?.data?.map((item) => (
                    <IdeasCard key={item.id} item={item} />
                ))}
            </div>

            <div className="flex justify-center items-center gap-4 mt-8">
                <button
                    className="px-4 py-2 border rounded disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                    disabled={page <= 1}
                    onClick={() => updateURL({ page: 1 })}
                >
                    First
                </button>

                <button
                    className="px-4 py-2 border rounded disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                    disabled={page <= 1}
                    onClick={() => updateURL({ page: page - 1 })}
                >
                    Prev
                </button>

                <span>Page {page} / {totalPages}</span>

                <button
                    className="px-4 py-2 border rounded disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                    disabled={page >= totalPages}
                    onClick={() => updateURL({ page: page + 1 })}
                >
                    Next
                </button>

                <button
                    className="px-4 py-2 border rounded disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                    disabled={page >= totalPages}
                    onClick={() => updateURL({ page: totalPages })}
                >
                    Last
                </button>
            </div>
        </div>
    );
}