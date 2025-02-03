import Link from "next/link";
import React from "react";
import { MdOutlineMenuBook } from "react-icons/md";
import DefaultBtn from "./DefaultBtn";

const CarteBtn = () => {
  return (
    <Link
      href="https://menu.eazee-link.com/?o=q&id=DHTLU688JL"
    >
      <DefaultBtn
        text="CARTE"
        icon={<MdOutlineMenuBook className="w-12 h-12 relative" />}
        className="h-[63px]"
        textStyles="text-4xl"
      />
    </Link>
  );
};

export default CarteBtn;
