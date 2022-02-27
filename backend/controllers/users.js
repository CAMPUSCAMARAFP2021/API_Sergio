const User=require('../models/User');
const jwt= require('jsonwebtoken');

const encryptarPass=(pass)=>{
    return pass;
}
const buildJWT=(user)=>{
    const time= Date.now();

    return jwt.sign({
        time,
        user
    },'zekreto');
}
const login=async(name,passwd)=>{
    const Correctuser=await User.findOne({name})
    if(!Correctuser) throw new Error("user not found")
    if(passwd==Correctuser.passwd){ return buildJWT(Correctuser)}else{
    throw new Error("pass incorrect")}
   
}

const createUser=async(user)=>{
    const {name} = user
    const checkuser = User.find(name)
    if(!checkuser){
    user.passwd=encryptarPass(user.passwd)
    console.log(user.passwd)
    return await User.create(user);
    }else{
        throw new Error("El usuario ya existe")
    }
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

const addOfferToUser = async(user, offer) =>{
    return await User.findByIdAndUpdate(user._id,{
        $push:{offers:offer._id}
    })
}


module.exports={
    createUser,
    updateUser,
    deleteUser,
    getUser,
    getBtandById,
    login,
    addOfferToUser
}