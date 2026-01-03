import { libreBaskerville, leagueSpartan } from "../fonts";
import { FaQuoteLeft } from "react-icons/fa";

export const BookExcerpt = () => {
    return (
        <div className="bg-[#1a1918] py-24 px-8 border-y border-[#3e3b38]">
            <div className="max-w-[800px] mx-auto">
                <div className="flex flex-col items-center text-center mb-10">
                    <FaQuoteLeft className="text-3xl text-book-orange mb-6 opacity-40" />
                    <h2 className={`text-xs tracking-[0.2em] text-book-orange uppercase font-bold ${leagueSpartan.className}`}>Excerpt from the Book</h2>
                </div>

                <div className={`text-[#d5c4a1] text-base md:text-lg leading-loose space-y-6 ${libreBaskerville.className}`}>
                    <p>
                        One day, Shanaka saw him slowly making his way back to his kuti. At that time, Ven. Ñāṇavimala was already well into his eighties. Decades of walking barefoot across Sri Lanka had worn his body thin. A hip injury sustained in his youth had worsened with age. He leaned heavily on his cane, walking slowly, each movement deliberate.
                    </p>

                    <p>
                        Out of concern, Shanaka approached and asked, "Bhante, can I help you?"
                    </p>

                    <p>
                        Ven. Ñāṇavimala slowly turned, his eyes calm and bright, and replied,
                    </p>

                    <blockquote className="text-xl md:text-2xl text-white italic pl-6 border-l-2 border-book-orange py-2 my-8 leading-relaxed font-normal opacity-90">
                        "This body is not mine—why should I give it to somebody else?"
                    </blockquote>

                    <p>
                        That response left Shanaka speechless. In just a few words, Ven. Ñāṇavimala revealed what deep letting go truly looked like. This was the source of his unshakeable composure: when the body is no longer taken as 'self,' by means of wisdom, its inevitable decay is no longer a personal tragedy.
                    </p>

                    <p>
                        He advised Shanaka once: <span className="text-white italic opacity-90">"Don't rely on anybody or any person or anything that is external. They can separate at any moment and are all unreliable. But depend on your own mind that is developed and the All Enlightened One as your guide."</span>
                    </p>

                    <p>
                        It was the kind of teaching that could only come from someone who had tested it against hunger, against danger, against the collapse of every external support—and found it true.
                    </p>

                    <p>
                        Years earlier, during his cārikā, Ven. Ñāṇavimala had been confronted by robbers seeking valuables. They demanded he strip to just his under-robe while they rummaged through his belongings. He quietly stepped away and hid. When he returned, he found his possessions scattered across the ground—but nothing had been taken.
                    </p>

                    <p>
                        Even these desperately poor thieves had found nothing worth stealing. His books were completely written in, margins filled with notes. His robes were weathered. Every item bore the marks of years of use and utter simplicity. There was simply nothing of value to take—not even to those who had nothing.
                    </p>
                </div>

                <div className={`mt-12 text-center text-gray-500 text-xs tracking-widest uppercase ${leagueSpartan.className}`}>
                    — From Reflection 6: Living an Island Unto Oneself
                </div>
            </div>
        </div>
    );
};
