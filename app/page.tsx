"use client"

import { League_Spartan, Libre_Baskerville, Figtree } from "next/font/google";
import ssmctLogo from "../public/ssmct.png"
import background from "../public/alsointhemind.jpg"
import book3d from "../public/book_3d.png"
import Image from "next/image";
import { HeroUIProvider, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const leagueSpartan = League_Spartan({
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  weight: ["400"],
});

const figTree = Figtree({
  weight: ["400"],
});

export default function Home() {

  return (
    <HeroUIProvider>
      <div className={"relative bg-cover bg-center bg-no-repeat flex flex-col " + figTree.className} style={{ backgroundImage: "url('/alsointhemind.jpg')" }}>
        <div className="absolute inset-0 bg-white/60"></div>
        <Navbar className="fixed mt-4 rounded-xl max-w-[calc(100%-var(--spacing)*8)] mx-auto" isBordered>
          <NavbarBrand>
            <Image src={ssmctLogo} alt="SSMCT Logo" height={50} width={50} />
            <p className="font-bold text-inherit">Also in the Mind</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link color="foreground" href="#">
                Join Community
              </Link>
            </NavbarItem>
            <NavbarItem >
              <Link href="#" color="foreground">
                About
              </Link>
            </NavbarItem>
            <NavbarItem >
              <Link href="#" color="foreground">
                Download
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem>
              <Button as={Link} color="default" className="bg-book-orange text-white" href="#" variant="solid">
                Read Online
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
        <div className="relative z-10">
          <div className="mt-32">
            <div className="px-6 py-8 rounded-xl mx-auto flex flex-col gap-4 mx-2 max-w-[90%]">
              <h1 className={`text-5xl sm:text-7xl md:text-8xl text-shadow-lg  font-bold text-book-orange uppercase text-center ${leagueSpartan.className}`}>This is also</h1>
              <h2 className={`text-l sm:text-2xl font-bold text-title-gray text-center ${libreBaskerville.className}`}>In The Presence of Venerable Ñāṇavimala Mahāthera</h2>
              <h1 className={`text-5xl sm:text-7xl text-shadow-lg md:text-8xl font-bold text-book-orange uppercase text-center ${leagueSpartan.className}`}>in the mind</h1>
              <h2 className={`text-l sm:text-2xl font-bold text-title-gray text-center ${libreBaskerville.className}`}>A Disciple’s Account, Kept Private for 25 Years</h2>
              <h2 className={`text-title-gray font-bold text-l sm:text-2xl text-center mt-16 ${figTree.className}`}>Available Now!</h2>
              <div className="flex flex-row gap-8 justify-center mt-16">
                <Button size="lg" as={Link} href="#" variant="solid" className="bg-book-orange text-white">
                  Read Online
                </Button>
                <Dropdown>
                  <DropdownTrigger>
                    <Button size="lg" variant="solid" color="warning" endContent={<MdOutlineKeyboardArrowDown />}>Download</Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="pdf">PDF</DropdownItem>
                    <DropdownItem key="epub">EPUB</DropdownItem>
                    <DropdownItem key="mobi">MOBI</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="mt-16 bg-white p-8">
            <div className="max-w-[1024px] mx-auto flex flex-col-reverse md:flex-row gap-4 flex-wrap-reverse">
              <div className="md:flex-1">
                <h2 className="text-2xl font-bold mb-4">A Rare Glimpse Into the Living Heart of the Buddha's Teaching</h2>
                <p>
                  This Is Also in the Mind is a profound and intimate record of a disciple’s seven-year training under Venerable Ñāṇavimala Mahāthera—a legendary wandering monk whose life embodied the Buddha’s path with uncompromising simplicity and purity. Kept private for twenty-five years, these teachings reveal a direct, person-to-person transmission rarely accessible in the modern world.
                </p>
                <p>
                  Through handwritten notes, personal encounters, and vivid reflections, this book opens a doorway into a nearly vanished tradition—one grounded not in ritual or philosophy, but in the Buddha’s original words and the lived reality of practice. It is both an inspiring story of a disciple shaped by a noble teacher and a guiding manual for those seeking authentic, practical Dhamma rooted in the Suttas.
                </p>
                <p>
                  In an age of noise, distraction, and spiritual dilution, This Is Also in the Mind is a reminder of what is possible when the path is lived with clarity, courage, and unwavering commitment.
                </p>
              </div>
              <div className="md:flex-1 justify-center flex items-center h-auto">
                <Image src={book3d} alt="Also in the Mind" className="md:w-[70%] md:h-auto h-[200px] w-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroUIProvider>
  );
}
