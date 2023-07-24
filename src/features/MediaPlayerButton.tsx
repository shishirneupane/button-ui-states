import { useState } from "react";
import Button from "../components/Button";

const MediaPlayerButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayer = () => setIsPlaying((isPlaying) => !isPlaying);

  return (
    <Button className="btn-player" onClick={togglePlayer}>
      <p>+</p>
      <p>{isPlaying ? "PAUSE" : "PLAY"}</p>
      <p className="player-duration">0:35 / 5:23</p>
    </Button>
  );
};

export default MediaPlayerButton;
