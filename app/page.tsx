export default function LuxeNailSalonWebsite() {
  const services = [
    { name: "Signature Manicure", time: "45 min", price: "$35+" },
    { name: "Spa Pedicure", time: "60 min", price: "$55+" },
    { name: "Gel X / Extensions", time: "90 min", price: "$75+" },
    { name: "Dipping Powder", time: "60 min", price: "$50+" },
    { name: "Custom Nail Art", time: "Varies", price: "$10+" },
    { name: "Luxury Combo", time: "90 min", price: "$85+" },
  ];

  const gallery = [
  { src: "/images/hi.jpg", title: "Dat"},
  { src: "/images/ha.jpg", title: "Yeu"},
  { src: "/images/ho.jpg", title: "Diem <3"},
  { src: "/images/hu.jpg", title: "Nhat"},
  { src: "/images/hi.jpg", title: "Tren"},
  { src: "/images/hi.jpg", title: "Doi"},
];

  const testimonials = [
    {
      name: "Olivia R.",
      quote:
        "The salon is spotless, relaxing, and the quality is consistent every single visit. Booking was easy and the results looked premium.",
    },
    {
      name: "Megan T.",
      quote:
        "This is the kind of nail salon that feels elevated from the moment you walk in. Great service, beautiful work, and very professional staff.",
    },
    {
      name: "Sophia L.",
      quote:
        "I loved how clear the menu and pricing were. The team took their time, and my nails lasted beautifully.",
    },
  ];

  const team = [
    { name: "Quoc Dat Pham", role: "Founder" },
    { name: "Diem Nguyen", role: "Vo cua Dat" },
    { name: "Emily", role: "Gel & Extension Technician" },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="sticky top-0 z-30 border-b border-stone-200/80 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-xl font-semibold tracking-[0.2em] uppercase">Luxury Nail Spa</div>
            <div className="text-sm text-stone-500">Modern nail care with a polished, elevated experience</div>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#services" className="hover:text-stone-600">Services</a>
            <a href="#gallery" className="hover:text-stone-600">Gallery</a>
            <a href="#about" className="hover:text-stone-600">About</a>
            <a href="#reviews" className="hover:text-stone-600">Reviews</a>
            <a href="#contact" className="hover:text-stone-600">Contact</a>
          </nav>
          <a
            href="#booking"
            className="rounded-2xl bg-stone-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
          >
            Book Now
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-white to-rose-50" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit rounded-full border border-stone-200 bg-white px-4 py-2 text-xs uppercase tracking-[0.25em] text-stone-500 shadow-sm">
              Professional • Clean • Luxury
            </div>
            <h1 className="max-w-xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
              A nail salon website that feels as premium as your service.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
              Built to attract modern clients, highlight your best work, and turn visitors into bookings.
              Clear pricing, online scheduling, beautiful visuals, and a trusted brand experience — all in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#booking"
                className="rounded-2xl bg-stone-900 px-6 py-3 text-sm font-medium text-white shadow-sm"
              >
                Reserve Appointment
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-900"
              >
                View Services
              </a>
            </div>
            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 text-center">
              <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-stone-200">
                <div className="text-2xl font-semibold">4.9★</div>
                <div className="mt-1 text-sm text-stone-500">Client rating</div>
              </div>
              <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-stone-200">
                <div className="text-2xl font-semibold">7 Days</div>
                <div className="mt-1 text-sm text-stone-500">Flexible hours</div>
              </div>
              <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-stone-200">
                <div className="text-2xl font-semibold">24/7</div>
                <div className="mt-1 text-sm text-stone-500">Online booking</div>
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-[2rem] bg-white p-5 shadow-xl ring-1 ring-stone-200">
              <div className="h-72 rounded-[1.5rem] bg-[linear-gradient(135deg,#f5f5f4,#e7e5e4,#fce7f3)]" />
              <div className="pt-4 text-sm text-stone-500">Minimal luxury interior • clean aesthetic • premium experience</div>
            </div>
            <div className="space-y-5 pt-8">
              <div className="rounded-[2rem] bg-white p-5 shadow-xl ring-1 ring-stone-200">
                <div className="h-40 rounded-[1.5rem] bg-[linear-gradient(135deg,#fff1f2,#ffe4e6,#fecdd3)]" />
                <div className="pt-4 text-sm text-stone-500">Signature nails and seasonal art portfolio</div>
              </div>
              <div className="rounded-[2rem] bg-stone-900 p-6 text-white shadow-xl">
                <div className="text-sm uppercase tracking-[0.2em] text-stone-300">Why clients choose us</div>
                <ul className="mt-4 space-y-3 text-sm text-stone-100">
                  <li>• Clean, modern, upscale brand image</li>
                  <li>• Transparent service menu and pricing</li>
                  <li>• Effortless mobile booking experience</li>
                  <li>• Portfolio-driven trust for new clients</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <div className="text-sm uppercase tracking-[0.25em] text-stone-500">Services</div>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight">A clear menu that helps clients book faster</h2>
          <p className="mt-4 text-lg leading-8 text-stone-600">
            Your website should make it easy for first-time visitors to understand what you offer, how long each service takes, and what price range to expect.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div key={service.name} className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-stone-200">
              <div className="text-xl font-medium">{service.name}</div>
              <div className="mt-3 flex items-center justify-between text-sm text-stone-500">
                <span>{service.time}</span>
                <span>{service.price}</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                Premium care, thoughtful detail, and a relaxing service flow tailored for clients who value quality and consistency.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="text-sm uppercase tracking-[0.25em] text-stone-500">Gallery</div>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">Show your best work before the client even walks in</h2>
            </div>
            <p className="max-w-xl text-stone-600">
              For nail salons, strong visuals are not optional. A polished gallery builds trust and helps new clients choose your salon with confidence.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, index) => (
  <div key={item.src + index} className="rounded-[2rem] bg-stone-50 p-4 ring-1 ring-stone-200">
    <img
      src={item.src}
      alt={item.title}
      className="h-56 w-full rounded-[1.5rem] object-cover"
    />

    <div className="pt-4 text-sm font-medium text-stone-700">
      {item.title}
    </div>
  </div>
))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-stone-500">About the salon</div>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">Designed for clients who want quality, comfort, and consistency</h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">
              We combine clean salon standards, refined service, and detail-focused artistry to create a premium appointment experience. Our team is trained to deliver beautiful results while making every client feel relaxed, welcomed, and cared for.
            </p>
            <p className="mt-4 text-lg leading-8 text-stone-600">
              This section is where your real story should go: why you opened the salon, what makes your brand different, and why local clients should trust your team over nearby competitors.
            </p>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200">
            <div className="text-xl font-medium">Meet the Team</div>
            <div className="mt-6 space-y-4">
              {team.map((member) => (
                <div key={member.name} className="flex items-center justify-between rounded-2xl bg-stone-50 px-5 py-4">
                  <div>
                    <div className="font-medium">{member.name}</div>
                    <div className="text-sm text-stone-500">{member.role}</div>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-[linear-gradient(135deg,#e7e5e4,#fbcfe8)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-stone-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="text-sm uppercase tracking-[0.25em] text-stone-400">Reviews</div>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">Social proof that turns visitors into loyal clients</h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((review) => (
              <div key={review.name} className="rounded-[2rem] bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm">
                <div className="text-lg leading-8 text-stone-100">“{review.quote}”</div>
                <div className="mt-5 text-sm uppercase tracking-[0.2em] text-stone-400">{review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200">
            <div className="text-sm uppercase tracking-[0.25em] text-stone-500">Booking</div>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">Make online booking simple</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-600">
              This section can connect directly to your booking software. Add service categories, staff selection, appointment rules, deposits, reminder texts, and confirmation emails.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-stone-50 p-5">
                <div className="font-medium">24/7 self-booking</div>
                <p className="mt-2 text-sm leading-7 text-stone-600">Clients can book anytime without calling the front desk.</p>
              </div>
              <div className="rounded-2xl bg-stone-50 p-5">
                <div className="font-medium">Deposit & no-show control</div>
                <p className="mt-2 text-sm leading-7 text-stone-600">Reduce last-minute cancellations and protect busy time slots.</p>
              </div>
              <div className="rounded-2xl bg-stone-50 p-5">
                <div className="font-medium">Automated reminders</div>
                <p className="mt-2 text-sm leading-7 text-stone-600">Text and email reminders keep your schedule on track.</p>
              </div>
              <div className="rounded-2xl bg-stone-50 p-5">
                <div className="font-medium">Staff selection</div>
                <p className="mt-2 text-sm leading-7 text-stone-600">Let clients choose a technician or book the first available opening.</p>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] bg-[linear-gradient(180deg,#111827,#292524)] p-8 text-white shadow-xl">
            <div className="text-sm uppercase tracking-[0.25em] text-stone-300">Contact</div>
            <div className="mt-4 space-y-5 text-sm leading-7 text-stone-200" id="contact">
              <div>
                <div className="font-medium text-white">Address</div>
                <div>123 Luxury Ave, San Diego, CA</div>
              </div>
              <div>
                <div className="font-medium text-white">Phone</div>
                <div>(619) 555-0108</div>
              </div>
              <div>
                <div className="font-medium text-white">Hours</div>
                <div>Mon–Sat: 9:30 AM – 7:00 PM</div>
                <div>Sun: 10:00 AM – 5:00 PM</div>
              </div>
              <div>
                <div className="font-medium text-white">Email</div>
                <div>hello@luxenaillounge.com</div>
              </div>
            </div>
            <button className="mt-8 w-full rounded-2xl bg-white px-6 py-3 text-sm font-medium text-stone-900">
              Connect Booking System
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-stone-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Luxe Nail Lounge. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Google Reviews</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
