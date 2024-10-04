"use client";

import Link from "next/link";
import { AddCircle, Element, Profile2User, BoxAdd } from "iconsax-react";
import { usePathname } from "next/navigation";
import { fetchCompanyJobs } from "@/api/actions/auth";
import { useGlobal } from "@/context/GlobalContext";

import { useEffect } from "react";

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
  const { companyJobs, setCompanyJobs } = useGlobal();
  const pathname = usePathname();
  const parentRoute = pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCompanyJobs();
        setCompanyJobs(response?.data);
      } catch (error) {
        console.error("Failed to fetch company jobs:", error);
      }
    };

    fetchData();
  }, [setCompanyJobs]);

  return (
    <div className="hidden lg:flex">
      <nav>
        <ul className="flex flex-col gap-3">
          {sideNavLinks[parentRoute]?.map((link, index) => (
            <li
              key={index}
              className={cn(
                "text-[#282828] text-opacity-70 pl-5 w-[270px] pr-8 py-3 font-bold flex gap-6 text-base items-center",
                pathname == link.href &&
                  "text-primary bg-secondary border-l-4 border-primary text-opacity-100"
              )}
            >
              {link.icon} <Link href={link.href}>{link.text}</Link>
            </li>
          ))}

          {/* Space Section */}
          {parentRoute === "space" && (
            <>
              {/* Conditionally render based on whether there are jobs */}
              {companyJobs?.length ? (
                <>
                  {/* Render each job as an "Edit Space" link */}
                  {companyJobs.map((job, index) => (
                    <li
                      key={index}
                      className={cn(
                        "text-[#282828] text-opacity-70 pl-5 w-[270px] pr-8 py-3 font-bold flex gap-6 text-base items-center",
                        pathname == `/portal/space/${job.id}` &&
                          "text-primary bg-secondary border-l-4 border-primary text-opacity-100"
                      )}
                    >
                      <BoxAdd />{" "}
                      <Link href={`/portal/space/${job.id}`}>
                        Edit {job.title}
                      </Link>
                    </li>
                  ))}
                  {/* "Add new Space" link if jobs exist */}
                  <li
                    className={cn(
                      "text-[#282828] text-opacity-70 pl-5 w-[270px] pr-8 py-3 font-bold flex gap-6 text-base items-center",
                      pathname == "/portal/space/add-new-space" &&
                        "text-primary bg-secondary border-l-4 border-primary text-opacity-100"
                    )}
                  >
                    <AddCircle />{" "}
                    <Link href="/portal/space/add-new-space">
                      Add new Space
                    </Link>
                  </li>
                </>
              ) : (
                /* Render "Create Space" if no jobs exist */
                <li
                  className={cn(
                    "text-[#282828] text-opacity-70 pl-5 w-[270px] pr-8 py-3 font-bold flex gap-6 text-base items-center",
                    pathname == "/portal/space/create-space" &&
                      "text-primary bg-secondary border-l-4 border-primary text-opacity-100"
                  )}
                >
                  <AddCircle />{" "}
                  <Link href="/portal/space/create-space">Create Space</Link>
                </li>
              )}
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}
