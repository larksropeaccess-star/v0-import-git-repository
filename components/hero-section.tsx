import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.3) 100%), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')`
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            {"Bristol's Rope Access & Window Cleaning Specialists"}
          </p>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-2">
            HIGH-RISE WINDOW<br />CLEANING.
          </h1>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary italic mb-6">
            NO LIMITS.
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8 max-w-md">
            Professional rope access window cleaning for commercial buildings across Bristol and the South West.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-primary/90 transition-colors"
            >
              GET A FREE QUOTE
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="tel:07532835807"
              className="inline-flex items-center justify-center gap-2 border border-foreground text-foreground px-6 py-3 font-semibold hover:bg-foreground/10 transition-colors"
            >
              <Phone className="h-4 w-4" />
              07532 835807
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
