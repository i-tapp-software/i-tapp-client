"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "iconsax-react";
import { useState } from "react";
import { useGlobal } from "@/context/GlobalContext";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { navLinks } from "./header";

export function MobileNav() {
  const [open, setOpen] = useState<boolean>(false);

  const { students } = useGlobal();
  const name = students.firstName + " " + students.lastName;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="md:hidden">
        <Menu size={24} />
      </SheetTrigger>
      <SheetContent className="w-full max-w-[300px] py-16 flex flex-col  gap-8 md:hidden">
        <Link href="/portal/profile">
          <div className="">
            <Image
              src={"/applicant.png"}
              alt="applicant"
              width={48}
              height={48}
              className=" rounded-full inline-block"
            />
            <span className="pl-2">{name}</span>
          </div>
        </Link>

        <nav className="flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.text}
              href={link.href}
              className="text-base text-black"
              onClick={() => setOpen(false)}
            >
              {link.text}
            </Link>
          ))}
          <div>
            <Button type="submit">Logout</Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
