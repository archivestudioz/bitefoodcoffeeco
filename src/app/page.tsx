import Image from "next/image";
import Link from "next/link";

const ORDER_URL = "https://bitefoodcoffee.com/order";

const featured = [
  {
    name: "Chicken & Waffles",
    blurb: "Buttermilk waffle, crispy chicken, hot honey.",
    tag: "fan fave",
    image:
      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Crème Brûlée Waffle",
    blurb: "Torched sugar crust, vanilla custard, berries.",
    tag: "famous",
    image:
      "https://images.unsplash.com/photo-1565299543923-37dd37887442?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Griddle Brekkie",
    blurb: "Eggs, pancakes, smoked turkey, hash.",
    tag: "huge",
    image:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Steak & Eggs",
    blurb: "Marinated skirt steak, two eggs, chimichurri.",
    tag: "iconic",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Crispy Chicken Sammie",
    blurb: "Buttermilk chicken, pickles, slaw, brioche.",
    tag: "crispy",
    image:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "The Mediterranean",
    blurb: "Za'atar eggs, labneh, olives, warm pita.",
    tag: "vibey",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
  },
];

const locations = [
  {
    city: "Hackensack",
    address: "360 Essex St, Hackensack, NJ 07601",
    phone: "(201) 560-2269",
    hours: "Daily · 8AM – 8PM",
    mapUrl: "https://maps.google.com/?q=360+Essex+St,+Hackensack,+NJ+07601",
    color: "bg-lime",
  },
  {
    city: "Fair Lawn",
    address: "2140 Promenade Blvd, Fair Lawn, NJ 07410",
    phone: "(551) 224-8072",
    hours: "Daily · 9AM – 8PM",
    mapUrl: "https://maps.google.com/?q=2140+Promenade+Blvd,+Fair+Lawn,+NJ+07410",
    color: "bg-cream",
  },
];

const reviews = [
  {
    name: "Michelle D.",
    quote:
      "The chicken & waffles are UNREAL. Service is warm, the space is gorgeous, you can taste the love.",
    rotate: "-rotate-2",
    bg: "bg-cream",
  },
  {
    name: "Darren W.",
    quote:
      "Best breakfast in Bergen County. The crème brûlée waffle alone is worth the trip. Matcha = perfect.",
    rotate: "rotate-1",
    bg: "bg-lime",
  },
  {
    name: "Max E.",
    quote:
      "Halal, huge portions, killer coffee. We're regulars now. Steak & eggs never miss.",
    rotate: "-rotate-1",
    bg: "bg-pink-soft",
  },
];

