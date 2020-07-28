const mongoose = require("../config/mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
      type: String,
      required:true
  },
  // url string for thumbnail image
  password: {
    type: String,
    required: true
  }
});

userSchema.pre("save", function(){
    return bcrypt.hash(this.password, 10).then(hash=> 
        this.password = hash)
})

userSchema.methods.checkPW = function(password){
    return bcrypt.compare(password, this.password)
}

const User = mongoose.model("User", userSchema);

module.exports = User;
