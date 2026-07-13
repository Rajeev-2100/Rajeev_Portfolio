import ecommerce from "./images/crmApplicationPhoto.png";
import crmApplication from "./images/ecommercePhoto.png";
import meetupData from "./images/meetupData.png";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "SmartLead CRM",
    desc: "A full-stack Customer Relationship Management (CRM) application for managing leads, sales agents, comments, and lead status. It features filtering, search, lead assignment, analytics, and a responsive user interface integrated with a RESTful backend API.",
    tech: [
      "React",
      "Bootstrap",
      "React Router",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "ChartJs",
    ],
    codeUrl: "https://github.com/Rajeev-2100/SmartLeadCRM_Frontend.git",
    demoUrl: "https://smartlead-crm-frontend-r78f.vercel.app/",
    src_Image: crmApplication,
  },
  {
    title: "Modern Mart",
    desc: "A scalable REST API for an e-commerce platform supporting products, categories, inventory, and filtering. Designed with clean architecture and MongoDB to provide a solid backend foundation for online shopping applications.",
    tech: [
      "React",
      "Bootstrap",
      "React Router",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
    ],
    codeUrl: "https://github.com/Rajeev-2100/ModernMart_Frontend.git",
    demoUrl: "https://modernmart-ecommerce-frontend.vercel.app/",
    src_Image: ecommerce,
  },
  // {
  //   title: "MeetUp App",
  //   desc: "MeetUp Event App — A React-based event discovery platform that allows users to browse, search, and filter meetup events, with detailed event pages powered by a REST API.",
  //   tech: [
  //     "React",
  //     "Bootstrap",
  //     "Node.js",
  //     "Express.js",
  //     "MongoDB",
  //     "Mongoose",
  //     "REST API",
  //   ],
  //   codeUrl: "https://github.com/Rajeev-2100/meetupFrontend.git",
  //   demoUrl: "https://meetup-frontend-navy.vercel.app/",
  //   src_Image: meetupData,
  // },
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
];

