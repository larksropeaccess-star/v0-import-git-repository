export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative h-screen flex items-center">
  <img.../>
    src="/Messenger_creation_1983A15C-16C8-4F58-9AF5-A7C80A6E877E.jpeg"
    alt="Larks Rope Access"
    className="absolute inset-0 w-full h-full object-cover opacity-25"
  />

  <div className="relative z-10 max-w-6xl mx-auto px-6">
    <img
      src="/file_00000000082c720a947b52e9a25698ba.png"
      alt="Larks Rope Access"
      className="h-24 mb-8"
    />

    <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-none">
      HIGH-RISE WINDOW CLEANING.
  <br />
  NO LIMITS.
</h1>

          <p className="text-xl mb-8">
            Professional rope access window cleaning across Bristol and the
            South West.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
  <a
    href="#contact"
    className="bg-lime-500 text-black px-8 py-4 rounded font-bold text-center"
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

      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">OUR SERVICES</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="border border-lime-500 p-6">
            <h3 className="text-2xl font-bold mb-3">
              Commercial Window Cleaning
            </h3>
            <p>Professional high-level glass cleaning.</p>
          </div>

          <div className="border border-lime-500 p-6">
            <h3 className="text-2xl font-bold mb-3">
              High Rise Window Cleaning
            </h3>
            <p>Safe rope access solutions for difficult buildings.</p>
          </div>

          <div className="border border-lime-500 p-6">
            <h3 className="text-2xl font-bold mb-3">
              Specialist Rope Access
            </h3>
            <p>Inspection, maintenance and specialist access work.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-zinc-900">
        <h2 className="text-4xl font-bold text-center mb-10">
          CONTACT US
        </h2>

        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4">07532 835807</p>
          <p className="mb-4">larksropeaccess@gmail.com</p>
          <p>Bristol & South West UK</p>
        </div>
      </section>
    </main>
  );
}
