import React from "react";
import css from "./textField.css";

type TextfieldProps = {
  type: string;
  name: string;
  inputContainerStyle: string;
  inputStyle: string;
};

export function Textfield(props: TextfieldProps) {
  return (
    <div className={props.inputContainerStyle}>
      <input className={props.inputStyle} type={props.type} name={props.name} />
    </div>
  );
}
