import { Project } from "../types/interface";

export const projects: Project[] = [
  {
    id: 1,
    title: "Omnichannel ERP System",
    description:
      "Built ERP modules for Preorder, Stock Adjustment, Replace, Refund, Trade-In, and Dropship Partner workflows, with marketplace API and webhook integrations.",
    image: "/images/projects/omni.png",
    tags: ["Laravel", "Python", "MySQL", "Webhooks"],
    demoUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    id: 2,
    title: "Academic Performance Prediction System",
    description:
      "Integrated an ensemble machine-learning model into a web application for academic prediction results and analysis.",
    image: "/images/projects/sippak.png",
    tags: ["Next.js", "FastAPI", "Python", "PostgreSQL"],
    demoUrl: "",
    githubUrl: "https://github.com/ArgyaaDwi/FE-SIPPAK-PENS",
    featured: true,
  },
  {
    id: 3,
    title: "Maternal and Child Health Information System",
    description:
      "An e-Government system for early stunting detection and real-time maternal-child health monitoring, supported by RAG-based AI.",
    image: "/images/projects/simkesia.png",
    tags: ["Laravel", "React", "MySQL", "RAG AI"],
    demoUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    id: 4,
    title: "Community Environmental Action Platform",
    description:
      "A community platform for environmental-damage reporting, volunteers, donations, educational content, and gamified engagement.",
    image: "/images/projects/sobat-bumi.png",
    tags: ["Laravel", "React", "MySQL"],
    demoUrl: "",
    githubUrl: "",
  },
];
