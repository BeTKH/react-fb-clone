import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Header() {
  return (
    <>
      {/* header_left = for logo */}
      <div className="header">
        <div class="header__left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
            alt="face book logo"
          ></img>
          <div class="header__input">
            <SearchIcon />
            <input type="text" />
          </div>
        </div>

        <div class="header__center">
          <div class="header__option">
            <HomeIcon />
          </div>
          <div class="header__option">
            <FlagIcon />
          </div>
          <div class="header__option">
            <SubscriptionsOutlinedIcon />
          </div>
          <div class="header__option">
            <StorefrontOutlinedIcon />
          </div>
          <div class="header__option">
            <SupervisedUserCircleIcon />
          </div>
        </div>

        <div class="header__right">
          <div class="header__info">
            <Avatar />
            <h4>Bek kobro</h4>
          </div>

          <IconButton>
            <AddIcon />
          </IconButton>

          <IconButton>
            <ForumIcon />
          </IconButton>

          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>

          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
}

export default Header;
