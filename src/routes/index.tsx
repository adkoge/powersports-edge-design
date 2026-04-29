import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Search, Monitor, Tag, ChevronDown, Zap } from "lucide-react";
import heroImg from "@/assets/hero-utv.jpg";
import { BrandsCarousel } from "@/components/BrandsCarousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elway Powersports — Six Dealerships, One Network" },
      {
        name: "description",
        content:
          "Elway Powersports network — motorcycles, UTVs, ATVs and more across Colorado, Wyoming and Nebraska.",
      },
    ],
  }),
  component: Index,
});

type Location = {
  name: string;
  city: string;
  phone: string;
};

const locations: Location[] = [
  { name: "John Elway Harley-Davidson", city: "Greeley, CO", phone: "970-753-0224" },
  { name: "Elway Powersports of Lincoln", city: "Lincoln, NE", phone: "402-235-6697" },
  { name: "Interstate Honda", city: "Fort Collins, CO", phone: "970-717-1148" },
  { name: "Northern Colorado Powersports", city: "Fort Collins, CO", phone: "970-679-1600" },
  { name: "Wild West Motorsports", city: "Greeley, CO", phone: "970-753-0223" },
  { name: "Elway Powersports of Laramie", city: "Laramie, WY", phone: "307-400-3537" },
];

const navItems = [
  { label: "Home", hasMenu: false },
  { label: "Inventory", hasMenu: true },
  { label: "Corporate", hasMenu: true },
  { label: "Contact", hasMenu: false },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* TOP NAV — original layout: logo + links left, search right */}
      <header className="relative z-30 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <a href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-ignite text-ignite-foreground">
              <Zap className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="font-display text-lg font-black uppercase tracking-wider">
              Elway Powersports
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className="flex items-center gap-1 rounded-md px-4 py-2 font-display text-sm font-bold uppercase tracking-wider text-foreground/80 transition-colors hover:bg-surface hover:text-ignite"
              >
                {item.label}
                {item.hasMenu && <ChevronDown className="h-3.5 w-3.5" />}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 rounded-md border border-border bg-surface pl-3 pr-1 py-1 focus-within:border-ignite transition-colors">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Inventory Search"
              className="w-44 bg-transparent py-1.5 text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
            <button
              aria-label="Search"
              className="flex h-7 w-7 items-center justify-center rounded bg-ignite text-ignite-foreground transition-transform hover:-translate-y-0.5"
            >
              <Search className="h-3.5 w-3.5" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </header>

      {/* HERO + DEALER GRID */}
      <section className="relative">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="UTVs racing across red rock desert terrain"
            className="h-full w-full object-cover"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-foreground/30" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20">

          {/* Dealer cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((loc) => (
              <DealerCard key={loc.name} {...loc} />
            ))}
          </div>
        </div>
      </section>

      {/* OUR BRANDS */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-ignite" />
                <span className="font-display text-xs font-bold uppercase tracking-[0.4em] text-ignite">
                  Trusted Brands
                </span>
              </div>
              <h2 className="mt-3 font-display text-4xl font-black uppercase">Our Brands</h2>
            </div>
          </div>
          <BrandsCarousel />
          <p className="mt-6 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Hover to pause · Tap a logo to explore inventory
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded bg-ignite text-ignite-foreground">
              <Zap className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <span className="font-display font-bold uppercase tracking-wider text-foreground">
              Elway Powersports
            </span>
          </div>
          <p>© {new Date().getFullYear()} Elway Powersports. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function DealerCard({ name, city, phone }: Location) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-ignite hover:shadow-xl hover:shadow-ignite/10">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-ignite" />

      <div className="p-6">
        <h3 className="font-display text-xl font-black uppercase leading-tight tracking-tight min-h-[3.5rem]">
          {name}
        </h3>

        <div className="mt-5 space-y-2.5 text-sm">
          <div className="flex items-center gap-2.5 text-muted-foreground">
            <MapPin className="h-4 w-4 text-ignite" />
            <span className="font-medium">{city}</span>
          </div>
          <a
            href={`tel:${phone}`}
            className="flex items-center gap-2.5 font-display text-base font-bold tracking-wide text-foreground hover:text-ignite transition-colors"
          >
            <Phone className="h-4 w-4 text-ignite" />
            {phone}
          </a>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2">
          <a
            href="#"
            className="flex items-center justify-center gap-2 rounded-md border border-border bg-surface-elevated px-3 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-foreground transition-colors hover:border-ignite hover:text-ignite"
          >
            <Monitor className="h-3.5 w-3.5" /> Visit Site
          </a>
          <a
            href="#"
            className="flex items-center justify-center gap-2 rounded-md bg-ignite px-3 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-ignite-foreground transition-transform hover:-translate-y-0.5"
          >
            <Tag className="h-3.5 w-3.5" /> Shop In-Stock
          </a>
        </div>
      </div>
    </article>
  );
}
