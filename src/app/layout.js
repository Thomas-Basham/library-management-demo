import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Library Management App",
  description:
    "Our wonderful library management system that manages our library.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-100 bg-emerald-800">
          <nav className="flex justify-center w-100 ">
            <Link
              className="m-1 text-emerald-300 hover:text-emerald-600"
              href="/"
            >
              Home
            </Link>
            <Link
              className="m-1 text-emerald-300 hover:text-emerald-600"
              href="/management"
            >
              Manage Library
            </Link>
            <Link
              className="m-1 text-emerald-300 hover:text-emerald-600"
              href="/about"
            >
              About
            </Link>
          </nav>
        </header>
        {children}
        <footer className="text-center">&copy; Codex January Cohort</footer>
      </body>
    </html>
  );
}
