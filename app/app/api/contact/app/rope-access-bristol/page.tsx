export const metadata = {
  title: "Rope Access Bristol | Larks Rope Access",
  description:
    "Professional rope access services in Bristol including high-rise window cleaning, inspections and specialist access work.",
};

export default function RopeAccessBristol() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold text-lime-400 mb-8">
          Rope Access Bristol
        </h1>

        <p className="text-xl text-zinc-300 mb-8">
          Larks Rope Access provides safe, professional rope access services
          throughout Bristol and the South West. We specialise in commercial
          window cleaning, high-rise maintenance and difficult access solutions.
        </p>

        <h2 className="text-3xl font-bold text-lime-400 mb-4">
          Our Rope Access Services
        </h2>

        <ul className="space-y-3 text-zinc-300 mb-10">
          <li>• High-rise window cleaning</li>
          <li>• Commercial building maintenance</li>
          <li>• Building inspections</li>
          <li>• Specialist access work</li>
          <li>• Difficult-to-reach cleaning</li>
        </ul>

        <h2 className="text-3xl font-bold text-lime-400 mb-4">
          Why Choose Larks Rope Access?
        </h2>

        <p className="text-zinc-300 mb-10">
          Our rope access techniques reduce disruption, eliminate the need for
          scaffolding in many situations and provide a safe, cost-effective
          solution for commercial properties across Bristol.
        </p>

        <a
          href="/#contact"
          className="inline-block bg-lime-400 text-black font-bold px-8 py-4 rounded-lg"
        >
          Request a Free Quote
        </a>

      </div>
    </main>
  );
}
