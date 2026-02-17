import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import wbcMicroMarketImg from "@/public/wbc-micro-market.jpg";
import electronicShelfLabelsImg from "@/public/Electronic-Shelf-Labels.jpg";
import equinoxStudioImg from "@/public/equinox-studio.png";
import forexRnnImg from "@/public/forex-rnn.jpg";
import polluteCheckImg from "@/public/pollute-check.jpg";
import cvlAiImg from "@/public/cvl-ai.jpg";
import joeRoganImg from "@/public/joe-rogan.jpg";
import danielEkImg from "@/public/daniel-ek.jpg";
import gulPanagImg from "@/public/gul-panag.jpg";
import cyrusSaysImg from "@/public/cyrus-says.jpg";
import regionalAdsImg from "@/public/regional-ads.jpg";
import spotifyImg from "@/public/spotify.jpg";

export const links = [
  {
    name: "Home",
    hash: "/#home",
  },
  {
    name: "About",
    hash: "/#about",
  },
  {
    name: "Projects",
    hash: "/#projects",
  },
  {
    name: "Skills",
    hash: "/#skills",
  },
  {
    name: "Experience",
    hash: "/#experience",
  },
  {
    name: "Blog",
    hash: "/blog",
  },
  {
    name: "Contact",
    hash: "/#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "B. Tech (Electronics and Communication)",
    location: "Guru Gobind Singh Indraprastha University, Delhi",
    description:
      "Graduated with 8.2 GPA. Won Smart India Hackathon 2019 and Barco Geekathon 2018. Worked as Teaching Assistant at Coding Ninjas for Data Science course and served as Convener of Veda Quiz Society.",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2020",
  },
  {
    title: "Specialist Programmer II",
    location: "Infosys, London, United Kingdom",
    description:
      "Leading enterprise-scale projects for BP including Micro Market automation (148% profitability boost) and AI-powered Smart Shelves across UK/Poland/Australia. Built cloud-native platforms processing 200+ products/day with Apache Camel and AWS.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - Present",
  },
  {
    title: "Senior Full Stack Engineer",
    location: "BP, London, United Kingdom",
    description:
      "Currently architecting multi-tenant SaaS platforms, leading incident management teams, and implementing conversational analytics with natural language SQL generation. Published research on RNNs and filed patent for synthetic image generation.",
    icon: React.createElement(FaReact),
    date: "Nov 2024 - Nov 2025",
  },
  {
    title: "AI Engineer",
    location: "BP, London, United Kingdom",
    description:
      "Architecting an AI platform to detect and prevent contract value leakage across 100+ suppliers. Built multi-provider OCR pipelines (Azure Document Intelligence, AWS Textract), LLM-powered extraction agents using OpenAI, and ML-based price matching engine recovering $1M+ in leaked value. Automated transaction pipelines on Azure Databricks with Delta Lake storage.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2025 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "BP - Contract Value Leakage AI",
    description:
      "AI platform to detect and prevent contract value leakage across 100+ suppliers. Designed multi-provider OCR pipelines (Azure Document Intelligence, AWS Textract) and LLM-powered extraction agents using OpenAI for invoice parsing. Built ML-based price matching engine using TF-IDF and cosine similarity to reconcile invoices against contracted price books, recovering $1M+ in leaked value.",
    tags: [
      "OpenAI",
      "Azure Document Intelligence",
      "AWS Textract",
      "Azure Databricks",
      "Delta Lake",
      "ML",
    ],
    imageUrl: cvlAiImg,
  },
  {
    title: "BP Wild Bean Café - Micro Market",
    description:
      "Enterprise-grade API and analytics platform automating pricing, sales, and inventory management for 50+ BP forecourt retailers. Built cloud-native platform with Apache Camel processing 200+ products/day, boosting dealer profitability by 148%.",
    tags: ["Apache Camel", "AWS", "React", "SAP", "OAuth 2.0", "DynamoDB"],
    imageUrl: wbcMicroMarketImg,
    link: "https://www.bp.com/en_gb/united-kingdom/home/products-and-services/bp-dealer-solutions/wild-bean-cafe.html",
  },
  {
    title: "BP - Store of Today",
    description:
      "Computer vision system for automated event detection and dynamic pricing via Electronic Shelf Labels in BP retail stores across Australia. Built event-driven architecture with Linux edge devices and auto-scaling AWS infrastructure.",
    tags: [
      "Computer Vision",
      "AWS",
      "Terraform",
      "Grafana",
      "Prometheus",
      "Edge Computing",
    ],
    imageUrl: electronicShelfLabelsImg,
  },
  {
    title: "Infosys Equinox Studio",
    description:
      "Low-code/No-code Digital Commerce Front-end Builder developed in Angular and Express. Worked with enterprise clients including Kraft Heinz, Shutterfly, Herbalife, and Nu Skin, accounting for 22% of team revenue.",
    tags: ["Angular", "Express", "Low-code", "Digital Commerce", "Enterprise"],
    imageUrl: equinoxStudioImg,
    link: "https://www.infosys.com/newsroom/press-releases/2023/launched-infosys-equinox-studio.html",
  },
  {
    title: "Forex Trading Neural Network",
    description:
      "Recurrent neural network model for time series forecasting on Forex charts with real-time integration via WebSockets to MetaTrader platform. Published research on analyzing financial market trends using deep learning.",
    tags: [
      "Python",
      "RNN",
      "Time Series",
      "WebSocket",
      "MetaTrader",
      "Deep Learning",
    ],
    imageUrl: forexRnnImg,
    link: "https://github.com/kartikmadan11/MetaTraderForecast",
  },
  {
    title: "PolluteCheck",
    description:
      "A Green Auditing System: WASD PolluteCheck is a modern and innovative approach to devise a system that can audit industries on the basis of their pollution emissions. WASD stands for Water, Air, Sound and Data Collection.",
    tags: [
      "IoT",
      "Data Science",
      "Cloud",
      "Sustainability",
      "Environmental Tech",
    ],
    link: "https://link.springer.com/chapter/10.1007/978-981-15-5113-0_36",
    imageUrl: polluteCheckImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Angular",
  "Java",
  "Python",
  "C++",
  "Git",
  "Redis",
  "Cloud Computing",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Pandas",
  "NumPy",
  "TensorFlow",
  "REST APIs",
  "GraphQL",
  "Microservices",
  "OAuth 2.0",
  "DynamoDB",
  "Alteryx",
] as const;

export const blogData = [
  {
    id: 1,
    title: "The Spotify-Joe Rogan Deal: A Shift in the Podcasting Landscape",
    excerpt:
      "Analyzing how Spotify's $100 million deal with Joe Rogan represents a significant milestone in the evolution of podcasting and digital audio content.",
    content: `
# The Spotify-Joe Rogan Deal: A Shift in the Podcasting Landscape

Joe Rogan recently signed a multi-year licensing deal with Spotify that defines a shift in the podcasts spectrum. The deal will make The Joe Rogan Experience — which Rogan launched in 2009 — available exclusively on Spotify. For a lot of people who don't care about podcasts it might just seem to be a case of an international company wanting monopoly on a famous commodity. Well, that might be true but this deal might just be the biggest milestone in audio yet.

![Joe Rogan — Host of JRE Experience [Spotify Newsroom]](${joeRoganImg.src})

## Why JRE?

Joe Rogan Experience is downloaded over 190 million times a month and is described as "one of the last bastions for civil discussion in contemporary America". It generally features intellectual conversations with scientists, comedians and famous individuals including Elon Musk and Edward Snowden to recreational usage insights and wild conspiracy theories with Mike Tyson and Eddie Bravo.

Rogan is a stand up comedian and a mixed martial arts commentator. He started commentating for mixed martial arts promotion company Ultimate Fighting Championship in the late 90s. Hence, on his show he regularly interviews and hosts Fight Companion 'watchalongs' with popular MM artists, wrestlers, and athletes.

## Advertising on Podcasts

Google Podcasts, Apple Podcasts, Stitcher and other audio apps deliver podcasts directly via RSS feeds freely without having exclusive ownership of any of these. Podcasters make money by advertising. The advertisements are often minute long audio bytes by the artists about businesses or companies that offer discounted prices for listeners. But there is a general flaw in that idea. The companies that advertise on these pods are usually regional to the artists.

![Most popular podcasts have regional advertisements [Overcast]](${regionalAdsImg.src})

For instance if you are listening to a popular crime podcast in India and there was a minute long break where the host reads ads about stamps.com or Cooler King e-bikes which have businesses in USA or UK, you'd just not be in the loop. And that is where Spotify sees a marketable application. This obviously won't be the case if there are more podcasts closer to home. But people tend to listen to podcasts that are top of the charts and because Spotify doesn't own exclusivity over a lot of popular podcasts, the advertisements can't be changed to accommodate personalized data. Spotify reportedly spent over $500 million dollars in 2019 to boost its ad business.

![Daniel Ek, CEO of Spotify [Spotify Newsroom]](${danielEkImg.src})

Daniel Ek, CEO of Spotify said just like with music — podcast listeners should expect "curation and customization that users have come to expect from Spotify. We will offer better discovery, data, and monetization to creators." The message is clear, Spotify wants to be the biggest name in audio and it's banking on users to pay for it with their data. This is an effort to make better purchasing and production decisions so that it attracts the biggest audience.

## Indian Podcasts

### Spotify Originals

![Actress Gul Panag hosts Special Mission podcast [Spotify India]](${gulPanagImg.src})

Actress Gul Panag hosts the podcast "Special Mission", which is a tribute to India's armed forces. Another idea is simply promoting original content. Spotify Originals like Zindagi Unplugged and Special Mission with Gul Panag have regularly featured on the app's podcast charts in the country. Even though most people would rather just listen to the popular worldwide podcasts, indie content would always find itself a niche audience. The app also added content from radio channels Radio City and Big FM, and Aawaz.com, an Indian podcasts and spoken-word audio network. All of this is available exclusively on the platform.

![Cyrus Says - Popular Indian comedy podcast [IVM Podcasts]](${cyrusSaysImg.src})

Cyrus Broacha started Cyrus Says in 2015 and is produced by Indian podcast network IVM Podcasts. And lest we forget the All India Bakchod podcast that started back in 2012 and was uploaded on SoundCloud. That was probably India's only out-and-out crass and half-baked comedy pod. And of course, with the current political climate, it doesn't exist anymore.

## Why are Podcasts So Popular?

![Spotify's efforts to dominate the podcast industry [Spotify Blog]](${spotifyImg.src})

Reading this article in its entirety might seem like a task if you haven't just sat down for some crispy podcast insights. But if someone like Morgan Freeman or David Attenborough would read it out loud to you while you were working out or completing chores at your house, you'd be in for a treat and would want the next episode immediately. And that's why podcasts are the buzzword of 2020.

### Multitasking and Podcasting

- In the US, 22% of listening happens while driving.
- According to another study, 4% of listeners do so when working out, or cooking (50%), or simply relaxing before going to bed (51%).

### A Podcast For Everyone

I like listening to podcasts over music while running or working out. Music is a popular alternative too, but zoning out of a repetitive playlist space is easy. That won't necessarily be the case with an interesting pod. Also, podcasts offer something primitive — live chat. And that's more or less it. Podcasts are like reading a blog, watching a YT video or surfing reddit or all at the same time while listening. And there's an audience for almost every kind of topic. There are so many different categories and genres today. And it's ever growing.
    `,
    author: "Kartik Madan",
    publishedAt: "2020-08-19",
    readTime: "10 min read",
    tags: [
      "Podcasting",
      "Spotify",
      "Joe Rogan",
      "Digital Media",
      "Content Creation",
    ],
    category: "Digital Media",
  },
] as const;
