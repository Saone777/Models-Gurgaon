import React, { useState } from "react";

const BASE = import.meta.env.BASE_URL;
const LOGO = `${BASE}attachments/back.jpeg`;
const NAV_LOGO = `${BASE}attachments/logo.jpeg`;
const CARD = `${BASE}attachments/down.jpeg`;
const FLYER = `${BASE}attachments/up.jpeg`;

const SERVICES = [
  {
    icon: "👩‍💼",
    title: "Hostesses",
    desc: "Event Hostesses, Receptionists, Guest Management",
  },
  {
    icon: "👗",
    title: "Models",
    desc: "Ramp Models, Print Shoots, Catalog Shoots, Brand Campaigns",
  },
  {
    icon: "🧑‍🤝‍🧑",
    title: "Promotional Staff",
    desc: "Brand Promoters, Product Demonstrators, Sampling Staff, Roadshows",
  },
  {
    icon: "🎤",
    title: "Anchors & Emcees",
    desc: "For Corporate Events, Product Launches, Mall Activities, Exhibitions",
  },
  {
    icon: "🏳️",
    title: "Event Staffing",
    desc: "Ushers, Registration Staff, Brand Ambassadors, Crowd Management",
  },
  {
    icon: "💄",
    title: "Makeup Artists",
    desc: "Professional Makeup for Events, Shoots, Fashion Shows & Special Occasions",
  },
  {
    icon: "📸",
    title: "Photoshoot Support",
    desc: "Models, Coordination & Production Support",
  },
  {
    icon: "⚙️",
    title: "Customized Solutions",
    desc: "Tailored Manpower as per Your Brand Needs",
  },
];

