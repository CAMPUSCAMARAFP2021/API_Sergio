const Corporate=require('../models/Corporate');

const createCorporate=async(corporate)=>{
    return await Corporate.create(corporate);
}
const updateCorporate=async(corporateID, corporate)=>{
    await Corporate.find(corporateID).update(corporate);
    return true;
  
}
const deleteCorporate=async(corporateId)=>{
 await Corporate.findByIdAndDelete(corporateId);
 return true;
}

const getCorporate=async()=>{
    return await Corporate.find()
}

module.exports = {
    createCorporate,
    updateCorporate,
    deleteCorporate,
    getCorporate,
};