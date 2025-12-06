import Image from "next/image";
import book3d from "../../public/book_3d.png";
import { leagueSpartan, figTree } from "../fonts";

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
        </div>
    );
};
