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
  "polygon(0 8px, 5% 0, 10% 8px, 15% 0, 20% 8px, 25% 0, 30% 8px, 35% 0, 40% 8px, 45% 0, 50% 8px, 55% 0, 60% 8px, 65% 0, 70% 8px, 75% 0, 80% 8px, 85% 0, 90% 8px, 95% 0, 100% 8px, 100% calc(100% - 8px), 95% 100%, 90% calc(100% - 8px), 85% 100%, 80% calc(100% - 8px), 75% 100%, 70% calc(100% - 8px), 65% 100%, 60% calc(100% - 8px), 55% 100%, 50% calc(100% - 8px), 45% 100%, 40% calc(100% - 8px), 35% 100%, 30% calc(100% - 8px), 25% 100%, 20% calc(100% - 8px), 15% 100%, 10% calc(100% - 8px), 5% 100%, 0 calc(100% - 8px))";

const ORDER_URL = "https://bitefoodcoffee.com/order";

export function MoodQuiz() {
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
    <section className="border-b-2 border-ink bg-ink text-cream">
      <div className="mx-auto max-w-[1600px] px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
        <div className="max-w-3xl">
          <span className="inline-block rotate-[-2deg] rounded-full border-2 border-cream bg-pink px-4 py-1 text-xs font-bold uppercase tracking-widest text-ink shadow-bold-sm">
            the oracle ✦
          </span>
          <h2 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight text-cream sm:text-7xl lg:text-8xl">
            find your bite.
          </h2>
          <p className="mt-5 max-w-md text-lg font-medium leading-relaxed text-cream/75">
            three questions. one dish. zero overthinking.
          </p>
        </div>

        {complete && dish ? (
          <div className="mt-14 flex justify-center lg:mt-16">
            <ResultReceipt
              dish={dish}
              hunger={hunger}
              time={time}
              vibe={vibe}
              onReset={reset}
            />
          </div>
        ) : (
          <div className="mt-14 grid gap-10 lg:mt-16">
            <QuestionRow
              label="how hungry?"
              options={HUNGER_OPTIONS}
              selected={hunger}
              onSelect={setHunger}
            />
            <QuestionRow
              label="how much time?"
              options={TIME_OPTIONS}
              selected={time}
              onSelect={setTime}
            />
            <QuestionRow
              label="today's vibe?"
              options={VIBE_OPTIONS}
              selected={vibe}
              onSelect={setVibe}
            />
          </div>
        )}
      </div>
    </section>
  );
}

function QuestionRow<T extends string>({
  label,
  options,
  selected,
  onSelect,
}: {
  label: string;
  options: { value: T; label: string }[];
  selected: T | null;
  onSelect: (v: T) => void;
}) {
  return (
    <div>
      <p className="font-display text-2xl leading-none text-cream sm:text-3xl">
        {label}
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        {options.map((option) => {
          const isSelected = selected === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onSelect(option.value)}
              className={`press inline-flex h-12 items-center rounded-full border-2 px-6 text-sm font-bold uppercase tracking-widest transition-colors ${
                isSelected
                  ? "border-cream bg-pink text-ink shadow-bold-sm"
                  : "border-cream/40 bg-transparent text-cream hover:border-cream hover:bg-cream/10"
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

function ResultReceipt({
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
    <figure
      className="receipt-paper animate-fade-up relative flex w-[320px] flex-col text-ink sm:w-[380px]"
      style={{
        clipPath: RECEIPT_CLIP,
        filter: "drop-shadow(6px 6px 0 #ff98cb)",
      }}
    >
      {/* Header */}
      <div className="px-8 pt-10 text-center font-mono text-[11px] uppercase leading-snug tracking-wider">
        <p className="font-bold">BITE FOOD &amp; COFFEE CO.</p>
        <p className="mt-1 text-ink/70">─── THE ORACLE ───</p>
      </div>

      <Divider />

      {/* Answers */}
      <div className="px-8 font-mono text-[11px] uppercase tracking-wider">
        <Line label="HUNGER" value={hungerLabel} />
        <Line label="TIME" value={timeLabel} />
        <Line label="VIBE" value={vibeLabel} />
      </div>

      <Divider dashed />

      {/* Dish */}
      <div className="px-6 py-2 text-center">
        <p className="font-mono text-[11px] uppercase tracking-widest text-ink/70">
          your bite
        </p>
        <h3 className="mt-3 font-display text-4xl leading-[0.95] tracking-tight">
          {dish.name}
        </h3>
        <p className="mt-3 px-2 font-mono text-[12px] leading-relaxed text-ink/80">
          {dish.blurb}
        </p>
      </div>

      <Divider />

      {/* CTAs */}
      <div className="px-8 pb-10 pt-3 text-center">
        <a
          href={ORDER_URL}
          target="_blank"
          rel="noreferrer"
          className="press inline-flex h-11 items-center rounded-full border-2 border-ink bg-ink px-6 text-xs font-bold uppercase tracking-widest text-pink shadow-bold-sm"
        >
          tap to order →
        </a>
        <button
          type="button"
          onClick={onReset}
          className="mt-4 block w-full font-mono text-[11px] uppercase tracking-widest text-ink/70 hover:text-ink hover:underline"
        >
          ↻ try again
        </button>
      </div>
    </figure>
  );
}

function Line({ label, value }: { label: string; value: string }) {
  return (
    <div className="mt-1 flex justify-between first:mt-0">
      <span className="text-ink/70">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  );
}

function Divider({ dashed = false }: { dashed?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`my-3 mx-8 border-t ${
        dashed ? "border-dashed border-ink/60" : "border-ink/80"
      }`}
    />
  );
}
