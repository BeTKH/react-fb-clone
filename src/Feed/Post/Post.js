import React from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";
import PublicIcon from "@mui/icons-material/Public";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";

function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar className="post__avatar" src={profilePic} />

        <div className="post__topInfo">
          <h3>{username}</h3>
          <div class="timeStamp__privacy">
            <p>2d .</p>
            <PublicIcon className="public" />
          </div>
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>

      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>

        <div className="post__option">
          <CommentIcon />
          <p>Comment</p>
        </div>

        <div className="post__option">
          <ShareIcon />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
