import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { site } from "@/data/site";

export function AnnouncementBar() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="bg-navy-deep text-white/90 text-sm">
      <div className="container-page flex items-center justify-center gap-3 py-2.5 relative">
        <span className="hidden sm:inline-block h-1.5 w-1.5 rounded-full bg-gold" />
        <p className="text-center">
          {site.announcement}{" "}
          <a href="/contact" className="ml-1 inline-flex items-center gap-1 font-semibold text-gold hover:underline underline-offset-4">
            Learn more <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </p>
        <button
          onClick={() => setOpen(false)}
          aria-label="Dismiss announcement"
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded p-1 text-white/60 hover:text-white transition"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
