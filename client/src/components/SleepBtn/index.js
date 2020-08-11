import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/auth";
// import {useParams} from "react-router-dom";
import { sleepWake, wakeUp } from "../../utils/API";
import { Button } from "reactstrap";
import "./style.css";

function SleepBtn() {
  const { user, setSleep, sleep } = useContext(AuthContext);
  console.log(user);

  const [buttonText, setButtonText] = useState("Sleep");

  const handleSleepWake = () => {
    const date = new Date();
    const now = date.now;
    if (buttonText === "Sleep") {
      if (user) {
        sleepWake({ type: buttonText }, user._id).then(({ data }) =>
          setSleep(data.sleepTrack)
        );
      }else return;
    } else if (buttonText === "Wake Up") {
      wakeUp({ type: buttonText }, user._id).then(({ data }) =>
        setSleep(data.sleepTrack)
      );
    }
    setButtonText(buttonText === "Sleep" ? "Wake Up" : "Sleep");
  };

  return (
    <div className="button-container" justify-content="center">
      <Button size="lg" onClick={handleSleepWake}>
        {buttonText}
      </Button>
    </div>
  );
}

export default SleepBtn;
