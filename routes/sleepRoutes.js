const router = require("express").Router();
const {User} = require("../models");
const moment = require("moment");

router.put("/newentry/:id", (req,res)=>{
    console.log("---------->"+req.params.id)
    const { type } = req.body;
    const date = new Date();
    const dateStr = `${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`
    const sleepTime = `${date.getHours()}:${date.getMinutes()}`
    
    User.findByIdAndUpdate(req.params.id, {$push: {sleepTrack: {date: dateStr, sleepTime}}}).then(userData=> console.log(userData))
});

router.put("/wakeup/:id", (req,res)=>{
    const date = new Date();
    const wakeTime = `${date.getHours()}:${date.getMinutes()}`;
    User.findById(req.params.id).then(user=> {
        const i = user.sleepTrack.length - 1;

        user.sleepTrack[i].wakeTime = wakeTime;
        const sleepTime = moment(user.sleepTrack.slice(-1)[0].sleepTime);

        console.log(sleepTime.diff(moment(wakeTime), "seconds"))
        // console.log(user.sleepTrack);


        User.findByIdAndUpdate(req.params.id, {sleepTrack: user.sleepTrack} ).then(data=> console.log(data))
    })
})

// router.put("/hrsSlept/:id", (req,res)=>{
//     const sleepTime =  req.params.id   
// })


module.exports = router;