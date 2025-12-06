import Image from "next/image";
import book3d from "../../public/book_3d.png";
import { leagueSpartan, figTree } from "../fonts";
import { FaDharmachakra, FaLeaf, FaUserFriends, FaLightbulb } from "react-icons/fa";

export const BookDescription = () => {
    return (
        <div className="mt-16 bg-white p-8">
            <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-book-orange uppercase text-center max-w-[1024px] mx-auto ${leagueSpartan.className}`}>A Rare Glimpse Into the Living Heart of the Buddha's Teaching</h2>
            <div className="max-w-[1024px] mx-auto flex flex-col-reverse md:flex-row gap-12 flex-wrap-reverse items-center">
                <div className="md:flex-1">
                    <div className={`text-gray-600 text-lg leading-relaxed flex flex-col gap-6 text-justify ${figTree.className}`}>
                        <p>
                            This Is Also in the Mind is a profound and intimate record of a disciple’s seven-year training under Venerable Ñāṇavimala Mahāthera—a legendary wandering monk whose life embodied the Buddha's path with uncompromising simplicity and purity. Kept private for twenty-five years, these teachings reveal a direct, person-to-person transmission rarely accessible in the modern world.
                        </p>
                        <p>
                            Through handwritten notes, personal encounters, and vivid reflections, this book opens a doorway into a nearly vanished tradition—one grounded not in ritual or philosophy, but in the Buddha's original words and the lived reality of practice. It is both an inspiring story of a disciple shaped by a noble teacher and a guiding manual for those seeking authentic, practical Dhamma rooted in the Suttas.
                        </p>
                        <p>
                            In an age of noise, distraction, and spiritual dilution, This Is Also in the Mind is a reminder of what is possible when the path is lived with clarity, courage, and unwavering commitment.
                        </p>
                    </div>
                </div>
                <div className="md:flex-1 justify-center flex items-center h-auto">
                    <Image src={book3d} alt="Also in the Mind" className="md:w-[70%] md:h-auto h-[200px] w-auto drop-shadow-2xl" />
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto mt-20">
                <h3 className={`text-3xl font-bold mb-10 text-center text-gray-800 ${leagueSpartan.className}`}>What You Will Discover</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 hover:shadow-md transition-all flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4 text-book-orange">
                            <FaDharmachakra className="text-2xl" />
                        </div>
                        <h4 className={`text-xl font-bold mb-3 text-gray-900 ${leagueSpartan.className}`}>Authentic Dhamma</h4>
                        <p className={`text-gray-600 leading-relaxed text-sm ${figTree.className}`}>
                            A direct transmission of the Buddha’s original words, rooted firmly in the Suttas and free from cultural dilutions.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 hover:shadow-md transition-all flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4 text-book-orange">
                            <FaLeaf className="text-2xl" />
                        </div>
                        <h4 className={`text-xl font-bold mb-3 text-gray-900 ${leagueSpartan.className}`}>Lived Practice</h4>
                        <p className={`text-gray-600 leading-relaxed text-sm ${figTree.className}`}>
                            A complete guide on ethical living, facing attachments, and cultivating the mind for true liberation.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 hover:shadow-md transition-all flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4 text-book-orange">
                            <FaUserFriends className="text-2xl" />
                        </div>
                        <h4 className={`text-xl font-bold mb-3 text-gray-900 ${leagueSpartan.className}`}>A Noble Lineage</h4>
                        <p className={`text-gray-600 leading-relaxed text-sm ${figTree.className}`}>
                            The inspiring journey of a disciple trained by a legendary forest monk who embodied the path of simplicity.
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

            <div className="max-w-[1024px] mx-auto mt-20">
                <h3 className={`text-3xl font-bold mb-10 text-center text-gray-800 ${leagueSpartan.className}`}>Chapter Preview</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 px-4">
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
                        <div key={index} className="flex items-start gap-4 p-4 border-b border-gray-100 hover:bg-orange-50/30 transition-colors rounded-lg">
                            <span className={`text-book-orange font-bold text-lg min-w-[30px] ${leagueSpartan.className}`}>{(index + 1).toString().padStart(2, '0')}</span>
                            <span className={`text-gray-700 font-medium ${figTree.className}`}>{chapter}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
