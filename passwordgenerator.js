var passwordgenerator = require("password-generator");
var password= passwordgenerator.generate({

length:10,
Number:false,

});
console.log(password);