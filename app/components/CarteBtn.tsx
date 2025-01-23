import Link from "next/link";
import React from "react";
import { MdOutlineMenuBook } from "react-icons/md";

const CarteBtn = () => {
  return (
    <Link
      href="https://menu.eazee-link.com/?o=q&id=DHTLU688JL"
      className="bg-rose w-[180px] h-[63px] px-2 py-1 rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] justify-center items-center gap-2 inline-flex"
    >
      <MdOutlineMenuBook className="w-12 h-12 relative" />
      <p className="text-center text-[#fcefef] text-4xl font-black font-titillium">
        CARTE
      </p>
    </Link>
  );
};

export default CarteBtn;
