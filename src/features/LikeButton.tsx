import { useState } from "react";
import Button from "../components/Button";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(492);

  const toggleIsLiked = () => setIsLiked((isLiked) => !isLiked);

  const increaseLikeCount = () => {
    if (isLiked) {
      setLikeCount((likeCount) => likeCount - 1);
      return toggleIsLiked();
    }
    setLikeCount((likeCount) => likeCount + 1);
    return toggleIsLiked();
  };

  return (
    <Button className="btn-like" onClick={increaseLikeCount}>
      <div className="like-text">
        {isLiked ? (
          <Favorite color="error" sx={{ fontSize: "40px" }} />
        ) : (
          <FavoriteBorder sx={{ fontSize: "40px" }} />
        )}
        <p>{isLiked ? "LIKED" : "LIKE"}</p>
      </div>
      <p className="like-count">{likeCount}</p>
    </Button>
  );
};

export default LikeButton;
