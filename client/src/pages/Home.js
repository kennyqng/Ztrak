import React, { useContext } from "react";
import Clock from "../components/Clock";
import Log from "../components/Log";
import SleepBtn from "../components/SleepBtn";
import Chart from "../components/Chart";
import {Container, Row, Col} from 'reactstrap';
import { AuthContext } from "../context/auth";
import {Redirect} from 'react-router-dom';

function Home() {
  const { user } = useContext(AuthContext);
  function welcome() {
    if(user){
      return (
        <h2 className="welcome">Welcome {user ? user.username : ""}!</h2>
      )
    }
    else {
      return (
        <h3 className="welcome">Please log in</h3>
      )
    }
  };
  return (
    <>
      {welcome()}
      {!user? <Redirect to="/"/> : ""}
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
