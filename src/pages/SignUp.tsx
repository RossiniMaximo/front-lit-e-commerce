import React from "react";
import css from "./signUp.css";
import { LogFormulary } from "../components/LogFormulary";
import { useNavigate } from "react-router-dom";
import { createOrFindUser } from "../lib/api";

export function SignUp() {
  const navigate = useNavigate();
  async function handleSend({ email, password }) {
    const fullname = "maxi";
    const result = await createOrFindUser(email, fullname, password);
    console.log("result : ", result);

    /*  navigate("/code"); */
  }
  return (
    <div className={css.container}>
      <div className={css.formContainer}>
        <LogFormulary
          onSend={handleSend}
          children="Send"
          buttonStyle={css.button}
          formStyle={css.form}
          inputContainerStyle={css.inputContainerStyle}
          inputStyle={css.inputStyle}
          passwordContainer={css.passwordContainer}
          label="Email"
          label2="Password"
          label3="Repeat password"
        />
      </div>
    </div>
  );
}
