import React from "react";
import {login} from '../utils/API'
import Clock from "../components/Clock"
import Navbar from "../components/Navbar/Navbar";

function Home(props) {
  const handleLogin = () => {
    login({
      email: "kenny@nguyen.com",
      password: "watermelon"
    }).then(({data})=>{
      console.log(data)
    })
  }
  return <>
  <div>Home Page</div>
  <button onClick={handleLogin}>CLICK ME TO HIT API ROUTE</button>
  <Clock></Clock>
  </>
}

export default Home;