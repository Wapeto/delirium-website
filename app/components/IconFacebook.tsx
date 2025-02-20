import React from "react";
import { CiFacebook } from "react-icons/ci";
import Link from "next/link";
import styles from "./Icon.module.css";

interface IconInstagramProps {
  href: string;
}
const IconInstagram: React.FC<IconInstagramProps> = ({ href }) => {
  return (
    <Link href="https://www.facebook.com/" target="_blank" rel="noreferrer">
      <CiFacebook className={`${styles.iconOutline} absolute`} />
      <CiFacebook className={styles.iconMain} />
    </Link>
  );
};

export default IconInstagram;
