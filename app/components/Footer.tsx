import { leagueSpartan, figTree } from "../fonts";
import Link from "next/link";
import { FaGlobe } from "react-icons/fa";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-950 text-white py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-gray-800/80 pb-10">
                    <div className="text-center md:text-left">
                        <h4 className={`text-xl font-bold tracking-tight mb-2 text-white ${leagueSpartan.className}`}>
                            Also in the Mind
                        </h4>
                        <p className={`text-gray-400 text-sm max-w-md ${figTree.className}`}>
                            In The Presence of Venerable Ñāṇavimala Mahāthera — A Disciple’s Training, Kept Private for 25 Years.
                        </p>
                    </div>

                    <nav className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase font-bold tracking-widest text-gray-400">
                        <Link href="/" className="hover:text-book-orange transition-colors">
                            Home
                        </Link>
                        <Link href="/master" className="hover:text-book-orange transition-colors">
                            The Master
                        </Link>
                        <Link href="/#book-description" className="hover:text-book-orange transition-colors">
                            The Book
                        </Link>
                        <Link href="/book" className="hover:text-book-orange transition-colors text-book-orange">
                            Read Online
                        </Link>
                    </nav>
                </div>

                <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
                        <p className={figTree.className}>
                            &copy; {currentYear} Sri Sambuddha Mission Charitable Trust.
                        </p>
                        <span className="hidden sm:inline text-gray-700">&bull;</span>
                        <p className="text-gray-400">
                            Printed for free distribution. Not for sale.
                        </p>
                    </div>

                    <Link
                        href="https://srisambuddhamission.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 text-gray-400 hover:text-book-orange transition-colors ${figTree.className}`}
                    >
                        <FaGlobe className="text-book-orange" />
                        <span>srisambuddhamission.org</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
};
