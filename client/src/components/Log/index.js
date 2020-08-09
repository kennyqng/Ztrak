import React, { useState } from "react";
import "./style.css";
import {AuthContext} from "../../context/auth";

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
      
      <div className="sleepEntry">
       <table classname="table table-sm table-dark">
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
      <th scope="row">8/12/2020</th>
      <td>12:34</td>
      <td>8:15</td>
      <td>8.2</td>
    </tr>
    <tr>
      <th scope="row">8/13/2020</th>
      <td>9:00</td>
      <td>2:76</td>
      <td>9</td>
    </tr>
    <tr>
      <th scope="row">8/14/2020</th>
      <td>6:00</td>
      <td>1:00</td>
      <td>6.5</td>
    </tr>
    <tr>
      <th scope="row">8/15/2020</th>
      <td>4:39</td>
      <td>11:00</td>
      <td>7</td>
    </tr>
    <tr>
      <th scope="row">8/16/2020</th>
      <td>5:45</td>
      <td>12:34</td>
      <td>8</td>
    </tr>
    <tr>
      <th scope="row">8/17/2020</th>
      <td>7:22</td>
      <td>1:00</td>
      <td>9</td>
    </tr>
    <tr>
      <th scope="row">8/18/2020</th>
      <td>8:00</td>
      <td>9:00</td>
      <td>9</td>
    </tr>
  </tbody>
</table>
        {/* {sleeps.map((sleep, index) => (
          <p key={index}>
            {sleep.date} - - -
            {sleep.sleepTime} - - -
            {sleep.wakeTime} - - -
            {sleep.totalSleep}
          </p>
        ))} */}
      </div>
    </div>
  );
}

export default Log;
