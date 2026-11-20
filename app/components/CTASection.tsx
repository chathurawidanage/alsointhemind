"use client";

import { Button, Link } from "@heroui/react";
import { leagueSpartan, figTree } from "../fonts";
import { LuDownload } from "react-icons/lu";

export const CTASection = () => {
    return (
        <section className="bg-white py-20 sm:py-24 text-center border-b border-gray-100">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col items-center">
                <span className={`text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-book-orange block mb-3 ${leagueSpartan.className}`}>
                    Begin Reading
                </span>
                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight ${leagueSpartan.className}`}>
                    Start Your Journey
                </h2>
                <p className={`text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mb-8 ${figTree.className}`}>
                    Explore the complete book online or download the full edition alongside companion reference texts for offline study.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
                    <Button
                        size="lg"
                        as={Link}
                        href="/read"
                        variant="solid"
                        className="bg-book-orange text-white font-semibold min-w-[200px] shadow-sm hover:bg-[#e06213] transition-colors"
                        data-umami-event="read-online"
                        data-umami-event-location="cta-section"
                    >
                        Read Online
                    </Button>

                    <Button
                        size="lg"
                        as={Link}
                        href="/download"
                        variant="bordered"
                        className="border-book-orange text-book-orange font-semibold min-w-[200px] hover:bg-orange-50/50 transition-colors"
                        startContent={<LuDownload className="text-xl" />}
                        data-umami-event="go-to-download"
                        data-umami-event-location="cta-section"
                    >
                        Downloads
                    </Button>
                </div>
            </div>
        </section>
    );
};
