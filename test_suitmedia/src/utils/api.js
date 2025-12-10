import axios from "axios";

const api = axios.create({
    baseURL: "https://suitmedia-backend.suitdev.com/api",
});

export const fetchIdeas = async ({ page, size, sort }) => {
    try {
        const res = await api.get("/ideas", {
            params: {
                "page[number]": page,
                "page[size]": size,
                "append[]": ["small_image", "medium_image"],
                sort: sort,
            },
        })
        console.log("API RESPONSE:", res.data.data);
        return {
            data: res.data.data,
            meta: res.data.meta,
        };
    } catch (e) {
        console.error("API Error:", e);
        throw e;
    }
};