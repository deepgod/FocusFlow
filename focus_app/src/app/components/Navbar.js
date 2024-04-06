import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleSignInClick = () => {
    router.push("/sign-in");
  }

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <Image src="/ff_logo.png" alt="FocusFlow logo" width={40} height={40} />
        <span className={styles.navbar_brand}>FocusFlow</span>
      </Link>
      <button onClick={handleSignInClick}>
        Sign In
        <img src="/arrow.svg" alt="arrow icon" />
      </button>
    </nav>
  );
};

export default Navbar;