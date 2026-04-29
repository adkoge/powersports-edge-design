import { Link } from "@tanstack/react-router";
import { Zap } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded bg-ignite text-ignite-foreground">
                <Zap className="h-4 w-4" strokeWidth={2.5} />
              </span>
              <span className="font-display font-bold uppercase tracking-wider text-foreground">
                Elway Powersports
              </span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Six dealerships across Colorado, Wyoming, and Nebraska.
            </p>
          </div>

          <FooterCol
            title="Shop"
            links={[
              { label: "All Inventory", to: "/inventory" },
              { label: "Off-Road", to: "/inventory", search: { type: "Off-Road" as const } },
              { label: "Motorcycles", to: "/inventory", search: { type: "Motorcycle" as const } },
              { label: "Watercraft", to: "/inventory", search: { type: "Watercraft" as const } },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { label: "Corporate", to: "/corporate" },
              { label: "Careers", to: "/careers" },
              { label: "Contact", to: "/contact" },
            ]}
          />
          <FooterCol
            title="Locations"
            links={[
              { label: "Greeley, CO", to: "/contact" },
              { label: "Fort Collins, CO", to: "/contact" },
              { label: "Lincoln, NE", to: "/contact" },
              { label: "Laramie, WY", to: "/contact" },
            ]}
          />
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Elway Powersports. All rights reserved.</p>
          <p className="text-xs uppercase tracking-[0.2em]">Built for riders.</p>
        </div>
      </div>
    </footer>
  );
}

type FooterLink = { label: string; to: string; search?: Record<string, string> };

function FooterCol({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-black uppercase tracking-wider text-foreground">
        {title}
      </h4>
      <ul className="mt-3 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              to={l.to}
              search={l.search as never}
              className="text-muted-foreground transition-colors hover:text-ignite"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
