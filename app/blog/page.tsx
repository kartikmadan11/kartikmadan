"use client";
import React from "react";
import BlogList from "@/components/blog-list";

export default function BlogPage() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  return (
    <main className="flex flex-col items-center px-4">
      <BlogList />
    </main>
  );
}
