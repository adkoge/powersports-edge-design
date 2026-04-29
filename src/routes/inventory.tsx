import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { useMemo } from "react";
import { ChevronRight, Filter, MapPin, Search, X } from "lucide-react";
import {
  inventory,
  formatPrice,
  MAKES,
  VEHICLE_TYPES,
  DEALERSHIPS,
  type VehicleType,
} from "@/data/inventory";

const inventorySearchSchema = z.object({
  q: fallback(z.string(), "").default(""),
  condition: fallback(z.enum(["All", "New", "Used"]), "All").default("All"),
  type: fallback(z.string(), "All").default("All"),
  make: fallback(z.string(), "All").default("All"),
  dealership: fallback(z.string(), "All").default("All"),
  sort: fallback(z.enum(["newest", "price-asc", "price-desc"]), "newest").default("newest"),
});

export const Route = createFileRoute("/inventory")({
  validateSearch: zodValidator(inventorySearchSchema),
  head: () => ({
    meta: [
      { title: "Inventory — Elway Powersports" },
      {
        name: "description",
        content:
          "Shop new and used powersports inventory across all six Elway Powersports dealerships. Filter by type, brand, location, and price.",
      },
      { property: "og:title", content: "Inventory — Elway Powersports" },
      {
        property: "og:description",
        content: "All in-stock powersports inventory across the Elway Powersports network.",
      },
    ],
  }),
  component: InventoryPage,
});

