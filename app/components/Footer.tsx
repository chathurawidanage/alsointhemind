import { leagueSpartan, figTree } from "../fonts";
import Link from "next/link";
import { FaGlobe } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
            <div className="max-w-[1240px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h4 className={`text-xl font-bold mb-2 ${leagueSpartan.className}`}>Sri Sambuddha Mission Charitable Trust</h4>
                    <p className={`text-gray-400 text-sm ${figTree.className}`}>
                        © 2025 All Rights Reserved.
                    </p>
                    <p className={`text-gray-500 text-xs mt-1 ${figTree.className}`}>
                        Printed for free distribution. Not for sale.
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-end gap-2">
                    <Link
                        href="http://www.srisambuddhamission.org"
                        target="_blank"
                        className={`flex items-center gap-2 text-book-orange hover:text-orange-300 transition-colors ${figTree.className}`}
                    >
                        <FaGlobe />
                        <span>www.srisambuddhamission.org</span>
                    </Link>
                    <p className={`text-gray-500 text-sm ${figTree.className}`}>
                        Sri Sambuddha Ramaneeya Ashramaya
                    </p>
                </div>
            </div>
        </footer>
    );
};
