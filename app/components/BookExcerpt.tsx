import { libreBaskerville, leagueSpartan } from "../fonts";
import { FaQuoteLeft } from "react-icons/fa";
import Link from "next/link";

export const BookExcerpt = () => {
    return (
        <section className="bg-[#1a1918] py-20 sm:py-24 border-y border-[#3e3b38]">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col items-center text-center mb-10">
                    <FaQuoteLeft className="text-3xl text-book-orange mb-5 opacity-50" />
                    <span className={`text-xs sm:text-sm tracking-[0.25em] text-book-orange uppercase font-bold ${leagueSpartan.className}`}>
                        Excerpt from the Book
                    </span>
                </div>

                <div className={`text-[#d5c4a1] text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose space-y-6 ${libreBaskerville.className}`}>
                    <p>
                        One day, Shanaka saw him slowly making his way back to his kuti. At that time, Ven. Ñāṇavimala was already well into his eighties. Decades of walking barefoot across Sri Lanka had worn his body thin. A hip injury sustained in his youth had worsened with age. He leaned heavily on his cane, walking slowly, each movement deliberate.
                    </p>

                    <p>
                        Out of concern, Shanaka approached and asked, &ldquo;Bhante, can I help you?&rdquo;
                    </p>

                    <p>
                        Ven. Ñāṇavimala slowly turned, his eyes calm and bright, and replied,
                    </p>

                    <blockquote className="text-xl sm:text-2xl md:text-3xl text-white italic pl-6 border-l-2 border-book-orange py-3 my-8 leading-relaxed font-normal">
                        &ldquo;This body is not mine—why should I give it to somebody else?&rdquo;
                    </blockquote>

                    <p>
                        That response left Shanaka speechless. In just a few words, Ven. Ñāṇavimala revealed what deep letting go truly looked like. This was the source of his unshakeable composure: when the body is no longer taken as &lsquo;self,&rsquo; by means of wisdom, its inevitable decay is no longer a personal tragedy.
                    </p>

                    <p>
                        He advised Shanaka once: <span className="text-white italic opacity-95">&ldquo;Don&apos;t rely on anybody or any person or anything that is external. They can separate at any moment and are all unreliable. But depend on your own mind that is developed and the All Enlightened One as your guide.&rdquo;</span>
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

                <div className="mt-12 pt-6 border-t border-[#33312e] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className={`text-gray-400 text-xs tracking-widest uppercase ${leagueSpartan.className}`}>
                        — From Reflection 6: Living an Island Unto Oneself
                    </span>
                    <Link
                        href="/book"
                        className="text-sm font-semibold text-book-orange hover:text-orange-300 transition-colors inline-flex items-center gap-1"
                        data-umami-event="read-online"
                        data-umami-event-location="excerpt"
                    >
                        Read the full book online &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
};
