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
import ChatIcon from "@mui/icons-material/Chat";
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
          <div class="header__option header__option--active">
            <HomeIcon fontSize="large" />
          </div>
          <div class="header__option">
            <FlagIcon fontSize="large" />
          </div>
          <div class="header__option">
            <SubscriptionsOutlinedIcon fontSize="large" />
          </div>
          <div class="header__option">
            <StorefrontOutlinedIcon fontSize="large" />
          </div>
          <div class="header__option">
            <SupervisedUserCircleIcon fontSize="large" />
          </div>
        </div>

        <div class="header__right">
          <IconButton>
            <AddIcon />
          </IconButton>

          <IconButton>
            <ChatIcon />
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

          <div class="header__info">
            <Avatar src="https://avatars.githubusercontent.com/BeTKH" />
            <h4></h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
