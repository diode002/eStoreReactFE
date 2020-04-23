import React from "react";
import "./sign-in-sign-up.sty.scss";
import SignIn from "../../components/sign-in/sign-in.com";
import SignUp from "../../components/sign-up/sign-up.com";

const SignInSignUp = props => {
  return (
    <div className="sign-in-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUp;
