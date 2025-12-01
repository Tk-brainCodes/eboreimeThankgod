import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

interface ThemeProps {
  dark: boolean;
  toggleTheme: () => void;
}

const Toggle = ({ dark, toggleTheme }: ThemeProps) => {
  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex items-center gap-2 p-1 rounded-full cursor-pointer overflow-hidden"
      style={{
        width: "70px",
        height: "32px",
        backgroundColor: dark ? "#1a1a1a" : "#e5e5e5",
        border: dark ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0, 0, 0, 0.1)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {/* Sliding background indicator */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "26px",
          height: "26px",
          backgroundColor: dark ? "#ffffff" : "#000000",
          boxShadow: dark 
            ? "0 2px 8px rgba(255, 255, 255, 0.3)" 
            : "0 2px 8px rgba(0, 0, 0, 0.2)",
        }}
        initial={false}
        animate={{
          x: dark ? 40 : 2,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />

      {/* Sun Icon */}
      <motion.div
        className="absolute left-2 flex items-center justify-center"
        style={{ width: "26px", height: "26px" }}
        animate={{
          opacity: dark ? 0.4 : 1,
          scale: dark ? 0.8 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        <Sun 
          size={16} 
          color={dark ? "#ffffff" : "#000000"}
          strokeWidth={2.5}
        />
      </motion.div>

      {/* Moon Icon */}
      <motion.div
        className="absolute right-2 flex items-center justify-center"
        style={{ width: "26px", height: "26px" }}
        animate={{
          opacity: dark ? 1 : 0.4,
          scale: dark ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      >
        <Moon 
          size={16} 
          color={dark ? "#000000" : "#666666"}
          strokeWidth={2.5}
          fill={dark ? "#000000" : "none"}
        />
      </motion.div>
    </motion.button>
  );
};

export default Toggle;
