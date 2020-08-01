import React, { useState } from "react";
import { login } from "../utils/API";
import Clock from "../components/Clock";
import Log from "../components/Log";
import Navbar from "../components/Navbar/Navbar";
import Login from "../components/Login";
import SleepBtn from "../components/SleepBtn";
import Chart from "../components/Chart";


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
      <SleepBtn/>
      <Log></Log>
      <Chart data /> 
    </>
  );
}

export default Home;
