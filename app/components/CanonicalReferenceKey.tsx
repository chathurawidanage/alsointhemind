import React from "react";
import { LuBookKey } from "react-icons/lu";
import { leagueSpartan, figTree } from "../fonts";

interface CanonicalReference {
  abbr: string;
  pali: string;
  english: string;
}

const CANONICAL_REFERENCES: CanonicalReference[] = [
  { abbr: "DN", pali: "Dīgha Nikāya", english: "Long Discourses" },
  { abbr: "MN", pali: "Majjhima Nikāya", english: "Middle Length Discourses" },
  { abbr: "SN", pali: "Saṁyutta Nikāya", english: "Connected Discourses" },
  { abbr: "AN", pali: "Aṅguttara Nikāya", english: "Numerical Discourses" },
  { abbr: "Snp", pali: "Sutta Nipāta", english: "Group of Discourses" },
  { abbr: "Dhp", pali: "Dhammapada", english: "Verses of the Dhamma" },
  { abbr: "Ud", pali: "Udāna", english: "Inspired Utterances" },
  { abbr: "Iti", pali: "Itivuttaka", english: "As It Was Said" },
  { abbr: "Thag", pali: "Theragāthā", english: "Verses of the Elder Monks" },
  { abbr: "Thig", pali: "Therīgāthā", english: "Verses of the Elder Nuns" },
];

export function CanonicalReferenceKey() {
  return (
    <div className={`my-8 not-prose rounded-2xl bg-stone-50/80 dark:bg-[#1a1918] border border-stone-200/80 dark:border-neutral-800 p-5 sm:p-7 shadow-xs ${figTree.className}`}>
      <div className="flex items-start sm:items-center gap-3 pb-4 border-b border-stone-200/70 dark:border-neutral-800">
        <div className="w-10 h-10 rounded-xl bg-book-orange/10 text-book-orange flex items-center justify-center shrink-0 border border-book-orange/20">
          <LuBookKey className="w-5 h-5" />
        </div>
        <div>
          <h3 className={`text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 tracking-tight ${leagueSpartan.className}`}>
            Canonical Reference Key
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-neutral-400 mt-0.5">
            Key to abbreviations used for Sutta citations throughout this book
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mt-4">
        {CANONICAL_REFERENCES.map((item) => (
          <div
            key={item.abbr}
            className="flex items-center gap-3.5 p-3 rounded-xl bg-white dark:bg-neutral-900/60 border border-gray-200/70 dark:border-neutral-800/80 hover:border-book-orange/40 dark:hover:border-book-orange/40 transition-colors"
          >
            <span className="inline-flex items-center justify-center font-mono font-bold text-xs tracking-wider px-2.5 py-1.5 rounded-lg bg-book-orange/10 text-book-orange border border-book-orange/20 shrink-0 min-w-[3.25rem] text-center">
              {item.abbr}
            </span>
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 italic">
                {item.pali}
              </span>
              <span className="text-xs text-gray-500 dark:text-neutral-400">
                {item.english}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

