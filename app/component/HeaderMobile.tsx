import Link from "next/link";
import React from "react";
import { CiFacebook } from "react-icons/ci";
import { PiInstagramLogo } from "react-icons/pi";
import styles from "./HeaderMobile.module.css";

const HeaderMobile = () => {
  return (
    <>
      <header
        className={`${styles.headerMobile} w-screen flex flex-col items-center justify-center text-center headerMobile`}
      >
        <p className="text-3xl mt-10">
          RESTEZ À JOUR <br /> GRÂCE À NOS
        </p>
        <h2 className="mt-1 mb-1 text-4xl font-black font-titillium">
          RÉSEAUX SOCIAUX
        </h2>
        <div className="social flex flex-row justify-center text-4xl">
          <Link
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            <CiFacebook />
          </Link>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <PiInstagramLogo />
          </Link>
        </div>
      </header>
    </>
  );
};

export default HeaderMobile;
