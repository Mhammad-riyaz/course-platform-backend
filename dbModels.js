    const mongoose = require('mongoose')

    const adminSchema = mongoose.Schema({
        username : {type : String},
        email : {type : String},
        password : {type : String},
        courses : [{type : mongoose.Schema.Types.ObjectId,  ref : 'course'}]
    })



    const courseSchema = mongoose.Schema({
        title : {type : String},
        description : {type : String},
        price : {type : String},
        // imageLink : {type : String},
        published : {type : Boolean}    
    })

    // const { admin, course, user } = require("./dbModels");
    const userSchema = mongoose.Schema({
        username : {type : String},
        password : {type : String},
        courses : [{type : mongoose.Schema.Types.ObjectId,ref : 'course'}]
    })

    const admin = mongoose.model('admin',adminSchema)
    const course = mongoose.model('course',courseSchema)
    const user = mongoose.model('user',userSchema)

    module.exports =    {admin,course,user}