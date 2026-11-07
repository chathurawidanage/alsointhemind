import { leagueSpartan, figTree } from "../fonts";
import { LuBookOpen, LuCompass } from "react-icons/lu";

export const BookDescription = () => {
    return (
        <section id="book-description" className="py-20 bg-white border-b border-gray-100 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center mb-10">
                    <span className={`text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-book-orange block mb-3 ${leagueSpartan.className}`}>
                        The Synopsis
                    </span>
                    <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 uppercase tracking-tight ${leagueSpartan.className}`}>
                        Inside the Book
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto mb-16">
                    <div className={`text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed flex flex-col gap-6 text-center ${figTree.className}`}>
                        <p>
                            <span className="font-semibold text-gray-900 italic">This Is Also in the Mind</span> is an intimate account of a disciple&apos;s training under Venerable Ñāṇavimala Mahāthera—a German monk who walked deeper into the Buddha&apos;s path than most dare to go, living with uncompromising simplicity and purity in Sri Lankan forests. Kept private for twenty-five years, these teachings reveal a direct, heart-to-heart transmission rarely seen in the modern world.
                        </p>
                        <p>
                            Through handwritten notes and personal encounters preserved by the disciple Venerable Gnanaloka, alongside reflections from narrators who received this transmission from him, this book opens a doorway into a nearly vanished tradition. These are not mere records, but living guidance—a master&apos;s words pointing back to the Buddha&apos;s original teachings.
                        </p>
                    </div>
                </div>

                {/* The Two Layers of the Book */}
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-50/70 p-8 rounded-2xl border border-gray-100 flex flex-col items-start text-left">
                        <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-book-orange mb-5">
                            <LuBookOpen className="text-2xl" />
                        </div>
                        <span className={`text-xs font-bold uppercase tracking-widest text-book-orange mb-2 ${leagueSpartan.className}`}>
                            Part I &bull; Direct Training Notes
                        </span>
                        <h3 className={`text-2xl font-bold text-gray-900 mb-3 ${leagueSpartan.className}`}>
                            The Master&apos;s Instructions
                        </h3>
                        <p className={`text-gray-600 text-sm sm:text-base leading-relaxed ${figTree.className}`}>
                            Verbatim, unedited handwritten notes recorded by Venerable Gnanaloka over sixteen years of discipleship. Direct instructions on mental restraint, deep meditation, overcoming sensual traps, and adhering strictly to the Buddha&apos;s original words.
                        </p>
                        <span className={`mt-4 text-xs font-semibold text-gray-400 uppercase tracking-wider ${figTree.className}`}>
                            Recommended for serious practitioners & meditators
                        </span>
                    </div>

                    <div className="bg-gray-50/70 p-8 rounded-2xl border border-gray-100 flex flex-col items-start text-left">
                        <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-book-orange mb-5">
                            <LuCompass className="text-2xl" />
                        </div>
                        <span className={`text-xs font-bold uppercase tracking-widest text-book-orange mb-2 ${leagueSpartan.className}`}>
                            Part II &bull; Firsthand Reflections
                        </span>
                        <h3 className={`text-2xl font-bold text-gray-900 mb-3 ${leagueSpartan.className}`}>
                            The Living Witness
                        </h3>
                        <p className={`text-gray-600 text-sm sm:text-base leading-relaxed ${figTree.className}`}>
                            Intimate personal encounters revealing how the master lived his teachings—from quiet composure when confronted by armed robbers, to enduring severe bodily decay with complete letting go, walking twenty-five years in radical simplicity.
                        </p>
                        <span className={`mt-4 text-xs font-semibold text-gray-400 uppercase tracking-wider ${figTree.className}`}>
                            Inspiring reading for all seekers & newcomers
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};
