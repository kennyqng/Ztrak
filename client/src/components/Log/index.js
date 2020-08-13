import React, { useState, useContext, useEffect } from "react";
import "./style.css";
import { AuthContext } from "../../context/auth";
import moment from "moment";

function Log() {
  const { user, sleep } = useContext(AuthContext);
  console.log("this is log",sleep)
  return (
    
    <div className="sleepLog">
      <div className="row log-header">
        <div className="col-3">Date</div>
        <div className="col-3">Sleep Time</div>
        <div className="col-3">Wake Time</div>
        <div className="col-3">Total Sleep</div>
      </div>
      <div className="border"></div>
      <div className="sleepEntry">
        {sleep?.length
          ? sleep.reverse().map((sleep, index) => (
              <div className="row">
                <div className="col-3">
                  <p key={index}>{sleep.date}</p>
                </div>
                <div className="col-3">
                  <p key={index}>{moment(sleep.sleepTime).format("LTS")}</p>
                </div>
                <div className="col-3">
                  <p key={index}>{sleep.wakeTime ? moment(sleep.wakeTime).format("LTS"): ""}</p>
                </div>
                <div className="col-3">
                  <p key={index}>
                    {sleep.hourSlept ? sleep.hourSlept +" sec" : "sleeping"}
                  </p>
                </div>
              </div>
            ))
          : "There is no sleep data."}
      </div>
    </div>
  );
}

export default Log;

