export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
<nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
    <span className="font-bold text-xl">LARKS</span>

    <div className="hidden md:flex gap-6">
      <a href="#services">Services</a>
      <a href="#why-larks">Why Larks</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
</nav>
      {/* HERO */}
      <section className="relative h-screen flex items-center">
        <img
          src="/Messenger_creation_1983A15C-16C8-4F58-9AF5-A7C80A6E877E.jpeg"
          alt="Larks Rope Access"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <img
            src="/file_00000000082c720a947b52e9a25698ba.png"
            alt="Larks Rope Access"
            className="h-36 mb-8"
          />

          <h1 className="text-7xl md:text-9xl font-bold mb-6 leading-none">
            HIGH-RISE WINDOW CLEANING.
            <br />
            NO LIMITS.
          </h1>

          <p className="text-xl mb-8 max-w-2xl">
            Specialist rope access window cleaning, inspections and access solutions for commercial buildings across Bristol and the South West.
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
              className="border border-white px-8 py-4 rounded font-bold text-center"
            >
              CALL 07532 835807
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">OUR SERVICES</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="border border-lime-500 p-6">
            <h3 className="text-2xl font-bold mb-3">Commercial Window Cleaning</h3>
            <p>Professional high-level glass cleaning.</p>
          </div>

          <div className="border border-lime-500 p-6">
            <h3 className="text-2xl font-bold mb-3">High Rise Window Cleaning</h3>
            <p>Safe rope access solutions for difficult buildings.</p>
          </div>

          <div className="border border-lime-500 p-6">
            <h3 className="text-2xl font-bold mb-3">Specialist Rope Access</h3>
            <p>Inspection, maintenance and specialist access work.</p>
          </div>
        </div>
      </section>
{/* WHY CHOOSE LARKS */}

  <section id="why-larks" className="py-20 px-6 text-center"><h2 className="text-4xl font-bold mb-10">
    WHY CHOOSE LARKS?
  </h2>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

    <div className="border border-lime-500 p-6">
      <h3 className="text-2xl font-bold mb-3">IRATA Techniques</h3>
      <p>Safe and efficient rope access methods for difficult-to-reach areas.</p>
    </div>

    <div className="border border-lime-500 p-6">
      <h3 className="text-2xl font-bold mb-3">Fully Insured</h3>
      <p>Professional service with full public liability insurance.</p>
    </div>

    <div className="border border-lime-500 p-6">
      <h3 className="text-2xl font-bold mb-3">No Scaffolding Required</h3>
      <p>Fast access solutions that reduce disruption and costs.</p>
    </div>

    <div className="border border-lime-500 p-6">
      <h3 className="text-2xl font-bold mb-3">Commercial Specialists</h3>
      <p>Experienced working on offices, apartments and high-rise buildings.</p>
    </div>

    <div className="border border-lime-500 p-6">
      <h3 className="text-2xl font-bold mb-3">Free Quotations</h3>
      <p>Clear pricing and honest advice with no obligation.</p>
    </div>

    <div className="border border-lime-500 p-6">
      <h3 className="text-2xl font-bold mb-3">South West Coverage</h3>
      <p>Serving Bristol and surrounding areas with reliable rope access services.</p>
    </div>

  </div>
</section>
      {/* GALLERY */}
      <section id="projects" className="py-20 px-6 bg-zinc-900">
        <h2 className="text-4xl font-bold text-center mb-10">RECENT PROJECTS</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <img src="/IMG-20260123-WA0003.jpg" className="rounded-lg h-64 w-full object-cover" />
          <img src="/IMG-20260123-WA0004.jpg" className="rounded-lg h-64 w-full object-cover" />
          <img src="/IMG-20260425-WA0011.jpg" className="rounded-lg h-64 w-full object-cover" />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">GET YOUR FREE QUOTE</h2>

        <div className="max-w-4xl mx-auto text-center">
         <p className="mb-4 text-2xl font-bold">07532 835807</p>
<p className="mb-4">larksropeaccess@gmail.com</p>
<p className="mb-8">Bristol & South West UK</p>

<a
  href="tel:07532835807"
  className="bg-lime-500 text-black px-8 py-4 rounded font-bold inline-block"
>
  CALL NOW
</a> 
          <p>Bristol & South West UK</p>
        </div>
      </section>

    </main>
  );
}
