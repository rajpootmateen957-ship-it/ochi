export default function ClientsReviews() {
  return (
    <section style={{ backgroundColor: "#ebebе8", minHeight: "100vh", padding: "56px 48px 0 48px", fontFamily: "sans-serif" }}>

      {/* Heading */}
      <h1 style={{ fontSize: "52px", fontWeight: "400", color: "#1a1a1a", margin: "0 0 40px 0", letterSpacing: "-0.5px", lineHeight: 1.1 }}>
        Clients&apos; reviews
      </h1>

      {/* Top divider */}
      <div style={{ width: "100%", height: "1px", backgroundColor: "#c8c5be" }} />

      {/* Row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr auto", gap: "0 24px", padding: "32px 0", borderBottom: "1px solid #c8c5be", alignItems: "start" }}>

        {/* Col 1 — Company */}
        <div>
          <span style={{ fontSize: "15px", color: "#1a1a1a", textDecoration: "underline", textUnderlineOffset: "3px", cursor: "pointer" }}>
            Karman Ventures
          </span>
        </div>

        {/* Col 2 — Services */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          <p style={{ fontSize: "15px", color: "#1a1a1a", margin: "0 0 20px 0" }}>Services:</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{
              display: "inline-flex",
              width: "fit-content",
              alignItems: "center",
              padding: "8px 20px",
              borderRadius: "999px",
              border: "1px solid #1a1a1a",
              fontSize: "12px",
              letterSpacing: "0.08em",
              color: "#1a1a1a",
              fontWeight: "500"
            }}>
              INVESTOR DECK
            </span>
            <span style={{
              display: "inline-flex",
              width: "fit-content",
              alignItems: "center",
              padding: "8px 20px",
              borderRadius: "999px",
              border: "1px solid #1a1a1a",
              fontSize: "12px",
              letterSpacing: "0.08em",
              color: "#1a1a1a",
              fontWeight: "500"
            }}>
              SALES DECK
            </span>
          </div>
        </div>

        {/* Col 3 — Reviewer */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "15px", color: "#1a1a1a", margin: "0" }}>William Barnes</p>

          {/* Avatar */}
          <div style={{
            width: "90px",
            height: "90px",
            borderRadius: "12px",
            backgroundColor: "#d4d1ca",
            overflow: "hidden",
            flexShrink: 0
          }}>
            <img
              src="/avatar.jpg"
              alt="William Barnes"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          </div>

          {/* Review */}
          <p style={{
            fontSize: "15px",
            color: "#1a1a1a",
            lineHeight: "1.65",
            margin: "0",
            maxWidth: "420px"
          }}>
            They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5
          </p>
        </div>

        {/* Col 4 — Read */}
        <div>
          <span style={{
            fontSize: "13px",
            color: "#9e9b94",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            cursor: "pointer"
          }}>
            READ
          </span>
        </div>

      </div>
    </section>
  );
}  