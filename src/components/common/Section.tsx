import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function Section({
  children,
  className,
  id,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "light" | "mist" | "navy";
}) {
  const toneClass =
    tone === "navy"
      ? "bg-navy-deep text-white"
      : tone === "mist"
      ? "bg-mist"
      : "bg-background";
  return (
    <section id={id} className={cn("py-20 md:py-28", toneClass, className)}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  return (
    <motion.div
      variants={stagger(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn(
        "mb-12 md:mb-16 max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow && (
        <motion.div
          variants={fadeUp}
          className={cn(
            "mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]",
            tone === "light" ? "text-gold" : "text-gold-ink",
          )}
        >
          <span className="h-px w-8 bg-current" />
          {eyebrow}
        </motion.div>
      )}
      <motion.h2
        variants={fadeUp}
        className={cn(
          "text-3xl md:text-5xl font-extrabold text-balance",
          tone === "light" ? "text-white" : "text-navy-deep",
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={cn(
            "mt-5 text-base md:text-lg leading-relaxed",
            tone === "light" ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
