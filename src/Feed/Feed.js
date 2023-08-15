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
        username="Beth Thompson"
        image="https://images.unsplash.com/photo-1586902197503-e71026292412?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2372&q=80"
      />

      <Post
        profilePic="https://avatars.githubusercontent.com/Jakee"
        message="Wholesome!"
        timestamp="Jul 15 3:54 pm "
        username="Jake ANDY"
        image="https://images.unsplash.com/photo-1679679008477-eeb6d3480167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
      />

      <Post
        profilePic="https://avatars.githubusercontent.com/matt"
        message="The Sky"
        timestamp="Jul 15 3:54 pm "
        username="Matt Jerrard"
        image="https://images.unsplash.com/photo-1517016006573-2eefaa2f5b63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
      />

      <Post
        profilePic="https://avatars.githubusercontent.com/eva"
        message="<3 🥰"
        timestamp="Jul 15 3:54 pm "
        username="Eva Simon"
        image="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
      />

      <Post
        profilePic="https://avatars.githubusercontent.com/lily"
        message="Chill<3 🥰"
        timestamp="Jul 15 3:54 pm "
        username="Lily Cameroom"
        image="https://images.unsplash.com/photo-1647891940243-77a6483a152e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
      />
    </div>
  );
}

export default Feed;
