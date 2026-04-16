"use client";

import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl?: StaticImageData;
  link?: string;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-4 sm:mb-8 last:mb-0"
    >
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <section className="cursor-pointer bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-10 relative min-h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-10 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 shadow-lg">
            <div className="pt-6 pb-8 px-6 sm:pl-12 sm:pr-4 sm:pt-12 sm:max-w-[50%] flex flex-col sm:group-even:ml-[18rem]">
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
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
            {imageUrl && (
              <Image
                src={imageUrl}
                alt="Project I worked on"
                quality={75}
                sizes="(max-width: 640px) 100vw, 28.25rem"
                loading="lazy"
                className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] h-[20rem] object-cover object-top rounded-t-lg shadow-2xl
                  transition 
                  group-hover:scale-[1.04]
                  group-hover:-translate-x-3
                  group-hover:translate-y-3
                  group-hover:-rotate-2
                  group-even:group-hover:translate-x-3
                  group-even:group-hover:translate-y-3
                  group-even:group-hover:rotate-2
                  group-even:right-[initial] group-even:-left-40"
              />
            )}
          </section>
        </a>
      ) : (
        <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-10 relative min-h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-10 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 shadow-lg">
          <div className="pt-6 pb-8 px-6 sm:pl-12 sm:pr-4 sm:pt-12 sm:max-w-[50%] flex flex-col sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
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
          {imageUrl && (
            <Image
              src={imageUrl}
              alt="Project I worked on"
              quality={75}
              sizes="(max-width: 640px) 100vw, 28.25rem"
              loading="lazy"
              className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] h-[20rem] object-cover object-top rounded-t-lg shadow-2xl
                transition 
                group-hover:scale-[1.04]
                group-hover:-translate-x-3
                group-hover:translate-y-3
                group-hover:-rotate-2
                group-even:group-hover:translate-x-3
                group-even:group-hover:translate-y-3
                group-even:group-hover:rotate-2
                group-even:right-[initial] group-even:-left-40"
            />
          )}
        </section>
      )}
    </motion.div>
  );
}
