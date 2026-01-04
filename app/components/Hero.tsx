import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link } from "@heroui/react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import { figTree, leagueSpartan, libreBaskerville } from "../fonts";
import bookCover from "../../public/book_cover.png";

export const Hero = () => {
    return (
        <div className="relative bg-cover bg-center bg-no-repeat pt-32 pb-16 md:pt-48 md:pb-32" style={{ backgroundImage: "url('/alsointhemind.jpg')" }}>
            <div className="absolute inset-0 bg-white/60"></div>
            <div className="relative z-10 px-6 mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-16 max-w-[1240px]" >
                <div className="flex flex-col gap-4 max-w-[800px] flex-shrink-0">
                    <h1 className={`text-5xl sm:text-7xl md:text-8xl font-bold text-book-orange uppercase text-center lg:text-left ${leagueSpartan.className}`}>This is also</h1>
                    <h2 className={`text-xl sm:text-2xl font-bold text-title-gray text-center lg:text-left ${libreBaskerville.className}`}>In The Presence of Venerable Ñāṇavimala Mahāthera</h2>
                    <h1 className={`text-5xl sm:text-7xl md:text-8xl font-bold text-book-orange uppercase text-center lg:text-left ${leagueSpartan.className}`}>in the mind</h1>
                    <h2 className={`text-xl sm:text-2xl font-bold text-title-gray text-center lg:text-left ${libreBaskerville.className}`}>A Disciple’s Training, Kept Private for 25 Years</h2>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mt-8 lg:mt-10 w-full sm:w-auto">
                        <Dropdown>
                            <DropdownTrigger>
                                <Button
                                    size="lg"
                                    variant="bordered"
                                    className="border-book-orange text-book-orange font-semibold min-w-[200px] bg-white/80 backdrop-blur-sm"
                                    endContent={<MdOutlineKeyboardArrowDown className="text-xl" />}
                                >
                                    Download Free
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions">
                                <DropdownItem key="pdf">PDF</DropdownItem>
                                <DropdownItem key="epub">EPUB</DropdownItem>
                                <DropdownItem key="mobi">MOBI</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Button
                            size="lg"
                            as={Link}
                            href="/book"
                            variant="solid"
                            className="bg-book-orange text-white font-semibold min-w-[200px]"
                        >
                            Read Online
                        </Button>
                    </div>
                </div>
                {/* Book Image */}
                <div className="block w-[70%] lg:w-full max-w-[280px] md:max-w-[400px] lg:max-w-[400px] shrink animate-float lg:mt-0">
                    <Image
                        src={bookCover}
                        alt="Also in the Mind Book Cover"
                        priority
                        className="w-full h-auto rounded-xl shadow-2xl border-4 border-white/20"
                    />
                </div>
            </div>
        </div >
    );
};
