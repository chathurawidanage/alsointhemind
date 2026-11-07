import { leagueSpartan, figTree } from "../fonts";

export const BookDescription = () => {
    return (
        <section id="book-description" className="py-20 bg-white border-b border-gray-100 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center mb-10">
                    <span className={`text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-book-orange block mb-3 ${leagueSpartan.className}`}>
                        The Origin
                    </span>
                    <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 uppercase tracking-tight ${leagueSpartan.className}`}>
                        Inside the Book
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className={`text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed flex flex-col gap-6 text-center ${figTree.className}`}>
                        <p>
                            <span className="font-semibold text-gray-900 italic">This Is Also in the Mind</span> is an intimate account of a disciple&apos;s training under Venerable Ñāṇavimala Mahāthera—a German monk who walked deeper into the Buddha&apos;s path than most dare to go, living with uncompromising simplicity and purity in Sri Lankan forests. Kept private for twenty-five years, these teachings reveal a direct, heart-to-heart transmission rarely seen in the modern world.
                        </p>
                        <p>
                            Through handwritten notes and personal encounters preserved by the disciple Venerable Gnanaloka, alongside reflections from narrators who received this transmission from him, this book opens a doorway into a nearly vanished tradition. These are not mere records, but living guidance—a master&apos;s words pointing back to the Buddha&apos;s original teachings.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
