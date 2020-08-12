import React, {useState, useEffect, useContext} from 'react';
import { Bar } from 'react-chartjs-2';
import {AuthContext} from '../../context/auth'
import 'chartjs-plugin-datalabels';
import "./style.css";

//display if finished loading otherwise show a loading indicator
//
// const data = {
//   displayName: 'BarGraph',
//   labels: ['8/1', '8/2', '8/3', '8/4', '8/5', '8/6', '8/7'],
//   datasets: [
//     {
//       label: 'Hours of Sleep',
//       backgroundColor: 'rgba(255,99,132,0.2)',
//       borderColor: 'rgba(255,99,132,1)',
//       borderWidth: 1,
//       hoverBackgroundColor: 'rgba(255,99,132,0.4)',
//       hoverBorderColor: 'rgba(255,99,132,1)',
//       data: [2, 6, 8, 7, 5, 8, 8]
//     }
//   ]
// };


const Chart = (props) => {
  const {user, sleep} = useContext(AuthContext);
  const [hoursSlept, setHoursSlept] = useState([]);
  const [sleepDates, setSleepDates] = useState([]);
  
  useEffect(() => {
    console.log("user", user);
    if(user) {
      const hours = user.sleepTrack.slice(0,10).map(item => item.hourSlept);
      const dates = user.sleepTrack.slice(0,10).map(item => item.date);

      console.log("hours", hours)
  
      setHoursSlept(hours)
      setSleepDates(dates);
    }
  }, [user]);
  
    return (
      
      <div className="chart">
        <p>Hours of Sleep For the Week</p>
        <Bar
          
         data= {{
          displayName: 'BarGraph',
          labels: sleepDates,
          datasets: [
            {
              label: 'Hours of Sleep',
              backgroundColor: 'rgba(255,99,132,0.2)',
              borderColor: 'rgba(255,99,132,1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              hoverBorderColor: 'rgba(255,99,132,1)',
              data: hoursSlept
            }
          ]
        }}
         options={{
           scales: {
             xAxes: [
               {
                 gridLines: {
                   display: false
                 }
               }
             ],
             yAxes: [
               {
                 gridLines: {
                   display: false
                 },
                 ticks: {
                   beginAtZero: true
                 }
               }
             ]
           }
         }}
         width={150}
         height={100}
       />
     </div>
   );
};

export default Chart;
