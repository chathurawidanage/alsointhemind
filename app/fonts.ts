import { League_Spartan, Libre_Baskerville, Figtree } from "next/font/google";

export const leagueSpartan = League_Spartan({
    subsets: ["latin", "latin-ext"],
    display: "swap",
});

export const libreBaskerville = Libre_Baskerville({
    weight: ["400", "700"],
    style: ["normal", "italic"],
    subsets: ["latin", "latin-ext"],
    display: "swap",
});

export const figTree = Figtree({
    subsets: ["latin", "latin-ext"],
    display: "swap",
});
