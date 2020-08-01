import React, { useState } from "react";
import { login } from "../utils/API";
import Clock from "../components/Clock";
import Log from "../components/Log";
import Navbar from "../components/Navbar/Navbar";
import SleepBtn from "../components/SleepBtn";

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
      <Clock/>
      <SleepBtn/>
      <Log/>
    </>
  );
}

export default Home;
