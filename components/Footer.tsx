import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>World Explorer</h3>
            <p>Discover countries, cultures, and amazing places around the globe with our glassmorphism design.</p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/countries">Countries</a></li>
              <li><a href="/search">Search</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Connect</h3>
            <div className="footer-social">
              <a href="#">GitHub</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Made with <Heart size={14} color="#ef4444" fill="#ef4444" /> using Next.js & REST Countries API
          </p>
          <p>© {currentYear} World Explorer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}