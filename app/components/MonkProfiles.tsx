import { Avatar, Link } from "@heroui/react";
import Image from "next/image";
import monk1 from "../../public/monk1.jpg";
import monk2 from "../../public/monk2.png";
import { leagueSpartan } from "../fonts";

export const MonkProfiles = () => {
    return (
        <div className="py-16 px-4 bg-gray-50 text-center">
            <h2 className={`text-4xl md:text-5xl font-bold text-book-orange uppercase mb-12 ${leagueSpartan.className}`}>The Lineage</h2>
            <div className="max-w-[1024px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Monk 1 */}
                <div className="flex flex-col items-center text-center">
                    <Avatar
                        src={monk1.src}
                        className="w-48 h-48 text-large mb-6"
                        isBordered
                        color="warning"
                    />
                    <h3 className="text-2xl font-bold mb-4 text-book-orange">Venerable Ñāṇavimala Mahāthera</h3>
                    <p className="text-gray-600 max-w-sm mb-6">
                        (1911 - 2005) One of the most revered forest monks of modern times. Known for his "carefree" approach to Dhamma practice, his life embodied the Buddha's path with uncompromising simplicity and purity.
                    </p>
                    <Link
                        href="https://srisambuddhamission.org/venerable-na%e1%b9%87avimala-mahathera-a-life-of-renunciation-and-wisdom/"
                        isExternal
                        showAnchorIcon
                        color="warning"
                    >
                        Read More
                    </Link>
                </div>

                {/* Monk 2 */}
                <div className="flex flex-col items-center text-center">
                    <Avatar
                        src={monk2.src}
                        className="w-48 h-48 text-large mb-6"
                        isBordered
                        color="default"
                    />
                    <h3 className="text-2xl font-bold mb-4 text-book-orange">Venerable Bambalapitiye Gnanaloka Thero</h3>
                    <p className="text-gray-600 max-w-sm mb-6">
                        Born in Sri Lanka in 1971, he spent his formative years in Lesotho, South Africa. Renowned for his deep love of solitude, practicing intensive meditation in the forests of Sri Lanka and the Himalayas.
                    </p>
                    <Link
                        href="https://srisambuddhamission.org/about/"
                        isExternal
                        showAnchorIcon
                        color="warning"
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};
