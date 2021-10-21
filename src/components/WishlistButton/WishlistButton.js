import { IcHeart } from "../../assets/icons";
import "./WishlistButton.css";

export const WishlistButton = ({ isFavorite, ...props }) => {
  return (
    <button
      className={isFavorite ? "wishListWrapper added" : "wishListWrapper"}
      {...props}
    >
      <IcHeart />
    </button>
  );
};