const WHY = [
  { icon: "✅", title: "Verified Talent Pool" },
  { icon: "🤝", title: "Professional & Reliable" },
  { icon: "⏱️", title: "Pan India Availability" },
  { icon: "⭐", title: "Tailored Solutions for Every Brand" },
];

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header-inner">
        <a href={BASE} className="logo-link" onClick={() => setOpen(false)}>
          <img
            className="logo-img"
            src={NAV_LOGO}
            alt="ModelsGurgaon.com logo"
          />
        </a>

        <nav className={`main-nav ${open ? "open" : ""}`}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="header-cta">
          <a href="tel:+917503030207" className="btn btn-outline">
            📞 7503030207
          </a>
          <a href="#contact" className="btn btn-primary">
            Get in Touch
          </a>
          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div>
          <span className="hero-eyebrow">People · Presence · Perfection</span>
          <h1>
            Right People, <span>Brighter Brands</span> — Gurgaon&apos;s #1
            Hostess &amp; Aspiring Models Provider
          </h1>
          <p className="lead">
            From hostesses and ramp models to promotional staff, anchors, emcees
            and makeup artists — we supply verified, professional talent for
            events, exhibitions, promotions and brand campaigns, Pan India.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Book Talent Now
            </a>
            <a href="#services" className="btn btn-outline">
              Explore Services
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <strong>500+</strong>
              <span>Events Staffed</span>
            </div>
            <div>
              <strong>1000+</strong>
              <span>Verified Talent Pool</span>
            </div>
            <div>
              <strong>PAN</strong>
              <span>India Service</span>
            </div>
          </div>
        </div>

        <div className="hero-media">
          <div className="card-frame">
            <img src={FLYER} alt="ModelsGurgaon services and brand showcase" />
          </div>
          <div className="badge-float">
            <span className="dot" /> Beautiful People for Brand Success
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-head">
          <span className="pill">Our Services</span>
          <h2>Everything Your Brand Needs, In One Place</h2>
          <p>
            A complete roster of hostesses, models, promotional staff and event
            professionals — ready to represent your brand with polish and
            confidence.
          </p>
        </div>
        <div className="services-grid">
          {SERVICES.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-head">
          <span className="pill">Why ModelsGurgaon</span>
          <h2>Your Brand Deserves the Right People</h2>
        </div>
        <div className="why-grid">
          {WHY.map((w) => (
            <div className="why-card" key={w.title}>
              <div className="why-icon">{w.icon}</div>
              <h4>{w.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="section-head">
          <span className="pill">Gallery</span>
          <h2>See Our Brand In Action</h2>
          <p>
            A glimpse of our identity and the talent we bring to every event.
          </p>
        </div>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img
              src={CARD}
              alt="ModelsGurgaon business card and services overview"
            />
            <div className="gallery-caption">
              Business Card &amp; Services Overview — Fateh Singh Tanwar,
              Business Development
            </div>
          </div>
          <div className="gallery-item">
            <img src={FLYER} alt="ModelsGurgaon promotional flyer" />
            <div className="gallery-caption">
              Beautiful People for Brand Success
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container about-grid">
        <div className="about-logo-wrap">
          <img src={LOGO} alt="ModelsGurgaon.com official logo" />
        </div>
        <div className="about-text">
          <h2>About ModelsGurgaon.com</h2>
          <p>
            ModelsGurgaon.com is the #1 hostess and aspiring models provider
            company, built on the promise of{" "}
            <strong>People, Presence &amp; Perfection</strong>. We connect
            brands, event organizers and agencies with verified, professional
            talent for events, exhibitions and promotions across Gurgaon and Pan
            India.
          </p>
          <p>
            Whether you need a hostess for a corporate event, models for a print
            shoot, an anchor for a product launch, or a full promotional team
            for a roadshow — our tailored manpower solutions are designed around
            your brand&apos;s exact needs.
          </p>
          <div className="contact-person">
            <h4>Fateh Singh Tanwar</h4>
            <span>Business Development</span>
            <ul>
              <li>📞 75030 30207</li>
              <li>✉️ info@modelsgurgaon.com</li>
              <li>🌐 www.ModelsGurgaon.com</li>
              <li>📍 Gurgaon, Haryana | PAN India Service</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Hostesses",
    message: "",
  });
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "sending", msg: "" });
    try {
      const res = await fetch(
        "https://hyperdev.com/external-api/published-apps/form-submissions/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            source_host: window.location.hostname,
            form_name: "ModelsGurgaon Enquiry Form",
            fields: {
              Name: form.name,
              Email: form.email,
              Phone: form.phone,
              "Service Required": form.service,
              Message: form.message,
            },
          }),
        },
      );
      if (res.ok) {
        setStatus({
          state: "success",
          msg: "Thanks — we will get back to you shortly! Your enquiry has been emailed to our team.",
        });
        setForm({
          name: "",
          email: "",
          phone: "",
          service: "Hostesses",
          message: "",
        });
      } else {
        setStatus({
          state: "error",
          msg: "Something went wrong, please try again.",
        });
      }
    } catch {
      setStatus({
        state: "error",
        msg: "Something went wrong, please try again.",
      });
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="Your phone number"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="service">Service Required</label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
          >
            <option>Hostesses</option>
            <option>Models</option>
            <option>Promotional Staff</option>
            <option>Anchors & Emcees</option>
            <option>Event Staffing</option>
            <option>Makeup Artists</option>
            <option>Photoshoot Support</option>
            <option>Customized Solutions</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="message">Event Details</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your event, dates and requirements"
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        disabled={status.state === "sending"}
      >
        {status.state === "sending" ? "Sending..." : "Send Enquiry"}
      </button>
      {status.state === "success" && (
        <div className="form-msg success">{status.msg}</div>
      )}
      {status.state === "error" && (
        <div className="form-msg error">{status.msg}</div>
      )}
    </form>
  );
}

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container contact-wrap">
        <div className="contact-info">
          <h3>Let&apos;s Make Your Next Event Unforgettable</h3>
          <p>
            Get in touch for bookings &amp; enquiries. Our team responds quickly
            to help you find the right people for your brand.
          </p>
          <ul>
            <li>
              <span className="ic">📞</span> +91 75030 30207
            </li>
            <li>
              <span className="ic">✉️</span> info@modelsgurgaon.com
            </li>
            <li>
              <span className="ic">🌐</span> www.ModelsGurgaon.com
            </li>
            <li>
              <span className="ic">📍</span> Gurgaon, Haryana | PAN India
              Service
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-col">
          <div className="footer-logo">
            <img src={LOGO} alt="ModelsGurgaon.com logo" />
          </div>
          <p>
            #1 Hostess &amp; Aspiring Models Provider Company. People, Presence,
            Perfection — for every event, exhibition and promotion, Pan India.
          </p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>📞 75030 30207</li>
            <li>✉️ info@modelsgurgaon.com</li>
            <li>📍 Gurgaon, Haryana | PAN India</li>
          </ul>
        </div>
      </div>
      <p className="footer-tagline">Your Brand Deserves the Right People</p>
      <div className="footer-bottom">
        © {new Date().getFullYear()} ModelsGurgaon.com — All rights reserved.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <Gallery />
      <About />
      <Contact />
      <Footer />
      <a
        className="whatsapp-float"
        href="https://wa.me/917503030207"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>
    </>
  );
}
