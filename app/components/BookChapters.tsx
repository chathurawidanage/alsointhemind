import { leagueSpartan, figTree } from "../fonts";
import Link from "next/link";

export const BookChapters = () => {
    return (
        <section className="py-20 bg-gray-50/70 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center mb-12">
                    <span className={`text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-book-orange block mb-3 ${leagueSpartan.className}`}>
                        Table of Contents
                    </span>
                    <h3 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 tracking-tight ${leagueSpartan.className}`}>
                        Chapter Preview
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                    {[
                        "Avoid Every Bondage With The World",
                        "The Buddha Never Lets You Down",
                        "The Way You Deal With Your Parents",
                        "More Pleasure More Danger",
                        "Always Be With Thoughts Of Mettā",
                        "Restrain, Abstain And Endure",
                        "Stick To The Exact Words Of The Buddha",
                        "What Doesn’t Arise, Doesn’t Pass Away",
                        "Give A Finger To Māra, He Takes A Hand",
                        "Find A Way To Bring Many To This Path"
                    ].map((chapter, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4 p-4 bg-white border border-gray-100 hover:border-orange-200 hover:bg-orange-50/20 transition-all rounded-xl shadow-xs"
                        >
                            <span className={`text-book-orange font-bold text-lg min-w-[32px] ${leagueSpartan.className}`}>
                                {(index + 1).toString().padStart(2, '0')}
                            </span>
                            <span className={`text-gray-800 font-medium text-base sm:text-lg ${figTree.className}`}>
                                {chapter}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <Link
                        href="/book"
                        className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-book-orange hover:text-[#e06213] transition-colors"
                    >
                        Explore all chapters and reflections in the online reader &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
};
