import Avatar from "@mui/material/Avatar";
import React from "react";
import "./Story.css";

function Story({ image, reelAvatar, reelName }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} class="story">
      <Avatar className="story__avatar" src={reelAvatar} />
      <h4>{reelName}</h4>
    </div>
  );
}

export default Story;
