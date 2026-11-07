import { libreBaskerville, leagueSpartan, figTree } from "../fonts";
import { FaQuoteLeft } from "react-icons/fa";

export const TaglineSection = () => {
    return (
        <section className="bg-white py-16 sm:py-20 border-b border-gray-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
                {/* Canonical Epigraph */}
                <div className="text-center">
                    <p className={`text-sm sm:text-base text-book-orange font-serif italic mb-2 tracking-wide ${libreBaskerville.className}`}>
                        &ldquo;Tasmātihānanda attadīpā viharatha attasaraṇā anaññasaraṇā, dhammadīpā dhammasaraṇā anaññasaraṇā.&rdquo;
                    </p>
                    <blockquote className={`text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed font-normal italic ${libreBaskerville.className}`}>
                        &ldquo;Therefore, Ānanda, be islands unto yourselves, be your own refuge, having no other; let the Dhamma be your island, let the Dhamma be your refuge, having no other refuge.&rdquo;
                    </blockquote>
                    <p className={`text-xs text-gray-400 uppercase tracking-widest mt-3 ${leagueSpartan.className}`}>
                        — Mahāparinibbāna Sutta (DN 16)
                    </p>
                </div>

                {/* The Origin of the Title Story Callout */}
                <div className="bg-orange-50/50 border border-orange-100/80 rounded-2xl p-6 sm:p-8 relative">
                    <FaQuoteLeft className="text-3xl text-book-orange/20 absolute top-6 left-6" />
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <span className={`text-xs font-bold uppercase tracking-[0.25em] text-book-orange mb-3 ${leagueSpartan.className}`}>
                            The Origin of the Title
                        </span>

                        <p className={`text-gray-700 text-sm sm:text-base leading-relaxed max-w-2xl mb-4 ${figTree.className}`}>
                            On a roadside in Sri Lanka, a young disciple spoke eagerly of perceiving impermanence, weaving his experiences with physics and philosophy. Venerable Ñāṇavimala listened in silence before quietly saying:
                        </p>

                        <div className={`text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight my-2 text-book-orange ${leagueSpartan.className}`}>
                            &ldquo;This is also in the mind.&rdquo;
                        </div>

                        <p className={`text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mt-3 ${figTree.className}`}>
                            The sentence cut through every layer of self-assurance. What he had taken to be profound realizations were seen for what they truly were—formations of the mind. At that moment, he knew he had found his teacher.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
