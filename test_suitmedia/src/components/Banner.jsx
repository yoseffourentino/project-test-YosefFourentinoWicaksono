"use client";
import { useEffect, useState } from "react";

export default function Banner({ imageUrl, title, subtitle }) {
    const [offset, setOffset] = useState(0);

    // Parallax Effect
    useEffect(() => {
        const handleScroll = () => {
        setOffset(window.scrollY * 0.4); // Semakin besar, semakin kuat parallax
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative w-full h-[650px] overflow-hidden">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                backgroundImage: `url(${imageUrl})`,
                transform: `translateY(${offset}px)` // parallax
                }}
            />

            {/* Overlay Gelap */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
                <h1 className="text-4xl font-bold mb-2">{title}</h1>
                <p className="text-lg">{subtitle}</p>
            </div>

            {/* Slanted Bottom */}
            <div className="absolute bottom-0 left-0 w-full h-[150px] bg-white"
                style={{
                    clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0% 100%)"
                }}
            ></div>

        </div>
    );
}