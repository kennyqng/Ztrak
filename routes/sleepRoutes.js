const router = require("express").Router();
const {User} = require("../models")

router.put("/newentry/:id", (req,res)=>{
    const date = new Date();
    const dateStr = `${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`
    const sleepTime = `${date.getHours()}:${date.getMinutes()}`
    User.findByIdAndUpdate(req.params.id, {$push: {sleepTrack: {date: dateStr, sleepTime}}}).then(userData=> console.log(userData))
});

// router.put("/wakeup/:id", (req,res)=>{
//     const date = new Date();
//     const wakeTime = `${date.getHours()}:${date.getMinutes()}`;
//     User.findById(req.params.id).then(user=> {
//         const i = user.sleepTrack.length - 1;
//         //console.log(sleepData, user.sleepTrack)
//         const newSleepTrack = [...user.sleepTrack, {...user.sleepTrack[i], wakeTime}];

//         //newSleepTrack.splice(i,1);
//         console.log(newSleepTrack)

//         console.log(newSleepTrack)
//         User.findByIdAndUpdate(req.params.id, {sleepTrack: newSleepTrack}).then(data=> console.log(data))
//     })
// })


module.exports = router;