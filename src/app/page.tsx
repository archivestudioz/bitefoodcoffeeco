import Image from "next/image";
import Link from "next/link";

const ORDER_URL = "https://bitefoodcoffee.com/order";

const featured = [
  {
    name: "Chicken & Waffles",
    blurb: "Buttermilk waffle, crispy boneless chicken, hot honey.",
    image:
      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Crème Brûlée Waffle",
    blurb: "Torched sugar crust, vanilla custard, fresh berries.",
    image:
      "https://images.unsplash.com/photo-1565299543923-37dd37887442?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Griddle Brekkie Platter",
    blurb: "Eggs your way, pancakes, smoked turkey, hash.",
    image:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Steak & Eggs",
    blurb: "Marinated skirt steak, two eggs, chimichurri, potatoes.",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Crispy Chicken Sandwich",
    blurb: "Buttermilk chicken, pickles, slaw, brioche.",
    image:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "The Mediterranean",
    blurb: "Za'atar eggs, labneh, olives, tomato, warm pita.",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
  },
];

const locations = [
  {
    city: "Hackensack",
    address: "360 Essex St, Hackensack, NJ 07601",
    phone: "(201) 560-2269",
    hours: "Open daily · 8:00 AM – 8:00 PM",
    mapUrl: "https://maps.google.com/?q=360+Essex+St,+Hackensack,+NJ+07601",
  },
  {
    city: "Fair Lawn",
    address: "2140 Promenade Blvd, Fair Lawn, NJ 07410",
    phone: "(551) 224-8072",
    hours: "Open daily · 9:00 AM – 8:00 PM",
    mapUrl: "https://maps.google.com/?q=2140+Promenade+Blvd,+Fair+Lawn,+NJ+07410",
  },
];

