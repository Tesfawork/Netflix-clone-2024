import React from "react";
import "./header.css";
import NetflixLogo from "../../asset/image/ay.jpg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  const navItems = [
    "Home",
    "TV Shows",
    "Movies",
    "Latest",
    "My List",
    "Browse by Languages",
  ];

  return (
    <header className="header">
      <div className="header_container">
        <div className="header_left">
          <img src={NetflixLogo} alt="Netflix Logo" className="header_logo" />
          <nav>
            <ul className="header_nav">
              {navItems.map((item, index) => (
                <li key={index} className="header_nav_item">
                  {item}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="header_right">
          <ul className="header_icons">
            <li title="Search">
              <SearchIcon />
            </li>
            <li title="Notifications">
              <NotificationsIcon />
            </li>
            <li title="Account">
              <AccountBoxIcon />
            </li>
            <li title="More Options">
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
