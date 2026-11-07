"use client";

import { HeroUIProvider } from "@heroui/react";
import { AppNavbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TaglineSection } from "./components/TaglineSection";
import { BookDescription } from "./components/BookDescription";
import { BookDiscovery } from "./components/BookDiscovery";
import { MonkProfiles } from "./components/MonkProfiles";
import { BookExcerpt } from "./components/BookExcerpt";
import { BookChapters } from "./components/BookChapters";
import { CTASection } from "./components/CTASection";
import { TrustSection } from "./components/TrustSection";
import { Footer } from "./components/Footer";
import { figTree } from "./fonts";

export default function Home() {
  return (
    <HeroUIProvider>
      <div className={`flex flex-col min-h-screen bg-white ${figTree.className}`}>
        <AppNavbar />
        <main>
          <Hero />
          <TaglineSection />
          <BookDescription />
          <BookDiscovery />
          <MonkProfiles />
          <BookExcerpt />
          <BookChapters />
          <CTASection />
          <TrustSection />
        </main>
        <Footer />
      </div>
    </HeroUIProvider>
  );
}
