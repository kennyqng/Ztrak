const router = require("express").Router();
const {User} = require("../models");
const moment = require('moment');

router.get("/updatedsleep", (req,res)=> {
    User.findById(req.user._id).then(user => {
        console.log(user.sleepTrack)
    })
})

router.put("/newentry/:id", (req,res)=>{
    console.log("---------->"+req.params.id)
    const { type } = req.body;
    const date = new Date();
    const dateStr = `${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`
    const sleepTime = moment().toISOString()
    
    User.findByIdAndUpdate(req.params.id, {$push: {sleepTrack: {date: dateStr, sleepTime}}}).then(()=> User.findById(req.params.id).then(data=> res.json(data)))
});

router.put("/wakeup/:id", (req,res)=>{
    const wakeTime = moment().toISOString()
    User.findById(req.params.id).then(user=> {
        const i = user.sleepTrack.length - 1;
        const hourSlept = moment(wakeTime).diff(moment(user.sleepTrack[i].sleepTime), "seconds")
        user.sleepTrack[i].wakeTime = wakeTime;
        user.sleepTrack[i].hourSlept = hourSlept;
        User.findByIdAndUpdate(req.params.id, {sleepTrack: user.sleepTrack} ).then(()=> User.findById(req.params.id).then(data=> res.json(data)))
    })
})



module.exports = router;