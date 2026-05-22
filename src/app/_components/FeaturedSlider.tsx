"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export type FeaturedItem = {
  name: string;
  blurb: string;
  tag: string;
  image: string;
};

export function FeaturedSlider({ items }: { items: FeaturedItem[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const drag = useRef({
    active: false,
    pointerId: 0,
    startX: 0,
    startScroll: 0,
    moved: 0,
  });
  const [isDragging, setIsDragging] = useState(false);

  const cardStep = () => {
    const el = scrollerRef.current;
    if (!el) return 0;
    const card = el.querySelector("article");
    const w = card ? card.getBoundingClientRect().width : 320;
    return w + 28; // gap-7
  };

  const scroll = (dir: "left" | "right") => {
    scrollerRef.current?.scrollBy({
      left: (dir === "left" ? -1 : 1) * cardStep(),
      behavior: "smooth",
    });
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    const el = scrollerRef.current;
    if (!el) return;
    drag.current = {
      active: true,
      pointerId: e.pointerId,
      startX: e.clientX,
      startScroll: el.scrollLeft,
      moved: 0,
    };
    el.setPointerCapture(e.pointerId);
    setIsDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!drag.current.active || !el) return;
    const dx = e.clientX - drag.current.startX;
    drag.current.moved = Math.max(drag.current.moved, Math.abs(dx));
    el.scrollLeft = drag.current.startScroll - dx;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!drag.current.active || !el) return;
    el.releasePointerCapture?.(drag.current.pointerId);

    // Snap to nearest card after release
    const step = cardStep();
    if (step > 0) {
      const snapped = Math.round(el.scrollLeft / step) * step;
      el.scrollTo({ left: snapped, behavior: "smooth" });
    }

    drag.current.active = false;
    setIsDragging(false);
    // moved value is read by onClickCapture below
    void e;
  };

  // If the user dragged more than a few pixels, swallow the synthetic click
  // so a card link (if added later) wouldn't fire after a drag.
  const onClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (drag.current.moved > 6) {
      e.preventDefault();
      e.stopPropagation();
    }
    drag.current.moved = 0;
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
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
        className={`no-scrollbar flex snap-x snap-mandatory gap-7 select-none overflow-x-auto px-2 pb-4 sm:px-4 ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ touchAction: "pan-y" }}
      >
        {items.map((item) => (
          <article
            key={item.name}
            className="lift relative w-[300px] shrink-0 snap-start overflow-hidden rounded-[28px] border-2 border-ink bg-pink shadow-bold sm:w-[360px] lg:w-[420px]"
          >
            <div className="pointer-events-none relative aspect-[4/3] overflow-hidden border-b-2 border-ink">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(min-width: 1024px) 420px, (min-width: 640px) 360px, 300px"
                className="object-cover"
                draggable={false}
              />
              <span className="absolute left-4 top-4 rotate-[-6deg] rounded-full border-2 border-ink bg-cream px-3 py-1 text-xs font-bold uppercase tracking-widest shadow-bold-sm">
                {item.tag}
              </span>
            </div>
            <div className="p-7">
              <h3 className="font-display text-4xl leading-none">{item.name}</h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-ink/75">
                {item.blurb}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
