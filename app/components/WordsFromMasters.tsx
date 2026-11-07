import { leagueSpartan, figTree, libreBaskerville } from "../fonts";
import { FaQuoteLeft } from "react-icons/fa";

export const WordsFromMasters = () => {
    return (
        <section className="py-20 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center mb-14">
                    <span className={`text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-book-orange block mb-3 ${leagueSpartan.className}`}>
                        Revered Testimonies
                    </span>
                    <h3 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight ${leagueSpartan.className}`}>
                        Words from the Masters
                    </h3>
                    <p className={`text-gray-500 text-sm sm:text-base mt-2 max-w-xl ${figTree.className}`}>
                        Reflections on Venerable Ñāṇavimala Mahāthera from leading Buddhist scholars, abbots, and meditation masters.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-50/70 p-8 rounded-2xl relative border border-gray-100 hover:border-orange-200 transition-all shadow-xs flex flex-col justify-between">
                        <div>
                            <FaQuoteLeft className="text-4xl text-book-orange/20 mb-4" />
                            <p className={`text-gray-700 italic mb-6 leading-relaxed ${libreBaskerville.className}`}>
                                &ldquo;The Mahākassapa of this age... If you want to get a sermon from Mahākassapa, go see Venerable Ñāṇavimala.&rdquo;
                            </p>
                        </div>
                        <div className="pt-4 border-t border-gray-200/60">
                            <h5 className={`font-bold text-gray-900 text-base ${leagueSpartan.className}`}>Ven. Katukurunde Ñāṇananda</h5>
                            <p className={`text-xs text-gray-500 ${figTree.className}`}>Renowned Scholar &amp; Author of Concept and Reality</p>
                        </div>
                    </div>

                    <div className="bg-gray-50/70 p-8 rounded-2xl relative border border-gray-100 hover:border-orange-200 transition-all shadow-xs flex flex-col justify-between">
                        <div>
                            <FaQuoteLeft className="text-4xl text-book-orange/20 mb-4" />
                            <p className={`text-gray-700 italic mb-6 leading-relaxed ${libreBaskerville.className}`}>
                                &ldquo;The best Dhamma talk that I have ever had the good karma to listen to! He wove quotes from the Suttas together with explanations from his own experience into such a symphony of Dhamma.&rdquo;
                            </p>
                        </div>
                        <div className="pt-4 border-t border-gray-200/60">
                            <h5 className={`font-bold text-gray-900 text-base ${leagueSpartan.className}`}>Ajahn Brahmavaṁso</h5>
                            <p className={`text-xs text-gray-500 ${figTree.className}`}>Abbot of Bodhinyana Monastery, Australia</p>
                        </div>
                    </div>

                    <div className="bg-gray-50/70 p-8 rounded-2xl relative border border-gray-100 hover:border-orange-200 transition-all shadow-xs flex flex-col justify-between">
                        <div>
                            <FaQuoteLeft className="text-4xl text-book-orange/20 mb-4" />
                            <p className={`text-gray-700 italic mb-6 leading-relaxed ${libreBaskerville.className}`}>
                                &ldquo;He would adjust his Dhamma talk to meet the other person in precisely the way that best fit the other person&apos;s needs.&rdquo;
                            </p>
                        </div>
                        <div className="pt-4 border-t border-gray-200/60">
                            <h5 className={`font-bold text-gray-900 text-base ${leagueSpartan.className}`}>Bhikkhu Bodhi</h5>
                            <p className={`text-xs text-gray-500 ${figTree.className}`}>Renowned Translator of the Pali Canon</p>
                        </div>
                    </div>

                    <div className="bg-gray-50/70 p-8 rounded-2xl relative border border-gray-100 hover:border-orange-200 transition-all shadow-xs flex flex-col justify-between">
                        <div>
                            <FaQuoteLeft className="text-4xl text-book-orange/20 mb-4" />
                            <p className={`text-gray-700 italic mb-6 leading-relaxed ${libreBaskerville.className}`}>
                                &ldquo;There was nothing put on. There was no conceit. One could honestly say that this person was definitely on the way to Nibbāna.&rdquo;
                            </p>
                        </div>
                        <div className="pt-4 border-t border-gray-200/60">
                            <h5 className={`font-bold text-gray-900 text-base ${leagueSpartan.className}`}>Ven. K. Pemasiri</h5>
                            <p className={`text-xs text-gray-500 ${figTree.className}`}>Respected Meditation Teacher, Sri Lanka</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
