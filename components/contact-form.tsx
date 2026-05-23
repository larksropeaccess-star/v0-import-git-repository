"use client"

import { ArrowRight, Phone, Mail, MapPin } from "lucide-react"
import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div id="contact" className="lg:w-1/2 bg-card p-8 lg:p-12">
      <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">
        GET A FREE QUOTE
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
        TELL US ABOUT YOUR PROJECT
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          <input
            type="text"
            placeholder="Company (Optional)"
            className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>
        <textarea
          placeholder="Tell us about your project..."
          rows={4}
          className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-primary/90 transition-colors"
        >
          SEND ENQUIRY
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>

      <div className="mt-8 flex flex-wrap gap-6 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Phone className="h-4 w-4 text-primary" />
          <span>07532 835807</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Mail className="h-4 w-4 text-primary" />
          <span>larksropeaccess@gmail.com</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" />
          <span>Bristol, UK</span>
        </div>
      </div>
    </div>
  )
}
