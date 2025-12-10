"use client";

export default function IdeasControls({ sort, size, onSort, onSize }) {
    return (
        <div className="flex gap-4 mb-6 items-center">
            <p>Show per page:</p> 
            <select
                className="border p-2 rounded"
                value={size}
                onChange={(e) => onSize(Number(e.target.value))}
            >
                {[10, 20, 50].map((n) => (
                    <option key={n} value={n}>{n} / page</option>
                ))}
            </select>
            <p>Sort by:</p>
            <select
                className="border p-2 rounded"
                value={sort}
                onChange={(e) => onSort(e.target.value)}
            >
                <option value="-published_at">Newest</option>
                <option value="published_at">Oldest</option>
            </select>

        </div>
    );
}
