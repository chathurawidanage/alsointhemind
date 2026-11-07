"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { LuType } from "react-icons/lu";

export const FONT_SIZES = [
  { label: "S", value: "0.95rem", title: "Small text" },
  { label: "M", value: "1.125rem", title: "Medium text (Default)" },
  { label: "L", value: "1.25rem", title: "Large text" },
  { label: "XL", value: "1.4rem", title: "Extra large text" },
] as const;

const STORAGE_KEY = "book-font-size-index";
const DEFAULT_INDEX = 1; // "M" (1.125rem)

export function FontSizeControl({ className = "" }: { className?: string }) {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const [currentIndex, setCurrentIndex] = useState(() => {
    if (typeof window === "undefined") return DEFAULT_INDEX;
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved !== null) {
      const idx = Number(saved);
      if (idx >= 0 && idx < FONT_SIZES.length) return idx;
    }
    return DEFAULT_INDEX;
  });

  useEffect(() => {
    document.documentElement.style.setProperty("--book-font-size", FONT_SIZES[currentIndex].value);
  }, [currentIndex]);

  const setSize = (index: number) => {
    setCurrentIndex(index);
    document.documentElement.style.setProperty("--book-font-size", FONT_SIZES[index].value);
    localStorage.setItem(STORAGE_KEY, String(index));
  };

  return (
    <div
      role="group"
      aria-label="Adjust book font size"
      className={`flex items-center justify-between md:justify-start h-[36px] md:h-[34px] px-2 md:px-1.5 gap-1 rounded-lg bg-black/[.05] dark:bg-gray-50/10 border border-black/5 dark:border-white/5 text-xs transition-all w-full md:w-auto ${className}`}
    >
      <div
        className="flex items-center gap-1.5 px-1 text-gray-500 dark:text-gray-400 select-none"
        title="Reading font size"
      >
        <LuType className="w-3.5 h-3.5" aria-hidden="true" />
        <span className="md:hidden text-[11px] font-medium text-gray-500 dark:text-gray-400">Text Size</span>
      </div>
      <div className="flex items-center gap-1 md:gap-0.5">
        {FONT_SIZES.map((size, idx) => {
          const isActive = mounted && currentIndex === idx;
          return (
            <button
              key={size.label}
              type="button"
              onClick={() => setSize(idx)}
              title={size.title}
              aria-label={size.title}
              aria-pressed={isActive}
              className={`min-w-[26px] md:min-w-[22px] h-[26px] md:h-[22px] px-2 md:px-1.5 rounded-md transition-all text-xs flex items-center justify-center cursor-pointer select-none font-medium ${
                isActive
                  ? "bg-book-orange text-white shadow-xs font-semibold"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10"
              }`}
            >
              {size.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
