import React, { useState } from "react";
import { login } from "../utils/API";
import Clock from "../components/Clock";
import Log from "../components/Log";
import Navbar from "../components/Navbar/Navbar";

function Home(props) {
  const handleLogin = () => {
    login({
      email: "kenny@nguyen.com",
      password: "watermelon"
    }).then(({ data }) => {
      console.log(data);
    });
  };
  return (
    <>
      <div>Home Page</div>
      <button onClick={handleLogin}>CLICK ME TO HIT API ROUTE</button>
      <Clock></Clock>
      <button className="sleepWake">Sleep/Wake</button>
      <Log></Log>
    </>
  );
}

export default Home;
