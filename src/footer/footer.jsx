"use client";

export default function Footer() {
  const linkStyle = {
    fontSize: "15px",
    color: "#1a1a1a",
    textDecoration: "underline",
    textUnderlineOffset: "3px",
    fontFamily: "sans-serif",
    cursor: "pointer",
    display: "block",
    lineHeight: "1.8",
  };

  const labelStyle = {
    fontSize: "15px",
    color: "#1a1a1a",
    fontFamily: "sans-serif",
    marginBottom: "8px",
    display: "block",
  };

  return (
    <div style={{ position: "relative" }}>

      
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          backgroundColor: "#c8f135",
          width: "100%",
          height: "100vh",
        }}
      />

    
      <div
        style={{
          position: "relative",
          zIndex: 10,
          backgroundColor: "#eaeae7",
          width: "100%",
          padding: "80px 48px 40px 48px",
          marginTop: "-100vh",
        }}
      >
       
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "start",
            marginBottom: "60px",
          }}
        >
          <div
            style={{
              fontSize: "clamp(60px, 10vw, 150px)",
              fontWeight: "900",
              color: "#1a1a1a",
              fontFamily: "'Inter','Arial Black',sans-serif",
              letterSpacing: "-3px",
              lineHeight: 0.88,
              textTransform: "uppercase",
            }}
          >
            EYE-
            <br />
            OPENING
          </div>
          <div
            style={{
              fontSize: "clamp(40px, 7vw, 110px)",
              fontWeight: "900",
              color: "#1a1a1a",
              fontFamily: "'Inter','Arial Black',sans-serif",
              letterSpacing: "-3px",
              lineHeight: 0.88,
              textTransform: "uppercase",
              textAlign: "right",
            }}
          >
            PRESENTATIONS
          </div>
        </div>

       
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "#c8c5be",
            marginBottom: "48px",
          }}
        />

      
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "40px",
            marginBottom: "80px",
          }}
        >
        
          <div>
            <span style={labelStyle}>S:</span>
            {["Instagram", "Behance", "Facebook", "Linkedin"].map((s) => (
              <a key={s} href="#" style={linkStyle}>
                {s}
              </a>
            ))}
          </div>

       
          <div>
            <span style={labelStyle}>L:</span>
            <a href="#" style={linkStyle}>202-1965 W 4th Ave</a>
            <a href="#" style={linkStyle}>Vancouver, Canada</a>
            <br />
            <a href="#" style={linkStyle}>30 Chukarina St</a>
            <a href="#" style={linkStyle}>Lviv, Ukraine</a>
          </div>

          
          <div>
            <span style={labelStyle}>E:</span>
            <a href="mailto:hello@ochi.design" style={linkStyle}>
              hello@ochi.design
            </a>
          </div>

          {/* M: Menu */}
          <div>
            <span style={labelStyle}>M:</span>
            {["Home", "Services", "Our work", "About us", "Insights", "Contact us"].map((m) => (
              <a key={m} href="#" style={linkStyle}>
                {m}
              </a>
            ))}
          </div>
        </div>

      
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            paddingTop: "24px",
            borderTop: "1px solid #c8c5be",
          }}
        >
          <span
            style={{
              fontSize: "28px",
              fontWeight: "700",
              color: "#1a1a1a",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "-1px",
            }}
          >
            ochi'
          </span>

          <span
            style={{
              fontSize: "13px",
              color: "#9e9b94",
              fontFamily: "sans-serif",
            }}
          >
            © ochi design 2026.{" "}
            <a
              href="#"
              style={{
                color: "#9e9b94",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              Legal Terms
            </a>
          </span>

          <span
            style={{
              fontSize: "13px",
              color: "#9e9b94",
              fontFamily: "sans-serif",
            }}
          >
            Website by Obys
          </span>
        </div>
      </div>
    </div>
  );
}     