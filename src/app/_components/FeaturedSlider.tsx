"use client";

import Image from "next/image";
import { useRef } from "react";

export type FeaturedItem = {
  name: string;
  blurb: string;
  tag: string;
  image: string;
};

export function FeaturedSlider({ items }: { items: FeaturedItem[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("article");
    const cardWidth = card ? card.getBoundingClientRect().width : 320;
    const gap = 28; // matches gap-7
    el.scrollBy({
      left: (dir === "left" ? -1 : 1) * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => scroll("left")}
        aria-label="Previous"
        className="press absolute left-0 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ink bg-cream font-display text-2xl shadow-bold-sm sm:left-2 sm:h-14 sm:w-14"
      >
        ←
      </button>
      <button
        type="button"
        onClick={() => scroll("right")}
        aria-label="Next"
        className="press absolute right-0 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ink bg-cream font-display text-2xl shadow-bold-sm sm:right-2 sm:h-14 sm:w-14"
      >
        →
      </button>

      <div
        ref={scrollerRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-7 overflow-x-auto scroll-smooth px-2 pb-4 sm:px-4"
      >
        {items.map((item) => (
          <article
            key={item.name}
            className="lift relative w-[260px] shrink-0 snap-start overflow-hidden rounded-[28px] border-2 border-ink bg-pink shadow-bold sm:w-[300px] lg:w-[340px]"
          >
            <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-ink">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(min-width: 1024px) 340px, (min-width: 640px) 300px, 260px"
                className="object-cover transition duration-500 hover:scale-105"
              />
              <span className="absolute left-3 top-3 rotate-[-6deg] rounded-full border-2 border-ink bg-cream px-3 py-1 text-xs font-bold uppercase tracking-widest shadow-bold-sm">
                {item.tag}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-display text-3xl leading-none">{item.name}</h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-ink/75">
                {item.blurb}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
