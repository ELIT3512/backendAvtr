const jwt = require(`jsonwebtoken`);
const Joi = require(`joi`);
const passwordComplexity = require("joi-password-complexity");



module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      name: String,
      password: String,
      published: Boolean
    },
    { timestamps: true }
  );
  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  // schema.methods.generateAuthToken = function(){
  //   const token = jwt.sign({id:this.id},process.env.JWTPRIVATEKEY,{expiresIn:"7d"})
  //   return token;
  // };



  const User = mongoose.model("User", schema);
  return User;
};
// const validate = (data) =>{
//   const schema = Joi.object({
//     name: Joi.string().require().label("name"),
//     password: passwordComplexity().require().label("password")
//   });
//   return schema.validate(data)
  
// };
// module.exports = {validate};