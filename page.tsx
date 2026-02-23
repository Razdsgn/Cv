"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { SectionShell } from "@/components/section-shell";
import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    slug: "dopegood",
    title: "Dopegood",
    description:
      "Brand Identity, logo design, E-commerce website & mobile UI/UX, and custom web 3D design for a modern furniture brand.",
    images: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=80"
    ],
    liveUrl: "https://dopegood.com",
    behanceUrl: "https://www.behance.net/gallery/164138733/Dopegood",
    awards: [
      {
        name: "Awwwards",
        awards: ["Site Of The Day", "The Developer Award", "Honorable Mention"],
        href: "https://www.awwwards.com/sites/dopegood"
      },
      {
        name: "CSS Design Awards",
        awards: [
          "Special Kudos Award",
          "UI Design Award",
          "UX Design Award",
          "Innovation Award"
        ],
        href: "https://www.cssdesignawards.com/sites/dopegood/42632/"
      }
    ]
  },
  {
    slug: "am-arc",
    title: "AM-ARC",
    description:
      "Brand Identity, logo design, website & mobile UI/UX with custom 3D visualizations for an architectural studio.",
    images: [
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80"
    ],
    liveUrl: "https://am-arc.com",
    behanceUrl: "https://www.behance.net/gallery/149464731/AM-ARC",
    awards: [
      {
        name: "CSS Design Awards",
        awards: ["UI Design Award", "UX Design Award", "Innovation Award"],
        href: "https://www.cssdesignawards.com/sites/am-arc/42739/"
      },
      {
        name: "Awwwards",
        awards: ["Honorable Mention"],
        href: "https://www.awwwards.com/sites/am-arc"
      }
    ]
  },
  {
    slug: "vimcosmo",
    title: "Vimcosmo",
    description:
      "E-commerce website & mobile app UI/UX and art direction for a modern beauty and cosmetics brand.",
    images: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1600&q=80"
    ],
    liveUrl: "https://vimcosmo.com",
    behanceUrl:
      "https://www.behance.net/gallery/150352223/Vimcosmo-UIUX-Design-Website-Development"
  },
  {
    slug: "dopop",
    title: "Dopop",
    description:
      "Brand Identity, logo design, website & mobile UI/UX, and art direction for an NFT digital marketplace.",
    images: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1600&q=80"
    ],
    liveUrl: "https://dopop.net",
    behanceUrl:
      "https://www.behance.net/gallery/150664475/Dopop-UIUX-Design-Website-Development"
  },
  {
    slug: "deveb",
    title: "Deveb Digital Agency",
    description:
      "Brand Identity, logo design, website & mobile UI/UX, and full digital visual system for a creative agency.",
    images: [
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80"
    ],
    liveUrl: "https://deveb.co",
    behanceUrl:
      "https://www.behance.net/gallery/152966437/Deveb-Creative-Digital-Agency",
    awards: [
      {
        name: "CSS Design Awards",
        awards: [
          "Website of the day Award",
          "Special Kudos Award",
          "UI Design Award",
          "UX Design Award",
          "Innovation Award"
        ],
        href: "https://www.cssdesignawards.com/sites/deveb/42244/"
      },
      {
        name: "Awwwards",
        awards: ["Honorable Mention"],
        href: "https://www.awwwards.com/sites/deveb"
      }
    ]
  },
  {
    slug: "advertising",
    title: "Deveb Advertising Video",
    description:
      "Graphic and motion design for a cinematic 30-second YouTube advertising and showreel video.",
    images: [
      "https://images.unsplash.com/photo-1516031190212-da133013de50?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1600&q=80"
    ],
    behanceUrl:
      "https://www.behance.net/gallery/164436535/Deveb-Advertising-Showreel-Video"
  }
];

