import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrustBar } from "@/components/trust-bar"
import { ServicesSection } from "@/components/services-section"
import { GallerySection } from "@/components/gallery-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <GallerySection />
      
      {/* Why Choose Us + Contact Form Section */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row">
            <WhyChooseSection />
            <ContactForm />
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
