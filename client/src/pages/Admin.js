import React from "react";
import { useAuth } from "../context/auth";
import { Button } from 'reactstrap';

function Admin(props) {
  const { setAuthTokens } = useAuth();

  function logOut(user) {
    setAuthTokens();
  }

  return (
    <div className = "logOut" >
      <Button size="lg" onClick={logOut}>Log Out!</Button>
      </div >
   );
}

export default Admin;