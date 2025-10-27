'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface Skill {
  name: string;
  level: number;
  color: string;
  category: 'frontend' | 'backend' | 'tools';
}

interface CircularProgressProps {
  percentage: number;
  color: string;
  size?: number;
  strokeWidth?: number;
}

const skills: Skill[] = [
  // Frontend
  { name: "HTML5/CSS3", level: 90, color: "#E44D26", category: 'frontend' },
  { name: "JavaScript", level: 85, color: "#F0DB4F", category: 'frontend' },
  { name: "React", level: 80, color: "#61DAFB", category: 'frontend' },
  { name: "Next.js", level: 75, color: "#000000", category: 'frontend' },
  { name: "TypeScript", level: 70, color: "#3178C6", category: 'frontend' },
  
  // Backend
  { name: "Node.js", level: 75, color: "#68A063", category: 'backend' },
  { name: "Express", level: 70, color: "#000000", category: 'backend' },
  { name: "MongoDB", level: 65, color: "#4DB33D", category: 'backend' },
  { name: "SQL", level: 60, color: "#336791", category: 'backend' },
  { name: "Python", level: 65, color: "#3776AB", category: 'backend' },
  { name: "GraphQL", level: 70, color: "#E10098", category: 'backend' },
  
  // Tools
  { name: "Git", level: 80, color: "#F05032", category: 'tools' },
  { name: "Figma", level: 75, color: "#F24E1E", category: 'tools' },
  { name: "Docker", level: 60, color: "#2496ED", category: 'tools' },
  { name: "AWS", level: 55, color: "#FF9900", category: 'tools' },
];


const CircularProgress = ({ 
  percentage, 
  color, 
  size = 100, 
  strokeWidth = 8 
}: CircularProgressProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative shrink-0 mx-4" style={{ width: size, height: size }}>
      <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#1E293B"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          className="transition-all duration-1000 ease-out"
          style={{
            filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.5))',
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-bold text-white">{percentage}%</span>
      </div>
    </div>
  );
};

interface SkillItemProps {
  skill: Skill;
}

const SkillItem = ({ skill }: SkillItemProps) => (
  <div className="group flex flex-col items-center text-center p-4 sm:p-6 rounded-xl transition-all duration-300 hover:bg-slate-800/50 hover:scale-105 w-full">
    <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
      <CircularProgress 
        percentage={skill.level} 
        color={skill.color}
        size={120}
        strokeWidth={10}
      />
    </div>
    <h4 className="text-lg font-medium text-white mb-1">{skill.name}</h4>
    <div className="w-8 h-0.5 bg-amber-400/50 my-2"></div>
    <p className="text-sm text-slate-400">
      {skill.level >= 80 ? 'Expert' : 
       skill.level >= 60 ? 'Advanced' : 
       skill.level >= 40 ? 'Intermediate' : 'Beginner'}
    </p>
  </div>
);


export default function Skills() {
  const sections = [
    { type: 'frontend' as const, title: 'Frontend Development' },
    { type: 'backend' as const, title: 'Backend Development' },
    { type: 'tools' as const, title: 'Tools & Platforms' }
  ];
  
  const [activeSection, setActiveSection] = useState(0);
  const sectionTimerRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToSection = useCallback((index: number) => {
    const container = document.getElementById('skills-container');
    const section = document.getElementById(`skill-section-${index}`);
    
    if (container && section) {
      const containerRect = container.getBoundingClientRect();
      const sectionRect = section.getBoundingClientRect();
      const scrollLeft = section.offsetLeft - container.offsetLeft - (container.offsetWidth - section.offsetWidth) / 2;
      
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  }, []); // Removed sections from dependency array as it's now in component scope

  useEffect(() => {
    // Only proceed if sections is defined and has items
    if (!sections || sections.length === 0) return;
    
    // Initial scroll to first section
    const timer = setTimeout(() => {
      scrollToSection(0);
    }, 100);

    // Rotate through sections every 3 seconds
    sectionTimerRef.current = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % sections.length);
    }, 3000);

    return () => {
      clearTimeout(timer);
      if (sectionTimerRef.current) {
        clearInterval(sectionTimerRef.current);
      }
    };
  }, [sections, scrollToSection]);

  // Update scroll position when activeSection changes
  useEffect(() => {
    scrollToSection(activeSection);
  }, [activeSection, scrollToSection]);

  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 overflow-hidden relative min-h-[600px]">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          My <span className="text-amber-400">Skills</span>
        </h2>
        <p className="mt-3 text-slate-400 max-w-2xl mx-auto">
          Continuously expanding my technical expertise across various technologies
        </p>
      </div>

      <div 
        id="skills-container"
        className="relative w-full overflow-x-hidden py-4 scrollbar-hide"
      >
        <div className="flex transition-transform duration-500 ease-in-out">
          {sections.map((section, index) => {
            const sectionSkills = skills.filter(skill => skill.category === section.type);
            return (
              <div 
                id={`skill-section-${index}`}
                key={section.type}
                className={`w-full shrink-0 px-4 transition-opacity duration-500 ${
                  activeSection === index ? 'opacity-100' : 'opacity-0 absolute'
                }`}
              >
                <h3 className="text-2xl font-semibold text-white mb-8 flex items-center justify-center sm:justify-start">
                  <span className="w-1.5 h-6 bg-amber-400 mr-3 rounded-full"></span>
                  {section.title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-2 sm:px-0">
                  {sectionSkills.map((skill) => (
                    <div key={skill.name} className="w-full">
                      <SkillItem skill={skill} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-12 space-x-2">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveSection(index);
              if (sectionTimerRef.current) {
                clearInterval(sectionTimerRef.current);
              }
              sectionTimerRef.current = setInterval(() => {
                setActiveSection(prev => (prev + 1) % sections.length);
              }, 3000);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === index 
                ? 'bg-amber-400 w-8 scale-110' 
                : 'bg-slate-600 hover:bg-slate-500'
            }`}
            aria-label={`View ${sections[index].title}`}
          />
        ))}
      </div>
      
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
