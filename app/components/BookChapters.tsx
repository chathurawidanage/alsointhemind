import { leagueSpartan, figTree } from "../fonts";

export const BookChapters = () => {
    return (
        <div className="py-16 bg-white px-8">
            <div className="max-w-[1024px] mx-auto">
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
