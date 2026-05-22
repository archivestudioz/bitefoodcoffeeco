"use client";

import { useEffect, useRef, useState } from "react";

type Hunger = "light" | "medium" | "sending";
type Time = "in-out" | "half-hour" | "all-day";
type Vibe = "hungover" | "in-love" | "working" | "celebrating";

const HUNGER_OPTIONS: { value: Hunger; label: string }[] = [
  { value: "light", label: "light bite" },
  { value: "medium", label: "medium hold" },
  { value: "sending", label: "sending it" },
];

const TIME_OPTIONS: { value: Time; label: string }[] = [
  { value: "in-out", label: "in & out" },
  { value: "half-hour", label: "got 30" },
  { value: "all-day", label: "all day" },
];

const VIBE_OPTIONS: { value: Vibe; label: string }[] = [
  { value: "hungover", label: "hungover" },
  { value: "in-love", label: "in love" },
  { value: "working", label: "pretending to work" },
  { value: "celebrating", label: "celebrating" },
];

type Dish = {
  name: string;
  blurb: string;
  hunger: Hunger[];
  time: Time[];
  vibe: Vibe[];
};

const DISHES: Dish[] = [
  {
    name: "Chicken & Waffles",
    blurb: "Buttermilk waffle, crispy chicken, hot honey.",
    hunger: ["medium", "sending"],
    time: ["all-day"],
    vibe: ["hungover", "celebrating"],
  },
  {
    name: "Crème Brûlée Waffle",
    blurb: "Torched sugar crust, vanilla custard, berries.",
    hunger: ["medium"],
    time: ["all-day", "half-hour"],
    vibe: ["in-love", "celebrating"],
  },
  {
    name: "Griddle Brekkie",
    blurb: "Eggs, pancakes, smoked turkey, hash.",
    hunger: ["sending"],
    time: ["all-day", "half-hour"],
    vibe: ["hungover"],
  },
  {
    name: "Steak & Eggs",
    blurb: "Marinated skirt steak, two eggs, chimichurri.",
    hunger: ["sending"],
    time: ["all-day"],
    vibe: ["in-love", "celebrating"],
  },
  {
    name: "Crispy Chicken Sammie",
    blurb: "Buttermilk chicken, pickles, slaw, brioche.",
    hunger: ["medium"],
    time: ["in-out", "half-hour"],
    vibe: ["working", "celebrating"],
  },
  {
    name: "The Mediterranean",
    blurb: "Za'atar eggs, labneh, olives, warm pita.",
    hunger: ["light", "medium"],
    time: ["in-out", "half-hour"],
    vibe: ["in-love", "working"],
  },
  {
    name: "French Onion Omelette",
    blurb: "Caramelized onions, gruyère, three eggs.",
    hunger: ["medium"],
    time: ["all-day", "half-hour"],
    vibe: ["hungover", "in-love"],
  },
  {
    name: "Turkey BALT",
    blurb: "Roasted turkey, beef bacon, lettuce, avo, tomato.",
    hunger: ["light", "medium"],
    time: ["in-out", "half-hour"],
    vibe: ["working"],
  },
];

function pickDish(h: Hunger, t: Time, v: Vibe): Dish {
  const scored = DISHES.map((d) => ({
    d,
    score:
      (d.hunger.includes(h) ? 2 : 0) +
      (d.time.includes(t) ? 2 : 0) +
      (d.vibe.includes(v) ? 3 : 0),
  }));
  scored.sort((a, b) => b.score - a.score || a.d.name.localeCompare(b.d.name));
  return scored[0].d;
}

const RECEIPT_CLIP =
  "polygon(0 6px, 5% 0, 10% 6px, 15% 0, 20% 6px, 25% 0, 30% 6px, 35% 0, 40% 6px, 45% 0, 50% 6px, 55% 0, 60% 6px, 65% 0, 70% 6px, 75% 0, 80% 6px, 85% 0, 90% 6px, 95% 0, 100% 6px, 100% calc(100% - 6px), 95% 100%, 90% calc(100% - 6px), 85% 100%, 80% calc(100% - 6px), 75% 100%, 70% calc(100% - 6px), 65% 100%, 60% calc(100% - 6px), 55% 100%, 50% calc(100% - 6px), 45% 100%, 40% calc(100% - 6px), 35% 100%, 30% calc(100% - 6px), 25% 100%, 20% calc(100% - 6px), 15% 100%, 10% calc(100% - 6px), 5% 100%, 0 calc(100% - 6px))";

