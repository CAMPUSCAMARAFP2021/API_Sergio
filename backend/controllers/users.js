const User=require('../models/User');
const jwt= require('jsonwebtoken');

const encryptarPass=(passwd)=>{
    return passwd;
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
    if(!Correctuser) throw new Error("user not found");
    if(passwd == Correctuser.passwd){ return buildJWT(Correctuser)
    }else{
    throw new Error("pass incorrect")}
   
}

const addOffertoUser = async(user,offer) => {
    return await User.findByIdAndUpdate(user._id,{
        $push:{offer:offer._id}
    })
}

const createUser=async(user)=>{
    const {name} = user
    const checkuser = await User.findOne({name})
    console.log(name, checkuser)
    if(checkuser == null){
        user.passwd = encryptarPass(user.passwd)
        const newUser = await User.create(user)
        return buildJWT(newUser)
    }else{
        throw new Error("Usuario ya registrado")
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
        $push:{offers:offer}
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