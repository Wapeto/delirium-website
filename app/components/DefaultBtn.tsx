"use client";

import React from "react";
import { motion } from "motion/react";
import classNames from "classnames";

interface ButtonProps {
  onClickEvent?: () => void;
  text?: string;
  icon?: React.ReactNode;
  className?: string;
  textStyles?: string;
}

const DefaultBtn: React.FC<ButtonProps> = ({
  onClickEvent,
  text,
  className,
  icon,
  textStyles,
}) => {
  return (
    <motion.button
      onClick={onClickEvent}
      whileHover={{ scale: 1.05}}
      whileTap={{ scale: 0.95 }}
      className={classNames(
        "w-[180px] h-[45px] px-2 py-1 bg-rose rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex justify-center items-center gap-2",
        className
      )}
    >
      {icon}
      <div
        className={classNames(
          "text-center text-beige text-2xl font-black font-titillium",
          textStyles
        )}
      >
        {text}
      </div>
    </motion.button>
  );
};

export default DefaultBtn;
