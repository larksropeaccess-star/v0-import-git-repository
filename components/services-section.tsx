import { Building2, Building, Cable, Sparkles } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "COMMERCIAL WINDOW CLEANING",
    description: "Streak-free cleaning for offices, retail, and commercial buildings of all heights.",
  },
  {
    icon: Building,
    title: "HIGH-RISE WINDOW CLEANING",
    description: "Specialist cleaning for high-rise and hard-to-reach windows using rope access.",
  },
  {
    icon: Lasso,
    title: "ROPE ACCESS SERVICES",
    description: "Versatile access solutions for difficult areas without the need for expensive plant.",
  },
  {
    icon: Sparkles,
    title: "CLADDING & FACADE CLEANING",
    description: "Remove dirt, grime and pollution from building cladding and facades.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-zinc-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">
            OUR SERVICES
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-wide">
            COMMERCIAL WINDOW CLEANING & MORE
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
                <service.icon className="h-12 w-12 text-primary" strokeWidth={1} />
              </div>
              <h3 className="text-sm font-bold text-zinc-900 mb-3 tracking-wide">
                {service.title}
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
