"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { publicationsData } from "@/lib/data";
import Publication from "./publication";
import { useSectionInView } from "@/lib/hooks";

export default function Publications() {
  const { ref } = useSectionInView("Publications", 0.5);

  return (
    <section
      ref={ref}
      id="publications"
      className="scroll-mt-28 mb-28 sm:mb-40 w-full max-w-[42rem]"
    >
      <SectionHeading>My publications</SectionHeading>
      <div>
        {publicationsData.map((publication) => (
          <Publication key={publication.title} {...publication} />
        ))}
      </div>
    </section>
  );
}
