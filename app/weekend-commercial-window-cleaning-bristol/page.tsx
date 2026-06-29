export default function WeekendCommercialPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}

      <section className="relative min-h-screen flex items-center overflow-hidden">

        <img
          src="/Messenger_creation_1983A15C-16C8-4F58-9AF5-A7C80A6E877E.jpeg"
          alt="Weekend Commercial Rope Access"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <div className="inline-block bg-lime-400 text-black font-bold px-4 py-2 rounded-full mb-6">
            EXCLUSIVE COMMERCIAL SERVICE
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">

            WEEKEND
            <br />

            COMMERCIAL
            <br />

            <span className="text-lime-400">
              ROPE ACCESS
            </span>

          </h1>

          <h2 className="text-2xl md:text-4xl font-bold mt-8">

            ZERO WEEKDAY DISRUPTION.

            <br />

            ZERO TENANT COMPLAINTS.

          </h2>

          <p className="text-zinc-300 text-xl max-w-3xl mt-8 leading-8">

            Professional high-rise window cleaning,
            façade inspections and specialist rope access
            completed exclusively at weekends across
            Bristol and the South West.

          </p>

          <div className="flex flex-col sm:flex-row gap-5 mt-10">

            <a
              href="#quote"
              className="bg-lime-400 text-black font-bold px-10 py-5 rounded-xl"
            >
              REQUEST A WEEKEND ASSESSMENT
            </a>

            <a
              href="tel:07532835807"
              className="border border-white px-10 py-5 rounded-xl font-bold hover:border-lime-400 hover:text-lime-400 transition"
            >
              CALL 07532 835807
            </a>

          </div>

        </div>

      </section>
{/* ================= TRUST BAR ================= */}

<section className="bg-zinc-950 py-10 border-t border-zinc-800">

  <div className="max-w-7xl mx-auto px-6">

    <p className="text-center text-lime-400 font-bold tracking-widest uppercase mb-8">
      Trusted Across Bristol & The South West
    </p>

    <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-center">

      <div>
        <div className="text-4xl mb-2">🏢</div>
        <p>Office Buildings</p>
      </div>

      <div>
        <div className="text-4xl mb-2">🏨</div>
        <p>Hotels</p>
      </div>

      <div>
        <div className="text-4xl mb-2">🏬</div>
        <p>Retail Parks</p>
      </div>

      <div>
        <div className="text-4xl mb-2">🏢</div>
        <p>Apartments</p>
      </div>

      <div>
        <div className="text-4xl mb-2">🎓</div>
        <p>Universities</p>
      </div>

      <div>
        <div className="text-4xl mb-2">🏥</div>
        <p>Healthcare</p>
      </div>

    </div>

  </div>

</section>
      {/* ================= THE PROBLEM ================= */}

<section className="py-24 px-6 bg-black">

  <div className="max-w-6xl mx-auto">

    <p className="text-lime-400 font-bold uppercase tracking-widest">
      THE COMMERCIAL DILEMMA
    </p>

    <h2 className="text-5xl font-black mt-4">
      High-Rise Maintenance
      <br />
      Shouldn't Disrupt Business.
    </h2>

    <p className="text-zinc-300 text-xl mt-8 max-w-3xl leading-8">

      During the working week, rope access can interrupt
      offices, distract staff, block entrances and generate
      unnecessary tenant complaints.

      <br /><br />

      That's why Larks Rope Access created our
      <span className="text-lime-400 font-bold">
        {" "}Weekend Access Programme™
      </span>
      — allowing commercial work to be completed while
      your building is empty.

    </p>

  </div>

</section>
    </main>
  );
}
