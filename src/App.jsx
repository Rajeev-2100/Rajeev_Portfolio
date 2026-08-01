import ecommerce from "./images/ecommercePhoto.png";
import crmApplication from "./images/crmApplicationPhoto.png";
import workAsana from "./images/workAsanaPhoto.png";
import { useState, useEffect } from "react";

// Reverse chronological order: Workasana -> CRM -> Ecommerce
const projects = [
  {
    title: "workAsana",
    desc: "A MERN-stack team productivity dashboard for managing projects, tasks, and teams. Features JWT auth, full CRUD operations, real-time analytics, and a responsive Bootstrap UI deployed on Vercel.",
    tech: [
      "React",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST APIs",
      "Context API",
      "JWT",
      "bcrypt",
      "Authentication",
      "Landing Page",
      "Chart.js",
    ],
    codeUrl: "https://github.com/Rajeev-2100/workasana_FE",
    demoUrl: "https://workasana-fe.vercel.app/",
    src_Image: workAsana,
  },
  {
    title: "SmartLead CRM",
    desc: "A full-stack CRM dashboard for managing sales pipelines, agents, and lead analytics. Features dynamic filtering, comment history, priority tracking, and Chart.js visualizations integrated with a RESTful backend.",
    tech: [
      "React",
      "Bootstrap",
      "React Router",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Authentication",
      "Landing Page",
      "Chart.js",
    ],
    codeUrl: "https://github.com/Rajeev-2100/SmartLeadCRM_Frontend.git",
    demoUrl: "https://smartlead-crm-frontend-r78f.vercel.app/",
    src_Image: crmApplication,
  },
  {
    title: "Modern Mart",
    desc: "A modern e-commerce frontend built with Vite & React, featuring category filtering, product browsing, cart state management, and a responsive UI wired to a scalable REST API backend.",
    tech: [
      "React",
      "Vite",
      "Bootstrap",
      "React Router",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Authentication",
      "Landing Page",
    ],
    codeUrl: "https://github.com/Rajeev-2100/ModernMart_Frontend.git",
    demoUrl: "https://modernmart-ecommerce-frontend.vercel.app/",
    src_Image: ecommerce,
  },
];

