import React from "react";
import { PiInstagramLogo } from "react-icons/pi";
import Link from "next/link";

interface IconInstagramProps {
  href: string;
  stroke: boolean;
  sizeStroke: string;
  size: string;
}
const IconInstagram: React.FC<IconInstagramProps> = ({
  href,
  stroke,
  sizeStroke,
  size,
}) => {
  return (
    <Link href={href} target="_blank" rel="noreferrer">
      {stroke ? (
        <PiInstagramLogo
          className={`absolute`}
          style={{
            stroke: "#F193A2",
            fill: "#F193A2",
            strokeWidth: `${sizeStroke}%`,
            zIndex: -5,
          }}
        />
      ) : null}
      <PiInstagramLogo
        style={{
          stroke: "black",
          strokeWidth: `${size}`,
          zIndex: 1,
        }}
      />
    </Link>
  );
};

export default IconInstagram;
