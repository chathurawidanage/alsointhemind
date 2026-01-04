import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import Image from "next/image";


export const AppNavbar = () => {
    return (
        <Navbar className="fixed w-full mx-auto" isBordered>
            <NavbarBrand>
                <Link href="/" color="foreground" className="flex items-center">
                    <div className="h-[50px] w-[50px] bg-gray-200 rounded-lg mr-2 flex items-center justify-center text-xs text-gray-400">Logo</div>
                    <p className="font-bold text-inherit hidden sm:block">Also in the Mind</p>
                </Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/" className="uppercase font-bold text-sm tracking-wide">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/master" color="foreground" className="uppercase font-bold text-sm tracking-wide">
                        The Master
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/#book-description" color="foreground" className="uppercase font-bold text-sm tracking-wide">
                        The Book
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color="default" className="bg-book-orange text-white" href="/book" variant="solid">
                        Read Online
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};
