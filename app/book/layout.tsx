import { Layout, Navbar } from "nextra-theme-docs";
import { Banner, Button } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Footer } from "../components/Footer";

// const banner = <Banner storageKey="community-join-banner">
//   Join our community or newsletter call to action (to be changed). <Button variant="outline">Join now!</Button>
// </Banner>
const navbar = (
  <Navbar
    logo={<b>Also in the Mind</b>} />
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
