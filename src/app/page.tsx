"use client";

import RubiksCube from "@/components/RubiksCube";
import { Mail } from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMedium,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const navItems = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Achievements", href: "#achievements" },
  { name: "Earl", href: "#earl" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const projects = [
  {
    number: "01",
    name: "Arafims",
    href: "https://arafimshostel.com",
    description:
      "A production hostel management platform for reservations, student records, payments, and management workflows.",
    stack: "Next.js · Supabase · TypeScript",
  },
  {
    number: "02",
    name: "Earl",
    href: "https://earth-y.tech",
    description:
      "A proactive environmental monitoring platform using satellite data and machine learning to identify coastal and landslide risks.",
    stack: "Next.js · FastAPI · Google Earth Engine",
  },
];

const skills = [
  {
    number: "01",
    name: "Full-stack",
    description:
      "Building complete products from interface to backend, database, authentication, and deployment.",
  },
  {
    number: "02",
    name: "Web3",
    description:
      "Working with wallets, on-chain applications, smart contracts, and blockchain infrastructure.",
  },
  {
    number: "03",
    name: "Frontend",
    description:
      "React, Next.js, TypeScript, responsive interfaces, animation, and interactive experiences.",
  },
  {
    number: "04",
    name: "Backend",
    description:
      "APIs, databases, authentication, server-side logic, and production application architecture.",
  },
  {
    number: "05",
    name: "C++",
    description:
      "Learning systems-level programming with the long-term goal of building software that interacts with hardware and robots.",
  },
  {
    number: "06",
    name: "On-chain",
    description:
      "Exploring how blockchain systems work under the hood and building around on-chain data and interactions.",
  },
];

const contactItems = [
  {
    name: "email me",
    href: "mailto:darksoftwareguy84@gmail.com",
    icon: Mail,
  },
  {
    name: "github",
    href: "https://github.com/unrealGuy2",
    icon: FaGithub,
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/abdulsalam-sulaiman-33b465347",
    icon: FaLinkedin,
  },
  {
    name: "medium",
    href: "https://medium.com/@typicalabdulsalaam",
    icon: FaMedium,
  },
  {
    name: "x",
    href: "https://x.com/fazzaezhim",
    icon: FaXTwitter,
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/fazzaezhim",
    icon: FaInstagram,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <a
          href="#top"
          className="text-xl font-semibold tracking-[-0.04em]"
        >
          Fazza.
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-black/50 transition-colors hover:text-black"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="text-sm text-black/60 transition-colors hover:text-black md:hidden"
        >
          Menu
        </a>
      </header>

      <section
        id="top"
        className="mx-auto w-full max-w-7xl px-6 py-8 md:px-10 md:py-10"
      >
        <div className="grid items-center gap-6 md:grid-cols-[1fr_0.9fr] md:gap-4">
          <div>
            <p className="mb-6 text-[13px] font-medium text-black/40">
              Full-stack · Web3 · On-chain
            </p>

            <h1 className="max-w-3xl text-6xl font-medium leading-[0.95] tracking-[-0.07em] sm:text-7xl md:text-8xl">
              Building software
              <br />
              and on-chain systems.
            </h1>

            <p className="mt-8 max-w-xl text-[16px] leading-7 tracking-[-0.01em] text-black/50 md:text-[17px]">
              I&apos;m Fazza, a developer focused on building useful digital
              products, exploring Web3, and learning systems-level development.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-full bg-black px-6 py-3 text-sm font-medium !text-white transition-transform duration-200 hover:-translate-y-0.5"
              >
                View my work
              </a>

              <a
                href="#contact"
                className="rounded-full border border-black/15 px-6 py-3 text-sm font-medium !text-black transition-all duration-200 hover:-translate-y-0.5 hover:border-black/30"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="h-[520px] w-full">
              <RubiksCube />
            </div>
          </div>
        </div>
      </section>

      <section
        id="work"
        className="mx-auto w-full max-w-7xl border-t border-black/10 px-6 py-24 md:px-10 md:py-32"
      >
        <div className="mb-16">
          <p className="mb-5 text-[13px] font-medium text-black/40">
            Selected work
          </p>

          <h2 className="text-5xl font-medium tracking-[-0.06em] sm:text-6xl md:text-7xl">
            Things I&apos;ve built.
          </h2>

          <p className="mt-6 max-w-xl text-[16px] leading-7 text-black/50 md:text-[17px]">
            A selection of products and systems I&apos;ve worked on.
          </p>
        </div>

        <div className="border-t border-black/10">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group grid gap-6 border-b border-black/10 py-10 md:grid-cols-[80px_1fr_1.5fr_1fr] md:items-start md:gap-10"
            >
              <span className="text-sm text-black/30">
                {project.number}
              </span>

              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-2xl font-medium tracking-[-0.04em] transition-opacity hover:opacity-50"
              >
                {project.name}
              </a>

              <p className="max-w-xl text-[16px] leading-7 text-black/50">
                {project.description}
              </p>

              <p className="text-sm text-black/40 md:text-right">
                {project.stack}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="mx-auto w-full max-w-7xl border-t border-black/10 px-6 py-24 md:px-10 md:py-32"
      >
        <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
          <div>
            <p className="text-[13px] font-medium text-black/40">
              About
            </p>

            <h2 className="mt-5 text-5xl font-medium tracking-[-0.06em] sm:text-6xl md:text-7xl">
              A little
              <br />
              about me.
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-2xl font-medium leading-[1.2] tracking-[-0.04em] sm:text-3xl md:text-4xl">
              I&apos;m Fazza. I build things, break things, and usually
              end up going deeper than I planned.
            </p>

            <p className="mt-8 text-[16px] leading-7 tracking-[-0.01em] text-black/50 md:text-[17px]">
              Right now, most of my work lives around full-stack
              development and Web3. I&apos;ve built production software,
              shipped projects, competed in hackathons, and spent a lot
              of time figuring out how systems work under the hood.
            </p>

            <p className="mt-6 text-[16px] leading-7 tracking-[-0.01em] text-black/50 md:text-[17px]">
              I&apos;m also getting to know about C++. I want to
              understand more about it, and since they said its part of
              the language that is next to understanding a computer and
              eventually I want to build things that interact with the
              system itself.
            </p>

            <p className="mt-6 text-[16px] leading-7 tracking-[-0.01em] text-black/50 md:text-[17px]">
              There&apos;s still a lot I don&apos;t know. That&apos;s
              kind of the point.
            </p>
          </div>
        </div>
      </section>

      <section
        id="achievements"
        className="mx-auto w-full max-w-7xl border-t border-black/10 px-6 py-24 md:px-10 md:py-32"
      >
        <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
          <div>
            <p className="text-[13px] font-medium text-black/40">
              Achievements
            </p>

            <h2 className="mt-5 text-5xl font-medium tracking-[-0.06em] sm:text-6xl md:text-7xl">
              A few things
              <br />
              I&apos;ve done.
            </h2>
          </div>

          <div className="border-t border-black/10">
            <div className="grid gap-6 border-b border-black/10 py-8 md:grid-cols-[80px_1fr_1fr] md:items-start md:gap-10">
              <span className="text-sm text-black/30">01</span>

              <div>
                <h3 className="text-xl font-medium tracking-[-0.03em]">
                  08th Place
                </h3>

                <p className="mt-2 text-sm text-black/40">
                  Taiwan Presidential Hackathon
                </p>

                <p className="mt-1 text-sm text-black/30">
                  International Track
                </p>
              </div>

              <p className="text-[15px] leading-6 text-black/50">
                Worked on Earl, an environmental monitoring platform using
                satellite data and machine learning to identify coastal and
                landslide risks.
              </p>
            </div>

            <div className="grid gap-6 border-b border-black/10 py-8 md:grid-cols-[80px_1fr_1fr] md:items-start md:gap-10">
              <span className="text-sm text-black/30">02</span>

              <div>
                <h3 className="text-xl font-medium tracking-[-0.03em]">
                  06th Place
                </h3>

                <p className="mt-2 text-sm text-black/40">
                  AI Hackathon · Spain
                </p>
              </div>

              <p className="text-[15px] leading-6 text-black/50">
                Placed 6th in an international AI hackathon, building and
                presenting a technical solution with a small team.
              </p>
            </div>

            <div className="grid gap-6 border-b border-black/10 py-8 md:grid-cols-[80px_1fr_1fr] md:items-start md:gap-10">
              <span className="text-sm text-black/30">03</span>

              <div>
                <h3 className="text-xl font-medium tracking-[-0.03em]">
                  Production Software
                </h3>

                <p className="mt-2 text-sm text-black/40">
                  Arafims Hostel
                </p>
              </div>

              <p className="text-[15px] leading-6 text-black/50">
                Designed and shipped a production hostel management platform
                handling reservations, student records, payments, and
                management workflows.
              </p>
            </div>

            <div className="grid gap-6 border-b border-black/10 py-8 md:grid-cols-[80px_1fr_1fr] md:items-start md:gap-10">
              <span className="text-sm text-black/30">04</span>

              <div>
                <h3 className="text-xl font-medium tracking-[-0.03em]">
                  Web3 &amp; On-chain
                </h3>

                <p className="mt-2 text-sm text-black/40">
                  Building &amp; exploring
                </p>
              </div>

              <p className="text-[15px] leading-6 text-black/50">
                Building around wallets, on-chain data, blockchain
                applications, and the systems behind Web3 products.
              </p>
            </div>

            <div className="mt-20 border-t border-black/10 pt-10">
              <h3 className="text-2xl font-medium tracking-[-0.04em]">
                And just so you know.
              </h3>

              <p className="mt-4 max-w-xl text-[15px] leading-6 text-black/50">
                I&apos;ve also applied to a few startup accelerators.
                Didn&apos;t get in. Here are the ones I applied to:
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between border-b border-black/10 pb-4">
                  <span className="text-[16px] font-medium">
                    Y Combinator
                  </span>

                  <span className="text-sm text-black/40">
                    Summer 2026 · Rejected
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-black/10 pb-4">
                  <span className="text-[16px] font-medium">
                    A16
                  </span>

                  <span className="text-sm text-black/40">
                    Rejected
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-black/10 pb-4">
                  <span className="text-[16px] font-medium">
                    Techstars
                  </span>

                  <span className="text-sm text-black/40">
                    Rejected
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="earl"
        className="mx-auto w-full max-w-7xl border-t border-black/10 px-6 py-24 md:px-10 md:py-32"
      >
        <div className="grid gap-16 md:grid-cols-[1fr_1fr] md:items-center md:gap-24">
          <div>
            <p className="mb-6 text-[13px] font-medium text-black/40">
              Project · Environmental systems
            </p>

            <a
              href="https://earth-y.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-fit"
            >
              <h2 className="text-6xl font-medium tracking-[-0.07em] transition-opacity group-hover:opacity-50 sm:text-7xl md:text-8xl">
                Earl.
              </h2>
            </a>

            <p className="mt-8 max-w-xl text-[16px] leading-7 text-black/50 md:text-[17px]">
              A proactive environmental monitoring platform using satellite
              data and machine learning to identify coastal and landslide
              risks.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Next.js", "FastAPI", "Google Earth Engine"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-black/10 px-4 py-2 text-sm text-black/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <a
              href="https://earth-y.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-60"
            >
              <img
                src="/earl-logo.png"
                alt="Earl logo"
                className="h-auto w-32 md:w-40"
              />
            </a>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="mx-auto w-full max-w-7xl border-t border-black/10 px-6 py-24 md:px-10 md:py-32"
      >
        <div className="mb-16">
          <p className="mb-5 text-[13px] font-medium text-black/40">
            Skills
          </p>

          <h2 className="text-5xl font-medium tracking-[-0.06em] sm:text-6xl md:text-8xl">
            I CAN MAKE IT
            <br />
            HAPPEN.
          </h2>
        </div>

        <div className="grid border-l border-t border-black/10 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.number}
              className="group relative min-h-[260px] border-b border-r border-black/10 p-7 transition-colors duration-300 hover:bg-black/[0.02] md:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm text-black/30">
                  {skill.number}
                </span>

                <span className="text-lg text-black/30 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                  ↗
                </span>
              </div>

              <div className="mt-20">
                <h3 className="text-2xl font-medium tracking-[-0.04em]">
                  {skill.name}
                </h3>

                <p className="mt-4 text-[15px] leading-6 text-black/45">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="cpp"
        className="mx-auto w-full max-w-7xl border-t border-black/10 px-6 py-24 md:px-10 md:py-32"
      >
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-20">
          <div>
            <p className="mb-6 text-[13px] font-medium text-black/40">
              Learning · Systems
            </p>

            <h2 className="text-5xl font-medium tracking-[-0.06em] sm:text-6xl md:text-7xl">
              C++.
            </h2>

            <p className="mt-8 max-w-lg text-[16px] leading-7 tracking-[-0.01em] text-black/50 md:text-[17px]">
              I&apos;m learning C++ because I want to understand
              what happens closer to the machine and eventually be
              able to build robots too.
            </p>
          </div>

          <div className="flex justify-end">
            <div className="relative h-[300px] w-full max-w-[520px] overflow-hidden border border-black/10 bg-black/[0.015] md:h-[300px]">
              <video
                src="/robot.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto w-full max-w-7xl border-t border-black/10 px-6 py-24 md:px-10 md:py-32"
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-[13px] font-medium text-black/40">
            Contact
          </p>

          <h2 className="mt-5 text-center text-5xl font-medium tracking-[-0.06em] !text-black sm:text-6xl md:text-8xl">
            Let&apos;s build
            <br />
            something.
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-center text-[16px] leading-7 !text-black/50 md:text-[17px]">
            Have an idea, project, or something interesting?
            I&apos;m always open to hearing about it.
          </p>

          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {contactItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.name === "email me" ? undefined : "_blank"}
                  rel={
                    item.name === "email me"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className={`group flex min-w-[170px] items-center justify-center gap-4 rounded-xl border px-7 py-5 text-lg transition-all duration-300 hover:-translate-y-1 ${
                    index === 0
                      ? "border-black bg-black !text-white hover:bg-black/90"
                      : "border-black/10 bg-white !text-black hover:border-black/30 hover:bg-black/[0.02]"
                  }`}
                >
                  <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />

                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>

          <div className="mt-24 border-t border-black/10 pt-8 text-center">
            <p className="text-sm text-black/40">
              Fazza.
            </p>

            <p className="mt-2 text-xs text-black/30">
              Building software & systems.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}