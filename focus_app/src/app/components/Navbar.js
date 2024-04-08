import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { useRouter } from "next/navigation";
import { useAuth } from "./authContext";

const Navbar = () => {
  const router = useRouter();
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const handleButtonClick = () => {
    if (isLoggedIn) {
      // If user is logged in, log them out
      setIsLoggedIn(false);
      router.push("/");
    } else {
      // If user is not logged in, redirect to sign-in page
      router.push("/sign-in");
    }
  };


  return (
    <nav className={styles.navbar}>
      <a href="/home">
        <Image src="/ff_logo.png" alt="FocusFlow logo" width={40} height={40} />
        <span className={styles.navbar_brand}>FocusFlow</span>
      </a>
      <button onClick={handleButtonClick}>
        {isLoggedIn ? "Log Out" : "Sign In"}
        <img src="/arrow.svg" alt="arrow icon" />
      </button>
    </nav>
  );
};

export default Navbar;