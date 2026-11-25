import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Downloads & Companion Books | This Is Also in the Mind",
    description: "Download 'This Is Also in the Mind' (PDF & EPUB) and companion volumes including Recommended Sutta Readings and Venerable Nyanatiloka's 'The Word of the Buddha'.",
    openGraph: {
        title: "Downloads & Companion Books | This Is Also in the Mind",
        description: "PDF and EPUB editions of 'This Is Also in the Mind' and companion canonical study guides.",
        type: "website",
        images: [
            {
                url: "/book_cover_v3.png",
                width: 7336,
                height: 10452,
                alt: "This Is Also in the Mind Book Downloads",
            },
        ],
    },
};

export default function DownloadLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
