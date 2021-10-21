import { useState } from "react";
import imageProduct from "./assets/images/product.png";
import { ProductCard } from "./components/ProductCard/ProductCard";
import "./App.css";

const products = Array.from({ length: 2 }, (_, index) => ({
  id: index + 1,
  image: imageProduct,
  name: "Monitor LED 27 Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
  discount: "R$ 2.813,99",
  price: "R$ 2.599,00",
  installments: "10x de R$ 259,90",
}));

function App() {
  const [wishList, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddToWishlist = (id) => {
    if (wishList.includes(id)) {
      const filteredWishlistItems = wishList.filter((favId) => favId !== id);
      setWishlist(filteredWishlistItems);
    } else {
      setWishlist([...wishList, id]);
    }
  };

  const handleAddToCart = (id) => {
    if (cart.includes(id)) {
      const filteredCartItems = cart.filter((favId) => favId !== id);
      setCart(filteredCartItems);
    } else {
      setCart([...cart, id]);
    }
  };

  return (
    <div className="App">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          isAdded={cart.includes(product.id)}
          isFavorite={wishList.includes(product.id)}
          handleAddToWishlist={() => handleAddToWishlist(product.id)}
          handleAddToCart={() => handleAddToCart(product.id)}
          {...product}
        />
      ))}
    </div>
  );
}

export default App;
