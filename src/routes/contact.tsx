import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const locations = [
  { name: "John Elway Harley-Davidson", city: "Greeley, CO", phone: "970-753-0224" },
  { name: "Elway Powersports of Lincoln", city: "Lincoln, NE", phone: "402-235-6697" },
  { name: "Interstate Honda", city: "Fort Collins, CO", phone: "970-717-1148" },
  { name: "Northern Colorado Powersports", city: "Fort Collins, CO", phone: "970-679-1600" },
  { name: "Wild West Motorsports", city: "Greeley, CO", phone: "970-753-0223" },
  { name: "Elway Powersports of Laramie", city: "Laramie, WY", phone: "307-400-3537" },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Elway Powersports" },
      {
        name: "description",
        content:
          "Get in touch with Elway Powersports. Six dealerships across Colorado, Wyoming, and Nebraska ready to help.",
      },
      { property: "og:title", content: "Contact — Elway Powersports" },
      {
        property: "og:description",
        content: "Reach out to any of our six powersports dealerships.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <span className="font-display text-xs font-bold uppercase tracking-[0.4em] text-ignite">
            Get In Touch
          </span>
          <h1 className="mt-3 font-display text-5xl font-black uppercase md:text-6xl">
            Contact <span className="text-ignite">Us</span>
          </h1>
          <div className="mx-auto mt-4 h-1 w-20 bg-ignite" />
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Have a question about inventory, service, or financing? Reach out to your local
            dealership or send us a message.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          {/* CONTACT FORM */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8"
          >
            <h2 className="font-display text-2xl font-black uppercase">Send a Message</h2>
            <div className="mt-1 h-1 w-12 bg-ignite" />
            <div className="mt-6 grid gap-4">
              <Field label="Full Name">
                <input
                  required
                  type="text"
                  className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-ignite"
                />
              </Field>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Email">
                  <input
                    required
                    type="email"
                    className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-ignite"
                  />
                </Field>
                <Field label="Phone">
                  <input
                    type="tel"
                    className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-ignite"
                  />
                </Field>
              </div>
              <Field label="Dealership">
                <select className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-ignite">
                  <option>Any / Not sure</option>
                  {locations.map((l) => (
                    <option key={l.name}>{l.name}</option>
                  ))}
                </select>
              </Field>
              <Field label="Message">
                <textarea
                  required
                  rows={5}
                  className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-ignite"
                />
              </Field>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-ignite px-5 py-3 font-display text-sm font-bold uppercase tracking-wider text-ignite-foreground shadow-lg shadow-ignite/30 transition-transform hover:-translate-y-0.5"
              >
                <Send className="h-4 w-4" /> Send Message
              </button>
            </div>
          </form>

          {/* DEALERSHIP CONTACTS */}
          <div>
            <h2 className="font-display text-2xl font-black uppercase">Dealerships</h2>
            <div className="mt-1 h-1 w-12 bg-ignite" />
            <div className="mt-6 space-y-3">
              {locations.map((l) => (
                <div
                  key={l.name}
                  className="rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-ignite"
                >
                  <h3 className="font-display text-lg font-black uppercase leading-tight">
                    {l.name}
                  </h3>
                  <div className="mt-3 grid gap-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 text-ignite" />
                      {l.city}
                    </div>
                    <a
                      href={`tel:${l.phone}`}
                      className="flex items-center gap-2 font-display font-bold tracking-wide text-foreground hover:text-ignite"
                    >
                      <Phone className="h-4 w-4 text-ignite" />
                      {l.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-ignite" />
                <h3 className="font-display text-sm font-black uppercase tracking-wider">
                  Corporate Office
                </h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                For wholesale, partnerships, or general corporate inquiries, use the form to the
                left and select "Any / Not sure" — we'll route your message to the right team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
