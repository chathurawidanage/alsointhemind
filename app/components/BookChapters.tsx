import { leagueSpartan, figTree } from "../fonts";
import Link from "next/link";
import { LuBookMarked, LuFootprints, LuScroll, LuUsers } from "react-icons/lu";

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

                {/* Unified max-w-5xl wrapper for both chapters and appendices */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 mb-8">
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

                    {/* Practical Appendices Highlight — perfectly aligned with the grid above */}
                    <div className="bg-white border border-orange-100 rounded-2xl p-6 sm:p-8 shadow-xs">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-gray-100">
                            <div className="text-center md:text-left">
                                <span className={`text-xs font-bold uppercase tracking-[0.2em] text-book-orange block mb-1 ${leagueSpartan.className}`}>
                                    Practical Appendices
                                </span>
                                <h4 className={`text-2xl font-bold text-gray-900 ${leagueSpartan.className}`}>
                                    The Master&apos;s Training Curriculum
                                </h4>
                            </div>
                            <Link
                                href="/book"
                                className="text-xs uppercase font-bold tracking-wider text-book-orange hover:text-[#e06213] transition-colors"
                                data-umami-event="read-online"
                                data-umami-event-location="chapters-appendices"
                            >
                                Read Online &rarr;
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                            <div className="flex items-start gap-3 p-3 rounded-xl bg-orange-50/30">
                                <LuBookMarked className="text-xl text-book-orange shrink-0 mt-0.5" />
                                <div>
                                    <h5 className={`font-bold text-sm text-gray-900 ${leagueSpartan.className}`}>Readings for Enlightenment</h5>
                                    <p className={`text-xs text-gray-500 mt-0.5 ${figTree.className}`}>Recommended Sutta study path</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 p-3 rounded-xl bg-orange-50/30">
                                <LuFootprints className="text-xl text-book-orange shrink-0 mt-0.5" />
                                <div>
                                    <h5 className={`font-bold text-sm text-gray-900 ${leagueSpartan.className}`}>Walking Contemplations</h5>
                                    <p className={`text-xs text-gray-500 mt-0.5 ${figTree.className}`}>Meditation on the road</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 p-3 rounded-xl bg-orange-50/30">
                                <LuUsers className="text-xl text-book-orange shrink-0 mt-0.5" />
                                <div>
                                    <h5 className={`font-bold text-sm text-gray-900 ${leagueSpartan.className}`}>Readings for Laypeople & Saṅgha</h5>
                                    <p className={`text-xs text-gray-500 mt-0.5 ${figTree.className}`}>Targeted canonical guides</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 p-3 rounded-xl bg-orange-50/30">
                                <LuScroll className="text-xl text-book-orange shrink-0 mt-0.5" />
                                <div>
                                    <h5 className={`font-bold text-sm text-gray-900 ${leagueSpartan.className}`}>Canonical References</h5>
                                    <p className={`text-xs text-gray-500 mt-0.5 ${figTree.className}`}>Detailed Sutta citations</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <Link
                        href="/book"
                        className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-book-orange hover:text-[#e06213] transition-colors"
                        data-umami-event="read-online"
                        data-umami-event-location="chapters-bottom"
                    >
                        Read the complete book online &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
};
