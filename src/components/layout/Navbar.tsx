import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  to: string;
  dropdown?: { label: string; to: string; desc?: string }[];
};

const NAV: NavItem[] = [
  
  {
    label: "Home",
    to: "/",
    
  },
  {
    label: "Services",
    to: "/services",
    dropdown: [
      { label: "Tax Consulting", to: "/services/tax-consulting", desc: "Proactive planning & compliance" },
      { label: "Accounting", to: "/services/accounting", desc: "Accurate monthly closes" },
      { label: "Bookkeeping", to: "/services/bookkeeping", desc: "Clean books, modern tooling" },
      { label: "Payroll", to: "/services/payroll", desc: "Multi-state, fully compliant" },
      { label: "Virtual CFO", to: "/services/virtual-cfo", desc: "Fractional finance leadership" },
      { label: "Business Advisory", to: "/services/business-advisory", desc: "Guidance from operators" },
      { label: "Financial Reporting", to: "/services/financial-reporting", desc: "Board-ready reporting" },
      { label: "Startup Consulting", to: "/services/startup-consulting", desc: "Incorporation to Series B" },
    ],
  },
  
  {
    label: "About",
    to: "/about",   
  },
  {
    label: "Blog",
    to: "/blog",
  },
  { label: "Careers", to: "/careers" },
  { label: "Contact Us", to: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on outside click / Escape
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const openDropdown = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const isActive = (to: string) => pathname === to || (to !== "/" && pathname.startsWith(to));

  return (
    <header
      ref={navRef}
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-navy-deep/85 backdrop-blur-xl border-b border-white/10 shadow-[0_1px_20px_-10px_rgba(0,0,0,0.5)]"
          : "bg-navy-deep",
      )}
    >
      <div className="container-page flex h-20 items-center gap-4 xl:gap-6">
        <Link to="/" className="flex items-center gap-2.5 shrink-0" aria-label={site.name}>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gold text-navy-deep font-display font-extrabold">
            S
          </span>
          <span className="hidden sm:block font-display font-extrabold text-lg tracking-tight text-white whitespace-nowrap">
            Shamsuddin<span className="text-gold">.</span>
          </span>
        </Link>

        <nav className="hidden xl:flex flex-1 items-center justify-center gap-0.5 min-w-0" aria-label="Primary">
          {NAV.map((item) => {
            const active = isActive(item.to);
            const hasDropdown = !!item.dropdown?.length;
            const isOpen = activeDropdown === item.label;

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => hasDropdown && openDropdown(item.label)}
                onMouseLeave={() => hasDropdown && scheduleClose()}
              >
                <Link
                  to={item.to}
                  aria-haspopup={hasDropdown ? "menu" : undefined}
                  aria-expanded={hasDropdown ? isOpen : undefined}
                  onFocus={() => hasDropdown && openDropdown(item.label)}
                  className={cn(
                    "group relative inline-flex items-center gap-1 px-3 py-2 text-[0.9rem] font-medium rounded-md transition-colors whitespace-nowrap",
                    active ? "text-white" : "text-white/75 hover:text-white",
                  )}
                >
                  <span className="relative">
                    {item.label}
                    <span
                      className={cn(
                        "pointer-events-none absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300",
                        active ? "w-full" : "w-0 group-hover:w-full",
                      )}
                    />
                  </span>
                  {hasDropdown && (
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        isOpen && "rotate-180",
                      )}
                    />
                  )}
                </Link>

                {hasDropdown && (
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                        role="menu"
                        className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
                        onMouseEnter={() => openDropdown(item.label)}
                        onMouseLeave={scheduleClose}
                      >
                        <div className="min-w-[280px] rounded-2xl border border-white/10 bg-white text-navy-deep shadow-[0_20px_60px_-15px_rgba(0,0,0,0.35)] p-2 overflow-hidden">
                          {item.dropdown!.map((d) => (
                            <Link
                              key={d.label}
                              to={d.to}
                              role="menuitem"
                              className="group/item flex items-start gap-3 rounded-xl px-3.5 py-2.5 transition-colors hover:bg-navy-deep/5 focus:bg-navy-deep/5 focus:outline-none"
                            >
                              <div className="flex-1">
                                <div className="text-sm font-semibold text-navy-deep">
                                  {d.label}
                                </div>
                                {d.desc && (
                                  <div className="text-xs text-navy-deep/60 mt-0.5">
                                    {d.desc}
                                  </div>
                                )}
                              </div>
                              <ArrowRight className="h-4 w-4 mt-0.5 text-gold opacity-0 -translate-x-1 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-x-0" />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 xl:gap-3 ml-auto shrink-0">
          
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center justify-center gap-2 h-11 rounded-full bg-gold px-5 text-sm font-semibold text-navy-deep shadow-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.02] whitespace-nowrap shrink-0"
          >
            Free Consultation
            <ArrowRight className="h-4 w-4 shrink-0" />
          </Link>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="xl:hidden grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/20 text-white"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 24 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ width: "100vw", height: "100dvh" }}
            className="fixed inset-0 z-[9999] bg-navy-deep text-white xl:hidden overflow-y-auto overscroll-contain"
          >
            <div className="sticky top-0 z-10 bg-navy-deep container-page flex h-20 items-center justify-between">
              <span className="font-display font-extrabold text-lg">
                Shamsuddin<span className="text-gold">.</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/15"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <motion.nav
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.04 } } }}
              className="container-page mt-4 flex flex-col gap-1 pb-10"
            >
              {NAV.map((item) => {
                const expanded = mobileExpanded === item.label;
                const hasDropdown = !!item.dropdown?.length;
                return (
                  <motion.div
                    key={item.label}
                    variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}
                    className="border-b border-white/10"
                  >
                    <div className="flex items-center justify-between">
                      <Link
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className="flex-1 py-4 text-xl font-display font-bold"
                      >
                        {item.label}
                      </Link>
                      {hasDropdown && (
                        <button
                          onClick={() => setMobileExpanded(expanded ? null : item.label)}
                          aria-label={`Toggle ${item.label} menu`}
                          className="grid h-10 w-10 place-items-center"
                        >
                          <ChevronDown
                            className={cn(
                              "h-5 w-5 transition-transform duration-200",
                              expanded && "rotate-180",
                            )}
                          />
                        </button>
                      )}
                    </div>
                    <AnimatePresence initial={false}>
                      {hasDropdown && expanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.24 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-4 pl-2 flex flex-col">
                            {item.dropdown!.map((d) => (
                              <Link
                                key={d.label}
                                to={d.to}
                                onClick={() => setOpen(false)}
                                className="py-2.5 text-base text-white/75 hover:text-white"
                              >
                                {d.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3.5 text-sm font-semibold text-navy-deep"
              >
                Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
