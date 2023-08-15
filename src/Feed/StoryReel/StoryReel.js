import React from "react";
import "./StoryReel.css";
import Story from "./Story/Story";

function StoryReel() {
  return (
    <div class="storyReel">
      <Story
        image="https://images.unsplash.com/photo-1622841440556-df100c5dd6c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
        reelAvatar="https://avatars.githubusercontent.com/leb"
        reelName="Leb"
      />

      <Story
        image="https://images.unsplash.com/photo-1507768738058-c38687b47c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80"
        reelAvatar="https://avatars.githubusercontent.com/hdeadman"
        reelName="hdeadman"
      />

      <Story
        image="https://images.unsplash.com/photo-1636642489945-2ba8dcee6ad5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2526&q=80"
        reelAvatar="https://avatars.githubusercontent.com/mattt"
        reelName="Mattt"
      />
      <Story
        image="https://images.unsplash.com/photo-1536180931879-fd2d652efddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
        reelAvatar="https://avatars.githubusercontent.com/mat"
        reelName="Mat"
      />

      <Story
        image="https://images.unsplash.com/photo-1531256531532-c204874abbff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
        reelAvatar="https://avatars.githubusercontent.com/schindler"
        reelName="Schindler"
      />
    </div>
  );
}

export default StoryReel;
