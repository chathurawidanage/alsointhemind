import type { Metadata } from "next";
import { figTree, libreBaskerville } from "./fonts";
import "./globals.css";
import { Head } from "nextra/components";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://alsointhemind.com"),
  title: "This Is Also in the Mind | In The Presence of Venerable Ñāṇavimala Mahāthera",
  description: "A Disciple's Training, Kept Private for 25 Years. The life and teachings of Venerable Ñāṇavimala Mahāthera, preserved by Venerable Bambalapitiye Gnanaloka Thero.",
  openGraph: {
    title: "This Is Also in the Mind",
    description: "In The Presence of Venerable Ñāṇavimala Mahāthera — A Disciple's Training, Kept Private for 25 Years",
    type: "website",
    images: [
      {
        url: "/book_cover.png",
        width: 1500,
        height: 2250,
        alt: "This Is Also in the Mind Book Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "This Is Also in the Mind",
    description: "In The Presence of Venerable Ñāṇavimala Mahāthera — A Disciple's Training, Kept Private for 25 Years",
    images: ["/book_cover.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
      dir="ltr"
      suppressHydrationWarning>
      <Head>
        <script
          defer
          src="https://analytics.srisambuddhamission.org/script.js"
          data-website-id="5c213187-77fe-4ba2-a614-a596bb19dd6c"
        />
      </Head>
      <body
        className={`${figTree.className} ${libreBaskerville.variable} antialiased bg-white dark:bg-[#111111] text-gray-800 dark:text-gray-100`}>

        {children}
      </body>
    </html>
  );
}
