const mongoose = require("mongoose");

mongoose.connect(process.env.ATLAS_URI || "mongodb://localhost/project3_db", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})


module.exports = mongoose;