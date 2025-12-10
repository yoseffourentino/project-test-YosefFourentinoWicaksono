"use client";

import { useEffect, useState } from "react";

export default function useScrollDirection() {
    const [scrollDir, setScrollDir] = useState("up");

    useEffect(() => {
        let lastY = window.pageYOffset;

        function handleScroll() {
        const currentY = window.pageYOffset;

        if (Math.abs(currentY - lastY) < 5) return;

        if (currentY > lastY) {
            setScrollDir("down");
        } else {
            setScrollDir("up");
        }

        lastY = currentY;
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return scrollDir;
}