const ORDER_URL = "https://bitefoodcoffee.com/order";

const SURPRISE_QUIPS = [
  "eyes closed. blind shuffle ✦",
  "throwing a dart at the menu 🎯",
  "what the kitchen handed me ✦",
  "reaching into the kitchen, no questions ✦",
  "no thinking. just food ✦",
];

export function MoodQuiz() {
  const [isOpen, setIsOpen] = useState(false);
  const [hunger, setHunger] = useState<Hunger | null>(null);
  const [time, setTime] = useState<Time | null>(null);
  const [vibe, setVibe] = useState<Vibe | null>(null);
  const [surprise, setSurprise] = useState<{
    dish: Dish;
    quip: string;
    rolledAt: number;
  } | null>(null);

  const quizComplete = hunger !== null && time !== null && vibe !== null;
  const quizDish = quizComplete ? pickDish(hunger, time, vibe) : null;

  // Either the picked-quiz dish OR a surprise dish
  const resultDish = surprise?.dish ?? quizDish;
  const isSurprise = surprise !== null;
  const showingResult = isSurprise || (quizComplete && quizDish !== null);

  const reset = () => {
    setHunger(null);
    setTime(null);
    setVibe(null);
    setSurprise(null);
  };

  const handleSurprise = () => {
    // Avoid the same dish twice in a row when re-rolling.
    const pool =
      surprise && DISHES.length > 1
        ? DISHES.filter((d) => d.name !== surprise.dish.name)
        : DISHES;
    const dish = pool[Math.floor(Math.random() * pool.length)];
    // Same idea for the quip.
    const quipPool =
      surprise && SURPRISE_QUIPS.length > 1
        ? SURPRISE_QUIPS.filter((q) => q !== surprise.quip)
        : SURPRISE_QUIPS;
    const quip = quipPool[Math.floor(Math.random() * quipPool.length)];
    setSurprise({ dish, quip, rolledAt: Date.now() });
  };

  return (
    <>
      {/* Launcher (always present so panel toggles cleanly) */}
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close the Oracle" : "Open the Oracle"}
        className={`group fixed bottom-3 right-3 z-50 flex items-end transition-opacity duration-200 sm:bottom-5 sm:right-5 ${
          isOpen ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <span
          className="relative block h-32 w-24 sm:h-40 sm:w-28"
          style={{ filter: "drop-shadow(4px 4px 0 rgba(10,10,10,0.35))" }}
        >
          <OracleFace animated />
          <span
            aria-hidden="true"
            className="absolute -right-2 top-2 inline-flex h-6 w-6 rotate-12 items-center justify-center rounded-full border-2 border-ink bg-cream font-display text-base leading-none text-ink shadow-bold-sm"
          >
            ✦
          </span>
        </span>
      </button>

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="false"
        aria-label="The Oracle — find your bite"
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
                  stuck? i got you
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
            {showingResult && resultDish ? (
              <ResultView
                dish={resultDish}
                hunger={hunger}
                time={time}
                vibe={vibe}
                isSurprise={isSurprise}
                surpriseQuip={surprise?.quip}
                surpriseId={surprise?.rolledAt}
                onReset={reset}
                onRoll={handleSurprise}
              />
            ) : (
              <QuizView
                hunger={hunger}
                time={time}
                vibe={vibe}
                onHunger={setHunger}
                onTime={setTime}
                onVibe={setVibe}
                onSurprise={handleSurprise}
              />
            )}
          </div>
        </div>
      </div>
    </>
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
      // Aim at where the eyes actually sit (~47% from the top of the bounding box).
      const cx = box.left + box.width / 2;
      const cy = box.top + box.height * 0.47;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);

      // Eye target in SVG units (max ~2.4 keeps the pupil inside the sclera).
      const factor = Math.min(1, dist / 360);
      const maxOffset = 2.4;
      if (dist > 0.5) {
        targetEyeX = factor * maxOffset * (dx / dist);
        targetEyeY = factor * maxOffset * (dy / dist);
      } else {
        targetEyeX = 0;
        targetEyeY = 0;
      }

      // Subtle horizontal lean toward the cursor (max 4 degrees).
      const maxLean = 4;
      targetLean = Math.max(-maxLean, Math.min(maxLean, dx * 0.012));
    };

    const tick = () => {
      // Lerp toward target — eyes faster, body slower.
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
        {/* Outer group: subtle breathing scale. Origin at the feet. */}
        <g
          className={animated ? "cup-breathing" : undefined}
          style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}
        >
          {/* Inner group: cursor-driven body lean rotation. Same origin at the feet. */}
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
                {/* Legs (static now) */}
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

                {/* Left arm (resting) */}
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

                {/* Right arm (thumbs up) */}
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

                {/* Straw + lid */}
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

            {/* Cup body */}
            <path
              d="M 28 44 L 33 96 Q 33 100 37 100 L 63 100 Q 67 100 67 96 L 72 44 Z"
              fill="#ff98cb"
              stroke="#0a0a0a"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />

            {/* Face */}
            <g>
              {/* Sclera (whites) */}
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
              {/* Pupils — translate via ref to track cursor */}
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
              {/* Highlights — translate a bit less for parallax */}
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

              {/* Smile */}
              <path
                d="M 43 79 Q 50 84 57 79"
                stroke="#0a0a0a"
                strokeWidth="2.2"
                strokeLinecap="round"
                fill="none"
              />

              {/* Cheeks */}
              <circle cx="35" cy="78" r="2.4" fill="#0a0a0a" opacity="0.18" />
              <circle cx="65" cy="78" r="2.4" fill="#0a0a0a" opacity="0.18" />
            </g>
          </g>
        </g>
      </svg>
    </span>
  );
}

function QuizView({
  hunger,
  time,
  vibe,
  onHunger,
  onTime,
  onVibe,
  onSurprise,
}: {
  hunger: Hunger | null;
  time: Time | null;
  vibe: Vibe | null;
  onHunger: (v: Hunger) => void;
  onTime: (v: Time) => void;
  onVibe: (v: Vibe) => void;
  onSurprise: () => void;
}) {
  return (
    <div className="grid gap-6">
      <ChatIntro />
      <QuestionRow
        index={1}
        label="how hungry?"
        options={HUNGER_OPTIONS}
        selected={hunger}
        onSelect={onHunger}
      />
      <QuestionRow
        index={2}
        label="how much time?"
        options={TIME_OPTIONS}
        selected={time}
        onSelect={onTime}
      />
      <QuestionRow
        index={3}
        label="today's vibe?"
        options={VIBE_OPTIONS}
        selected={vibe}
        onSelect={onVibe}
      />

      {/* Surprise me escape hatch */}
      <div className="flex items-center gap-3 pt-2">
        <span className="h-px flex-1 bg-ink/20" aria-hidden="true" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-ink/50">
          or
        </span>
        <span className="h-px flex-1 bg-ink/20" aria-hidden="true" />
      </div>
      <button
        type="button"
        onClick={onSurprise}
        className="press group inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-ink bg-pink px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-ink shadow-bold-sm"
      >
        <span aria-hidden="true" className="text-base leading-none transition-transform duration-300 group-hover:rotate-180">
          ↻
        </span>
        just pick for me
      </button>
    </div>
  );
}

function ChatIntro() {
  return (
    <div className="flex items-start gap-2">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center">
        <OracleFace size={32} detailed={false} animated />
      </span>
      <div className="rounded-2xl rounded-tl-md border-2 border-ink bg-pink/40 px-3 py-2 font-mono text-[12px] leading-snug">
        hey ✦ can&apos;t decide? three quick ones and i&apos;ll plate you up.
      </div>
    </div>
  );
}

function QuestionRow<T extends string>({
  index,
  label,
  options,
  selected,
  onSelect,
}: {
  index: number;
  label: string;
  options: { value: T; label: string }[];
  selected: T | null;
  onSelect: (v: T) => void;
}) {
  return (
    <div>
      <p className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-widest text-ink/70">
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-ink bg-cream text-[10px] text-ink">
          {index}
        </span>
        {label}
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = selected === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onSelect(option.value)}
              className={`press inline-flex h-9 items-center rounded-full border-2 px-4 text-xs font-bold uppercase tracking-widest transition-colors ${
                isSelected
                  ? "border-ink bg-pink text-ink shadow-bold-sm"
                  : "border-ink/40 bg-cream text-ink hover:border-ink hover:bg-pink/30"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ResultView({
  dish,
  hunger,
  time,
  vibe,
  isSurprise,
  surpriseQuip,
  surpriseId,
  onReset,
  onRoll,
}: {
  dish: Dish;
  hunger: Hunger | null;
  time: Time | null;
  vibe: Vibe | null;
  isSurprise: boolean;
  surpriseQuip?: string;
  surpriseId?: number;
  onReset: () => void;
  onRoll: () => void;
}) {
  const hungerLabel = hunger
    ? HUNGER_OPTIONS.find((o) => o.value === hunger)!.label
    : null;
  const timeLabel = time
    ? TIME_OPTIONS.find((o) => o.value === time)!.label
    : null;
  const vibeLabel = vibe
    ? VIBE_OPTIONS.find((o) => o.value === vibe)!.label
    : null;

  const introMessage = isSurprise
    ? surpriseQuip ?? "what the kitchen handed me ✦"
    : "based on the vibes ✦ here's your bite:";

  return (
    <div className="grid gap-4">
      <div className="flex items-start gap-2">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center">
          <OracleFace size={32} detailed={false} animated />
        </span>
        <div className="rounded-2xl rounded-tl-md border-2 border-ink bg-pink/40 px-3 py-2 font-mono text-[12px] leading-snug">
          {introMessage}
        </div>
      </div>

      <figure
        key={isSurprise ? `roll-${surpriseId ?? 0}` : "quiz-result"}
        className={`receipt-paper relative mx-auto w-full text-ink ${
          isSurprise ? "animate-roll-in" : "animate-fade-up"
        }`}
        style={{
          clipPath: RECEIPT_CLIP,
          filter: "drop-shadow(4px 4px 0 #0a0a0a)",
        }}
      >
        {/* Header */}
        <div className="px-6 pt-7 text-center font-mono text-[10px] uppercase leading-snug tracking-wider">
          <p className="font-bold">BITE FOOD &amp; COFFEE CO.</p>
          <p className="mt-0.5 text-ink/70">
            {isSurprise ? "─── BLIND PICK ───" : "─── THE ORACLE ───"}
          </p>
        </div>

        <Divider />

        {isSurprise ? (
          <div className="px-6 text-center font-mono text-[10px] uppercase tracking-wider text-ink/70">
            no questions · just food
          </div>
        ) : (
          <div className="px-6 font-mono text-[10px] uppercase tracking-wider">
            {hungerLabel && <Line label="HUNGER" value={hungerLabel} />}
            {timeLabel && <Line label="TIME" value={timeLabel} />}
            {vibeLabel && <Line label="VIBE" value={vibeLabel} />}
          </div>
        )}

        <Divider dashed />

        <div className="px-5 py-2 text-center">
          <p className="font-mono text-[10px] uppercase tracking-widest text-ink/70">
            your bite
          </p>
          <h3 className="mt-2 font-display text-3xl leading-[0.95] tracking-tight">
            {dish.name}
          </h3>
          <p className="mt-2 px-1 font-mono text-[11px] leading-relaxed text-ink/80">
            {dish.blurb}
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

      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={isSurprise ? onRoll : onReset}
          className="font-mono text-[11px] uppercase tracking-widest text-ink/70 hover:text-ink hover:underline"
        >
          ↻ {isSurprise ? "roll again" : "try again"}
        </button>
        {isSurprise && (
          <>
            <span aria-hidden="true" className="text-ink/30">
              ·
            </span>
            <button
              type="button"
              onClick={onReset}
              className="font-mono text-[11px] uppercase tracking-widest text-ink/70 hover:text-ink hover:underline"
            >
              answer 3 instead
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function Line({ label, value }: { label: string; value: string }) {
  return (
    <div className="mt-0.5 flex justify-between first:mt-0">
      <span className="text-ink/70">{label}</span>
      <span className="font-bold">{value}</span>
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
