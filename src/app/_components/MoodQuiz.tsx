"use client";

import { useEffect, useRef, useState } from "react";

type Dish = {
  name: string;
  blurb: string;
};

const DISHES: Dish[] = [
  {
    name: "Chicken & Waffles",
    blurb: "Buttermilk waffle, crispy chicken, hot honey.",
  },
  {
    name: "Crème Brûlée Waffle",
    blurb: "Torched sugar crust, vanilla custard, berries.",
  },
  {
    name: "Griddle Brekkie",
    blurb: "Eggs, pancakes, smoked turkey, hash.",
  },
  {
    name: "Steak & Eggs",
    blurb: "Marinated skirt steak, two eggs, chimichurri.",
  },
  {
    name: "Crispy Chicken Sammie",
    blurb: "Buttermilk chicken, pickles, slaw, brioche.",
  },
  {
    name: "The Mediterranean",
    blurb: "Za'atar eggs, labneh, olives, warm pita.",
  },
  {
    name: "French Onion Omelette",
    blurb: "Caramelized onions, gruyère, three eggs.",
  },
  {
    name: "Turkey BALT",
    blurb: "Roasted turkey, beef bacon, lettuce, avo, tomato.",
  },
];

const SURPRISE_QUIPS = [
  "eyes closed. blind shuffle ✦",
  "throwing a dart at the menu ✦",
  "what the kitchen handed me ✦",
  "reaching into the kitchen, no questions ✦",
  "no thinking. just food ✦",
];

const RECEIPT_CLIP =
  "polygon(0 6px, 5% 0, 10% 6px, 15% 0, 20% 6px, 25% 0, 30% 6px, 35% 0, 40% 6px, 45% 0, 50% 6px, 55% 0, 60% 6px, 65% 0, 70% 6px, 75% 0, 80% 6px, 85% 0, 90% 6px, 95% 0, 100% 6px, 100% calc(100% - 6px), 95% 100%, 90% calc(100% - 6px), 85% 100%, 80% calc(100% - 6px), 75% 100%, 70% calc(100% - 6px), 65% 100%, 60% calc(100% - 6px), 55% 100%, 50% calc(100% - 6px), 45% 100%, 40% calc(100% - 6px), 35% 100%, 30% calc(100% - 6px), 25% 100%, 20% calc(100% - 6px), 15% 100%, 10% calc(100% - 6px), 5% 100%, 0 calc(100% - 6px))";

const ORDER_URL = "https://bitefoodcoffee.com/order";

type Surprise = { dish: Dish; quip: string; rolledAt: number };

function makeRandomPick(prev?: Surprise): Surprise {
  const dishPool =
    prev && DISHES.length > 1
      ? DISHES.filter((d) => d.name !== prev.dish.name)
      : DISHES;
  const dish = dishPool[Math.floor(Math.random() * dishPool.length)];

  const quipPool =
    prev && SURPRISE_QUIPS.length > 1
      ? SURPRISE_QUIPS.filter((q) => q !== prev.quip)
      : SURPRISE_QUIPS;
  const quip = quipPool[Math.floor(Math.random() * quipPool.length)];

  return { dish, quip, rolledAt: Date.now() };
}

