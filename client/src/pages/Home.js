import React, { useState } from "react";
import { login } from "../utils/API";
import Clock from "../components/Clock";
import Log from "../components/Log";
import Navbar from "../components/Navbar/Navbar";
import SleepBtn from "../components/SleepBtn";
import Chart from "../components/Chart";
import {Container, Row, Col} from 'reactstrap';


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
      {/* <div>Home Page</div>
      <button onClick={handleLogin}>CLICK ME TO HIT API ROUTE</button>  RS: I don't think we need these 2 lines??*/}
      <Clock></Clock>
      <SleepBtn/>
        <Container>
          <Row>
            <Col>
              <Log></Log>
            </Col>
            <Col>
              <Chart data />
            </Col>
          </Row>
        </Container>
    </>
  );
}

export default Home;
