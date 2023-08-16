import React from 'react';
import { Player } from 'video-react';
import "node_modules/video-react/dist/video-react.css";

const HeroVideoTab = () => {
  return (
    <Player
      playsInline
      poster=""
      src="../files/demo_vid_01_optim - 02.mp4"
    />
  )
}

export default HeroVideoTab;