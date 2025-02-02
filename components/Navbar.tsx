"use client";

import { Leaf, AlignJustify, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
  activeSection: string;
}

function DropDownMenu() {
  return (
    <div className="flex md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger className="bg-white rounded-md p-2">
          <AlignJustify className="h-5 w-5" />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-white/70">
          <div className="bg-black/20 rounded-sm">
            {["About", "Impact", "Updates", "Team", "Connect"].map((item) => (
              <DropdownMenuItem key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-md flex flex-row justify-evenly items-center border-b-white space-x-2 space-y-2 font-semibold"
                >
                  {item}
                  <ChevronRight />
                </Link>
              </DropdownMenuItem>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export function Navbar({ activeSection }: NavbarProps) {
  const isLight = activeSection === "hero";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-55 ${
        isLight ? "bg-black/15" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="#hero" className="flex items-center space-x-2">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-xl flex flex-row space-x-2 font-bold ${
              isLight ? "text-white " : "text-green-800 hover:text-green-400"
            }`}
          >
            <Leaf className="h-6 w-6 text-2xl" />
            Yuva Pragati
          </motion.span>
        </Link>
        <ul className="hidden md:flex space-x-4">
          {["About", "Impact", "Updates", "Team", "Connect"].map(
            (item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
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
              </motion.li>
            ),
          )}
        </ul>
        <DropDownMenu />
      </div>
    </motion.nav>
  );
}
