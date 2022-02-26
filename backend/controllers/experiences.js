const Experience=require('../models/Experience');

const createExperience=async(experience)=>{
    return await Experience.create(experience);
}
const updateExperience=async(experienceID, experience)=>{
    await Experience.find(experienceID).update(experience);
    return true;
  
}
const deleteExperience=async(experienceId)=>{
 await Experience.findByIdAndDelete(experienceId);
 return true;
}

const getExperience=async(experienceID)=>{
    return await Experience.find(experienceID)
}

module.exports = {
    createExperience,
    updateExperience,
    deleteExperience,
    getExperience,
};