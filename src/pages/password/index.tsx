import React from "react";
import { LogFormulary } from "../../components/logForm/LogFormulary";
import css from "./password.css";
import { updatePassword } from "../../lib/api";
import { useNavigate } from "react-router-dom";

export function Password() {
  const navigate = useNavigate();
  async function handlePasswordChange({ email, password }) {
    await updatePassword(email, password);
    navigate("/");
  }
  return (
    <div className={css.container}>
      <div className={css.formContainer}>
        <LogFormulary
          children="Send"
          buttonStyle={css.button}
          formStyle={css.form}
          inputContainerStyle={css.inputContainerStyle}
          inputStyle={css.inputStyle}
          passwordContainer={css.passwordContainer}
          label="Email"
          label2="Password"
          label3="Repeat password"
          onSend={handlePasswordChange}
        />
      </div>
    </div>
  );
}
