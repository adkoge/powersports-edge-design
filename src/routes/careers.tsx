import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Heart, MapPin, Send, TrendingUp, Wrench } from "lucide-react";
import careersTeam from "@/assets/careers-team.jpg";

const openings = [
  {
    title: "Sales Consultant",
    dept: "Sales",
    location: "Greeley, CO",
    summary: "Help riders find their next adventure. Powersports passion required, experience preferred.",
  },
  {
    title: "Powersports Technician",
    dept: "Service",
    location: "Fort Collins, CO",
    summary: "MMI-trained or factory-certified techs to wrench on the best brands in the industry.",
  },
  {
    title: "Parts Advisor",
    dept: "Parts",
    location: "Lincoln, NE",
    summary: "Curate parts and accessories for customers building out their dream rides.",
  },
  {
    title: "Service Writer",
    dept: "Service",
    location: "Laramie, WY",
    summary: "First point of contact for service customers — communication and organization win here.",
  },
  {
    title: "Finance Manager",
    dept: "F&I",
    location: "Greeley, CO",
    summary: "Structure deals, present products, and help customers ride home today.",
  },
  {
    title: "Marketing Coordinator",
    dept: "Corporate",
    location: "Fort Collins, CO",
    summary: "Run the campaigns, events, and digital storytelling across all six dealerships.",
  },
];

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Elway Powersports" },
      {
        name: "description",
        content:
          "Join the Elway Powersports team. Sales, service, parts, and corporate roles across Colorado, Wyoming, and Nebraska.",
      },
      { property: "og:title", content: "Careers — Elway Powersports" },
      {
        property: "og:description",
        content: "Open positions across our six powersports dealerships.",
      },
      { property: "og:image", content: careersTeam },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={careersTeam}
            alt="Elway Powersports team"
            className="h-full w-full object-cover"
            width={1536}
            height={1024}
          />
          <div className="absolute inset-0 bg-foreground/55" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center text-white md:py-32">
          <span className="font-display text-xs font-bold uppercase tracking-[0.4em] text-ignite">
            Careers
          </span>
          <h1 className="mt-3 font-display text-5xl font-black uppercase md:text-6xl">
            Join The Team
          </h1>
          <div className="mx-auto mt-4 h-1 w-20 bg-ignite" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">
            We're always looking for passionate riders, technicians, and sales pros to grow with
            us across our six dealerships.
          </p>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center">
            <span className="font-display text-xs font-bold uppercase tracking-[0.4em] text-ignite">
              Why Elway
            </span>
            <h2 className="mt-3 font-display text-4xl font-black uppercase">Built To Grow</h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-ignite" />
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Perk
              icon={<TrendingUp className="h-6 w-6" />}
              title="Career Growth"
              copy="A six-dealership network means real paths upward — sales, service, management, corporate."
            />
            <Perk
              icon={<Wrench className="h-6 w-6" />}
              title="Best-In-Class Tools"
              copy="Modern shops, factory training, and the broadest brand portfolio in the region."
            />
            <Perk
              icon={<Heart className="h-6 w-6" />}
              title="Ride Culture"
              copy="Built by riders, for riders. Demo days, employee discounts, and a team that gets it."
            />
          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center">
            <span className="font-display text-xs font-bold uppercase tracking-[0.4em] text-ignite">
              Open Roles
            </span>
            <h2 className="mt-3 font-display text-4xl font-black uppercase">Now Hiring</h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-ignite" />
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {openings.map((j) => (
              <div
                key={j.title + j.location}
                className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-ignite hover:shadow-xl hover:shadow-ignite/10"
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ignite">
                  <Briefcase className="h-3.5 w-3.5" /> {j.dept}
                </div>
                <h3 className="mt-2 font-display text-2xl font-black uppercase leading-tight">
                  {j.title}
                </h3>
                <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-ignite" /> {j.location}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{j.summary}</p>
                <a
                  href="#apply"
                  className="mt-5 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-foreground transition-colors group-hover:text-ignite"
                >
                  Apply Now <Send className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY CTA */}
      <section id="apply" className="bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="font-display text-4xl font-black uppercase md:text-5xl">
            Don't See Your Role?
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-ignite" />
          <p className="mt-5 text-muted-foreground">
            We're always interested in talented people. Send your résumé and we'll keep you on
            file for the next opening that fits.
          </p>
          <a
            href="mailto:careers@elwaypowersports.com"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-ignite px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-ignite-foreground shadow-lg shadow-ignite/30 transition-transform hover:-translate-y-0.5"
          >
            <Send className="h-4 w-4" /> Email Your Résumé
          </a>
        </div>
      </section>
    </div>
  );
}

function Perk({
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
