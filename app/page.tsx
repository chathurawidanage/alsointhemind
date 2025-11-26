"use client"

import Countdown from "react-countdown";

import { League_Spartan, Libre_Baskerville } from "next/font/google";
import ssmctLogo from "../public/ssmct.png"
import Image from "next/image";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  weight: ["400"],
});

const renderer = ({ days, hours, minutes, seconds, completed }: { days: number; hours: number; minutes: number; seconds: number; completed: boolean }) => {
  if (completed) {
    // Render a completed state
    return null;
  } else {
    // Render a countdown
    return (
      <div className={`flex flex-row gap-4 text-white text-xl sm:text-2xl ${libreBaskerville.className}`}>
        <div className="bg-title-gray/80 rounded-xl px-2 py-4 text-center">
          {days.toString().padStart(2, "0")}
          <div className="text-white text-xs text-center">Days</div>
        </div>
        <div className="bg-title-gray/80 rounded-xl px-2 py-4 text-center">
          {hours.toString().padStart(2, "0")}
          <div className="text-white text-xs text-center">Hours</div>
        </div>
        <div className="bg-title-gray/80 rounded-xl px-2 py-4 text-center">
          {minutes.toString().padStart(2, "0")}
          <div className="text-white text-xs text-center">Minutes</div>
        </div>
        <div className="bg-title-gray/80 rounded-xl px-2 py-4 text-center">
          {seconds.toString().padStart(2, "0")}
          <div className="text-white text-xs text-center">Seconds</div>
        </div>
      </div>
    );
  }
};


export default function Home() {

  return (
    <div className="h-screen w-screen bg-cover bg-center flex flex-col justify-center" style={{ backgroundImage: "url('/alsointhemind.jpg')" }}>
      <div className="px-4 py-8 bg-white/50 backdrop-blur-sm rounded-xl mx-auto flex flex-col gap-4 mx-2 max-w-[90%]">
        <h1 className={`text-5xl sm:text-7xl font-bold text-book-orange uppercase text-center ${leagueSpartan.className}`}>This is also</h1>
        <h2 className={`text-l sm:text-2xl font-bold text-title-gray text-center ${libreBaskerville.className}`}>In The Presence of Venerable Ñāṇavimala Mahāthera</h2>
        <h1 className={`text-5xl sm:text-7xl font-bold text-book-orange uppercase text-center ${leagueSpartan.className}`}>in the mind</h1>
        <h2 className={`text-l sm:text-2xl font-bold text-title-gray text-center ${libreBaskerville.className}`}>A Disciple’s Account, Kept Private for 25 Years</h2>
        <h2 className={`text-title-gray font-bold text-l sm:text-2xl text-center mt-16 ${libreBaskerville.className}`}>Soon to be Revealed</h2>
        <div className="flex justify-center">
          <Countdown date={new Date("2026-01-26").getTime()} className="text-title-gray text-4xl sm:text-5xl" renderer={renderer} />
        </div>
        <div className="flex justify-center flex-col gap-2 items-center mt-16">
          <div>
            <Image src={ssmctLogo} alt="SSMCT Logo" width={50} height={50} />
          </div>
          <div className="text-title-gray text-sm text-center">
            Brought to you by the Sri Sambuddha Mission Charitable Trust
          </div>
        </div>
      </div>
    </div>
  );
}
