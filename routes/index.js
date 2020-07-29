const router = require('express').Router();
const authRoutes = require("./authRoutes");

router.use("/auth", authRoutes);
//router.use("/somethignelse")

module.exports = router;