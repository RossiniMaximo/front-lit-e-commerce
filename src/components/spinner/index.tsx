import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { MutatingDots } from "react-loader-spinner";
import React from "react";
import css from "./index.css";

export function Spinner() {
  return (
    <div className={css.spinner_container}>
      <MutatingDots color="#f5e1ce" height={100} width={80} />
    </div>
  );
}
