export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* ================= NAVIGATION ================= */}

      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <a href="#">
            <img
              src="/file_00000000082c720a947b52e9a25698ba.png"
              alt="Larks Rope Access"
              className="h-12 md:h-16 w-auto"
            />
          </a>

          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
            <a href="#services" className="hover:text-lime-400 transition">
              Services
            </a>

            <a href="#why-larks" className="hover:text-lime-400 transition">
              Why Larks
            </a>

            <a href="#projects" className="hover:text-lime-400 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-lime-400 transition">
              Contact
            </a>
          </div>

        </div>
      </nav>

      {/* ================= HERO ================= */}

      <section className="relative min-h-screen flex items-center overflow-hidden pt-24">

        <img
          src="/Messenger_creation_1983A15C-16C8-4F58-9AF5-A7C80A6E877E.jpeg"
          alt="Larks Rope Access"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-35 translate-y-10"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <img
            src="/file_00000000082c720a947b52e9a25698ba.png"
            alt="Larks Rope Access"
            className="h-36 md:h-48 mb-8"
          />

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-6">

            HIGH-RISE WINDOW CLEANING.

            <br />

            <span className="text-lime-400 drop-shadow-[0_0_18px_rgba(163,230,53,0.9)]">
              NO LIMITS.
            </span>

          </h1>

          <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mb-10 leading-relaxed">
            Specialist rope access window cleaning, inspections and maintenance
            for commercial buildings throughout Bristol and the South West.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">

            <a
              href="#contact"
              className="bg-lime-400 hover:bg-lime-300 transition text-black px-10 py-5 rounded-xl font-bold text-lg"
            >
              GET A FREE QUOTE
            </a>

            <a
              href="tel:07532835807"
              className="border border-white hover:border-lime-400 hover:text-lime-400 transition px-10 py-5 rounded-xl font-bold text-lg"
            >
              CALL 07532 835807
            </a>

          </div>

        </div>

      </section>

      {/* ================= TRUST BAR ================= */}

      <section className="bg-black border-y border-zinc-800 py-10">

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center px-6">

          <div>

            <div className="text-5xl mb-3 text-lime-400">🪢</div>

            <h3 className="text-lime-400 text-3xl font-bold drop-shadow-[0_0_12px_rgba(163,230,53,0.8)]">
              IRATA
            </h3>

            <p className="text-zinc-400 mt-2">
              Rope Access Methods
            </p>

          </div>

          <div>

            <div className="text-5xl mb-3 text-lime-400">🛡</div>

            <h3 className="text-lime-400 text-3xl font-bold drop-shadow-[0_0_12px_rgba(163,230,53,0.8)]">
              Fully
            </h3>

            <p className="text-zinc-400 mt-2">
              Insured
            </p>

          </div>

          <div>

            <div className="text-5xl mb-3 text-lime-400">📍</div>

            <h3 className="text-lime-400 text-3xl font-bold drop-shadow-[0_0_12px_rgba(163,230,53,0.8)]">
              Bristol
            </h3>

            <p className="text-zinc-400 mt-2">
              & South West
            </p>

          </div>

          <div>

            <div className="text-5xl mb-3 text-lime-400">✔</div>

            <h3 className="text-lime-400 text-3xl font-bold drop-shadow-[0_0_12px_rgba(163,230,53,0.8)]">
              Free
            </h3>

            <p className="text-zinc-400 mt-2">
              Quotations
            </p>

          </div>

        </div>

      </section>
{/* ================= SERVICES ================= */}

      <section id="services" className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-black text-lime-400 text-center mb-16 drop-shadow-[0_0_12px_rgba(163,230,53,0.8)]">
            ⚙ OUR SERVICES
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-zinc-900 rounded-2xl p-8 hover:-translate-y-2 transition duration-300 border border-zinc-800 hover:border-lime-400">

              <div className="text-5xl mb-5">🏢</div>

              <h3 className="text-2xl font-bold mb-4">
                Commercial Window Cleaning
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Professional high-level glass cleaning for offices, retail units
                and commercial buildings.
              </p>

            </div>

            <div className="bg-zinc-900 rounded-2xl p-8 hover:-translate-y-2 transition duration-300 border border-zinc-800 hover:border-lime-400">

              <div className="text-5xl mb-5">🪢</div>

              <h3 className="text-2xl font-bold mb-4">
                High Rise Window Cleaning
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Safe rope access solutions for buildings where traditional
                access isn't practical.
              </p>

            </div>

            <div className="bg-zinc-900 rounded-2xl p-8 hover:-translate-y-2 transition duration-300 border border-zinc-800 hover:border-lime-400">

              <div className="text-5xl mb-5">🔧</div>

              <h3 className="text-2xl font-bold mb-4">
                Specialist Rope Access
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Inspections, maintenance and specialist access work completed
                safely and efficiently.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= WHY LARKS ================= */}

      <section id="why-larks" className="py-24 bg-zinc-950 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-black text-lime-400 text-center mb-16 drop-shadow-[0_0_12px_rgba(163,230,53,0.8)]">
            ★ WHY CHOOSE LARKS
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              ["🪢","IRATA Techniques","Safe professional rope access methods."],
              ["🛡","Fully Insured","Complete public liability insurance."],
              ["🚫","No Scaffolding","Less disruption and lower costs."],
              ["🏢","Commercial Specialists","Experienced on offices and apartments."],
              ["💷","Free Quotations","Fast honest quotations."],
              ["📍","South West Coverage","Based in Bristol covering the South West."]
            ].map(([icon,title,text]) => (

              <div
                key={title}
                className="bg-black rounded-2xl p-8 border border-zinc-800 hover:border-lime-400 hover:-translate-y-2 transition"
              >

                <div className="text-5xl mb-5">{icon}</div>

                <h3 className="text-2xl font-bold mb-3">
                  {title}
                </h3>

                <p className="text-zinc-400">
                  {text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section id="projects" className="py-24">

        <h2 className="text-center text-5xl font-black text-lime-400 mb-6 drop-shadow-[0_0_12px_rgba(163,230,53,0.8)]">
          📷 RECENT PROJECTS
        </h2>

        <p className="text-center text-zinc-400 max-w-2xl mx-auto mb-12">
          Recent rope access window cleaning projects completed across Bristol
          and the South West.
        </p>

        <div className="grid md:grid-cols-3 gap-2 px-2">

          <img
            src="/IMG-20260123-WA0003.jpg"
            className="h-[420px] w-full object-cover rounded-xl hover:scale-[1.02] transition"
            alt=""
          />

          <img
            src="/IMG-20260123-WA0004.jpg"
            className="h-[420px] w-full object-cover rounded-xl hover:scale-[1.02] transition"
            alt=""
          />

          <img
            src="/IMG-20260425-WA0011.jpg"
            className="h-[420px] w-full object-cover rounded-xl hover:scale-[1.02] transition"
            alt=""
          />

        </div>

      </section>

      {/* ================= TESTIMONIALS ================= */}

      <section className="py-24 px-6 bg-zinc-950">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-5xl font-black text-lime-400 mb-16 drop-shadow-[0_0_12px_rgba(163,230,53,0.8)]">
            ★ TRUSTED BY CLIENTS
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-black rounded-2xl p-8 border border-zinc-800">
              <p className="italic mb-6 text-zinc-300">
                "Excellent service from start to finish. Professional, reliable
                and highly recommended."
              </p>
              <strong>Commercial Client</strong>
            </div>

            <div className="bg-black rounded-2xl p-8 border border-zinc-800">
              <p className="italic mb-6 text-zinc-300">
                "Completed safely with minimal disruption to our business."
              </p>
              <strong>Property Manager</strong>
            </div>

            <div className="bg-black rounded-2xl p-8 border border-zinc-800">
              <p className="italic mb-6 text-zinc-300">
                "Outstanding rope access specialists. We'll definitely use them
                again."
              </p>
              <strong>Facilities Manager</strong>
            </div>

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact" className="py-24 px-6 text-center">

        <h2 className="text-5xl font-black text-lime-400 mb-10 drop-shadow-[0_0_12px_rgba(163,230,53,0.8)]">
          ✉{/* ================= CONTACT ================= */}

<section
  id="contact"
  className="py-24 px-6 bg-zinc-950"
>

  <div className="max-w-5xl mx-auto">

    <h2 className="text-5xl font-black text-center text-lime-400 mb-4">
      GET YOUR FREE QUOTE
    </h2>

    <p className="text-center text-zinc-400 mb-12">
      Tell us about your project and we'll get back to you as soon as possible.
    </p>

    <form className="grid md:grid-cols-2 gap-6">

      <input
        type="text"
        placeholder="Full Name"
        className="bg-black border border-zinc-700 rounded-xl p-4 outline-none focus:border-lime-400"
      />

      <input
        type="email"
        placeholder="Email Address"
        className="bg-black border border-zinc-700 rounded-xl p-4 outline-none focus:border-lime-400"
      />

      <input
        type="tel"
        placeholder="Phone Number"
        className="bg-black border border-zinc-700 rounded-xl p-4 outline-none focus:border-lime-400"
      />

      <input
        type="text"
        placeholder="Company (Optional)"
        className="bg-black border border-zinc-700 rounded-xl p-4 outline-none focus:border-lime-400"
      />

      <textarea
        rows={6}
        placeholder="Tell us about your project..."
        className="md:col-span-2 bg-black border border-zinc-700 rounded-xl p-4 outline-none focus:border-lime-400"
      />

      <button
        className="md:col-span-2 bg-lime-400 hover:bg-lime-300 transition text-black font-bold rounded-xl py-5 text-lg"
      >
        GET MY FREE QUOTE
      </button>

    </form>

    <div className="text-center mt-10">

      <p className="text-2xl font-bold">
        07532 835807
      </p>

      <p className="text-zinc-400 mt-2">
        larksropeaccess@gmail.com
      </p>

    </div>

  </div>

</section> 

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-zinc-800 py-8 text-center text-zinc-500">

        <img
          src="/file_00000000082c720a947b52e9a25698ba.png"
          alt="Larks Rope Access"
          className="h-12 mx-auto mb-4"
        />

        <p>
          © {new Date().getFullYear()} Larks Rope Access Ltd.
        </p>

        <p className="mt-2">
          High-Rise Window Cleaning • Rope Access • Bristol & South West
        </p>

      </footer>

    </main>
  );
              }
