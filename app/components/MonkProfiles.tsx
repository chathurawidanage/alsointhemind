import { Link } from "@heroui/react";
import Image from "next/image";
import monk2 from "../../public/monk2.png";
import venNanavimalaVertical from "../../public/ven_nanavilama_verticle.jpg";
import { leagueSpartan, figTree } from "../fonts";

export const MonkProfiles = () => {
    return (
        <div className="flex flex-col w-full">
            {/* Master Section */}
            <section id="master" className="py-20 bg-white scroll-mt-20 border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-10 md:gap-14 lg:gap-20">
                        {/* Full standing photo: fixed size on mobile, dynamically matches text content height on desktop */}
                        <div className="shrink-0 flex items-center justify-center md:self-stretch">
                            <Image
                                src={venNanavimalaVertical}
                                alt="Venerable Ñāṇavimala Mahāthera - Full Standing Portrait"
                                priority
                                className="h-[360px] sm:h-[420px] md:h-full w-auto max-h-[640px] object-contain select-none pointer-events-none"
                                sizes="(max-width: 768px) 200px, 350px"
                            />
                        </div>

                        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 max-w-xl justify-center">
                            <span className={`text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-book-orange block mb-3 ${leagueSpartan.className}`}>
                                The Master
                            </span>
                            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight ${leagueSpartan.className}`}>
                                Venerable Ñā<span className="diacritic-subdot">n</span>avimala Mahāthera
                            </h2>

                            <div className={`text-gray-600 text-base sm:text-lg space-y-5 leading-relaxed ${figTree.className}`}>
                                <p>
                                    Born Friedrich Möller in Germany, 1911. A job posting to India, then Ceylon, became his chance escape from Nazi conscription—a narrow miss. When World War II began, he was interned as an &ldquo;enemy alien.&rdquo;
                                </p>
                                <p>
                                    In that internment camp, he encountered the Buddha&apos;s original words through Venerable Ñāṇatiloka. The Dhamma turned in his heart—and never stopped.
                                </p>
                                <p>
                                    He ordained in 1955. Trained eleven years at the Island Hermitage. Then walked Sri Lanka for twenty-five years as a wandering monk—living with nothing, teaching rarely, embodying radical simplicity.
                                </p>
                                <p>
                                    Venerable Ñāṇavimala Mahāthera remained almost entirely out of public view. He didn&apos;t build monasteries or seek followers.
                                </p>
                                <p>
                                    He simply walked the Buddha&apos;s path until his body could walk no more.
                                </p>
                                <p className="font-semibold text-book-orange">
                                    This is a record of what he taught, and a disciple&apos;s encounters with him.
                                </p>
                                <div className="pt-2">
                                    <Link
                                        href="/master"
                                        className="text-gray-600 hover:text-book-orange font-medium underline decoration-gray-300 hover:decoration-book-orange underline-offset-4 transition-all text-base inline-flex items-center gap-1"
                                        data-umami-event="view-master"
                                        data-umami-event-location="monk-profiles"
                                    >
                                        Read more about the Master &rarr;
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Disciple Section */}
            <section className="py-20 bg-gray-50/70 text-center border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto flex flex-col items-center">
                        <div className="w-36 h-36 sm:w-44 sm:h-44 relative rounded-full overflow-hidden shadow-lg border-4 border-white mb-6 shrink-0">
                            <Image
                                src={monk2}
                                alt="Venerable Bambalapitiye Gnanaloka Thero"
                                fill
                                className="object-cover object-top"
                                sizes="176px"
                            />
                        </div>

                        <span className={`text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-book-orange block mb-3 ${leagueSpartan.className}`}>
                            The Disciple
                        </span>
                        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight ${leagueSpartan.className}`}>
                            Venerable Bambalapitiye Gnanaloka Thero
                        </h2>

                        <div className={`text-gray-600 text-base sm:text-lg space-y-5 leading-relaxed ${figTree.className}`}>
                            <p>
                                Among those who trained under Venerable Ñāṇavimala was Venerable Gnanaloka, who kept meticulous handwritten notes of what he witnessed—not just dharma talks, but quiet exchanges, daily encounters, the way his teacher walked the path with complete sincerity.
                            </p>
                            <p>
                                These notes, preserved for 25 years, form the heart of this book.
                            </p>
                            <div className="pt-2">
                                <Link
                                    href="https://srisambuddhamission.org/about/"
                                    isExternal
                                    showAnchorIcon
                                    className="text-gray-600 hover:text-book-orange font-medium underline decoration-gray-300 hover:decoration-book-orange underline-offset-4 transition-all text-base inline-flex items-center gap-1"
                                    data-umami-event="external-link"
                                    data-umami-event-target="disciple-srisambuddhamission"
                                >
                                    Read more about the Disciple
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
