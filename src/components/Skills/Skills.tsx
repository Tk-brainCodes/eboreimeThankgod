import { useContext, useRef, useMemo } from "react";
import { ThemeContext } from "../../provider/theme.provider";
import { motion, useScroll, useTransform } from "framer-motion";
import { Element } from "react-scroll";

const SKILLS_DATA = [
  // Languages
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript", size: 50 },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript", size: 50 },
  { name: "Python", icon: "https://cdn.simpleicons.org/python", size: 55 },
  { name: "HTML5", icon: "https://cdn.simpleicons.org/html5", size: 45 },
  { name: "Solidity", icon: "https://cdn.simpleicons.org/solidity", size: 40 },
  
  // Frameworks & Libs
  { name: "React", icon: "https://cdn.simpleicons.org/react", size: 60 },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs", size: 55 },
  { name: "Redux", icon: "https://cdn.simpleicons.org/redux", size: 45 },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss", size: 50 },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs", size: 55 },
  { name: "Express", icon: "https://cdn.simpleicons.org/express", size: 45 },
  { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi", size: 50 },
  { name: "NestJs", icon: "https://cdn.simpleicons.org/nestjs", size: 50 },
    { name: "TanStack", icon: "https://cdn.simpleicons.org/tanstack", size: 50 },


  // Tools & Platforms
  { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase", size: 50 },
  { name: "Git", icon: "https://cdn.simpleicons.org/git", size: 45 },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker", size: 50 },
  { name: "OpenAI", icon: "https://cdn.simpleicons.org/openai", size: 45 },
  { name: "Framer", icon: "https://cdn.simpleicons.org/framer", size: 45 },
  { name: "Jest", icon: "https://cdn.simpleicons.org/jest", size: 45 },
];

const Skills = () => {
  const { dark } = useContext(ThemeContext);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Calculate positions in two-layer circles
  const skillsWithPosition = useMemo(() => {
    return SKILLS_DATA.map((skill, index) => {
      const total = SKILLS_DATA.length;
      const angle = (index / total) * 2 * Math.PI;
      // Alternate between inner (28%) and outer (38%) circle
      const radius = index % 2 === 0 ? 28 : 38;
      // Random float parameters for each icon
      const floatY = 10 + (index % 5) * 3; // 10-22px
      const floatX = 8 + (index % 4) * 2; // 8-14px
      const duration = 3 + (index % 3) * 0.5; // 3-4s
      const delay = (index % 5) * 0.2; // Stagger start
      return { ...skill, angle, radius, floatY, floatX, duration, delay };
    });
  }, []);

  // Scroll-driven expansion/contraction
  const radiusMultiplier = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <Element name="skills" className="w-full min-h-screen relative overflow-hidden py-32 flex items-center justify-center">
      {/* Gradient Background */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${dark ? "opacity-100" : "opacity-0"}`}>
        <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-blue-900/20 to-transparent blur-3xl" />
      </div>

      <div ref={containerRef} className="absolute inset-0 w-full h-full flex items-center justify-center">
        {skillsWithPosition.map((skill) => {
          const x = useTransform(radiusMultiplier, (r) => `${50 + Math.cos(skill.angle) * skill.radius * r}%`);
          const y = useTransform(radiusMultiplier, (r) => `${50 + Math.sin(skill.angle) * skill.radius * r}%`);
          
          return (
            <motion.div
              key={skill.name}
              style={{
                position: "absolute",
                left: x,
                top: y,
                opacity,
              }}
              animate={{
                y: [0, -skill.floatY, 0],
                x: [0, skill.floatX, 0],
              }}
              transition={{
                duration: skill.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: skill.delay,
              }}
              className="flex flex-col items-center justify-center gap-2 z-0 -translate-x-1/2 -translate-y-1/2"
            >
              <div 
                className={`relative group rounded-full p-4 shadow-lg backdrop-blur-md transition-transform hover:scale-125 duration-300 ${
                  dark ? "bg-white/5 border border-white/10" : "bg-white/80 border border-black/5"
                }`}
                style={{ width: skill.size + 20, height: skill.size + 20 }}
              >
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-full h-full object-contain"
                />
                
                {/* Tooltip */}
                <div className={`absolute -bottom-10 w-auto left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50 shadow-xl ${
                  dark ? "bg-white text-black" : "bg-black text-white"
                }`}>
                  {skill.name}
                  <div className={`absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent ${
                    dark ? "border-b-white" : "border-b-black"
                  }`} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="relative z-10 text-center max-w-5xl px-6 pointer-events-none">
        <motion.div
          style={{ opacity }}
          className=""
        >
          <h2
            className={`text-[5vw] md:text-[3vw] font-bold mb-12 ${
              dark ? "text-white" : "text-black"
            }`}
          >
            Technical Proficiency
          </h2>
        </motion.div>
      </div>
    </Element>
  );
};

export default Skills;
