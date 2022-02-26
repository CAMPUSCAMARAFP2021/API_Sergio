const Achieve=require('../models/Achieve');

const createAchieve=async(achieve)=>{
    return await Achieve.create(achieve);
}
const updateAchieve=async(achieveID, achieve)=>{
    await Achieve.find(achieveID).update(achieve);
    return true;
  
}
const deleteAchieve=async(achieveId)=>{
 await Achieve.findByIdAndDelete(achieveId);
 return true;
}

const getAchieve=async()=>{
    return await Achieve.find()
}

module.exports = {
    createAchieve,
    updateAchieve,
    deleteAchieve,
    getAchieve,
};