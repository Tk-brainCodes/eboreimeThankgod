import { useContext, useRef, useEffect, useState } from "react";
import { ThemeContext } from "../../provider/theme.provider";
import { Element } from "react-scroll";
import { ChevronLeft, ChevronRight, ArrowUpRight, LayoutGrid, LayoutList } from "lucide-react";
import { PROJECT_DATA, FEATURE_WORK } from "../Projects/data";
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from "framer-motion";

const AnimatedNumber = ({ value }: { value: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const display = useTransform(rounded, (latest) => latest.toString().padStart(2, "0"));

  useEffect(() => {
    const controls = animate(count, value, { duration: 1, ease: "easeOut" });
    return controls.stop;
  }, [value]);

  return <motion.span>{display}</motion.span>;
};

const FeaturedProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { dark } = useContext(ThemeContext);

  const imagesList = Array.isArray(project.images) && project.images.length > 0
    ? project.images
    : project.image
      ? [project.image]
      : [];

  useEffect(() => {
    if (imagesList.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imagesList.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [imagesList.length]);

  const isMobileApp = Boolean(project.images && project.images.length > 1);

  return (
    <div className="min-w-full snap-center p-1 pt-20 md:pt-24 relative"> 
       {/* Animated Numbering - On Top of Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="absolute top-1 left-6 lg:-ml-8 md:top-1 md:left-12 z-20 pointer-events-none"
      >
          <h1 className="text-[3rem] md:text-[4rem] lg:text-[5rem] font-bold text-transparent leading-none select-none"
              style={{ 
                fontFamily: 'system-ui, sans-serif',
                WebkitTextStroke: dark ? '1px rgba(255, 255, 255, 0.3)' : '1px rgba(0, 0, 0, 0.3)'
              }}>
            <AnimatedNumber value={index + 1} />
          </h1>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full relative overflow-hidden rounded-[2.5rem] h-[60vh] min-h-[500px] group bg-zinc-950 border border-white/10"
      >
        {/* Background Image / Contained Image Container */}
        {isMobileApp ? (
          /* Split / Contained Layout for Mobile App Screenshots with Dynamic Radial Glow derived from active image */
          <div className="absolute inset-0 w-full h-full flex flex-col md:flex-row overflow-hidden">
            {/* Dynamic Blurred Background Image (extracts vibrant colors directly from the active screen image) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={`bg-${currentImageIndex}`}
                  initial={{ opacity: 0, scale: 1.4 }}
                  animate={{ opacity: 0.65, scale: 1.5 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src={typeof imagesList[currentImageIndex] === 'string' ? imagesList[currentImageIndex] : imagesList[currentImageIndex].src}
                  alt=""
                  className="w-full h-full object-cover blur-3xl saturate-150 transform-gpu origin-center"
                />
              </AnimatePresence>

              {/* Dynamic Radial Gradient Spotlight Overlay */}
              <div 
                className="absolute inset-0 z-10" 
                style={{
                  background: 'radial-gradient(circle at 70% 50%, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.7) 55%, rgba(0,0,0,0.98) 100%)'
                }}
              />
            </div>
            
            {/* Image Preview Container - Enlarged on right side */}
            <div className="absolute inset-0 md:left-1/4 md:w-3/4 h-full flex items-center justify-center md:justify-end md:pr-12 lg:pr-24 p-3 md:p-4 z-10 opacity-80 md:opacity-100">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: 1, scale: 1.1 }}
                  exit={{ opacity: 0, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  src={typeof imagesList[currentImageIndex] === 'string' ? imagesList[currentImageIndex] : imagesList[currentImageIndex].src} 
                  alt={`${project.name} screen ${currentImageIndex + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="max-h-[90%] md:max-h-[95%] max-w-full object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)] origin-center z-10"
                />
              </AnimatePresence>

              {/* Multiple Screen Indicators */}
              {imagesList.length > 1 && (
                <div className="absolute top-6 right-6 z-30 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/20">
                  <span className="text-white/80 text-xs font-mono mr-1">
                    {currentImageIndex + 1}/{imagesList.length}
                  </span>
                  {imagesList.map((_: any, imgIdx: number) => (
                    <button
                      key={imgIdx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(imgIdx);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        imgIdx === currentImageIndex 
                          ? "w-6 bg-white" 
                          : "w-2 bg-white/40 hover:bg-white/70"
                      }`}
                      aria-label={`Go to screen ${imgIdx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
          </div>
        ) : (
          /* Standard Full-Bleed Layout for Web Apps */
          <div className="absolute inset-0 w-full h-full">
            {imagesList.length > 0 ? (
              <div className="relative w-full h-full">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  src={typeof imagesList[0] === 'string' ? imagesList[0] : imagesList[0].src} 
                  alt={project.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-full h-full bg-zinc-900" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent pointer-events-none" />
          </div>
        )}

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 z-20 pointer-events-none">
          <div className="max-w-xl md:max-w-2xl pointer-events-auto">
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
              className="flex flex-wrap gap-3 md:gap-6"
            >
              {project.live && (
                <a 
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative px-6 py-2.5 md:px-8 md:py-3 bg-white text-black text-sm md:text-base font-medium rounded-full overflow-hidden transition-all hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Site <ArrowUpRight size={18} />
                  </span>
                  <div className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-500" />
                </a>
              )}
              {project.ios && (
                <a 
                  href={project.ios}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 md:px-8 md:py-3 border border-white/30 text-white text-sm md:text-base font-medium rounded-full hover:bg-white/10 transition-all backdrop-blur-sm hover:border-white flex items-center gap-2"
                >
                  iOS App <ArrowUpRight size={18} />
                </a>
              )}
              {project.android && (
                <a 
                  href={project.android}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 md:px-8 md:py-3 border border-white/30 text-white text-sm md:text-base font-medium rounded-full hover:bg-white/10 transition-all backdrop-blur-sm hover:border-white flex items-center gap-2"
                >
                  Android App <ArrowUpRight size={18} />
                </a>
              )}
              {project.github && (
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 md:px-8 md:py-3 border border-white/30 text-white text-sm md:text-base font-medium rounded-full hover:bg-white/10 transition-all backdrop-blur-sm hover:border-white"
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
  const [funProjectsView, setFunProjectsView] = useState<"row" | "grid">("row");
  
  // Combine data
  const allProjects = [...PROJECT_DATA];
  const featuredProjects = [...FEATURE_WORK];

  // Ensure both Featured Work and Fun Projects start at item 1 (first item) on load
  useEffect(() => {
    if (featuredScrollContainerRef.current) {
      featuredScrollContainerRef.current.scrollLeft = 0;
    }
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
  }, []);

  // Featured Scroll Handlers (Fast, smooth, wrap-around navigation)
  const scrollPrevFeatured = () => {
    if (featuredScrollContainerRef.current) {
      const container = featuredScrollContainerRef.current;
      const cardWidth = container.clientWidth;
      if (container.scrollLeft <= 10) {
        container.scrollTo({ left: container.scrollWidth - cardWidth, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      }
    }
  };

  const scrollNextFeatured = () => {
    if (featuredScrollContainerRef.current) {
      const container = featuredScrollContainerRef.current;
      const cardWidth = container.clientWidth;
      const maxScrollLeft = container.scrollWidth - cardWidth;
      if (container.scrollLeft >= maxScrollLeft - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }
  };

  // Fun Projects Scroll Handlers (Fast, smooth, wrap-around navigation)
  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector('div')?.clientWidth || 0;
      if (container.scrollLeft <= 10) {
        container.scrollTo({ left: container.scrollWidth - container.clientWidth, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      }
    }
  };

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector('div')?.clientWidth || 0;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScrollLeft - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }
  };

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
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar rounded-[2.5rem] touch-pan-x"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch' 
          }}
        >
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={`featured-${index}`} project={project} index={index} />
          ))}
        </div>

        {/* Mobile Navigation for Featured (Visible only on small screens) */}
        <div className="flex md:hidden justify-center gap-4 mt-8">
          <button
            onClick={scrollPrevFeatured}
            className={`p-3 rounded-full border ${
              dark 
                ? "border-white/20 text-white" 
                : "border-black/20 text-black"
            }`}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNextFeatured}
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


      {/* FUN PROJECTS SECTION */}
      <div className="px-6 md:px-20 mb-12 flex justify-between items-end">
        <h2
          className={`text-[4vw] leading-none font-medium ${
            dark ? "text-white" : "text-black"
          }`}
        >
          Fun Projects
        </h2>

        {/* Navigation & View Switcher */}
        <div className="flex gap-3 items-center">
          {/* Row / Grid View Switcher Button (Next to previous arrow) */}
          <button
            onClick={() => setFunProjectsView(funProjectsView === "row" ? "grid" : "row")}
            className={`p-3.5 md:p-4 rounded-full border transition-all duration-300 flex items-center justify-center ${
              dark 
                ? funProjectsView === "grid"
                  ? "bg-white text-black border-white"
                  : "border-white/20 text-white hover:bg-white/10"
                : funProjectsView === "grid"
                  ? "bg-black text-white border-black"
                  : "border-black/20 text-black hover:bg-black/10"
            }`}
            aria-label={funProjectsView === "row" ? "Switch to Grid View" : "Switch to Row View"}
            title={funProjectsView === "row" ? "Switch to Grid View" : "Switch to Row View"}
          >
            {funProjectsView === "row" ? (
              <LayoutGrid size={22} className="stroke-current" />
            ) : (
              <LayoutList size={22} className="stroke-current" />
            )}
          </button>

          {/* Carousel Arrows (Active in Row View) */}
          {funProjectsView === "row" && (
            <div className="hidden md:flex gap-4">
              <button
                onClick={scrollPrev}
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
                onClick={scrollNext}
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
          )}
        </div>
      </div>

      {/* Projects Display Container with Smooth Open/Close Animation */}
      <AnimatePresence mode="wait">
        {funProjectsView === "grid" ? (
          /* GRID VIEW */
          <motion.div 
            key="grid-view"
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8"
          >
            {allProjects.map((project, index) => (
              <div key={`grid-${project.id}-${index}`} className="w-full">
                <div 
                  className={`w-full aspect-video rounded-[2rem] overflow-hidden border-[1px] transition-transform duration-500 ease-out group ${
                    dark ? "border-white/10 bg-[#1a1a1a]" : "border-black/10 bg-gray-100"
                  }`}
                >
                  <div className="w-full h-full overflow-hidden relative group">
                     {(project as any).image ? (
                      <img 
                          src={typeof (project as any).image === 'string' ? (project as any).image : (project as any).image.src} 
                          alt={project.name} 
                          loading="lazy"
                          decoding="async"
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
          </motion.div>
        ) : (
          /* ROW CAROUSEL VIEW */
          <motion.div 
            key="row-view"
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full pl-6 md:pl-20"
          >
            <div 
              ref={scrollContainerRef}
              className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 hide-scrollbar touch-pan-x"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {allProjects.map((project, index) => (
                <div
                  key={`row-${project.id}-${index}`}
                  className="relative flex-shrink-0 w-[85vw] md:w-[600px] snap-center"
                >
                  <div 
                    className={`w-full aspect-video rounded-[2rem] overflow-hidden border-[1px] transition-transform duration-500 ease-out group ${
                      dark ? "border-white/10 bg-[#1a1a1a]" : "border-black/10 bg-gray-100"
                    }`}
                  >
                    <div className="w-full h-full overflow-hidden relative group">
                       {(project as any).image ? (
                        <img 
                            src={typeof (project as any).image === 'string' ? (project as any).image : (project as any).image.src} 
                            alt={project.name} 
                            loading="lazy"
                            decoding="async"
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
              
              <div className="w-6 md:w-20 flex-shrink-0" />
            </div>
            
            {/* Mobile Navigation (Visible only on small screens in Row View) */}
            <div className="flex md:hidden justify-center gap-4 mt-8 pr-6">
              <button
                onClick={scrollPrev}
                className={`p-3 rounded-full border ${
                  dark 
                    ? "border-white/20 text-white" 
                    : "border-black/20 text-black"
                }`}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={scrollNext}
                className={`p-3 rounded-full border ${
                  dark 
                    ? "border-white/20 text-white" 
                    : "border-black/20 text-black"
                }`}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Element>
  );
};

export default Work;
