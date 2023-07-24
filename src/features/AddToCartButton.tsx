import { useState } from "react";
import Button from "../components/Button";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";

interface ICartCounterProps {
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
  decreaseCartCount: () => void;
  increaseCartCount: () => void;
}

const CartCounter = ({
  cartCount,
  decreaseCartCount,
  increaseCartCount,
}: ICartCounterProps) => {
  return (
    <div className="cart-counter">
      <Button
        className="cart-counter-btn"
        disabled={cartCount <= 0}
        onClick={decreaseCartCount}
      >
        <Remove sx={{ fontSize: "40px" }} />
      </Button>
      <span>{cartCount}</span>
      <Button className="cart-counter-btn" onClick={increaseCartCount}>
        <Add sx={{ fontSize: "40px" }} />
      </Button>
    </div>
  );
};

const AddToCartButton = () => {
  const [cartCount, setCartCount] = useState(0);

  const increaseCartCount = () => {
    setCartCount((cartCount) => cartCount + 1);
  };

  const decreaseCartCount = () => {
    setCartCount((cartCount) => cartCount - 1);
  };

  if (cartCount > 0) {
    return (
      <CartCounter
        cartCount={cartCount}
        setCartCount={setCartCount}
        decreaseCartCount={decreaseCartCount}
        increaseCartCount={increaseCartCount}
      />
    );
  }

  return (
    <Button className="btn-cart" onClick={increaseCartCount}>
      <ShoppingCartOutlined sx={{ fontSize: "40px" }} />
      <p>ADD TO CART</p>
    </Button>
  );
};

export default AddToCartButton;
