import React from "react";

import SignIn from "../../components/sign-in/sign-in.component.jsx";
import SignUp from "../../components/sign-up/sign-up.component.jsx";
import "./sign-in-and-sign-up.scss";

const SignInAndSignUpPage = () => {
  return (
    <div className="signInAndSignUp">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
