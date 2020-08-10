import React, { useState, useContext, useEffect } from "react";
import "./style.css";
import {AuthContext} from '../../context/auth'
import moment from "moment";
import {getUpdatedSleep} from '../../utils/API'

function Log() {

  const {user,sleep} = useContext(AuthContext);

  return (
    
    <div className="sleepLog">
     
      <div className="sleepEntry">
        {sleep?.length ? sleep.reverse().map((sleep, index) => (
          <table class="table table-sm table-dark">
            {/* key={index}
            {sleep.date} - - -
            {sleep.sleepTime} - - -
            {sleep.wakeTime} - - -
            {sleep.hourSlept} */}
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Sleep Time</th>
              <th scope="col">Wake Time</th>
              <th scope="col">Hours Slept</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{sleep.date}</th>
              <td>{sleep.sleepTime}</td>
              <td>{sleep.wakeTime}</td>
              <td>{sleep.hourSlept}</td>
            </tr>

          </tbody>
        </table> 
          
          
        )): "You don't have any sleep data, Start Sleeping Now!"}
      </div>
    </div>
  );
}

export default Log;

