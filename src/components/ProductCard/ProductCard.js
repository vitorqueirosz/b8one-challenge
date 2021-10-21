import { Button } from "../Button/Button";
import { WishlistButton } from "../WishlistButton/WishlistButton";
import "./ProductCard.css";

export const ProductCard = ({
  image,
  name,
  discount,
  price,
  installments,
  handleAddToWishlist,
  handleAddToCart,
  isAdded,
  isFavorite,
}) => {
  const buttonLabelText = isAdded ? "Adicionado" : "Adicionar";

  return (
    <article className="productWrapper">
      <div className="imageContainer">
        <img src={image} alt={name} />
        <WishlistButton isFavorite={isFavorite} onClick={handleAddToWishlist} />
      </div>

      <div className="content">
        <span>{name}</span>

        <div className="price">
          {discount && <p>{discount}</p>}
          <h3>{price}</h3>
          <small>
            em até <strong>{installments}</strong> sem juros
          </small>
        </div>
      </div>

      <Button isAdded={isAdded} onClick={handleAddToCart}>
        {buttonLabelText}
      </Button>
    </article>
  );
};
