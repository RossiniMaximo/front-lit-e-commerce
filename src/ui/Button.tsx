import React from "react";
import css from "./button.css";

type ButtonProps = {
  children: string;
  className: string;
};

export function Button(props: ButtonProps) {
  return (
    <div className={css.buttonContainer}>
      <button className={props.className}>{props.children}</button>
    </div>
  );
}
