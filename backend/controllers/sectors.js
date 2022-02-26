const Sector=require('../models/Sector');

const createSector=async(sector)=>{
    return await Sector.create(sector);
}
const updateSector=async(sectorID, sector)=>{
    await Sector.find(sectorID).update(sector);
    return true;
  
}
const deleteSector=async(sectorId)=>{
 await Sector.findByIdAndDelete(sectorId);
 return true;
}

const getSector=async(sectorID)=>{
    return await Sector.find(sectorID)
}

module.exports = {
    createSector,
    updateSector,
    deleteSector,
    getSector,
};