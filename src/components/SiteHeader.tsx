import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Search, Zap } from "lucide-react";

const navItems = [
  { label: "Home", to: "/" as const },
  { label: "Inventory", to: "/inventory" as const },
  { label: "Corporate", to: "/corporate" as const },
  { label: "Careers", to: "/careers" as const },
  { label: "Contact", to: "/contact" as const },
];

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-ignite text-ignite-foreground">
            <Zap className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-black uppercase tracking-wider">
            Elway Powersports
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active =
              item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.label}
                to={item.to}
                className={`flex items-center gap-1 rounded-md px-4 py-2 font-display text-sm font-bold uppercase tracking-wider transition-colors hover:bg-surface hover:text-ignite ${
                  active ? "text-ignite" : "text-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          to="/inventory"
          className="hidden items-center gap-2 rounded-md border border-border bg-surface pl-3 pr-1 py-1 transition-colors hover:border-ignite md:flex"
        >
          <Search className="h-4 w-4 text-muted-foreground" />
          <span className="w-44 py-1.5 text-sm text-muted-foreground">
            Inventory Search
          </span>
          <span
            aria-hidden
            className="flex h-7 w-7 items-center justify-center rounded bg-ignite text-ignite-foreground"
          >
            <Search className="h-3.5 w-3.5" strokeWidth={2.5} />
          </span>
        </Link>

        {/* Mobile menu trigger placeholder */}
        <button
          className="flex items-center gap-1 rounded-md border border-border px-3 py-2 font-display text-sm font-bold uppercase md:hidden"
          aria-label="Open menu"
        >
          Menu <ChevronDown className="h-3.5 w-3.5" />
        </button>
      </div>
    </header>
  );
}
