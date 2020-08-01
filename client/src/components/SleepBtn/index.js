import React from "react";
import "./style.css";

function SleepBtn() {
    const sleepTime = Date.now();
    function clickMe() {
        console.log("current time is " + sleepTime)
    }

    return (
        <div>
            <button type="button" className="btn btn-success" onClick={clickMe}>Sleep</button>
        </div>
    )
}

export default SleepBtn;