import React from "react";
import { Link } from "react-router-dom";
import css from "./itemCard.css";
import { addToCart } from "../../lib/api";
import { useCartState } from "../../hooks";

type ItemCardProps = {
  title: string;
  picture: string;
  price: string;
  key: string;
  id: string;
};

export function ItemCard(props: ItemCardProps) {
  const [cart, setCart] = useCartState();
  async function handleAddCart(e) {
    const add = await addToCart(props.id);
    console.log("added ?", add);
  }
  return (
    <div className={css.mainContainer}>
      <div className={css.cardContainer}>
        <img src={props.picture} alt={props.title} className={css.picture} />
        <div className={css.propertiesContainer}>
          <h4 className={css.title}>{props.title}</h4>
          <h4 className={css.priceContainer}>
            Price : $ <span className={css.price}>{props.price}</span>
          </h4>
        </div>
        <div className={css.bottomText}>
          <Link to={"/item/" + props.id} className={css.link}>
            See more
          </Link>
          <h6 onClick={handleAddCart} className={css.addCart}>
            Add to cart
          </h6>
        </div>
      </div>
    </div>
  );
}
