"use client";

import React from "react";
import { motion } from "framer-motion";
import { blogData } from "@/lib/data";
import Link from "next/link";
import SectionHeading from "./section-heading";

export default function BlogList() {
  return (
    <section className="mb-28 max-w-[53rem] scroll-mt-28 w-full" id="blog">
      <SectionHeading>My Blog</SectionHeading>
      <motion.p
        className="text-center text-gray-700 dark:text-white/70 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Thoughts on full-stack development, data science and everything I find
        interesting.
      </motion.p>
      <div className="grid gap-6">
        {blogData.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <Link href={`/blog/${post.id}`}>
              <div className="bg-white dark:bg-white/10 rounded-lg border border-black/[0.1] dark:border-white/[0.2] p-6 hover:bg-gray-50 dark:hover:bg-white/[0.15] transition-colors cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                      {post.title}
                    </h2>
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-white/70 mb-3">
                      <span>{post.publishedAt}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full text-xs">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-white/80 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/70 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center mt-4 text-blue-600 dark:text-blue-400 font-medium text-sm">
                  <span className="group-hover:translate-x-1 transition-transform">
                    Read more →
                  </span>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
