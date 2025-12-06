import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import Image from "next/image";


export const AppNavbar = () => {
    return (
        <Navbar className="fixed w-full mx-auto" isBordered>
            <NavbarBrand>
                <div className="h-[50px] w-[50px] bg-gray-200 rounded-lg mr-2 flex items-center justify-center text-xs text-gray-400">Logo</div>
                <p className="font-bold text-inherit hidden sm:block">Also in the Mind</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Join Community
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link href="#" color="foreground">
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link href="#" color="foreground">
                        Download
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
