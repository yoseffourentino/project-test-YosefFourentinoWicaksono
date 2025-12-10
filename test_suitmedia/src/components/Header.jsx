"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";
import useScrollDirection from "@/hooks/useScrollDirection";
import logoSuitmedia from "@/assets/site-logo-nobg.png"

const menu = [
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Ideas", href: "/ideas" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const pathname = usePathname();
    const scrollDir = useScrollDirection();
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        if (scrollDir === "down") setHidden(true);
        else setHidden(false);
    }, [scrollDir]);

    return (
        <header
        className={clsx(
            "fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-[#ff6600]",
            hidden ? "-translate-y-full" : "translate-y-0"
        )}
        >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between py-6 px-6 ">
            {/* Logo */}
            <Link href="/">
                <img src={logoSuitmedia.src} alt=""/>
            </Link>

            {/* Menu */}
            <nav className="flex gap-6">
            {menu.map((item) => (
                <Link
                key={item.name}
                href={item.href}
                className={clsx(
                    "text-md font-medium transition-colors text-white",
                    pathname === item.href
                    ? "border-b-2"
                    : "text-white hover:text-gray-200"
                )}
                >
                {item.name}
                </Link>
            ))}
            </nav>
        </div>
        </header>
    );
}