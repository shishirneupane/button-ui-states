import "./App.css";
import AddToCartButton from "./features/AddToCartButton";
import LikeButton from "./features/LikeButton";
import MediaPlayerButton from "./features/MediaPlayerButton";

function App() {
  return (
    <div className="btn-container">
      <AddToCartButton />
      <LikeButton />
      <MediaPlayerButton />
    </div>
  );
}

export default App;
