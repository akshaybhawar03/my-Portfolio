"use client";

import { FiGithub, FiExternalLink, FiArrowRight, FiImage } from 'react-icons/fi';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Finance Ai",
    description: "AI Finance Tools and Productivity is a web application that provides essential finance and productivity tools in one place. It helps users manage daily financial tasks, organize work efficiently, and improve overall productivity through simple, user-friendly features.",
    tech: ["NEXT.JS", "TYPESCRIPT", "TAILWIND CSS", "MySQL"],
    github: "https://github.com/akshaybhawar03/AI-FINANCE",
    demo: "https://ai-itnqc8me8-akshays-projects-da0e0611.vercel.app/",
    image: "/Projects/project1.png"
  },
  {
    id: 2,
    title: "meChat",
    description: "Live Chat Application is a real-time messaging platform built using WebSocket technology. It enables instant communication between users, similar to WhatsApp or Instagram chat, with smooth message delivery and a responsive user interface.",
    tech: ["REACT", "NODE.JS", "MONGODB"],
    github: "https://github.com/akshaybhawar03/Chat-App",
    demo: "https://chat-app-client-amber-seven.vercel.app/",
    image: "/Projects/project2.png"
  },
  {
    id: 3,
    title: "E-Commerce Website",
    description: "E-Commerce Website is a full-stack e-commerce platform built using React and Firebase. It features real-time updates and team collaboration features, making it a collaborative and efficient platform for e-commerce businesses.",
    tech: ["HTML", "CSS", "Javascript"],
    github: "#",
    demo: "#",
    image: "/Projects/project3.png"
  },
  {
    id: 4,
    title: "Impulse Pathology Lab",
    description: "Impulse Pathology Lab is a web application that provides essential pathology and laboratory tools in one place. It helps users manage daily pathology tasks, organize work efficiently, and improve overall productivity through simple, user-friendly features.",
    tech: ["Next.Js", "Typescript", "Tailwind.css", "Mongodb"],
    github: "https://github.com/akshaybhawar03/impulse",
    demo: "https://impulse-smoky.vercel.app/",
    image: "/Projects/project4.png"
  },
  {
    id: 5,
    title: "FIN-NEXUS AI",
    description: "FIN-NEXUS AI Dashboard is a financial overview panel that helps users monitor their spending, track account balances, and view categorized expenses in real time. It provides clear visual insights and suggestions to help users manage their finances more efficiently.",
    tech: ["Next.Js", "Typescript", "Tailwind.css", "Mongodb"],
    github: "https://github.com/akshaybhawar03/AI-FINANCE",
    demo: "https://ai-finance-swart.vercel.app/",
    image: "/Projects/project5.png"
  }
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 1, 0.5, 1]
    }
  }
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Get unique technologies for filtering
  const allTech = ['All', ...Array.from(new Set(projects.flatMap(project => project.tech)))];
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.tech.includes(activeFilter));

  // Auto-scroll horizontally on mobile every 3 seconds with manual override
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    if (!isMobile) return;

    let index = 0;
    const children = Array.from(el.querySelectorAll('[data-card]')) as HTMLElement[];
    if (children.length === 0) return;

    const centerScrollTo = (target: HTMLElement) => {
      const left = target.offsetLeft - (el.clientWidth - target.clientWidth) / 2;
      el.scrollTo({ left, behavior: 'smooth' });
    };

    const scrollToIndex = (i: number) => {
      const target = children[i];
      if (!target) return;
      centerScrollTo(target);
    };

    let intervalId: number | undefined;
    let resumeTimeout: number | undefined;

    const startAuto = () => {
      clearInterval(intervalId);
      intervalId = window.setInterval(() => {
        index = (index + 1) % children.length;
        scrollToIndex(index);
      }, 3000);
    };

    const pauseAuto = () => {
      clearInterval(intervalId);
      clearTimeout(resumeTimeout);
      // resume after 5s of inactivity
      resumeTimeout = window.setTimeout(() => startAuto(), 5000);
    };

    // initialize
    startAuto();

    // Pause on interaction and resume later
    const onTouchStart = () => pauseAuto();
    const onWheel = () => pauseAuto();
    const onPointerDown = () => pauseAuto();
    el.addEventListener('touchstart', onTouchStart);
    el.addEventListener('wheel', onWheel);
    el.addEventListener('pointerdown', onPointerDown);

    return () => {
      clearInterval(intervalId);
      clearTimeout(resumeTimeout);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('pointerdown', onPointerDown);
    };
  }, [activeFilter]);

  return (
    <section id="projects" className="py-16 bg-[#0A192F] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-14">
          <h2 className="uppercase font-extrabold tracking-tight text-gray-300/90 text-3xl sm:text-3xl md:text-4xl">
            Projects
          </h2>
        </div>

        <div
          ref={scrollRef}
          className="flex md:block overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-0 md:gap-0 pb-2 -mx-4 px-4 space-y-0 md:space-y-8"
        >
          {filteredProjects.map((project: Project) => (
            <motion.article
              key={project.id}
              variants={item}
              data-card
              className="group bg-[#0f1e32] rounded-2xl shadow-xl flex flex-col lg:flex-row h-auto transition-all duration-300 hover:shadow-2xl overflow-hidden border border-gray-700/50 snap-center shrink-0 w-[calc(100vw-2rem)] md:w-auto"
            >
              {/* Project Image - Left Side */}
              <div className="w-full lg:w-1/2 bg-[#0f1e32] p-4 flex items-center justify-center">
                <div className="relative w-full h-[250px] lg:h-[300px]">
                  {project.image ? (
                    <div className="relative w-full h-full border border-gray-600/40 rounded-md overflow-hidden bg-white">
                      <Image
                        src={project.image}
                        alt={`Screenshot of ${project.title}`}
                        fill
                        className="object-cover"
                        priority={project.id === 1}
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-50 border border-gray-200 rounded-md">
                      <FiImage className="w-16 h-16 text-gray-300" />
                    </div>
                  )}
                </div>
              </div>

              {/* Project Content - Right Side */}
              <div className="w-full lg:w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {project.title}
                    </h3>
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-gray-800/80 backdrop-blur-sm flex items-center justify-center text-gray-300 hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-amber-500/20"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <FiGithub className="w-5 h-5" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-gray-800/80 backdrop-blur-sm flex items-center justify-center text-gray-300 hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-amber-500/20"
                          aria-label={`View live demo of ${project.title}`}
                        >
                          <FiExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm md:text-base leading-relaxed my-4">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tech.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="text-[10px] font-semibold uppercase bg-gray-800 text-gray-200 px-3 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
