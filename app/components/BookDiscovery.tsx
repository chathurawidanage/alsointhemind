import { leagueSpartan, figTree } from "../fonts";
import { FaDharmachakra, FaLeaf, FaUserFriends, FaLightbulb } from "react-icons/fa";

export const BookDiscovery = () => {
    return (
        <div className="py-16 bg-gray-50 px-8">
            <div className="max-w-[1240px] mx-auto">
                <h3 className={`text-3xl font-bold mb-10 text-center text-gray-800 ${leagueSpartan.className}`}>What You Will Discover</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 hover:shadow-md transition-all flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4 text-book-orange">
                            <FaDharmachakra className="text-2xl" />
                        </div>
                        <h4 className={`text-xl font-bold mb-3 text-gray-900 ${leagueSpartan.className}`}>Practical Dhamma</h4>
                        <p className={`text-gray-600 leading-relaxed text-sm ${figTree.className}`}>
                            Teaching on finding complete peace through living with almost nothing. Wisdom from practice, not philosophy.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 hover:shadow-md transition-all flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4 text-book-orange">
                            <FaLeaf className="text-2xl" />
                        </div>
                        <h4 className={`text-xl font-bold mb-3 text-gray-900 ${leagueSpartan.className}`}>From Ethics to Liberation</h4>
                        <p className={`text-gray-600 leading-relaxed text-sm ${figTree.className}`}>
                            A complete guide on ethical living, facing attachments, and cultivating the mind for true liberation.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 hover:shadow-md transition-all flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4 text-book-orange">
                            <FaUserFriends className="text-2xl" />
                        </div>
                        <h4 className={`text-xl font-bold mb-3 text-gray-900 ${leagueSpartan.className}`}>Sixteen Years of Training</h4>
                        <p className={`text-gray-600 leading-relaxed text-sm ${figTree.className}`}>
                            The inspiring training of a disciple by an elusive solitary monk who embodied the path to freedom.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 hover:shadow-md transition-all flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4 text-book-orange">
                            <FaLightbulb className="text-2xl" />
                        </div>
                        <h4 className={`text-xl font-bold mb-3 text-gray-900 ${leagueSpartan.className}`}>Wisdom for Today</h4>
                        <p className={`text-gray-600 leading-relaxed text-sm ${figTree.className}`}>
                            Timeless guidance for finding stillness and sanity in the midst of a noisy, distracted modern world.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
