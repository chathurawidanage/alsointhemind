import { Layout, Navbar } from "nextra-theme-docs";
import { Banner, Button } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Footer } from "../components/Footer";

// const banner = <Banner storageKey="community-join-banner">
//   Join our community or newsletter call to action (to be changed). <Button variant="outline">Join now!</Button>
// </Banner>
const navbar = (
  <Navbar
    logo={<div className="flex flex-row gap-2 items-center">
      <div className="h-[50px] w-[50px] bg-gray-200 rounded-lg mr-2 flex items-center justify-center text-xs text-gray-400">Logo</div>
      <p className="font-bold text-inherit hidden sm:block">Also in the Mind</p>
    </div>} />
)

export default async function BookLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout
      // banner={banner}
      navbar={navbar}
      pageMap={await getPageMap()}
      docsRepositoryBase="https://github.com/chathurawidanage/alsointhemind"
      footer={<Footer />}>
      {children}
    </Layout>
  );
}
