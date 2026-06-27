import {
  ShieldCheck,
  Building2,
  Wrench,
  Camera,
  Phone,
  Star,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* ================= NAVIGATION ================= */}

      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          <a href="/">
            <img
              src="/file_00000000082c720a947b52e9a25698ba.png"
              alt="Larks Rope Access"
              className="h-12 md:h-14"
            />
          </a>

          <div className="hidden md:flex items-center gap-8 font-medium">

            <a
              href="#services"
              className="hover:text-lime-400 transition"
            >
              Services
            </a>

            <a
              href="#why-larks"
              className="hover:text-lime-400 transition"
            >
              Why Larks
            </a>

            <a
              href="#projects"
              className="hover:text-lime-400 transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:text-lime-400 transition"
            >
              Contact
            </a>

          </div>

        </div>
      </nav>

      {/* ================= HERO ================= */}

      <section className="relative min-h-screen flex items-center overflow-hidden pt-24">

        <img
          src="/Messenger_creation_1983A15C-16C8-4F58-9AF5-A7C80A6E877E.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center translate-y-10 opacity-40"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

          <img
            src="/file_00000000082c720a947b52e9a25698ba.png"
            alt="Larks Rope Access"
            className="h-28 md:h-36 mb-10"
          />

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none">

            HIGH-RISE
            <br />

            WINDOW CLEANING.

            <br />

            <span className="text-lime-400">
              NO LIMITS.
            </span>

          </h1>

          <p className="text-zinc-300 text-xl max-w-2xl mt-8 leading-8">

            Professional rope access window cleaning,
            inspections and specialist access solutions
            for commercial buildings across Bristol and
            the South West.

          </p>

          <div className="flex flex-col sm:flex-row gap-5 mt-10">

            <a
              href="#contact"
              className="bg-lime-400 hover:bg-lime-300 transition text-black font-bold px-10 py-5 rounded-xl text-center"
            >
              GET A FREE QUOTE
            </a>

            <a
              href="tel:07532835807"
              className="border border-white hover:border-lime-400 hover:text-lime-400 transition px-10 py-5 rounded-xl font-bold text-center"
            >
              CALL 07532 835807
            </a>

          </div>

        </div>

      </section>  
      {/* ================= SERVICES ================= */}

      <section
        id="services"
        className="py-24 px-6 max-w-7xl mx-auto"
      >

        <div className="flex items-center gap-3 mb-12">

          <Building2 className="text-lime-400 w-8 h-8" />

          <h2 className="text-4xl font-black text-lime-400">
            OUR SERVICES
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-lime-400 transition">

            <Building2 className="text-lime-400 w-10 h-10 mb-6" />

            <h3 className="text-2xl font-bold mb-4">
              Commercial Window Cleaning
            </h3>

            <p className="text-zinc-400">
              Professional rope access window cleaning for offices,
              apartment blocks and commercial buildings.
            </p>

          </div>

          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-lime-400 transition">

            <Camera className="text-lime-400 w-10 h-10 mb-6" />

            <h3 className="text-2xl font-bold mb-4">
              High-Rise Window Cleaning
            </h3>

            <p className="text-zinc-400">
              Safe, efficient access to difficult areas without the
              cost and disruption of scaffolding.
            </p>

          </div>

          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-lime-400 transition">

            <Wrench className="text-lime-400 w-10 h-10 mb-6" />

            <h3 className="text-2xl font-bold mb-4">
              Specialist Rope Access
            </h3>

            <p className="text-zinc-400">
              Building inspections, maintenance and specialist access
              solutions for commercial properties.
            </p>

          </div>

        </div>

      </section>

      {/* ================= WHY LARKS ================= */}

      <section
        id="why-larks"
        className="py-24 px-6 bg-zinc-950"
      >

        <div className="max-w-7xl mx-auto">

          <div className="flex items-center gap-3 mb-12">

            <ShieldCheck className="text-lime-400 w-8 h-8" />

            <h2 className="text-4xl font-black text-lime-400">
              WHY CHOOSE LARKS?
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-zinc-900 rounded-2xl p-8">
              <h3 className="font-bold text-2xl mb-3">
                IRATA Techniques
              </h3>
              <p className="text-zinc-400">
                Safe rope access methods for difficult-to-reach
                buildings.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8">
              <h3 className="font-bold text-2xl mb-3">
                Fully Insured
              </h3>
              <p className="text-zinc-400">
                Complete peace of mind with professional insurance.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8">
              <h3 className="font-bold text-2xl mb-3">
                No Scaffolding
              </h3>
              <p className="text-zinc-400">
                Faster access with less disruption and lower costs.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8">
              <h3 className="font-bold text-2xl mb-3">
                Commercial Experts
              </h3>
              <p className="text-zinc-400">
                Offices, apartments, hotels and commercial buildings.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8">
              <h3 className="font-bold text-2xl mb-3">
                Free Quotations
              </h3>
              <p className="text-zinc-400">
                Fast, honest quotations with no obligation.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8">
              <h3 className="font-bold text-2xl mb-3">
                South West Coverage
              </h3>
              <p className="text-zinc-400">
                Covering Bristol and the surrounding South West.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="py-24 px-6"
      >

        <div className="max-w-7xl mx-auto">

          <div className="flex items-center gap-3 mb-12">

            <Camera className="text-lime-400 w-8 h-8" />

            <h2 className="text-4xl font-black text-lime-400">
              RECENT PROJECTS
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-3">

            <img
              src="/IMG-20260123-WA0003.jpg"
              alt=""
              className="rounded-2xl h-80 w-full object-cover"
            />

            <img
              src="/IMG-20260123-WA0004.jpg"
              alt=""
              className="rounded-2xl h-80 w-full object-cover"
            />

            <img
              src="/IMG-20260425-WA0011.jpg"
              alt=""
              className="rounded-2xl h-80 w-full object-cover"
            />

          </div>

        </div>

      </section>
      {/* ================= TESTIMONIALS ================= */}

      <section className="py-24 px-6 bg-black">

        <div className="max-w-7xl mx-auto">

          <div className="flex items-center gap-3 mb-12">

            <Star className="text-lime-400 w-8 h-8" />

            <h2 className="text-4xl font-black text-lime-400">
              TRUSTED BY CLIENTS
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
              <p className="text-zinc-300 italic">
                "Excellent service from start to finish. Professional,
                reliable and a fantastic result."
              </p>

              <p className="mt-6 font-bold">
                Commercial Client
              </p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
              <p className="text-zinc-300 italic">
                "Very professional rope access team with minimal disruption
                to our building."
              </p>

              <p className="mt-6 font-bold">
                Facilities Manager
              </p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
              <p className="text-zinc-300 italic">
                "Would definitely recommend Larks Rope Access for
                commercial window cleaning."
              </p>

              <p className="mt-6 font-bold">
                Property Manager
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="py-24 px-6 bg-zinc-950"
      >

        <div className="max-w-4xl mx-auto">

          <div className="flex items-center gap-3 mb-10">

            <Phone className="text-lime-400 w-8 h-8" />

            <h2 className="text-4xl font-black text-lime-400">
              GET YOUR FREE QUOTE
            </h2>

          </div>

         <form
  action="/api/contact"
  method="POST"
  className="grid md:grid-cols-2 gap-6"
