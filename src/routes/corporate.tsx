import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Target, Users } from "lucide-react";
import corporateHero from "@/assets/corporate-hero.jpg";

export const Route = createFileRoute("/corporate")({
  head: () => ({
    meta: [
      { title: "Corporate — Elway Powersports" },
      {
        name: "description",
        content:
          "Learn about Elway Powersports — six dealerships across Colorado, Wyoming, and Nebraska united by a passion for the ride.",
      },
      { property: "og:title", content: "Corporate — Elway Powersports" },
      {
        property: "og:description",
        content: "The story behind Elway Powersports and the dealerships in our network.",
      },
      { property: "og:image", content: corporateHero },
    ],
  }),
  component: CorporatePage,
});

function CorporatePage() {
  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={corporateHero}
            alt="Elway Powersports dealership at sunset"
            className="h-full w-full object-cover"
            width={1536}
            height={1024}
          />
          <div className="absolute inset-0 bg-foreground/55" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center text-white md:py-32">
          <span className="font-display text-xs font-bold uppercase tracking-[0.4em] text-ignite">
            Our Story
          </span>
          <h1 className="mt-3 font-display text-5xl font-black uppercase md:text-6xl">
            Built For The Ride
          </h1>
          <div className="mx-auto mt-4 h-1 w-20 bg-ignite" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">
            Six dealerships. Three states. One mission — to set the bar for what a powersports
            dealership should look and feel like.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <span className="font-display text-xs font-bold uppercase tracking-[0.4em] text-ignite">
            Mission
          </span>
          <h2 className="mt-3 font-display text-4xl font-black uppercase md:text-5xl">
            More Than A Dealership
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-ignite" />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Started in 2021, Elway Powersports was founded with a simple mission: become a
              leader in the powersports industry by providing every customer a superior and
              authentic experience that exceeds expectations.
            </p>
            <p>
              From flagship brands like Harley-Davidson, Honda, Polaris, and Can-Am to industry
              icons like Indian, Sea-Doo, Ski-Doo, BMW, Triumph, and Yamaha — our network puts the
              best of powersports under one umbrella.
            </p>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center">
            <span className="font-display text-xs font-bold uppercase tracking-[0.4em] text-ignite">
              What We Stand For
            </span>
            <h2 className="mt-3 font-display text-4xl font-black uppercase">Our Values</h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-ignite" />
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Pillar
              icon={<Award className="h-6 w-6" />}
              title="Authentic Experience"
              copy="No pressure. No gimmicks. Just experts who ride what they sell and treat every customer like a neighbor."
            />
            <Pillar
              icon={<Target className="h-6 w-6" />}
              title="Industry Leadership"
              copy="A growing footprint, the broadest brand mix in the region, and a commitment to setting a higher bar."
            />
            <Pillar
              icon={<Users className="h-6 w-6" />}
              title="Community First"
              copy="Local dealerships rooted in the communities we serve, supporting riders, families, and clubs."
            />
          </div>
        </div>
      </section>

      {/* DEALERSHIPS LIST */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center">
            <span className="font-display text-xs font-bold uppercase tracking-[0.4em] text-ignite">
              Our Network
            </span>
            <h2 className="mt-3 font-display text-4xl font-black uppercase">Six Dealerships</h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-ignite" />
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "John Elway Harley-Davidson", city: "Greeley, CO" },
              { name: "Elway Powersports of Lincoln", city: "Lincoln, NE" },
              { name: "Interstate Honda", city: "Fort Collins, CO" },
              { name: "Northern Colorado Powersports", city: "Fort Collins, CO" },
              { name: "Wild West Motorsports", city: "Greeley, CO" },
              { name: "Elway Powersports of Laramie", city: "Laramie, WY" },
            ].map((d) => (
              <div
                key={d.name}
                className="rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-ignite"
              >
                <div className="h-1 w-12 bg-ignite" />
                <h3 className="mt-3 font-display text-lg font-black uppercase leading-tight">
                  {d.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{d.city}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/inventory"
              className="inline-flex items-center gap-2 rounded-md bg-ignite px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-ignite-foreground shadow-lg shadow-ignite/30 transition-transform hover:-translate-y-0.5"
            >
              Shop The Network <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Pillar({
  icon,
  title,
  copy,
}: {
  icon: React.ReactNode;
  title: string;
  copy: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-ignite/10 text-ignite">
        {icon}
      </div>
      <h3 className="mt-4 font-display text-xl font-black uppercase">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
    </div>
  );
}
