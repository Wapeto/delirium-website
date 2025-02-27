"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import IconInstagram from "./IconInstagram";
import IconFacebook from "./IconFacebook";
import Image from "next/image";

const HeaderMobile = () => {
  const { scrollY } = useScroll();
  const threshold = 300; // Distance de scroll pour l'animation complète

  // Animation du header, du texte et des icônes
  const headerHeight = useTransform(scrollY, [0, threshold], ["14rem", "4rem"]);
  const textOpacity = useTransform(scrollY, [0, threshold * 0.7], [1, 0]);
  const socialScale = useTransform(scrollY, [0, threshold], [1, 0.8]);
  const borderRadius = useTransform(scrollY, [0, threshold], ["9rem", "2rem"]);

  // Définition de l'opacité du logo : il apparaît quand le texte a disparu
  const logoOpacity = useTransform(
    scrollY,
    [threshold * 0.7, threshold],
    [0, 1]
  );

  // Définition de l'opacité des icônes :
  // Elles disparaissent au même rythme que le texte (de 1 à 0 entre 0 et 210)
  // et réapparaissent au même rythme que le logo (de 0 à 1 entre 210 et 300)
  const iconsOpacity = useTransform(
    scrollY,
    [0, threshold * 0.7, threshold],
    [1, 0, 1]
  );

  // État pour suivre la classe "absolute" pour les icônes sociales
  const [isAbsolute, setIsAbsolute] = useState(false);

  useEffect(() => {
    const unsubscribe = textOpacity.on("change", (value) => {
      setIsAbsolute(value <= 0.01);
    });
    return () => unsubscribe();
  }, [textOpacity]);

  return (
    <>
      <motion.header
        className="bg-beige mb-3 w-screen flex flex-col items-center justify-center text-center rounded-b-[9rem] fixed top-0 z-50 left-0 overflow-hidden text-background"
        style={{
          height: headerHeight,
          borderBottomLeftRadius: borderRadius,
          borderBottomRightRadius: borderRadius,
        }}
      >
        {/* Logo animé : son opacité passe de 0 à 1 quand le header se réduit */}
        <motion.div
          className="w-52 absolute top-1 left-3"
          style={{ opacity: logoOpacity }}
        >
          <Link href={"#"}>
            <Image
              src="/img/Logo-deli-texte-sombre.png"
              alt="Logo"
              width={208}
              height={208}
            />
          </Link>
        </motion.div>

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
          style={{ opacity: iconsOpacity, scale: socialScale }}
        >
          <IconFacebook
            href="https://www.facebook.com/deliriumstrasbourg/"
            stroke={true}
            size="1.5%"
            sizeStroke="9"
          />
          <IconInstagram
            href="https://www.instagram.com/deliriumcafestrasbourg/"
            stroke={true}
            size="1.5%"
            sizeStroke="9"
          />
        </motion.div>
      </motion.header>

      {/* Espacement pour compenser le header fixe */}
      <motion.div style={{ height: headerHeight }} />
    </>
  );
};

export default HeaderMobile;
