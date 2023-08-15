import React, { useState } from "react";
import "./MessageSender.css";
import Avatar from "@mui/material/Avatar";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

function MessageSender() {
  const [input, setInput] = useState("");
  const [ImageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    {
      /*preventing the default behavior - stop refreshing when clicked*/
    }
    e.preventDefault();

    // some db stuff

    setInput("");
    setImageUrl("");
  };

  return (
    <div class="messageSender">
      <div class="messageSender__top">
        <Avatar />
        <form action="">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)} //set the keyobard input
            className="messageSender__Input"
            placeholder="What's on your mind ?"
            type="text"
          />

          <input
            value={ImageUrl}
            onChange={(e) => setImageUrl(e.target.value)} //set the keyobard inpt for url
            placeholder="Image URL (optional)"
            type="text"
          />

          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div class="messageSender__bottom">
        <div class="messageSendier__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div class="messageSendier__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div class="messageSendier__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
