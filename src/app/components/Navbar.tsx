"use client"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import styles from "./Navbar.module.css"
import Link from "next/link"

type NavbarProps = {
  onOpenModal: () => void
  isModalOpen: boolean
}

export default function Navbar({ onOpenModal, isModalOpen }: NavbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <section className={styles.navbar2}>
      <div
        className={`${styles.navbar} ${
          isModalOpen ? styles.dark : ""
        }`}
      >
      
        <div className={styles.logo}>
          <img src="images/logo.png" alt="" />
        </div>

        <nav className={`${styles.linknav} ${open ? styles.active : ""}`}>
          <Link className={styles.link} href="/">Home</Link>
          <Link className={styles.link} href="/about">Sobre</Link>
          <Link className={styles.link} href="/blog">Blog</Link>
          <Link className={styles.link} href="/contact">Contato</Link>

          <button
            className={styles.registre}
            onClick={onOpenModal}
          >
            Login
          </button>
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