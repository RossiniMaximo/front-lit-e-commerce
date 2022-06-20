import React, { useEffect, useState } from "react";
import { CartCard } from "../../components/cartCard";
import { getCart } from "../../lib/api";
import css from "./cart.css";

export function Cart() {
  const [results, setResults] = useState([]);
  async function getResults() {
    const items = await getCart();
    setResults(items);
  }
  useEffect(() => {
    getResults();
  }, []);

  // Iterate userCart and call the MLA endopoint for each one,
  // create a cart card similar to mercadolibre's cart
  return (
    <div className={css.container}>
      {results?.map((i) => {
        return (
          <CartCard
            src={i.thumbnail}
            title={i.title}
            price={i.price}
            id={i.id}
          />
        );
      })}
    </div>
  );
}
