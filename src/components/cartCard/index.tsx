import React from "react";
import css from "./cartCard.css";
import deleteIcon from "../../images/delete_icon.png";
import { Link } from "react-router-dom";
import { deleteItemFromCart } from "../../lib/api";

type CartCard = {
  src: string;
  title: string;
  price: number;
  id: string;
};

// Add delete option

export function CartCard(props: CartCard) {
  async function handleDeleteItem(e) {
    console.log(e.target);
    await deleteItemFromCart(props.id);
    alert("Item deleted");
    location.reload();
  }
  return (
    <div className={css.container}>
      <div className={css.imgContainer}>
        <img src={props.src} alt={props.title} />
      </div>
      <div className={css.textContainer}>
        <h4 className={css.title}>{props.title}</h4>
      </div>
      <div className={css.priceContainer}>
        <img
          onClick={handleDeleteItem}
          src={deleteIcon}
          alt=""
          className={css.deleteIcon}
        />
        <p className={css.price}>${props.price}</p>
        <Link className={css.link} to={"/item/" + props.id}>
          Inspect
        </Link>
      </div>
    </div>
  );
}
