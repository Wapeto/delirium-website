/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { motion } from "framer-motion";

interface MotionIconProps {
  icon: React.ReactElement;
  initial?: any;
  animate?: any;
  exit?: any;
  whileHover?: any;
  whileTap?: any;
  className?: string;
}

const MotionIcon: React.FC<MotionIconProps> = ({
  icon: Icon,
  initial = { scale: 1 },
  animate = { scale: 1 },
  exit = { scale: 0 },
  whileHover = { scale: 1.05 },
  whileTap = { scale: 0.95 },
  className,
}) => {
  return (
    <motion.span
      initial={initial}
      animate={animate}
      exit={exit}
      whileHover={whileHover}
      whileTap={whileTap}
      className={className}
    >
      {Icon}
    </motion.span>
  );
};

export default MotionIcon;
