"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import IconInstagram from "./IconInstagram";
import IconFacebook from "./IconFacebook";
import { motion, useTransform, useScroll } from "framer-motion";

const HeaderMobile = () => {
  const { scrollY } = useScroll();
  const threshold = 300; // Distance de scroll pour l'animation complète

  // Transformations basées sur le scroll
  const headerHeight = useTransform(scrollY, [0, threshold], ["14rem", "4rem"]);
  const textOpacity = useTransform(scrollY, [0, threshold * 0.7], [1, 0]);
  const socialScale = useTransform(scrollY, [0, threshold], [1, 0.8]);
  const socialPosition = useTransform(
    scrollY,
    [0, threshold],
    ["50%", "calc(100% - 4rem)"]
  );
  const borderRadius = useTransform(scrollY, [0, threshold], ["9rem", "2rem"]);

  // État pour suivre la classe "absolute"
  const [isAbsolute, setIsAbsolute] = useState(false);

  useEffect(() => {
    // Écoute les changements de textOpacity
    const unsubscribe = textOpacity.on("change", (value) => {
      setIsAbsolute(value < 0.5);
    });

    return () => unsubscribe(); // Nettoyage lors du démontage
  }, [textOpacity]);

  return (
    <>
      <motion.header
        className="bg-[#FCEFEF] mb-3 w-screen flex flex-col items-center justify-center text-center rounded-b-[9rem] fixed top-0 z-50 left-0 overflow-hidden"
        style={{
          height: headerHeight,
          borderBottomLeftRadius: borderRadius,
          borderBottomRightRadius: borderRadius,
        }}
      >
        <motion.div
          className="flex flex-col items-center"
          style={{ opacity: textOpacity }}
        >
          <p className="text-3xl mt-10">
            RESTEZ À JOUR <br /> GRÂCE À NOS
          </p>
          <h2
            className="mt-1 mb-1 text-4xl font-black font-titillium h2Stroke"
            style={{
              textShadow:
                "-1px -1px 0 #F193A2, 1px -1px 0 #F193A2, -1px 1px 0 #F193A2, 1px 1px 0 #F193A2",
            }}
          >
            RÉSEAUX SOCIAUX
          </h2>
        </motion.div>

        <motion.div
          className={`flex space-x-8 text-5xl ${
            isAbsolute ? "absolute right-0" : ""
          }`}
          style={{ scale: socialScale }}
        >
          <IconFacebook
            href="https://www.facebook.com/deliriumstrasbourg/"
            stroke={true}
            size="1.5"
            sizeStroke="9"
          />
          <IconInstagram
            href="https://www.instagram.com/deliriumcafestrasbourg/"
            stroke={true}
            size="1.5"
            sizeStroke="9"
          />
        </motion.div>
      </motion.header>

      {/* Espacement pour compenser le header fixed */}
      <motion.div style={{ height: headerHeight }} />
    </>
  );
};

export default HeaderMobile;
