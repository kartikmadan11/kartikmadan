"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type PublicationProps = {
  title: string;
  type: string;
  venue: string;
  date: string;
  description: string;
  tags: readonly string[];
  link: string;
};

export default function Publication({
  title,
  type,
  venue,
  date,
  description,
  tags,
  link,
}: PublicationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="mb-4 sm:mb-8 last:mb-0"
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block cursor-pointer bg-gray-100 border border-black/5 rounded-lg hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 shadow-lg"
      >
        <div className="pt-6 pb-8 px-6 sm:px-12 sm:py-12 flex flex-col">
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p>
            {type} - <span className="whitespace-nowrap">{venue},</span>{" "}
            <span className="whitespace-nowrap">{date}</span>
          </p>
          <p className="mt-2 mb-4 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </a>
    </motion.div>
  );
}
