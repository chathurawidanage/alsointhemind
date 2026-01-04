import { figTree, libreBaskerville } from "../fonts";

export const TaglineSection = () => {
    return (
        <div className="bg-white py-16 px-6 border-b border-gray-100">
            <div className="max-w-[1024px] mx-auto text-center">
                <p className={`text-xl md:text-2xl text-gray-700 leading-relaxed font-medium ${libreBaskerville.className}`}>
                    "In an age of noise, distraction, and spiritual dilution, <span className="italic text-book-orange">This Is Also in the Mind</span> is a reminder of what is possible when the path is lived with clarity, courage, and unwavering commitment."
                </p>
            </div>
        </div>
    );
};
