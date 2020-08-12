const router = require("express").Router();
const passport = require("../config/passport");
const db = require("../models") 

router.post("/login",passport.authenticate('local'),((req,res)=>{
    //do some stuff with db to check credentials;
    console.log('success!')
    res.json(req.user)
}))

router.get("/logout", (req,res)=> {
    req.logout();
    res.json("logged out!")
})

router.post('/signup', ({body:{passwordConf, ...data}},res)=>{
    db.User.create(data).then(user=> {
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