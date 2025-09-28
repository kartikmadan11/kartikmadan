"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a <span className="font-medium">Full-Stack Developer</span> living
        in <span className="font-medium">London, United Kingdom</span>. I
        specialize in developing applications using{" "}
        <span className="font-medium">React and Spring Boot</span>, with a
        strong focus on <span className="font-medium">cloud technologies</span>.
        I have a passion for <span className="font-medium">data science</span>{" "}
        and enjoy creating innovative solutions that leverage{" "}
        <span className="font-medium">machine learning</span>. My core stack
        includes{" "}
        <span className="font-medium">
          React, Next.js, Spring Boot, Java, Python, and AWS/GCP
        </span>
        . I am always eager to learn new technologies and tackle challenging
        problems.
      </p>

      <p>
        I also share my knowledge and experiences through writing on{" "}
        <Link href="https://medium.com/@kartikmadan11" target="_blank">
          Medium
        </Link>
        , where I publish articles about cloud technologies, data science and
        everything I find interesting. When I'm not coding, I love{" "}
        <span className="font-medium">playing and watching football</span>. I
        also enjoy exploring new tech trends and contributing to open-source
        projects.
      </p>
    </motion.section>
  );
}
