"use client";

import { HeroUIProvider, Link } from "@heroui/react";
import { AppNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { WordsFromMasters } from "../components/WordsFromMasters";
import { leagueSpartan, figTree, libreBaskerville } from "../fonts";
import Image from "next/image";
import monk1 from "../../public/monk1.jpg";

export default function MasterPage() {
    return (
        <HeroUIProvider>
            <div className="flex flex-col min-h-screen">
                <AppNavbar />

                <div className="pt-32 pb-16 px-8 max-w-[1280px] mx-auto">
                    {/* Header / Bio Summary slightly repeated or expanded could go here, but focusing on requested content */}
                    <div className="flex flex-col items-center text-center mb-16">
                        <div className="w-48 h-48 md:w-64 md:h-64 relative mb-8 rounded-full overflow-hidden border-4 border-book-orange/20">
                            <Image
                                src={monk1}
                                alt="Venerable Ñāṇavimala Mahāthera"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h1 className={`text-4xl md:text-6xl font-bold text-book-orange mb-6 ${leagueSpartan.className}`}>
                            Venerable Ñāṇavimala Mahāthera
                        </h1>
                        <Link
                            href="https://srisambuddhamission.org/venerable-na%E1%B9%87avimala-mahathera-a-life-of-renunciation-and-wisdom/"
                            isExternal
                            showAnchorIcon
                            className="text-lg text-gray-600 hover:text-book-orange transition-colors"
                        >
                            Read Full Biography
                        </Link>
                    </div>

                    <div className="mb-20">
                        <h2 className={`text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center uppercase tracking-wider ${leagueSpartan.className}`}>
                            What Others Have Written
                        </h2>
                        <div className={`text-lg md:text-xl text-gray-600 leading-relaxed text-center max-w-3xl mx-auto space-y-6 ${libreBaskerville.className}`}>
                            <p>
                                After Venerable Ñāṇavimala's passing, those who knew him gathered their memories in a book called "Pure Inspiration." Their words paint a picture of a man who lived what he taught— with unwavering discipline, and a rigor that demanded nothing less than complete sincerity, with compassion that extended to all beings. Here are some of their reflections:
                            </p>
                        </div>
                    </div>

                    <WordsFromMasters />
                </div>

                <Footer />
            </div>
        </HeroUIProvider>
    );
}
