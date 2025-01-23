import Link from "next/link";
import React from "react";
import { CiFacebook } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";

const HeaderMobile = () => {
  return (
    <>
      <header className="header-mobile flex flex-col items-center justify-center text-center">
        <p>
          RESTEZ À JOUR <br /> GRÂCE À NOS
        </p>
        <h2>RÉSEAUX SOCIAUX</h2>
        <div className="social flex flex-row justify-center">
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
            <BsInstagram />
          </Link>
        </div>
      </header>
    </>
  );
};

export default HeaderMobile;
