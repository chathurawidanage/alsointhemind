"use client";

import { useEffect, useState } from "react";
import { LuType } from "react-icons/lu";

export const FONT_SIZES = [
  { label: "S", value: "0.95rem", title: "Small text" },
  { label: "M", value: "1.125rem", title: "Medium text (Default)" },
  { label: "L", value: "1.25rem", title: "Large text" },
  { label: "XL", value: "1.4rem", title: "Extra large text" },
] as const;

const STORAGE_KEY = "book-font-size-index";
const DEFAULT_INDEX = 1; // "M" (1.125rem)

export function FontSizeControl() {
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(DEFAULT_INDEX);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved !== null) {
      const idx = Number(saved);
      if (idx >= 0 && idx < FONT_SIZES.length) {
        setCurrentIndex(idx);
        document.documentElement.style.setProperty("--book-font-size", FONT_SIZES[idx].value);
        return;
      }
    }
    document.documentElement.style.setProperty("--book-font-size", FONT_SIZES[DEFAULT_INDEX].value);
  }, []);

  const setSize = (index: number) => {
    setCurrentIndex(index);
    document.documentElement.style.setProperty("--book-font-size", FONT_SIZES[index].value);
    localStorage.setItem(STORAGE_KEY, String(index));
  };

  return (
    <div
      role="group"
      aria-label="Adjust book font size"
      className="flex items-center gap-1 rounded-full border border-neutral-200 dark:border-neutral-700 bg-neutral-100/90 dark:bg-neutral-800/90 p-0.5 text-xs backdrop-blur-sm"
    >
      <div
        className="flex items-center px-1.5 text-neutral-500 dark:text-neutral-400 select-none"
        title="Reading font size"
      >
        <LuType className="w-3.5 h-3.5" aria-hidden="true" />
      </div>
      <div className="flex items-center gap-0.5">
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
              className={`min-w-6 h-6 px-1.5 rounded-full transition-all text-[11px] flex items-center justify-center cursor-pointer select-none ${
                isActive
                  ? "bg-book-orange text-white shadow-xs font-semibold"
                  : "text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/70 dark:hover:bg-neutral-700/70"
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

