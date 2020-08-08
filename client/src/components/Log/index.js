import React, { useState, useContext, useEffect } from "react";
import "./style.css";
import {AuthContext} from '../../context/auth'
import moment from "moment";
import {getUpdatedSleep} from '../../utils/API'

function Log() {

  const {user,sleep} = useContext(AuthContext);

  return (
    <div className="sleepLog">
      <p>Date - Sleep Time -  Wake Time - Total Sleep</p>
      <div className="sleepEntry">
        {sleep?.length ? sleep.reverse().map((sleep, index) => (
          <p key={index}>
            {sleep.date} - - -
            {sleep.sleepTime} - - -
            {sleep.wakeTime} - - -
            {sleep.hourSlept}
          </p>
        )): "You don't have any sleep data, Start Sleeping Now!"}
      </div>
    </div>
  );
}

export default Log;
