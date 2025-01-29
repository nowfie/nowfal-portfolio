import  { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 200, y: 200 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed -top-2 left-0 w-6 h-6 bg-paragraph-default/20 rounded-full pointer-events-none"
      style={{ translateX: "-50%", translateY: "-50%" }}
      animate={{
        x: cursorPosition.x,
        y: cursorPosition.y,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 200,
      }}
    />
  );
};

export default Cursor;
