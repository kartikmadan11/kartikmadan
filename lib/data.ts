import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import wbcMicroMarketImg from "@/public/wbc-micro-market.jpg";
import electronicShelfLabelsImg from "@/public/Electronic-Shelf-Labels.jpg";
import equinoxStudioImg from "@/public/equinox-studio.png";
import forexRnnImg from "@/public/forex-rnn.jpg";
import polluteCheckImg from "@/public/pollute-check.jpg";

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
    date: "2025 - Present",
  },
] as const;

export const projectsData = [
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
  "Node.js",
  "Angular",
  "Express",
  "Java",
  "Python",
  "C++",
  "Git",
  "Tailwind",
  "Bootstrap",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "AWS",
  "GCP",
  "Azure",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Apache Camel",
  "SAP",
  "Prometheus",
  "Grafana",
  "Jenkins",
  "Machine Learning",
  "Data Science",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "TensorFlow",
  "Computer Vision",
  "Edge Computing",
  "REST APIs",
  "GraphQL",
  "Microservices",
  "OAuth 2.0",
  "DynamoDB",
  "Alteryx",
  "Framer Motion",
] as const;

export const blogData = [
  {
    id: 1,
    title: "Getting Started with React and Spring Boot",
    excerpt:
      "Learn how to build a full-stack application using React for the frontend and Spring Boot for the backend.",
    content: `
# Getting Started with React and Spring Boot

Building modern web applications requires a robust frontend and a scalable backend. In this post, we'll explore how to combine React and Spring Boot to create powerful full-stack applications.

## Why React and Spring Boot?

React provides an excellent user experience with its component-based architecture, while Spring Boot offers a comprehensive framework for building enterprise-grade backend services.

## Setting up the Development Environment

1. Install Node.js and npm
2. Install Java 17+
3. Set up your IDE (VS Code, IntelliJ IDEA)

## Creating the Spring Boot Backend

Start by creating a new Spring Boot project with the necessary dependencies...

## Building the React Frontend

Create a new React application and set up the project structure...

## Conclusion

This combination provides a solid foundation for building scalable web applications.
    `,
    author: "Kartik Madan",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    tags: ["React", "Spring Boot", "Full Stack", "Tutorial"],
    category: "Development",
  },
  {
    id: 2,
    title: "Introduction to Machine Learning with Python",
    excerpt:
      "Dive into the world of machine learning and discover how Python makes it accessible for developers.",
    content: `
# Introduction to Machine Learning with Python

Machine learning is transforming how we solve complex problems. Python, with its rich ecosystem of libraries, makes it easier than ever to get started.

## What is Machine Learning?

Machine learning is a subset of artificial intelligence that enables computers to learn and make decisions from data without being explicitly programmed.

## Popular Python Libraries

- **Scikit-learn**: For traditional machine learning algorithms
- **TensorFlow**: For deep learning
- **Pandas**: For data manipulation
- **NumPy**: For numerical computations

## Your First ML Model

Let's build a simple linear regression model...

## Conclusion

Python's simplicity and powerful libraries make it the perfect choice for machine learning projects.
    `,
    author: "Kartik Madan",
    publishedAt: "2024-01-10",
    readTime: "10 min read",
    tags: ["Python", "Machine Learning", "Data Science", "Tutorial"],
    category: "Data Science",
  },
  {
    id: 3,
    title: "Cloud Computing: AWS vs Azure",
    excerpt:
      "A comprehensive comparison of AWS and Azure cloud platforms for modern application deployment.",
    content: `
# Cloud Computing: AWS vs Azure

Choosing the right cloud platform is crucial for your application's success. Let's compare AWS and Azure across various dimensions.

## Compute Services

Both platforms offer robust compute solutions, but with different approaches...

## Storage Solutions

Understanding storage options is key to designing efficient applications...

## Pricing Models

Cost optimization is a critical factor in cloud adoption...

## Conclusion

Both platforms have their strengths, and the choice depends on your specific requirements.
    `,
    author: "Kartik Madan",
    publishedAt: "2024-01-05",
    readTime: "12 min read",
    tags: ["AWS", "Azure", "Cloud Computing", "DevOps"],
    category: "Cloud",
  },
] as const;
