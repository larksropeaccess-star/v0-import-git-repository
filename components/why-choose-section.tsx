import { Check } from "lucide-react"

const benefits = [
  "IRATA trained and experienced operatives",
  "Full method statements & risk assessments",
  "Advanced equipment and techniques",
  "Minimise disruption to your business",
  "Competitive pricing & free quotes",
]

export function WhyChooseSection() {
  return (
    <div id="why-us" className="lg:w-1/2 bg-background p-8 lg:p-12">
      <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">
        WHY CHOOSE LARKS ROPE ACCESS?
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
        SAFETY. QUALITY. RELIABILITY.
      </h2>
      <p className="text-muted-foreground mb-8 leading-relaxed">
        We combine specialist rope access techniques with a relentless focus on safety and quality to deliver outstanding results for every client.
      </p>
      
      <ul className="space-y-4">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center gap-3">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
              <Check className="h-3 w-3 text-primary-foreground" />
            </div>
            <span className="text-foreground text-sm">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
