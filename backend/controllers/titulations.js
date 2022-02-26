const Titulation=require('../models/Titulation');

const createTitulation=async(titulation)=>{
    return await Titulation.create(titulation);
}
const updateTitulation=async(titulationID, titulation)=>{
    await Titulation.find(titulationID).update(titulation);
    return true;
  
}
const deleteTitulation=async(titulationId)=>{
 await Titulation.findByIdAndDelete(titulationId);
 return true;
}

const getTitulation=async(titulationID)=>{
    return await Titulation.find(titulationID)
}

module.exports = {
    createTitulation,
    updateTitulation,
    deleteTitulation,
    getTitulation,
};