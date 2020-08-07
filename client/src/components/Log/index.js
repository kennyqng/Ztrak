import React, { useState } from "react";
import "./style.css";

function Log() {
  const sleeps = [
    {
      date: "08/01/2020",
      sleepTime: "10:30",
      wakeTime: "6:30",
      totalSleep: "8:00",
      rate: "10"
    },
    {
      date: "07/31/2020",
      sleepTime: "11:00",
      wakeTime: "7:30",
      totalSleep: "8:30",
      rate: "9"
    },
    {
      date: "07/30/2020",
      sleepTime: "12:00",
      wakeTime: "10:30",
      totalSleep: "10:30",
      rate: "8"
    },
    {
      date: "07/29/2020",
      sleepTime: "12:00",
      wakeTime: "10:30",
      totalSleep: "10:30",
      rate: "8"
    },
    {
      date: "07/28/2020",
      sleepTime: "12:00",
      wakeTime: "10:30",
      totalSleep: "10:30",
      rate: "8"
    },
    {
      date: "07/27/2020",
      sleepTime: "12:00",
      wakeTime: "10:30",
      totalSleep: "10:30",
      rate: "8"
    }
  ];
  return (
    <div className="sleepLog">
      <p>Date - Sleep Time -  Wake Time - Total Sleep</p>
      <div className="sleepEntry">
        {sleeps.map((sleep, index) => (
          <p key={index}>
            {sleep.date} - - -
            {sleep.sleepTime} - - -
            {sleep.wakeTime} - - -
            {sleep.totalSleep}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Log;
