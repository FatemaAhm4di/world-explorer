// app/countries/page.tsx
import Link from "next/link";

interface Country {
  cca3: string;
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
    svg: string;
  };
  capital: string[];
  region: string;
  population: number;
}

export const dynamic = "force-static";

async function getCountries(): Promise<Country[]> {
  try {
    // Using a different endpoint that works better
    const res = await fetch("https://restcountries.com/v3.1/independent?status=true", {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "User-Agent": "Mozilla/5.0"
      },
      cache: "force-cache",
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }
    
    const data = await res.json();
    return data;
    
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
}

export default async function CountriesPage() {
  const countries = await getCountries();
  
  if (!countries || countries.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem", color: "white" }}>Explore Countries</h1>
        <p style={{ color: "#94a3b8" }}>
          Unable to load countries at the moment. Please try again later.
        </p>
        <button 
          onClick={() => window.location.reload()} 
          style={{
            marginTop: "1rem",
            padding: "0.5rem 1.5rem",
            background: "#667eea",
            color: "white",
            border: "none",
            borderRadius: "0.5rem",
            cursor: "pointer"
          }}
        >
          Try Again
        </button>
      </div>
    );
  }
  
  const first20Countries = countries.slice(0, 20);
  
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Explore Countries</h1>
        <p className="page-description">
          Discover amazing countries from around the world
        </p>
      </div>
      
      <div className="countries-grid">
        {first20Countries.map((country: Country) => {
          const countryName = country.name?.common || "Unknown";
          const countryFlag = country.flags?.png || "";
          const countryCapital = country.capital?.[0] || "N/A";
          const countryRegion = country.region || "Unknown";
          const countryPopulation = country.population?.toLocaleString() || "N/A";
          
          return (
            <div key={country.cca3} className="country-card">
              {countryFlag && (
                <img 
                  src={countryFlag} 
                  alt={`Flag of ${countryName}`}
                  className="country-flag"
                />
              )}
              
              <div className="country-info">
                <h2 className="country-name">{countryName}</h2>
                
                <p className="country-detail">
                  <strong>Capital:</strong> {countryCapital}
                </p>
                
                <p className="country-detail">
                  <strong>Region:</strong> {countryRegion}
                </p>
                
                <p className="country-detail">
                  <strong>Population:</strong> {countryPopulation}
                </p>
                
                <Link 
                  href={`/countries/${country.cca3}`} 
                  className="details-button"
                >
                  View Details →
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}