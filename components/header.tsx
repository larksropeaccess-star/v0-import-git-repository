"use client"

import Link from "next/link"
import { Phone, Menu, X } from "lucide-react"
import { useState } from "react"

const navLinks = [
  { href: "#home", label: "HOME", active: true },
  { href: "#services", label: "SERVICES" },
  { href: "#why-us", label: "WHY CHOOSE US" },
  { href: "#gallery", label: "GALLERY" },
  { href: "#about", label: "ABOUT US" },
  { href: "#contact", label: "CONTACT" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-foreground">
                L<span className="text-primary">A</span>RKS
              </span>
              <span className="text-[10px] tracking-[0.2em] text-primary -mt-1">ROPE ACCESS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  link.active ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Phone Number */}
          <div className="hidden lg:flex items-center gap-2 text-primary">
            <Phone className="h-4 w-4" />
            <span className="font-semibold">07532 835807</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    link.active ? "text-primary" : "text-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 text-primary pt-4 border-t border-border">
                <Phone className="h-4 w-4" />
                <span className="font-semibold">07532 835807</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
