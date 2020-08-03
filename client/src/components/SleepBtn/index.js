import React, {useState} from "react";
import ReactDOM from 'react-dom';

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

// import React, {useState} from "react";
// import ReactDOM from 'react-dom';
// import "./style.css";


// function SleepBtn() {
//     const [sleepTime, setSleepTime] = useState (Date.now);
//     const [background, setBackground] = useState (backgroundImge[client\src\index.css])
   
//     useEffect (() => {
//     function changeSleepStatus (asleep) {
//         setSleepTime(sleepTime(Date.now));
        
//     }
//    }
//    );
//     const sleepTime = Date.now();
//     function clickMe() {
//         console.log("current time is " + sleepTime)
//     }

//     return (
//         <div>
//             <button onClick={() => setSleep(sleep)}>
//     Click me
//   </button>
//             <button type="button" className="btn btn-success" onClick={clickMe}>Sleep</button>
//         </div>
//     )
// }

// export default SleepBtn;

