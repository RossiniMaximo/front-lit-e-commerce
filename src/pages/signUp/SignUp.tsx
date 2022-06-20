import React from "react";
import css from "./signUp.css";
import { LogFormulary } from "../../components/logForm/LogFormulary";
import { Link, useNavigate } from "react-router-dom";
import { createOrFindUser } from "../../lib/api";

export function SignUp() {
  const navigate = useNavigate();
  async function handleSend({ email, password }) {
    const fullname = "maxi";
    const result = await createOrFindUser(email, fullname, password);
    navigate("/code");
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
        <div className={css.linkContainer}>
          <Link to="/password" className={css.linkStyle}>
            Forgot password? Click to get new one!
          </Link>
        </div>
      </div>
    </div>
  );
}