function InventoryPage() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/inventory" });

  const update = (patch: Partial<typeof search>) => {
    navigate({ search: (prev) => ({ ...prev, ...patch }) });
  };

  const reset = () => {
    navigate({
      search: {
        q: "",
        condition: "All",
        type: "All",
        make: "All",
        dealership: "All",
        sort: "newest",
      },
    });
  };

  const filtered = useMemo(() => {
    const q = search.q.trim().toLowerCase();
    let list = inventory.filter((v) => {
      if (search.condition !== "All" && v.condition !== search.condition) return false;
      if (search.type !== "All" && v.type !== (search.type as VehicleType)) return false;
      if (search.make !== "All" && v.make !== search.make) return false;
      if (search.dealership !== "All" && v.dealership !== search.dealership) return false;
      if (q) {
        const hay = `${v.year} ${v.make} ${v.model} ${v.trim ?? ""} ${v.color}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
    if (search.sort === "price-asc") {
      list = [...list].sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
    } else if (search.sort === "price-desc") {
      list = [...list].sort((a, b) => (b.price ?? -Infinity) - (a.price ?? -Infinity));
    } else {
      list = [...list].sort((a, b) => b.year - a.year);
    }
    return list;
  }, [search]);

  const activeFilters = [
    search.condition !== "All" && { key: "condition", label: search.condition },
    search.type !== "All" && { key: "type", label: search.type },
    search.make !== "All" && { key: "make", label: search.make },
    search.dealership !== "All" && { key: "dealership", label: search.dealership },
    search.q && { key: "q", label: `"${search.q}"` },
  ].filter(Boolean) as { key: string; label: string }[];

  return (
    <div className="bg-surface">
      {/* Title strip */}
      <div className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <Link to="/" className="hover:text-ignite">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">Inventory</span>
          </div>
          <h1 className="mt-3 font-display text-4xl font-black uppercase md:text-5xl">
            All Inventory <span className="text-ignite">In-Stock</span>
          </h1>
          <p className="mt-2 text-muted-foreground">
            {filtered.length} of {inventory.length} vehicles match your filters
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* SIDEBAR FILTERS */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-ignite" />
                  <h2 className="font-display text-sm font-black uppercase tracking-wider">
                    Filters
                  </h2>
                </div>
                {activeFilters.length > 0 && (
                  <button
                    onClick={reset}
                    className="text-xs font-bold uppercase text-muted-foreground hover:text-ignite"
                  >
                    Reset
                  </button>
                )}
              </div>

              {/* Search */}
              <div className="mt-5">
                <Label>Search</Label>
                <div className="mt-1.5 flex items-center gap-2 rounded-md border border-border bg-background px-2.5 focus-within:border-ignite">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <input
                    value={search.q}
                    onChange={(e) => update({ q: e.target.value })}
                    placeholder="Year, make, model…"
                    className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              <Divider />

              <FilterGroup
                label="Condition"
                value={search.condition}
                options={["All", "New", "Used"]}
                onChange={(v) => update({ condition: v as typeof search.condition })}
              />

              <Divider />

              <FilterGroup
                label="Type"
                value={search.type}
                options={["All", ...VEHICLE_TYPES]}
                onChange={(v) => update({ type: v })}
              />

              <Divider />

              <SelectFilter
                label="Make"
                value={search.make}
                options={["All", ...MAKES]}
                onChange={(v) => update({ make: v })}
              />

              <Divider />

              <SelectFilter
                label="Dealership"
                value={search.dealership}
                options={["All", ...DEALERSHIPS]}
                onChange={(v) => update({ dealership: v })}
              />
            </div>
          </aside>

          {/* RESULTS */}
          <div>
            {/* Sort + active chips */}
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border bg-card p-3">
              <div className="flex flex-wrap items-center gap-2">
                {activeFilters.length === 0 ? (
                  <span className="text-sm text-muted-foreground">No filters applied</span>
                ) : (
                  activeFilters.map((f) => (
                    <button
                      key={f.key}
                      onClick={() =>
                        update({ [f.key]: f.key === "q" ? "" : "All" } as Partial<typeof search>)
                      }
                      className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-3 py-1 text-xs font-bold uppercase tracking-wider text-foreground transition-colors hover:border-ignite hover:text-ignite"
                    >
                      {f.label} <X className="h-3 w-3" />
                    </button>
                  ))
                )}
              </div>
              <label className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground">Sort by</span>
                <select
                  value={search.sort}
                  onChange={(e) => update({ sort: e.target.value as typeof search.sort })}
                  className="rounded-md border border-border bg-background px-2 py-1.5 text-sm font-medium outline-none focus:border-ignite"
                >
                  <option value="newest">Newest Year</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </label>
            </div>

            {filtered.length === 0 ? (
              <div className="rounded-xl border border-dashed border-border bg-card p-12 text-center">
                <h3 className="font-display text-2xl font-black uppercase">
                  No vehicles match your filters
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Try clearing filters or expanding your search.
                </p>
                <button
                  onClick={reset}
                  className="mt-5 inline-flex items-center rounded-md bg-ignite px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wider text-ignite-foreground"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2">
                {filtered.map((v) => (
                  <Link
                    key={v.stockId}
                    to="/inventory/$stockId"
                    params={{ stockId: v.stockId }}
                    className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-ignite hover:shadow-xl hover:shadow-ignite/10"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-surface">
                      <img
                        src={v.image}
                        alt={`${v.year} ${v.make} ${v.model}`}
                        loading="lazy"
                        width={1024}
                        height={768}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex items-center gap-2 text-xs">
                        <span
                          className={`rounded px-2 py-0.5 font-display font-bold uppercase tracking-wider ${
                            v.condition === "New"
                              ? "bg-ignite/10 text-ignite"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {v.condition}
                        </span>
                        <span className="text-muted-foreground">{v.type}</span>
                      </div>
                      <h3 className="mt-2 font-display text-lg font-black uppercase leading-tight">
                        {v.year} {v.make} {v.model}
                      </h3>
                      {v.trim && (
                        <p className="text-sm font-medium text-muted-foreground">{v.trim}</p>
                      )}
                      <dl className="mt-3 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                        <div>
                          <dt className="uppercase tracking-wider">Stock</dt>
                          <dd className="font-mono text-foreground">{v.stockId}</dd>
                        </div>
                        <div>
                          <dt className="uppercase tracking-wider">Color</dt>
                          <dd className="text-foreground">{v.color}</dd>
                        </div>
                        {v.condition === "Used" && (
                          <div>
                            <dt className="uppercase tracking-wider">Mileage</dt>
                            <dd className="text-foreground">{v.mileage.toLocaleString()} mi</dd>
                          </div>
                        )}
                        <div className="col-span-2 flex items-center gap-1.5">
                          <MapPin className="h-3 w-3 text-ignite" />
                          <span>{v.city}</span>
                        </div>
                      </dl>
                      <div className="mt-auto flex items-center justify-between pt-4">
                        <span className="font-display text-xl font-black text-ignite">
                          {formatPrice(v.price)}
                        </span>
                        <span className="font-display text-xs font-bold uppercase tracking-wider text-foreground transition-colors group-hover:text-ignite">
                          View Details →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
      {children}
    </span>
  );
}

function Divider() {
  return <div className="my-5 h-px bg-border" />;
}

function FilterGroup({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {options.map((opt) => {
          const active = value === opt;
          return (
            <button
              key={opt}
              onClick={() => onChange(opt)}
              className={`rounded-md border px-2.5 py-1 text-xs font-bold uppercase tracking-wider transition-colors ${
                active
                  ? "border-ignite bg-ignite text-ignite-foreground"
                  : "border-border bg-background text-foreground hover:border-ignite hover:text-ignite"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function SelectFilter({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: readonly string[] | string[];
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-md border border-border bg-background px-2.5 py-2 text-sm outline-none focus:border-ignite"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
