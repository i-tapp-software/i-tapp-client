"use client";

import Link from "next/link";
import { AddCircle, Element, Profile2User } from "iconsax-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils/tw";

const sideNavLinks: {
  [key: string]: {
    icon?: React.ReactNode;
    text: string;
    href: string;
  }[];
} = {
  overview: [
    {
      icon: <Element />,
      text: "Dashboard",
      href: "/portal/overview/dashboard",
    },
    {
      icon: <Profile2User />,
      text: "Applicants",
      href: "/portal/overview/applicants",
    },
  ],
  space: [
    {
      icon: <AddCircle />,
      text: "Add new Space",
      href: "/portal/space/add-new-space",
    },
  ],
  candidates: [
    {
      text: "Accepted",
      href: "/portal/candidates/accepted",
    },
    {
      text: "Shortlisted",
      href: "/portal/candidates/shortlisted",
    },
    {
      text: "Saved",
      href: "/portal/candidates/saved",
    },
  ],
};

export function Nav() {
  const pathname = usePathname();

  const parentRoute = pathname.split("/")[2];

  return (
    <div className="hidden lg:flex">
      <nav>
        <ul className="flex flex-col gap-3">
          {sideNavLinks[parentRoute]?.map((link, index) => {
            // if (pathname.startsWith("/portal/candidates")) return;

            return (
              <li
                key={index}
                className={cn(
                  "text-[#282828] text-opacity-70 pl-5 w-[270px] pr-8  py-3 font-bold flex gap-6 text-base items-center",
                  pathname == link.href &&
                    "text-primary bg-secondary border-l-4 border-primary text-opacity-100"
                )}
              >
                {link.icon} <Link href={link.href}>{link.text}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
