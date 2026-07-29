"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { stackData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import {
  SiWezterm,
  SiTmux,
  SiZsh,
  SiCursor,
  SiClaude,
  SiAnthropic,
  SiLangchain,
  SiHuggingface,
  SiPytorch,
  SiNotion,
  SiTodoist,
  SiSpotify,
  SiStrava,
  SiAlltrails,
  SiDiscord,
  SiNewyorktimes,
} from "react-icons/si";
import { FaMicrosoft, FaNewspaper } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  vscode: VscVscode,
  cursor: SiCursor,
  wezterm: SiWezterm,
  tmux: SiTmux,
  zsh: SiZsh,
  claude: SiClaude,
  anthropic: SiAnthropic,
  langchain: SiLangchain,
  microsoft: FaMicrosoft,
  huggingface: SiHuggingface,
  pytorch: SiPytorch,
  notion: SiNotion,
  todoist: SiTodoist,
  spotify: SiSpotify,
  strava: SiStrava,
  alltrails: SiAlltrails,
  discord: SiDiscord,
  ft: FaNewspaper,
  nyt: SiNewyorktimes,
};

// Official brand colours. For icons that are pure black/white, a slightly
// lifted neutral is used so they stay visible in both light and dark mode.
const iconColor: Record<string, string> = {
  vscode: "#0078D4",
  cursor: "#6B7280",
  wezterm: "#4E49EE",
  tmux: "#1BB91F",
  zsh: "#F15A24",
  claude: "#D97757",
  anthropic: "#D97757",
  langchain: "#1C3C3C",
  microsoft: "#5E5E5E",
  huggingface: "#FFD21E",
  pytorch: "#EE4C2C",
  notion: "#000000",
  todoist: "#E44332",
  spotify: "#1DB954",
  strava: "#FC4C02",
  alltrails: "#428813",
  discord: "#5865F2",
  ft: "#990F3D",
  nyt: "#000000",
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
      delay: 0.03 * index,
    },
  }),
};

export default function Stack() {
  const { ref } = useSectionInView("Stack");

  return (
    <section
      id="stack"
      ref={ref}
      className="mb-28 w-full max-w-[53rem] scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>My stack</SectionHeading>
      <p className="mb-12 -mt-4 text-center text-gray-600 dark:text-white/60">
        The tools I actually reach for, day to day.
      </p>

      <div className="flex flex-col gap-12">
        {stackData.map((group) => (
          <div key={group.category}>
            <h3 className="mb-4 px-1 text-left text-xs font-medium uppercase tracking-[0.15em] text-gray-400 dark:text-white/40">
              {group.category}
            </h3>

            <ul className="grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item, index) => {
                const Icon = iconMap[item.icon];
                const color = iconColor[item.icon];
                return (
                  <motion.li
                    key={item.name}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={index}
                    className="group"
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-full items-center gap-3.5 rounded-lg px-2 py-2.5 text-left transition-colors duration-200 hover:bg-gray-100/70 dark:hover:bg-white/5"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center">
                        {Icon ? (
                          <Icon className="text-xl" style={{ color }} />
                        ) : null}
                      </span>

                      <span className="flex min-w-0 flex-1 flex-col">
                        <span className="text-sm font-medium text-gray-800 dark:text-white/90">
                          {item.name}
                        </span>
                        <span className="text-xs leading-snug text-gray-400 dark:text-white/40">
                          {item.note}
                        </span>
                      </span>
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
