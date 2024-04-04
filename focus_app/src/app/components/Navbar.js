import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <Image src="/ff_logo.png" alt="FocusFlow logo" width={40} height={40} />
        <span className={styles.navbar_brand}>FocusFlow</span>
      </Link>
      <button>
        Sign In
        <img src="/arrow.svg" alt="arrow icon" />
      </button>
    </nav>
  );
};