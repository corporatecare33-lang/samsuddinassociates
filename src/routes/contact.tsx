import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Shamsuddin & Company" },
      { name: "description", content: "Book a free consultation with our finance and accounting team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="bg-mist">
        <div className="container-page py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink">
                <span className="h-px w-8 bg-current" /> Contact
              </div>
              <h1 className="font-display text-4xl font-extrabold text-navy-deep md:text-6xl text-balance">
                Let's build your finance advantage.
              </h1>
              <p className="mt-5 max-w-lg text-lg text-muted-foreground">
                Tell us a little about your business and we'll follow up within one business day.
              </p>
              <ul className="mt-10 space-y-4 text-sm">
                <li className="flex items-center gap-3 text-ink"><Mail className="h-4 w-4 text-gold-ink" /> hello@shamsuddin.example</li>
                <li className="flex items-center gap-3 text-ink"><Phone className="h-4 w-4 text-gold-ink" /> +1 (555) 010-2200</li>
                <li className="flex items-center gap-3 text-ink"><MapPin className="h-4 w-4 text-gold-ink" /> New York · Remote-first</li>
              </ul>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-3xl border border-border bg-white p-8 shadow-[0_20px_60px_-30px_rgba(11,31,58,0.25)] md:p-10"
            >
              <div className="grid gap-5">
                {[
                  { label: "Full name", type: "text", placeholder: "Jane Doe" },
                  { label: "Work email", type: "email", placeholder: "jane@company.com" },
                  { label: "Company", type: "text", placeholder: "Company, Inc." },
                ].map((f) => (
                  <label key={f.label} className="block">
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-navy-deep">{f.label}</span>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      className="mt-2 block w-full rounded-xl border border-border bg-mist px-4 py-3 text-sm text-ink placeholder:text-muted-foreground focus:border-navy-deep focus:outline-none focus:ring-2 focus:ring-gold/40"
                    />
                  </label>
                ))}
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-navy-deep">How can we help?</span>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your team, revenue, and what you need help with."
                    className="mt-2 block w-full rounded-xl border border-border bg-mist px-4 py-3 text-sm text-ink placeholder:text-muted-foreground focus:border-navy-deep focus:outline-none focus:ring-2 focus:ring-gold/40"
                  />
                </label>
                <button
                  type="submit"
                  className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-navy-deep px-7 py-3.5 text-sm font-semibold text-white hover:bg-navy transition"
                >
                  Book my consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
