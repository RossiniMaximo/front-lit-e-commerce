import React from "react";
import { Button } from "../ui/Button";
import { Textfield } from "../ui/TextField";
import css from "./searchForm.css";

type SearchFormProps = {
  onSearch: (any) => any;
};

export function SearchForm(props: SearchFormProps) {
  function handleSubmit(e) {
    e.preventDefault();
    const search = e.target.search.value;
    props.onSearch(search);
  }
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <Textfield
        type="search"
        name="search"
        inputContainerStyle={css.inputContainer}
        inputStyle={css.input}
      />
      <Button className={css.button} children="search"></Button>
    </form>
  );
}
