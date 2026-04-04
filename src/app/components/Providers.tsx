"use client"

import { useState } from "react"
import Navbar from "./Navbar"
import ModalRegistro from "./Modal"
import Footer from "../sections/Footer"

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Navbar 
  onOpenModal={() => setIsOpen(true)} 
  isModalOpen={isOpen}
/>

      {children}

      <ModalRegistro
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

      <Footer />
    </>
  )
}