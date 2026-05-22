export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-lime-500/10 to-black"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-36">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 border border-lime-500 rounded-full text-lime-400 text-sm tracking-widest uppercase mb-6">
                Bristol Rope Access Specialists
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                High-Rise
                <span className="text-lime-400 block">Window Cleaning</span>
              </h1>

              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                Professional commercial window cleaning and rope access services across Bristol and the South West.
                Fully insured and IRATA certified.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:07532835807"
                  className="bg-lime-500 hover:bg-lime-400 transition-colors text-black px-8 py-4 rounded-2xl font-bold text-center"
                >
                  Call Now
                </a>

                <a
                  href="mailto:larksropeaccess@gmail.com"
                  className="border border-white/20 hover:border-lime-400 hover:text-lime-400 transition-all px-8 py-4 rounded-2xl font-semibold text-center"
                >
                  Request a Quote
                </a>
              </div>
            </div>

            <div className="bg-zinc-900 border border-lime-500/20 rounded-3xl p-8 shadow-2xl shadow-lime-500/10">
              <img
                src="/logo.png"
                alt="Larks Rope Access"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Fully Insured & IRATA Certified
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Specialist commercial window cleaning and rope access solutions for high-rise and difficult-to-access buildings across Bristol and the South West.
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-2xl font-black">
              LARKS <span className="text-lime-400">ROPE ACCESS</span>
            </h3>
            <p className="text-gray-500 mt-2">
              Commercial Window Cleaning in Bristol
            </p>
          </div>

          <div className="text-gray-500 text-sm">
            © 2026 Larks Rope Access
          </div>
        </div>
      </footer>
    </div>
  )
}
