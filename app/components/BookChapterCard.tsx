"use client";

import Link from "next/link";
import React from "react";
import { leagueSpartan, figTree } from "../fonts";

interface BookChapterCardProps {
    title: React.ReactNode;
    description?: React.ReactNode;
    href: string;
    icon?: React.ReactNode;
}

const SUBDOT_MAP: Record<string, string> = {
    'ṇ': 'n',
    'Ṇ': 'N',
    'ṭ': 't',
    'Ṭ': 'T',
    'ḍ': 'd',
    'Ḍ': 'D',
    'ḷ': 'l',
    'Ḷ': 'L',
    'ṃ': 'm',
    'Ṃ': 'M',
};

function renderWithDiacritics(content: React.ReactNode): React.ReactNode {
    if (typeof content !== "string") return content;
    if (!/[ṇṆṭṬḍḌḷḶṃṂ]/.test(content)) return content;

    const parts = content.split(/([ṇṆṭṬḍḌḷḶṃṂ])/g);
    return parts.map((part, index) => {
        const base = SUBDOT_MAP[part];
        if (base) {
            return (
                <span key={index} className="diacritic-subdot">
                    {base}
                </span>
            );
        }
        return part;
    });
}

export const BookChapterCard = ({ title, description, href, icon }: BookChapterCardProps) => {
    const eventChapter = typeof title === "string" ? title : undefined;

    return (
        <Link
            href={href}
            className="w-full block group no-underline text-inherit"
            data-umami-event="select-chapter"
            data-umami-event-chapter={eventChapter}
        >
            <div className="w-full p-6 rounded-2xl bg-white dark:bg-[#1a1918] border border-gray-200/80 dark:border-neutral-800 shadow-xs hover:border-book-orange/60 dark:hover:border-book-orange/60 hover:shadow-md transition-all">
                <div className="flex gap-4 items-start">
                    {icon && (
                        <div className="text-2xl text-book-orange shrink-0 mt-0.5">
                            {icon}
                        </div>
                    )}
                    <div>
                        <h3 className={`text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-book-orange transition-colors ${leagueSpartan.className}`}>
                            {renderWithDiacritics(title)}
                        </h3>
                        {description && (
                            <p className={`text-gray-600 dark:text-neutral-400 mt-1 text-sm sm:text-base leading-relaxed ${figTree.className}`}>
                                {description}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
};
