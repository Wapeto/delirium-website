import React from "react";
import { PiInstagramLogo } from "react-icons/pi";
import Link from "next/link";
import styles from "./Icon.module.css";

interface IconInstagramProps {
  href: string;
}
const IconInstagram: React.FC<IconInstagramProps> = ({ href }) => {
  return (
    <Link href="https://www.instagram.com/" target="_blank" rel="noreferrer">
      <PiInstagramLogo className={`${styles.iconOutline} absolute`} />
      <PiInstagramLogo className={styles.iconMain} />
    </Link>
  );
};

export default IconInstagram;