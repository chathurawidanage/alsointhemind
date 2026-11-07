import { Layout, Navbar } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import { Footer } from "../components/Footer";
import { FontSizeControl } from "../components/FontSizeControl";
import Image from "next/image";
import ssmctLogo from "../../public/ssmct.png";
import { leagueSpartan } from "../fonts";

const navbar = (
  <Navbar
    logoLink="/"
    logo={
      <div className="flex items-center gap-2.5">
        <div className="relative w-8 h-8 shrink-0">
          <Image
            src={ssmctLogo}
            alt="Sri Sambuddha Mission Logo"
            fill
            sizes="32px"
            className="object-contain"
          />
        </div>
        <span className={`font-bold text-base sm:text-lg tracking-tight text-gray-900 dark:text-white ${leagueSpartan.className}`}>
          Also in the Mind
        </span>
      </div>
    }
  >
    <FontSizeControl />
  </Navbar>
);

export default async function BookLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `try{const i=localStorage.getItem("book-font-size-index");if(i!==null){const s=["0.95rem","1.125rem","1.25rem","1.4rem"][i];if(s)document.documentElement.style.setProperty("--book-font-size",s);}}catch(e){}`,
        }}
      />
      <Layout
        navbar={navbar}
        pageMap={await getPageMap()}
        editLink={null}
        feedback={{ content: null }}
        copyPageButton={false}
        sidebar={{ defaultMenuCollapseLevel: 1, defaultOpen: true }}
        toc={{ title: "Contents", backToTop: "Back to top" }}
        footer={<Footer />}
      >
        {children}
      </Layout>
    </>
  );
}
