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
                    Download the complete book as a free PDF or read it online. Discover the path to true freedom as walked by a modern sage.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
                    <Button
                        size="lg"
                        as="a"
                        href="/THIS%20IS%20ALSO%20IN%20THE%20MIND.pdf"
                        download="THIS IS ALSO IN THE MIND.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="bordered"
                        className="border-book-orange text-book-orange font-semibold min-w-[200px] hover:bg-orange-50/50 transition-colors"
                        startContent={<LuDownload className="text-xl" />}
                        data-umami-event="download-pdf"
                        data-umami-event-location="cta-section"
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
                        data-umami-event-location="cta-section"
                    >
                        Read Online
                    </Button>
                </div>
            </div>
        </section>
    );
};
