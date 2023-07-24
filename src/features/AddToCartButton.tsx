import { useState } from "react";
import Button from "../components/Button";

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
      <Button className="cart-counter-btn" onClick={decreaseCartCount}>
        -
      </Button>
      <span>{cartCount}</span>
      <Button className="cart-counter-btn" onClick={increaseCartCount}>
        +
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
      ADD TO CART
    </Button>
  );
};

export default AddToCartButton;
