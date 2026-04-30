import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, Monitor, Tag, ArrowRight, Users } from "lucide-react";
import heroImg from "@/assets/hero-utv.jpg";
import heroAction from "@/assets/hero-utv-action.jpg";
import topoContours from "@/assets/topo-contours.svg";
import { BrandsCarousel } from "@/components/BrandsCarousel";
import offroadImg from "@/assets/category-offroad.jpg";
import motorcyclesImg from "@/assets/category-motorcycles.jpg";
import snowImg from "@/assets/category-snow.jpg";
import boatsImg from "@/assets/category-boats.jpg";
import atvImg from "@/assets/category-atv.jpg";
import threeWheelsImg from "@/assets/category-3wheels.jpg";
import watercraftImg from "@/assets/category-watercraft.jpg";
import scootersImg from "@/assets/category-scooters.jpg";

const categories = [
  { name: "Off-Road", image: offroadImg },
  { name: "Motorcycles", image: motorcyclesImg },
  { name: "Snow", image: snowImg },
  { name: "Boats", image: boatsImg },
  { name: "ATV", image: atvImg },
  { name: "3 Wheels", image: threeWheelsImg },
  { name: "Watercraft", image: watercraftImg },
  { name: "Scooters", image: scootersImg },
];

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

function Index() {
  return (
    <div>
      {/* HERO + DEALER GRID */}
      <section className="relative flex min-h-screen flex-col overflow-hidden bg-background">
        {/* Organic topographic terrain — generated via SVG turbulence contours */}
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 900"
        >
          <defs>
            <filter id="topo" x="0" y="0" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.006 0.009" numOctaves="3" seed="7" />
              <feColorMatrix
                values="0 0 0 0 0
                        0 0 0 0 0
                        0 0 0 0 0
                        0 0 0 18 -7"
              />
              <feComposite in2="SourceGraphic" operator="in" />
            </filter>
            <radialGradient id="topoMask" cx="0%" cy="100%" r="95%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="55%" stopColor="white" stopOpacity="0.6" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="fadeMask">
              <rect width="1200" height="900" fill="url(#topoMask)" />
            </mask>
          </defs>
          <g mask="url(#fadeMask)">
            <rect width="1200" height="900" fill="var(--foreground)" filter="url(#topo)" />
          </g>
        </svg>

        {/* Warm accent glow bottom-left */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 0% 100%, color-mix(in oklab, var(--ignite) 12%, transparent) 0%, transparent 70%)",
          }}
        />

        {/* Hero image — positioned right, extends down behind the cards */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-[70%] sm:w-[65%] lg:w-[62%]"
        >
          <img
            src={heroAction}
            alt=""
            width={1280}
            height={896}
            className="h-full w-full object-cover object-left"
          />
          {/* Left-edge fade blending into background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, var(--background) 0%, var(--background) 12%, transparent 45%)",
            }}
          />
          {/* Bottom fade so cards sit nicely on top */}
          <div
            className="absolute inset-x-0 bottom-0 h-56"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, color-mix(in oklab, var(--background) 75%, transparent) 55%, var(--background) 100%)",
            }}
          />
        </div>

        <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between px-6 pt-16 pb-10 lg:pt-24">
          {/* Headline */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-ignite" />
              <span className="font-display text-xs font-bold uppercase tracking-[0.4em] text-ignite">
                Six Locations.
              </span>
            </div>
            <h1 className="mt-4 font-display text-5xl font-black uppercase leading-[0.95] text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
              Power.<br />Passion.<br />Performance.
            </h1>
          </div>

          {/* Compact dealer cards — pulled up to overlap the hero image */}
          <div className="relative mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* WELCOME */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-ignite" />
            <span className="font-display text-xs font-bold uppercase tracking-[0.4em] text-ignite">
              About Us
            </span>
            <span className="h-px w-10 bg-ignite" />
          </div>
          <h2 className="mt-4 font-display text-4xl font-black uppercase md:text-5xl">
            Welcome to <span className="text-ignite">Elway Powersports</span>
          </h2>
          <div className="mx-auto mt-6 h-1 w-20 bg-ignite" />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Elway Powersports offers an incredible selection of products from the biggest
              names in the industry, including BMW, Can-Am, Polaris®, Harley-Davidson®, Honda,
              Indian Motorcycle, Sea-Doo, Ski-Doo, Spyder, Ryker, Kawasaki, Triumph, Yamaha
              and Suzuki. Whether you're shopping for a new or used Side-by-Side, ATV, UTV,
              Dirt Bike, Scooter, Motorcycle, Personal Watercraft, Trailer or Electric Bike —
              you're sure to find it at one of our growing Elway Powersports locations.
            </p>
            <p>
              Started in 2021, our mission is to become a leader in the industry by providing
              every customer a superior and authentic experience that exceeds expectations and
              sets the bar for what a powersports dealership should look and feel like.
            </p>
          </div>
        </div>
      </section>

      {/* SHOP BY TYPE */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-ignite" />
              <span className="font-display text-xs font-bold uppercase tracking-[0.4em] text-ignite">
                Inventory
              </span>
              <span className="h-px w-10 bg-ignite" />
            </div>
            <h2 className="mt-4 font-display text-4xl font-black uppercase md:text-5xl">
              Shop By <span className="text-ignite">Type</span>
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-ignite" />
          </div>
          <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {categories.map((cat) => (
              <a
                key={cat.name}
                href="#"
                className="group flex flex-col items-center rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-ignite hover:shadow-xl hover:shadow-ignite/10"
              >
                <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-lg bg-surface">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    width={768}
                    height={576}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-4 font-display text-lg font-black uppercase tracking-wide text-foreground transition-colors group-hover:text-ignite">
                  {cat.name}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN THE TEAM */}
      <section className="relative border-t border-border overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt=""
            className="h-full w-full object-cover"
            width={1920}
            height={1280}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center">
          <div className="rounded-2xl border border-white/20 bg-card/95 p-10 shadow-2xl backdrop-blur md:p-14">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-ignite" />
              <span className="font-display text-xs font-bold uppercase tracking-[0.4em] text-ignite">
                Careers
              </span>
              <span className="h-px w-10 bg-ignite" />
            </div>
            <h2 className="mt-4 font-display text-4xl font-black uppercase md:text-5xl">
              Join The <span className="text-ignite">Team</span>
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-ignite" />
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              We're always looking for passionate riders, technicians, and sales pros to grow
              with us across our six dealerships.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-ignite px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-ignite-foreground shadow-lg shadow-ignite/30 transition-transform hover:-translate-y-0.5"
            >
              <Users className="h-4 w-4" /> Apply Now <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

function DealerCard({ name, city, phone }: Location) {
  return (
    <article className="group relative rounded-lg border border-border bg-card/95 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-ignite hover:shadow-md hover:shadow-ignite/10">
      <div className="p-4">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted">
            <MapPin className="h-4 w-4 text-ignite" />
          </span>
          <h3 className="font-display text-base font-black uppercase leading-tight tracking-tight">
            {name}
          </h3>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 pl-12 text-sm">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-ignite" />
            <span className="font-medium">{city}</span>
          </div>
          <a
            href={`tel:${phone}`}
            className="flex items-center gap-1.5 font-semibold text-ignite hover:underline"
          >
            <Phone className="h-3.5 w-3.5" />
            {phone}
          </a>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <a
            href="#"
            className="flex items-center justify-center gap-1.5 rounded-md border border-ignite/40 px-2 py-2 font-display text-[11px] font-bold uppercase tracking-wider text-ignite transition-colors hover:bg-ignite/5"
          >
            Visit Site <Monitor className="h-3 w-3" />
          </a>
          <a
            href="#"
            className="flex items-center justify-center gap-1.5 rounded-md bg-ignite px-2 py-2 font-display text-[11px] font-bold uppercase tracking-wider text-ignite-foreground transition-transform hover:-translate-y-0.5"
          >
            <Tag className="h-3 w-3" /> Shop In-Stock
          </a>
        </div>
      </div>
    </article>
  );
}
