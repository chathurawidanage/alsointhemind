import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Button } from "nextra/components";
import { getPageMap } from "nextra/page-map";

const banner = <Banner storageKey="community-join-banner">
  Join our community or newsletter call to action (to be changed). <Button variant="outline">Join now!</Button>
</Banner>
const navbar = (
  <Navbar
    logo={<b>Also in the Mind</b>} />
)
const footer = <Footer>CC BY-NC-ND 4.0 {new Date().getFullYear()} © Sri Sambuddha Mission Charitable Trust.</Footer>

export default async function BookLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout
      banner={banner}
      navbar={navbar}
      pageMap={await getPageMap()}
      docsRepositoryBase="https://github.com/chathurawidanage/alsointhemind"
      footer={footer}>
      {children}
    </Layout>
  );
}
