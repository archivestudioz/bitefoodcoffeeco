"use client";

import { useState } from "react";

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

export function MoodQuiz() {
  const [isOpen, setIsOpen] = useState(false);
  const [hunger, setHunger] = useState<Hunger | null>(null);
  const [time, setTime] = useState<Time | null>(null);
  const [vibe, setVibe] = useState<Vibe | null>(null);

  const complete = hunger !== null && time !== null && vibe !== null;
  const dish = complete ? pickDish(hunger, time, vibe) : null;

  const reset = () => {
    setHunger(null);
    setTime(null);
    setVibe(null);
  };

  return (
    <>
      {/* Launcher (always present so panel toggles cleanly) */}
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close the Oracle" : "Open the Oracle"}
        className={`group fixed bottom-5 right-5 z-50 flex items-center gap-3 transition-opacity duration-200 sm:bottom-6 sm:right-6 ${
          isOpen ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <span className="hidden translate-x-1 rotate-[-3deg] rounded-full border-2 border-ink bg-cream px-3 py-1.5 font-display text-sm leading-none text-ink shadow-bold-sm transition-transform group-hover:translate-x-0 group-hover:rotate-0 sm:inline-block">
          stuck? ask me ✦
        </span>
        <span className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-ink bg-pink shadow-bold transition-transform group-hover:-translate-y-1 sm:h-20 sm:w-20">
          <OracleFace size={36} bobbing />
          <span
            aria-hidden="true"
            className="absolute -right-1 -top-1 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-ink bg-cream font-display text-base leading-none text-ink shadow-bold-sm"
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
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-cream">
                <OracleFace size={22} />
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
          <div className="max-h-[60vh] overflow-y-auto px-5 py-5">
            {complete && dish ? (
              <ResultView
                dish={dish}
                hunger={hunger}
                time={time}
                vibe={vibe}
                onReset={reset}
              />
            ) : (
              <QuizView
                hunger={hunger}
                time={time}
                vibe={vibe}
                onHunger={setHunger}
                onTime={setTime}
                onVibe={setVibe}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function OracleFace({
  size = 36,
  bobbing = false,
}: {
  size?: number;
  bobbing?: boolean;
}) {
  return (
    <span
      className={`inline-flex ${bobbing ? "animate-[bob_2.4s_ease-in-out_infinite]" : ""}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 60 60"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Eyes */}
        <circle cx="22" cy="26" r="3.6" fill="#0a0a0a" />
        <circle cx="38" cy="26" r="3.6" fill="#0a0a0a" />
        <circle cx="23.2" cy="24.6" r="1.1" fill="#fff5e6" />
        <circle cx="39.2" cy="24.6" r="1.1" fill="#fff5e6" />
        {/* Smile */}
        <path
          d="M 19 36 Q 30 46, 41 36"
          stroke="#0a0a0a"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        {/* Cheek */}
        <circle cx="17" cy="33" r="2" fill="#ff98cb" opacity="0.6" />
        <circle cx="43" cy="33" r="2" fill="#ff98cb" opacity="0.6" />
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
}: {
  hunger: Hunger | null;
  time: Time | null;
  vibe: Vibe | null;
  onHunger: (v: Hunger) => void;
  onTime: (v: Time) => void;
  onVibe: (v: Vibe) => void;
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
    </div>
  );
}

function ChatIntro() {
  return (
    <div className="flex items-start gap-2">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-pink">
        <OracleFace size={18} />
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
  onReset,
}: {
  dish: Dish;
  hunger: Hunger;
  time: Time;
  vibe: Vibe;
  onReset: () => void;
}) {
  const hungerLabel = HUNGER_OPTIONS.find((o) => o.value === hunger)!.label;
  const timeLabel = TIME_OPTIONS.find((o) => o.value === time)!.label;
  const vibeLabel = VIBE_OPTIONS.find((o) => o.value === vibe)!.label;

  return (
    <div className="grid gap-4">
      <div className="flex items-start gap-2">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-pink">
          <OracleFace size={18} />
        </span>
        <div className="rounded-2xl rounded-tl-md border-2 border-ink bg-pink/40 px-3 py-2 font-mono text-[12px] leading-snug">
          based on the vibes ✦ here&apos;s your bite:
        </div>
      </div>

      <figure
        className="receipt-paper animate-fade-up relative mx-auto w-full text-ink"
        style={{
          clipPath: RECEIPT_CLIP,
          filter: "drop-shadow(4px 4px 0 #0a0a0a)",
        }}
      >
        {/* Header */}
        <div className="px-6 pt-7 text-center font-mono text-[10px] uppercase leading-snug tracking-wider">
          <p className="font-bold">BITE FOOD &amp; COFFEE CO.</p>
          <p className="mt-0.5 text-ink/70">─── THE ORACLE ───</p>
        </div>

        <Divider />

        <div className="px-6 font-mono text-[10px] uppercase tracking-wider">
          <Line label="HUNGER" value={hungerLabel} />
          <Line label="TIME" value={timeLabel} />
          <Line label="VIBE" value={vibeLabel} />
        </div>

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

      <button
        type="button"
        onClick={onReset}
        className="font-mono text-[11px] uppercase tracking-widest text-ink/70 hover:text-ink hover:underline"
      >
        ↻ try again
      </button>
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
