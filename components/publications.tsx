"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { publicationsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { LuArrowUpRight, LuBookOpenText, LuLightbulb } from "react-icons/lu";
import { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  patent: LuLightbulb,
  paper: LuBookOpenText,
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

      <ul className="flex flex-col gap-4 sm:gap-6">
        {publicationsData.map((publication, index) => {
          const Icon = iconMap[publication.icon];
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
                className="group flex gap-4 rounded-lg border border-black/5 bg-gray-100 p-5 text-left shadow-lg transition hover:bg-gray-200 sm:gap-5 sm:p-8 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              >
                <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-2xl text-gray-700 sm:flex dark:bg-white/[0.15] dark:text-white/80">
                  {Icon ? <Icon /> : null}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70">
                      {publication.type}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-white/50">
                      {publication.role} · {publication.date}
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-semibold leading-snug">
                    {publication.title}
                    <LuArrowUpRight className="ml-1 inline-block align-[-0.1em] text-lg text-gray-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gray-700 dark:text-white/40 dark:group-hover:text-white/80" />
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-white/50">
                    {publication.venue}
                  </p>
                  <p className="mt-3 leading-relaxed text-gray-700 dark:text-white/70">
                    {publication.description}
                  </p>
                </div>
              </a>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
