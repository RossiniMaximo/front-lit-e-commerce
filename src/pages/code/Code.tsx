import React from "react";
import { Button } from "../../ui/Button";
import { getToken } from "../../lib/api";
import { useUserData } from "../../hooks";
import { useNavigate } from "react-router-dom";

import css from "./code.css";

export function Code() {
  const navigate = useNavigate();
  const user = useUserData();
  const email = user.email;
  async function handleSubmit(e) {
    e.preventDefault();
    const code = e.target.code.value;
    const token = await getToken(email, code);
    if (token) {
      navigate("/");
    }
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
