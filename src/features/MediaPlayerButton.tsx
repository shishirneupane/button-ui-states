import { useState } from "react";
import Button from "../components/Button";
import PlayCircleOutlined from "@mui/icons-material/PlayCircleOutlined";
import PauseCircleOutlined from "@mui/icons-material/PauseCircleOutlined";

const MediaPlayerButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayer = () => setIsPlaying((isPlaying) => !isPlaying);

  return (
    <Button className="btn-player" onClick={togglePlayer}>
      <div className="player-controls">
        {isPlaying ? (
          <PauseCircleOutlined sx={{ fontSize: "40px" }} />
        ) : (
          <PlayCircleOutlined sx={{ fontSize: "40px" }} />
        )}
        <p>{isPlaying ? "PAUSE" : "PLAY"}</p>
      </div>
      <p className="player-duration">0:35 / 5:23</p>
    </Button>
  );
};

export default MediaPlayerButton;
