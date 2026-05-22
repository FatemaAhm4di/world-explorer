import Link from "next/link";
import { Compass, Globe, Search, TrendingUp } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center text-center">
        <div className="fade-in-up">
          <h1 className="page-title" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            World Explorer
          </h1>
          
          <p className="page-description" style={{ marginBottom: "2rem" }}>
            Explore countries around the world and learn about their flags, 
            capitals, populations, currencies, and languages.
          </p>

          <Link href="/countries" className="btn-primary">
            Explore Countries
            <Compass size={18} />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="glass" style={{ padding: "3rem 2rem", marginTop: "2rem" }}>
        <div className="grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
          maxWidth: "1000px",
          margin: "0 auto"
        }}>
          {[
            { icon: Globe, title: "240+ Countries", desc: "Complete information about every country in the world" },
            { icon: Search, title: "Smart Search", desc: "Find any country instantly with our powerful search" },
            { icon: TrendingUp, title: "Live Data", desc: "Real-time data fetched from REST Countries API" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="glass-card" style={{ textAlign: "center", padding: "2rem" }}>
                <div style={{
                  width: "64px",
                  height: "64px",
                  background: "rgba(255,255,255,0.2)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem"
                }}>
                  <Icon size={28} color="white" />
                </div>
                <h3 style={{ color: "white", marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.8)" }}>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}