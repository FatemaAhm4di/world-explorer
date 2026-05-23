// app/about/page.tsx
import { 
  Globe, 
  Search, 
  MapPin, 
  Languages, 
  Server, 
  Layout, 
  Shield, 
  Zap,
  Code2,
  Calendar,
  Link2,
  Award,
  Smartphone,
  Database,
  Sparkles
} from "lucide-react";

export default function AboutPage() {
  const features = [
    {
      icon: Globe,
      title: "240+ Countries",
      description: "Complete information about every country in the world including flags, capitals, and more."
    },
    {
      icon: Search,
      title: "Smart Search",
      description: "Powerful search functionality to find any country instantly by name."
    },
    {
      icon: MapPin,
      title: "Google Maps Integration",
      description: "Direct links to view any country on Google Maps."
    },
    {
      icon: Languages,
      title: "Multi-Language Data",
      description: "Information about official languages spoken in each country."
    },
    {
      icon: Database,
      title: "Real API Data",
      description: "Live data fetched from REST Countries API, always up-to-date."
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Fully responsive layout that works on desktop, tablet, and mobile devices."
    },
    {
      icon: Shield,
      title: "TypeScript Safety",
      description: "Built with TypeScript for better code quality and error prevention."
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimized with Next.js caching and static generation for blazing fast loads."
    }
  ];

  const techStack = [
    { name: "Next.js 15", icon: Code2, color: "#000000" },
    { name: "TypeScript", icon: Shield, color: "#3178C6" },
    { name: "REST Countries API", icon: Globe, color: "#667eea" },
    { name: "Lucide Icons", icon: Sparkles, color: "#94a3b8" },
    { name: "CSS3", icon: Layout, color: "#2965F1" },
    { name: "Vercel", icon: Server, color: "#000000" }
  ];

  const projectInfo = [
    { icon: Award, label: "Version", value: "1.0.0" },
    { icon: Calendar, label: "Year", value: new Date().getFullYear().toString() },
    { icon: Link2, label: "API Source", value: "REST Countries", link: "https://restcountries.com/" },
    { icon: Code2, label: "License", value: "MIT" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="about-hero">
        <h1 className="about-title">About World Explorer</h1>
        <p className="about-subtitle">
          A modern Next.js application for exploring countries around the globe
        </p>
      </div>

      {/* Description Section */}
      <div className="about-description">
        <p>
          World Explorer is a comprehensive country information platform built with 
          Next.js and TypeScript. It uses the official REST Countries API to provide 
          real-time data about every country in the world, including flags, capitals, 
          populations, currencies, languages, and more.
        </p>
        <br />
        <p>
          This project demonstrates modern web development practices including server 
          components, client components, dynamic routing, static and dynamic rendering, 
          and responsive design. Whether you are a student, traveler, or just curious 
          about the world, World Explorer helps you discover fascinating facts about 
          countries from every corner of the globe.
        </p>
      </div>

      {/* Features Grid */}
      <h2 className="section-title">Key Features</h2>
      <div className="about-features-grid">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="about-feature-card">
              <div className="about-feature-icon">
                <Icon size={28} />
              </div>
              <h3 className="about-feature-title">{feature.title}</h3>
              <p className="about-feature-description">{feature.description}</p>
            </div>
          );
        })}
      </div>

      {/* Tech Stack */}
      <h2 className="section-title">Technology Stack</h2>
      <div className="about-tech-grid">
        {techStack.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div key={index} className="about-tech-card">
              <Icon size={16} color={tech.color} />
              <span className="about-tech-name">{tech.name}</span>
            </div>
          );
        })}
      </div>

      {/* Project Info */}
      <div className="about-info-box">
        <div className="about-info-grid">
          {projectInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index}>
                <div className="about-info-icon">
                  <Icon size={20} />
                </div>
                <h3>{item.label}</h3>
                {item.link ? (
                  <p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: "#667eea" }}>
                      {item.value}
                    </a>
                  </p>
                ) : (
                  <p>{item.value}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}