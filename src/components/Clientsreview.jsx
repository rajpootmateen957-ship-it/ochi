import { useState } from "react";

const clients = [
  {
    company: "Medallia",
    contact: "Becky Chastain",
    services: ["BRANDED TEMPLATE", "EXECUTIVE KEYNOTE", "PRODUCT LAUNCH"],
    quote:
      "The most impressive about Ochi is their attention to detail. They didn't just design presentations but helped us craft a narrative. Easy partnership and alignment with creative team and values.",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    company: "Planetly",
    contact: "Nina Walloch",
    services: ["BRANDED TEMPLATE", "PITCH DECK"],
    quote:
      "Working with Ochi was a seamless experience. They understood our brand and delivered beyond expectations. Highly recommended for anyone looking to elevate their presentations.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    company: "Workiz Easy",
    contact: "Tomer Levy",
    services: ["EXECUTIVE KEYNOTE", "PRODUCT LAUNCH"],
    quote:
      "Ochi transformed the way we present our product. Their storytelling approach made our launch deck compelling and memorable. A true creative partner.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    company: "Premium Blend",
    contact: "Ellen Kim",
    services: ["BRANDED TEMPLATE"],
    quote:
      "The branded template Ochi created for us is stunning. Our team can now produce consistent, professional decks without starting from scratch each time.",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    company: "Hypercare Systems",
    contact: "Brendan Goss",
    services: ["EXECUTIVE KEYNOTE", "BRANDED TEMPLATE"],
    quote:
      "Ochi's design sensibility is unmatched. They brought clarity and elegance to complex technical content. Our investors noticed the difference immediately.",
    avatar: "https://i.pravatar.cc/150?img=15",
  },
  {
    company: "Officevibe",
    contact: "Raff Labrie",
    services: ["PITCH DECK", "PRODUCT LAUNCH"],
    quote:
      "From concept to final slide, Ochi was with us every step of the way. The result speaks for itself — a deck that converts.",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    company: "Orderlion",
    contact: "Stefan Strohmer",
    services: ["BRANDED TEMPLATE", "EXECUTIVE KEYNOTE"],
    quote:
      "We needed a partner who could translate our vision into visuals. Ochi delivered that and more. Professional, creative, and easy to work with.",
    avatar: "https://i.pravatar.cc/150?img=52",
  },
  {
    company: "Black Book",
    contact: "Jaci Smith",
    services: ["PRODUCT LAUNCH"],
    quote:
      "Our product launch wouldn't have been the same without Ochi. The deck they built captured our brand perfectly and impressed every stakeholder in the room.",
    avatar: "https://i.pravatar.cc/150?img=19",
  },
];

export default function ClientReview() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-[#EBEBEB] min-h-screen px-12 py-16 font-[system-ui]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');
        * { font-family: 'DM Sans', sans-serif; }

        .row-expand {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.45s cubic-bezier(0.4,0,0.2,1);
        }
        .row-expand.open {
          grid-template-rows: 1fr;
        }
        .row-inner {
          overflow: hidden;
        }

        .read-btn {
          font-size: 13px;
          letter-spacing: 0.08em;
          text-decoration: underline;
          color: #1a1a1a;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
          transition: opacity 0.2s;
        }
        .read-btn:hover { opacity: 0.5; }

        .tag {
          display: inline-block;
          border: 1.2px solid #1a1a1a;
          border-radius: 999px;
          font-size: 11px;
          letter-spacing: 0.1em;
          padding: 6px 16px;
          font-weight: 500;
          color: #1a1a1a;
          white-space: nowrap;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {clients.map((client, i) => (
          <div key={i}>
            {/* Divider */}
            <div className="h-px bg-[#c8c8c8]" />

            {/* Collapsed Row */}
            <div className="flex items-center py-5">
              {/* Company */}
              <div className="w-1/3">
                <span className="text-[15px] underline text-[#1a1a1a] cursor-default">
                  {client.company}
                </span>
              </div>

              {/* Contact */}
              <div className="w-1/2">
                <span className="text-[15px] text-[#1a1a1a]">
                  {client.contact}
                </span>
              </div>

              {/* READ */}
              <div className="ml-auto">
                <button
                  className="read-btn"
                  onClick={() => toggle(i)}
                >
                  {openIndex === i ? "CLOSE" : "READ"}
                </button>
              </div>
            </div>

            {/* Expanded Row */}
            <div className={`row-expand ${openIndex === i ? "open" : ""}`}>
              <div className="row-inner">
                <div className="flex gap-12 pb-10 pt-2">
                  {/* Services */}
                  <div className="w-1/3 pl-0">
                    <p className="text-[13px] text-[#888] mb-4 tracking-wide">
                      Services:
                    </p>
                    <div className="flex flex-col gap-2">
                      {client.services.map((s, j) => (
                        <span key={j} className="tag">{s}</span>
                      ))}
                    </div>
                  </div>

                  {/* Quote + Avatar */}
                  <div className="flex gap-8 flex-1">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <img
                        src={client.avatar}
                        alt={client.contact}
                        className="w-20 h-20 object-cover rounded-md grayscale"
                      />
                    </div>

                    {/* Name + Quote */}
                    <div>
                      <p className="text-[15px] font-medium text-[#1a1a1a] mb-3">
                        {client.contact}
                      </p>
                      <p className="text-[15px] text-[#1a1a1a] leading-relaxed max-w-md">
                        {client.quote}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Final divider */}
        <div className="h-px bg-[#c8c8c8]" />
      </div>
    </section>
  );
}