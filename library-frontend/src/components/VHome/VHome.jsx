// eslint-disable-next-line no-unused-vars
import React from "react";
import VNavBar from "../VNavBar";
import VHero from "../VHero";

// eslint-disable-next-line react/prop-types
function VHome({ setToken, token }) {
  return (
    <div>
      <VNavBar setToken={setToken} />
      <VHero token={token} />
    </div>
  );
}

export default VHome;
