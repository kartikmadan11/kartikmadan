"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isOnBlogPage = pathname.startsWith("/blog");

  const isLinkActive = (linkName: string) => {
    if (isOnBlogPage) {
      return linkName === "Blog";
    }
    return activeSection === linkName;
  };

  return (
    <header className="z-[999] relative">
      {/* Desktop nav background */}
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[42rem] sm:rounded-full dark:bg-slate-900/90 dark:border-slate-700/50 dark:shadow-slate-900/20"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      {/* Mobile hamburger button */}
      <button
        className="fixed top-4 right-4 z-[1000] sm:hidden p-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-md dark:bg-slate-900/80 dark:border-slate-700"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? (
          <HiX className="text-xl text-gray-700 dark:text-slate-300" />
        ) : (
          <HiMenu className="text-xl text-gray-700 dark:text-slate-300" />
        )}
      </button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[998] bg-white/95 backdrop-blur-md dark:bg-slate-900/95 sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col items-center justify-center h-full gap-1">
              {links.map((link) => (
                <Link
                  key={link.hash}
                  className={clsx(
                    "text-lg px-6 py-3 rounded-full transition-colors duration-200 text-gray-600 hover:text-gray-950 dark:text-slate-400 dark:hover:text-slate-100",
                    {
                      "text-gray-950 bg-gray-100 dark:text-slate-100 dark:bg-slate-700":
                        isLinkActive(link.name),
                    },
                  )}
                  href={link.hash}
                  onClick={() => {
                    setMenuOpen(false);
                    if (link.hash.includes("#")) {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop nav */}
      <nav className="hidden sm:flex fixed top-[1.7rem] left-1/2 -translate-x-1/2 h-[initial] py-0">
        <ul className="flex flex-nowrap items-center justify-center gap-5 text-[0.85rem] font-medium text-gray-500 dark:text-slate-400">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition-colors duration-200 dark:text-slate-400 dark:hover:text-slate-100",
                  {
                    "text-gray-950 dark:text-slate-100": isLinkActive(
                      link.name,
                    ),
                  },
                )}
                href={link.hash}
                onClick={() => {
                  if (!link.hash.includes("#")) {
                    return;
                  }
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {isLinkActive(link.name) && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-slate-700"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
