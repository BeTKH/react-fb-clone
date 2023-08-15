import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel/StoryReel";
import MessageSender from "./MessageSender/MessageSender";

function Feed() {
  return (
    <div class="feed">
      {/*storyReel component*/}
      <StoryReel />
      {/*Message Sender component*/}
      <MessageSender />
    </div>
  );
}

export default Feed;
