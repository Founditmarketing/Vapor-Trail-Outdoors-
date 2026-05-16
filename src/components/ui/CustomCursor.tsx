import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Use a very tight spring so it closely follows the mouse
  const springConfig = { damping: 40, stiffness: 800, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Only show custom cursor on desktop
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth > 768 && !window.matchMedia("(pointer: coarse)").matches);
    };
    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName?.toLowerCase() === 'a' ||
        target.tagName?.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.cursor-crosshair')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    if (isDesktop) {
      window.addEventListener("mousemove", moveCursor);
      window.addEventListener("mouseover", handleMouseOver);
      window.addEventListener("mouseout", handleMouseOut);
      window.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      window.removeEventListener("resize", checkIsDesktop);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible, isDesktop]);

  if (!isVisible || !isDesktop) return null;

  return (
    <>
      <style>
        {`
          body * {
            cursor: none !important;
          }
        `}
      </style>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div 
          className="relative flex items-center justify-center"
          animate={{
            width: isHovering ? 56 : 10,
            height: isHovering ? 56 : 10,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          {/* Outer target circle */}
          <motion.div 
            className="absolute inset-0 border-[1.5px] border-[#ff3300] rounded-full"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
               opacity: isHovering ? 0.9 : 0,
               scale: isHovering ? 1 : 0.5,
               rotate: isHovering ? 90 : 0
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Inner lock-on bracket (optional stylistic element) */}
          <motion.div 
            className="absolute inset-2 border-[0.5px] border-[#ff3300] rounded-full border-dashed"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
               opacity: isHovering ? 0.5 : 0,
               scale: isHovering ? 1 : 0,
               rotate: isHovering ? -90 : 0
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Center glowing dot */}
          <motion.div 
            className="w-1.5 h-1.5 rounded-full z-10 shadow-[0_0_8px_currentColor]"
            animate={{
               backgroundColor: isHovering ? "#ff3300" : "#39ff14",
               color: isHovering ? "#ff3300" : "#39ff14",
            }}
            transition={{ duration: 0.2 }}
          />

          {/* Horizontal crosshair line */}
          <motion.div 
            className="absolute w-[120%] h-[1px] bg-[#ff3300]"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{
               opacity: isHovering ? 0.7 : 0,
               scaleX: isHovering ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Vertical crosshair line */}
          <motion.div 
            className="absolute w-[1px] h-[120%] bg-[#ff3300]"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{
               opacity: isHovering ? 0.7 : 0,
               scaleY: isHovering ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
    </>
  );
}
