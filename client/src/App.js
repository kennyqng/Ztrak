import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { AuthContext } from "./context/auth";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar/Navbar";
import { getCurrentUser, getUpdatedSleep } from "./utils/API";

function App() {
  const [user, setUser] = useState();
  const [sleep, setSleep] = useState([]);

  useEffect(() => {
    getCurrentUser().then(res => {
      setUser(res.data);
      getUpdatedSleep().then(({ data }) => {
        console.log(data);
        setSleep(data);
      });
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, sleep, setSleep }}>
      <Router>
        <div>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Signup} />
            <Route exact path="/home" component={Home} />
            <PrivateRoute exact path="/admin" component={Admin} />
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
