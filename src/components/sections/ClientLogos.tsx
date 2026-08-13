const names = ["NORTHWIND", "ATLAS & CO", "MERIDIAN", "HELIX LABS", "VANTAGE", "OAKRIDGE", "QUANTA", "BRIGHTPATH", "LUMEN", "IRONCLAD"];

export function ClientLogos() {
  return (
    <section className="border-b border-border bg-white py-14 overflow-hidden">
      <div
        className="relative [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
      >
        <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-16 px-8">
          {[...names, ...names].map((n, i) => (
            <div
              key={i}
              className="shrink-0 font-display text-lg font-bold tracking-[0.18em] text-navy-deep/40 hover:text-navy-deep transition-colors"
            >
              {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
