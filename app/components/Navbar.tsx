"use client";

import { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button
} from "@heroui/react";
import Image from "next/image";
import websiteLogo from "../../public/logo.png";
import { leagueSpartan } from "../fonts";

export const AppNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: "Home", href: "/" },
        { label: "The Master", href: "/master" },
        { label: "The Book", href: "/#book-description" },
    ];

    return (
        <Navbar
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className="fixed top-0 inset-x-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100"
            maxWidth="xl"
            isBordered
        >
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link href="/" color="foreground" className="flex items-center gap-3">
                        <div className="relative w-10 h-10 shrink-0">
                            <Image
                                src={websiteLogo}
                                alt="This Is Also in the Mind Logo"
                                fill
                                sizes="40px"
                                className="object-contain"
                            />
                        </div>
                        <span className={`font-bold text-lg sm:text-xl tracking-tight text-gray-900 ${leagueSpartan.className}`}>
                            Also in the Mind
                        </span>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-8" justify="center">
                {navItems.map((item) => (
                    <NavbarItem key={item.href}>
                        <Link
                            color="foreground"
                            href={item.href}
                            className="text-xs uppercase font-bold tracking-[0.15em] text-gray-600 hover:text-book-orange transition-colors"
                            data-umami-event="nav-click"
                            data-umami-event-target={item.label}
                        >
                            {item.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <Button
                        as={Link}
                        color="default"
                        className="bg-book-orange text-white font-semibold text-sm px-5 py-2 shadow-sm hover:bg-[#e06213] transition-colors"
                        href="/book"
                        variant="solid"
                        data-umami-event="read-online"
                        data-umami-event-location="navbar"
                    >
                        Read Online
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu className="bg-white/95 backdrop-blur-md pt-6 gap-4">
                {navItems.map((item) => (
                    <NavbarMenuItem key={item.href}>
                        <Link
                            className="w-full text-base font-semibold text-gray-800 hover:text-book-orange py-2"
                            href={item.href}
                            onPress={() => setIsMenuOpen(false)}
                            data-umami-event="nav-click"
                            data-umami-event-target={item.label}
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
                <NavbarMenuItem className="pt-2">
                    <Button
                        as={Link}
                        href="/book"
                        className="w-full bg-book-orange text-white font-semibold"
                        onPress={() => setIsMenuOpen(false)}
                        data-umami-event="read-online"
                        data-umami-event-location="navbar-mobile"
                    >
                        Read Online
                    </Button>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
};
