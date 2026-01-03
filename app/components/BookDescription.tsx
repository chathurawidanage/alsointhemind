import Image from "next/image";
import book3d from "../../public/book_3d.png";
import { leagueSpartan, figTree } from "../fonts";

export const BookDescription = () => {
    return (
        <div className="flex flex-col">
            {/* Intro Section - White */}
            <div id="book-description" className="py-16 bg-white px-8 scroll-mt-16">
                <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-book-orange uppercase text-center max-w-[1024px] mx-auto ${leagueSpartan.className}`}>Inside the book</h2>
                <div className="max-w-[1024px] mx-auto flex flex-col-reverse md:flex-row gap-12 flex-wrap-reverse items-center">
                    <div className="md:flex-1">
                        <div className={`text-gray-600 text-lg leading-relaxed flex flex-col gap-6 text-justify ${figTree.className}`}>
                            <p>
                                This Is Also in the Mind is an intimate account of a disciple's

                                training under Venerable Ñāṇavimala Mahāthera—a German monk

                                who walked deeper into the Buddha's path than most dare to go,

                                living with uncompromising simplicity and purity in Sri Lankan forests.

                                Kept private for twenty-five years, these teachings reveal a direct,

                                heart-to-heart transmission rarely seen in the modern world.
                            </p>
                            <p>
                                Through handwritten notes and personal encounters preserved

                                by Venerable Gnanaloka, alongside reflections from narrators

                                who received this transmission from him, this book opens a

                                doorway into a nearly vanished tradition. These are not mere

                                records, but living guidance—a master's words pointing back to

                                the Buddha's original teachings.

                            </p>
                            <p>
                                In an age of noise, distraction, and spiritual dilution, This Is

                                Also in the Mind is a reminder of what is possible when the

                                path is lived with clarity, courage, and unwavering commitment.
                            </p>
                        </div>
                    </div>
                    <div className="md:flex-1 justify-center flex items-center h-auto">
                        <Image src={book3d} alt="Also in the Mind" className="md:w-[70%] md:h-auto h-[200px] w-auto drop-shadow-2xl" />
                    </div>
                </div>
            </div>

            {/* What You Will Discover - Gray */}
        </div>
    );
};
