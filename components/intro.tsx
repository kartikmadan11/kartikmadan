"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import {
  FaGithubSquare,
  FaInstagram,
  FaMedium,
  FaTwitter,
} from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-20 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/kartik.jpg"
              alt="Kartik Madan portrait"
              width={256}
              height={256}
              quality={75}
              priority={true}
              sizes="(max-width: 640px) 192px, 256px"
              className="h-48 w-48 sm:h-64 sm:w-64 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-6 mt-4 px-4 text-base font-normal !leading-[1.5] sm:text-2xl sm:!leading-[1.6] text-gray-700 dark:text-gray-100"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-semibold text-gray-900 dark:text-white">
          Hi! It's me, Kartik Madan.
        </span>{" "}
        I'm a{" "}
        <span className="font-medium dark:text-blue-400">
          Full-Stack Developer
        </span>{" "}
        living in <span className="font-medium">London, United Kingdom</span>. I
        specialize in developing applications using{" "}
        <span className="font-medium dark:text-emerald-400">
          React and Spring Boot
        </span>
        , with a strong focus on{" "}
        <span className="font-medium dark:text-purple-400">
          cloud technologies
        </span>
        . I have a passion for{" "}
        <span className="font-medium dark:text-orange-400">
          data science
        </span>{" "}
        and enjoy creating innovative solutions that leverage{" "}
        <span className="font-medium dark:text-rose-400">
          machine learning
        </span>
        .
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-4 px-4 text-base font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-6 py-2.5 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-800 active:scale-100 transition-all duration-200 shadow-lg hover:shadow-xl dark:bg-slate-800 dark:hover:bg-slate-700"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>

          <a
            className="group bg-white px-6 py-2.5 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-100 transition-all duration-200 cursor-pointer border border-gray-200 shadow-md hover:shadow-lg dark:bg-slate-900 dark:border-slate-700 dark:hover:bg-slate-800"
            href="/Kartik Madan - Resume.pdf"
            download
          >
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>
        </div>

        {/* Social Icons - always horizontal */}
        <div className="flex flex-row items-center justify-center gap-2">
          <a
            className="bg-white p-3 text-gray-700 hover:text-blue-600 flex items-center gap-2 rounded-full focus:scale-105 hover:scale-105 active:scale-100 transition-all duration-200 cursor-pointer border border-gray-200 shadow-md hover:shadow-lg dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:text-blue-400 dark:hover:bg-slate-800"
            href="https://linkedin.com/in/kartikmadan11"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-3 text-gray-700 flex items-center gap-2 text-lg rounded-full focus:scale-105 hover:scale-105 hover:text-gray-900 active:scale-100 transition-all duration-200 cursor-pointer border border-gray-200 shadow-md hover:shadow-lg dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:text-slate-100 dark:hover:bg-slate-800"
            href="https://github.com/kartikmadan11"
            target="_blank"
          >
            <FaGithubSquare />
          </a>

          <a
            className="bg-white p-3 text-gray-700 flex items-center gap-2 text-lg rounded-full focus:scale-105 hover:scale-105 hover:text-blue-600 active:scale-100 transition-all duration-200 cursor-pointer border border-gray-200 shadow-md hover:shadow-lg dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:text-blue-400 dark:hover:bg-slate-800"
            href="https://x.com/kartikmadan11"
            target="_blank"
            title="Follow me on Twitter"
          >
            <FaTwitter />
          </a>

          <a
            className="bg-white p-3 text-gray-700 flex items-center gap-2 text-lg rounded-full focus:scale-105 hover:scale-105 hover:text-green-600 active:scale-100 transition-all duration-200 cursor-pointer border border-gray-200 shadow-md hover:shadow-lg dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:text-green-400 dark:hover:bg-slate-800"
            href="https://kartikmadan.medium.com"
            target="_blank"
            title="Follow me on Medium"
          >
            <FaMedium />
          </a>

          <a
            className="bg-white p-3 text-gray-700 flex items-center gap-2 text-lg rounded-full focus:scale-105 hover:scale-105 hover:text-green-600 active:scale-100 transition-all duration-200 cursor-pointer border border-gray-200 shadow-md hover:shadow-lg dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:text-green-400 dark:hover:bg-slate-800"
            href="https://instagram.com/kartikmadan11"
            target="_blank"
            title="Follow me on Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
