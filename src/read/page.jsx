"use client";
import { useState } from "react";

const reviews = [
  {
    company: "Karman Ventures",
    reviewer: "William Barnes",
    services: ["INVESTOR DECK", "SALES DECK"],
    avatar: "/avatars/william.jpg",
    review:
      "They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5",
  },
  {
    company: "Medallia",
    reviewer: "Becky Chastain",
    services: ["SALES DECK", "INVESTOR DECK"],
    avatar: "/avatars/becky.jpg",
    review:
      "An exceptional team that delivered beyond expectations. Their attention to detail and creative approach made our presentation stand out. Highly recommend for any deck work. 5/5",
  },
  {
    company: "Planetly",
    reviewer: "Nina Walloch",
    services: ["AGENCY", "BIG NEWS DECK", "BRANDED TEMPLATE", "INVESTOR DECK", "PRODUCT PRESENTATION", "SALES DECK", "STARTUP PITCH"],
    avatar: "/avatars/nina.jpg",
    review:
      "Ihor and his team tackled the projects with great professionalism and creativity. They understood our brand value and turned this into excellent slide designs. The process was seamless and very effective, so we decided to roll this out across all our presentation decks. Furthermore, their understanding, professionalism, and creativity have secured a continued partnership.",
  },
  {
    company: "Workiz Easy",
    reviewer: "Tomer Levy",
    services: ["SALES DECK"],
    avatar: "/avatars/tomer.jpg",
    review:
      "Great experience working with this team. They delivered a polished, professional deck on time and were very responsive throughout. 5/5",
  },
  {
    company: "Premium Blend",
    reviewer: "Ellen Kim",
    services: ["BRANDED TEMPLATE", "SALES DECK"],
    avatar: "/avatars/ellen.jpg",
    review:
      "Outstanding work on our branded presentation template. The team was professional, creative, and a pleasure to work with. 5/5",
  },
  {
    company: "Hypercare Systems",
    reviewer: "Brendan Goss",
    services: ["INVESTOR DECK"],
    avatar: "/avatars/brendan.jpg",
    review:
      "They nailed our investor deck on the first try. Clear communication, fast turnaround, and a beautiful final product. 5/5",
  },
  {
    company: "Officevibe",
    reviewer: "Raff Labrie",
    services: ["SALES DECK", "PRODUCT PRESENTATION"],
    avatar: "/avatars/raff.jpg",
    review:
      "The team was incredibly collaborative and brought fresh ideas to the table. Our sales deck has never looked better. 5/5",
  },
  {
    company: "Orderlion",
    reviewer: "Stefan Strohmer",
    services: ["STARTUP PITCH", "INVESTOR DECK"],
    avatar: "/avatars/stefan.jpg",
    review:
      "From story to design, everything was handled with care and expertise. We felt supported every step of the way. 5/5",
  },
  {  
    company: "Black Book",
    reviewer: "Jaci Smith",
    services: ["BRANDED TEMPLATE"],
    avatar: "/avatars/jaci.jpg",
    review:
      "Phenomenal quality and a smooth process. Our branded template is exactly what we envisioned. 5/5",
  },
  {
    company: "Trawa Energy",
    reviewer: "David Budde",
    services: ["INVESTOR DECK", "STARTUP PITCH"],
    avatar: "/avatars/david.jpg",
    review:
      "Professional, creative, and on time. The investor deck they built for us was instrumental in our fundraising success. 5/5",
  },
];

export default function Reviews() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      style={{
        backgroundColor: "#eaeae7",
        minHeight: "100vh",
        padding: "56px 48px 80px 48px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Heading */}
      <h1
        style={{
          fontSize: "52px",
          fontWeight: "400",
          color: "#1a1a1a",
          margin: "0 0 40px 0",
          letterSpacing: "-0.5px",
          lineHeight: 1.1,
        }}
      >
        Clients&apos; reviews
      </h1>

      {/* Top divider */}
      <div style={{ width: "100%", height: "1px", backgroundColor: "#c8c5be" }} />

      {/* Rows */}
      {reviews.map((r, i) => (
        <div key={i}>
          {/* Collapsed row — always visible */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr auto",
              alignItems: "center",
              padding: "22px 0",
              cursor: "pointer",
            }}
            onClick={() => toggle(i)}
          >
            {/* Company */}
            <span
              style={{
                fontSize: "15px",
                color: "#1a1a1a",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              {r.company}
            </span>

            {/* Reviewer */}
            <span style={{ fontSize: "15px", color: "#1a1a1a" }}>
              {r.reviewer}
            </span>

            {/* READ */}
            <span
              style={{
                fontSize: "13px",
                color: openIndex === i ? "#1a1a1a" : "#9e9b94",
                letterSpacing: "0.08em",
                fontWeight: openIndex === i ? "500" : "400",
                textDecoration: openIndex === i ? "underline" : "none",
                textUnderlineOffset: "3px",
                userSelect: "none",
              }}
            >
              READ
            </span>
          </div>

          {/* Expanded content */}
          {openIndex === i && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "0 24px",
                paddingBottom: "40px",
              }}
            >
              {/* Col 1 — empty (company already shown above) */}
              <div />

              {/* Col 2 — Services */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                <p style={{ fontSize: "15px", color: "#1a1a1a", margin: "0 0 16px 0" }}>
                  Services:
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {r.services.map((s, j) => (
                    <span
                      key={j}
                      style={{
                        display: "inline-flex",
                        width: "fit-content",
                        alignItems: "center",
                        padding: "7px 18px",
                        borderRadius: "999px",
                        border: "1px solid #1a1a1a",
                        fontSize: "12px",
                        letterSpacing: "0.07em",
                        color: "#1a1a1a",
                        fontWeight: "500",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Col 3 — Avatar + Review */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {/* Avatar */}
                <div
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "12px",
                    backgroundColor: "#d4d1ca",
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={r.avatar}
                    alt={r.reviewer}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                </div>

                {/* Review text */}
                <p
                  style={{
                    fontSize: "15px",
                    color: "#1a1a1a",
                    lineHeight: "1.65",
                    margin: "0",
                    maxWidth: "420px",
                  }}
                >
                  {r.review}
                </p>
              </div>
            </div>
          )}

          {/* Row divider */}
          <div style={{ width: "100%", height: "1px", backgroundColor: "#c8c5be" }} />
        </div>
      ))}
    </section>
  );
}