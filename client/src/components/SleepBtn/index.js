import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth";
// import {useParams} from "react-router-dom";
import { sleepWake, wakeUp } from "../../utils/API";
import { Button } from "reactstrap";
import "./style.css";

function SleepBtn() {
  const { user, setSleep, sleep } = useContext(AuthContext);
  console.log(user);

  const [buttonText, setButtonText] = useState("Sleep");
  useEffect(() => {
    if (sleep.length) {
      if (!sleep[0].wakeTime) {
        setButtonText("Wake Up");
      }
    }
  }, [sleep]);

  const handleSleepWake = () => {
    const date = new Date();
    const now = date.now;
    if (buttonText === "Sleep") {
      if (user) {
        sleepWake({ type: buttonText }, user._id).then(({ data }) =>
          setSleep(data.sleepTrack)
        );
      } else return;
    } else if (buttonText === "Wake Up") {
      wakeUp({ type: buttonText }, user._id).then(({ data }) =>
        setSleep(data.sleepTrack)
      );
    }
    setButtonText(buttonText === "Sleep" ? "Wake Up" : "Sleep");
  };

  return (
    <div className="button-container" justify-content="center">
      <Button style={{ backgroundColor: "#4BBC93" }} size="lg" onClick={handleSleepWake}>
        {buttonText}
      </Button>
    </div>
  );
}

export default SleepBtn;
