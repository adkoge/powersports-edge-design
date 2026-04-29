import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Phone, Search, Menu, Zap } from "lucide-react";
import heroImg from "@/assets/hero-powersports.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elway Powersports — Ride Harder. Ride Further." },
      {
        name: "description",
        content:
          "Six powersports dealerships across Colorado, Wyoming and Nebraska. Motorcycles, UTVs, ATVs and more.",
      },
    ],
  }),
  component: Index,
});

type Location = {
  name: string;
  city: string;
  phone: string;
  href: string;
  tag: string;
};

const locations: Location[] = [
  { name: "John Elway Harley-Davidson", city: "Greeley, CO", phone: "970-753-0224", href: "#", tag: "H-D" },
  { name: "Elway Powersports of Lincoln", city: "Lincoln, NE", phone: "402-235-6697", href: "#", tag: "EP" },
  { name: "Interstate Honda", city: "Fort Collins, CO", phone: "970-717-1148", href: "#", tag: "HON" },
  { name: "Northern Colorado Powersports", city: "Fort Collins, CO", phone: "970-679-1600", href: "#", tag: "NCP" },
  { name: "Wild West Motorsports", city: "Greeley, CO", phone: "970-753-0223", href: "#", tag: "WW" },
  { name: "Elway Powersports of Laramie", city: "Laramie, WY", phone: "307-400-3537", href: "#", tag: "EPL" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center bg-ignite text-ignite-foreground">
              <Zap className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="font-display text-xl font-black uppercase tracking-wider">
              Elway<span className="text-ignite">/</span>Powersports
            </span>
          </a>
          <nav className="hidden items-center gap-8 font-display text-sm font-semibold uppercase tracking-[0.2em] md:flex">
            <a href="#locations" className="hover:text-ignite transition-colors">Locations</a>
            <a href="#" className="hover:text-ignite transition-colors">Inventory</a>
            <a href="#" className="hover:text-ignite transition-colors">Corporate</a>
            <a href="#" className="hover:text-ignite transition-colors">Contact</a>
          </nav>
          <button className="flex items-center gap-2 border border-border bg-surface/60 px-4 py-2 backdrop-blur transition-colors hover:border-ignite md:hidden">
            <Menu className="h-4 w-4" />
          </button>
          <button className="hidden items-center gap-2 bg-ignite px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wider text-ignite-foreground transition-transform hover:-translate-y-0.5 md:inline-flex">
            <Search className="h-4 w-4" /> Search Inventory
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="UTV and dirt bike racing on desert terrain"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
          <div className="absolute inset-0 bg-grid opacity-40" />
        </div>

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-6 pt-32 pb-20">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-ignite" />
            <span className="font-display text-xs font-bold uppercase tracking-[0.4em] text-ignite">
              Six Dealerships · Three States
            </span>
          </div>
          <h1 className="mt-6 max-w-3xl font-display text-6xl font-black uppercase leading-[0.95] tracking-tight md:text-8xl">
            Ride <span className="text-ignite">harder.</span>
            <br />
            Ride <span className="text-stroke">further.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            From Harley-Davidson to Honda, UTVs to dirt bikes — the Elway Powersports
            network puts the machine you want within reach.
          </p>

          {/* Inventory search */}
          <div className="mt-10 max-w-2xl">
            <div className="group flex items-center gap-2 border border-border bg-surface/80 p-2 backdrop-blur-md transition-colors focus-within:border-ignite">
              <Search className="ml-3 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search inventory — make, model, year…"
                className="flex-1 bg-transparent px-2 py-3 font-medium text-foreground outline-none placeholder:text-muted-foreground"
              />
              <button className="flex items-center gap-2 bg-ignite px-5 py-3 font-display text-sm font-bold uppercase tracking-wider text-ignite-foreground transition-transform hover:-translate-y-0.5">
                Search <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border md:grid-cols-4 md:max-w-3xl">
            {[
              ["6", "Locations"],
              ["20+", "Brands"],
              ["3", "States"],
              ["1k+", "Units in stock"],
            ].map(([n, l]) => (
              <div key={l} className="bg-surface px-5 py-5">
                <div className="font-display text-3xl font-black text-ignite">{n}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section id="locations" className="relative border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-12 bg-ignite" />
                <span className="font-display text-xs font-bold uppercase tracking-[0.4em] text-ignite">
                  The Network
                </span>
              </div>
              <h2 className="mt-4 font-display text-5xl font-black uppercase leading-none md:text-6xl">
                Find your <span className="text-ignite">dealer</span>
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Six locations across the Rockies and Plains. Walk in, gear up, ride out.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((loc, i) => (
              <a
                key={loc.name}
                href={loc.href}
                className="group relative overflow-hidden border border-border bg-surface p-6 transition-all hover:border-ignite hover:bg-surface-elevated"
              >
                {/* corner accent */}
                <div className="absolute right-0 top-0 h-16 w-16 -translate-y-8 translate-x-8 rotate-45 bg-ignite/10 transition-transform group-hover:translate-x-6 group-hover:-translate-y-6" />

                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
                    /0{i + 1}
                  </span>
                  <span className="border border-border px-2 py-0.5 font-display text-[10px] font-bold uppercase tracking-widest text-ignite">
                    {loc.tag}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl font-black uppercase leading-tight">
                  {loc.name}
                </h3>

                <div className="mt-5 space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-ignite" />
                    {loc.city}
                  </div>
                  <div className="flex items-center gap-2 font-semibold text-foreground">
                    <Phone className="h-4 w-4 text-ignite" />
                    {loc.phone}
                  </div>
                </div>

                <div className="mt-7 flex items-center gap-3 border-t border-border pt-5">
                  <span className="flex-1 font-display text-sm font-bold uppercase tracking-wider transition-colors group-hover:text-ignite">
                    Visit Site
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center bg-ignite text-ignite-foreground transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 md:flex-row md:items-center">
          <h3 className="max-w-xl font-display text-4xl font-black uppercase leading-tight md:text-5xl">
            Built for the ones who <span className="text-ignite">don't slow down.</span>
          </h3>
          <a
            href="#locations"
            className="inline-flex items-center gap-3 bg-ignite px-7 py-4 font-display text-base font-bold uppercase tracking-wider text-ignite-foreground transition-transform hover:-translate-y-0.5"
          >
            Shop In-Stock <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center bg-ignite text-ignite-foreground">
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
