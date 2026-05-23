import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact" },
]

const services = [
  "Commercial Window Cleaning",
  "High-Rise Window Cleaning",
  "Rope Access Services",
  "Cladding & Facade Cleaning",
  "Pressure Washing",
]

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="Larks Rope Access"
                width={160}
                height={60}
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional rope access window cleaning and building services in Bristol and the South West.
            </p>
            <p className="text-xs text-muted-foreground mt-6">
              © 2024 Larks Rope Access. All Rights Reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-primary tracking-wider uppercase mb-4">
              QUICK LINKS
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold text-primary tracking-wider uppercase mb-4">
              SERVICES
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold text-primary tracking-wider uppercase mb-4">
              CONTACT
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="tel:07532835807"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  07532 835807
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:larksropeaccess@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  larksropeaccess@gmail.com
                </Link>
              </li>
              <li>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  Bristol, UK
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
