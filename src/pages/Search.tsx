import React from "react";
import { useSearchResults } from "../hooks";
import { ItemCard } from "../components/ItemCard";
import css from "./search.css";

export function Search() {
  const results = useSearchResults();
  return (
    <div className={css.mainContainer}>
      <h1 className={css.pageTitle}>Results : {results?.length} </h1>
      <div className={css.cardsContainer}>
        {results?.map((r) => {
          return (
            <ItemCard
              title={r.title}
              price={r.price}
              picture={r.thumbnail}
              key={r.id}
              id={r.id}
            />
          );
        })}
      </div>
    </div>
  );
}
