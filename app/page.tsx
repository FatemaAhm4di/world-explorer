// app/page.tsx
export default function HomePage() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1 style={{ color: "blue", fontSize: "48px" }}>🌍 World Explorer</h1>
      <p style={{ fontSize: "20px", marginTop: "20px" }}>
        Explore countries around the world and learn about their flags, capitals, populations, currencies, and languages.
      </p>
      <a 
        href="/countries" 
        style={{
          display: "inline-block",
          marginTop: "30px",
          padding: "12px 24px",
          backgroundColor: "blue",
          color: "white",
          textDecoration: "none",
          borderRadius: "8px",
          fontSize: "18px"
        }}
      >
        Explore Countries →
      </a>
    </div>
  );
}