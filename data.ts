export const WA_NUMBER = "628567220710";

export function waLink(message?: string) {
  const text =
    message ||
    "Halo DimzyDev! Saya tertarik order jasa website/aplikasi. Bisa konsultasi dulu?";
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const navLinks = [
  { href: "#layanan", label: "Layanan" },
  { href: "#paket", label: "Paket" },
  { href: "#proses", label: "Proses" },
  { href: "#portofolio", label: "Portofolio" },
  { href: "#faq", label: "FAQ" },
];

export const services = [
  {
    icon: "globe",
    title: "Website Company Profile",
    desc: "Website profesional untuk brand, UMKM, dan perusahaan. Desain modern, cepat, dan mobile-friendly.",
    tags: ["Landing Page", "SEO Ready", "Responsive"],
  },
  {
    icon: "cart",
    title: "Website Toko Online",
    desc: "E-commerce lengkap: katalog produk, keranjang, checkout, dan integrasi pembayaran.",
    tags: ["E-Commerce", "Payment", "Admin Panel"],
  },
  {
    icon: "app",
    title: "Aplikasi Web & Mobile",
    desc: "Custom app sesuai kebutuhan bisnis: dashboard, booking system, inventory, dan lainnya.",
    tags: ["Custom App", "API", "Dashboard"],
  },
  {
    icon: "spark",
    title: "UI/UX Design",
    desc: "Desain interface yang kece, clean, dan user-friendly biar visitor betah dan convert.",
    tags: ["Figma", "Prototype", "Brand Kit"],
  },
  {
    icon: "rocket",
    title: "Optimasi & Redesign",
    desc: "Website lama lemot atau ketinggalan zaman? Kami bikin lebih cepat, modern, dan rapi.",
    tags: ["Speed", "Revamp", "Maintenance"],
  },
  {
    icon: "bot",
    title: "Integrasi Otomasi",
    desc: "WhatsApp auto-reply, form ke spreadsheet, notifikasi order, dan integrasi tools lain.",
    tags: ["Automation", "WhatsApp", "API"],
  },
];

export const packages = [
  {
    name: "Starter",
    price: "Rp 999rb",
    period: "mulai dari",
    highlight: false,
    desc: "Cocok untuk personal branding & UMKM yang butuh online presence.",
    features: [
      "Landing page 1–3 section",
      "Desain modern & responsif",
      "Form kontak + WhatsApp",
      "Domain & hosting setup",
      "Revisi 2x",
      "Support 14 hari",
    ],
    cta: "Order Starter",
    message:
      "Halo DimzyDev! Saya mau order paket Starter (mulai Rp 999rb). Bisa info lebih lanjut?",
  },
  {
    name: "Business",
    price: "Rp 2,5jt",
    period: "mulai dari",
    highlight: true,
    badge: "Paling Laris",
    desc: "Solusi lengkap untuk bisnis yang serius scale online.",
    features: [
      "Website multi-halaman",
      "Custom design premium",
      "SEO basic + analytics",
      "Integrasi WhatsApp & form",
      "Admin panel sederhana",
      "Revisi 4x",
      "Support 30 hari",
      "Training penggunaan",
    ],
    cta: "Order Business",
    message:
      "Halo DimzyDev! Saya mau order paket Business (mulai Rp 2,5jt). Bisa konsultasi dulu?",
  },
  {
    name: "Custom App",
    price: "Custom",
    period: "sesuai scope",
    highlight: false,
    desc: "Aplikasi web/mobile custom sesuai workflow bisnis kamu.",
    features: [
      "Analisis kebutuhan bisnis",
      "Full custom development",
      "Database & API",
      "Dashboard admin",
      "Role & authentication",
      "Deployment production",
      "Dokumentasi teknis",
      "Support & maintenance",
    ],
    cta: "Diskusi Project",
    message:
      "Halo DimzyDev! Saya mau diskusi project Custom App. Bisa bantu cek scope & estimasi?",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Konsultasi Gratis",
    desc: "Ceritain kebutuhan bisnis kamu via WhatsApp. Kita bedah goal & solusi terbaik.",
  },
  {
    step: "02",
    title: "Brief & Penawaran",
    desc: "Kami susun scope, fitur, timeline, dan harga yang transparan tanpa biaya tersembunyi.",
  },
  {
    step: "03",
    title: "Design & Develop",
    desc: "Desain dulu, approve, lalu development. Kamu bisa pantau progress secara berkala.",
  },
  {
    step: "04",
    title: "Launch & Support",
    desc: "Website/app live, dioptimasi, dan kami dampingi sampai kamu nyaman menggunakannya.",
  },
];

export const portfolio = [
  {
    title: "Nusantara Cafe",
    category: "Company Profile",
    color: "from-violet-600 to-indigo-700",
    tag: "Website",
  },
  {
    title: "TokoKita Mart",
    category: "E-Commerce",
    color: "from-cyan-600 to-blue-700",
    tag: "Toko Online",
  },
  {
    title: "BookMySlot",
    category: "Booking System",
    color: "from-fuchsia-600 to-pink-700",
    tag: "Web App",
  },
  {
    title: "FitTrack Pro",
    category: "Dashboard App",
    color: "from-emerald-600 to-teal-700",
    tag: "SaaS",
  },
  {
    title: "GlowBeauty",
    category: "Landing Page",
    color: "from-rose-500 to-orange-600",
    tag: "Brand Site",
  },
  {
    title: "LogiFleet",
    category: "Custom System",
    color: "from-amber-500 to-yellow-600",
    tag: "Internal App",
  },
];

export const testimonials = [
  {
    name: "Rina Prameswari",
    role: "Owner, Rina Beauty Studio",
    text: "Website-nya keren banget, loading cepet, dan langsung naik inquiry via WhatsApp. Worth it!",
    rating: 5,
  },
  {
    name: "Andi Saputra",
    role: "Founder, TokoKita",
    text: "Dari brief sampai live cuma hitungan minggu. Admin panel-nya gampang dipakai, recommended.",
    rating: 5,
  },
  {
    name: "Maya Lestari",
    role: "Marketing Lead, EduPrime",
    text: "Desainnya modern, mobile-friendly, dan tim DimzyDev komunikasinya super responsif.",
    rating: 5,
  },
];

export const faqs = [
  {
    q: "Berapa lama pengerjaan website?",
    a: "Tergantung paket & kompleksitas. Landing page biasanya 3–7 hari kerja. Multi-page 1–3 minggu. Custom app menyesuaikan scope.",
  },
  {
    q: "Apakah termasuk domain & hosting?",
    a: "Bisa kami bantu setup. Domain & hosting bisa disediakan client atau kami bantu belikan (biaya terpisah / sesuai paket).",
  },
  {
    q: "Bisa request fitur custom?",
    a: "Tentu. Hampir semua project bisa disesuaikan: booking, multi-bahasa, payment gateway, dashboard, dsb.",
  },
  {
    q: "Bagaimana sistem pembayarannya?",
    a: "Umumnya DP 50% di awal, pelunasan setelah project selesai / sebelum go-live. Detailnya dibahas di penawaran.",
  },
  {
    q: "Apakah ada maintenance setelah live?",
    a: "Ada support periode sesuai paket. Setelah itu bisa ambil paket maintenance bulanan biar tetap aman & update.",
  },
  {
    q: "Saya gaptek, bisa dibantu?",
    a: "Pasti. Kami dampingi dari awal, kasih training singkat, dan siap bantu lewat WhatsApp kalau ada kendala.",
  },
];

export const techStack = [
  "React",
  "Next.js",
  "Vite",
  "Tailwind",
  "Node.js",
  "TypeScript",
  "Firebase",
  "Supabase",
  "Figma",
  "WordPress",
];
