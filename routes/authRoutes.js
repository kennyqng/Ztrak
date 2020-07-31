const router = require("express").Router();
const passport = require("../config/passport");
const db = require("../models") 

router.post("/login",passport.authenticate('local'),((req,res)=>{
    //do some stuff with db to check credentials;
    console.log('success!')
    res.json(req.user)
}))

router.post('/signup', (req,res)=>{
    db.User.create(req.body).then(user=> {
        console.log(user)
    })
});

router.get("/user_data", (req,res)=>{
    if(req.user){
        res.json(req.user)
    }else{
        res.status(401).send("No user logged in!")
    }
})

module.exports = router;