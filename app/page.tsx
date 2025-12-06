"use client"

import { HeroUIProvider } from "@heroui/react";
import { AppNavbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { figTree } from "./fonts";
import { BookDescription } from "./components/BookDescription";
import { MonkProfiles } from "./components/MonkProfiles";
import { TrustSection } from "./components/TrustSection";
import { WordsFromMasters } from "./components/WordsFromMasters";
import { Footer } from "./components/Footer";

export default function Home() {

  return (
    <HeroUIProvider>
      <div className={"flex flex-col " + figTree.className}>
        <AppNavbar />
        <Hero />
        <BookDescription />
        <MonkProfiles />
        <WordsFromMasters />
        <TrustSection />
        <Footer />
      </div>
    </HeroUIProvider>
  );
}
