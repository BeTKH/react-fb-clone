import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel/StoryReel";
import MessageSender from "./MessageSender/MessageSender";
import Post from "./Post/Post";

function Feed() {
  return (
    <div class="feed">
      {/*storyReel component*/}
      <StoryReel />
      {/*Message Sender component*/}
      <MessageSender />

      {/*Posts*/}
      <Post
        profilePic="https://avatars.githubusercontent.com/beth"
        message="Summer vacation <3 🥰"
        timestamp="Jul 15 3:54 pm "
        username="bethh"
        image="https://images.unsplash.com/photo-1586902197503-e71026292412?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2372&q=80"
      />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
