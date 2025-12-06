import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link } from "@heroui/react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { figTree, leagueSpartan, libreBaskerville } from "../fonts";

export const Hero = () => {
    return (
        <div className="relative bg-cover bg-center bg-no-repeat pt-32 pb-16 md:pt-48 md:pb-32" style={{ backgroundImage: "url('/alsointhemind.jpg')" }}>
            <div className="absolute inset-0 bg-white/60"></div>
            <div className="relative z-10 px-6 mx-auto flex flex-col gap-4 max-w-[1024px]" >
                <h1 className={`text-5xl sm:text-7xl md:text-8xl font-bold text-book-orange uppercase text-center ${leagueSpartan.className}`}>This is also</h1>
                <h2 className={`text-l sm:text-2xl font-bold text-title-gray text-center ${libreBaskerville.className}`}>In The Presence of Venerable Ñāṇavimala Mahāthera</h2>
                <h1 className={`text-5xl sm:text-7xl md:text-8xl font-bold text-book-orange uppercase text-center ${leagueSpartan.className}`}>in the mind</h1>
                <h2 className={`text-l sm:text-2xl font-bold text-title-gray text-center ${libreBaskerville.className}`}>A Disciple’s Account, Kept Private for 25 Years</h2>
                <h2 className={`text-title-gray font-bold text-l sm:text-2xl text-center mt-8 md:mt-16 ${figTree.className}`}>Available Now!</h2>
                <div className="flex flex-row gap-8 justify-center mt-8 md:mt-16">
                    <Dropdown>
                        <DropdownTrigger>
                            <Button size="lg" variant="solid" color="warning" endContent={<MdOutlineKeyboardArrowDown />}>Download</Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                            <DropdownItem key="pdf">PDF</DropdownItem>
                            <DropdownItem key="epub">EPUB</DropdownItem>
                            <DropdownItem key="mobi">MOBI</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Button size="lg" as={Link} href="/book" variant="solid" className="bg-book-orange text-white">
                        Read Online
                    </Button>
                </div>
            </div>
        </div >
    );
};
