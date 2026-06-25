export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          <a href="#">
            <img
              src="/file_00000000082c720a947b52e9a25698ba.png"
              alt="Larks Rope Access"
              className="h-12 md:h-14"
            />
          </a>

          <div className="flex gap-4 md:gap-6 text-sm">
            <a href="#services">Services</a>
            <a href="#why-larks">Why Larks</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-screen flex items-center pt-20">

        <img
          src="/Messenger_creation_1983A15C-16C8-4F58-9AF5-A7C80A6E877E.jpeg"
          alt="Rope Access"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-none">
            HIGH-RISE WINDOW CLEANING.
            <br />
            <span className="text-lime-400">
              NO LIMITS.
            </span>
          </h1>

          <p className="text-xl mb-8 max-w-2xl text-zinc-300">
            Specialist rope access window cleaning, inspections and
            access solutions for commercial buildings throughout
            Bristol and the South West.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">

            <a
              href="#contact"
              className="bg-lime-500 text-black px-10 py-5 rounded font-bold text-center text-lg"
            >
              GET A FREE QUOTE
            </a>

            <a
              href="tel:07532835807"
              className="border border-white px-8 py-5 rounded font-bold text-center"
            >
              CALL 07532 835807
            </a>

          </div>

        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-8 border-y border-zinc-800">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-6 text-center">

            <div>
              <p className="text-lime-400 text-3xl font-bold">IRATA</p>
              <p>Rope Access Methods</p>
            </div>

            <div>
              <p className="text-lime-400 text-3xl font-bold">Fully</p>
              <p>Insured</p>
            </div>

            <div>
              <p className="text-lime-400 text-3xl font-bold">Bristol</p>
              <p>& South West Coverage</p>
            </div>

            <div>
              <p className="text-lime-400 text-3xl font-bold">Free</p>
              <p>Quotations</p>
            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 text-center">

        <h2 className="text-4xl font-bold text-lime-400 mb-10">
          ⚙ OUR SERVICES
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-zinc-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-3">
              Commercial Window Cleaning
            </h3>
            <p>Professional high-level glass cleaning.</p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-3">
              High Rise Window Cleaning
            </h3>
            <p>Safe rope access solutions for difficult buildings.</p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-3">
              Specialist Rope Access
            </h3>
            <p>Inspection, maintenance and specialist access work.</p>
          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 bg-zinc-900">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-lime-400 mb-8">
            👷 ABOUT LARKS
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed">
            Larks Rope Access provides specialist high-rise window cleaning,
            building inspections and rope access solutions throughout Bristol
            and the South West. We deliver safe and efficient access without
            the need for expensive scaffolding, helping commercial clients
            maintain their buildings safely and professionally.
          </p>

        </div>

      </section>

      {/* WHY CHOOSE LARKS */}
      <section id="why-larks" className="py-20 px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-lime-400 mb-10">
          ✔ WHY CHOOSE LARKS?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-zinc-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-3">IRATA Techniques</h3>
            <p>Safe and efficient rope access methods.</p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-3">Fully Insured</h3>
            <p>Professional service with public liability insurance.</p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-3">
              No Scaffolding Required
            </h3>
            <p>Reduce disruption and costs.</p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-3">
              Commercial Specialists
            </h3>
            <p>Experienced with offices and high-rise buildings.</p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-3">
              Free Quotations
            </h3>
            <p>Clear pricing and honest advice.</p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-3">
              South West Coverage
            </h3>
            <p>Bristol and surrounding areas covered.</p>
          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-4">

        <h2 className="text-4xl font-bold text-lime-400 text-center mb-10">
          📸 RECENT PROJECTS
        </h2>

        <div className="grid md:grid-cols-3 gap-2 max-w-7xl mx-auto">

          <img
            src="/IMG-20260123-WA0003.jpg"
            className="rounded-xl h-80 w-full object-cover"
            alt=""
          />

          <img
            src="/IMG-20260123-WA0004.jpg"
            className="rounded-xl h-80 w-full object-cover"
            alt=""
          />

          <img
            src="/IMG-20260425-WA0011.jpg"
            className="rounded-xl h-80 w-full object-cover"
            alt=""
          />

        </div>

      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 text-center">

        <h2 className="text-4xl font-bold text-lime-400 mb-10">
          ⭐ TRUSTED BY CLIENTS
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-zinc-900 p-8 rounded-xl">
            <p>Excellent service and very professional.</p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-xl">
            <p>Reliable, safe and completed with minimal disruption.</p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-xl">
            <p>Would highly recommend for commercial window cleaning.</p>
          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 text-center bg-zinc-900">

        <h2 className="text-4xl font-bold text-lime-400 mb-10">
          ☎ GET YOUR FREE QUOTE
        </h2>

        <div className="max-w-4xl mx-auto">

          <p className="mb-4 text-2xl font-bold">
            07532 835807
          </p>

          <p className="mb-4">
            larksropeaccess@gmail.com
          </p>

          <p className="mb-8">
            Bristol & South West UK
          </p>

          <a
            href="tel:07532835807"
            className="bg-lime-500 text-black px-8 py-4 rounded font-bold inline-block"
          >
            CALL NOW
          </a>

        </div>

      </section>

    </main>
  );
}
