import Image from "next/image";
import Link from "next/link";
import { RotatingWord } from "./_components/RotatingWord";
import { FeaturedSlider } from "./_components/FeaturedSlider";

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
  {
    name: "French Onion Omelette",
    blurb: "Caramelized onions, gruyère, three eggs.",
    tag: "rich",
    image:
      "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Turkey BALT",
    blurb: "Roasted turkey, beef bacon, lettuce, avo, tomato.",
    tag: "stacked",
    image:
      "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&w=1200&q=80",
  },
];

const reviews = [
  {
    name: "Michelle D.",
    quote:
      "Chicken & waffles are UNREAL. Service is warm, the space is gorgeous.",
    rotate: "-rotate-2",
    order: "2384",
    when: "WED 8:42 AM",
    tip: "ALL VIBES",
    edge: 0,
    crease: false,
    fade: false,
  },
  {
    name: "Darren W.",
    quote:
      "Best breakfast in Bergen County. Crème brûlée waffle = worth the trip.",
    rotate: "rotate-1",
    order: "1907",
    when: "SAT 10:15 AM",
    tip: "10/10",
    edge: 2,
    crease: true,
    fade: false,
  },
  {
    name: "Max E.",
    quote:
      "Halal, huge portions, killer coffee. We're regulars now. Steak & eggs never miss.",
    rotate: "-rotate-1",
    order: "0712",
    when: "FRI 12:30 PM",
    tip: "REGULAR",
    edge: 3,
    crease: false,
    fade: true,
  },
  {
    name: "Tasha K.",
    quote:
      "Matcha is elite. Came for the drinks, stayed three hours. Best vibe in town.",
    rotate: "rotate-2",
    order: "3551",
    when: "THU 3:08 PM",
    tip: "ICED ❄",
    edge: 1,
    crease: false,
    fade: false,
  },
  {
    name: "Jay R.",
    quote:
      "Breakfast sandwich is a 10/10. Halal kitchen + hot honey = my whole personality now.",
    rotate: "-rotate-1",
    order: "4429",
    when: "MON 9:21 AM",
    tip: "HOT HONEY",
    edge: 0,
    crease: true,
    fade: false,
  },
];