const marqueeBits = [
  "halal kitchen",
  "matcha freaks welcome",
  "all-day brunch",
  "pancakes at 7pm? yes",
  "two NJ kitchens",
  "made fresh daily",
  "iced everything",
  "big portions",
];

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Marquee />
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
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-pink">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-display text-3xl leading-none tracking-tight"
        >
          bite<span className="text-pink-deep">.</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold uppercase tracking-wider md:flex">
          <Link href="#menu" className="hover:underline">Menu</Link>
          <Link href="#story" className="hover:underline">Story</Link>
          <Link href="#locations" className="hover:underline">Locations</Link>
          <Link href="#catering" className="hover:underline">Catering</Link>
        </nav>
        <a
          href={ORDER_URL}
          className="inline-flex h-11 items-center rounded-full border-2 border-ink bg-ink px-5 text-sm font-bold uppercase tracking-wider text-pink transition hover:bg-pink hover:text-ink"
        >
          Order →
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-pink">
      {/* big decorative asterisks */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-8 top-10 font-display text-[220px] leading-none text-pink-deep/30 select-none rotate-12"
      >
        ✺
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute -left-6 bottom-10 font-display text-[140px] leading-none text-ink/10 select-none -rotate-12"
      >
        ✺
      </span>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-12 md:items-center md:py-24 lg:py-28">
        <div className="relative z-10 md:col-span-7">
          <span className="inline-flex -rotate-2 items-center gap-2 rounded-full border-2 border-ink bg-cream px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-bold-sm">
            <span className="h-2 w-2 rounded-full bg-pink-deep" />
            100% halal · NJ
          </span>

          <h1 className="mt-6 font-display text-[64px] leading-[0.95] tracking-tight sm:text-[88px] lg:text-[120px]">
            best
            <br />
            breakfast
            <br />
            <span className="squiggle decoration-pink-deep">in jersey.</span>
          </h1>

          <p className="mt-7 max-w-md text-lg font-medium leading-relaxed text-ink-soft">
            Brunch. Dinner. Matcha. Pancakes at 7pm.
            <br />
            Made fresh, made halal, made for you.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={ORDER_URL}
              className="inline-flex h-14 items-center rounded-full border-2 border-ink bg-ink px-8 text-sm font-bold uppercase tracking-widest text-pink shadow-bold transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              Order online →
            </a>
            <Link
              href="#menu"
              className="inline-flex h-14 items-center rounded-full border-2 border-ink bg-cream px-8 text-sm font-bold uppercase tracking-widest text-ink shadow-bold transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              see the menu
            </Link>
          </div>
        </div>

        <div className="relative md:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[40px] border-2 border-ink bg-cream shadow-bold">
            <Image
              src="https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1600&q=80"
              alt="Plate of chicken and waffles"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          {/* sticker overlay */}
          <div className="absolute -bottom-4 -left-4 rotate-[-8deg] rounded-2xl border-2 border-ink bg-lime px-4 py-2 font-display text-2xl shadow-bold-sm sm:-bottom-6 sm:-left-6">
            yum*
          </div>
          <div className="absolute -top-3 -right-3 rotate-[10deg] rounded-full border-2 border-ink bg-ink px-4 py-2 text-xs font-bold uppercase tracking-widest text-pink shadow-bold-sm">
            new menu ✦
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const doubled = [...marqueeBits, ...marqueeBits];
  return (
    <section className="border-y-2 border-ink bg-ink py-4 text-pink overflow-hidden">
      <div className="flex animate-marquee gap-10 whitespace-nowrap font-display text-3xl sm:text-4xl">
        {doubled.map((bit, i) => (
          <span key={i} className="flex items-center gap-10">
            <span>{bit}</span>
            <span aria-hidden className="text-lime">✺</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section id="menu" className="border-b-2 border-ink bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="inline-block rotate-[-2deg] rounded-full border-2 border-ink bg-pink px-4 py-1 text-xs font-bold uppercase tracking-widest shadow-bold-sm">
              the hits ✦
            </span>
            <h2 className="mt-5 font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl">
              food
              <br />
              <span className="text-pink-deep">people scream</span>
              <br />
              about.
            </h2>
          </div>
          <a
            href={ORDER_URL}
            className="inline-flex h-12 items-center rounded-full border-2 border-ink bg-ink px-6 text-sm font-bold uppercase tracking-widest text-pink shadow-bold-sm transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            see the whole menu →
          </a>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item, i) => (
            <article
              key={item.name}
              className={`relative overflow-hidden rounded-[28px] border-2 border-ink bg-pink-soft shadow-bold transition hover:-translate-y-1 ${
                i % 2 === 0 ? "sm:rotate-[-1deg]" : "sm:rotate-[1deg]"
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-ink">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 rotate-[-6deg] rounded-full border-2 border-ink bg-lime px-3 py-1 text-xs font-bold uppercase tracking-widest shadow-bold-sm">
                  {item.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-3xl leading-none">{item.name}</h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-ink-soft">
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
    <section id="story" className="relative border-b-2 border-ink bg-pink">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 md:grid-cols-12 md:items-center lg:py-28">
        <div className="md:col-span-5">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] border-2 border-ink bg-cream shadow-bold">
              <Image
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
                alt="Barista pulling an espresso shot"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 rotate-[8deg] rounded-2xl border-2 border-ink bg-lime px-4 py-2 font-display text-2xl shadow-bold-sm">
              hi we're bite ✦
            </div>
          </div>
        </div>
        <div className="md:col-span-7">
          <span className="inline-block rotate-[-2deg] rounded-full border-2 border-ink bg-cream px-4 py-1 text-xs font-bold uppercase tracking-widest shadow-bold-sm">
            our story
          </span>
          <h2 className="mt-5 font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl">
            fresh food.<br />
            <span className="text-pink-deep">good vibes.</span><br />
            no shortcuts.
          </h2>
          <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-ink-soft">
            Classic American dishes made every day, right here in our kitchen.
            Bold espresso, vibrant matcha, house-made syrups, and a spirit-free
            cocktail menu that&apos;s anything but boring.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { k: "100% halal", v: "every dish, every time" },
              { k: "made daily", v: "no day-old anything" },
              { k: "all-day brunch", v: "pancakes at 7. steak at 7." },
            ].map((f, i) => (
              <div
                key={f.k}
                className={`rounded-2xl border-2 border-ink bg-cream p-5 shadow-bold-sm ${
                  i === 1 ? "rotate-[1.5deg]" : i === 0 ? "rotate-[-1.5deg]" : "rotate-[0.5deg]"
                }`}
              >
                <p className="font-display text-2xl leading-none">{f.k}</p>
                <p className="mt-2 text-sm font-medium text-ink-soft">{f.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Locations() {
  return (
    <section id="locations" className="border-b-2 border-ink bg-ink text-pink">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="max-w-3xl">
          <span className="inline-block rotate-[-2deg] rounded-full border-2 border-pink bg-pink px-4 py-1 text-xs font-bold uppercase tracking-widest text-ink shadow-bold-sm">
            visit us
          </span>
          <h2 className="mt-5 font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl">
            two NJ kitchens.<br />
            <span className="text-lime">same vibe.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {locations.map((loc, i) => (
            <div
              key={loc.city}
              className={`relative rounded-[32px] border-2 border-pink p-8 text-ink shadow-bold-pink ${loc.color} ${
                i === 0 ? "md:rotate-[-1deg]" : "md:rotate-[1deg]"
              }`}
            >
              <h3 className="font-display text-5xl leading-none">{loc.city.toLowerCase()}.</h3>
              <p className="mt-5 font-medium">{loc.address}</p>
              <p className="mt-1 font-medium">{loc.hours}</p>
              <p className="mt-1 font-medium">
                <a href={`tel:${loc.phone.replace(/\D/g, "")}`} className="hover:underline">
                  {loc.phone}
                </a>
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center rounded-full border-2 border-ink bg-ink px-5 text-xs font-bold uppercase tracking-widest text-pink transition hover:bg-pink hover:text-ink"
                >
                  directions →
                </a>
                <a
                  href={ORDER_URL}
                  className="inline-flex h-11 items-center rounded-full border-2 border-ink bg-cream px-5 text-xs font-bold uppercase tracking-widest text-ink transition hover:bg-pink"
                >
                  order from {loc.city.toLowerCase()}
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
    <section id="catering" className="relative border-b-2 border-ink bg-lime overflow-hidden">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 font-display text-[260px] leading-none text-ink/10 select-none rotate-12"
      >
        ✺
      </span>
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-10 px-4 py-20 sm:px-6 md:flex-row md:items-center md:justify-between lg:py-28">
        <div className="relative max-w-2xl">
          <span className="inline-block rotate-[-2deg] rounded-full border-2 border-ink bg-pink px-4 py-1 text-xs font-bold uppercase tracking-widest shadow-bold-sm">
            catering ✦
          </span>
          <h2 className="mt-5 font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl">
            feeding<br />
            a crowd?
          </h2>
          <p className="mt-6 text-lg font-medium leading-relaxed text-ink-soft">
            Office breakfasts, family gatherings, weekend celebrations — we cook
            for the room and we make it easy.
          </p>
        </div>
        <a
          href="mailto:info@bitefoodcoffee.com?subject=Catering%20inquiry"
          className="relative z-10 inline-flex h-16 items-center rounded-full border-2 border-ink bg-ink px-10 font-display text-2xl text-pink shadow-bold transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
        >
          plan your event →
        </a>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="border-b-2 border-ink bg-pink-soft">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="max-w-2xl">
          <span className="inline-block rotate-[-2deg] rounded-full border-2 border-ink bg-pink px-4 py-1 text-xs font-bold uppercase tracking-widest shadow-bold-sm">
            loved by regulars
          </span>
          <h2 className="mt-5 font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl">
            people<br />
            <span className="text-pink-deep">won&apos;t shut up</span>
            <br />
            about it.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className={`flex h-full flex-col rounded-[28px] border-2 border-ink p-7 shadow-bold ${r.bg} ${r.rotate}`}
            >
              <div className="flex gap-1 text-pink-deep" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 font-display text-xl leading-snug">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm font-bold uppercase tracking-widest">
                — {r.name}
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
    <footer className="bg-ink text-pink">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="font-display text-6xl leading-none tracking-tight"
            >
              bite<span className="text-lime">.</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm font-medium leading-relaxed text-pink/80">
              Halal breakfast, brunch & dinner. Made fresh in Hackensack and
              Fair Lawn, NJ. Big flavor, big mood.
            </p>
          </div>

          <div>
            <h4 className="font-display text-2xl leading-none text-lime">visit</h4>
            <ul className="mt-4 space-y-2 text-sm font-medium">
              <li>360 Essex St, Hackensack</li>
              <li>2140 Promenade Blvd, Fair Lawn</li>
              <li>
                <a href="mailto:info@bitefoodcoffee.com" className="hover:text-lime">
                  info@bitefoodcoffee.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-2xl leading-none text-lime">more</h4>
            <ul className="mt-4 space-y-2 text-sm font-medium">
              <li>
                <a href={ORDER_URL} className="hover:text-lime">Order online</a>
              </li>
              <li>
                <a href="#catering" className="hover:text-lime">Catering</a>
              </li>
              <li>
                <a
                  href="https://instagram.com/bitefoodcoffeeco"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-lime"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* huge watermark */}
        <div className="mt-16 overflow-hidden">
          <p className="font-display text-[18vw] leading-[0.85] tracking-tighter text-pink/10 select-none">
            bite.
          </p>
        </div>

        <div className="mt-2 flex flex-wrap items-center justify-between gap-3 border-t-2 border-pink/20 pt-6 text-xs font-medium text-pink/70">
          <p>© {new Date().getFullYear()} Bite Food & Coffee Co. all rights reserved.</p>
          <p>100% halal · made in NJ ✦</p>
        </div>
      </div>
    </footer>
  );
}

function Star() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M10 1.5l2.6 5.27 5.82.84-4.21 4.1.99 5.79L10 14.77l-5.2 2.73.99-5.79L1.58 7.61l5.82-.84L10 1.5z" />
    </svg>
  );
}
