"use client";

import { HeroUIProvider, Button, Link } from "@heroui/react";
import Image, { type StaticImageData } from "next/image";
import { AppNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { leagueSpartan, libreBaskerville, figTree } from "../fonts";
import {
    LuDownload,
    LuBookOpen,
    LuLayers,
    LuCheck,
    LuExternalLink,
} from "react-icons/lu";

import mainBook3D from "../../public/book_3d_v5.png";
import suttaReadingsCover from "../../public/cover_sutta_readings.png";
import wordOfTheBuddhaCover from "../../public/cover_word_of_the_buddha.png";
import practiceOfLovingKindnessCover from "../../public/cover_practice_of_loving_kindness.jpg";
import mirrorOfTheDhammaCover from "../../public/cover_mirror_of_the_dhamma.jpg";
import pureInspirationCover from "../../public/cover_pure_inspiration.png";
import lifeOfNyanatilokaCover from "../../public/cover_life_of_nyanatiloka.png";

interface ExternalBookItem {
    title: string;
    subtitle?: string;
    author?: string;
    description: string;
    cover: StaticImageData;
    coverAlt: string;
    badge: string;
    formatLabel: string;
    formatMeta: string;
    formatHint: string;
    actionLabel: string;
    href: string;
    umamiEvent: string;
    umamiLocation: string;
}

const RECOMMENDED_COMPANION_BOOKS: ExternalBookItem[] = [
    {
        title: "The Practice of Loving-Kindness (Mettā)",
        author: "By Ven. Ñāṇamoli Thera",
        description:
            "Recommended by Venerable Ñāṇavimala. A classic treatise and anthology on cultivating loving-kindness (mettā) drawn from the Pāli Canon and commentaries.",
        cover: practiceOfLovingKindnessCover,
        coverAlt: "The Practice of Loving-Kindness (Mettā) by Ven. Ñāṇamoli Thera cover",
        badge: "PDF",
        formatLabel: "PDF Edition",
        formatMeta: "External",
        formatHint: "Hosted at noblepath.info",
        actionLabel: "Open PDF",
        href: "https://noblepath.info/PDFs/practice_of_loving_kindness.pdf",
        umamiEvent: "external-practice-of-loving-kindness-pdf",
        umamiLocation: "download-page-companion",
    },
    {
        title: "The Mirror of the Dhamma",
        subtitle: "A Manual of Buddhist Chanting and Devotional Texts",
        author: "By Ven. Nārada & Bhikkhu Kassapa",
        description:
            "Recommended by Venerable Ñāṇavimala. A traditional handbook of Pāli devotional chants, reflections, and protective suttas with English translations.",
        cover: mirrorOfTheDhammaCover,
        coverAlt: "The Mirror of the Dhamma by Ven. Nārada and Bhikkhu Kassapa cover",
        badge: "PDF",
        formatLabel: "PDF Edition",
        formatMeta: "External",
        formatHint: "Hosted at buddhistuniversity.net",
        actionLabel: "Open PDF",
        href: "https://smallpdfs.buddhistuniversity.net/narada-kassapa_1963_mirror-of-the-dhamma.pdf",
        umamiEvent: "external-mirror-of-the-dhamma-pdf",
        umamiLocation: "download-page-companion",
    },
];

const BIOGRAPHICAL_READING_BOOKS: ExternalBookItem[] = [
    {
        title: "Pure Inspiration",
        subtitle:
            "Venerable Ñāṇavimala Mahāthera — Recollections of His Life, Practice and Teachings",
        description:
            "A collection of recollections and reflections on the life, austere forest practice, and Dhamma teachings of Venerable Ñāṇavimala Mahāthera.",
        cover: pureInspirationCover,
        coverAlt: "Pure Inspiration: Venerable Ñāṇavimala Mahāthera cover",
        badge: "PDF",
        formatLabel: "PDF Edition",
        formatMeta: "External",
        formatHint: "Hosted at buddhasasana.net",
        actionLabel: "Open PDF",
        href: "https://ven-nyanavimala.buddhasasana.net/texts/pure-inspiration.pdf",
        umamiEvent: "external-pure-inspiration-pdf",
        umamiLocation: "download-page-biographical",
    },
    {
        title: "The Life of Nyanatiloka Thera",
        subtitle: "The Biography of a Western Buddhist Pioneer",
        author: "By Bhikkhu Ñāṇatusita & Hellmuth Hecker",
        description:
            "The biography of Venerable Nyanatiloka Mahāthera—Venerable Ñāṇavimala's teacher and preceptor—tracing his pioneering life in Sri Lanka.",
        cover: lifeOfNyanatilokaCover,
        coverAlt: "The Life of Nyanatiloka Thera by Bhikkhu Ñāṇatusita and Hellmuth Hecker cover",
        badge: "WEB",
        formatLabel: "Internet Archive",
        formatMeta: "External",
        formatHint: "Read online at archive.org",
        actionLabel: "Read Online",
        href: "https://archive.org/details/bub_gb_LLkyNT5md7cC/page/n130/mode/1up?utm",
        umamiEvent: "external-life-of-nyanatiloka",
        umamiLocation: "download-page-biographical",
    },
];

function ExternalBookCard({ book }: { book: ExternalBookItem }) {
    return (
        <div className="bg-white rounded-3xl border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-6">
                <div className="w-[180px] sm:w-[170px] shrink-0 group">
                    <div className="relative rounded-lg overflow-hidden shadow-md group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300 border border-gray-200/80 bg-gray-100">
                        <Image
                            src={book.cover}
                            alt={book.coverAlt}
                            className="w-full h-auto object-cover select-none"
                            sizes="180px"
                        />
                    </div>
                </div>

                <div className="flex-1 text-center sm:text-left">
                    <h3
                        className={`text-2xl sm:text-3xl font-bold text-gray-900 uppercase tracking-tight leading-snug mb-2 ${leagueSpartan.className}`}
                    >
                        {book.title}
                    </h3>
                    {book.subtitle && (
                        <p
                            className={`text-base font-bold text-title-gray italic mb-2 ${libreBaskerville.className}`}
                        >
                            {book.subtitle}
                        </p>
                    )}
                    {book.author && (
                        <p className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-3">
                            {book.author}
                        </p>
                    )}
                    <p className={`text-sm text-gray-600 leading-relaxed ${figTree.className}`}>
                        {book.description}
                    </p>
                </div>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-xl bg-gray-50/90 border border-gray-100 hover:border-orange-200 transition-colors">
                    <div className="flex items-start sm:items-center gap-2.5">
                        <span className="w-9 h-9 rounded-lg bg-orange-100/70 text-book-orange font-bold text-xs flex items-center justify-center shrink-0">
                            {book.badge}
                        </span>
                        <div className="text-left">
                            <div className="flex items-center gap-1.5">
                                <span className="text-xs font-bold text-gray-900">{book.formatLabel}</span>
                                <span className="text-[10px] font-semibold text-gray-500 bg-gray-200/60 px-1.5 py-0.2 rounded">
                                    {book.formatMeta}
                                </span>
                            </div>
                            <span className="text-[11px] text-gray-500">{book.formatHint}</span>
                        </div>
                    </div>
                    <Button
                        size="sm"
                        as="a"
                        href={book.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="solid"
                        className="bg-book-orange text-white font-semibold text-xs px-3.5 h-8 shrink-0 shadow-sm hover:bg-[#e06213] transition-colors w-full sm:w-auto"
                        startContent={<LuExternalLink className="text-sm shrink-0" />}
                        data-umami-event={book.umamiEvent}
                        data-umami-event-location={book.umamiLocation}
                    >
                        {book.actionLabel}
                    </Button>
                </div>
            </div>
        </div>
    );
}

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
                                        <div className="grid grid-cols-3 gap-2.5 sm:gap-3 w-full max-w-xl mb-8">
                                            <div className="bg-white/90 p-2.5 sm:p-3 rounded-xl border border-gray-200/80 flex flex-col items-center lg:items-start text-center lg:text-left">
                                                <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-500">Language</span>
                                                <span className="text-xs sm:text-sm font-bold text-gray-900 mt-0.5">
                                                    English
                                                </span>
                                            </div>
                                            <div className="bg-white/90 p-2.5 sm:p-3 rounded-xl border border-gray-200/80 flex flex-col items-center lg:items-start text-center lg:text-left">
                                                <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-500">Length</span>
                                                <span className="text-xs sm:text-sm font-bold text-gray-900 mt-0.5">
                                                    353 Pages
                                                </span>
                                            </div>
                                            <div className="bg-white/90 p-2.5 sm:p-3 rounded-xl border border-gray-200/80 flex flex-col items-center lg:items-start text-center lg:text-left">
                                                <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-500">Contents</span>
                                                <span className="text-xs sm:text-sm font-bold text-gray-900 mt-0.5">
                                                    10 Chapters
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

                                        {/* Available Formats & Actions */}
                                        <div className="w-full max-w-xl space-y-3">
                                            <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1 text-center lg:text-left">
                                                Available Formats & Reading Options
                                            </div>

                                            {/* PDF Option */}
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/95 border border-gray-200/90 shadow-sm hover:border-orange-200 hover:shadow-md transition-all">
                                                <div className="flex items-start sm:items-center gap-3.5">
                                                    <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 text-book-orange font-bold text-xs uppercase tracking-wider shadow-inner">
                                                        PDF
                                                    </div>
                                                    <div className="text-left">
                                                        <div className="flex items-center gap-2">
                                                            <span className="font-bold text-gray-900 text-sm sm:text-base">PDF Edition</span>
                                                            <span className="text-xs text-gray-300 font-medium">•</span>
                                                            <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">13.1 MB</span>
                                                        </div>
                                                        <p className="text-xs text-gray-500 mt-0.5">
                                                            For printing, tablets, and desktop reading
                                                        </p>
                                                    </div>
                                                </div>
                                                <Button
                                                    size="sm"
                                                    as="a"
                                                    href="/This_Is_Also_in_the_Mind-alsointhemind.com.pdf"
                                                    download="This_Is_Also_in_the_Mind-alsointhemind.com.pdf"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    variant="solid"
                                                    className="bg-book-orange text-white font-semibold text-xs sm:text-sm px-4 py-2 shrink-0 shadow-sm hover:bg-[#e06213] transition-all w-full sm:w-auto"
                                                    startContent={<LuDownload className="text-base shrink-0" />}
                                                    data-umami-event="download-pdf"
                                                    data-umami-event-location="download-page-main"
                                                >
                                                    Download
                                                </Button>
                                            </div>

                                            {/* EPUB Option */}
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/95 border border-gray-200/90 shadow-sm hover:border-orange-200 hover:shadow-md transition-all">
                                                <div className="flex items-start sm:items-center gap-3.5">
                                                    <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 text-book-orange font-bold text-xs uppercase tracking-wider shadow-inner">
                                                        EPUB
                                                    </div>
                                                    <div className="text-left">
                                                        <div className="flex items-center gap-2">
                                                            <span className="font-bold text-gray-900 text-sm sm:text-base">EPUB Edition</span>
                                                            <span className="text-xs text-gray-300 font-medium">•</span>
                                                            <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">7.0 MB</span>
                                                        </div>
                                                        <p className="text-xs text-gray-500 mt-0.5">
                                                            For e-readers, Kindle, and mobile reading
                                                        </p>
                                                    </div>
                                                </div>
                                                <Button
                                                    size="sm"
                                                    as="a"
                                                    href="/This_Is_Also_in_the_Mind-alsointhemind.com.epub"
                                                    download="This_Is_Also_in_the_Mind-alsointhemind.com.epub"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    variant="solid"
                                                    className="bg-book-orange text-white font-semibold text-xs sm:text-sm px-4 py-2 shrink-0 shadow-sm hover:bg-[#e06213] transition-all w-full sm:w-auto"
                                                    startContent={<LuDownload className="text-base shrink-0" />}
                                                    data-umami-event="download-epub"
                                                    data-umami-event-location="download-page-main"
                                                >
                                                    Download
                                                </Button>
                                            </div>

                                            {/* Read Online Option */}
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/95 border border-gray-200/90 shadow-sm hover:border-orange-200 hover:shadow-md transition-all">
                                                <div className="flex items-start sm:items-center gap-3.5">
                                                    <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 text-book-orange font-bold text-xs uppercase tracking-wider shadow-inner">
                                                        WEB
                                                    </div>
                                                    <div className="text-left">
                                                        <div className="flex items-center gap-2">
                                                            <span className="font-bold text-gray-900 text-sm sm:text-base">Read Online</span>
                                                            <span className="text-xs text-gray-300 font-medium">•</span>
                                                            <span className="text-xs font-semibold text-book-orange bg-orange-50 border border-orange-100 px-2 py-0.5 rounded-full">Browser</span>
                                                        </div>
                                                        <p className="text-xs text-gray-500 mt-0.5">
                                                            Read in your browser with search and font controls
                                                        </p>
                                                    </div>
                                                </div>
                                                <Button
                                                    size="sm"
                                                    as={Link}
                                                    href="/read"
                                                    variant="solid"
                                                    className="bg-book-orange text-white font-semibold text-xs sm:text-sm px-4 py-2 shrink-0 shadow-sm hover:bg-[#e06213] transition-all w-full sm:w-auto"
                                                    startContent={<LuBookOpen className="text-base shrink-0" />}
                                                    data-umami-event="read-online"
                                                    data-umami-event-location="download-page-main"
                                                >
                                                    Read Online
                                                </Button>
                                            </div>
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
                                        <div className="grid grid-cols-3 gap-2.5 sm:gap-3 w-full mb-6">
                                            <div className="bg-gray-50/80 p-2.5 sm:p-3 rounded-xl border border-gray-100 flex flex-col items-center sm:items-start text-center sm:text-left">
                                                <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-500">Language</span>
                                                <span className="text-xs sm:text-sm font-bold text-gray-900 mt-0.5">
                                                    English
                                                </span>
                                            </div>
                                            <div className="bg-gray-50/80 p-2.5 sm:p-3 rounded-xl border border-gray-100 flex flex-col items-center sm:items-start text-center sm:text-left">
                                                <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-500">Length</span>
                                                <span className="text-xs sm:text-sm font-bold text-gray-900 mt-0.5">
                                                    1,278 Pages
                                                </span>
                                            </div>
                                            <div className="bg-gray-50/80 p-2.5 sm:p-3 rounded-xl border border-gray-100 flex flex-col items-center sm:items-start text-center sm:text-left">
                                                <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-500">Scope</span>
                                                <span className="text-xs sm:text-sm font-bold text-gray-900 mt-0.5">
                                                    5 Nikāyas
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

                                    {/* Action Buttons / Download Tiles */}
                                    <div className="space-y-2.5 pt-4 border-t border-gray-100">
                                        {/* PDF Option */}
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-xl bg-gray-50/90 border border-gray-100 hover:border-orange-200 transition-colors">
                                            <div className="flex items-start sm:items-center gap-2.5">
                                                <span className="w-9 h-9 rounded-lg bg-orange-100/70 text-book-orange font-bold text-xs flex items-center justify-center shrink-0">
                                                    PDF
                                                </span>
                                                <div className="text-left">
                                                    <div className="flex items-center gap-1.5">
                                                        <span className="text-xs font-bold text-gray-900">PDF Edition</span>
                                                        <span className="text-[10px] font-semibold text-gray-500 bg-gray-200/60 px-1.5 py-0.2 rounded">3.1 MB</span>
                                                    </div>
                                                    <span className="text-[11px] text-gray-500">For printing, tablets, and desktop reading</span>
                                                </div>
                                            </div>
                                            <Button
                                                size="sm"
                                                as="a"
                                                href="/This_Is_Also_in_the_Mind_Recommended_Sutta_Readings-alsointhemind.com.pdf"
                                                download="This_Is_Also_in_the_Mind_Recommended_Sutta_Readings-alsointhemind.com.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                variant="solid"
                                                className="bg-book-orange text-white font-semibold text-xs px-3.5 h-8 shrink-0 shadow-sm hover:bg-[#e06213] transition-colors w-full sm:w-auto"
                                                startContent={<LuDownload className="text-sm shrink-0" />}
                                                data-umami-event="download-sutta-companion-pdf"
                                                data-umami-event-location="download-page-companion"
                                            >
                                                Download
                                            </Button>
                                        </div>

                                        {/* EPUB Option */}
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-xl bg-gray-50/90 border border-gray-100 hover:border-orange-200 transition-colors">
                                            <div className="flex items-start sm:items-center gap-2.5">
                                                <span className="w-9 h-9 rounded-lg bg-orange-100/70 text-book-orange font-bold text-xs flex items-center justify-center shrink-0">
                                                    EPUB
                                                </span>
                                                <div className="text-left">
                                                    <div className="flex items-center gap-1.5">
                                                        <span className="text-xs font-bold text-gray-900">EPUB Edition</span>
                                                        <span className="text-[10px] font-semibold text-gray-500 bg-gray-200/60 px-1.5 py-0.2 rounded">1.7 MB</span>
                                                    </div>
                                                    <span className="text-[11px] text-gray-500">For e-readers, Kindle, and mobile reading</span>
                                                </div>
                                            </div>
                                            <Button
                                                size="sm"
                                                as="a"
                                                href="/This_Is_Also_in_the_Mind_Recommended_Sutta_Readings-alsointhemind.com.epub"
                                                download="This_Is_Also_in_the_Mind_Recommended_Sutta_Readings-alsointhemind.com.epub"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                variant="solid"
                                                className="bg-book-orange text-white font-semibold text-xs px-3.5 h-8 shrink-0 shadow-sm hover:bg-[#e06213] transition-colors w-full sm:w-auto"
                                                startContent={<LuDownload className="text-sm shrink-0" />}
                                                data-umami-event="download-sutta-companion-epub"
                                                data-umami-event-location="download-page-companion"
                                            >
                                                Download
                                            </Button>
                                        </div>
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
                                        <div className="grid grid-cols-3 gap-2.5 sm:gap-3 w-full mb-6">
                                            <div className="bg-gray-50/80 p-2.5 sm:p-3 rounded-xl border border-gray-100 flex flex-col items-center sm:items-start text-center sm:text-left">
                                                <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-500">Language</span>
                                                <span className="text-xs sm:text-sm font-bold text-gray-900 mt-0.5">
                                                    English
                                                </span>
                                            </div>
                                            <div className="bg-gray-50/80 p-2.5 sm:p-3 rounded-xl border border-gray-100 flex flex-col items-center sm:items-start text-center sm:text-left">
                                                <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-500">Length</span>
                                                <span className="text-xs sm:text-sm font-bold text-gray-900 mt-0.5">
                                                    102 Pages
                                                </span>
                                            </div>
                                            <div className="bg-gray-50/80 p-2.5 sm:p-3 rounded-xl border border-gray-100 flex flex-col items-center sm:items-start text-center sm:text-left">
                                                <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-500">Focus</span>
                                                <span className="text-xs sm:text-sm font-bold text-gray-900 mt-0.5">
                                                    4 Noble Truths
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

                                    {/* Action Buttons / Download Tiles */}
                                    <div className="space-y-2.5 pt-4 border-t border-gray-100">
                                        {/* PDF Option */}
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-xl bg-gray-50/90 border border-gray-100 hover:border-orange-200 transition-colors">
                                            <div className="flex items-start sm:items-center gap-2.5">
                                                <span className="w-9 h-9 rounded-lg bg-orange-100/70 text-book-orange font-bold text-xs flex items-center justify-center shrink-0">
                                                    PDF
                                                </span>
                                                <div className="text-left">
                                                    <div className="flex items-center gap-1.5">
                                                        <span className="text-xs font-bold text-gray-900">PDF Edition</span>
                                                        <span className="text-[10px] font-semibold text-gray-500 bg-gray-200/60 px-1.5 py-0.2 rounded">483 KB</span>
                                                    </div>
                                                    <span className="text-[11px] text-gray-500">For printing, tablets, and desktop reading</span>
                                                </div>
                                            </div>
                                            <Button
                                                size="sm"
                                                as="a"
                                                href="/The_Word_of_the_Buddha.pdf"
                                                download="The_Word_of_the_Buddha.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                variant="solid"
                                                className="bg-book-orange text-white font-semibold text-xs px-3.5 h-8 shrink-0 shadow-sm hover:bg-[#e06213] transition-colors w-full sm:w-auto"
                                                startContent={<LuDownload className="text-sm shrink-0" />}
                                                data-umami-event="download-word-of-the-buddha-pdf"
                                                data-umami-event-location="download-page-companion"
                                            >
                                                Download
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                {RECOMMENDED_COMPANION_BOOKS.map((book) => (
                                    <ExternalBookCard key={book.href} book={book} />
                                ))}
                            </div>
                        </section>

                        {/* 3. Biographical & Historical Reading Section */}
                        <section aria-labelledby="biographical-reading-heading" className="pt-4">
                            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
                                <span
                                    className={`text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-book-orange block mb-2 ${leagueSpartan.className}`}
                                >
                                    Lives & Lineage
                                </span>
                                <h2
                                    id="biographical-reading-heading"
                                    className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 uppercase tracking-tight mb-4 ${leagueSpartan.className}`}
                                >
                                    Biographical & Historical Reading
                                </h2>
                                <p className={`text-base sm:text-lg text-gray-600 leading-relaxed ${figTree.className}`}>
                                    Biographical accounts and recollections of Venerable Ñāṇavimala Mahāthera and his preceptor Venerable Nyanatiloka Mahāthera.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                                {BIOGRAPHICAL_READING_BOOKS.map((book) => (
                                    <ExternalBookCard key={book.href} book={book} />
                                ))}
                            </div>
                        </section>
                    </div>
                </main>

                <Footer />
            </div>
        </HeroUIProvider>
    );
}
