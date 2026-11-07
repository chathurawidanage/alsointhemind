import { Layout, Navbar } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import { Footer } from "../components/Footer";
import { FontSizeControl } from "../components/FontSizeControl";

const navbar = (
  <Navbar
    logo={
      <div className="flex flex-row gap-2 items-center">
        <div className="h-[50px] w-[50px] bg-gray-200 rounded-lg mr-2 flex items-center justify-center text-xs text-gray-400">
          Logo
        </div>
        <p className="font-bold text-inherit hidden sm:block">Also in the Mind</p>
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
        docsRepositoryBase="https://github.com/chathurawidanage/alsointhemind"
        footer={<Footer />}
      >
        {children}
      </Layout>
    </>
  );
}
