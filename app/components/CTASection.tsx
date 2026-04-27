import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link } from "@heroui/react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { leagueSpartan, libreBaskerville } from "../fonts";

export const CTASection = () => {
    return (
        <div className="bg-white py-24 px-8 text-center border-t border-gray-100">
            <div className="max-w-[800px] mx-auto flex flex-col items-center gap-8">
                <h2 className={`text-3xl md:text-5xl font-bold text-gray-900 ${leagueSpartan.className}`}>
                    Start Your Journey
                </h2>
                <p className={`text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed ${libreBaskerville.className}`}>
                    Download the book for free or read it online. Discover the path to true freedom as walked by a modern sage.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center mt-4 w-full sm:w-auto">
                    <Dropdown>
                        <DropdownTrigger>
                            <Button
                                size="lg"
                                variant="bordered"
                                className="border-book-orange text-book-orange font-semibold min-w-[200px]"
                                endContent={<MdOutlineKeyboardArrowDown className="text-xl" />}
                            >
                                Download Free
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Download Formats">
                            <DropdownItem key="pdf">PDF Version</DropdownItem>
                            <DropdownItem key="epub">EPUB Version</DropdownItem>
                            <DropdownItem key="mobi">MOBI Version</DropdownItem>
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
        </div>
    );
};
