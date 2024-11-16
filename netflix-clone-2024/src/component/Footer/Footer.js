import React from "react";
import facebookicon from "@mui/icons-material/Facebook";
import Instagramicon from "@mui/icons-material/Instagram";
import youtubeicon from "@mui/icons-material/YouTube";
import "./footer.css";
const Footer = () => {
  return (
    <div className="Footer_outer_container">
      <div className="Footer_inner_cotainer">
        <div className="Footer_icons">
          <facebookicon />
          <Instagramicon />
          <youtubeicon />
        </div>
      </div>
      <div className="Footer_data">
        <div>
          <ul>
            <li> Audio Description </li>
            <li> Invester Relation </li>
            <li> Legal Notice </li>
          </ul>
        </div>
      </div>
      <div>
        <ul>
          <li> Help center </li>
          <li> Jobs </li>
          <li> cookie performance </li>
        </ul>
      </div>
      <div>
        <ul>
          <li> Gift card </li>
          <li> Tesrm of use </li>
          <li> Corporate information </li>
        </ul>
      </div>
      <div>
        <ul>
          <li> Media center </li>
          <li> Privecy </li>
          <li> Cotact us </li>
        </ul>
      </div>
      <div className="service_code">
        <p> service_code</p>
      </div>
      <div className="copy-right">copy: 1997-2024 Netflix, INC</div>;
    </div>
  );
};

export default Footer;
