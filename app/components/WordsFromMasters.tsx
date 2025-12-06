import { leagueSpartan, figTree } from "../fonts";
import { FaQuoteLeft } from "react-icons/fa";

export const WordsFromMasters = () => {
    return (
        <div className="bg-white py-16">
            <div className="max-w-[1240px] mx-auto px-8">
                <h3 className={`text-3xl md:text-4xl font-bold mb-16 text-center text-gray-800 ${leagueSpartan.className}`}>Words from the Masters on <br className="hidden md:block" /> Venerable Ñāṇavimala Mahāthera</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-2xl relative">
                        <FaQuoteLeft className="text-4xl text-book-orange/20 absolute top-6 left-6" />
                        <p className={`text-gray-700 italic mb-6 relative z-10 ${figTree.className}`}>
                            "The Mahākassapa of this age... If you want to get a sermon from Mahākassapa, go see Venerable Ñāṇavimala."
                        </p>
                        <div className="flex items-center gap-4">
                            <div>
                                <h5 className={`font-bold text-gray-900 ${leagueSpartan.className}`}>Ven. Katukurunde Ñāṇananda</h5>
                                <p className="text-sm text-gray-500">Renowned Scholar & Author</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl relative">
                        <FaQuoteLeft className="text-4xl text-book-orange/20 absolute top-6 left-6" />
                        <p className={`text-gray-700 italic mb-6 relative z-10 ${figTree.className}`}>
                            "The best Dhamma talk that I have ever had the good karma to listen to! He wove quotes from the Suttas together with explanations from his own experience into such a symphony of Dhamma."
                        </p>
                        <div className="flex items-center gap-4">
                            <div>
                                <h5 className={`font-bold text-gray-900 ${leagueSpartan.className}`}>Ajahn Brahmavaṁso</h5>
                                <p className="text-sm text-gray-500">Abbot of Bodhinyana Monastery</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl relative">
                        <FaQuoteLeft className="text-4xl text-book-orange/20 absolute top-6 left-6" />
                        <p className={`text-gray-700 italic mb-6 relative z-10 ${figTree.className}`}>
                            "He would adjust his Dhamma talk to meet the other person in precisely the way that best fit the other person’s needs."
                        </p>
                        <div className="flex items-center gap-4">
                            <div>
                                <h5 className={`font-bold text-gray-900 ${leagueSpartan.className}`}>Bhikkhu Bodhi</h5>
                                <p className="text-sm text-gray-500">Translator of Major Buddhist Texts</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl relative">
                        <FaQuoteLeft className="text-4xl text-book-orange/20 absolute top-6 left-6" />
                        <p className={`text-gray-700 italic mb-6 relative z-10 ${figTree.className}`}>
                            "There was nothing put on. There was no conceit. One could honestly say that this person was definitely on the way to Nibbāna."
                        </p>
                        <div className="flex items-center gap-4">
                            <div>
                                <h5 className={`font-bold text-gray-900 ${leagueSpartan.className}`}>Ven. K. Pemasiri</h5>
                                <p className="text-sm text-gray-500">Respected Meditation Teacher</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
