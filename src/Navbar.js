import React, { useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import "./Navbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShopTwoSharpIcon from "@mui/icons-material/ShopTwoSharp";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
const Navbar = ({ toggleSidebar }) => {
  const [accountMenuAnchor, setAccountMenuAnchor] = useState(null);

  const handleAccountMenuOpen = (event) => {
    setAccountMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAccountMenuAnchor(null);
  };

  return (
    <div className="head">
      <div className="logo-container">
        <img src="mars.png" className="logo" alt="hey" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <MarkChatUnreadIcon />
          </li>
          <li>
            <ShopTwoSharpIcon onClick={handleAccountMenuOpen} />
          </li>
          <li>
            <AccountCircleIcon onClick={handleAccountMenuOpen} />
            <Menu
              className="dropdown"
              anchorEl={accountMenuAnchor}
              open={Boolean(accountMenuAnchor)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
