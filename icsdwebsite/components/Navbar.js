"use client"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const lastScrollY = useRef(0)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY.current && currentScrollY > 60) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }
      lastScrollY.current = currentScrollY
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`navbar transition-transform duration-300 ${showNavbar ? '' : '-translate-y-full'}`} style={{ willChange: 'transform' }}>
      <div className="nav-container">
        <div className="nav-logo">
          <Image src="/images/icsd-logo.png" alt="ICSD Club Logo" width={80} height={80} priority />
        </div>

        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}> 
          <button className="nav-link" onClick={() => scrollToSection("home")}> Home </button>
          <button className="nav-link" onClick={() => scrollToSection("about")}> About </button>
          <button className="nav-link" onClick={() => scrollToSection("departments")}> Recruitments </button>
          <button className="nav-link" onClick={() => scrollToSection("contact")}> Contact Us </button>
          <a href="https://icsdvitchennai.github.io/ICSD-Vit-Chennai/" className="nav-link"> Join us </a>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}
