import Link from "next/link";
import { HiOutlineMapPin } from "react-icons/hi2";
import { PiInstagramLogo, PiPhoneThin } from "react-icons/pi";
import { BsEnvelope } from "react-icons/bs";
import IconFooterFacebook from "./Icons/IconFooterFacebook";

const FooterMobile = () => {
  return (
    <footer
      className="flex flex-col items-center justify-center gap-4 mt-[-2px] bg-gradient-to-b from-beige via-[#6BC3DB] to-bleu w-full text-[#444343] font-titillium text-sm pt-24"
      style={{}}
    >
      <address className="flex justify-center text-4xl w-80">
        <Link
          href="https://www.facebook.com/deliriumstrasbourg/"
          target="_blank"
          rel="noreferrer"
          className="border border-[#444343] rounded-lg p-2 m-auto"
        >
          <IconFooterFacebook />
        </Link>
        <Link
          href="https://www.instagram.com/deliriumcafestrasbourg/"
          target="_blank"
          rel="noreferrer"
          className="border border-[#444343] rounded-lg p-2 m-auto"
        >
          <PiInstagramLogo />
        </Link>
        <Link
          href="tel:+000000000"
          className="border border-[#444343] rounded-lg p-2 m-auto"
        >
          <PiPhoneThin
            style={{ stroke: "#444343", strokeWidth: "5", fill: "#444343" }}
          />
        </Link>
        <Link
          href="mailto:oe@gmail.com"
          className="border border-[#444343] rounded-lg p-2 m-auto"
        >
          <BsEnvelope className="text-[#444343]"/>
        </Link>
      </address>
      <Link
        href={
          "https://www.google.com/maps/place//data=!4m2!3m1!1s0x4796c84c1d430bf1:0x6d86f9bc1635704d?sa=X&ved=1t:8290&ictx=111"
        }
        className="flex items-center justify-center w-72 border border-[#444343] rounded-lg pt-2 pb-2 gap-3"
      >
        <HiOutlineMapPin className="text-4xl" style={{ stroke: "#444343" }} />
        <p className=" font-semibold">5 Quai de Paris, 67000 Strasbourg</p>
      </Link>
      <p className="font-bold mb-5">
        © 2025 Délirium Café Strasbourg - Tous droits réservés
      </p>
    </footer>
  );
};

export default FooterMobile;
