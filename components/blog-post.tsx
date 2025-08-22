"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import ReactMarkdown from "react-markdown";

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    publishedAt: string;
    readTime: string;
    tags: string[];
    category: string;
  };
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="mb-28 max-w-[50rem] w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Back button */}
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mb-8 group"
        >
          <BsArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to blog
        </Link>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-white/70 mb-4">
            <span>{post.publishedAt}</span>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-lg text-gray-700 dark:text-white/80 leading-relaxed mb-6">
            {post.excerpt}
          </p>
          
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-white/70">
            <span>By {post.author}</span>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/70 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content */}
        <div className="blog-content max-w-none prose prose-lg dark:prose-invert prose-blue">
          <ReactMarkdown 
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-white first:mt-0">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold mt-5 mb-2 text-gray-900 dark:text-white">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-gray-800 dark:text-white/90 leading-relaxed mb-4">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal pl-6 space-y-2 mb-4">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="text-gray-800 dark:text-white/90">
                  {children}
                </li>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-gray-900 dark:text-white">
                  {children}
                </strong>
              ),
              code: ({ children }) => (
                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">
                  {children}
                </code>
              ),
              pre: ({ children }) => (
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4">
                  {children}
                </pre>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-white/20">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600 dark:text-white/70">
              Thanks for reading! 
            </div>
            <Link 
              href="/blog"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium"
            >
              ← Back to all posts
            </Link>
          </div>
        </footer>
      </motion.div>
    </article>
  );
}
