"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { publicationsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import clsx from "clsx";
import { LuArrowUpRight, LuBookOpenText, LuLightbulb } from "react-icons/lu";
import { IconType } from "react-icons";

// Each kind of publication gets its own icon and accent colour.
const kindStyles: Record<
  string,
  { Icon: IconType; tile: string; label: string }
> = {
  patent: {
    Icon: LuLightbulb,
    tile: "bg-amber-50 text-amber-600 ring-amber-200/70 dark:bg-amber-400/10 dark:text-amber-300 dark:ring-amber-400/20",
    label: "text-amber-700 dark:text-amber-300",
  },
  paper: {
    Icon: LuBookOpenText,
    tile: "bg-indigo-50 text-indigo-600 ring-indigo-200/70 dark:bg-indigo-400/10 dark:text-indigo-300 dark:ring-indigo-400/20",
    label: "text-indigo-700 dark:text-indigo-300",
  },
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export default function Publications() {
  const { ref } = useSectionInView("Publications", 0.5);

  return (
    <section
      id="publications"
      ref={ref}
      className="mb-28 w-full max-w-[42rem] scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>My publications</SectionHeading>
      <p className="mb-12 -mt-4 text-center text-gray-600 dark:text-white/60">
        Research and inventions I&apos;ve contributed to.
      </p>

      <ul className="flex flex-col gap-5 sm:gap-6">
        {publicationsData.map((publication, index) => {
          const { Icon, tile, label } = kindStyles[publication.kind];
          return (
            <motion.li
              key={publication.title}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-black/[0.06] bg-white p-6 text-left shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-16px_rgba(0,0,0,0.16)] outline-none transition duration-300 hover:-translate-y-1 hover:border-black/10 hover:shadow-[0_2px_4px_rgba(0,0,0,0.04),0_24px_48px_-20px_rgba(0,0,0,0.24)] focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 sm:p-8 dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/[0.08] dark:focus-visible:ring-white/40 dark:focus-visible:ring-offset-slate-900"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={clsx(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xl ring-1 ring-inset",
                      tile,
                    )}
                  >
                    <Icon />
                  </span>
                  <span
                    className={clsx(
                      "text-xs font-semibold uppercase tracking-[0.15em]",
                      label,
                    )}
                  >
                    {publication.type}
                  </span>
                  <span className="ml-auto shrink-0 text-sm tabular-nums text-gray-400 dark:text-white/40">
                    {publication.date}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold leading-snug tracking-tight text-gray-900 dark:text-white">
                  {publication.title}
                  <LuArrowUpRight className="ml-1 inline-block align-[-0.1em] text-lg text-gray-400 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gray-700 dark:text-white/40 dark:group-hover:text-white/80" />
                </h3>
                <p className="mt-1.5 text-sm text-gray-500 dark:text-white/50">
                  <span className="font-medium text-gray-700 dark:text-white/75">
                    {publication.role}
                  </span>
                  {" · "}
                  {publication.venue}
                </p>

                <p className="mt-4 leading-relaxed text-gray-600 dark:text-white/70">
                  {publication.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {publication.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-white/10 dark:text-white/70"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </a>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
