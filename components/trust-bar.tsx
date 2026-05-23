import { Shield, Users, Award, Calendar } from "lucide-react"

const trustItems = [
  {
    icon: Shield,
    title: "FULLY INSURED",
    description: "Up to £10M Public Liability",
  },
  {
    icon: Users,
    title: "ROPE ACCESS SPECIALISTS",
    description: "Safe. Efficient. Cost Effective.",
  },
  {
    icon: Award,
    title: "HIGH SAFETY STANDARDS",
    description: "IRATA Trained Operatives",
  },
  {
    icon: Calendar,
    title: "FLEXIBLE SCHEDULING",
    description: "One-off or Regular Contracts",
  },
]

export function TrustBar() {
  return (
    <section className="bg-card border-y border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <item.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-foreground tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
