// eslint-disable-next-line no-unused-vars
import React from "react";
import VSignup from "../VSignUp";
import VSignIn from "../VSignIn";

// eslint-disable-next-line react/prop-types
function VLogin({ setToken }) {
  const [isLoggingIn, setIsLoggingIn] = React.useState(true);
  return isLoggingIn ? (
    <VSignIn setToken={setToken} setIsLoggingIn={setIsLoggingIn} />
  ) : (
    <VSignup setToken={setToken} setIsLoggingIn={setIsLoggingIn} />
  );
}

export default VLogin;
