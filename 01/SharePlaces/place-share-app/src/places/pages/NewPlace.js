import React from "react";

import Input from "../../shared/components/FormElements/Input";

import "./NewPlace.css";

function NewPlace() {
  return (
    <form className="place-form">
      <Input type="text" label="title" element="input" />
    </form>
  );
}

export default NewPlace;
