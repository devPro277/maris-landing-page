import { useEffect, useState } from "react";
import {
  Phone, MapPin, Clock, Mail, Star, Play, ChevronDown, ArrowRight,
  Check, Sparkles, GraduationCap, BookOpen, Brain, Globe,
  ArrowUpRight, Quote, X 
} from "lucide-react";

import heroStudent from "@/assets/hero-student.jpg";
import aboutClassroom from "@/assets/about-classroom.jpg";
import courseEnglish from "@/assets/course-english.jpg";
import courseRussian from "@/assets/course-russian.jpg";
import courseMental from "@/assets/course-mental.jpg";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import student3 from "@/assets/student-3.jpg";
import student4 from "@/assets/student-4.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";



const NAV = [
  { label: "Biz haqimizda", href: "#about" },
  { label: "Kurslar", href: "#courses" },
  { label: "Natijalar", href: "#results" },
  { label: "Blog", href: "#blog" },
  { label: "Aloqa", href: "#contact" },
];

export default function App() {
  return (
    <div className="bg-hero min-h-screen text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Courses />
        <Results />
        <Gallery />
        <Testimonials />
        <Location />
        <Blog />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- HEADER ---------------- */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 transition-all duration-500 ${
          scrolled ? "glass-strong py-2.5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] rounded-3xl" : "py-3"
        }`}
      >
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 items-center">
          <div className="flex items-center min-w-[240px] shrink-0">
                <a href="#" className="flex items-center gap-3">
                  <div className="flex flex-col items-center justify-center font-black text-2xl text-[#F5B81F] tracking-tighter leading-none select-none">
                    <span>M</span>
                    <span className="text-[7px] tracking-widest uppercase mt-[-2px]">Maris</span>
                  </div>
                  <div className="font-display text-lg font-bold tracking-wide text-white border-l border-white/20 pl-3">
                    MARIS ACADEMY
                  </div>
                </a>
              </div>
          <div className="hidden lg:flex items-center justify-center">
            <nav className="flex items-center gap-1 rounded-full glass px-2 py-1.5">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-primary hover:bg-white/[0.04] whitespace-nowrap"
                >
                  {n.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center justify-end gap-2">
            <a href="tel:+998777204040" className="btn-gold hidden sm:inline-flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4" /> Qo'ng'iroq qilish
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden grid h-11 w-11 place-items-center rounded-full glass"
              aria-label="Menu"
            >
              <div className="space-y-1.5">
                <span className="block h-0.5 w-5 bg-primary" />
                <span className="block h-0.5 w-5 bg-primary" />
              </div>
            </button>
          </div>

        </div>
      </div>

      {open && (
        <div className="lg:hidden mx-4 mt-2 rounded-2xl glass-strong p-4 animate-fade-up">
          <div className="flex flex-col">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-white/[0.04]"
              >
                {n.label}
              </a>
            ))}
            <a href="tel:+998777204040" className="btn-gold mt-2 inline-flex items-center justify-center gap-2 text-sm">
              <Phone className="h-4 w-4" /> Qo'ng'iroq qilish
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 lg:pt-48 lg:pb-32">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      <GridPattern />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs tracking-wider text-primary">
            <Sparkles className="h-3.5 w-3.5" /> MARIS ACADEMY
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            BILIM — ENG <br />
            KATTA{" "}
            <span className="text-gradient-gold italic font-extrabold">
              INVESTITSIYA
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Ingliz tili, rus tili va mental arifmetika bo'yicha zamonaviy
            ta'lim markazi. Zamonaviy metodika, individual yondashuv, kafolatlangan natija.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn-gold inline-flex items-center gap-2">
              Ro'yxatdan o'tish <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#courses" className="btn-ghost-gold inline-flex items-center gap-2">
              Kurslarni ko'rish
            </a>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/15 text-primary">
              <Check className="h-3.5 w-3.5" />
            </span>
            <span><span className="text-foreground font-medium">Bepul sinov darsi</span> — hech qanday majburiyat yo'q</span>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "200+", l: "O'quvchi" },
              { v: "7+", l: "Yil tajriba" },
              { v: "95%", l: "Mamnunlik" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-bold text-gradient-gold">{s.v}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual */}
        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            {/* Golden circular glow */}
            <div className="absolute inset-6 rounded-full animate-pulse-glow"
                 style={{ background: "radial-gradient(closest-side, rgba(245,184,31,0.45), transparent 70%)" }} />
            <div className="absolute inset-10 rounded-full border border-[var(--border-gold)]" />
            <div className="absolute inset-20 rounded-full border border-[var(--border-gold)]" />

            {/* Geometric accents */}
            <div className="absolute -top-4 right-10 h-14 w-14 rounded-2xl glass-strong animate-float grid place-items-center">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div className="absolute bottom-8 -left-4 h-14 w-14 rounded-2xl glass-strong animate-float [animation-delay:1.5s] grid place-items-center">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>

            {/* Student */}
            <div className="absolute inset-x-8 bottom-0 top-8 overflow-hidden rounded-[2.5rem] gold-glow">
              <img
                src={heroStudent}
                alt="Maris Academy o'quvchisi"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/70 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 left-4 sm:left-10 glass-strong rounded-2xl px-4 py-3 flex items-center gap-3 animate-float [animation-delay:0.7s]">
              <div className="flex -space-x-2">
                {[student1, student2, student3].map((s, i) => (
                  <img key={i} src={s} alt="" width={32} height={32}
                    className="h-9 w-9 rounded-full border-2 border-[#0B1E38] object-cover" />
                ))}
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Joriy hafta</div>
                <div className="text-sm font-semibold">+38 yangi o'quvchi</div>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 glass-strong rounded-2xl px-4 py-3 animate-float [animation-delay:1.2s]">
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">4.9 / 5 reyting</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GridPattern() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 -z-0 h-full w-full opacity-[0.06]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
          <path d="M 64 0 L 0 0 0 64" fill="none" stroke="#F5B81F" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}

/* ---------------- ABOUT ---------------- */
/* ---------------- BIZ HAQIMIZDA ---------------- */
function About() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
        
        {/* CHAP TOMON: RASM VA VIDEO TUGMASI */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] gold-glow">
            <img src={aboutClassroom} alt="Maris Academy sinfxonasi" width={1280} height={960}
              loading="lazy" className="h-full w-full object-cover aspect-[5/4]" />
            
            <button
              onClick={() => setIsVideoOpen(true)}
              className="group absolute inset-0 grid place-items-center"
              aria-label="Videoni ko'rish"
            >
              <span className="grid h-20 w-20 place-items-center rounded-full bg-primary text-[#071326] transition-transform duration-300 group-hover:scale-110 shadow-[0_20px_60px_-20px_rgba(245,184,31,0.8)]">
                <Play className="h-7 w-7 fill-current" />
              </span>
            </button>
          </div>
          
          <div className="absolute -bottom-6 -right-6 hidden md:block glass-strong rounded-2xl p-5 w-56">
            <div className="font-display text-3xl font-bold text-gradient-gold">5+</div>
            <div className="text-sm text-muted-foreground mt-1">yillik ta'lim tajribasi</div>
          </div>
        </div>

        {/* O'NG TOMON: MATNLAR */}
        <div>
          <SectionLabel>BIZ HAQIMIZDA</SectionLabel>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Har bir o'quvchi — <span className="text-gradient-gold italic">alohida yondashuv</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Maris Academy — bu zamonaviy metodika, halqaro standartlar va inson-markazli ta'lim
            falsafasini birlashtirgan zamonaviy o'quv markazi. Biz har bir o'quvchining
            individual potensialini ochishga yo'naltirilgan tizim yaratdik.
          </p>
          <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "Kichik guruhlar",
              "Individual yondashuv",
              "Tajribali mentorlar",
              "Natijaga yo'naltirilgan tizim",
              "Zamonaviy metodika",
              "Halqaro standartlar",
            ].map((b) => (
              <li key={b} className="flex items-center gap-3 rounded-xl glass px-4 py-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-sm">{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <a href="#contact" className="btn-gold inline-flex items-center gap-2">
              Maslahat olish <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* 🎬 PROFESSIONAL VIDEO MODAL OYNASI */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="absolute inset-0" onClick={() => setIsVideoOpen(false)} />
          
          <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl z-10">
            {/* Yopish tugmasi */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white hover:bg-primary hover:text-[#071326] transition-all duration-300"
              aria-label="Yopish"
            >
              <X className="h-5 w-5" />
            </button>

            {/* 🎥 TOZA HTML5 VIDEO PLAYER (MAHALLIY VIDEO) */}
            <video
              src="/about-video.mp4"
              className="h-full w-full object-contain bg-black"
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </section>
  );
}
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] text-primary">
      <span className="h-px w-8 bg-primary/60" />
      {children}
    </div>
  );
}

/* ---------------- COURSES ---------------- */
function Courses() {
  const items = [
    {
      title: "English Language",
      sub: "London theme · IELTS · CEFR · SAT",
      image: courseEnglish,
      icon: Globe,
      tags: ["IELTS", "CEFR", "SAT"],
      features: ["Beginner to Advanced", "IELTS Preparation", "Speaking Practice"],
    },
    {
      title: "Russian Language",
      sub: "Moscow theme · Grammar · Speaking",
      image: courseRussian,
      icon: BookOpen,
      tags: ["Grammar", "Speaking"],
      features: ["Daily Communication", "Grammar Mastery", "Real-life Practice"],
    },
    {
      title: "Mental Arithmetic",
      sub: "Brain · Mantiq · Tezkor hisob",
      image: courseMental,
      icon: Brain,
      tags: ["Tezkor hisob", "Mantiq"],
      features: ["Brain Development", "Fast Calculation", "Logical Thinking"],
    },
  ];
  return (
    <section id="courses" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>KURSLAR</SectionLabel>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
            Sizga mos <span className="text-gradient-gold italic">yo'nalishni</span> tanlang
          </h2>
          <p className="mt-4 text-muted-foreground">
            Har bir kurs halqaro standartlar va zamonaviy metodika asosida loyihalangan.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {items.map((c) => {
            const Icon = c.icon;
            return (
              <article
                key={c.title}
                className="group relative overflow-hidden rounded-[1.75rem] glass-strong transition-all duration-500 hover:-translate-y-2 hover:gold-glow"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E38] via-[#0B1E38]/40 to-transparent" />
                  <div className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-2xl bg-primary text-[#071326] shadow-[0_10px_30px_-10px_rgba(245,184,31,0.7)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="absolute right-5 top-5 flex flex-wrap justify-end gap-1.5">
                    {c.tags.map((t) => (
                      <span key={t} className="rounded-full glass px-2.5 py-1 text-[10px] tracking-wider text-primary">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl font-bold">{c.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{c.sub}</p>
                  <ul className="mt-5 space-y-2.5">
                    {c.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary" /> {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
                  >
                    Batafsil <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; 

/* ---------------- RESULTS ---------------- */
function Results() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const results = [
    { name: "Aziza Karimova", badge: "IELTS 7.5", year: "2025", img: student1 },
    { name: "Jasur Tursunov", badge: "IELTS 8.0", year: "2025", img: student2 },
    { name: "Madina Nazarova", badge: "CEFR C1", year: "2024", img: student3 },
    { name: "Otabek Yusupov", badge: "CEFR C1", year: "2025", img: student4 },
    { name: "Shahnoza Olimova", badge: "IELTS 7.0", year: "2024", img: student1 },
    { name: "Sardor Rasulov", badge: "CEFR B2", year: "2025", img: student2 },
  ];

  // Slayderni boshqarish funksiyasi
  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320; 
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="results" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* TEPA QISMI: Sarlavha va Navigatsiya tugmalari */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <SectionLabel>NATIJALAR</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
              O'quvchilarimiz <span className="text-gradient-gold italic">natijalari</span>
            </h2>
          </div>
          
          <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto">
            <p className="text-muted-foreground text-sm max-w-xs hidden md:block">
              Yuzlab o'quvchilarimiz halqaro imtihonlardan yuqori natijalarni qo'lga kiritmoqda.
            </p>
            
            {/* PREMIYUM STRELKALAR — eski scrollbar o'rniga boshqaruv */}
            <div className="flex gap-2">
              <button
                onClick={() => handleScroll("left")}
                className="h-12 w-12 rounded-full border border-white/10 glass hover:border-[var(--border-gold)] text-white hover:text-primary transition-all duration-300 grid place-items-center group"
                aria-label="Oldingisi"
              >
                <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                className="h-12 w-12 rounded-full border border-white/10 glass hover:border-[var(--border-gold)] text-white hover:text-primary transition-all duration-300 grid place-items-center group"
                aria-label="Keyingisi"
              >
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* KARTALAR RO'YXATI */}
        <div 
          ref={scrollRef}
          className="mt-12 -mx-6 px-6 flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style>{`
            div::-webkit-scrollbar { display: none; }
          `}</style>

          {results.map((r, i) => (
            <article
              key={i}
              className="group relative w-72 shrink-0 overflow-hidden rounded-3xl glass-strong transition-all duration-500 hover:-translate-y-2 hover:gold-glow snap-start"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={r.img} 
                  alt={r.name} 
                  width={768} 
                  height={896}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071326] via-[#071326]/30 to-transparent" />
                
                {/* NISBATI / BADGE */}
                <div 
                  className="absolute top-4 right-4 rounded-full px-3 py-1 text-[11px] font-bold tracking-wider text-[#071326] shadow-md"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  {r.badge}
                </div>
                
                {/* MATNLARI */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="text-base font-semibold tracking-wide text-white group-hover:text-primary transition-colors duration-300">
                    {r.name}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">{r.badge} · {r.year}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
        
      </div>
    </section>
  );
}
/* ---------------- GALLERY ---------------- */
function Gallery() {
  // Tanlangan rasmni saqlash uchun holat (state)
  const [activeImg, setActiveImg] = useState<{ src: string; alt: string } | null>(null);

  const imgs = [
    { src: gallery1, alt: "Sinfxona darslari", span: "md:col-span-2 md:row-span-2" },
    { src: gallery2, alt: "Speaking sessiya", span: "" },
    { src: gallery3, alt: "Faol o'quvchilar", span: "" },
    { src: gallery4, alt: "Sertifikat marosimi", span: "md:col-span-2" },
  ];

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>GALEREYA</SectionLabel>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
            Markazimizdan <span className="text-gradient-gold italic">lavhalar</span>
          </h2>
        </div>

        {/* RASMLAR SETKASI */}
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[220px]">
          {imgs.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImg({ src: img.src, alt: img.alt })}
              className={`group relative overflow-hidden rounded-3xl glass text-left ${img.span} w-full h-full`}
            >
              <img src={img.src} alt={img.alt} loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="text-sm font-semibold text-white">{img.alt}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 🖼️ RASMNI KATALASHTIRIB KO'RSATISH MODAL OYNASI (LIGHTBOX) */}
      {activeImg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          {/* Orqa fon bosilganda ham oyna yopiladi */}
          <div className="absolute inset-0" onClick={() => setActiveImg(null)} />
          
          <div className="relative max-w-5xl max-h-[85vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-10">
            {/* ❌ EXIT (YOPISH) TUGMASI */}
            <button
              onClick={() => setActiveImg(null)}
              className="absolute top-4 right-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white hover:bg-primary hover:text-[#071326] transition-all duration-300"
              aria-label="Yopish"
            >
              {/* Sizda import qilingan X ikonkasini ishlatamiz */}
              <X className="h-5 w-5" />
            </button>

            {/* Kattalashgan rasm */}
            <img
              src={activeImg.src}
              alt={activeImg.alt}
              className="w-full h-full object-contain max-h-[85vh]"
            />
            
            {/* Pastki qismidagi matn paneli */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 pt-12">
              <p className="text-white text-base font-medium">{activeImg.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const data = [
    {
      name: "Dilnoza Karimova",
      course: "IELTS kursi",
      img: student1,
      text: "Maris Academy menga IELTS 7.5 olishimga yordam berdi. Mentorlarning yondashuvi va metodikasi haqiqatan ham boshqacha — har bir o'quvchiga alohida e'tibor qaratiladi.",
    },
    {
      name: "Bekzod Yusupov",
      course: "General English",
      img: student2,
      text: "Speaking darajam tubdan o'zgardi. Yarim yil ichida professional muloqot qila oladigan darajaga yetdim. Bu yerda har bir dars sifatga yo'naltirilgan.",
    },
    {
      name: "Sevinch Olimova",
      course: "Russian Language",
      img: student3,
      text: "Rus tili kursi juda kuchli. Kichik guruh va sifatli darslar tufayli tezda natija ko'rdim. Maris Academy haqiqatan ham premium ta'lim markazi.",
    },
  ];
  const [active, setActive] = useState(0);
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>FIKRLAR</SectionLabel>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
            O'quvchilarimiz <span className="text-gradient-gold italic">fikri</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {data.map((t, i) => (
            <article
              key={i}
              onMouseEnter={() => setActive(i)}
              className={`relative rounded-3xl glass-strong p-7 transition-all duration-500 ${
                active === i ? "gold-glow -translate-y-1" : ""
              }`}
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-primary/15" />
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <img src={t.img} alt={t.name} width={48} height={48}
                  loading="lazy" className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/30" />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.course}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- LOCATION ---------------- */
function Location() {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>LOKATSIYA</SectionLabel>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
            Bizni <span className="text-gradient-gold italic">toping</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] glass-strong p-8">
            <h3 className="font-display text-2xl font-bold">Aloqa ma'lumotlari</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Bizga tashrif buyuring yoki qo'ng'iroq qiling — biz har doim yordam berishga tayyormiz.
            </p>
            <ul className="mt-7 space-y-5">
              <ContactRow icon={MapPin} label="Manzil" value="G'azalkent Shahri" />
              <ContactRow icon={Phone} label="Telefon" value="+998 77 720 40 40" />
              <ContactRow icon={Mail} label="Email" value="info@marisacademy.uz" />
              <ContactRow icon={Clock} label="Ish vaqti" value="Du - Sh: 09:00 — 20:00 · Yak: dam" />
            </ul>
            <a
              href="https://www.google.com/maps/place/%D0%A0%D0%B5%D0%B4%D0%B0%D0%BA%D1%86%D0%B8%D1%8F+%D0%93%D0%B0%D0%B7%D0%B5%D1%82%D1%8B+%22%D0%9A%D0%90%D0%9C%D0%A3%D0%9D%D0%98%D0%97%D0%9C+%D0%A3%D0%A7%D0%A3%D0%9D%22+%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%A4%D1%80%D1%83%D0%BD%D0%B7%D0%B5/@41.5662634,69.7619532,42m/data=!3m1!1e3!4m6!3m5!1s0x38af1d93899e2207:0x554a18698a29c0df!8m2!3d41.5663326!4d69.7619183!16s%2Fg%2F11jybqx9d9?authuser=0&entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="btn-gold mt-8 inline-flex items-center gap-2"
            >
              Yo'nalishni ochish <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] glass-strong min-h-[420px]">
            <iframe
              title="Maris Academy lokatsiya"
              className="absolute inset-0 h-full w-full grayscale opacity-90"
              src="https://www.google.com/maps?q=Tashkent,Yunusobod&output=embed"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[var(--border-gold)] rounded-[2rem]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <li className="flex items-start gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/15 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="mt-0.5 text-sm font-medium">{value}</div>
      </div>
    </li>
  );
}

/* ---------------- BLOG ---------------- */
function Blog() {
  const posts = [
    { img: blog1, date: "12 Iyun 2026", title: "Ingliz tilini 3 oyda qanday yaxshilash mumkin?" },
    { img: blog2, date: "05 Iyun 2026", title: "IELTS 7+ olish uchun 7 ta professional maslahat" },
    { img: blog3, date: "28 May 2026", title: "Mental arifmetika bolaning miyasini qanday rivojlantiradi" },
  ];
  return (
    <section id="blog" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-2">
          <div>
            <SectionLabel>BLOG</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
              Foydali <span className="text-gradient-gold italic">maqolalar</span>
            </h2>
          </div>
          <p className="text-muted-foreground md:text-right">
            Ta'lim, motivatsiya va imtihonlarga tayyorgarlik bo'yicha eng so'nggi materiallar.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-3">
          {posts.map((p, i) => (
            <article key={i} className="group rounded-3xl glass-strong overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:gold-glow">
              <div className="relative h-52 overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E38] via-transparent to-transparent" />
              </div>
              <div className="p-7">
                <div className="text-xs tracking-wider text-primary">{p.date}</div>
                <h3 className="mt-3 font-display text-xl font-bold leading-snug">{p.title}</h3>
                <a href="#" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3">
                  Read more <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const items = [
    { q: "Kurs qancha davom etadi?", a: "Tanlangan yo'nalish va darajaga qarab 3 oydan 12 oygacha. Har bir kurs aniq natija va o'lchanadigan maqsadlarga ega." },
    { q: "Darslar haftada necha marta?", a: "Standart format — haftada 3 marta, 90 daqiqadan. Intensiv guruhlar uchun 5 marta variant ham mavjud." },
    { q: "To'lov qanday amalga oshiriladi?", a: "Naqd, plastik karta, online to'lov va bo'lib to'lash variantlari mavjud. Birinchi to'lovdan oldin bepul maslahat bering." },
    { q: "Sertifikat beriladimi?", a: "Ha, kursni muvaffaqiyatli yakunlagan har bir o'quvchiga Maris Academy rasmiy sertifikati taqdim etiladi." },
    { q: "Bepul sinov darsi mavjudmi?", a: "Albatta. Bizning saytdan ro'yxatdan o'tib, bepul sinov darsiga yozilishingiz mumkin — hech qanday majburiyatsiz." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
            Tez-tez so'raladigan <span className="text-gradient-gold italic">savollar</span>
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`rounded-2xl glass-strong overflow-hidden transition-all duration-300 ${isOpen ? "gold-glow" : ""}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-medium text-base">{it.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className="grid transition-all duration-500"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">{it.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] glass-strong p-10 sm:p-16 text-center">
          <div className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <GridPattern />
          </div>

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" /> BEPUL SINOV DARSI
            </div>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-6xl">
              Kelajagingizga <span className="text-gradient-gold italic">bugundan</span>
              <br className="hidden sm:block" /> investitsiya qiling
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Bepul sinov darsiga yoziling va ta'lim sifatini o'zingiz baholang.
              Hech qanday majburiyat yo'q — faqat sof natija.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a href="tel:+998901234567" className="btn-gold inline-flex items-center gap-2 text-base animate-pulse-glow">
                Ro'yxatdan o'tish <ArrowRight className="h-4 w-4" />
              </a>
              <a href="tel:+998901234567" className="btn-ghost-gold inline-flex items-center gap-2 text-base">
                <Phone className="h-4 w-4" /> +998 77 720 40 40
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="relative border-t border-[var(--border-gold)] py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2 lg:grid-cols-4">
        
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl text-[#071326] font-black text-xl"
                 style={{ background: "var(--gradient-gold)" }}>M</div>
            <div className="font-display text-lg font-bold tracking-wide">MARIS ACADEMY</div>
          </div>
          <p className="mt-5 text-sm text-muted-foreground max-w-xs">
            Ingliz tili, rus tili va mental arifmetika bo'yicha zamonaviy ta'lim markazi.
          </p>

          <div className="mt-6 flex gap-3">
            {[
              {
                name: "Telegram",
                url: "https://t.me/maris_academy", 
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.198 2.43a.5.5 0 0 0-.53-.08L2.55 10.22a.5.5 0 0 0 .01.93l4.75 1.58 3.51 5.26a.5.5 0 0 0 .83-.04l2.45-3.68 4.88 3.25a.5.5 0 0 0 .78-.32l3-14.5a.5.5 0 0 0-.56-.57Z"/>
                    <path d="M8.13 12.35 17 6"/>
                  </svg>
                )
              },
              {
                name: "Instagram",
                url: "https://www.instagram.com/maris.academy.uz/", 
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                )
              },
              
              
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_15px_rgba(245,184,31,0.4)]"
              >
                {social.svg}
              </a>
            ))}
          </div>
        </div>

        {/* NAVIGATSIYA */}
        <FooterCol title="Navigatsiya" links={typeof NAV !== 'undefined' ? NAV.map((n) => n.label) : ["Bosh sahifa", "Kurslar", "Aloqa"]} />
        
        {/* KURSLAR */}
        <FooterCol title="Kurslar" links={["English Language", "Russian Language", "Mental Arithmetic", "IELTS Preparation", "SAT Preparation"]} />
        
        {/* ALOQA MA'LUMOTLARI */}
        <div>
          <div className="text-sm font-semibold tracking-wider text-primary">Aloqa</div>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /> 
              <span>G'azalkent Shahri, Raimqulov ko‘chasi</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" /> 
              <span>+998 77 720 40 40</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" /> 
              <span>info@marisacademy.uz</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="h-4 w-4 mt-0.5 text-primary shrink-0" /> 
              <span>Du-Sh 09:00 — 20:00</span>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mx-auto mt-12 max-w-7xl border-t border-[var(--border-gold)] px-6 pt-6">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Maris Academy. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="text-sm font-semibold tracking-wider text-primary">{title}</div>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}