import React from "react";
import { Link } from "react-router-dom";
import css from "./itemCard.css";

type ItemCardProps = {
  title: string;
  picture: string;
  price: string;
  key: string;
  id: string;
};

export function ItemCard(props: ItemCardProps) {
  function handleAddCart() {
    console.log("Added to card");
  }
  return (
    <div className={css.container}>
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
  );
}
