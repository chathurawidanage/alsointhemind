"use client";

import { HeroUIProvider, Button, Link } from "@heroui/react";
import Image from "next/image";
import { AppNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { leagueSpartan, libreBaskerville, figTree } from "../fonts";
import {
    LuDownload,
    LuBookOpen,
    LuFileText,
    LuLayers,
    LuCheck,
} from "react-icons/lu";

import mainBook3D from "../../public/book_3d_v5.png";
import suttaReadingsCover from "../../public/cover_sutta_readings.png";
import wordOfTheBuddhaCover from "../../public/cover_word_of_the_buddha.png";

export default function DownloadPage() {
    return (
        <HeroUIProvider>
            <div className={`flex flex-col min-h-screen bg-white ${figTree.className}`}>
                <AppNavbar />

                {/* Hero Banner */}
                <header
                    className="relative bg-cover bg-center bg-no-repeat pt-32 pb-16 md:pt-40 md:pb-24 border-b border-gray-100 overflow-hidden"
                    style={{ backgroundImage: "url('/alsointhemind.jpg')" }}
                >
                    <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]"></div>

                    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                        <span
                            className={`text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-book-orange block mb-3 ${leagueSpartan.className}`}
                        >
                            Digital Editions
                        </span>

                        <h1
                            className={`text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 uppercase tracking-tight leading-none mb-4 ${leagueSpartan.className}`}
                        >
                            Books & <span className="text-book-orange">Downloads</span>
                        </h1>

                        <p className={`text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed ${figTree.className}`}>
                            Download the complete edition of <span className="font-semibold text-gray-800">This Is Also in the Mind</span>, alongside companion reference volumes to explore the discourses and teachings in depth.
                        </p>
                    </div>
                </header>

                <main className="py-16 sm:py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
                        {/* 1. Main Book Section */}
                        <section aria-labelledby="main-book-title">
                            <div className="relative bg-gradient-to-br from-orange-50/40 via-white to-gray-50/60 rounded-3xl border border-orange-100/80 shadow-lg shadow-orange-500/5 p-6 sm:p-10 lg:p-12 overflow-hidden">
                                {/* Subtle decorative background circle */}
                                <div className="absolute -top-32 -right-32 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

                                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
                                    {/* 3D Book Presentation */}
                                    <div className="w-[70%] sm:w-[48%] lg:w-[380px] shrink-0 flex flex-col items-center pl-6 sm:pl-8 lg:pl-0">
                                        <div className="relative group">
                                            <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-amber-300 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500" />
                                            <div className="relative transition-transform duration-500 group-hover:-translate-y-1">
                                                <Image
                                                    src={mainBook3D}
                                                    alt="This Is Also in the Mind 3D Book Edition"
                                                    priority
                                                    className="w-full h-auto object-contain select-none filter drop-shadow-2xl"
                                                    sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 380px"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Book Details */}
                                    <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                                        <h2
                                            id="main-book-title"
                                            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 uppercase tracking-tight leading-tight ${leagueSpartan.className}`}
                                        >
                                            This Is Also <span className="text-book-orange">in the Mind</span>
                                        </h2>

                                        <p
                                            className={`text-lg sm:text-xl font-bold text-title-gray italic mt-2 mb-4 ${libreBaskerville.className}`}
                                        >
                                            In The Presence of Venerable Ñāṇavimala Mahāthera
                                        </p>

                                        <p className={`text-base sm:text-lg text-gray-700 leading-relaxed mb-6 max-w-2xl ${figTree.className}`}>
                                            The personal encounters and handwritten training notes of a disciple under one of Sri Lanka&apos;s greatest solitary forest masters. Preserved in private for a quarter-century, these teachings offer uncompromising, practical guidance on mindfulness, sensory restraint, and deep meditation adhering strictly to the Buddha&apos;s original words.
                                        </p>

                                        {/* Specs Grid */}
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-xl mb-8">
                                            <div className="bg-white/90 p-3 rounded-xl border border-gray-200/80 flex flex-col items-center lg:items-start">
                                                <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-500">Language</span>
                                                <span className="text-sm font-bold text-gray-900 flex items-center gap-1 mt-0.5">
                                                    English
                                                </span>
                                            </div>
                                            <div className="bg-white/90 p-3 rounded-xl border border-gray-200/80 flex flex-col items-center lg:items-start">
                                                <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-500">Length</span>
                                                <span className="text-sm font-bold text-gray-900 flex items-center gap-1 mt-0.5">
                                                    <LuBookOpen className="text-book-orange text-xs" /> 353 Pages
                                                </span>
                                            </div>
                                            <div className="bg-white/90 p-3 rounded-xl border border-gray-200/80 flex flex-col items-center lg:items-start">
                                                <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-500">Format</span>
                                                <span className="text-sm font-bold text-gray-900 flex items-center gap-1 mt-0.5">
                                                    <LuFileText className="text-book-orange text-xs" /> PDF
                                                </span>
                                            </div>
                                            <div className="bg-white/90 p-3 rounded-xl border border-gray-200/80 flex flex-col items-center lg:items-start">
                                                <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-500">File Size</span>
                                                <span className="text-sm font-bold text-gray-900 flex items-center gap-1 mt-0.5">
                                                    <LuDownload className="text-book-orange text-xs" /> 13.1 MB
                                                </span>
                                            </div>
                                        </div>

                                        {/* Key Features */}
                                        <ul className="space-y-2 mb-8 text-sm text-gray-600 max-w-xl text-left">
                                            <li className="flex items-start gap-2.5">
                                                <LuCheck className="text-book-orange mt-0.5 shrink-0" />
                                                <span>Contains all 10 chapters, biographical accounts, and historical context</span>
                                            </li>
                                            <li className="flex items-start gap-2.5">
                                                <LuCheck className="text-book-orange mt-0.5 shrink-0" />
                                                <span>Complete facsimile reproductions of Venerable Gnanaloka&apos;s handwritten diary entries</span>
                                            </li>
                                            <li className="flex items-start gap-2.5">
                                                <LuCheck className="text-book-orange mt-0.5 shrink-0" />
                                                <span>High-resolution archival photographs of Venerable Ñāṇavimala Mahāthera</span>
                                            </li>
                                        </ul>

                                        {/* CTAs */}
                                        <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 w-full sm:w-auto">
                                            <Button
                                                size="lg"
                                                as="a"
                                                href="/This_Is_Also_in_the_Mind-alsointhemind.com.pdf"
                                                download="This_Is_Also_in_the_Mind-alsointhemind.com.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                variant="solid"
                                                className="bg-book-orange text-white font-semibold min-w-[220px] shadow-sm hover:bg-[#e06213] transition-all w-full sm:w-auto"
                                                startContent={<LuDownload className="text-xl shrink-0" />}
                                                data-umami-event="download-pdf"
                                                data-umami-event-location="download-page-main"
                                            >
                                                Download PDF (13.1 MB)
                                            </Button>

                                            <Button
                                                size="lg"
                                                as={Link}
                                                href="/read"
                                                variant="bordered"
                                                className="border-book-orange text-book-orange font-semibold min-w-[180px] bg-white hover:bg-orange-50/50 transition-colors w-full sm:w-auto"
                                                startContent={<LuBookOpen className="text-lg shrink-0" />}
                                                data-umami-event="read-online"
                                                data-umami-event-location="download-page-main"
                                            >
                                                Read Online
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 2. Companion Books Section */}
                        <section aria-labelledby="companion-books-heading" className="pt-4">
                            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
                                <span
                                    className={`text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-book-orange block mb-2 ${leagueSpartan.className}`}
                                >
                                    Study Materials & Canonical References
                                </span>
                                <h2
                                    id="companion-books-heading"
                                    className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 uppercase tracking-tight mb-4 ${leagueSpartan.className}`}
                                >
                                    Companion Books
                                </h2>
                                <p className={`text-base sm:text-lg text-gray-600 leading-relaxed ${figTree.className}`}>
                                    Recommended companion literature to read alongside the main book. These works provide direct access to the original suttas referenced by the master and a systematic map of the Buddha&apos;s Dhamma.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                                {/* Companion Book 1: Sutta Readings */}
                                <div className="bg-white rounded-3xl border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between">
                                    <div>
                                        {/* Cover & Title Block */}
                                        <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-6">
                                            {/* Book Cover with realistic spine effect */}
                                            <div className="w-[180px] sm:w-[170px] shrink-0 group">
                                                <div className="relative rounded-lg overflow-hidden shadow-md group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300 border border-gray-200/80 bg-gray-100">
                                                    <Image
                                                        src={suttaReadingsCover}
                                                        alt="This Is Also in the Mind: Recommended Sutta Readings Cover"
                                                        className="w-full h-auto object-cover select-none"
                                                        sizes="180px"
                                                    />
                                                </div>
                                            </div>

                                            {/* Title & Subtitle */}
                                            <div className="flex-1 text-center sm:text-left">
                                                <h3
                                                    className={`text-2xl sm:text-3xl font-bold text-gray-900 uppercase tracking-tight leading-snug mb-2 ${leagueSpartan.className}`}
                                                >
                                                    Recommended Sutta Readings
                                                </h3>
                                                <p
                                                    className={`text-base font-bold text-title-gray italic mb-2 ${libreBaskerville.className}`}
                                                >
                                                    The Suttas in the Order of the Book&apos;s Chapters
                                                </p>
                                                <p className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-3">
                                                    Discourses of the Buddha
                                                </p>
                                                <p className={`text-sm text-gray-600 leading-relaxed ${figTree.className}`}>
                                                    A companion volume gathering, in English translation, the discourses of the Buddha referred to in <span className="italic font-medium">This Is Also in the Mind</span>, so readers can turn directly from Venerable Ñāṇavimala&apos;s instructions to the original suttas he pointed towards.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Specs Grid */}
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 w-full mb-6">
                                            <div className="bg-gray-50/80 p-2.5 sm:p-3 rounded-xl border border-gray-100 flex flex-col items-center sm:items-start">
                                                <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-500">Language</span>
                                                <span className="text-sm font-bold text-gray-900 flex items-center gap-1 mt-0.5">
                                                    English
                                                </span>
                                            </div>
                                            <div className="bg-gray-50/80 p-2.5 sm:p-3 rounded-xl border border-gray-100 flex flex-col items-center sm:items-start">
                                                <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-500">Length</span>
                                                <span className="text-sm font-bold text-gray-900 flex items-center gap-1 mt-0.5">
                                                    <LuBookOpen className="text-book-orange text-xs" /> 1,278 Pages
                                                </span>
                                            </div>
                                            <div className="bg-gray-50/80 p-2.5 sm:p-3 rounded-xl border border-gray-100 flex flex-col items-center sm:items-start">
                                                <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-500">Format</span>
                                                <span className="text-sm font-bold text-gray-900 flex items-center gap-1 mt-0.5">
                                                    <LuFileText className="text-book-orange text-xs" /> PDF
                                                </span>
                                            </div>
                                            <div className="bg-gray-50/80 p-2.5 sm:p-3 rounded-xl border border-gray-100 flex flex-col items-center sm:items-start">
                                                <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-500">File Size</span>
                                                <span className="text-sm font-bold text-gray-900 flex items-center gap-1 mt-0.5">
                                                    <LuDownload className="text-book-orange text-xs" /> 3.1 MB
                                                </span>
                                            </div>
                                        </div>

                                        {/* Feature highlights */}
                                        <div className="bg-gray-50/80 rounded-2xl p-4 mb-6 border border-gray-100 space-y-2 text-xs sm:text-sm text-gray-600">
                                            <div className="flex items-center gap-2 text-gray-800 font-semibold mb-1">
                                                <LuLayers className="text-book-orange" />
                                                <span>Companion Highlights</span>
                                            </div>
                                            <p className="leading-relaxed">
                                                Follows the main text chapter by chapter, section by section. Readers can explore discourses from the <span className="font-medium text-gray-800">Dīgha, Majjhima, Saṁyutta, Aṅguttara</span>, and <span className="font-medium text-gray-800">Khuddaka</span> Nikāyas with a complete Canonical Index.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="pt-4 border-t border-gray-100 flex items-center">
                                        <Button
                                            size="md"
                                            as="a"
                                            href="/This_Is_Also_in_the_Mind_Recommended_Sutta_Readings-alsointhemind.com.pdf"
                                            download="This_Is_Also_in_the_Mind_Recommended_Sutta_Readings-alsointhemind.com.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            variant="solid"
                                            className="bg-book-orange text-white font-semibold w-full shadow-sm hover:bg-[#e06213] transition-colors"
                                            startContent={<LuDownload className="text-lg shrink-0" />}
                                            data-umami-event="download-sutta-companion-pdf"
                                            data-umami-event-location="download-page-companion"
                                        >
                                            Download PDF (3.1 MB)
                                        </Button>
                                    </div>
                                </div>

                                {/* Companion Book 2: The Word of the Buddha */}
                                <div className="bg-white rounded-3xl border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between">
                                    <div>
                                        {/* Cover & Title Block */}
                                        <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-6">
                                            {/* Book Cover with realistic spine effect */}
                                            <div className="w-[180px] sm:w-[170px] shrink-0 group">
                                                <div className="relative rounded-lg overflow-hidden shadow-md group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300 border border-gray-200/80 bg-gray-100">
                                                    <Image
                                                        src={wordOfTheBuddhaCover}
                                                        alt="The Word of the Buddha Cover by Venerable Nyanatiloka Mahāthera"
                                                        className="w-full h-auto object-cover select-none"
                                                        sizes="180px"
                                                    />
                                                </div>
                                            </div>

                                            {/* Title & Subtitle */}
                                            <div className="flex-1 text-center sm:text-left">
                                                <h3
                                                    className={`text-2xl sm:text-3xl font-bold text-gray-900 uppercase tracking-tight leading-snug mb-2 ${leagueSpartan.className}`}
                                                >
                                                    The Word of the Buddha
                                                </h3>
                                                <p
                                                    className={`text-base font-bold text-title-gray italic mb-2 ${libreBaskerville.className}`}
                                                >
                                                    An Outline of the Teachings of the Buddha in the Words of the Pāli Canon
                                                </p>
                                                <p className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-3">
                                                    By Ven. Nyanatiloka Mahāthera
                                                </p>
                                                <p className={`text-sm text-gray-600 leading-relaxed ${figTree.className}`}>
                                                    Compiled and translated by Venerable Nyanatiloka Mahāthera—the venerated teacher and preceptor of Venerable Ñāṇavimala. An authoritative, first-of-its-kind doctrinal manual organizing the core Dhamma strictly through the Four Noble Truths.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Specs Grid */}
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 w-full mb-6">
                                            <div className="bg-gray-50/80 p-2.5 sm:p-3 rounded-xl border border-gray-100 flex flex-col items-center sm:items-start">
                                                <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-500">Language</span>
                                                <span className="text-sm font-bold text-gray-900 flex items-center gap-1 mt-0.5">
                                                    English
                                                </span>
                                            </div>
                                            <div className="bg-gray-50/80 p-2.5 sm:p-3 rounded-xl border border-gray-100 flex flex-col items-center sm:items-start">
                                                <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-500">Length</span>
                                                <span className="text-sm font-bold text-gray-900 flex items-center gap-1 mt-0.5">
                                                    <LuBookOpen className="text-book-orange text-xs" /> 102 Pages
                                                </span>
                                            </div>
                                            <div className="bg-gray-50/80 p-2.5 sm:p-3 rounded-xl border border-gray-100 flex flex-col items-center sm:items-start">
                                                <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-500">Format</span>
                                                <span className="text-sm font-bold text-gray-900 flex items-center gap-1 mt-0.5">
                                                    <LuFileText className="text-book-orange text-xs" /> PDF
                                                </span>
                                            </div>
                                            <div className="bg-gray-50/80 p-2.5 sm:p-3 rounded-xl border border-gray-100 flex flex-col items-center sm:items-start">
                                                <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-500">File Size</span>
                                                <span className="text-sm font-bold text-gray-900 flex items-center gap-1 mt-0.5">
                                                    <LuDownload className="text-book-orange text-xs" /> 483 KB
                                                </span>
                                            </div>
                                        </div>

                                        {/* Feature highlights */}
                                        <div className="bg-gray-50/80 rounded-2xl p-4 mb-6 border border-gray-100 space-y-2 text-xs sm:text-sm text-gray-600">
                                            <div className="flex items-center gap-2 text-gray-800 font-semibold mb-1">
                                                <LuLayers className="text-book-orange" />
                                                <span>Companion Highlights</span>
                                            </div>
                                            <p className="leading-relaxed">
                                                Venerable Ñāṇavimala lived and practiced steeped in this exact scriptural clarity, making it an indispensable companion guide for any sincere student.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="pt-4 border-t border-gray-100 flex items-center">
                                        <Button
                                            size="md"
                                            as="a"
                                            href="/The_Word_of_the_Buddha.pdf"
                                            download="The_Word_of_the_Buddha.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            variant="solid"
                                            className="bg-book-orange text-white font-semibold w-full shadow-sm hover:bg-[#e06213] transition-colors"
                                            startContent={<LuDownload className="text-lg shrink-0" />}
                                            data-umami-event="download-word-of-the-buddha-pdf"
                                            data-umami-event-location="download-page-companion"
                                        >
                                            Download PDF (483 KB)
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>

                <Footer />
            </div>
        </HeroUIProvider>
    );
}
