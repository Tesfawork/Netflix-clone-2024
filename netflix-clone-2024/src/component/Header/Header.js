import React from "react";
import "./header.css";
import NetflixLogo from "https://t1.gstatic.com/images?q=tbn:ANd9GcTDtWF5XSjCv2sKbO5Aq_L9UjMZ5_EFDrgkOdaMeCxo0eIRi979";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  return (
    <div>
      <div className="header_outer_container"></div>
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img src="{NetflixLogo}" alt="Netflix Logo" width="100" />
            </li>
            <li>HOME</li>
            <li>TV shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>Mylists</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropdownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