export default function HomePage() {
  const { scrollYProgress } = useScroll();

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const orbOneY = useTransform(scrollYProgress, [0, 0.5], [0, -150]);
  const orbTwoY = useTransform(scrollYProgress, [0, 0.5], [0, -200]);

  return (
    <div className="relative">
      <Navbar />

      {/* Animated Background Gradients */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          style={{ y: orbOneY }}
          className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl"
        />
        <motion.div
          style={{ y: orbTwoY }}
          className="absolute right-0 top-96 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl"
        />
      </div>

      <main className="space-y-32 pb-24 pt-32 sm:pt-40">
        {/* Hero Section */}
        <section className="section-padding">
          <motion.div
            style={{ y: heroY }}
            className="section-max"
          >
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              {/* Left: Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                {/* Role Tags */}
                <div className="flex flex-wrap gap-2 text-xs font-medium text-neutral-400">
                  {[
                    "Creative Art Director",
                    "Creative Designer",
                    "Visual Designer",
                    "UI/UX Designer"
                  ].map((role, i) => (
                    <motion.span
                      key={role}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                      className="rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10"
                    >
                      {role}
                    </motion.span>
                  ))}
                </div>

                <h1 className="text-5xl font-bold tracking-tight text-neutral-50 sm:text-6xl md:text-7xl lg:text-8xl">
                  AMIR
                  <br />
                  MOHSENI
                </h1>

                <div className="space-y-4">
                  <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-neutral-300 ring-1 ring-white/10">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    Based in Canada
                  </p>

                  <p className="max-w-xl text-base leading-relaxed text-neutral-300 md:text-lg">
                    Winner of the world's most prestigious web design awards in
                    the fields of UI, UX, and innovation. With a diverse
                    background in art direction, design leadership, website and
                    app UI/UX design, 3D design, and branding, I bring a
                    well-rounded skill set to every project I take on.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <motion.a
                    href="#Work"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 shadow-lg transition hover:bg-neutral-100"
                  >
                    View Selected Work
                    <span className="text-lg">→</span>
                  </motion.a>
                  <motion.a
                    href="https://drive.google.com/file/d/1pdp1xzQEqgqYi-a2xYyTRB_8pb75mHsV/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-neutral-100 transition hover:border-white/40 hover:bg-white/5"
                  >
                    View CV
                    <span className="text-lg">↗</span>
                  </motion.a>
                </div>
              </motion.div>

              {/* Right: Images Grid */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="grid-border relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                    alt="Amir Mohseni"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 300px, 50vw"
                    priority
                  />
                </div>
                <div className="space-y-4">
                  <div className="grid-border relative aspect-square overflow-hidden rounded-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                      alt="Creative workspace"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 300px, 50vw"
                    />
                  </div>
                  <div className="grid-border relative aspect-square overflow-hidden rounded-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
                      alt="Design tools"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 300px, 50vw"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <SectionShell id="About" label="About" title="Experience">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid-border space-y-4 rounded-2xl p-6 md:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
                2020 - Present
              </p>
              <h3 className="text-2xl font-bold text-neutral-50">
                Creative Art Director
              </h3>
              <p className="text-neutral-400">Deveb Digital Agency</p>
              <p className="text-sm leading-relaxed text-neutral-300">
                As the sole creative art director and designer at Deveb for +3
                years, I have designed and developed all the visual assets,
                including website and mobile UI/UX designs, web animations
                mockups, and brandings. My skills led to Deveb winning +27
                international design awards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid-border space-y-4 rounded-2xl p-6 md:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
                2018 - 2020
              </p>
              <h3 className="text-2xl font-bold text-neutral-50">
                Freelance Designer
              </h3>
              <p className="text-neutral-400">Upwork</p>
              <p className="text-sm leading-relaxed text-neutral-300">
                Maintained 100% job success rate on Upwork, delivering
                exceptional designs and solutions for 40+ projects. Developed
                highly effective brand identities and strategies for startups
                and small businesses based on market research and client
                feedback.
              </p>
            </motion.div>
          </div>
        </SectionShell>

        {/* Work Section */}
        <SectionShell id="Work" label="Selected Work" title="Portfolio">
          <div className="space-y-12">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </SectionShell>

        {/* Awards Section */}
        <SectionShell id="Award" label="Recognition" title="Honors & Awards">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Awwwards - Site of the Day",
                project: "Dopegood.com",
                image:
                  "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Awwwards - Developer Award",
                project: "Dopegood.com",
                image:
                  "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "CSS Design Awards - WOTD",
                project: "Deveb.co",
                image:
                  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "CSS Design Awards - UI Design",
                project: "Deveb.co",
                image:
                  "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Awwwards - Honorable Mention",
                project: "AM-ARC.com",
                image:
                  "https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "CSS Design Awards - Innovation",
                project: "Multiple Projects",
                image:
                  "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=800&q=80"
              }
            ].map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="grid-border group relative overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(min-width: 1024px) 400px, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="mb-1 font-bold text-neutral-50">
                      {award.title}
                    </h4>
                    <p className="text-xs text-neutral-400">{award.project}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionShell>

        {/* Education Section */}
        <SectionShell id="Education" label="Background" title="Education">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                degree: "Master of Design",
                institution: "Azad University Of Mashhad",
                period: "2018 - 2020"
              },
              {
                degree: "Bachelor of Design",
                institution: "Azad University Of Mashhad",
                period: "2015 - 2018"
              }
            ].map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="grid-border space-y-3 rounded-2xl p-6 md:p-8"
              >
                <p className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
                  {edu.period}
                </p>
                <h3 className="text-xl font-bold text-neutral-50">
                  {edu.degree}
                </h3>
                <p className="text-neutral-400">{edu.institution}</p>
              </motion.div>
            ))}
          </div>
        </SectionShell>

        {/* Skills Section */}
        <SectionShell id="Skill" label="Expertise" title="Skills & Tools">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-neutral-50">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Art Direction",
                  "Leadership",
                  "Visual Design",
                  "Web UI/UX Design",
                  "Product Design",
                  "Digital Design",
                  "Branding",
                  "Web Animation",
                  "Mentoring",
                  "3D Design",
                  "User Interaction",
                  "Photography & Edit"
                ].map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="rounded-full bg-white/5 px-4 py-2 text-xs font-medium text-neutral-300 ring-1 ring-white/10 transition hover:bg-white/10"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-neutral-50">Hard Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Figma",
                  "Framer",
                  "Adobe XD",
                  "Spline",
                  "Lightroom",
                  "Photoshop",
                  "3Ds Max",
                  "Lumion",
                  "Illustrator",
                  "V-Ray"
                ].map((tool, i) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="rounded-full bg-orange-500/10 px-4 py-2 text-xs font-medium text-orange-300 ring-1 ring-orange-500/20 transition hover:bg-orange-500/20"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </SectionShell>

        {/* Contact Section */}
        <SectionShell
          id="Contact"
          label="Get in Touch"
          title="Let's create something award‑winning."
        >
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed text-neutral-300">
                I collaborate with teams and brands who care deeply about the
                craft of digital experiences — from early-stage concepts to
                fully-realized products and campaigns.
              </p>

              <div className="space-y-4">
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-neutral-500">
                    Email
                  </p>
                  <a
                    href="mailto:A95Mohseni@gmail.com"
                    className="text-xl font-bold text-neutral-50 underline-offset-4 transition hover:text-orange-500 hover:underline"
                  >
                    A95Mohseni@gmail.com
                  </a>
                </div>

                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-neutral-500">
                    Phone
                  </p>
                  <a
                    href="tel:+14376676169"
                    className="text-xl font-bold text-neutral-50 transition hover:text-orange-500"
                  >
                    +1 (437) 667-6169
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-500">
                  Social
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { label: "LinkedIn", href: "https://www.linkedin.com/in/amir--mohseni/" },
                    { label: "Behance", href: "https://www.behance.net/amirmohseni2" },
                    { label: "Awwwards", href: "https://www.awwwards.com/amir-mohseni/" },
                    { label: "Instagram", href: "https://www.instagram.com/am_amir_mohseni/" },
                    { label: "Dribbble", href: "https://dribbble.com/Amir-M" }
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-neutral-300 ring-1 ring-white/10 transition hover:bg-white hover:text-neutral-950"
                    >
                      <span>{link.label}</span>
                      <span className="text-[10px]">↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid-border rounded-2xl p-6 md:p-8"
            >
              <h3 className="mb-6 text-xl font-bold text-neutral-50">
                Start a Conversation
              </h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-neutral-400"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-sm text-neutral-100 outline-none transition focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20"
                    placeholder="Your name or team"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-neutral-400"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-sm text-neutral-100 outline-none transition focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-neutral-400"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full resize-none rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-sm text-neutral-100 outline-none transition focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20"
                    placeholder="Share a quick brief, timeline, and links if available."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 shadow-lg transition hover:bg-neutral-100"
                >
                  Send Message
                </button>
                <p className="text-xs text-neutral-500">
                  This form is a visual concept. Use the email above to start a
                  real conversation.
                </p>
              </form>
            </motion.div>
          </div>
        </SectionShell>
      </main>

      {/* Footer */}
      <footer className="section-padding border-t border-white/5 py-8">
        <div className="section-max flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Amir Mohseni. All rights reserved.
          </p>
          <p className="text-xs text-neutral-500">
            Designed for a premium, award-level digital presence.
          </p>
        </div>
      </footer>
    </div>
  );
}
