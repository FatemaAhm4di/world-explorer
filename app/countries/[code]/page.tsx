// app/countries/[code]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";

interface CountryDetail {
  cca3: string;
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  capital: string[];
  region: string;
  subregion: string;
  population: number;
  languages: Record<string, string>;
  currencies: Record<string, { name: string; symbol: string }>;
  timezones: string[];
  maps: {
    googleMaps: string;
  };
}

// Dynamic page - fetches fresh data every time
export const dynamic = "force-dynamic";

async function getCountry(code: string): Promise<CountryDetail | null> {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`, {
      cache: "no-store", // Fresh data every time
    });
    
    if (!res.ok) {
      return null;
    }
    
    const data = await res.json();
    return data[0];
    
  } catch (error) {
    console.error("Error fetching country:", error);
    return null;
  }
}

interface PageProps {
  params: Promise<{ code: string }>;
}

export default async function CountryDetailsPage({ params }: PageProps) {
  const { code } = await params;
  const country = await getCountry(code);
  
  if (!country) {
    notFound();
  }
  
  // Format languages
  const languagesList = country.languages 
    ? Object.values(country.languages).join(", ")
    : "N/A";
  
  // Format currencies
  const currenciesList = country.currencies
    ? Object.values(country.currencies).map(c => `${c.name} (${c.symbol})`).join(", ")
    : "N/A";
  
  return (
    <div>
      <Link href="/countries" className="details-back-button">
        ← Back to Countries
      </Link>
      
      <div className="country-details-container">
        <div className="country-details-flag">
          <img 
            src={country.flags.png} 
            alt={`Flag of ${country.name.common}`}
          />
        </div>
        
        <div className="country-details-info">
          <h1 className="country-details-name">{country.name.common}</h1>
          <p className="country-details-official">
            <strong>Official Name:</strong> {country.name.official}
          </p>
          
          <div className="country-details-grid">
            <div>
              <p><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Subregion:</strong> {country.subregion || "N/A"}</p>
              <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            </div>
            <div>
              <p><strong>Languages:</strong> {languagesList}</p>
              <p><strong>Currencies:</strong> {currenciesList}</p>
              <p><strong>Timezones:</strong> {country.timezones?.join(", ") || "N/A"}</p>
            </div>
          </div>
          
          <a 
            href={country.maps.googleMaps} 
            target="_blank" 
            rel="noopener noreferrer"
            className="details-maps-button"
          >
            View on Google Maps →
          </a>
        </div>
      </div>
    </div>
  );
}