> 

            <input
  name="name"
  type="text"
  placeholder="Name"
  className="bg-zinc-900 rounded-xl p-4 outline-none border border-zinc-700 focus:border-lime-400"
/>

            <input
  name="phone"
  type="tel"
  placeholder="Phone"
  className="bg-zinc-900 rounded-xl p-4 outline-none border border-zinc-700 focus:border-lime-400"
/>

            <input
  name="email"
  type="email"
  placeholder="Email"
  className="bg-zinc-900 rounded-xl p-4 outline-none border border-zinc-700 focus:border-lime-400"
/>

            <input
  name="company"
  type="text"
  placeholder="Company"
  className="bg-zinc-900 rounded-xl p-4 outline-none border border-zinc-700 focus:border-lime-400"
/>

            <textarea
  name="message"
  placeholder="Tell us about your project..."
  rows={6}
  className="md:col-span-2 bg-zinc-900 rounded-xl p-4 outline-none border border-zinc-700 focus:border-lime-400"
/>

            <button
  type="submit"
              className="md:col-span-2 bg-lime-400 hover:bg-lime-300 transition text-black font-bold rounded-xl py-5 text-lg"
            >
              GET MY FREE QUOTE
            </button>

          </form>

          <div className="text-center mt-12">

            <p className="text-2xl font-bold">
              07532 835807
            </p>

            <p className="text-zinc-400 mt-3">
              larksropeaccess@gmail.com
            </p>

            <p className="text-zinc-500 mt-2">
              Bristol & South West
            </p>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-zinc-800 py-10">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <img
            src="/file_00000000082c720a947b52e9a25698ba.png"
            alt="Larks Rope Access"
            className="h-12 mx-auto mb-5"
          />

          <p className="text-zinc-500">
            © {new Date().getFullYear()} Larks Rope Access.
            All Rights Reserved.
          </p>

          <p className="text-zinc-600 mt-3">
            High-Rise Window Cleaning • Rope Access • Bristol & South West
          </p>

        </div>

      </footer>

    </main>
  );
}
