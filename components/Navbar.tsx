"use client";

import { Leaf, AlignJustify, ChevronRight } from "lucide-react";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

interface NavbarProps {
  activeSection: string;
}

function DropDownMenu() {
  return (
    <div className="flex md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button
            variant={"default"}
            className="bg-white/90 text-black font-sans"
          >
            <AlignJustify className="h-8 w-8" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Nav Through</DropdownMenuLabel>
          <DropdownMenuSeparator />

          {["About", "Impact", "Updates", "Team", "Connect"].map((item) => (
            <DropdownMenuItem key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className={`text-md flex flex-row justify-evenly items-center  space-y-2 font-semibold`}
              >
                <ChevronRight />
                {item}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export function Navbar({ activeSection }: NavbarProps) {
  const isLight = activeSection === "hero";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isLight ? "bg-black/15" : "bg-white"}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="#hero" className={`flex items-center space-x-2`}>
          <span
            className={`text-xl flex flex-row space-x-2 font-bold ${isLight ? "text-white " : "text-green-800 hover:text-green-400"}`}
          >
            <Leaf className={`h-6 w-6 text-2xl `} />
            AgriRural
          </span>
        </Link>
        <ul className="hidden md:flex space-x-4">
          {["About", "Impact", "Updates", "Team", "Connect"].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-semibold ${
                  isLight
                    ? "text-white hover:text-green-400"
                    : "text-green-800 hover:text-green-400"
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <DropDownMenu />
      </div>
    </nav>
  );
}
