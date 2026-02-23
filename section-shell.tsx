"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionShellProps {
  children: ReactNode;
  id?: string;
  label?: string;
  title?: string;
  className?: string;
}

export function SectionShell({
  children,
  id,
  label,
  title,
  className = ""
}: SectionShellProps) {
  return (
    <section id={id} className={`section-padding scroll-mt-20 ${className}`}>
      <div className="section-max">
        {(label || title) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 space-y-3"
          >
            {label && (
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                {label}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-50 sm:text-4xl md:text-5xl">
                {title}
              </h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
