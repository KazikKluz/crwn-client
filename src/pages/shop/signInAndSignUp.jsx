import React from "react";
import SignIn from "../../components/sign-in/sign-in.component.jsx";
import SignUp from "../../components/sign-up/sign-up.component";

const SignAndSignOutPage = () => {
  return (
    <div className="sign-in-and-sign-out">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignAndSignOutPage;