export function MoodQuiz() {
  const [isOpen, setIsOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [surprise, setSurprise] = useState<Surprise | null>(null);

  const openOracle = () => {
    if (!surprise) {
      setSurprise(makeRandomPick());
    }
    setIsOpen(true);
  };

  const handleRoll = () => {
    setSurprise((prev) => makeRandomPick(prev ?? undefined));
  };

  if (dismissed) return null;

  return (
    <>
      {/* Launcher area — wraps the cup button + a sibling dismiss button */}
      <div
        className={`fixed bottom-3 right-3 z-50 transition-opacity duration-200 sm:bottom-5 sm:right-5 ${
          isOpen ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <button
          type="button"
          onClick={openOracle}
          aria-label="Open the Oracle — get a dish picked for you"
          className="group block"
        >
          <span
            className="relative block h-32 w-24 sm:h-40 sm:w-28"
            style={{ filter: "drop-shadow(4px 4px 0 rgba(10,10,10,0.35))" }}
          >
            <OracleFace animated />
          </span>
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setDismissed(true);
          }}
          aria-label="Dismiss the Oracle"
          className="press absolute right-0 top-3 z-10 flex h-7 w-7 rotate-12 items-center justify-center rounded-full border-2 border-ink bg-ink font-display text-sm leading-none text-pink shadow-bold-sm sm:right-1 sm:top-4 sm:h-8 sm:w-8"
        >
          <span aria-hidden="true" className="leading-none">
            ×
          </span>
        </button>
      </div>

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="false"
        aria-label="The Oracle — your random pick"
        className={`fixed bottom-5 right-5 z-50 w-[calc(100vw-2.5rem)] max-w-[360px] origin-bottom-right transition-all duration-200 sm:bottom-6 sm:right-6 ${
          isOpen
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-2 scale-95 opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded-[28px] border-2 border-ink bg-cream text-ink shadow-bold">
          {/* Header */}
          <div className="flex items-center justify-between gap-3 border-b-2 border-ink bg-pink px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center">
                <OracleFace size={36} detailed={false} animated />
              </span>
              <div className="leading-tight">
                <p className="font-display text-xl leading-none">the oracle</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-ink/70">
                  blind picks · no thinking
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
              className="press flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-ink text-lg font-bold leading-none text-pink"
            >
              ×
            </button>
          </div>

          {/* Body */}
          <div className="max-h-[75vh] overflow-y-auto px-5 py-5">
            {surprise ? (
              <SurpriseView surprise={surprise} onRoll={handleRoll} />
            ) : (
              // Fallback (shouldn't render since openOracle seeds it)
              <button
                type="button"
                onClick={handleRoll}
                className="press inline-flex h-11 w-full items-center justify-center rounded-full border-2 border-ink bg-pink text-sm font-bold uppercase tracking-widest text-ink shadow-bold-sm"
              >
                ↻ pick for me
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function SurpriseView({
  surprise,
  onRoll,
}: {
  surprise: Surprise;
  onRoll: () => void;
}) {
  return (
    <div className="grid gap-4">
      {/* Oracle chat bubble with quip */}
      <div className="flex items-start gap-2">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center">
          <OracleFace size={32} detailed={false} animated />
        </span>
        <div
          key={`quip-${surprise.rolledAt}`}
          className="animate-fade-up rounded-2xl rounded-tl-md border-2 border-ink bg-pink/40 px-3 py-2 font-mono text-[12px] leading-snug"
        >
          {surprise.quip}
        </div>
      </div>

      {/* Receipt */}
      <figure
        key={`roll-${surprise.rolledAt}`}
        className="receipt-paper animate-roll-in relative mx-auto w-full text-ink"
        style={{
          clipPath: RECEIPT_CLIP,
          filter: "drop-shadow(4px 4px 0 #0a0a0a)",
        }}
      >
        {/* Header */}
        <div className="px-6 pt-7 text-center font-mono text-[10px] uppercase leading-snug tracking-wider">
          <p className="font-bold">BITE FOOD &amp; COFFEE CO.</p>
          <p className="mt-0.5 text-ink/70">─── BLIND PICK ───</p>
        </div>

        <Divider />

        <div className="px-6 text-center font-mono text-[10px] uppercase tracking-wider text-ink/70">
          no questions · just food
        </div>

        <Divider dashed />

        <div className="px-5 py-2 text-center">
          <p className="font-mono text-[10px] uppercase tracking-widest text-ink/70">
            your bite
          </p>
          <h3 className="mt-2 font-display text-3xl leading-[0.95] tracking-tight">
            {surprise.dish.name}
          </h3>
          <p className="mt-2 px-1 font-mono text-[11px] leading-relaxed text-ink/80">
            {surprise.dish.blurb}
          </p>
        </div>

        <Divider />

        <div className="px-6 pb-7 pt-2 text-center">
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noreferrer"
            className="press inline-flex h-10 items-center rounded-full border-2 border-ink bg-ink px-5 text-[11px] font-bold uppercase tracking-widest text-pink"
          >
            tap to order →
          </a>
        </div>
      </figure>

      {/* Roll again */}
      <button
        type="button"
        onClick={onRoll}
        className="press inline-flex h-10 w-full items-center justify-center gap-2 rounded-full border-2 border-ink bg-pink text-xs font-bold uppercase tracking-widest text-ink shadow-bold-sm"
      >
        <span aria-hidden="true" className="text-base leading-none">
          ↻
        </span>
        roll again
      </button>
    </div>
  );
}

function Divider({ dashed = false }: { dashed?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`my-2 mx-6 border-t ${
        dashed ? "border-dashed border-ink/60" : "border-ink/80"
      }`}
    />
  );
}

function OracleFace({
  size,
  className = "",
  animated = false,
  detailed = true,
}: {
  size?: number;
  className?: string;
  animated?: boolean;
  detailed?: boolean;
}) {
  const sized = size ? { width: size, height: size } : undefined;
  const viewBox = detailed ? "0 0 100 140" : "20 30 60 60";

  const wrapperRef = useRef<HTMLSpanElement>(null);
  const leanRef = useRef<SVGGElement>(null);
  const pupilLeftRef = useRef<SVGCircleElement>(null);
  const pupilRightRef = useRef<SVGCircleElement>(null);
  const highlightLeftRef = useRef<SVGCircleElement>(null);
  const highlightRightRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (!animated) return;
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let raf = 0;
    let targetEyeX = 0;
    let targetEyeY = 0;
    let targetLean = 0;
    let curEyeX = 0;
    let curEyeY = 0;
    let curLean = 0;

    const onMove = (e: MouseEvent) => {
      const box = wrapper.getBoundingClientRect();
      const cx = box.left + box.width / 2;
      const cy = box.top + box.height * 0.47;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);

      const factor = Math.min(1, dist / 360);
      const maxOffset = 2.4;
      if (dist > 0.5) {
        targetEyeX = factor * maxOffset * (dx / dist);
        targetEyeY = factor * maxOffset * (dy / dist);
      } else {
        targetEyeX = 0;
        targetEyeY = 0;
      }

      const maxLean = 4;
      targetLean = Math.max(-maxLean, Math.min(maxLean, dx * 0.012));
    };

    const tick = () => {
      curEyeX += (targetEyeX - curEyeX) * 0.18;
      curEyeY += (targetEyeY - curEyeY) * 0.18;
      curLean += (targetLean - curLean) * 0.1;

      const pupilT = `translate(${curEyeX}px, ${curEyeY}px)`;
      const hiT = `translate(${curEyeX * 0.7}px, ${curEyeY * 0.7}px)`;
      if (pupilLeftRef.current) pupilLeftRef.current.style.transform = pupilT;
      if (pupilRightRef.current) pupilRightRef.current.style.transform = pupilT;
      if (highlightLeftRef.current)
        highlightLeftRef.current.style.transform = hiT;
      if (highlightRightRef.current)
        highlightRightRef.current.style.transform = hiT;
      if (leanRef.current)
        leanRef.current.style.transform = `rotate(${curLean.toFixed(3)}deg)`;

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, [animated]);

  return (
    <span
      ref={wrapperRef}
      className={`relative inline-flex ${size ? "" : "h-full w-full"} ${className}`}
      style={sized}
      aria-hidden="true"
    >
      <svg
        viewBox={viewBox}
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          className={animated ? "cup-breathing" : undefined}
          style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}
        >
          <g
            ref={leanRef}
            style={{
              transformBox: "fill-box",
              transformOrigin: "50px 130px",
              transition: "transform 0.04s linear",
            }}
          >
            {detailed && (
              <>
                <line
                  x1="40"
                  y1="100"
                  x2="40"
                  y2="120"
                  stroke="#0a0a0a"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <ellipse
                  cx="36"
                  cy="125"
                  rx="9"
                  ry="5"
                  fill="#fff5e6"
                  stroke="#0a0a0a"
                  strokeWidth="2.5"
                />
                <line
                  x1="60"
                  y1="100"
                  x2="60"
                  y2="120"
                  stroke="#0a0a0a"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <ellipse
                  cx="64"
                  cy="125"
                  rx="9"
                  ry="5"
                  fill="#fff5e6"
                  stroke="#0a0a0a"
                  strokeWidth="2.5"
                />

                <path
                  d="M 28 78 Q 16 92 14 108"
                  stroke="#0a0a0a"
                  strokeWidth="3.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle
                  cx="14"
                  cy="111"
                  r="5.5"
                  fill="#fff5e6"
                  stroke="#0a0a0a"
                  strokeWidth="2.5"
                />

                <path
                  d="M 72 78 Q 85 75 90 64"
                  stroke="#0a0a0a"
                  strokeWidth="3.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle
                  cx="92"
                  cy="61"
                  r="6"
                  fill="#fff5e6"
                  stroke="#0a0a0a"
                  strokeWidth="2.5"
                />
                <line
                  x1="92"
                  y1="56"
                  x2="92"
                  y2="51"
                  stroke="#0a0a0a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                <line
                  x1="50"
                  y1="8"
                  x2="50"
                  y2="42"
                  stroke="#0a0a0a"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <ellipse
                  cx="50"
                  cy="42"
                  rx="24"
                  ry="5"
                  fill="#fff5e6"
                  stroke="#0a0a0a"
                  strokeWidth="2.5"
                />
                <ellipse
                  cx="50"
                  cy="42"
                  rx="6"
                  ry="1.5"
                  fill="none"
                  stroke="#0a0a0a"
                  strokeWidth="1.5"
                />
              </>
            )}

            <path
              d="M 28 44 L 33 96 Q 33 100 37 100 L 63 100 Q 67 100 67 96 L 72 44 Z"
              fill="#ff98cb"
              stroke="#0a0a0a"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />

            <g>
              <ellipse
                cx="42"
                cy="66"
                rx="6"
                ry="7"
                fill="#fff5e6"
                stroke="#0a0a0a"
                strokeWidth="2"
              />
              <ellipse
                cx="58"
                cy="66"
                rx="6"
                ry="7"
                fill="#fff5e6"
                stroke="#0a0a0a"
                strokeWidth="2"
              />
              <circle
                ref={pupilLeftRef}
                cx="42"
                cy="66"
                r="3.2"
                fill="#0a0a0a"
                style={{ willChange: "transform" }}
              />
              <circle
                ref={pupilRightRef}
                cx="58"
                cy="66"
                r="3.2"
                fill="#0a0a0a"
                style={{ willChange: "transform" }}
              />
              <circle
                ref={highlightLeftRef}
                cx="43.2"
                cy="64.5"
                r="1.1"
                fill="#fff5e6"
                style={{ willChange: "transform" }}
              />
              <circle
                ref={highlightRightRef}
                cx="59.2"
                cy="64.5"
                r="1.1"
                fill="#fff5e6"
                style={{ willChange: "transform" }}
              />

              <path
                d="M 43 79 Q 50 84 57 79"
                stroke="#0a0a0a"
                strokeWidth="2.2"
                strokeLinecap="round"
                fill="none"
              />

              <circle cx="35" cy="78" r="2.4" fill="#0a0a0a" opacity="0.18" />
              <circle cx="65" cy="78" r="2.4" fill="#0a0a0a" opacity="0.18" />
            </g>
          </g>
        </g>
      </svg>
    </span>
  );
}
