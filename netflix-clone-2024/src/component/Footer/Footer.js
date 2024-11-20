import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer__outer-container">
      <div className="footer__inner-container">
        <div className="footer__icons">
          <FacebookIcon aria-label="Facebook" />
          <InstagramIcon aria-label="Instagram" />
          <YouTubeIcon aria-label="YouTube" />
        </div>
        <div className="footer__links">
          <nav>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </nav>
        </div>
        <div className="footer__service-code">
          <p>Service Code</p>
        </div>
        <div className="footer__copyright">
          <p>&copy; 1997-2024 Netflix, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