const skills = [
  { name: "React", icon: "⚛" },
  { name: "JavaScript", icon: "JS" },
  { name: "Node.js", icon: "🟩" },
  { name: "Express.js", icon: "EX" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Mongoose", icon: "M" },
  { name: "Bootstrap", icon: "B" },
  { name: "REST API", icon: "🔗" },
  { name: "Git", icon: "Git" },
  { name: "GitHub", icon: "GH" },
  { name: "Vercel", icon: "▲" },
  { name: "Authentication", icon: "auth" },
  { name: "JWT", icon: "jwt" },
];

const techIconMap = {
  React: "⚛",
  "Node.js": "N",
  MongoDB: "M",
  Express: "EX",
  "Express.js": "EX",
  Bootstrap: "B",
  "Chart.js": "📊",
  ChartJs: "📊",
  Authentication: "🔒",
  JWT: "🔑",
  bcrypt: "🔐",
  Mongoose: "M",
  "REST APIs": "🔗",
  "React Context APIs": "⚛",
  "Context API": "⚛",
  "React Router": "🛣️",
  "Landing Page": "🚀",
  Vite: "⚡",
};

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // SEO: Inject Meta Tags dynamically
  useEffect(() => {
    document.title =
      "Rajeev Rawat | MERN Stack Developer & Full Stack Engineer";

    const metaDesc = document.createElement("meta");
    metaDesc.name = "description";
    metaDesc.content =
      "Portfolio of Rajeev Rawat, a Full Stack Engineer specializing in the MERN stack. Explore my production-ready CRM, e-commerce, and team productivity applications.";
    document.head.appendChild(metaDesc);

    const metaOGTitle = document.createElement("meta");
    metaOGTitle.property = "og:title";
    metaOGTitle.content = "Rajeev Rawat | MERN Stack Developer";
    document.head.appendChild(metaOGTitle);

    const metaOGDesc = document.createElement("meta");
    metaOGDesc.property = "og:description";
    metaOGDesc.content =
      "Full Stack Engineer crafting production-grade CRM, e-commerce, and team productivity platforms.";
    document.head.appendChild(metaOGDesc);

    return () => {
      [metaDesc, metaOGTitle, metaOGDesc].forEach((m) =>
        document.head.removeChild(m),
      );
    };
  }, []);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mouse-tracking spotlight
  useEffect(() => {
    const hero = document.querySelector(".hero-section");
    const spotlight = document.getElementById("spotlight");
    if (!hero || !spotlight) return;

    const handleMove = (e) => {
      const rect = hero.getBoundingClientRect();
      spotlight.style.setProperty(
        "--x",
        ((e.clientX - rect.left) / rect.width) * 100 + "%",
      );
      spotlight.style.setProperty(
        "--y",
        ((e.clientY - rect.top) / rect.height) * 100 + "%",
      );
    };

    hero.addEventListener("mousemove", handleMove);
    return () => hero.removeEventListener("mousemove", handleMove);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setNavOpen(false);
  };

  return (
    <div className="portfolio-root">
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap"
        rel="stylesheet"
      />

      {/* NAVIGATION */}
      {/* NAVIGATION */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("home");
            }}
            className="nav-logo"
          >
            <span className="logo-bracket">&lt;&gt;</span>
            <span>Rajeev Rawat</span>
          </a>

          <div className="desktop-nav">
            {["Home", "Projects", "Skills", "Contact"].map((s) => (
              <a
                key={s}
                href={`#${s.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(s.toLowerCase());
                }}
                className="nav-link"
              >
                {s}
              </a>
            ))}
            <a
              href="https://rajeevrawat2100.hashnode.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-blog-btn"
            >
              Blog
            </a>
          </div>

          <button
            onClick={() => setNavOpen(!navOpen)}
            className="hamburger"
            aria-label="Toggle navigation"
          >
            {navOpen ? "✕" : "☰"}
          </button>
        </div>

        {navOpen && (
          <div className="mobile-nav">
            {["Home", "Projects", "Skills", "Contact"].map((s) => (
              <a
                key={s}
                href={`#${s.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(s.toLowerCase());
                }}
                className="nav-link mobile"
              >
                {s}
              </a>
            ))}
            <a
              href="https://rajeevrawat2100.hashnode.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link mobile"
              style={{ color: "var(--accent)", fontWeight: 600 }}
            >
              Blog
            </a>
          </div>
        )}
      </nav>

      {/* HERO / ABOUT SECTION */}
      <section id="home" className="hero-section">
        <div className="hero-grid-bg" />
        <div className="hero-spotlight" id="spotlight" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />

        <div className="hero-container">
          <div className="hero-content">
            <div className="status-badge">
              <span className="pulse-dot" />
              Available for opportunities
            </div>

            <h1 className="hero-title">
              Rajeev Rawat.
              <br />
              <span className="gradient-text">I build for the web.</span>
            </h1>

            <p className="hero-subtitle">
              I'm a Full Stack Engineer specializing in the MERN stack. I
              architect secure, scalable web applications—from CRMs and
              e-commerce platforms to productivity dashboards. Let's turn
              complex logic into seamless user experiences.
            </p>

            <div className="hero-cta">
              <button
                onClick={() => scrollTo("projects")}
                className="btn primary"
              >
                Explore My Work
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="btn secondary"
              >
                Get in Touch
              </button>
            </div>

            <div className="bento-grid">
              <div className="bento-card">
                <div className="bento-num">3+</div>
                <div className="bento-label">Production Apps</div>
              </div>
              <div className="bento-card">
                <div className="bento-num">MERN</div>
                <div className="bento-label">Core Stack</div>
              </div>
              <div className="bento-card">
                <div className="bento-num">100%</div>
                <div className="bento-label">Responsive</div>
              </div>
            </div>
          </div>

          {/* IDE CONFIG CARD */}
          <div className="hero-visual">
            <div className="ide-card">
              <div className="ide-header">
                <div className="ide-dots">
                  <span className="t-dot red" />
                  <span className="t-dot yellow" />
                  <span className="t-dot green" />
                </div>
                <span className="ide-filename">rajeev.config.js</span>
              </div>
              <div className="ide-body">
                <div className="code-line">
                  <span className="line-num">1</span>{" "}
                  <span className="code-keyword">const</span>{" "}
                  <span className="code-var">rajeev</span>{" "}
                  <span className="code-operator">=</span> {"{"}
                </div>
                <div className="code-line">
                  <span className="line-num">2</span>{" "}
                  <span className="code-prop">name</span>:{" "}
                  <span className="code-string">'Rajeev Rawat'</span>,
                </div>
                <div className="code-line">
                  <span className="line-num">3</span>{" "}
                  <span className="code-prop">stack</span>: [
                  <span className="code-string">'MongoDB'</span>,{" "}
                  <span className="code-string">'Express'</span>,{" "}
                  <span className="code-string">'React'</span>,{" "}
                  <span className="code-string">'Node'</span>],
                </div>
                <div className="code-line">
                  <span className="line-num">4</span>{" "}
                  <span className="code-prop">focus</span>:{" "}
                  <span className="code-string">
                    'Scalable UI & Secure APIs'
                  </span>
                  ,
                </div>
                <div className="code-line">
                  <span className="line-num">5</span>{" "}
                  <span className="code-prop">auth</span>:{" "}
                  <span className="code-string">'JWT & Context API'</span>,
                </div>
                <div className="code-line">
                  <span className="line-num">6</span>{" "}
                  <span className="code-prop">available</span>:{" "}
                  <span className="code-boolean">true</span>
                </div>
                <div className="code-line">
                  <span className="line-num">7</span> {"}"};
                </div>
                <div className="code-line">
                  <span className="line-num">8</span>&nbsp;
                </div>
                <div className="code-line">
                  <span className="line-num">9</span>{" "}
                  <span className="code-keyword">export default</span>{" "}
                  <span className="code-var">rajeev</span>;
                </div>
              </div>
            </div>

            <div className="float-badge badge-1">
              <span>⚡</span>
              <div>
                <div className="fb-title">Open Source</div>
                <div className="fb-sub">3 public repos</div>
              </div>
            </div>
            <div className="float-badge badge-2">
              <span>🚀</span>
              <div>
                <div className="fb-title">Deployed</div>
                <div className="fb-sub">Vercel + Render</div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* PROJECTS - SEO: Using <article> tags for distinct content pieces */}
      <section id="projects" className="section">
        <div className="section-container">
          <p className="section-label">PROJECTS</p>
          <h2 className="section-title">Solutions built for real workflows</h2>
          <div className="section-divider" />

          <div className="projects-grid">
            {projects.map((p) => (
              <article key={p.title} className="project-card">
                <div className="project-img-wrap">
                  <img
                    src={p.src_Image}
                    alt={`${p.title} - MERN stack web application screenshot`}
                    loading="lazy"
                  />
                </div>
                <div className="project-body">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="tech-tags">
                    {p.tech.map((t) => (
                      <span key={t} className="tech-tag">
                        {techIconMap[t] && (
                          <span className="tag-icon">{techIconMap[t]}</span>
                        )}
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live demo of ${p.title}`}
                    >
                      👁 Live Demo
                    </a>
                    <a
                      href={p.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View source code of ${p.title}`}
                    >
                      &lt;/&gt; Source
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <div className="section-container">
          <p className="section-label">SKILLS</p>
          <h2 className="section-title">Core Tech Stack</h2>
          <p className="section-subtitle">
            Tools I use to ship production-ready applications
          </p>
          <div className="section-divider" />

          <div className="skills-grid">
            {skills.map((s) => (
              <div key={s.name} className="skill-card">
                <div className="skill-icon" aria-hidden="true">
                  {s.icon}
                </div>
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT - SEO: Added aria-labels to icon-only links */}
      <section id="contact" className="section">
        <div className="section-container">
          <p className="section-label">CONTACT</p>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Open to collaborations, freelance work, or full-time roles
          </p>
          <div className="section-divider" />

          <div className="contact-grid">
            {[
              {
                icon: "✉",
                label: "Email",
                value: "rajeevrawat210@gmail.com",
                href: "mailto:rajeevrawat210@gmail.com",
              },
              {
                icon: "⬡",
                label: "GitHub",
                value: "View repositories",
                href: "https://github.com/Rajeev-2100",
              },
              {
                icon: "in",
                label: "LinkedIn",
                value: "Connect professionally",
                href: "https://www.linkedin.com/in/rajeev-rawat-956934225/",
              },
              {
                icon: "🐦",
                label: "Twitter",
                value: "Follow updates",
                href: "https://x.com/RajeevR57005639",
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
                aria-label={`${c.label}: ${c.value}`}
              >
                <div className="contact-header">
                  <span className="contact-icon" aria-hidden="true">
                    {c.icon}
                  </span>
                  <span className="contact-label">{c.label}</span>
                </div>
                <p className="contact-value">{c.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Rajeev Rawat • Built with React, Node.js
          & ❤️
        </p>
      </footer>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="scroll-top"
        aria-label="Back to top"
      >
        ↑
      </button>

      <style>{`
        :root { --bg: #050505; --surface: #111; --border: #1e1e1e; --text: #fff; --text-muted: #888; --accent: #22c55e; --accent-dim: #22c55e44; --radius: 12px; --transition: 0.25s ease; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: var(--bg); color: var(--text); font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased; overflow-x: hidden; }
        a { text-decoration: none; color: inherit; }
        button { font-family: inherit; cursor: pointer; }
        img { max-width: 100%; height: auto; display: block; }
        .portfolio-root { min-height: 100vh; }

        .navbar { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; padding: 1rem 0; transition: background var(--transition), border var(--transition); }
        .navbar.scrolled { background: rgba(5,5,5,0.95); backdrop-filter: blur(10px); border-bottom: 1px solid var(--border); }
        .nav-container { max-width: 1100px; width: 100%; margin: 0 auto; padding: 0 1.5rem; display: flex; align-items: center; justify-content: space-between; }
        .nav-logo { display: flex; align-items: center; gap: 8px; font-weight: 600; font-size: 18px; }
        .logo-bracket { color: var(--accent); font-family: monospace; font-weight: 400; }
        .desktop-nav { display: flex; align-items: center; gap: 2rem; }
        .nav-link { color: #ccc; font-size: 15px; text-transform: capitalize; transition: color var(--transition); }
        .nav-link:hover { color: #fff; }
        .nav-blog-btn { background: var(--accent); color: #000; padding: 0.45rem 1.2rem; border-radius: 8px; font-size: 14px; font-weight: 600; }
        .hamburger { display: none; background: none; border: none; color: #fff; font-size: 24px; }
        .mobile-nav { background: var(--surface); padding: 1rem 1.5rem; border-top: 1px solid var(--border); display: flex; flex-direction: column; gap: 0.5rem; position: absolute; top: 100%; left: 0; right: 0; z-index: 1001; }
        .mobile-nav .nav-link { font-size: 16px; padding: 0.4rem 0; }

        .hero-section { position: relative; overflow: hidden; padding: 7rem 1.5rem 4rem; min-height: 90vh; display: flex; align-items: center; }
        .hero-grid-bg { position: absolute; inset: 0; opacity: 0.12; z-index: 0; pointer-events: none; background-image: linear-gradient(rgba(34,197,94,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.3) 1px, transparent 1px); background-size: 60px 60px; animation: gridMove 20s linear infinite; }
        .hero-spotlight { position: absolute; inset: 0; pointer-events: none; z-index: 1; background: radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(34,197,94,0.07), transparent 40%); }
        .orb { position: absolute; border-radius: 50%; filter: blur(60px); pointer-events: none; z-index: 0; }
        .orb-1 { top: 10%; left: 10%; width: 300px; height: 300px; background: radial-gradient(circle, rgba(34,197,94,0.12), transparent 70%); animation: float 8s ease-in-out infinite; }
        .orb-2 { bottom: 10%; right: 5%; width: 250px; height: 250px; background: radial-gradient(circle, rgba(34,197,94,0.08), transparent 70%); animation: float 10s ease-in-out infinite reverse; }
        .hero-container { position: relative; z-index: 2; max-width: 1100px; margin: 0 auto; width: 100%; display: grid; grid-template-columns: 1.2fr 1fr; gap: 3rem; align-items: center; }

        .status-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(34,197,94,0.08); border: 1px solid rgba(34,197,94,0.25); padding: 8px 16px; border-radius: 100px; font-size: 13px; font-weight: 500; color: var(--accent); margin-bottom: 32px; backdrop-filter: blur(10px); }
        .pulse-dot { width: 8px; height: 8px; background: var(--accent); border-radius: 50%; animation: pulse 2s infinite; }
        .hero-title { font-size: clamp(2.8rem, 5.5vw, 4.5rem); font-weight: 800; line-height: 1.05; margin: 0 0 24px 0; letter-spacing: -0.03em; }
        .gradient-text { background: linear-gradient(135deg, #22c55e 0%, #4ade80 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .hero-subtitle { font-size: 17px; color: #888; line-height: 1.7; margin: 0 0 32px 0; max-width: 480px; }
        .hero-cta { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2.5rem; }
        .btn { padding: 0.85rem 1.8rem; border-radius: 8px; font-size: 15px; font-weight: 600; transition: transform var(--transition), box-shadow var(--transition); border: none; }
        .btn:hover { transform: translateY(-2px); }
        .btn.primary { background: var(--accent); color: #000; box-shadow: 0 4px 20px rgba(34,197,94,0.3); }
        .btn.primary:hover { box-shadow: 0 8px 30px rgba(34,197,94,0.4); }
        .btn.secondary { background: rgba(255,255,255,0.05); color: #fff; border: 1.5px solid #333; backdrop-filter: blur(10px); }
        .btn.secondary:hover { border-color: #555; background: rgba(255,255,255,0.08); }

        .bento-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .bento-card { background: rgba(255,255,255,0.03); border: 1px solid #1a1a1a; border-radius: 14px; padding: 20px; text-align: center; transition: all var(--transition); }
        .bento-card:hover { border-color: var(--accent-dim); transform: translateY(-2px); background: rgba(255,255,255,0.05); }
        .bento-num { font-size: 26px; font-weight: 800; color: #fff; margin-bottom: 4px; }
        .bento-label { font-size: 12px; color: #666; font-weight: 500; }

        .hero-visual { position: relative; display: flex; justify-content: center; }
        .ide-card { background: #0a0a0a; border: 1px solid #1e1e1e; border-radius: 12px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(34,197,94,0.08); backdrop-filter: blur(20px); width: 100%; max-width: 420px; }
        .ide-header { background: #111; padding: 14px 18px; display: flex; align-items: center; border-bottom: 1px solid var(--border); }
        .ide-dots { display: flex; gap: 8px; margin-right: 15px; }
        .t-dot { width: 12px; height: 12px; border-radius: 50%; }
        .t-dot.red { background: #ff5f56; } .t-dot.yellow { background: #ffbd2e; } .t-dot.green { background: #27c93f; }
        .ide-filename { color: #555; font-size: 13px; font-family: 'Fira Code', monospace; }
        .ide-body { padding: 24px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 14px; line-height: 1.8; min-height: 280px; }
        .code-line { display: flex; gap: 15px; }
        .line-num { color: #333; width: 15px; text-align: right; user-select: none; }
        .code-keyword { color: #c678dd; } .code-var { color: #61afef; } .code-operator { color: #56b6c2; } .code-string { color: #98c379; } .code-prop { color: #e06c75; } .code-boolean { color: #d19a66; }

        .float-badge { position: absolute; background: #111; border: 1px solid #222; border-radius: 12px; padding: 12px 18px; box-shadow: 0 8px 30px rgba(0,0,0,0.5); display: flex; align-items: center; gap: 10px; z-index: 10; }
        .float-badge > span { font-size: 20px; }
        .fb-title { font-size: 12px; font-weight: 700; color: #fff; }
        .fb-sub { font-size: 11px; color: #666; }
        .badge-1 { top: -20px; right: -20px; animation: float 6s ease-in-out infinite; }
        .badge-2 { bottom: 30px; left: -30px; animation: float 7s ease-in-out infinite reverse; }

        .scroll-indicator { position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 8px; opacity: 0.4; z-index: 2; }
        .scroll-indicator span { font-size: 11px; color: #666; letter-spacing: 2px; text-transform: uppercase; }
        .scroll-line { width: 1px; height: 30px; background: linear-gradient(to bottom, var(--accent), transparent); animation: scrollLine 2s infinite; }

        .section { padding: 4rem 1.5rem; }
        .section-container { max-width: 1100px; margin: 0 auto; }
        .section-label { color: var(--accent); font-weight: 600; font-size: 13px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 0.5rem; }
        .section-title { font-size: clamp(2rem, 5vw, 3rem); font-weight: 700; margin-bottom: 0.5rem; }
        .section-subtitle { color: var(--text-muted); font-size: 15px; margin-bottom: 0.5rem; }
        .section-divider { width: 60px; height: 3px; background: var(--accent); border-radius: 2px; margin: 1.2rem 0 3rem; }

        .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; }
        .project-card { background: var(--surface); border-radius: 16px; overflow: hidden; border: 1px solid var(--border); transition: border-color var(--transition), transform var(--transition); }
        .project-card:hover { border-color: var(--accent-dim); transform: translateY(-4px); }
        .project-img-wrap { height: 200px; overflow: hidden; background: #1a1a1a; }
        .project-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
        .project-card:hover .project-img-wrap img { transform: scale(1.03); }
        .project-body { padding: 1.5rem; }
        .project-body h3 { font-size: 18px; font-weight: 600; margin-bottom: 0.6rem; }
        .project-body p { color: var(--text-muted); font-size: 14px; line-height: 1.6; margin-bottom: 1rem; }
        .tech-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.2rem; }
        .tech-tag { background: #1a1a1a; color: #ccc; padding: 0.3rem 0.7rem; border-radius: 6px; font-size: 12px; font-weight: 500; border: 1px solid #2a2a2a; display: inline-flex; align-items: center; gap: 4px; }
        .tag-icon { font-size: 11px; }
        .project-links { display: flex; gap: 1rem; }
        .project-links a { color: #aaa; font-size: 14px; display: flex; align-items: center; gap: 6px; transition: color var(--transition); }
        .project-links a:hover { color: var(--accent); }

        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; }
        .skill-card { display: flex; align-items: center; gap: 1rem; padding: 1rem; border-radius: 10px; border: 1px solid var(--border); transition: border-color var(--transition), background var(--transition); }
        .skill-card:hover { border-color: var(--accent-dim); background: #151515; }
        .skill-icon { width: 38px; height: 38px; border-radius: 8px; background: #22c55e15; display: flex; align-items: center; justify-content: center; color: var(--accent); font-size: 14px; font-weight: 700; border: 1px solid #22c55e33; flex-shrink: 0; }
        .skill-card span { font-size: 15px; font-weight: 500; color: #ddd; }

        .contact-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; }
        .contact-card { background: var(--surface); border: 1px solid var(--border); border-radius: 14px; padding: 1.5rem; transition: border-color var(--transition), transform var(--transition); display: block; }
        .contact-card:hover { border-color: #333; transform: translateY(-3px); }
        .contact-header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.6rem; }
        .contact-icon { font-size: 20px; color: var(--accent); }
        .contact-label { font-size: 17px; font-weight: 600; }
        .contact-value { color: var(--text-muted); font-size: 14px; margin: 0; }

        .footer { border-top: 1px solid var(--border); padding: 1.5rem; text-align: center; }
        .footer p { color: #666; font-size: 13px; }
        .scroll-top { position: fixed; bottom: 2rem; right: 2rem; background: var(--accent); color: #000; border: none; width: 44px; height: 44px; border-radius: 50%; font-size: 18px; font-weight: 700; box-shadow: 0 4px 12px rgba(34,197,94,0.3); transition: transform var(--transition); z-index: 999; }
        .scroll-top:hover { transform: translateY(-3px); }

        @keyframes gridMove { 0% { transform: translate(0,0); } 100% { transform: translate(60px,60px); } }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes scrollLine { 0% { transform: scaleY(0); transform-origin: top; } 50% { transform: scaleY(1); transform-origin: top; } 51% { transform-origin: bottom; } 100% { transform: scaleY(0); transform-origin: bottom; } }

        @media (max-width: 860px) {
          .hero-section { padding-top: 5.5rem; }
          .hero-container { grid-template-columns: 1fr; text-align: center; }
          .hero-subtitle { margin-left: auto; margin-right: auto; }
          .hero-cta { justify-content: center; }
          .bento-grid { max-width: 400px; margin-left: auto; margin-right: auto; gap: 8px; }
          .hero-visual { margin-top: 3rem; max-width: 500px; margin-left: auto; margin-right: auto; }
          .ide-card { max-width: 100%; width: 100%; }
          .ide-body { padding: 16px; font-size: 12px; }
          .float-badge { display: none; }
          .scroll-indicator { display: none; }
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }

        @media (max-width: 480px) {
          .bento-grid { grid-template-columns: 1fr; }
          .hero-title { font-size: 2rem; }
          .project-img-wrap { height: 180px; }
          .section { padding: 3rem 1rem; }
        }
      `}</style>
    </div>
  );
}
