import React from "react";
import { Textfield } from "../../ui/TextField";
import { Button } from "../../ui/Button";
import { useUserState } from "../../hooks";
import { Link } from "react-router-dom";

type LogFormularyProps = {
  children: string;
  buttonStyle: string;
  formStyle: string;
  inputContainerStyle: string;
  inputStyle: string;
  passwordContainer: string;
  label: string;
  label2: string;
  label3: string;
  onSend: (any) => any;
};

export function LogFormulary(props: LogFormularyProps) {
  const [userData, setUserData] = useUserState();
  function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const repeated_password = e.target.repeat_password.value;
    if (password === repeated_password) {
      setUserData({ ...userData, email });
      props.onSend({ email, password });
    }
  }

  return (
    <form onSubmit={handleSubmit} className={props.formStyle}>
      <div>
        <label>{props.label}</label>
        <Textfield
          type="email"
          name="email"
          inputContainerStyle={props.inputContainerStyle}
          inputStyle={props.inputStyle}
        />
      </div>
      <div className={props.passwordContainer}>
        <div>
          <label>{props.label2}</label>
          <Textfield
            type="password"
            name="password"
            inputContainerStyle={props.inputContainerStyle}
            inputStyle={props.inputStyle}
          />
        </div>
        <div>
          <label>{props.label3}</label>
          <Textfield
            type="password"
            name="repeat_password"
            inputContainerStyle={props.inputContainerStyle}
            inputStyle={props.inputStyle}
          />
        </div>
      </div>
      <Button children={props.children} className={props.buttonStyle} />
    </form>
  );
}
