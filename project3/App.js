import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    return (
      <Router>
      <div>
        <Nav />
        <Route path="/æ" component={Clock}/>
        <Route path="/"/>
        <Books />
      </div>
      </Router>
    );
  }
  
  export default App;
  