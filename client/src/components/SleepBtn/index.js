import React, {useState, useContext} from "react";
import {AuthContext} from "../../context/auth"
// import {useParams} from "react-router-dom";
import {sleepWake} from '../../utils/API'
import { Button } from 'reactstrap';
import "./style.css";


function SleepBtn() {
    const { user } = useContext(AuthContext)
    console.log(user);

    //const [sleepTime, setSleepTime] = useState (Date.now);
    const [buttonText, setButtonText] = useState("Sleep");

    const handleSleepWake = () => {
        const date = new Date();
        const now = date.now;
        setButtonText(buttonText === "Sleep" ? "Wake Up" : "Sleep")
        sleepWake ( {type: buttonText}, user._id);
        
    }
    

return  <div className="button-container" justify-content="center">
        <Button size="lg" onClick={handleSleepWake}>{buttonText}</Button>
        </div>
}

export default SleepBtn;

    