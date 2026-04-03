"use client"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import styles from "./Navbar.module.css"
import Link from "next/link"


export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <section className={styles.navbar2}>
      <div id="Navbar" className={styles.navbar}>
      
        <div className={styles.logo}>
          <img src="images/logo.png" alt="" />
        </div>
        <nav className={`${styles.linknav} ${open ? styles.active : ""}`}>
          <Link className={styles.link} href="/">Home</Link>
          <Link className={styles.link} href="/about">Sobre</Link>
          <Link className={styles.link} href="/blog">Blog</Link>
          <Link className={styles.link} href="/contact">Contato</Link>
          <button className={styles.registre}>Login</button>
        </nav>
        <button
          className={styles.menuToggle}
          onClick={() => setOpen(!open)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </section>
  )
}