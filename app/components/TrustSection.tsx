import Image from "next/image";
import ssmctLogo from "../../public/ssmct.png";
import { leagueSpartan, figTree } from "../fonts";
import { Link } from "@heroui/react";

export const TrustSection = () => {
    return (
        <section className="py-20 bg-gray-50/70 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-6">
                <div className="w-28 sm:w-32 h-auto relative mb-2">
                    <Image
                        src={ssmctLogo}
                        alt="Sri Sambuddha Mission Charitable Trust Logo"
                        className="w-full h-auto"
                        priority={false}
                    />
                </div>

                <span className={`text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-book-orange block ${leagueSpartan.className}`}>
                    Publisher & Preservation
                </span>

                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-tight max-w-2xl ${leagueSpartan.className}`}>
                    Sri Sambuddha Mission Charitable Trust
                </h2>

                <div className={`text-gray-600 flex flex-col gap-2 ${figTree.className}`}>
                    <p className="font-semibold text-base sm:text-lg text-gray-800">
                        Founded by Venerable Bambalapitiye Gnanaloka Thero
                    </p>
                    <p className="text-xs sm:text-sm border-t border-gray-200 pt-2 mt-2 w-fit mx-auto px-8 text-gray-500">
                        Established in 2017 &bull; Deed of Trust No. 95
                    </p>
                </div>

                <div className={`mt-2 text-gray-500 text-xs sm:text-sm flex flex-col gap-2 ${figTree.className}`}>
                    <p>Sri Sambuddha Ramaneeya Ashramaya, Ethaudakanda, Thalawathura, Dunumala, Galapitamada, Sri Lanka.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-1">
                        <Link
                            href="mailto:info@srisambuddhamission.org"
                            color="foreground"
                            className="text-xs text-gray-500 sm:text-sm hover:text-book-orange transition-colors"
                            data-umami-event="contact-click"
                            data-umami-event-method="email"
                        >
                            info@srisambuddhamission.org
                        </Link>
                        <span className="hidden sm:inline text-gray-300">|</span>
                        <Link
                            href="tel:+94777586808"
                            color="foreground"
                            className="text-xs text-gray-500 sm:text-sm hover:text-book-orange transition-colors"
                            data-umami-event="contact-click"
                            data-umami-event-method="phone"
                        >
                            +94 777 586 808
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
