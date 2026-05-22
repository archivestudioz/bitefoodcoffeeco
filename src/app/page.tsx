import Image from "next/image";
import Link from "next/link";
import { RotatingWord } from "./_components/RotatingWord";

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

const explore = [
  {
    title: "our story",
    line: "fresh food, no shortcuts. here's the why.",
    cta: "read it",
    href: "/story",
    bg: "bg-tan",
    rotate: "md:-rotate-1",
  },
  {
    title: "two locations",
    line: "hackensack + fair lawn. open daily till 8pm.",
    cta: "get directions",
    href: "/locations",
    bg: "bg-pink-soft",
    rotate: "md:rotate-1",
  },
  {
    title: "catering",
    line: "feeding a crowd? we got you.",
    cta: "plan an event",
    href: "mailto:info@bitefoodcoffee.com?subject=Catering%20inquiry",
    bg: "bg-lime",
    rotate: "md:-rotate-1",
  },
];

const reviews = [
  {
    name: "Michelle D.",
    quote:
      "Chicken & waffles are UNREAL. Service is warm, the space is gorgeous.",
    rotate: "-rotate-2",
    bg: "bg-cream",
  },
  {
    name: "Darren W.",
    quote:
      "Best breakfast in Bergen County. Crème brûlée waffle = worth the trip.",
    rotate: "rotate-1",
    bg: "bg-pink-soft",
  },
  {
    name: "Max E.",
    quote:
      "Halal, huge portions, killer coffee. We're regulars now. Steak & eggs never miss.",
    rotate: "-rotate-1",
    bg: "bg-lime",
  },
  {
    name: "Tasha K.",
    quote:
      "Matcha is elite. Came for the drinks, stayed three hours. Best vibe in town.",
    rotate: "rotate-2",
    bg: "bg-cream",
  },
  {
    name: "Jay R.",
    quote:
      "Breakfast sandwich is a 10/10. Halal kitchen + hot honey = my whole personality now.",
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

const polaroids = [
  {
    src: "/photos/wild-1.jpg",
    alt: "Latte being poured at the espresso bar",
    caption: "coffee era ☕",
    rotate: "-rotate-3",
    bg: "bg-cream",
  },
  {
    src: "/photos/wild-2.jpg",
    alt: "Late night burger run under the lamp post",
    caption: "late night moves",
    rotate: "rotate-2",
    bg: "bg-tan",
  },
  {
    src: "/photos/wild-3.jpg",
    alt: "Burger and iced coffee, dialed in",
    caption: "double-fisting",
    rotate: "-rotate-1",
    bg: "bg-pink-soft",
  },
  {
    src: "/photos/wild-4.jpg",
    alt: "Late-night chicken sandwich, jersey on",
    caption: "first bite",
    rotate: "rotate-3",
    bg: "bg-lime",
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Featured />
        <PolaroidWall />
        <Explore />
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
          <Link href="/story" className="hover:underline">Story</Link>
          <Link href="/locations" className="hover:underline">Locations</Link>
          <Link href="/catering" className="hover:underline">Catering</Link>
        </nav>
        <a
          href={ORDER_URL}
          className="press inline-flex h-11 items-center rounded-full border-2 border-ink bg-ink px-5 text-sm font-bold uppercase tracking-wider text-pink shadow-bold-sm"
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
          <span className="wobble inline-flex -rotate-2 items-center gap-2 rounded-full border-2 border-ink bg-tan px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-bold-sm">
            <span className="h-2 w-2 rounded-full bg-pink-deep" />
            100% halal · NJ
          </span>

          <h1 className="mt-6 font-display text-[64px] leading-[0.95] tracking-tight sm:text-[88px] lg:text-[112px]">
            best
            <br />
            <RotatingWord />
            <br />
            in jersey.
          </h1>

          <p className="mt-7 max-w-md text-lg font-medium leading-relaxed text-ink-soft">
            Brunch. Dinner. Matcha. Pancakes at 7pm.
            <br />
            Made fresh, made halal, made for you.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={ORDER_URL}
              className="press inline-flex h-14 items-center rounded-full border-2 border-ink bg-ink px-8 text-sm font-bold uppercase tracking-widest text-pink shadow-bold"
            >
              Order online →
            </a>
            <Link
              href="#menu"
              className="press inline-flex h-14 items-center rounded-full border-2 border-ink bg-tan px-8 text-sm font-bold uppercase tracking-widest text-ink shadow-bold"
            >
              see the menu
            </Link>
          </div>
        </div>

        <div className="relative md:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[40px] border-2 border-ink bg-tan shadow-bold">
            <video
              src="/photos/hero.mp4"
              poster="/photos/hero-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover"
              aria-label="Late-night Bite vibes"
            />
          </div>
          <div className="wobble absolute -bottom-4 -left-4 rotate-[-8deg] rounded-2xl border-2 border-ink bg-lime px-4 py-2 font-display text-2xl shadow-bold-sm sm:-bottom-6 sm:-left-6">
            yum*
          </div>
          <div className="wobble absolute -top-3 -right-3 rotate-[10deg] rounded-full border-2 border-ink bg-ink px-4 py-2 text-xs font-bold uppercase tracking-widest text-pink shadow-bold-sm">
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
    <section className="marquee-container border-y-2 border-ink bg-ink py-4 text-pink overflow-hidden">
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
    <section id="menu" className="border-b-2 border-ink bg-tan">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="wobble inline-block rotate-[-2deg] rounded-full border-2 border-ink bg-pink px-4 py-1 text-xs font-bold uppercase tracking-widest shadow-bold-sm">
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
            className="press inline-flex h-12 items-center rounded-full border-2 border-ink bg-ink px-6 text-sm font-bold uppercase tracking-widest text-pink shadow-bold-sm"
          >
            see the whole menu →
          </a>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item, i) => (
            <article
              key={item.name}
              className={`lift relative overflow-hidden rounded-[28px] border-2 border-ink bg-cream shadow-bold ${
                i % 2 === 0 ? "sm:rotate-[-1deg]" : "sm:rotate-[1deg]"
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-ink">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 hover:scale-105"
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

function PolaroidWall() {
  return (
    <section className="relative overflow-hidden border-b-2 border-ink bg-pink">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-16">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="wobble inline-block rotate-[-2deg] rounded-full border-2 border-ink bg-tan px-4 py-1 text-xs font-bold uppercase tracking-widest shadow-bold-sm">
              in the wild ✦
            </span>
            <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-tight sm:text-6xl">
              caught on camera.
            </h2>
          </div>
          <a
            href="https://instagram.com/bitefoodcoffeeco"
            target="_blank"
            rel="noreferrer"
            className="press inline-flex h-11 items-center rounded-full border-2 border-ink bg-ink px-5 text-xs font-bold uppercase tracking-widest text-pink shadow-bold-sm"
          >
            @bitefoodcoffeeco →
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {polaroids.map((p, i) => (
            <figure
              key={i}
              className={`lift relative overflow-hidden rounded-2xl border-2 border-ink shadow-bold ${p.bg} ${p.rotate}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden border-b-2 border-ink">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <figcaption className="px-4 py-3">
                <span className="inline-block rotate-[-2deg] font-display text-xl leading-none">
                  {p.caption}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Explore() {
  return (
    <section className="border-b-2 border-ink bg-pink">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="wobble inline-block rotate-[-2deg] rounded-full border-2 border-ink bg-tan px-4 py-1 text-xs font-bold uppercase tracking-widest shadow-bold-sm">
              more from bite ✦
            </span>
            <h2 className="mt-5 font-display text-4xl leading-[0.95] tracking-tight sm:text-6xl">
              keep exploring.
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-7 md:grid-cols-3">
          {explore.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className={`lift group flex flex-col rounded-[28px] border-2 border-ink p-7 shadow-bold ${card.bg} ${card.rotate}`}
            >
              <h3 className="font-display text-4xl leading-none">
                {card.title}
              </h3>
              <p className="mt-3 text-base font-medium text-ink-soft">
                {card.line}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-bold uppercase tracking-widest">
                {card.cta}
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const doubled = [...reviews, ...reviews];
  return (
    <section className="border-b-2 border-ink bg-tan overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:pt-20">
        <div className="max-w-2xl">
          <span className="wobble inline-block rotate-[-2deg] rounded-full border-2 border-ink bg-pink px-4 py-1 text-xs font-bold uppercase tracking-widest shadow-bold-sm">
            loved
          </span>
          <h2 className="mt-5 font-display text-4xl leading-[0.95] tracking-tight sm:text-6xl">
            regulars
            <br />
            <span className="text-pink-deep">say it best.</span>
          </h2>
        </div>
      </div>

      <div className="marquee-container py-12 lg:py-16">
        <div className="flex animate-marquee gap-6 px-4 sm:px-6">
          {doubled.map((r, i) => (
            <figure
              key={i}
              className={`relative flex w-[320px] shrink-0 flex-col rounded-[28px] border-2 border-ink p-6 shadow-bold transition-transform duration-300 ease-out hover:scale-[1.06] hover:z-10 sm:w-[360px] ${r.bg} ${r.rotate}`}
            >
              <div className="flex gap-1 text-pink-deep" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} />
                ))}
              </div>
              <blockquote className="mt-3 flex-1 font-display text-lg leading-snug">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-xs font-bold uppercase tracking-widest">
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
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-8 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-10">
          <div>
            <Link
              href="/"
              className="font-display text-5xl leading-none tracking-tight"
            >
              bite<span className="text-lime">.</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm font-medium leading-relaxed text-pink/80">
              Halal breakfast, brunch & dinner. Hackensack + Fair Lawn, NJ.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm font-semibold uppercase tracking-wider">
            <a href={ORDER_URL} className="hover:text-lime">Order</a>
            <Link href="/story" className="hover:text-lime">Story</Link>
            <Link href="/locations" className="hover:text-lime">Locations</Link>
            <Link href="/catering" className="hover:text-lime">Catering</Link>
            <a
              href="https://instagram.com/bitefoodcoffeeco"
              target="_blank"
              rel="noreferrer"
              className="hover:text-lime"
            >
              Instagram
            </a>
          </nav>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t-2 border-pink/20 pt-5 text-xs font-medium text-pink/70">
          <p>© {new Date().getFullYear()} Bite Food & Coffee Co.</p>
          <p>100% halal · made in NJ ✦</p>
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
