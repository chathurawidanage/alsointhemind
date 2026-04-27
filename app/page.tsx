"use client"

import { HeroUIProvider } from "@heroui/react";
import { AppNavbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TaglineSection } from "./components/TaglineSection";
import { figTree } from "./fonts";
import { BookDescription } from "./components/BookDescription";
import { MonkProfiles } from "./components/MonkProfiles";
import { TrustSection } from "./components/TrustSection";
import { Footer } from "./components/Footer";
import { BookExcerpt } from "./components/BookExcerpt";
import { BookDiscovery } from "./components/BookDiscovery";
import { BookChapters } from "./components/BookChapters";
import { CTASection } from "./components/CTASection";

export default function Home() {

  return (
    <HeroUIProvider>
      <div className={"flex flex-col " + figTree.className}>
        <AppNavbar />
        <Hero />
        <TaglineSection />
        <BookDescription />
        <MonkProfiles />
        <BookExcerpt />
        {/* <BookDiscovery />
        <BookChapters /> */}
        <CTASection />
        <TrustSection />
        <Footer />
      </div>
    </HeroUIProvider>
  );
}
