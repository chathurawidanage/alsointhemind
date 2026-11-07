"use client";

import { Button, Link } from "@heroui/react";
import Image from "next/image";
import { leagueSpartan, libreBaskerville, figTree } from "../fonts";
import book3D from "../../public/book_3d.png";
import { LuDownload } from "react-icons/lu";

export const Hero = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat pt-32 pb-16 md:pt-44 md:pb-28 border-b border-gray-100 overflow-hidden"
            style={{ backgroundImage: "url('/alsointhemind.jpg')" }}
        >
            <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
                <div className="flex flex-col gap-4 max-w-2xl text-center lg:text-left">
                    <span className={`text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-book-orange block ${leagueSpartan.className}`}>
                        Kept Private for 25 Years
                    </span>

                    <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 uppercase tracking-tight leading-none ${leagueSpartan.className}`}>
                        This Is Also <br className="hidden sm:inline" />
                        <span className="text-book-orange">in the Mind</span>
                    </h1>

                    <p className={`text-lg sm:text-xl md:text-2xl font-bold text-title-gray italic leading-snug pt-1 ${libreBaskerville.className}`}>
                        In The Presence of Venerable Ñāṇavimala Mahāthera
                    </p>

                    <p className={`text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl ${figTree.className}`}>
                        The personal encounters and handwritten training notes of a disciple under one of Sri Lanka&apos;s greatest solitary forest masters. Preserved in private for a quarter-century, now offered freely to all seekers.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4 pt-2 w-full sm:w-auto">
                        <Button
                            size="lg"
                            as="a"
                            href="/THIS%20IS%20ALSO%20IN%20THE%20MIND.pdf"
                            download="THIS IS ALSO IN THE MIND.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="bordered"
                            className="border-book-orange text-book-orange font-semibold min-w-[200px] bg-white/90 backdrop-blur-sm hover:bg-orange-50/50 transition-colors"
                            startContent={<LuDownload className="text-xl" />}
                            data-umami-event="download-pdf"
                            data-umami-event-location="hero"
                        >
                            Download Free PDF
                        </Button>

                        <Button
                            size="lg"
                            as={Link}
                            href="/book"
                            variant="solid"
                            className="bg-book-orange text-white font-semibold min-w-[200px] shadow-sm hover:bg-[#e06213] transition-colors"
                            data-umami-event="read-online"
                            data-umami-event-location="hero"
                        >
                            Read Online
                        </Button>
                    </div>
                </div>

                {/* 3D Book Mockup */}
                <div className="w-[65%] sm:w-[45%] lg:w-[420px] max-w-[360px] lg:max-w-none shrink-0 animate-float flex justify-center">
                    <Image
                        src={book3D}
                        alt="This Is Also in the Mind 3D Book Edition"
                        priority
                        className="w-full h-auto object-contain select-none filter drop-shadow-2xl"
                        sizes="(max-width: 1024px) 320px, 420px"
                    />
                </div>
            </div>
        </section>
    );
};
