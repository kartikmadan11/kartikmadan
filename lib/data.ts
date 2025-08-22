import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Bachelor of Technology",
    location: "New Delhi, India",
    description:
      "Graduated with a degree in Computer Science Engineering. Started exploring full-stack development and cloud technologies.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "New Delhi, India",
    description:
      "Started working as a full-stack developer specializing in React and Spring Boot. Gained experience in building scalable web applications.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer & Data Science Enthusiast",
    location: "New Delhi, India",
    description:
      "Currently working as a full-stack developer with expertise in React, Spring Boot, and cloud technologies. Passionate about data science and machine learning.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with React frontend and Spring Boot backend. Features include user authentication, product management, shopping cart, and payment integration.",
    tags: ["React", "Spring Boot", "MySQL", "JWT", "Stripe API"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Data Analytics Dashboard",
    description:
      "Interactive dashboard for data visualization and analytics. Built with React and Python Flask backend, featuring real-time data processing and ML-powered insights.",
    tags: ["React", "Python", "Flask", "Pandas", "Chart.js", "AWS"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Cloud-Native Task Manager",
    description:
      "A scalable task management application deployed on AWS. Features include microservices architecture, containerization, and automated CI/CD pipeline.",
    tags: ["Next.js", "Spring Boot", "Docker", "AWS", "Microservices"],
    imageUrl: wordanalyticsImg,
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
  "Spring Boot",
  "Java",
  "Python",
  "Git",
  "Tailwind",
  "Bootstrap",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "AWS",
  "Azure",
  "Docker",
  "Kubernetes",
  "Machine Learning",
  "Data Science",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "TensorFlow",
  "REST APIs",
  "GraphQL",
  "Microservices",
  "Framer Motion",
] as const;

export const blogData = [
  {
    id: 1,
    title: "Getting Started with React and Spring Boot",
    excerpt: "Learn how to build a full-stack application using React for the frontend and Spring Boot for the backend.",
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
    excerpt: "Dive into the world of machine learning and discover how Python makes it accessible for developers.",
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
    excerpt: "A comprehensive comparison of AWS and Azure cloud platforms for modern application deployment.",
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
