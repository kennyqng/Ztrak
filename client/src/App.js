import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { AuthContext } from "./context/auth";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar/Navbar";
import { getCurrentUser } from "./utils/API";


function App() {
  const [user,setUser] = useState();
  const [sleep, setSleep] = useState([]);

useEffect(()=> {
// if(localStorage.getItem("currentUser")){
//   setUser(JSON.parse(localStorage.getItem("currentUser")))
// }else {
  getCurrentUser().then(({data})=> {
    setSleep(data.sleepTrack);
    setUser(data);
  })
}, [])

  return (
    <AuthContext.Provider value={{user, setUser, sleep, setSleep}}>
      <Router>
        <div>
          <Navbar></Navbar>
          {/* <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/admin">Admin Page</Link>
            </li>
          </ul> */}
          <Route exact path="/" component={Signup} />
          <Route exact path="/home" component={Home} />
          <PrivateRoute exact path="/admin" component={Admin} />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
