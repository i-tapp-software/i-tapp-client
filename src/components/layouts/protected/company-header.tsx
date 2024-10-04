"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Notification } from "iconsax-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Logo } from "@/components/logo";
import { Wrapper } from "@/components/wrapper";
import { MobileNav } from "./mobile-nav";
import { cn } from "@/lib/utils/tw";

export const navLinks: { text: string; href: string }[] = [
  {
    text: "Overview",
    href: "/portal/overview/dashboard",
  },
  {
    text: "IT Space",
    href: "/portal/space/add-new-space",
  },
  {
    text: "Candidates",
    href: "/portal/candidates/accepted",
  },
];

export function CompanyHeader() {
  const pathname = usePathname();

  const parentRoute = pathname.split("/")[2];

  return (
    <header className="w-full fixed px-4 top-0 bg-white border-b z-10 border-grey-5">
      <Wrapper className="flex items-center h-16 justify-between !py-6 md:px-0 touch:px-0">
        <Link href="/portal/overview/dashboard">
          <Logo />
        </Link>
        {/* Navigation Links */}
        <nav className="items-center gap-14 hidden md:flex">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={cn(
                "border-b-4 border-transparent text-base text-primary pb-3",
                link.href.includes(parentRoute) && "border-primary text-black"
              )}
            >
              {link.text}
            </Link>
          ))}
        </nav>
        {/* Action Buttons */}
        <div className="hidden md:flex gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Notification
                  size={44}
                  className=" border border-[#C9C9DA] rounded-full p-2"
                />
              </TooltipTrigger>
              <TooltipContent className="px-0">
                <p className="px-6 py-5 border-b border-black flex items-center gap-2">
                  <Notification
                    size={24}
                    className=" border border-[#C9C9DA] rounded-full p-2"
                  />
                  You've just been accepted by Chenotech Nigeria Limited
                </p>
                <p className="px-6 py-5 border-b border-black flex items-center gap-2">
                  <Notification
                    size={24}
                    className=" border border-[#C9C9DA] rounded-full p-2"
                  />
                  You've just been accepted by Chenotech Nigeria Limited
                </p>
                <Link href="/notifications">
                  <p className="px-10 py-2">See all notifications</p>
                </Link>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Link href="/portal/profile">
            <Image
              src="/applicant.png"
              alt="applicant"
              width={44}
              height={44}
              className=" rounded-full inline-block"
            />
          </Link>
        </div>

        {/* Mobile Nav */}
        <MobileNav />
      </Wrapper>
    </header>
  );
}