// Four edge variants — index referenced via review.edge
const RECEIPT_EDGES = [
  // 0: clean zigzag both ends
  "polygon(0 8px, 5% 0, 10% 8px, 15% 0, 20% 8px, 25% 0, 30% 8px, 35% 0, 40% 8px, 45% 0, 50% 8px, 55% 0, 60% 8px, 65% 0, 70% 8px, 75% 0, 80% 8px, 85% 0, 90% 8px, 95% 0, 100% 8px, 100% calc(100% - 8px), 95% 100%, 90% calc(100% - 8px), 85% 100%, 80% calc(100% - 8px), 75% 100%, 70% calc(100% - 8px), 65% 100%, 60% calc(100% - 8px), 55% 100%, 50% calc(100% - 8px), 45% 100%, 40% calc(100% - 8px), 35% 100%, 30% calc(100% - 8px), 25% 100%, 20% calc(100% - 8px), 15% 100%, 10% calc(100% - 8px), 5% 100%, 0 calc(100% - 8px))",
  // 1: ripped top, zigzag bottom
  "polygon(0 4px, 3% 9px, 7% 1px, 11% 7px, 15% 3px, 20% 10px, 25% 2px, 30% 8px, 35% 4px, 40% 11px, 45% 1px, 50% 7px, 55% 3px, 60% 10px, 65% 5px, 70% 1px, 75% 9px, 80% 3px, 85% 7px, 90% 2px, 95% 8px, 100% 4px, 100% calc(100% - 8px), 95% 100%, 90% calc(100% - 8px), 85% 100%, 80% calc(100% - 8px), 75% 100%, 70% calc(100% - 8px), 65% 100%, 60% calc(100% - 8px), 55% 100%, 50% calc(100% - 8px), 45% 100%, 40% calc(100% - 8px), 35% 100%, 30% calc(100% - 8px), 25% 100%, 20% calc(100% - 8px), 15% 100%, 10% calc(100% - 8px), 5% 100%, 0 calc(100% - 8px))",
  // 2: zigzag top, ripped bottom
  "polygon(0 8px, 5% 0, 10% 8px, 15% 0, 20% 8px, 25% 0, 30% 8px, 35% 0, 40% 8px, 45% 0, 50% 8px, 55% 0, 60% 8px, 65% 0, 70% 8px, 75% 0, 80% 8px, 85% 0, 90% 8px, 95% 0, 100% 8px, 100% calc(100% - 4px), 95% calc(100% - 11px), 91% calc(100% - 2px), 86% calc(100% - 8px), 82% calc(100% - 3px), 77% calc(100% - 10px), 72% calc(100% - 1px), 67% calc(100% - 7px), 62% calc(100% - 11px), 57% calc(100% - 3px), 52% calc(100% - 8px), 47% calc(100% - 2px), 42% calc(100% - 9px), 37% calc(100% - 5px), 32% calc(100% - 11px), 27% calc(100% - 2px), 22% calc(100% - 7px), 17% calc(100% - 4px), 12% calc(100% - 9px), 7% calc(100% - 1px), 3% calc(100% - 5px), 0 calc(100% - 4px))",
  // 3: ripped both ends
  "polygon(0 5px, 3% 11px, 7% 2px, 11% 9px, 16% 4px, 21% 10px, 26% 1px, 31% 8px, 36% 11px, 41% 3px, 46% 7px, 51% 2px, 56% 10px, 61% 5px, 66% 1px, 71% 9px, 76% 4px, 81% 11px, 86% 2px, 91% 8px, 96% 3px, 100% 5px, 100% calc(100% - 4px), 95% calc(100% - 10px), 91% calc(100% - 2px), 86% calc(100% - 8px), 82% calc(100% - 4px), 77% calc(100% - 11px), 72% calc(100% - 1px), 67% calc(100% - 7px), 62% calc(100% - 10px), 57% calc(100% - 3px), 52% calc(100% - 9px), 47% calc(100% - 2px), 42% calc(100% - 8px), 37% calc(100% - 5px), 32% calc(100% - 11px), 27% calc(100% - 2px), 22% calc(100% - 6px), 17% calc(100% - 4px), 12% calc(100% - 10px), 7% calc(100% - 1px), 3% calc(100% - 5px), 0 calc(100% - 4px))",
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
    alt: "Holding up the Spring/Summer 2025 BITE menu",
    caption: "menu szn ✦",
    rotate: "-rotate-3",
    bg: "bg-cream",
  },
  {
    src: "/photos/wild-2.jpg",
    alt: "Late night burger run under the lamp post",
    caption: "late night moves",
    rotate: "rotate-2",
    bg: "bg-cream",
  },
  {
    src: "/photos/wild-3.jpg",
    alt: "Burger and iced coffee, dialed in",
    caption: "double-fisting",
    rotate: "-rotate-1",
    bg: "bg-cream",
  },
  {
    src: "/photos/wild-4.jpg",
    alt: "Late-night chicken sandwich, jersey on",
    caption: "first bite",
    rotate: "rotate-3",
    bg: "bg-cream",
  },
  {
    src: "/photos/wild-5.jpg",
    alt: "Cocktails cheers over a quiet kiss",
    caption: "drinks szn ✦",
    rotate: "rotate-1",
    bg: "bg-cream",
  },
  {
    src: "/photos/wild-6.jpg",
    alt: "Burger bite in the velvet booth",
    caption: "burger run",
    rotate: "-rotate-2",
    bg: "bg-cream",
  },
  {
    src: "/photos/wild-7.jpg",
    alt: "Sharing rigatoni, fur coats on",
    caption: "pasta night",
    rotate: "rotate-3",
    bg: "bg-cream",
  },
  {
    src: "/photos/wild-8.jpg",
    alt: "Takeout box on the car, BITE sign behind",
    caption: "after hours",
    rotate: "-rotate-1",
    bg: "bg-cream",
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
          bite<span className="text-ink">.</span>
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
    <section className="relative overflow-hidden border-b-2 border-ink bg-ink text-cream">
      {/* Background video — bg-ink behind it darkens slightly, no pink tint */}
      <video
        src="/photos/hero.mp4"
        poster="/photos/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover opacity-75"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          <span className="wobble inline-flex -rotate-2 items-center gap-2 rounded-full border-2 border-ink bg-cream px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-ink shadow-bold-sm">
            <span className="h-2 w-2 rounded-full bg-ink" />
            100% halal · NJ
          </span>

          <h1 className="mt-6 font-display text-[64px] leading-[0.95] tracking-tight text-cream sm:text-[88px] lg:text-[112px]">
            best
            <br />
            <RotatingWord />
            <br />
            in jersey.
          </h1>

          <p className="mt-7 max-w-md text-lg font-medium leading-relaxed text-cream/85">
            Made fresh, made halal, made for you.
          </p>

          <div className="mt-8">
            <a
              href={ORDER_URL}
              className="press inline-flex h-14 items-center rounded-full border-2 border-cream bg-pink px-8 text-sm font-bold uppercase tracking-widest text-ink shadow-bold"
              style={{ boxShadow: "6px 6px 0 0 #fff5e6" }}
            >
              Order online →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const doubled = [...marqueeBits, ...marqueeBits];
  return (
    <section className="marquee-container border-y-2 border-ink bg-pink py-4 text-ink overflow-hidden">
      <div className="flex animate-marquee gap-10 whitespace-nowrap font-display text-3xl sm:text-4xl">
        {doubled.map((bit, i) => (
          <span key={i} className="flex items-center gap-10">
            <span>{bit}</span>
            <span aria-hidden className="text-ink">✺</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section id="menu" className="border-b-2 border-ink bg-cream">
      <div className="mx-auto max-w-[1600px] px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <span className="wobble inline-block rotate-[-2deg] rounded-full border-2 border-ink bg-pink px-4 py-1 text-xs font-bold uppercase tracking-widest shadow-bold-sm">
              the hits ✦
            </span>
            <h2 className="mt-6 font-display text-6xl leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              food
              <br />
              <span className="text-pink">people scream</span>
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

        <div className="mt-16 lg:mt-20">
          <FeaturedSlider items={featured} />
        </div>
      </div>
    </section>
  );
}

function PolaroidWall() {
  const doubled = [...polaroids, ...polaroids];
  return (
    <section className="relative overflow-hidden border-b-2 border-ink bg-pink">
      <div className="mx-auto max-w-[1600px] px-6 pt-24 sm:px-10 lg:px-12 lg:pt-32">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6 lg:mb-16">
          <div>
            <span className="wobble inline-block rotate-[-2deg] rounded-full border-2 border-ink bg-cream px-4 py-1 text-xs font-bold uppercase tracking-widest shadow-bold-sm">
              in the wild ✦
            </span>
            <h2 className="mt-5 font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              caught on camera.
            </h2>
          </div>
          <a
            href="https://instagram.com/bitefoodcoffeeco"
            target="_blank"
            rel="noreferrer"
            className="press inline-flex h-12 items-center rounded-full border-2 border-ink bg-ink px-6 text-sm font-bold uppercase tracking-widest text-pink shadow-bold-sm"
          >
            @bitefoodcoffeeco →
          </a>
        </div>
      </div>

      <div className="pb-24 lg:pb-32">
        <div className="marquee-container">
          <div className="flex animate-marquee-slow gap-8 px-6 sm:px-10 lg:px-12">
            {doubled.map((p, i) => (
              <figure
                key={i}
                className={`relative w-[260px] shrink-0 overflow-hidden rounded-2xl border-2 border-ink shadow-bold transition-transform duration-300 ease-out hover:scale-[1.06] hover:z-10 sm:w-[300px] lg:w-[340px] ${p.bg} ${p.rotate}`}
              >
                <div className="relative aspect-[3/4] overflow-hidden border-b-2 border-ink">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 340px, (min-width: 640px) 300px, 260px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-5 py-4">
                  <span className="inline-block rotate-[-2deg] font-display text-2xl leading-none">
                    {p.caption}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const doubled = [...reviews, ...reviews];
  return (
    <section className="border-b-2 border-ink bg-pink overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:pt-20">
        <div className="max-w-2xl">
          <span className="wobble inline-block rotate-[-2deg] rounded-full border-2 border-ink bg-cream px-4 py-1 text-xs font-bold uppercase tracking-widest shadow-bold-sm">
            loved
          </span>
          <h2 className="mt-5 font-display text-4xl leading-[0.95] tracking-tight sm:text-6xl">
            regulars
            <br />
            <span className="text-ink">say it best.</span>
          </h2>
        </div>
      </div>

      <div className="py-14 lg:py-20">
        <div className="marquee-container">
          <div className="flex animate-marquee-slow gap-8 px-4 sm:px-6">
          {doubled.map((r, i) => (
            <figure
              key={i}
              className={`receipt-paper relative flex w-[280px] shrink-0 flex-col text-ink transition-transform duration-300 ease-out hover:scale-[1.05] hover:z-10 sm:w-[320px] ${r.rotate}`}
              style={{
                clipPath: RECEIPT_EDGES[r.edge],
                filter: "drop-shadow(4px 5px 0 rgba(10,10,10,0.85))",
                opacity: r.fade ? 0.94 : 1,
              }}
            >
              {/* Optional fold/crease shadow */}
              {r.crease && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-[42%] h-px bg-ink/30"
                  style={{ boxShadow: "0 -1px 0 rgba(10,10,10,0.06)" }}
                />
              )}

              {/* Header */}
              <div className="px-6 pt-8 text-center font-mono text-[11px] uppercase leading-snug tracking-wider">
                <p className="font-bold">BITE FOOD &amp; COFFEE CO.</p>
                <p className="mt-0.5 text-ink/70">360 Essex St · Hackensack, NJ</p>
                <p className="mt-0.5 text-ink/70">(201) 560-2269</p>
              </div>

              <ReceiptDivider />

              {/* Order meta */}
              <div className="px-6 text-center font-mono text-[11px] uppercase tracking-wider text-ink/80">
                ORDER #{r.order} · {r.when}
              </div>

              <ReceiptDivider />

              {/* Stars */}
              <div
                className="flex justify-center gap-1.5 px-6 text-pink"
                aria-label="5 stars"
              >
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mt-3 flex-1 px-6 text-center font-mono text-[13px] leading-relaxed">
                &ldquo;{r.quote}&rdquo;
              </blockquote>

              <ReceiptDivider dashed />

              {/* Customer */}
              <div className="px-6 font-mono text-[11px] uppercase tracking-wider">
                <div className="flex justify-between">
                  <span className="text-ink/70">CUSTOMER</span>
                  <span className="font-bold">{r.name.toUpperCase()}</span>
                </div>
                <div className="mt-1 flex justify-between">
                  <span className="text-ink/70">TIP</span>
                  <span className="font-bold">{r.tip}</span>
                </div>
              </div>

              <ReceiptDivider />

              {/* Barcode */}
              <Barcode seed={r.order} />

              {/* Footer */}
              <div className="px-6 pb-8 pt-3 text-center font-mono text-[10px] uppercase tracking-widest">
                <p className="font-bold">thank you ✦ come back</p>
                <p className="mt-1 text-ink/70">@bitefoodcoffeeco</p>
              </div>
            </figure>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

function ReceiptDivider({ dashed = false }: { dashed?: boolean }) {
  return (
    <div
      className={`my-3 mx-6 border-t ${
        dashed ? "border-dashed border-ink/60" : "border-ink/80"
      }`}
      aria-hidden="true"
    />
  );
}

function Barcode({ seed }: { seed: string }) {
  // Deterministic per-receipt: produce a sequence of bar widths from the order #
  const chars = seed.padEnd(32, "0").split("");
  return (
    <div
      aria-hidden="true"
      className="mx-6 mt-1 flex h-7 items-end justify-center gap-px"
    >
      {chars.map((c, i) => {
        const n = (parseInt(c, 10) || 0) + (i % 3);
        const width = n % 3 === 0 ? 1 : n % 3 === 1 ? 2 : 3;
        const tall = n % 5 === 0;
        return (
          <span
            key={i}
            className="bg-ink"
            style={{
              width,
              height: tall ? "100%" : "85%",
              opacity: 0.85,
            }}
          />
        );
      })}
    </div>
  );
}

const footerNav = {
  menu: [
    { label: "Menu", href: "#menu" },
    { label: "Menu PDF", href: "/menu.pdf" },
    { label: "Catering", href: "/catering" },
    { label: "All Day Brunch & Dinner", href: "/brunch-dinner" },
  ],
  bite: [
    { label: "Our Story", href: "/story" },
    { label: "Events", href: "/events" },
    { label: "We're Hiring", href: "/careers" },
    { label: "Gift Cards", href: "/gift-cards" },
  ],
  visit: [
    { label: "Contact", href: "/contact" },
    { label: "Locations", href: "/locations" },
    { label: "We are 100% Halal", href: "/halal" },
    { label: "What Makes Our Breakfast Special", href: "/why-bite" },
  ],
};

function Footer() {
  return (
    <footer className="bg-ink text-pink">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-3">
            <Link
              href="/"
              className="font-display text-6xl leading-none tracking-tight"
            >
              bite<span className="text-pink">.</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm font-medium leading-relaxed text-pink/80">
              Halal breakfast, brunch & dinner. Hackensack + Fair Lawn, NJ.
            </p>

            {/* Order CTA */}
            <a
              href={ORDER_URL}
              className="press mt-6 inline-flex h-11 items-center rounded-full border-2 border-pink bg-pink px-5 text-sm font-bold uppercase tracking-wider text-ink"
            >
              Order online →
            </a>

            {/* Social */}
            <div className="mt-7 flex gap-3">
              <SocialIcon
                href="https://instagram.com/bitefoodcoffeeco"
                label="Instagram"
              >
                <InstagramIcon />
              </SocialIcon>
              <SocialIcon
                href="https://facebook.com/bitefoodcoffeeco"
                label="Facebook"
              >
                <FacebookIcon />
              </SocialIcon>
              <SocialIcon
                href="https://tiktok.com/@bitefoodcoffeeco"
                label="TikTok"
              >
                <TikTokIcon />
              </SocialIcon>
            </div>
          </div>

          {/* Menu column */}
          <FooterColumn title="menu" items={footerNav.menu} />

          {/* Bite column */}
          <FooterColumn title="bite" items={footerNav.bite} />

          {/* Visit column */}
          <div className="md:col-span-3">
            <h4 className="font-display text-2xl leading-none">visit</h4>
            <ul className="mt-5 space-y-2.5 text-sm font-medium">
              {footerNav.visit.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-pink/85 transition hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* App download */}
          <div className="md:col-span-2">
            <h4 className="font-display text-2xl leading-none">app</h4>
            <p className="mt-4 text-sm font-medium text-pink/85">
              Scan to download our app
            </p>
            <div className="mt-4 inline-block rounded-2xl border-2 border-pink/30 bg-cream p-3">
              <QrPlaceholder />
            </div>
            <p className="mt-3 text-xs font-medium uppercase tracking-widest text-pink/70">
              Earn points for free food ✦
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <AppBadge platform="apple" />
              <AppBadge platform="google" />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t-2 border-pink/20 pt-6 text-xs font-medium text-pink/70">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <p>© {new Date().getFullYear()} Bite Food & Coffee Co.</p>
            <Link href="/terms" className="hover:text-cream">
              Terms of service
            </Link>
            <Link href="/accessibility" className="hover:text-cream">
              Accessibility
            </Link>
          </div>
          <p>100% halal · made in NJ ✦</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div className="md:col-span-2">
      <h4 className="font-display text-2xl leading-none">{title}</h4>
      <ul className="mt-5 space-y-2.5 text-sm font-medium">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-pink/85 transition hover:text-cream"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-pink/40 text-pink transition hover:border-pink hover:bg-pink hover:text-ink"
    >
      {children}
    </a>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M13 3h4v4h-3c-.55 0-1 .45-1 1v3h4l-.5 4H13v6h-4v-6H6v-4h3V8a5 5 0 0 1 5-5z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M19.6 6.7a4.8 4.8 0 0 1-3.8-4.2V2h-3.4v13.7a2.9 2.9 0 0 1-5.2 1.7 2.9 2.9 0 0 1 2.3-4.6c.3 0 .6 0 .9.1V9.4a6.7 6.7 0 0 0-1-.1 6.3 6.3 0 0 0-3.6 11.5 6.3 6.3 0 0 0 10.5-4.7v-7a8.2 8.2 0 0 0 4.8 1.5V7.3a4.9 4.9 0 0 1-1.5-.6z" />
    </svg>
  );
}

function QrPlaceholder() {
  // Stylised QR-ish square using a 7x7 grid of cells in ink.
  // Real QR can be dropped in as an <Image src="/photos/app-qr.png" /> later.
  const pattern = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1],
  ];
  return (
    <div
      className="grid h-24 w-24 gap-[2px]"
      style={{ gridTemplateColumns: "repeat(7, 1fr)" }}
      aria-label="App QR code"
      role="img"
    >
      {pattern.flatMap((row, y) =>
        row.map((cell, x) => (
          <span
            key={`${x}-${y}`}
            className={cell ? "bg-ink" : "bg-cream"}
            aria-hidden="true"
          />
        ))
      )}
    </div>
  );
}

function AppBadge({ platform }: { platform: "apple" | "google" }) {
  const small = platform === "apple" ? "Download on the" : "Get it on";
  const big = platform === "apple" ? "App Store" : "Google Play";
  return (
    <a
      href="#"
      className="press flex items-center gap-2 rounded-lg border-2 border-pink/40 px-3 py-1.5 transition hover:border-pink hover:bg-pink hover:text-ink"
    >
      {platform === "apple" ? <AppleIcon /> : <GooglePlayIcon />}
      <div className="text-left leading-tight">
        <div className="text-[9px] uppercase tracking-widest opacity-80">
          {small}
        </div>
        <div className="text-sm font-bold">{big}</div>
      </div>
    </a>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M16.4 12.7c0-2.7 2.2-4 2.3-4-1.3-1.8-3.2-2-3.9-2-1.7-.2-3.2 1-4 1s-2.1-1-3.5-1c-1.8 0-3.5 1-4.4 2.6-1.9 3.3-.5 8.2 1.4 10.8.9 1.3 2 2.7 3.4 2.7s2-.9 3.7-.9 2.2.9 3.7.9c1.5 0 2.5-1.3 3.4-2.6.7-1 1.3-2.1 1.7-3.3-3-1.2-3.8-3.4-3.8-4.2zM14 4.5C14.7 3.6 15.2 2.4 15 1.2c-1 0-2.3.7-3.1 1.6-.7.8-1.3 2-1.1 3.2 1.2.1 2.4-.6 3.2-1.5z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M3.6 2.4C3.3 2.7 3 3.2 3 4v16c0 .8.3 1.3.6 1.6L13 12 3.6 2.4zm10.6 9.6 2.6-2.6L5.6 3.3 14.2 12zm0 0L5.6 20.7l11.2-6.1-2.6-2.6zm5.1-2.9-2.8 1.6 2.6 2.6L21.7 12c.4-.4.4-1.3-.4-1.9-.2-.1-1.2-.7-2-1z" />
    </svg>
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
