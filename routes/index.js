const router = require('express').Router();
const authRoutes = require("./authRoutes");
const sleepRoutes = require('./sleepRoutes');

router.use("/auth", authRoutes);
router.use("/sleep", sleepRoutes);

module.exports = router;