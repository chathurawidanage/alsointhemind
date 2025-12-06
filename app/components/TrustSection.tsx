import Image from "next/image";
import ssmctLogo from "../../public/ssmct.png";
import { leagueSpartan, figTree } from "../fonts";
import { Link } from "@heroui/react";

export const TrustSection = () => {
    return (
        <div className="py-16 bg-gray-50 px-4">
            <div className="max-w-[1024px] mx-auto flex flex-col items-center text-center gap-6">
                <Image
                    src={ssmctLogo}
                    alt="Sri Sambuddha Mission Charitable Trust Logo"
                    className="w-32 h-auto mb-4"
                />
                <h2 className={`text-3xl md:text-4xl font-bold text-book-orange uppercase ${leagueSpartan.className}`}>
                    Sri Sambuddha Mission Charitable Trust
                </h2>
                <div className={`text-gray-600 flex flex-col gap-2 ${figTree.className}`}>
                    <p className="font-semibold text-lg">
                        Founded by Venerable Bambalapitiye Gnanaloka Thero
                    </p>
                    <p className="text-sm border-t border-gray-200 pt-2 mt-2 w-fit mx-auto px-8">
                        Established in 2017 | Deed of Trust No. 95
                    </p>
                </div>

                <div className={`mt-8 text-gray-500 text-sm flex flex-col gap-1 ${figTree.className}`}>
                    <p>Sri Sambuddha Ramaneeya Ashramaya, Ethaudakanda, Thalawathura, Dunumala, Galapitamada, Sri Lanka.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
                        <Link href="mailto:info@srisambuddhamission.org" color="foreground" className="text-sm hover:text-book-orange transition-colors">
                            info@srisambuddhamission.org
                        </Link>
                        <span className="hidden sm:inline text-gray-300">|</span>
                        <Link href="tel:+94777586808" color="foreground" className="text-sm hover:text-book-orange transition-colors">
                            +94 777 586 808
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
