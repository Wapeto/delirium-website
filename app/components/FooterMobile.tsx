import React from "react";
import Link from "next/link";
import IconFooterFacebook from "./IconFooterFacebook";
import { PiInstagramLogo } from "react-icons/pi";
import { PiPhoneThin } from "react-icons/pi";
import IconFooterMail from "./IconFooterMail";
import { HiOutlineMapPin } from "react-icons/hi2";

const FooterMobile = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 mt-4 bg-bleu w-full text-background font-titillium text-sm">
      <address className="flex justify-center text-4xl w-80">
        <Link
          href="https://www.facebook.com/deliriumstrasbourg/"
          target="_blank"
          rel="noreferrer"
          className="border border-background rounded-lg p-2 m-auto"
        >
          <IconFooterFacebook />
        </Link>
        <Link
          href="https://www.instagram.com/deliriumcafestrasbourg/"
          target="_blank"
          rel="noreferrer"
          className="border border-background rounded-lg p-2 m-auto"
        >
          <PiInstagramLogo />
        </Link>
        <Link
          href="tel:+000000000"
          className="border border-background rounded-lg p-2 m-auto"
        >
          <PiPhoneThin style={{ stroke: "black", strokeWidth: "4" }} />
        </Link>
        <Link
          href="mailto:oe@gmail.com"
          className="border border-background rounded-lg p-2 m-auto"
        >
          <IconFooterMail />
        </Link>
      </address>
      <Link
        href={
          "https://www.google.com/maps/place//data=!4m2!3m1!1s0x4796c84c1d430bf1:0x6d86f9bc1635704d?sa=X&ved=1t:8290&ictx=111"
        }
        className="flex items-center justify-center w-72 border border-background rounded-lg pt-2 pb-2"
      >
        <HiOutlineMapPin className="text-4xl" />
        <p className="m-auto font-semibold">
          5 Quai de Paris, 67000 Strasbourg
        </p>
      </Link>
      <p className="text-background font-bold">
        © 2025 Délirium Café Strasbourg - Tous droits réservés
      </p>
    </footer>
  );
};

export default FooterMobile;