const reviews = [
  {
    name: "Michelle D.",
    quote:
      "The chicken and waffles are unreal. Service is warm, the space is gorgeous, and you can tell everything is made with care.",
  },
  {
    name: "Darren W.",
    quote:
      "Best breakfast in Bergen County. The crème brûlée waffle alone is worth the trip — and the matcha is the real deal.",
  },
  {
    name: "Max E.",
    quote:
      "Halal kitchen, huge portions, killer coffee. We're regulars now. The steak & eggs never miss.",
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Featured />
        <Story />
        <Locations />
        <Catering />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-cream/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-display text-xl font-semibold tracking-tight">
          Bite<span className="text-accent">.</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link href="#menu" className="hover:text-accent">Menu</Link>
          <Link href="#story" className="hover:text-accent">Our Story</Link>
          <Link href="#locations" className="hover:text-accent">Locations</Link>
          <Link href="#catering" className="hover:text-accent">Catering</Link>
        </nav>
        <a
          href={ORDER_URL}
          className="inline-flex h-10 items-center rounded-full bg-espresso px-5 text-sm font-medium text-cream transition hover:bg-espresso-soft"
        >
          Order online
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24 lg:py-28">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-cream-deep/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-espresso-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            100% Halal · Hackensack & Fair Lawn
          </span>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Best breakfast in New Jersey.
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-espresso-soft">
            Brunch, dinner, and everything in between. Bold flavors, fresh
            ingredients, made-to-order — all day long.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={ORDER_URL}
              className="inline-flex h-12 items-center rounded-full bg-espresso px-7 text-sm font-medium text-cream transition hover:bg-espresso-soft"
            >
              Order online
            </a>
            <Link
              href="#menu"
              className="inline-flex h-12 items-center rounded-full border border-espresso/15 px-7 text-sm font-medium text-espresso transition hover:bg-espresso/5"
            >
              See the menu
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-cream-deep md:aspect-square">
          <Image
            src="https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1600&q=80"
            alt="Plate of chicken and waffles with hot honey"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section id="menu" className="border-t border-border/60 bg-cream-deep/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-accent">
              The hits
            </p>
            <h2 className="mt-2 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              The food everyone&apos;s talking about.
            </h2>
          </div>
          <a
            href={ORDER_URL}
            className="text-sm font-medium text-espresso underline-offset-4 hover:underline"
          >
            Explore the full menu →
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => (
            <article
              key={item.name}
              className="group overflow-hidden rounded-2xl bg-cream shadow-sm ring-1 ring-border/60 transition hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold">{item.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-espresso-soft">
                  {item.blurb}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="border-t border-border/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-12 md:items-center lg:py-24">
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-cream-deep">
            <Image
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
              alt="Barista pulling an espresso shot"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-7">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            Our story
          </p>
          <h2 className="mt-2 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Fresh food, friendly people, a place to slow down.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-espresso-soft">
            We serve classic American dishes made every day, right here in our
            kitchen. Bold espresso, vibrant matcha, house-made syrups, and a
            spirit-free cocktail menu that&apos;s anything but boring.
          </p>

          <dl className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { k: "100% Halal", v: "Every dish, every time — prep to plate." },
              { k: "Made daily", v: "No shortcuts, no day-old anything." },
              { k: "All-day brunch", v: "Pancakes at 7. Steak at 7." },
            ].map((f) => (
              <div key={f.k}>
                <dt className="font-display text-lg font-semibold">{f.k}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-espresso-soft">
                  {f.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Locations() {
  return (
    <section id="locations" className="border-t border-border/60 bg-espresso text-cream">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            Visit us
          </p>
          <h2 className="mt-2 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Two New Jersey kitchens. Same hospitality.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {locations.map((loc) => (
            <div
              key={loc.city}
              className="rounded-2xl bg-cream/5 p-8 ring-1 ring-cream/10 backdrop-blur"
            >
              <h3 className="font-display text-3xl font-semibold">{loc.city}</h3>
              <p className="mt-3 text-cream/80">{loc.address}</p>
              <p className="mt-1 text-cream/80">{loc.hours}</p>
              <p className="mt-1 text-cream/80">
                <a href={`tel:${loc.phone.replace(/\D/g, "")}`} className="hover:text-accent">
                  {loc.phone}
                </a>
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 items-center rounded-full bg-cream px-5 text-sm font-medium text-espresso transition hover:bg-cream-deep"
                >
                  Get directions
                </a>
                <a
                  href={ORDER_URL}
                  className="inline-flex h-10 items-center rounded-full border border-cream/25 px-5 text-sm font-medium text-cream transition hover:bg-cream/10"
                >
                  Order from {loc.city}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Catering() {
  return (
    <section id="catering" className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 py-20 sm:px-6 md:flex-row md:items-center md:justify-between lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            Catering
          </p>
          <h2 className="mt-2 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Got a big group to feed?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-espresso-soft">
            Family gatherings, office breakfasts, weekend celebrations — we
            cook for the room and we make it easy.
          </p>
        </div>
        <a
          href="mailto:info@bitefoodcoffee.com?subject=Catering%20inquiry"
          className="inline-flex h-12 items-center rounded-full bg-accent px-7 text-sm font-medium text-cream transition hover:bg-accent-deep"
        >
          Plan your event
        </a>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="border-t border-border/60 bg-cream-deep/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            Loved by regulars
          </p>
          <h2 className="mt-2 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            What our guests are saying.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex h-full flex-col rounded-2xl bg-cream p-7 ring-1 ring-border/60"
            >
              <div className="flex gap-1 text-accent" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-espresso-soft">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 font-display font-semibold">
                {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-espresso text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="font-display text-2xl font-semibold text-cream">
            Bite<span className="text-accent">.</span>
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-relaxed">
            Halal breakfast, brunch & dinner. Made fresh in Hackensack and Fair
            Lawn, New Jersey.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-cream">
            Visit
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>360 Essex St, Hackensack</li>
            <li>2140 Promenade Blvd, Fair Lawn</li>
            <li>
              <a href="mailto:info@bitefoodcoffee.com" className="hover:text-accent">
                info@bitefoodcoffee.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-cream">
            More
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href={ORDER_URL} className="hover:text-accent">Order online</a></li>
            <li><a href="#catering" className="hover:text-accent">Catering</a></li>
            <li>
              <a
                href="https://instagram.com/bitefoodcoffeeco"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-5 text-xs text-cream/60 sm:px-6">
          <p>© {new Date().getFullYear()} Bite Food & Coffee Co. All rights reserved.</p>
          <p>100% Halal · Made in New Jersey</p>
        </div>
      </div>
    </footer>
  );
}

function Star() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M10 1.5l2.6 5.27 5.82.84-4.21 4.1.99 5.79L10 14.77l-5.2 2.73.99-5.79L1.58 7.61l5.82-.84L10 1.5z" />
    </svg>
  );
}
