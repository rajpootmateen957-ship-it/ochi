"use client";
import { useState } from "react";
import ochi11 from "../../src/assets/ochi-11.png";
import ochi12 from "../../src/assets/ochi-12.png";
import ochi13 from "../../src/assets/ochi-13.png";
import ochi14 from "../../src/assets/ochi-14.png";  
import ochi15 from "../../src/assets/ochi-15.png";
import ochi16 from "../../src/assets/ochi-16.png";
import ochi17 from "../../src/assets/ochi-17.png";
import ochi18 from "../../src/assets/ochi-18.png";
import ochi19 from "../../src/assets/ochi-19.png";
import ochi20 from "../../src/assets/ochi-20.png";  

const reviews = [
  {
    company: "Karman Ventures",
    reviewer: "William Barnes",
    services: ["INVESTOR DECK", "SALES DECK"],
    avatar: ochi11,
    review:
      "They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5",
  },
  {
    company: "Medallia",
    reviewer: "Becky Chastain",
    services: ["SALES DECK", "INVESTOR DECK"],
    avatar: ochi12,
    review:
      "An exceptional team that delivered beyond expectations. Their attention to detail and creative approach made our presentation stand out. Highly recommend for any deck work. 5/5",
  },
  {
    company: "Planetly",
    reviewer: "Nina Walloch",
    services: ["AGENCY", "BIG NEWS DECK", "BRANDED TEMPLATE", "INVESTOR DECK", "PRODUCT PRESENTATION", "SALES DECK", "STARTUP PITCH"],
    avatar: ochi13,
    review:
      "Ihor and his team tackled the projects with great professionalism and creativity. They understood our brand value and turned this into excellent slide designs. The process was seamless and very effective, so we decided to roll this out across all our presentation decks. Furthermore, their understanding, professionalism, and creativity have secured a continued partnership.",
  },
  {
    company: "Workiz Easy",
    reviewer: "Tomer Levy",
    services: ["SALES DECK"],
    avatar: ochi14,
    review:
      "Great experience working with this team. They delivered a polished, professional deck on time and were very responsive throughout. 5/5",
  },
  {
    company: "Premium Blend",
    reviewer: "Ellen Kim",
    services: ["BRANDED TEMPLATE", "SALES DECK"],
    avatar: ochi15,
    review:
      "Outstanding work on our branded presentation template. The team was professional, creative, and a pleasure to work with. 5/5",
  },
  {
    company: "Hypercare Systems",
    reviewer: "Brendan Goss",
    services: ["INVESTOR DECK"],
    avatar: ochi16,
    review:
      "They nailed our investor deck on the first try. Clear communication, fast turnaround, and a beautiful final product. 5/5",
  },
  {
    company: "Officevibe",
    reviewer: "Raff Labrie",
    services: ["SALES DECK", "PRODUCT PRESENTATION"],
    avatar: ochi17,
    review:
      "The team was incredibly collaborative and brought fresh ideas to the table. Our sales deck has never looked better. 5/5",
  },
  {
    company: "Orderlion",
    reviewer: "Stefan Strohmer",
    services: ["STARTUP PITCH", "INVESTOR DECK"],
    avatar: ochi18,
    review:
      "From story to design, everything was handled with care and expertise. We felt supported every step of the way. 5/5",
  },
  {  
    company: "Black Book",
    reviewer: "Jaci Smith",
    services: ["BRANDED TEMPLATE"],
    avatar: ochi19,
    review:
      "Phenomenal quality and a smooth process. Our branded template is exactly what we envisioned. 5/5",
  },
  {
    company: "Trawa Energy",
    reviewer: "David Budde",
    services: ["INVESTOR DECK", "STARTUP PITCH"],
    avatar: ochi20,
    review:
      "Professional, creative, and on time. The investor deck they built for us was instrumental in our fundraising success. 5/5",
  },
];

export default function Reviews() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-[#eaeae7] min-h-screen py-14 px-12 font-[Inter]">
      
      <h1 className="text-[52px] font-normal text-[#1a1a1a] mb-10 tracking-[-0.5px] leading-[1.1]">
        Clients&apos; reviews
      </h1>

      <div className="w-full h-[1px] bg-[#c8c5be]" />

      {reviews.map((r, i) => (
        <div key={i}>
          
          <div
            className="grid grid-cols-[1fr_1fr_auto] items-center py-[22px] cursor-pointer"
            onClick={() => toggle(i)}
          >
            
            <span className="text-[15px] text-[#1a1a1a] underline underline-offset-[3px]">
              {r.company}
            </span>

            <span className="text-[15px] text-[#1a1a1a]">
              {r.reviewer}
            </span>

            <span
              className={`text-[13px] tracking-[0.08em] ${
                openIndex === i
                  ? "text-[#1a1a1a] font-medium underline underline-offset-[3px]"
                  : "text-[#9e9b94]"
              } select-none`}
            >
              READ
            </span>
          </div>

          {openIndex === i && (
            <div className="grid grid-cols-3 gap-x-6 pb-10">
              
              <div />

              <div className="flex flex-col">
                <p className="text-[15px] text-[#1a1a1a] mb-4">
                  Services:
                </p>

                <div className="flex flex-col gap-[10px]">
                  {r.services.map((s, j) => (
                    <span
                      key={j}
                      className="inline-flex w-fit items-center px-[18px] py-[7px] rounded-full border border-[#1a1a1a] text-[12px] tracking-[0.07em] text-[#1a1a1a] font-medium whitespace-nowrap"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                
                <div className="w-[90px] h-[90px] rounded-[12px] bg-[#d4d1ca] overflow-hidden shrink-0">
                  <img
                    src={r.avatar}
                    alt={r.reviewer}
                    className="w-full h-full object-cover block scale-110 transition-transform duration-300"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                </div>

                <p className="text-[15px] text-[#1a1a1a] leading-[1.65] max-w-[420px]">
                  {r.review}
                </p>
              </div>
            </div>
          )}

          <div className="w-full h-[1px] bg-[#c8c5be]" />
        </div>
      ))}
    </section>
  );
}