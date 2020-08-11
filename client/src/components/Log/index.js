import React, { useState, useContext, useEffect } from "react";
import "./style.css";
import { AuthContext } from "../../context/auth";
import moment from "moment";
import { getUpdatedSleep } from "../../utils/API";

function Log() {
  const { user, sleep } = useContext(AuthContext);

  return (
    
    <div className="sleepLog">
      <div className="row log-header" id="log-header">
        <div className="col-sm">Date</div>
        <div className="col-sm">Sleep Time</div>
        <div className="col-sm">Wake Time</div>
        <div className="col-sm">Total Sleep</div>
      </div>
      <div className="sleepEntry">
        {sleep?.length
          ? sleep.reverse().map((sleep, index) => (
              <div className="row">
                <div className="col-sm">
                  <p key={index}>{sleep.date}</p>
                </div>
                <div className="col-sm">
                  <p key={index}>{moment(sleep.sleepTime).format("LTS")}</p>
                </div>
                <div className="col-sm">
                  <p key={index}>{moment(sleep.sleepWake).format("LTS")}</p>
                </div>
                <div className="col-sm">
                  <p key={index}>
                    {sleep.hourSlept +" sec"}
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

