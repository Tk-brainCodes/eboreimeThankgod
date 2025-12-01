import { useContext, useRef, useEffect, useState } from "react";
import { ThemeContext } from "../../provider/theme.provider";
import { Element } from "react-scroll";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { PROJECT_DATA, FEATURE_WORK } from "../Projects/data";
import { motion } from "framer-motion";

const FeaturedProjectCard = ({ project }: { project: any }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-w-full snap-center p-1">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full relative overflow-hidden rounded-[2.5rem] h-[60vh] min-h-[500px] group"
      >
        {/* Background Image with Parallax Scale */}
        <div className="absolute inset-0 w-full h-full">
            {project.image ? (
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                src={typeof project.image === 'string' ? project.image : project.image.src} 
                alt={project.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-zinc-900" />
            )}
            {/* Dark Overlay Gradient - Lighter */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/30 text-white/80 text-xs md:text-sm font-medium mb-4 backdrop-blur-md">
                Featured Project
              </span>
              {/* Reduced Font Size */}
              <h3 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight tracking-tight">
                {project.name}
              </h3>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6 md:mb-10"
            >
              <motion.div
                initial={false}
                animate={{ height: isExpanded ? "auto" : "5.5rem" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden relative max-w-xl"
              >
                <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                  {project.description}
                </p>
              </motion.div>
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 text-white/70 hover:text-white text-sm font-medium underline underline-offset-4 transition-colors"
              >
                {isExpanded ? "See Less" : "See More"}
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-6"
            >
              {project.live && (
                <a 
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative px-8 py-3 bg-white text-black text-base font-medium rounded-full overflow-hidden transition-all hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Site <ArrowUpRight size={18} />
                  </span>
                  <div className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-500" />
                </a>
              )}
              {project.github && (
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border border-white/30 text-white text-base font-medium rounded-full hover:bg-white/10 transition-all backdrop-blur-sm hover:border-white"
                >
                  GitHub
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Work = () => {
  const { dark } = useContext(ThemeContext);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const featuredScrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  
  // Combine data
  const allProjects = [...PROJECT_DATA];
  const featuredProjects = [...FEATURE_WORK];

  // Featured Scroll Handlers
  const scrollPrevFeatured = () => {
    if (featuredScrollContainerRef.current) {
      const container = featuredScrollContainerRef.current;
      const cardWidth = container.clientWidth;
      container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollNextFeatured = () => {
    if (featuredScrollContainerRef.current) {
      const container = featuredScrollContainerRef.current;
      const cardWidth = container.clientWidth;
      container.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  // Fun Projects Scroll Handlers
  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector('div')?.clientWidth || 0;
      container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector('div')?.clientWidth || 0;
      container.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  // Auto Scroll Logic (Finite) for Fun Projects
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    if (isAutoScrolling) {
      intervalId = setInterval(() => {
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current;
          const maxScrollLeft = container.scrollWidth - container.clientWidth;
          
          // Stop if we've reached the end (allow a small buffer for float precision)
          if (container.scrollLeft >= maxScrollLeft - 10) {
            setIsAutoScrolling(false);
            return;
          }

          const cardWidth = container.querySelector('div')?.clientWidth || 0;
          container.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }, 3000); // Scroll every 3 seconds
    }

    return () => clearInterval(intervalId);
  }, [isAutoScrolling]);

  // Pause on interaction
  const handleInteractionStart = () => setIsAutoScrolling(false);

  return (
    <Element name="projects" className="w-full py-20 overflow-hidden">
      
      {/* FEATURED WORK SECTION */}
      <div className="px-6 md:px-20 mb-32">
        <div className="flex justify-between items-end mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-[4vw] leading-none font-medium ${
              dark ? "text-white" : "text-black"
            }`}
          >
            Featured Work
          </motion.h2>
          
          {/* Featured Navigation */}
          {featuredProjects.length > 1 && (
             <div className="hidden md:flex gap-4">
              <button
                onClick={scrollPrevFeatured}
                className={`p-4 rounded-full border transition-all duration-300 ${
                  dark 
                    ? "border-white/20 hover:bg-white text-white hover:text-black" 
                    : "border-black/20 hover:bg-black text-black hover:text-white"
                }`}
                aria-label="Previous featured project"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={scrollNextFeatured}
                className={`p-4 rounded-full border transition-all duration-300 ${
                  dark 
                    ? "border-white/20 hover:bg-white text-white hover:text-black" 
                    : "border-black/20 hover:bg-black text-black hover:text-white"
                }`}
                aria-label="Next featured project"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>

        {/* Featured Scroll Container */}
        <div 
          ref={featuredScrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar rounded-[2.5rem]"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={`featured-${index}`} project={project} />
          ))}
        </div>
      </div>


      {/* FUN PROJECTS SECTION */}
      <div className="px-6 md:px-20 mb-12 flex justify-between items-end">
        <h2
          className={`text-[4vw] leading-none font-medium ${
            dark ? "text-white" : "text-black"
          }`}
        >
          Fun Projects
        </h2>

        {/* Navigation Buttons */}
        <div className="hidden md:flex gap-4">
          <button
            onClick={() => {
              handleInteractionStart();
              scrollPrev();
            }}
            className={`p-4 rounded-full border transition-all duration-300 ${
              dark 
                ? "border-white/20 hover:bg-white text-white hover:text-black" 
                : "border-black/20 hover:bg-black text-black hover:text-white"
            }`}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => {
              handleInteractionStart();
              scrollNext();
            }}
            className={`p-4 rounded-full border transition-all duration-300 ${
              dark 
                ? "border-white/20 hover:bg-white text-white hover:text-black" 
                : "border-black/20 hover:bg-black text-black hover:text-white"
            }`}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full pl-6 md:pl-20">
        <div 
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 hide-scrollbar"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none' 
          }}
          onMouseEnter={handleInteractionStart}
          onTouchStart={handleInteractionStart}
        >
          {allProjects.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="relative flex-shrink-0 w-[85vw] md:w-[600px] snap-center"
            >
              {/* Card Container - Landscape Style */}
              <div 
                className={`w-full aspect-video rounded-[2rem] overflow-hidden border-[1px] transition-transform duration-500 ease-out group ${
                  dark ? "border-white/10 bg-[#1a1a1a]" : "border-black/10 bg-gray-100"
                }`}
              >
                {/* Image Area */}
                <div className="w-full h-full overflow-hidden relative group">
                   {(project as any).image ? (
                    <img 
                        src={typeof (project as any).image === 'string' ? (project as any).image : (project as any).image.src} 
                        alt={project.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                   ) : (
                    <div className={`w-full h-full ${dark ? 'bg-zinc-900' : 'bg-gray-200'} flex items-center justify-center`}>
                        <span className="opacity-30 font-medium">No Preview</span>
                    </div>
                   )}
                   
                   {/* Overlay Content */}
                   <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 ${
                     dark ? "bg-gradient-to-t from-black/90 via-black/50 to-transparent" : "bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                   }`}>
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white text-3xl font-bold mb-2">
                          {project.name}
                        </h3>
                        <p className="text-white/80 text-base line-clamp-2 mb-6 max-w-md">
                          {project.description}
                        </p>
                        <div className="flex gap-3">
                          {((project as any).live || (project as any).link) && (
                            <a 
                              href={(project as any).live || (project as any).link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/btn relative px-6 py-2 bg-white text-black text-sm font-bold rounded-full overflow-hidden transition-all hover:scale-105"
                            >
                              <span className="relative z-10 flex items-center gap-2">
                                VISIT SITE
                              </span>
                              <div className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-500" />
                            </a>
                          )}
                          {(project as any).github && (
                            <a 
                              href={(project as any).github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-6 py-2 bg-white/20 backdrop-blur-md text-white text-sm font-bold rounded-full hover:bg-white/30 transition-colors"
                            >
                              GITHUB
                            </a>
                          )}
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Spacer for last item to be fully visible if needed */}
          <div className="w-6 md:w-20 flex-shrink-0" />
        </div>
        
        {/* Mobile Navigation (Visible only on small screens) */}
        <div className="flex md:hidden justify-center gap-4 mt-8 pr-6">
          <button
            onClick={() => {
              handleInteractionStart();
              scrollPrev();
            }}
            className={`p-3 rounded-full border ${
              dark 
                ? "border-white/20 text-white" 
                : "border-black/20 text-black"
            }`}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => {
              handleInteractionStart();
              scrollNext();
            }}
            className={`p-3 rounded-full border ${
              dark 
                ? "border-white/20 text-white" 
                : "border-black/20 text-black"
            }`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </Element>
  );
};

export default Work;
