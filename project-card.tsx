"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Award {
  name: string;
  awards: string[];
  href: string;
}

interface ProjectCardProps {
  title: string;
  slug: string;
  description: string;
  images: string[];
  awards?: Award[];
  liveUrl?: string;
  behanceUrl?: string;
}

export function ProjectCard({
  title,
  slug,
  description,
  images,
  awards,
  liveUrl,
  behanceUrl
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div className="grid-border overflow-hidden rounded-2xl">
        {/* Image Gallery */}
        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
          <AnimatePresence mode="wait">
            <motion.div
              key={imageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={images[imageIndex]}
                alt={`${title} - Image ${imageIndex + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 1200px, 100vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Image Navigation Dots */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setImageIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === imageIndex
                      ? "w-8 bg-white"
                      : "w-1.5 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`View image ${i + 1}`}
                />
              ))}
            </div>
          )}

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="mb-2 text-2xl font-bold text-neutral-50">
                {title}
              </h3>
              <p className="text-sm text-neutral-400">{description}</p>
            </div>

            <div className="flex gap-2">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-neutral-950 transition hover:bg-neutral-100"
                >
                  Visit Live
                </a>
              )}
              {behanceUrl && (
                <a
                  href={behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-neutral-100 transition hover:border-white/40 hover:bg-white/5"
                >
                  Learn More
                </a>
              )}
            </div>
          </div>

          {/* Awards Section */}
          {awards && awards.length > 0 && (
            <div className="mt-6 border-t border-white/5 pt-6">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mb-4 flex w-full items-center justify-between text-sm font-semibold text-neutral-300 transition hover:text-neutral-50"
              >
                <span>Awards</span>
                <motion.span
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  className="text-lg"
                >
                  ↓
                </motion.span>
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-4">
                      {awards.map((award, i) => (
                        <div
                          key={i}
                          className="rounded-lg bg-white/5 p-4 text-xs"
                        >
                          <a
                            href={award.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mb-2 inline-block font-semibold text-neutral-50 hover:text-orange-500"
                          >
                            {award.name}
                          </a>
                          <ul className="space-y-1 text-neutral-400">
                            {award.awards.map((item, j) => (
                              <li key={j}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
