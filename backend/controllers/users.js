const User=require('../models/User');
const jsw= require('jsonwebtoken');

const encryptarPass=(pass)=>{
    return pass;
}
const buildJWB=(user)=>{
    const time= Date.now();

    return jsw.sign({
        time,
        user
    },'adivina');
}
const login=async(name,password)=>{
    const user=await User.findOne({name})
    if(!user) throw new Error("user not found")
    console.log(user)
    console.log(passwd)
    if(passwd==user.pass){ return buildJWB(user)}else{
    throw new Error("pass incorrect")}
   
}

const createUser=async(user)=>{
    user.pass=encryptarPass(user.pass)
    return await User.create(user);
}
const updateUser=async(userId,user)=>{
    return await User.findById(userId).update(user);
}

const deleteUser=async(userId)=>{
    return await User.findByIdAndDelete(userId);
}

const getUser=async()=>{
    return await User.find()
}

const getBtandById=async({userID})=>{
    return await User.findById(userID)
}


module.exports={
    createUser,
    updateUser,
    deleteUser,
    getUser,
    getBtandById,
    login
}