import { Avatar, Link } from "@heroui/react";
import Image from "next/image";
import monk1 from "../../public/monk1.jpg";
import monk2 from "../../public/monk2.png";
import { leagueSpartan } from "../fonts";

export const MonkProfiles = () => {
    return (
        <div className="flex flex-col w-full">
            {/* Master Section */}
            <div id="master" className="py-20 px-4 bg-white text-center">
                <h2 className={`text-2xl tracking-widest text-book-orange uppercase mb-8 font-bold ${leagueSpartan.className}`}>The Master</h2>
                <div className="max-w-[800px] mx-auto flex flex-col items-center">
                    <Avatar
                        src={monk1.src}
                        className="w-56 h-56 md:w-72 md:h-72 text-large mb-10 shadow-xl"
                        isBordered
                        color="warning"
                    />
                    <h3 className={`text-4xl md:text-5xl font-bold mb-8 text-gray-900 ${leagueSpartan.className}`}>Venerable Ñāṇavimala Mahāthera</h3>

                    <div className="text-gray-600 text-lg md:text-xl max-w-2xl space-y-6 leading-relaxed">
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
                        <Link href="/master" className="text-gray-500 hover:text-book-orange underline decoration-gray-300 underline-offset-4 transition-all text-base block mt-4 w-fit mx-auto">
                            Read more about the Master
                        </Link>
                    </div>
                </div>
            </div>

            {/* Disciple Section */}
            <div className="py-16 px-4 bg-gray-50 text-center border-t border-gray-100">
                <h2 className={`text-xl tracking-widest text-gray-500 uppercase mb-8 font-bold ${leagueSpartan.className}`}>The Disciple</h2>
                <div className="max-w-[800px] mx-auto flex flex-col items-center">
                    <Avatar
                        src={monk2.src}
                        className="w-32 h-32 md:w-40 md:h-40 text-large mb-6 shadow-md grayscale-[20%]"
                        isBordered
                        color="default"
                    />
                    <h3 className={`text-2xl md:text-3xl font-bold mb-4 text-gray-800 ${leagueSpartan.className}`}>Venerable Bambalapitiye Gnanaloka Thero</h3>

                    <div className="text-gray-500 text-base md:text-lg max-w-xl space-y-6 leading-relaxed">
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
