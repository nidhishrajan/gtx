import Image from "next/image";

export const metadata = {
  title: "Back to Bharat – Relocate from the US to India",
  description:
    "Seamless relocation services for Indian professionals living in the US. Get a free quote and start your journey back home.",
};

export default function BackToBharat() {
  return (
    <main className="font-sans text-gray-900">
      {/* ---- Hero ---- */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-8">
          {/* Text */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Your Journey Back Home Starts Here
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Tailored relocation services for US‑based Indians ready to move back to India. From paperwork to settlement, we handle it all.
            </p>
            <a
              href="#lead-form"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-md transition"
            >
              Get a Free Quote
            </a>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/images/hero-family.png"
              alt="Family moving back to India"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ---- Lead Capture Form (sticky) ---- */}
      <section id="lead-form" className="bg-orange-50 py-8">
        <div className="container mx-auto px-6 md:px-12 max-w-2xl">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
            Tell us about your move
          </h2>
          <form className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-md p-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-md p-2"
            />
            <input
              type="text"
              placeholder="Current City (US)"
              className="border border-gray-300 rounded-md p-2"
            />
            <input
              type="text"
              placeholder="Target City (India)"
              className="border border-gray-300 rounded-md p-2"
            />
            <textarea
              placeholder="Brief note (timeline, special needs)"
              rows={3}
              className="border border-gray-300 rounded-md p-2"
            />
            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 rounded-md transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* ---- How It Works ---- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Free Assessment</h3>
              <p className="text-gray-600">
                Share your details and we’ll outline a personalized relocation plan.
              </p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Planning & Docs</h3>
              <p className="text-gray-600">
                We handle visas, customs, housing, and all paperwork for you.
              </p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Move & Settle</h3>
              <p className="text-gray-600">
                Your belongings arrive safely and we help you settle into your new home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Benefits ---- */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>Cost‑effective shipping and logistics.</li>
              <li>End‑to‑end visa & documentation support.</li>
              <li>Dedicated relocation consultants with Indian‑US experience.</li>
              <li>Community network to help you settle quickly.</li>
            </ul>
            <div className="flex justify-center items-center">
              <Image
                src="/images/benefits-illustration.png"
                alt="Benefits illustration"
                width={400}
                height={300}
                className="rounded-md shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---- Testimonials ---- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <blockquote className="border-l-4 border-orange-600 pl-4">
              <p className="italic text-gray-700">
                “The whole process was seamless – I could focus on my new job while they handled everything else.”
              </p>
              <cite className="block mt-2 text-gray-600">
                – Priya S., Software Engineer, San Francisco
              </cite>
            </blockquote>
            <blockquote className="border-l-4 border-orange-600 pl-4">
              <p className="italic text-gray-700">
                “From paperwork to moving my family, Global Talex made it feel like home already.”
              </p>
              <cite className="block mt-2 text-gray-600">
                – Arjun K., Product Manager, New York
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ---- Footer ---- */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image src="/logo.svg" alt="Global Talex" width={120} height={30} />
          </div>
          <nav className="flex space-x-6">
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
            <a href="#" className="hover:underline">
              Privacy
            </a>
          </nav>
        </div>
        <p className="text-center text-sm mt-4">
          © {new Date().getFullYear()} Global Talex. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

