import Link from "next/link";
import React from "react";
import { CiFacebook } from "react-icons/ci";
import { PiInstagramLogo } from "react-icons/pi";
import styles from "./HeaderMobile.module.css";

const HeaderMobile = () => {
  return (
    <>
      <header
        className={`${styles.headerMobile} mb-3 w-screen flex flex-col items-center justify-center text-center rounded-b-[9rem]`}
      >
        <p className="text-3xl mt-10">
          RESTEZ À JOUR <br /> GRÂCE À NOS
        </p>
        <h2
          className={`${styles.h2Stroke} mt-1 mb-1 text-4xl font-black font-titillium`}
        >
          RÉSEAUX SOCIAUX
        </h2>
        <div
          className={`${styles.social} flex flex-row justify-center text-6xl relative`}
        >
          <Link
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            <CiFacebook className={`${styles.iconOutline} absolute`} />
            <CiFacebook className={styles.iconMain} />
          </Link>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <PiInstagramLogo className={`${styles.iconOutline} absolute`} />
            <PiInstagramLogo className={styles.iconMain} />
          </Link>
        </div>
      </header>
    </>
  );
};

export default HeaderMobile;
