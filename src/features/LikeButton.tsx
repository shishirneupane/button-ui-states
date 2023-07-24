import { useState } from "react";
import Button from "../components/Button";

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
    <div className="like-counter">
      <Button className="btn-like" onClick={increaseLikeCount}>
        {isLiked ? "UNLIKE" : "LIKE"}
      </Button>
      <p className="like-count">{likeCount}</p>
    </div>
  );
};

export default LikeButton;
