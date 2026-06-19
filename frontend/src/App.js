import { useEffect, useRef, useState } from "react";
import "@/App.css";

const HERO_IMG =
  "https://customer-assets.emergentagent.com/job_design-nagpur/artifacts/bf5r62we_image.png";

const SERVICES = [
  { icon: "fa-house-chimney-window", title: "Residential Interior Design", desc: "Homes designed around how you actually live — warm, layered and uniquely yours." },
  { icon: "fa-building", title: "Commercial Interior Design", desc: "Workspaces, retail and hospitality interiors engineered for brand & performance." },
  { icon: "fa-kitchen-set", title: "Modular Kitchen Design", desc: "Premium modular kitchens with German hardware, soft-close finishes & warm ambient light." },
  { icon: "fa-bed", title: "Bedroom Design", desc: "Restful sanctuaries with custom wardrobes, mood lighting and tactile finishes." },
  { icon: "fa-couch", title: "Living Room Design", desc: "Statement living spaces that anchor the home — sculptural, social, serene." },
  { icon: "fa-vector-square", title: "Space Planning", desc: "Smart layouts that unlock light, flow and function in every square foot." },
  { icon: "fa-chair", title: "Furniture Design", desc: "Custom-built furniture in solid wood, veneer & metal — designed to the millimetre." },
  { icon: "fa-screwdriver-wrench", title: "Renovation & Remodeling", desc: "Refresh, restructure or completely reimagine an existing space — with zero chaos." },
  { icon: "fa-cube", title: "3D Design Visualization", desc: "Photoreal 3D walkthroughs so you can see your home before a single nail is hammered." },
  { icon: "fa-compass-drafting", title: "Architectural Consultancy", desc: "Site planning, elevation design and architectural advisory for new builds & renovations." },
];

