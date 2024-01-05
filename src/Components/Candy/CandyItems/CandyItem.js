import { useCandy } from "../../CandyContext";
import classes from "./CandyItem.module.css";
const CandyItem = (props) => {
  const price = `$${props.price}`;
  const {addToCart} = useCandy()
  const handleAddToCart = () => {
    addToCart(props); // Add the entire candy object to the cart
  };
  return (
    <>
      <div className={classes.meal}>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </>
  );
};
export default CandyItem;
