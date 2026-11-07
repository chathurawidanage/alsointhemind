import { libreBaskerville } from "../fonts";

export const TaglineSection = () => {
    return (
        <section className="bg-white py-16 sm:py-20 border-b border-gray-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <blockquote className={`text-xl sm:text-2xl md:text-3xl text-gray-800 leading-relaxed font-normal italic ${libreBaskerville.className}`}>
                    &ldquo;In an age of noise, distraction, and spiritual dilution,{" "}
                    <span className="text-book-orange not-italic font-bold">This Is Also in the Mind</span>{" "}
                    is a reminder of what is possible when the path is lived with clarity, courage, and unwavering commitment.&rdquo;
                </blockquote>
            </div>
        </section>
    );
};
