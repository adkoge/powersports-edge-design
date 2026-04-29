const brands = [
  { name: "Harley-Davidson", tag: "Since 1903" },
  { name: "Honda", tag: "Power of Dreams" },
  { name: "Yamaha", tag: "Revs Your Heart" },
  { name: "Polaris", tag: "Think Outside" },
  { name: "Can-Am", tag: "Ride Beyond" },
  { name: "Kawasaki", tag: "Let The Good Times Roll" },
  { name: "Sea-Doo", tag: "Reach For Wonder" },
  { name: "Ski-Doo", tag: "Ride To The Sky" },
  { name: "BMW Motorrad", tag: "Make Life A Ride" },
  { name: "Suzuki", tag: "Way Of Life" },
];

// Duplicate the array so the marquee loops seamlessly
const loop = [...brands, ...brands];

export function BrandsCarousel() {
  return (
    <div
      className="group relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
        {loop.map((brand, i) => (
          <div
            key={`${brand.name}-${i}`}
            className="flex h-28 w-64 shrink-0 flex-col items-center justify-center rounded-xl border border-border bg-surface-elevated px-6 transition-colors hover:border-ignite/60"
          >
            <span className="font-display text-xl font-black uppercase tracking-tight text-foreground">
              {brand.name}
            </span>
            <span className="mt-1 font-display text-[10px] font-semibold uppercase tracking-[0.25em] text-ignite">
              {brand.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
