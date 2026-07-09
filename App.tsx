import Navbar from "./components/Navbar";
import FAQ from "./components/FAQ";
import {
  IconArrow,
  IconCheck,
  IconCode,
  IconStar,
  IconWhatsApp,
  serviceIcons,
} from "./components/Icons";
import {
  navLinks,
  packages,
  portfolio,
  processSteps,
  services,
  techStack,
  testimonials,
  waLink,
} from "./data";

function SectionHeading({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <span className="mb-3 inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-300">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {desc && <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">{desc}</p>}
    </div>
  );
}

function WaButton({
  children,
  message,
  className = "",
  variant = "primary",
}: {
  children: React.ReactNode;
  message?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400";
  const variants = {
    primary:
      "bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 text-white shadow-lg shadow-violet-500/25 hover:brightness-110 animate-gradient",
    secondary:
      "bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg shadow-emerald-500/25 hover:brightness-110",
    outline:
      "border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/25",
  };

  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

export default function App() {
  return (
    <div className="noise min-h-screen bg-[#05060a] text-zinc-100">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-violet-600/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute -right-24 top-40 h-[380px] w-[380px] rounded-full bg-cyan-500/15 blur-[110px]" />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-fuchsia-600/10 blur-[100px]" />
        <div className="absolute inset-0 grid-bg" />
      </div>

      <Navbar />

      {/* HERO */}
      <section id="beranda" className="relative overflow-hidden pt-28 sm:pt-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:pb-28">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open for project · Respon cepat via WhatsApp
            </div>

            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              Bikin Website & Aplikasi{" "}
              <span className="text-gradient animate-gradient">yang Kece</span>, Siap Naikin Brand Kamu
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              <strong className="font-semibold text-zinc-200">DimzyDev</strong> bantu bisnis,
              UMKM, dan startup punya website/aplikasi modern, cepat, dan siap convert visitor jadi
              pelanggan.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WaButton variant="secondary" className="sm:min-w-[200px]">
                <IconWhatsApp className="h-5 w-5" />
                Order via WhatsApp
              </WaButton>
              <a
                href="#paket"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Lihat Paket
                <IconArrow className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["R", "A", "M"].map((l) => (
                    <span
                      key={l}
                      className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#05060a] bg-gradient-to-br from-violet-500 to-cyan-400 text-xs font-bold text-white"
                    >
                      {l}
                    </span>
                  ))}
                </div>
                <span>50+ project selesai</span>
              </div>
              <div className="flex items-center gap-1.5">
                <IconStar className="h-4 w-4 text-amber-400" />
                <span>4.9 rating klien</span>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="animate-float relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-500/30 via-fuchsia-500/20 to-cyan-400/30 blur-2xl" />
              <div className="glass relative overflow-hidden rounded-[1.75rem] p-1 shadow-2xl shadow-violet-900/40">
                <div className="overflow-hidden rounded-[1.5rem] bg-[#0b0d14]">
                  <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                    <span className="ml-2 rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-zinc-500">
                      dimzydev.app
                    </span>
                  </div>
                  <div className="space-y-4 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-zinc-500">Project Dashboard</p>
                        <p className="font-display text-lg font-semibold text-white">DimzyDev Studio</p>
                      </div>
                      <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
                        Live
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: "Website Live", value: "48" },
                        { label: "Apps Built", value: "12" },
                        { label: "Happy Client", value: "50+" },
                        { label: "Avg. Delivery", value: "7 hari" },
                      ].map((stat) => (
                        <div key={stat.label} className="rounded-2xl border border-white/5 bg-white/[0.03] p-3">
                          <p className="font-display text-xl font-bold text-white">{stat.value}</p>
                          <p className="text-[11px] text-zinc-500">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-cyan-500/5 p-4">
                      <div className="mb-3 flex items-center gap-2">
                        <IconCode className="h-4 w-4 text-violet-300" />
                        <span className="text-xs font-medium text-violet-200">Tech yang dipakai</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {["React", "Vite", "Tailwind", "Node", "Figma"].map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-white/10 bg-black/30 px-2 py-0.5 text-[11px] text-zinc-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                        <IconWhatsApp className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-white">Siap order?</p>
                        <p className="truncate text-xs text-zinc-500">Klik chat, langsung dibales</p>
                      </div>
                      <WaButton variant="secondary" className="!rounded-xl !px-3 !py-2 text-xs">
                        Chat
                      </WaButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* marquee */}
        <div className="border-y border-white/5 bg-white/[0.02] py-4">
          <div className="overflow-hidden">
            <div className="animate-marquee flex w-max gap-8 whitespace-nowrap px-4">
              {[...techStack, ...techStack].map((tech, i) => (
                <span key={`${tech}-${i}`} className="flex items-center gap-8 text-sm font-medium text-zinc-500">
                  <span className="text-zinc-300">{tech}</span>
                  <span className="text-violet-500/60">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="layanan" className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Layanan"
            title="Semua yang kamu butuhin biar go digital"
            desc="Dari landing page simpel sampai aplikasi custom — kami handle desain, development, sampai launch."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = serviceIcons[s.icon as keyof typeof serviceIcons];
              return (
                <article
                  key={s.title}
                  className="group glass relative overflow-hidden rounded-3xl p-6 transition hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/10"
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-violet-500/10 blur-2xl transition group-hover:bg-violet-500/20" />
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/10 text-violet-300 ring-1 ring-white/10">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[11px] text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="paket" className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Paket Harga"
            title="Harga transparan, hasil maksimal"
            desc="Pilih paket yang cocok, atau chat kami buat penawaran custom sesuai budget & kebutuhan."
          />
          <div className="grid items-stretch gap-5 lg:grid-cols-3">
            {packages.map((pkg) => (
              <article
                key={pkg.name}
                className={`relative flex flex-col rounded-3xl p-6 sm:p-7 ${
                  pkg.highlight
                    ? "bg-gradient-to-b from-violet-600/25 via-[#12141f] to-[#0c0e16] ring-2 ring-violet-500/50 shadow-2xl shadow-violet-500/20"
                    : "glass"
                }`}
              >
                {pkg.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-lg">
                    {pkg.badge}
                  </span>
                )}
                <div className="mb-5">
                  <h3 className="font-display text-xl font-bold text-white">{pkg.name}</h3>
                  <p className="mt-1 text-sm text-zinc-400">{pkg.desc}</p>
                </div>
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wider text-zinc-500">{pkg.period}</p>
                  <p className="font-display text-3xl font-bold text-white sm:text-4xl">{pkg.price}</p>
                </div>
                <ul className="mb-8 flex-1 space-y-3">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                        <IconCheck className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <WaButton
                  message={pkg.message}
                  variant={pkg.highlight ? "secondary" : "outline"}
                  className="w-full"
                >
                  <IconWhatsApp className="h-4 w-4" />
                  {pkg.cta}
                </WaButton>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-zinc-500">
            Harga bisa disesuaikan scope project.{" "}
            <a href={waLink("Halo DimzyDev! Saya mau tanya custom price dulu.")} target="_blank" rel="noopener noreferrer" className="text-violet-300 underline-offset-2 hover:underline">
              Tanya dulu via WhatsApp
            </a>
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section id="proses" className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Cara Kerja"
            title="Proses simpel, hasil profesional"
            desc="Tanpa ribet. Dari chat pertama sampai website live, alurnya jelas dan transparan."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <div key={step.step} className="glass relative rounded-3xl p-6">
                <span className="font-display text-4xl font-bold text-violet-500/30">{step.step}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{step.desc}</p>
                {i < processSteps.length - 1 && (
                  <div className="absolute -right-2 top-1/2 hidden h-px w-4 bg-gradient-to-r from-violet-500/50 to-transparent lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portofolio" className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Portofolio"
            title="Cuplikan project yang pernah dikerjain"
            desc="Berbagai industri: F&B, retail, edukasi, SaaS, sampai internal tools."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0c0e16] transition hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/10"
              >
                <div className={`relative h-40 bg-gradient-to-br ${item.color} p-5`}>
                  <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
                  <span className="relative rounded-full bg-black/30 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
                    {item.tag}
                  </span>
                  <div className="absolute bottom-4 right-4 h-16 w-24 rounded-xl border border-white/20 bg-white/10 shadow-lg backdrop-blur transition group-hover:scale-105" />
                  <div className="absolute bottom-8 right-10 h-10 w-16 rounded-lg border border-white/20 bg-white/15 backdrop-blur" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-zinc-400">{item.category}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <WaButton message="Halo DimzyDev! Saya mau lihat contoh project lebih detail.">
              Minta Contoh Project
              <IconArrow className="h-4 w-4" />
            </WaButton>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimoni"
            title="Apa kata klien DimzyDev"
            desc="Feedback jujur dari yang sudah pakai jasa kami."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="glass flex flex-col rounded-3xl p-6">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <IconStar key={i} className="h-4 w-4 text-amber-400" />
                  ))}
                </div>
                <p className="flex-1 text-sm leading-relaxed text-zinc-300">“{t.text}”</p>
                <footer className="mt-5 border-t border-white/5 pt-4">
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Pertanyaan yang sering ditanya"
            desc="Masih bingung? Langsung aja chat WhatsApp biar lebih jelas."
          />
          <FAQ />
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-violet-500/30 bg-gradient-to-br from-violet-600/30 via-[#12141f] to-cyan-600/20 px-6 py-12 text-center sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-violet-500/30 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
            <h2 className="relative font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Siap bikin website / app impianmu?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-zinc-300">
              Konsultasi gratis. Ceritain ide atau kebutuhan bisnis kamu — kami bantu wujudkan dengan
              desain kece & eksekusi rapi.
            </p>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WaButton variant="secondary" className="min-w-[220px] text-base">
                <IconWhatsApp className="h-5 w-5" />
                Chat 628567220710
              </WaButton>
              <a
                href="#paket"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Bandingkan Paket
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 text-xs font-bold text-white">
              D
            </span>
            <div>
              <p className="font-display font-bold text-white">
                Dimzy<span className="text-violet-400">Dev</span>
              </p>
              <p className="text-xs text-zinc-500">Jasa Website & Aplikasi</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-400">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white">
                {l.label}
              </a>
            ))}
          </div>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300"
          >
            <IconWhatsApp className="h-4 w-4" />
            628567220710
          </a>
        </div>
        <p className="mt-8 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} DimzyDev. All rights reserved.
        </p>
      </footer>

      {/* Floating WA */}
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp DimzyDev"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-green-600 text-white shadow-xl shadow-emerald-500/40 transition hover:scale-105 hover:brightness-110 sm:bottom-6 sm:right-6"
      >
        <IconWhatsApp className="h-7 w-7" />
        <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
          <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-white" />
        </span>
      </a>
    </div>
  );
}
