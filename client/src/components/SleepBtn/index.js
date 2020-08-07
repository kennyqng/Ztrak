import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {sleepWake} from '../../utils/API'
import { Button } from 'reactstrap';
import "./style.css";


function SleepBtn() {
    let { id } = useParams()
    console.log(id);

    //const [sleepTime, setSleepTime] = useState (Date.now);
    const [buttonText, setButtonText] = useState("Sleep");

    const handleSleepWake = () => {
        const date = new Date();
        const now = date.now;
        setButtonText(buttonText === "Sleep" ? "Wake Up" : "Sleep")
        sleepWake ({type: buttonText}, id);
    }
    

return  <div className="button-container" justify-content="center">
        <Button size="lg" onClick={handleSleepWake}>{buttonText}</Button>
        </div>
}

export default SleepBtn;

    