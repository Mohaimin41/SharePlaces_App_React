import React, { useContext, useState } from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/Validators";
import { useForm } from "../../shared/hooks/form-hook";
import { AuthContext } from "../../shared/contexts/auth-context";

import "./Auth.css";
import Card from "../../shared/components/UIElements/Card";

const Auth = (props) => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
    auth.login(); 
  };

  const switchToSignupHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: "",
        },
        false
      );
    }
    setIsLoginMode((prevmode) => !prevmode);
  };

  return (
    <Card className="authentication">
      <h2>Sign In Required</h2>
      <hr />
      <form className="auth-form" onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            id="name"
            label="Anata no onamae"
            element="input"
            type="text"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter your name."
            onInput={inputHandler}
          />
        )}
        <Input
          id="email"
          label="E-mail"
          element="input"
          type="email"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email."
          onInput={inputHandler}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          element="input"
          validators={[VALIDATOR_MINLENGTH(8)]}
          errorText="Please enter a valid password (at least 8 characters)."
          onInput={inputHandler}
        />

        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? "LOGIN" : "SIGN UP"}
        </Button>
      </form>
      <h4> or </h4>
      <Button inverse onClick={switchToSignupHandler}>
        SWITCH TO {!isLoginMode ? "LOGIN" : "SIGN UP"}
      </Button>
    </Card>
  );
};

export default Auth;
