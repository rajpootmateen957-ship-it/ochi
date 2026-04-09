import React from "react";

export default function BadgeCards() {
  return (
    <section style={{ width: "100%", backgroundColor: "#e8e8e5", padding: "60px 48px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: "1100px", display: "grid", gridTemplateColumns: "1.8fr 1fr 1fr", gap: "16px", alignItems: "stretch" }}>

        
        <div style={{
          backgroundColor: "#1a5c47",
          borderRadius: "20px",
          padding: "40px 48px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "340px",
        }}>
          
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{
              fontSize: "80px",
              fontWeight: "800",
              color: "#c8f135",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "-3px",
              lineHeight: 1,
            }}>
              ochi<span style={{ fontSize: "90px", fontWeight: "800", letterSpacing: 0 }}>&lsquo;</span>
            </span>
          </div>

         
          <div>
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "7px 18px",
              borderRadius: "999px",
              border: "1.5px solid #c8f135",
              fontSize: "13px",
              color: "#c8f135",
              letterSpacing: "0.02em",
              fontFamily: "sans-serif",
            }}>
              ©2019–2025
            </span>
          </div>
        </div>

       
        <div style={{
          backgroundColor: "#222222",
          borderRadius: "20px",
          padding: "40px 32px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "340px",
        }}>
        
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "16px" }}>
            <span style={{
              fontSize: "58px",
              fontWeight: "700",
              color: "#ffffff",
              fontFamily: "Georgia, serif",
              letterSpacing: "-1px",
              lineHeight: 1,
            }}>
              Clutch
            </span>
            <div style={{ display: "flex", gap: "6px" }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#c8f135">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
              ))}
            </div>
          </div>

          
          <div>
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "7px 18px",
              borderRadius: "999px",
              border: "1.5px solid rgba(255,255,255,0.4)",
              fontSize: "11px",
              color: "#ffffff",
              letterSpacing: "0.1em",
              fontWeight: "500",
              fontFamily: "sans-serif",
              whiteSpace: "nowrap",
            }}>
              RATING 5.0 ON CLUTCH
            </span>
          </div>
        </div>

       
        <div style={{
          backgroundColor: "#222222",
          borderRadius: "20px",
          padding: "40px 32px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "340px",
        }}>
      
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="150" height="150" viewBox="0 0 160 160">
             
              {[...Array(48)].map((_, i) => {
                const angle = (i * 360) / 48;
                const rad = (angle * Math.PI) / 180;
                const x1 = 80 + 64 * Math.cos(rad);
                const y1 = 80 + 64 * Math.sin(rad);
                const x2 = 80 + 74 * Math.cos(rad);
                const y2 = 80 + 74 * Math.sin(rad);
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="1.2" opacity="0.8" />;
              })}
              
              <circle cx="80" cy="80" r="60" fill="none" stroke="white" strokeWidth="1" opacity="0.6" />
              
              <circle cx="80" cy="80" r="44" fill="none" stroke="white" strokeWidth="1" opacity="0.5" />

              
              <text x="80" y="88" textAnchor="middle" fill="white" fontSize="24" fontWeight="700" fontFamily="serif">A</text>

              
              <path id="topArc2" d="M 26,80 A 54,54 0 0,1 134,80" fill="none" />
              <text fontSize="7.5" fill="white" letterSpacing="2.5" fontFamily="sans-serif" fontWeight="500">
                <textPath href="#topArc2" startOffset="8%">THE FUTUR ACADEMY</textPath>
              </text>

            
              <path id="botArc2" d="M 34,88 A 48,48 0 0,0 126,88" fill="none" />
              <text fontSize="6.5" fill="white" letterSpacing="3" fontFamily="sans-serif">
                <textPath href="#botArc2" startOffset="18%">CALIFORNIA</textPath>
              </text>
            </svg>
          </div>

          
          <div>
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "8px 22px",
              borderRadius: "999px",
              border: "1.5px solid rgba(255,255,255,0.4)",
              fontSize: "11px",
              color: "#ffffff",
              letterSpacing: "0.1em",
              fontWeight: "500",
              fontFamily: "sans-serif",
              lineHeight: "1.5",
            }}>
              BUSINESS BOOTCAMP<br />ALUMNI
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}    