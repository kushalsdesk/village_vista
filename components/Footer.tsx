import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-midnight-950 py-8 rounded-t-md">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-natural-200">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-natural-400" />
                <a
                  href="mailto:info@agriruraldev.com"
                  className="text-natural-400 hover:text-natural-200 transition-colors"
                >
                  info@agriruraldev.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-natural-400" />
                <a
                  href="tel:+15551234567"
                  className="text-natural-400 hover:text-natural-200 transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-natural-400" />
                <span className="text-natural-400">123 Rural Road, CA</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-natural-200">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-natural-400 hover:text-natural-200 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-natural-400 hover:text-natural-200 transition-colors"
                >
                  Our Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/impact"
                  className="text-natural-400 hover:text-natural-200 transition-colors"
                >
                  Our Impact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-natural-200">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-natural-400 hover:text-natural-200 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-natural-400 hover:text-natural-200 transition-colors"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-natural-400 hover:text-natural-200 transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-natural-200">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-natural-400 hover:text-natural-200 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-natural-400 hover:text-natural-200 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="text-natural-400 hover:text-natural-200 transition-colors"
                >
                  Donation Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-midnight-800 text-center text-sm text-natural-500">
          © {new Date().getFullYear()} Agri Rural Development. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
