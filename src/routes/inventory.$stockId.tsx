import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronRight, MapPin, Phone, Tag, Calendar, Gauge, Palette, Building2 } from "lucide-react";
import { findListing, formatPrice } from "@/data/inventory";

export const Route = createFileRoute("/inventory/$stockId")({
  loader: ({ params }) => {
    const listing = findListing(params.stockId);
    if (!listing) throw notFound();
    return { listing };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          {
            title: `${loaderData.listing.year} ${loaderData.listing.make} ${loaderData.listing.model} — Elway Powersports`,
          },
          { name: "description", content: loaderData.listing.description },
          {
            property: "og:title",
            content: `${loaderData.listing.year} ${loaderData.listing.make} ${loaderData.listing.model}`,
          },
          { property: "og:description", content: loaderData.listing.description },
          { property: "og:image", content: loaderData.listing.image },
          { property: "twitter:image", content: loaderData.listing.image },
        ]
      : [{ title: "Vehicle — Elway Powersports" }],
  }),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-6 py-20 text-center">
      <h1 className="font-display text-4xl font-black uppercase">Something went wrong</h1>
      <p className="mt-3 text-muted-foreground">{error.message}</p>
    </div>
  ),
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-20 text-center">
      <h1 className="font-display text-5xl font-black uppercase">Vehicle not found</h1>
      <p className="mt-3 text-muted-foreground">
        That stock number isn't in our current inventory.
      </p>
      <Link
        to="/inventory"
        className="mt-6 inline-flex items-center rounded-md bg-ignite px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wider text-ignite-foreground"
      >
        Back to Inventory
      </Link>
    </div>
  ),
  component: VehicleDetailPage,
});

function VehicleDetailPage() {
  const { listing } = Route.useLoaderData();

  return (
    <div className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <Link to="/" className="hover:text-ignite">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/inventory" className="hover:text-ignite">Inventory</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{listing.stockId}</span>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* GALLERY */}
          <div>
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <div className="aspect-[4/3] bg-surface">
                <img
                  src={listing.image}
                  alt={`${listing.year} ${listing.make} ${listing.model}`}
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="aspect-[4/3] overflow-hidden rounded-md border border-border bg-card opacity-80"
                >
                  <img
                    src={listing.image}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                    width={256}
                    height={192}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* DETAILS */}
          <div className="space-y-5">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2 text-xs">
                <span
                  className={`rounded px-2 py-0.5 font-display font-bold uppercase tracking-wider ${
                    listing.condition === "New"
                      ? "bg-ignite/10 text-ignite"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {listing.condition}
                </span>
                <span className="text-muted-foreground">{listing.type}</span>
              </div>
              <h1 className="mt-2 font-display text-3xl font-black uppercase leading-tight md:text-4xl">
                {listing.year} {listing.make} {listing.model}
              </h1>
              {listing.trim && (
                <p className="mt-1 font-display text-lg font-bold uppercase tracking-wide text-muted-foreground">
                  {listing.trim}
                </p>
              )}

              <div className="mt-5 flex items-baseline justify-between border-y border-border py-4">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Price
                </span>
                <span className="font-display text-3xl font-black text-ignite">
                  {formatPrice(listing.price)}
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 rounded-md bg-ignite px-4 py-3 font-display text-sm font-bold uppercase tracking-wider text-ignite-foreground transition-transform hover:-translate-y-0.5"
                >
                  <Tag className="h-4 w-4" /> Get e-Price
                </a>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 rounded-md border border-border bg-surface-elevated px-4 py-3 font-display text-sm font-bold uppercase tracking-wider text-foreground transition-colors hover:border-ignite hover:text-ignite"
                >
                  <Phone className="h-4 w-4" /> Contact
                </Link>
              </div>
            </div>

            {/* SPECS */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h2 className="font-display text-sm font-black uppercase tracking-wider text-muted-foreground">
                Specifications
              </h2>
              <dl className="mt-4 space-y-3 text-sm">
                <SpecRow icon={<Tag className="h-4 w-4" />} label="Stock #" value={listing.stockId} />
                <SpecRow icon={<Calendar className="h-4 w-4" />} label="Year" value={String(listing.year)} />
                <SpecRow icon={<Gauge className="h-4 w-4" />} label="Mileage" value={`${listing.mileage.toLocaleString()} mi`} />
                <SpecRow icon={<Palette className="h-4 w-4" />} label="Color" value={listing.color} />
                <SpecRow
                  icon={<Building2 className="h-4 w-4" />}
                  label="Dealership"
                  value={listing.dealership}
                />
                <SpecRow icon={<MapPin className="h-4 w-4" />} label="Location" value={listing.city} />
              </dl>
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-10 rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
          <h2 className="font-display text-2xl font-black uppercase">Overview</h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-ignite" />
          <p className="mt-5 leading-relaxed text-muted-foreground">{listing.description}</p>
          <p className="mt-3 text-sm text-muted-foreground">
            Available at {listing.dealership} in {listing.city}. Inventory and pricing subject to
            change. Contact the dealership for current availability and out-the-door pricing.
          </p>
        </div>
      </div>
    </div>
  );
}

function SpecRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-border pb-3 last:border-0 last:pb-0">
      <span className="flex items-center gap-2 text-muted-foreground">
        <span className="text-ignite">{icon}</span>
        {label}
      </span>
      <span className="text-right font-medium text-foreground">{value}</span>
    </div>
  );
}
