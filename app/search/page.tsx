// app/search/page.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X, Loader2 } from "lucide-react";

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

export default function SearchPage() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch all countries - using different endpoint
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        // Using a more reliable endpoint
        const res = await fetch("https://restcountries.com/v3.1/independent?status=true");
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const data = await res.json();
        
        if (Array.isArray(data) && data.length > 0) {
          setCountries(data);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        // Fallback: try another endpoint
        try {
          const res2 = await fetch("https://restcountries.com/v3.1/lang/eng");
          const data2 = await res2.json();
          if (Array.isArray(data2)) {
            setCountries(data2);
          }
        } catch (error2) {
          console.error("Both endpoints failed:", error2);
        }
      } finally {
        setLoading(false);
      }
    };
    
    fetchCountries();
  }, []);

  // Filter countries
  const filteredCountries = countries.filter((country) =>
    searchTerm.trim() === "" 
      ? true 
      : country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const clearSearch = () => {
    setSearchTerm("");
  };

  if (loading) {
    return (
      <div className="loading-container">
        <Loader2 className="loading-spinner" size={40} />
        <p>Loading 250+ countries...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Search Countries</h1>
        <p className="page-description">
          Find any country by name from {countries.length}+ countries worldwide
        </p>
      </div>

      <div className="search-container">
        <div className="search-input-wrapper">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Search for a country... (e.g., Iran, Japan, Germany)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          {searchTerm && (
            <button onClick={clearSearch} className="search-clear">
              <X size={18} />
            </button>
          )}
        </div>

        {searchTerm && (
          <p className="search-results-count">
            Found {filteredCountries.length} result{filteredCountries.length !== 1 ? "s" : ""}
          </p>
        )}
      </div>

      {filteredCountries.length === 0 && searchTerm ? (
        <div className="no-results">
          <Search size={48} />
          <p>No countries found matching {searchTerm}</p>
          <p style={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>
            Try: Iran, Japan, Germany, Brazil, Canada
          </p>
          <button onClick={clearSearch} className="clear-button">
            Clear Search
          </button>
        </div>
      ) : (
        <div className="countries-grid">
          {filteredCountries.map((country) => (
            <div key={country.cca3} className="country-card">
              <Image
                src={country.flags.png || "https://flagcdn.com/w320/un.png"}
                alt={`Flag of ${country.name.common}`}
                width={320}
                height={200}
                className="country-flag"
                unoptimized
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://flagcdn.com/w320/un.png";
                }}
              />
              <div className="country-info">
                <h2 className="country-name">{country.name.common}</h2>
                <p className="country-detail">
                  <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
                </p>
                <p className="country-detail">
                  <strong>Region:</strong> {country.region}
                </p>
                <p className="country-detail">
                  <strong>Population:</strong> {country.population.toLocaleString()}
                </p>
                <Link href={`/countries/${country.cca3}`} className="details-button">
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}