import React from "react";
import { CiFacebook } from "react-icons/ci";
import Link from "next/link";
import styles from "./Icon.module.css";
import { s } from "motion/react-client";

interface IconFacebookProps {
  href: string;
  stroke: boolean;
  sizeStroke: string;
  size: string;
}
const IconFacebook: React.FC<IconFacebookProps> = ({
  href,
  stroke,
  sizeStroke,
  size,
}) => {
  return (
    <Link href={href} target="_blank" rel="noreferrer">
      {stroke ? (
        <CiFacebook
          className={`absolute`}
          style={{
            stroke: "#F193A2",
            fill: "#F193A2",
            strokeWidth: `${sizeStroke}%`,
            zIndex: -5,
          }}
        />
      ) : null}
      <CiFacebook
        style={{
          stroke: "black",
          strokeWidth: `${size}%`,
          zIndex: 1,
        }}
      />
    </Link>
  );
};

export default IconFacebook;
