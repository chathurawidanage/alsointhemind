"use client"

import { HeroUIProvider } from "@heroui/react";
import { AppNavbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { figTree } from "./fonts";
import { BookDescription } from "./components/BookDescription";
import { MonkProfiles } from "./components/MonkProfiles";
import { TrustSection } from "./components/TrustSection";

export default function Home() {

  return (
    <HeroUIProvider>
      <div className={"relative bg-cover bg-center bg-no-repeat flex flex-col " + figTree.className} style={{ backgroundImage: "url('/alsointhemind.jpg')" }}>
        <div className="absolute inset-0 bg-white/60"></div>
        <AppNavbar />
        <div className="relative z-10">
          <Hero />
          <BookDescription />
          <MonkProfiles />
          <TrustSection />
        </div>
      </div>
    </HeroUIProvider>
  );
}
