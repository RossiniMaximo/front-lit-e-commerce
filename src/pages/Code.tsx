import React from "react";
import { Button } from "../ui/Button";

import css from "./code.css";

export function Code() {
  function handleSubmit(e) {
    e.preventDefault();
    const code = e.target.code.value;
    // Check if code is valid
  }

  return (
    <div className={css.container}>
      <h2 className={css.title}>Insert your code : </h2>
      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css.inputContainer}>
          <input type="text" name="code" className={css.input} />
        </div>
        <Button children="Send" className={css.button} />
      </form>
    </div>
  );
}