const techIconMap = {
  React: "⚛",
  "Node.js": "N",
  MongoDB: "M",
  Express: "EX",
  Bootstrap: "B",
  "Chart.js": "📊",
  Stripe: "S",
};

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setNavOpen(false);
  };

  return (
    <div
      style={{
        background: "#0a0a0a",
        color: "#fff",
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: scrolled ? "1px solid #1a1a1a" : "none",
          padding: "1rem 0",
          transition: "all 0.3s",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("home");
            }}
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 18,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span
              style={{
                color: "#22c55e",
                fontWeight: 400,
                fontFamily: "monospace",
              }}
            >
              &lt;&gt;
            </span>
            <span>Rajeev Rawat</span>
          </a>

          <div
            style={{ display: "flex", alignItems: "center", gap: "2rem" }}
            className="desktop-nav"
          >
            {["home", "projects", "skills", "contact"].map((s) => (
              <a
                key={s}
                href={`#${s}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(s);
                }}
                style={{
                  color: "#ccc",
                  textDecoration: "none",
                  fontSize: 15,
                  textTransform: "capitalize",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#fff")}
                onMouseLeave={(e) => (e.target.style.color = "#ccc")}
              >
                {s}
              </a>
            ))}
            <a
              href="https://rajeevrawat2100.hashnode.dev/"
              target="_blank"
              rel="noreferrer"
              style={{
                background: "#22c55e",
                color: "#000",
                padding: "0.45rem 1.2rem",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Blog
            </a>
          </div>

          <button
            onClick={() => setNavOpen(!navOpen)}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: 24,
              cursor: "pointer",
              display: "none",
            }}
            className="hamburger"
          >
            {navOpen ? "✕" : "☰"}
          </button>
        </div>

        {navOpen && (
          <div
            style={{
              background: "#111",
              padding: "1rem 1.5rem",
              borderTop: "1px solid #1a1a1a",
            }}
          >
            {["home", "projects", "skills", "contact"].map((s) => (
              <div key={s} style={{ padding: "0.6rem 0" }}>
                <a
                  href={`#${s}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(s);
                  }}
                  style={{
                    color: "#ccc",
                    textDecoration: "none",
                    fontSize: 16,
                    textTransform: "capitalize",
                  }}
                >
                  {s}
                </a>
              </div>
            ))}
          </div>
        )}
      </nav>

      <section
        id="home"
        style={{
          minHeight: "300px",
          display: "flex",
          alignItems: "center",
          padding: "8rem 1.5rem 4rem",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%" }}>
          <div
            style={{
              display: "inline-block",
              background: "#22c55e22",
              color: "#22c55e",
              padding: "0.3rem 1rem",
              borderRadius: 20,
              fontSize: 13,
              fontWeight: 500,
              marginBottom: "1.5rem",
              border: "1px solid #22c55e44",
            }}
          >
            Full Stack Developer
          </div>

          <h1
            style={{
              fontSize: "clamp(2.8rem, 7vw, 5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              margin: "0 0 1rem",
            }}
          >
            Hi, I'm
            <br />
            <span style={{ color: "#22c55e" }}>Rajeev Rawat</span>
          </h1>

          <div
            style={{
              width: 60,
              height: 3,
              background: "#22c55e",
              borderRadius: 2,
              margin: "1.2rem 0",
            }}
          />

          <p
            style={{
              fontSize: 18,
              color: "#aaa",
              maxWidth: 600,
              lineHeight: 1.7,
              marginBottom: "0.75rem",
            }}
          >
            Passionate full-stack developer crafting intuitive digital
            experiences with modern technologies.
          </p>
          <p
            style={{
              fontSize: 16,
              color: "#888",
              maxWidth: 560,
              lineHeight: 1.7,
              marginBottom: "2.5rem",
            }}
          >
            Specializing in React, Node.js, and MongoDB to build scalable and
            user-centered applications.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button
              onClick={() => scrollTo("projects")}
              style={{
                background: "#22c55e",
                color: "#000",
                border: "none",
                padding: "0.8rem 2rem",
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              View Projects
            </button>
            <a
              href="https://docs.google.com/document/d/1yzBU-CSFRW37V8ICCja0CTv2xhXOQ4KkJ2GKXZelDzQ/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                style={{
                  background: "transparent",
                  color: "#fff",
                  border: "1.5px solid #333",
                  padding: "0.8rem 2rem",
                  borderRadius: 8,
                  fontSize: 15,
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                Resume
              </button>
            </a>
          </div>
        </div>
      </section>

      <section id="projects" style={{ padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p
            style={{
              color: "#22c55e",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            PROJECTS
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              margin: "0 0 0.5rem",
            }}
          >
            Building solutions that solve
            <br />
            real-world problems
          </h2>
          <div
            style={{
              width: 60,
              height: 3,
              background: "#22c55e",
              borderRadius: 2,
              margin: "1.2rem 0 3rem",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {projects.map((p) => (
              <div
                key={p.title}
                style={{
                  background: "#111",
                  borderRadius: 16,
                  overflow: "hidden",
                  border: "1px solid #1e1e1e",
                  transition: "border-color 0.3s, transform 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#22c55e44";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#1e1e1e";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ height: 220, overflow: "hidden" }}>
                  <img
                    src={p.src_Image}
                    alt={p.src_Image}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    onError={(e) => {
                      e.target.style.background = "#1a1a1a";
                      e.target.style.display = "block";
                    }}
                  />
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      marginBottom: "0.6rem",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      color: "#888",
                      fontSize: 14,
                      lineHeight: 1.6,
                      marginBottom: "1rem",
                    }}
                  >
                    {p.desc}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.4rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          background: "#1a1a1a",
                          color: "#ccc",
                          padding: "0.3rem 0.7rem",
                          borderRadius: 6,
                          fontSize: 12,
                          fontWeight: 500,
                          border: "1px solid #2a2a2a",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "#aaa",
                        textDecoration: "none",
                        fontSize: 14,
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <span style={{ fontSize: 16 }}>👁</span> Demo
                    </a>
                    <a
                      href={p.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "#aaa",
                        textDecoration: "none",
                        fontSize: 14,
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <span style={{ fontSize: 16 }}>{"</>"}</span> Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" style={{ padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p
            style={{
              color: "#22c55e",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            SKILLS
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              margin: "0 0 0.5rem",
            }}
          >
            Tech Stack
          </h2>
          <p style={{ color: "#888", fontSize: 15, marginBottom: "0.5rem" }}>
            Technologies and tools I work with
          </p>
          <div
            style={{
              width: 60,
              height: 3,
              background: "#22c55e",
              borderRadius: 2,
              margin: "1.2rem 0 3rem",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {skills.map((s) => (
              <div
                key={s.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1rem",
                  borderRadius: 10,
                  border: "1px solid #1e1e1e",
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "#22c55e44")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "#1e1e1e")
                }
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "#22c55e15",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#22c55e",
                    fontSize: 14,
                    fontWeight: 700,
                    border: "1px solid #22c55e33",
                    flexShrink: 0,
                  }}
                >
                  {s.icon}
                </div>
                <span style={{ fontSize: 16, fontWeight: 500, color: "#ddd" }}>
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={{ padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p
            style={{
              color: "#22c55e",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            CONTACT
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              margin: "0 0 0.5rem",
            }}
          >
            Connect
          </h2>
          <p style={{ color: "#888", fontSize: 15, marginBottom: "0.5rem" }}>
            Let's collaborate on something amazing together
          </p>
          <div
            style={{
              width: 60,
              height: 3,
              background: "#22c55e",
              borderRadius: 2,
              margin: "1.2rem 0 3rem",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                icon: "✉",
                label: "Email",
                value: "rajeevrawat210@gmail.com",
                href: "https://mail.google.com/mail/u/0/?fs=1&to=rajeevrawat210@gmail.com&tf=cm",
                color: "#EA4335",
              },
              {
                icon: "⬡",
                label: "GitHub",
                value: "Follow on GitHub",
                href: "https://github.com/Rajeev-2100",
                color: "#fff",
              },
              {
                icon: "in",
                label: "LinkedIn",
                value: "Connect on LinkedIn",
                href: "https://www.linkedin.com/in/rajeev-rawat-956934225/",
                color: "#0A66C2",
              },
              {
                icon: "🐦",
                label: "Twitter",
                value: "Follow on Twitter",
                href: "https://x.com/RajeevR57005639",
                color: "#1DA1F2",
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                {...(!c.href.startsWith("mailto:")
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
                  className="text-decoration-none"
              >
                <div
                  style={{
                    background: "#111",
                    border: "1px solid #1e1e1e",
                    borderRadius: 14,
                    padding: "1.5rem",
                    transition: "border-color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = "#333")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = "#1e1e1e")
                  }
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <span style={{ fontSize: 20, color: "#22c55e" }}>
                      {c.icon}
                    </span>
                    <span
                      style={{ fontSize: 18, fontWeight: 600, color: "#fff" }}
                    >
                      {c.label}
                    </span>
                  </div>
                  <p style={{ color: "#888", fontSize: 14, margin: 0 }}>
                    {c.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer
        className="d-flex justify-content-center align-items-center"
        style={{
          borderTop: "1px solid #1a1a1a",
          paddingTop: '1rem', 
          textAlign: "center",
        }}
      >
        <p style={{ color: "#fff", fontSize: 13 }}>
          © 2026 Rajeev Rawat • Built with React, Bootstrap & ❤️
        </p>
      </footer>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          background: "#22c55e",
          color: "#000",
          border: "none",
          width: 44,
          height: 44,
          borderRadius: "50%",
          fontSize: 18,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          boxShadow: "0 4px 12px rgba(34,197,94,0.3)",
        }}
      >
        ↑
      </button>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </div>
  );
}
