import Link from "next/link";
import { Compass, Globe, Search, TrendingUp } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      <section style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "4rem 1rem"
      }}>
        <div className="fade-in-up">
          <h1 style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 800,
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "1rem"
          }}>World Explorer</h1>
          
          <p style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "#4a5568",
            maxWidth: "600px",
            margin: "0 auto 2rem",
            lineHeight: 1.6
          }}>
            Explore countries around the world and learn about their flags, 
            capitals, populations, currencies, and languages.
          </p>

          <Link href="/countries" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            color: "white",
            padding: "0.875rem 2rem",
            borderRadius: "50px",
            textDecoration: "none",
            fontWeight: 600
          }}>
            Explore Countries
            <Compass size={18} />
          </Link>
        </div>
      </section>

      <section style={{
        padding: "4rem 0",
        background: "white",
        borderRadius: "2rem 2rem 0 0"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1rem"
        }}>
          {[
            { icon: Globe, title: "240+ Countries", desc: "Complete information about every country" },
            { icon: Search, title: "Smart Search", desc: "Find any country instantly" },
            { icon: TrendingUp, title: "Live Data", desc: "Real-time data from REST API" }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} style={{ textAlign: "center", padding: "1.5rem" }}>
                <div style={{
                  width: "64px",
                  height: "64px",
                  background: "linear-gradient(135deg, #667eea20, #764ba220)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem"
                }}>
                  <Icon size={28} color="#667eea" />
                </div>
                <h3 style={{ marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: "#6b7280" }}>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}