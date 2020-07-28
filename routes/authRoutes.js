const router = require("express").Router();
const db = require("../models")
router.post("/login", ({body:{username,password}},res)=>{
    //do some stuff with db to check credentials;
    db.User.findOne({username}).then(user=>{
        console.log(user)
        if(!user){
            res.json("USERNAME DOESN'T EXIST!")
        }else{
           if(user.checkPW(password)){
            res.json(`Welcome ${user.username}!`)
        }else {
            res.json("INCORRECT PASSWORD!")
        } 
        }
    })
})

router.post('/signup', (req,res)=>{
    db.User.create(req.body).then(user=> {
        console.log(user)
    })
})

module.exports = router;