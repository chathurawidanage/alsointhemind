import { Banner } from "nextra/components";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import 'nextra-theme-docs/style.css'



const banner = <Banner storageKey="some-key">This is also in the mind is released 🎉</Banner>
const navbar = (
  <Navbar
    logo={<b>Also in the Mind</b>}
  // ... Your additional navbar options
  />
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
