"use client";

import { Card, CardHeader, CardBody, CardFooter, Link } from "@heroui/react";
import React from "react";

interface BookChapterCardProps {
    title: string;
    description: string;
    href: string;
    icon?: React.ReactNode;
}

export const BookChapterCard = ({ title, description, href, icon }: BookChapterCardProps) => {
    return (
        <Link href={href} className="w-full">
            <Card className="w-full h-full hover:scale-[1.02] transition-transform cursor-pointer border border-transparent hover:border-book-orange/20">
                <CardHeader className="flex gap-3 px-6 pt-6">
                    {icon && (
                        <div className="text-2xl text-book-orange">
                            {icon}
                        </div>
                    )}
                    <h3 className="text-xl font-bold font-league-spartan">{title}</h3>
                </CardHeader>
                <CardBody className="px-6 pb-6 pt-0">
                    <p className="text-gray-600 font-figtree">{description}</p>
                </CardBody>
            </Card>
        </Link>
    );
};
