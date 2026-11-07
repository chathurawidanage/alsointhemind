import { leagueSpartan, figTree } from "../fonts";
import { FaDharmachakra, FaLeaf, FaUserFriends, FaLightbulb } from "react-icons/fa";

export const BookDiscovery = () => {
    return (
        <section className="py-20 bg-gray-50/70 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center mb-12">
                    <span className={`text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-book-orange block mb-3 ${leagueSpartan.className}`}>
                        Key Themes
                    </span>
                    <h3 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 uppercase tracking-tight ${leagueSpartan.className}`}>
                        What You Will Discover
                    </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-7 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-orange-100/70 rounded-full flex items-center justify-center mb-5 text-book-orange">
                            <FaDharmachakra className="text-2xl" />
                        </div>
                        <h4 className={`text-xl font-bold mb-3 text-gray-900 ${leagueSpartan.className}`}>Practical Dhamma</h4>
                        <p className={`text-gray-600 leading-relaxed text-sm sm:text-base ${figTree.className}`}>
                            Teaching on finding complete peace through living with almost nothing. Wisdom from practice, not philosophy.
                        </p>
                    </div>

                    <div className="bg-white p-7 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-orange-100/70 rounded-full flex items-center justify-center mb-5 text-book-orange">
                            <FaLeaf className="text-2xl" />
                        </div>
                        <h4 className={`text-xl font-bold mb-3 text-gray-900 ${leagueSpartan.className}`}>From Ethics to Liberation</h4>
                        <p className={`text-gray-600 leading-relaxed text-sm sm:text-base ${figTree.className}`}>
                            A complete guide on ethical living, facing attachments, and cultivating the mind for true liberation.
                        </p>
                    </div>

                    <div className="bg-white p-7 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-orange-100/70 rounded-full flex items-center justify-center mb-5 text-book-orange">
                            <FaUserFriends className="text-2xl" />
                        </div>
                        <h4 className={`text-xl font-bold mb-3 text-gray-900 ${leagueSpartan.className}`}>Sixteen Years of Training</h4>
                        <p className={`text-gray-600 leading-relaxed text-sm sm:text-base ${figTree.className}`}>
                            The inspiring training of a disciple by an elusive solitary monk who embodied the path to freedom.
                        </p>
                    </div>

                    <div className="bg-white p-7 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-orange-100/70 rounded-full flex items-center justify-center mb-5 text-book-orange">
                            <FaLightbulb className="text-2xl" />
                        </div>
                        <h4 className={`text-xl font-bold mb-3 text-gray-900 ${leagueSpartan.className}`}>Wisdom for Today</h4>
                        <p className={`text-gray-600 leading-relaxed text-sm sm:text-base ${figTree.className}`}>
                            Timeless guidance for finding stillness and sanity in the midst of a noisy, distracted modern world.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
