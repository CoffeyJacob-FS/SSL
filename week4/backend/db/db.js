const { default: mongoose } = require('mongoose')
const Login=require('../routes/models/login')

const postlogin =async(req)=>{
    const login=new Login({
        _id: mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        age: req.body.age,
        gender: req.body.gender,
        consent: req.body.consent,
        bio: req.body.bio

    });
return await login.save();
}
module.exports=postlogin;