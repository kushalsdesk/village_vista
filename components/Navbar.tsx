import Link from "next/link";
import { Leaf } from "lucide-react";

export function Navbar() {
  return (
    <nav className="bg-natural-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Leaf className="h-6 w-6" />
          <span className="text-xl font-bold">Village Vista</span>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="#about" className="hover:text-natural-200">
              About
            </Link>
          </li>
          <li>
            <Link href="#impact" className="hover:text-natural-200">
              Impact
            </Link>
          </li>
          <li>
            <Link href="#updates" className="hover:text-natural-200">
              Updates
            </Link>
          </li>
          <li>
            <Link href="#team" className="hover:text-natural-200">
              Team
            </Link>
          </li>
          <li>
            <Link href="#connect" className="hover:text-natural-200">
              Connect
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