const PROJECTS = [
  { cat: "residential", catLabel: "Residential", title: "The Walnut Residence", meta: "Nagpur · 3,200 sq.ft.", img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80" },
  { cat: "kitchen", catLabel: "Kitchen", title: "Charcoal & Oak Kitchen", meta: "Manish Nagar · Modular", img: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1200&q=80" },
  { cat: "commercial", catLabel: "Commercial", title: "Aurum Workspace", meta: "Civil Lines · 8,500 sq.ft.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" },
  { cat: "bedroom", catLabel: "Bedroom", title: "Ivory Master Suite", meta: "Besa Road · Bespoke", img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80" },
  { cat: "architecture", catLabel: "Architecture", title: "Stone & Light Villa", meta: "Wardha Road · Ground + 2", img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80" },
  { cat: "office", catLabel: "Office", title: "Atelier Office", meta: "Dharampeth · 4,200 sq.ft.", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80" },
  { cat: "residential", catLabel: "Residential", title: "Sage & Brass Apartment", meta: "Ramdaspeth · 1,900 sq.ft.", img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80" },
  { cat: "kitchen", catLabel: "Kitchen", title: "The Smoked Walnut", meta: "Besa · L-Shape Modular", img: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1200&q=80" },
  { cat: "commercial", catLabel: "Commercial", title: "Ember Boutique", meta: "Sitabuldi · Retail Flagship", img: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=1200&q=80" },
];

const FILTERS = [
  { id: "all", label: "All" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "kitchen", label: "Kitchen" },
  { id: "bedroom", label: "Bedroom" },
  { id: "office", label: "Office" },
  { id: "architecture", label: "Architecture" },
];

const GALLERY = [
  { img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80", alt: "Luxury living room with warm wood", cls: "" },
  { img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80", alt: "Modern bedroom with golden light", cls: "tall" },
  { img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80", alt: "Charcoal kitchen detail", cls: "" },
  { img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80", alt: "Luxury home interior", cls: "wide" },
  { img: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1400&q=80", alt: "Modern hallway design", cls: "" },
  { img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80", alt: "Wood texture interior", cls: "tall" },
  { img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80", alt: "Bathroom luxury design", cls: "" },
  { img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80", alt: "Modern dining", cls: "" },
];

const WHY = [
  { n: "01", t: "Customized Designs", d: "Every brief is treated as a clean slate — no recycled templates, no shortcuts." },
  { n: "02", t: "End-to-End Execution", d: "Design, procurement, site supervision & handover — all under one roof." },
  { n: "03", t: "Transparent Pricing", d: "Itemised quotations, locked rates and zero hidden costs — ever." },
  { n: "04", t: "Premium Materials", d: "We source veneers, stones, hardware & finishes from trusted global & local partners." },
  { n: "05", t: "Timely Delivery", d: "Defined timelines, weekly trackers and on-time handovers — in writing." },
  { n: "06", t: "Experienced Team", d: "Architects, designers & craftsmen with 12+ years of collective expertise." },
];

const PROCESS = [
  { n: "01", t: "Consultation", d: "Understand your brief, lifestyle & budget." },
  { n: "02", t: "Site Visit", d: "Survey, measure & study light, ventilation, structure." },
  { n: "03", t: "Design Concept", d: "Mood boards, layouts & material direction." },
  { n: "04", t: "3D Visualization", d: "Photoreal walkthroughs of every key space." },
  { n: "05", t: "Material Selection", d: "Curated finishes, samples & tactile reviews." },
  { n: "06", t: "Execution", d: "On-site project management & quality control." },
  { n: "07", t: "Final Handover", d: "Snag-free, styled & ready to live in." },
];

const TESTIMONIALS = [
  { q: "WellBeing transformed our 3BHK into something out of a magazine. The attention to wood grain, lighting and material was extraordinary — and they finished ahead of schedule.", name: "Aarti & Rohit Deshmukh", meta: "Residential Project · Manish Nagar" },
  { q: "From the very first consultation, it felt like a creative partnership. Our kitchen feels warm, intentional and beautifully lit — exactly what we asked for.", name: "Neha Kapoor", meta: "Modular Kitchen · Besa Road" },
  { q: "They designed our flagship boutique with such restraint and elegance. Footfall and conversions have meaningfully improved since the redesign.", name: "Ishaan Mehta", meta: "Retail Interior · Sitabuldi" },
  { q: "Transparent pricing, world-class execution, and a team that genuinely cares about the smallest joinery detail. We highly recommend them.", name: "Dr. Sameer Joshi", meta: "Clinic Interior · Dharampeth" },
];

const FAQS = [
  { q: "How long does an interior project take?", a: "Most residential projects take 8–14 weeks from sign-off to handover, depending on scope and size. Commercial fit-outs typically range 10–20 weeks. We share a written timeline before work begins." },
  { q: "Do you provide 3D designs?", a: "Yes. Every project includes photoreal 3D walkthroughs of all key spaces, so you can experience finishes, lighting and proportions before execution." },
  { q: "Do you handle complete execution?", a: "Absolutely. We offer turnkey execution including civil work, carpentry, electricals, plumbing, false ceilings, painting, furnishings and styling — all supervised in-house." },
  { q: "What areas do you serve?", a: "We are headquartered in Nagpur and serve all of Maharashtra. We also take on select projects pan-India for residential, commercial and hospitality clients." },
  { q: "Do you offer modular kitchen solutions?", a: "Yes — modular kitchens are one of our specialities. We design and install premium kitchens with German hardware, soft-close mechanisms and warm ambient lighting." },
];

const STATS = [
  { target: 180, label: "Residential Projects" },
  { target: 70, label: "Commercial Projects" },
  { target: 320, label: "Happy Clients" },
  { target: 500, label: "Design Consultations" },
];

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showTop, setShowTop] = useState(false);
  const [filter, setFilter] = useState("all");
  const [tIndex, setTIndex] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const [preloading, setPreloading] = useState(true);
  const [formStatus, setFormStatus] = useState({ msg: "", error: false });
  const [year] = useState(new Date().getFullYear());

  const heroBgRef = useRef(null);
  const tTimerRef = useRef(null);

  // Preloader
  useEffect(() => {
    const t = setTimeout(() => setPreloading(false), 700);
    return () => clearTimeout(t);
  }, []);

  // Scroll handler: navbar state, active section, float-top, hero parallax
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 60);
        setShowTop(y > 600);

        // Active section
        const pos = y + 120;
        const sections = document.querySelectorAll("section[id]");
        sections.forEach((sec) => {
          if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
            setActiveSection(sec.id);
          }
        });

        // Hero parallax
        const bg = heroBgRef.current;
        if (bg && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          if (y === 0) {
            bg.style.animationPlayState = "running";
            bg.style.transform = "";
          } else if (y < window.innerHeight * 1.2) {
            bg.style.animationPlayState = "paused";
            const scale = 1.06 + Math.min(y / 5000, 0.08);
            const shift = y * 0.22;
            bg.style.transform = `translateY(${shift}px) scale(${scale})`;
          }
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reveal-on-scroll
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Stats counter
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseInt(el.getAttribute("data-target"), 10) || 0;
          let cur = 0;
          const step = Math.max(1, Math.ceil(target / 70));
          const tick = () => {
            cur += step;
            if (cur >= target) {
              el.textContent = target;
              return;
            }
            el.textContent = cur;
            requestAnimationFrame(tick);
          };
          tick();
          obs.unobserve(el);
        });
      },
      { threshold: 0.35 }
    );
    document.querySelectorAll(".stat-num").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Testimonial auto-slide
  useEffect(() => {
    tTimerRef.current = setInterval(() => {
      setTIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6500);
    return () => clearInterval(tTimerRef.current);
  }, []);

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
  }, [lightbox]);

  // ESC closes lightbox
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const handleNavClick = (id) => {
    setNavOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value.trim(),
      phone: form.phone.value.trim(),
      email: form.email.value.trim(),
      service: form.service.value,
      message: form.message.value.trim(),
    };
    if (!data.name || !data.phone || !data.email || !data.service || !data.message) {
      setFormStatus({ msg: "Please fill in all fields before sending.", error: true });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setFormStatus({ msg: "Please enter a valid email address.", error: true });
      return;
    }
    setFormStatus({ msg: "Sending...", error: false });
    setTimeout(() => {
      setFormStatus({
        msg: `Thank you, ${data.name.split(" ")[0]} — we'll reach out within one working day.`,
        error: false,
      });
      form.reset();
    }, 900);
  };

  const resetTestimonialTimer = () => {
    clearInterval(tTimerRef.current);
    tTimerRef.current = setInterval(() => {
      setTIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6500);
  };
  const goT = (i) => {
    setTIndex(((i % TESTIMONIALS.length) + TESTIMONIALS.length) % TESTIMONIALS.length);
    resetTestimonialTimer();
  };

  return (
    <>
      {/* Preloader */}
      <div className={`preloader${preloading ? "" : " is-hidden"}`} aria-hidden="true">
        <div className="preloader-inner">
          <div className="preloader-logo">WellBeing</div>
          <div className="preloader-bar"><span></span></div>
        </div>
      </div>

      {/* Navigation */}
      <header
        className={`navbar${scrolled ? " scrolled" : ""}${navOpen ? " is-open" : ""}`}
        data-testid="nav-bar"
      >
        <div className="nav-container">
          <a href="#home" className="brand" onClick={(e) => { e.preventDefault(); handleNavClick("home"); }}>
            <span className="brand-mark">W</span>
            <span className="brand-text">WellBeing<em>Design</em></span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            {["home", "about", "services", "projects", "gallery", "testimonials", "faq", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`nav-link${activeSection === id ? " active" : ""}`}
                data-testid={`nav-link-${id}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(id); }}
              >
                {id === "faq" ? "FAQ" : id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </nav>

          <a href="tel:+919923028897" className="nav-cta" data-testid="nav-call-cta">
            <i className="fa-solid fa-phone"></i>
            <span>+91 99230 28897</span>
          </a>

          <button
            className={`nav-toggle${navOpen ? " is-open" : ""}`}
            aria-label="Toggle navigation"
            aria-expanded={navOpen}
            data-testid="nav-toggle-btn"
            onClick={() => setNavOpen((o) => !o)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="home" data-testid="hero-section">
        <div
          className="hero-bg"
          ref={heroBgRef}
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-grain"></div>

        <div className="hero-content">
          <div className="eyebrow reveal">
            <span className="eyebrow-line"></span>
            <span>Interior Design · Architecture · Nagpur</span>
            <span className="eyebrow-line"></span>
          </div>
          <h1 className="hero-title reveal">
            Transforming Spaces<br />
            Into <em>Timeless Experiences</em>
          </h1>
          <p className="hero-sub reveal">
            We craft beautiful, functional and inspiring interiors that reflect your lifestyle, vision and personality — rooted in detail, lit by warmth.
          </p>

          <div className="hero-cta reveal">
            <a href="#contact" className="btn btn-gold" data-testid="hero-cta-consult" onClick={(e) => { e.preventDefault(); handleNavClick("contact"); }}>
              <span>Get Free Consultation</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#projects" className="btn btn-ghost" data-testid="hero-cta-projects" onClick={(e) => { e.preventDefault(); handleNavClick("projects"); }}>
              <span>View Projects</span>
            </a>
          </div>

          <div className="hero-meta reveal">
            <div><strong>12+</strong><span>Years of Craft</span></div>
            <div><strong>250+</strong><span>Spaces Designed</span></div>
            <div><strong>5.0</strong><span>Client Rating</span></div>
          </div>
        </div>

        <a href="#about" className="hero-scroll" aria-label="Scroll to content" onClick={(e) => { e.preventDefault(); handleNavClick("about"); }}>
          <span></span>
          <p>Scroll</p>
        </a>
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["Residential Interiors", "Modular Kitchens", "Commercial Spaces", "Architectural Consultancy", "3D Visualization", "Renovation"].flatMap((s, i) => [
              <span key={`${k}-${i}-s`}>{s}</span>,
              <i key={`${k}-${i}-i`}>&#9826;</i>,
            ])
          )}
        </div>
      </div>

      {/* STATS */}
      <section className="stats" aria-label="Studio statistics">
        <div className="container stats-grid">
          {STATS.map((s) => (
            <div className="stat-item reveal" key={s.label}>
              <div className="stat-num" data-target={s.target}>0</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="container about-grid">
          <div className="about-media reveal">
            <div
              className="about-image"
              style={{ backgroundImage: `url(https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=80)` }}
            ></div>
            <div className="about-badge">
              <strong>Est. 2013</strong>
              <span>Nagpur, India</span>
            </div>
            <div className="about-accent" aria-hidden="true"></div>
          </div>

          <div className="about-text">
            <div className="section-eyebrow reveal">
              <span className="eyebrow-line"></span>
              <span>About the Studio</span>
            </div>
            <h2 className="section-title reveal">
              A studio of <em>quiet luxury</em> — designing spaces that breathe, glow and last.
            </h2>
            <p className="reveal">
              WellBeing Design is a professional interior design and architectural firm based in Nagpur. We specialize in creating elegant residential and commercial spaces through innovative planning, premium materials, modern aesthetics and functional design solutions.
            </p>
            <p className="reveal">
              Our goal is to transform ordinary spaces into inspiring environments that improve everyday living — balancing warm wood, soft golden light and architectural restraint.
            </p>

            <ul className="about-points reveal">
              <li><i className="fa-solid fa-check"></i> Bespoke design language for every client</li>
              <li><i className="fa-solid fa-check"></i> In-house architects, designers &amp; execution team</li>
              <li><i className="fa-solid fa-check"></i> Transparent pricing &amp; on-site supervision</li>
            </ul>

            <div className="about-cta reveal">
              <a href="#contact" className="btn btn-gold" onClick={(e) => { e.preventDefault(); handleNavClick("contact"); }}>
                <span>Begin Your Project</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a href="tel:+919923028897" className="btn-text">
                <i className="fa-solid fa-phone"></i> +91 99230 28897
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-head">
            <div className="section-eyebrow reveal">
              <span className="eyebrow-line"></span>
              <span>What We Do</span>
            </div>
            <h2 className="section-title reveal">Services crafted for spaces that <em>matter</em>.</h2>
            <p className="section-sub reveal">
              From the first sketch to the last switch — we handle every discipline of interior &amp; architectural design under one roof.
            </p>
          </div>

          <div className="services-grid">
            {SERVICES.map((s) => (
              <article className="service-card reveal" key={s.title} data-testid={`service-${s.title.replace(/\s+/g, "-").toLowerCase()}`}>
                <div className="service-icon"><i className={`fa-solid ${s.icon}`}></i></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="service-arrow"><i className="fa-solid fa-arrow-up-right"></i></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects" id="projects">
        <div className="container">
          <div className="section-head">
            <div className="section-eyebrow reveal">
              <span className="eyebrow-line"></span>
              <span>Selected Projects</span>
            </div>
            <h2 className="section-title reveal">A portfolio shaped by <em>restraint</em>, warmth and craft.</h2>
          </div>

          <div className="project-filters reveal">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                className={`filter-btn${filter === f.id ? " active" : ""}`}
                data-testid={`filter-${f.id}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {PROJECTS.map((p) => (
              <a
                key={p.title}
                href="#"
                className={`project-card reveal${filter !== "all" && p.cat !== filter ? " is-hidden" : ""}`}
                onClick={(e) => e.preventDefault()}
                data-testid={`project-${p.title.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <div className="project-image" style={{ backgroundImage: `url(${p.img})` }}></div>
                <div className="project-info">
                  <span className="project-cat">{p.catLabel}</span>
                  <h3>{p.title}</h3>
                  <p>{p.meta}</p>
                </div>
                <span className="project-arrow"><i className="fa-solid fa-arrow-up-right"></i></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery" id="gallery">
        <div className="container">
          <div className="section-head">
            <div className="section-eyebrow reveal">
              <span className="eyebrow-line"></span>
              <span>Gallery</span>
            </div>
            <h2 className="section-title reveal">Moments of <em>material, light &amp; detail</em>.</h2>
          </div>

          <div className="masonry">
            {GALLERY.map((g, i) => (
              <div
                key={i}
                className={`masonry-item reveal ${g.cls}`}
                onClick={() => setLightbox(g.img)}
                data-testid={`gallery-item-${i}`}
              >
                <img src={g.img.replace("w=1400", "w=900")} alt={g.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <div
        className={`lightbox${lightbox ? " is-open" : ""}`}
        aria-hidden={!lightbox}
        onClick={(e) => { if (e.target.classList.contains("lightbox")) setLightbox(null); }}
      >
        <button className="lightbox-close" aria-label="Close" onClick={() => setLightbox(null)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        {lightbox && <img src={lightbox} alt="Project detail" />}
      </div>

      {/* WHY */}
      <section className="why">
        <div className="container">
          <div className="section-head">
            <div className="section-eyebrow reveal">
              <span className="eyebrow-line"></span>
              <span>Why Choose Us</span>
            </div>
            <h2 className="section-title reveal">Every project is built on <em>six promises</em>.</h2>
          </div>
          <div className="why-grid">
            {WHY.map((w) => (
              <div className="why-card reveal" key={w.n}>
                <span className="why-num">{w.n}</span>
                <h3>{w.t}</h3>
                <p>{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process">
        <div className="container">
          <div className="section-head">
            <div className="section-eyebrow reveal">
              <span className="eyebrow-line"></span>
              <span>Our Process</span>
            </div>
            <h2 className="section-title reveal">A calm, considered path from <em>concept to keys</em>.</h2>
          </div>
          <ol className="process-list">
            {PROCESS.map((p) => (
              <li className="process-step reveal" key={p.n}>
                <span>{p.n}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="section-head">
            <div className="section-eyebrow reveal">
              <span className="eyebrow-line"></span>
              <span>Client Stories</span>
            </div>
            <h2 className="section-title reveal">Trusted by families &amp; founders across <em>Nagpur</em>.</h2>
          </div>

          <div
            className="testimonial-slider reveal"
            onMouseEnter={() => clearInterval(tTimerRef.current)}
            onMouseLeave={resetTestimonialTimer}
          >
            <div
              className="testimonial-track"
              style={{ transform: `translateX(-${tIndex * 100}%)` }}
            >
              {TESTIMONIALS.map((t, i) => (
                <article className="testimonial" key={i}>
                  <i className="fa-solid fa-quote-left quote-icon"></i>
                  <p>&quot;{t.q}&quot;</p>
                  <footer>
                    <strong>{t.name}</strong>
                    <span>{t.meta}</span>
                  </footer>
                </article>
              ))}
            </div>

            <div className="testimonial-controls">
              <button className="t-btn" aria-label="Previous testimonial" data-testid="testimonial-prev" onClick={() => goT(tIndex - 1)}>
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <div className="testimonial-dots" aria-hidden="true">
                {TESTIMONIALS.map((_, i) => (
                  <button key={i} className={i === tIndex ? "active" : ""} onClick={() => goT(i)} aria-label={`Testimonial ${i + 1}`}></button>
                ))}
              </div>
              <button className="t-btn" aria-label="Next testimonial" data-testid="testimonial-next" onClick={() => goT(tIndex + 1)}>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="container faq-grid">
          <div className="faq-intro">
            <div className="section-eyebrow reveal">
              <span className="eyebrow-line"></span>
              <span>FAQ</span>
            </div>
            <h2 className="section-title reveal">Questions, <em>answered</em>.</h2>
            <p className="reveal">Can&apos;t find what you&apos;re looking for? Reach out — we love a good design conversation.</p>
            <a href="#contact" className="btn btn-gold reveal" onClick={(e) => { e.preventDefault(); handleNavClick("contact"); }}>
              <span>Talk to a Designer</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className="faq-list">
            {FAQS.map((f, i) => (
              <details className="faq-item reveal" key={i} data-testid={`faq-${i}`}>
                <summary>
                  <span>{f.q}</span>
                  <i className="fa-solid fa-plus"></i>
                </summary>
                <div className="faq-body">
                  <p>{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="cta-strip">
        <div className="container cta-inner">
          <h2 className="reveal">Let&apos;s design a space you&apos;ll <em>love coming home to</em>.</h2>
          <a href="#contact" className="btn btn-gold reveal" onClick={(e) => { e.preventDefault(); handleNavClick("contact"); }}>
            <span>Book a Free Consultation</span>
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="section-eyebrow reveal">
              <span className="eyebrow-line"></span>
              <span>Contact</span>
            </div>
            <h2 className="section-title reveal">Let&apos;s begin your <em>next chapter</em>.</h2>
            <p className="reveal">Drop us a note about your space — we&apos;ll get back within one working day.</p>

            <ul className="contact-list reveal">
              <li>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <strong>Studio</strong>
                  <span>Manish Nagar / Besa Road,<br />Nagpur, Maharashtra</span>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <div>
                  <strong>Phone</strong>
                  <a href="tel:+919923028897">+91 99230 28897</a>
                </div>
              </li>
              <li>
                <i className="fa-brands fa-whatsapp"></i>
                <div>
                  <strong>WhatsApp</strong>
                  <a href="https://wa.me/919923028897" target="_blank" rel="noopener noreferrer">Chat with us</a>
                </div>
              </li>
              <li>
                <i className="fa-regular fa-clock"></i>
                <div>
                  <strong>Hours</strong>
                  <span>Mon – Sat · 10:00 AM — 7:30 PM</span>
                </div>
              </li>
            </ul>

            <div className="contact-socials reveal" aria-label="Social media">
              <a href="#" aria-label="Instagram" onClick={(e) => e.preventDefault()}><i className="fa-brands fa-instagram"></i></a>
              <a href="#" aria-label="Facebook" onClick={(e) => e.preventDefault()}><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" aria-label="LinkedIn" onClick={(e) => e.preventDefault()}><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#" aria-label="YouTube" onClick={(e) => e.preventDefault()}><i className="fa-brands fa-youtube"></i></a>
              <a href="#" aria-label="Pinterest" onClick={(e) => e.preventDefault()}><i className="fa-brands fa-pinterest-p"></i></a>
            </div>
          </div>

          <form className="contact-form reveal" onSubmit={handleSubmit} noValidate data-testid="contact-form">
            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" autoComplete="name" placeholder="Full name" data-testid="form-name" />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" autoComplete="tel" placeholder="+91" data-testid="form-phone" />
              </div>
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" autoComplete="email" placeholder="you@email.com" data-testid="form-email" />
            </div>

            <div className="field">
              <label htmlFor="service">Service of Interest</label>
              <select id="service" name="service" defaultValue="" data-testid="form-service">
                <option value="">Select a service</option>
                <option>Residential Interior Design</option>
                <option>Commercial Interior Design</option>
                <option>Modular Kitchen</option>
                <option>Renovation &amp; Remodeling</option>
                <option>Architectural Consultancy</option>
                <option>3D Visualization Only</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="message">Tell us about your space</label>
              <textarea id="message" name="message" rows="5" placeholder="Project type, size, timeline, vibe..." data-testid="form-message"></textarea>
            </div>

            <button type="submit" className="btn btn-gold btn-block" data-testid="form-submit">
              <span>Send Enquiry</span>
              <i className="fa-solid fa-arrow-right"></i>
            </button>

            <p
              className={`form-status${formStatus.error ? " error" : ""}`}
              role="status"
              aria-live="polite"
              data-testid="form-status"
            >
              {formStatus.msg}
            </p>
          </form>
        </div>

        <div className="map-wrap reveal">
          <iframe
            title="WellBeing Design location on Google Maps"
            src="https://www.google.com/maps?q=Manish%20Nagar%2C%20Nagpur%2C%20Maharashtra&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="#home" className="brand brand--footer" onClick={(e) => { e.preventDefault(); handleNavClick("home"); }}>
              <span className="brand-mark">W</span>
              <span className="brand-text">WellBeing<em>Design</em></span>
            </a>
            <p>A Nagpur-based interior design &amp; architecture studio crafting timeless, light-filled spaces since 2013.</p>
            <div className="contact-socials" aria-label="Social media">
              <a href="#" aria-label="Instagram" onClick={(e) => e.preventDefault()}><i className="fa-brands fa-instagram"></i></a>
              <a href="#" aria-label="Facebook" onClick={(e) => e.preventDefault()}><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" aria-label="LinkedIn" onClick={(e) => e.preventDefault()}><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#" aria-label="YouTube" onClick={(e) => e.preventDefault()}><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {["home", "about", "projects", "gallery", "testimonials", "faq"].map((id) => (
                <li key={id}>
                  <a href={`#${id}`} onClick={(e) => { e.preventDefault(); handleNavClick(id); }}>
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick("services"); }}>Residential Interiors</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick("services"); }}>Commercial Interiors</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick("services"); }}>Modular Kitchens</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick("services"); }}>Architecture</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick("services"); }}>3D Visualization</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick("services"); }}>Renovation</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Get in Touch</h4>
            <ul className="footer-contact">
              <li><i className="fa-solid fa-location-dot"></i> Manish Nagar / Besa Road, Nagpur</li>
              <li><i className="fa-solid fa-phone"></i> <a href="tel:+919923028897">+91 99230 28897</a></li>
              <li><i className="fa-brands fa-whatsapp"></i> <a href="https://wa.me/919923028897" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><i className="fa-regular fa-clock"></i> Mon – Sat · 10AM — 7:30PM</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} WellBeing Design. All rights reserved.</p>
          <p>Crafted with warmth in Nagpur.</p>
        </div>
      </footer>

      {/* Floating buttons */}
      <a
        href="https://wa.me/919923028897?text=Hi%20WellBeing%20Design%2C%20I'd%20like%20a%20free%20consultation"
        className="float-btn float-wa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        data-testid="float-whatsapp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
      <a href="tel:+919923028897" className="float-btn float-call" aria-label="Call us" data-testid="float-call">
        <i className="fa-solid fa-phone"></i>
      </a>
      <button
        className={`float-btn float-top${showTop ? " is-visible" : ""}`}
        aria-label="Back to top"
        data-testid="float-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </>
  );
}

export default App;
