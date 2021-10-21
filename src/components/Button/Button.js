import { IcCheck } from "../../assets/icons";
import "./Button.css";

export const Button = ({
  children,
  isAdded,
  handleFavoriteProduct,
  ...props
}) => {
  return (
    <button className={isAdded ? "wrapper added" : "wrapper"} {...props}>
      {isAdded && <IcCheck />}
      {children}
    </button>
  );
};
