import { Avatar, Link } from "@heroui/react";
import Image from "next/image";
import monk1 from "../../public/monk1.jpg";
import atmosphericMonk from "../../public/alsointhemind.jpg";
import venNanavimalaVertical from "../../public/ven_nanavilama_verticle.jpg";
import { leagueSpartan, figTree } from "../fonts";

export const MonkProfiles = () => {
    return (
        <div className="flex flex-col w-full">
            {/* Master Section */}
            <div id="master" className="py-20 px-4 bg-white text-center scroll-mt-16">
                <h2 className={`text-3xl md:text-4xl tracking-widest text-book-orange uppercase mb-8 font-bold ${leagueSpartan.className}`}>The Master</h2>
                <div className="max-w-[1024px] mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-12">
                    {/* Mobile: Round Avatar */}
                    <Avatar
                        src={monk1.src}
                        className="w-56 h-56 text-large mb-6 shadow-xl shrink-0 md:hidden"
                        isBordered
                        color="warning"
                    />
                    {/* Desktop: Vertical Image */}
                    <div className="hidden md:block shrink-0 relative w-[300px]">
                        <Image
                            src={venNanavimalaVertical}
                            alt="Venerable Ñāṇavimala Mahāthera"
                            fill
                            className="object-contain object-top rounded-lg"
                            sizes="(max-width: 768px) 100vw, 300px"
                        />
                    </div>
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className={`text-3xl md:text-4xl font-bold mb-6 text-gray-900 ${leagueSpartan.className}`}>Venerable Ñānavimala Mahāthera</h3>

                        <div className={`text-gray-600 text-lg md:text-xl space-y-6 leading-relaxed ${figTree.className}`}>
                            <p>
                                Born Friedrich Möller in Germany, 1911. A job posting to India, then Ceylon, became his chance escape from Nazi conscription—a narrow miss. When World War II began, he was interned as an "enemy alien."
                            </p>
                            <p>
                                In that internment camp, he encountered the Buddha's original words through Venerable Ñāṇatiloka. The Dhamma turned in his heart—and never stopped.
                            </p>
                            <p>
                                He ordained in 1955. Trained eleven years at the Island Hermitage. Then walked Sri Lanka for twenty-five years as a wandering monk—living with nothing, teaching rarely, embodying radical simplicity.
                            </p>
                            <p>
                                Venerable Ñāṇavimala Mahāthera remained almost entirely out of public view. He didn't build monasteries or seek followers.
                            </p>
                            <p>
                                He simply walked the Buddha's path until his body could walk no more.
                            </p>
                            <p className="font-medium text-book-orange">
                                This is a record of what he taught, and a disciple's encounters with him.
                            </p>
                            <Link href="/master" className="text-gray-500 hover:text-book-orange underline decoration-gray-300 underline-offset-4 transition-all text-base block mt-4 w-fit">
                                Read more about the Master
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Disciple Section */}
            <div className="py-16 px-4 bg-gray-50 text-center border-t border-gray-100">
                <h2 className={`text-2xl md:text-3xl tracking-widest text-gray-500 uppercase mb-8 font-bold ${leagueSpartan.className}`}>The Disciple</h2>
                <div className="max-w-[800px] mx-auto flex flex-col items-center">
                    <Avatar
                        src={atmosphericMonk.src}
                        className="w-32 h-32 md:w-40 md:h-40 text-large mb-6 shadow-md grayscale-[20%] object-cover"
                        isBordered
                        color="default"
                    />
                    <h3 className={`text-2xl md:text-3xl font-bold mb-4 text-gray-800 ${leagueSpartan.className}`}>Venerable Bambalapitiye Gnanaloka Thero</h3>

                    <div className={`text-gray-500 text-base md:text-lg max-w-xl space-y-6 leading-relaxed ${figTree.className}`}>
                        <p>
                            Among those who trained under Venerable Ñāṇavimala was Venerable Gnanaloka, who kept meticulous handwritten notes of what he witnessed—not just dharma talks, but quiet exchanges, daily encounters, the way his teacher walked the path with complete sincerity.
                        </p>
                        <p>
                            These notes, preserved for 25 years, form the heart of this book.
                        </p>
                        <Link
                            href="https://srisambuddhamission.org/about/"
                            isExternal
                            showAnchorIcon
                            className="text-gray-500 hover:text-book-orange underline decoration-gray-300 underline-offset-4 transition-all text-base flex items-center gap-2 mt-4 w-fit mx-auto"
                        >
                            Read more about the Disciple
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
