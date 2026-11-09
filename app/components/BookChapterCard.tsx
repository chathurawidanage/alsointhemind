"use client";

import Link from "next/link";
import React from "react";
import { leagueSpartan, figTree } from "../fonts";

interface BookChapterCardProps {
    title: string;
    description?: string;
    href: string;
    icon?: React.ReactNode;
}

export const BookChapterCard = ({ title, description, href, icon }: BookChapterCardProps) => {
    return (
        <Link
            href={href}
            className="w-full block group no-underline text-inherit"
            data-umami-event="select-chapter"
            data-umami-event-chapter={title}
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
                            {title}
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
