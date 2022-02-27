const Offer=require('../models/Offer');

const createOffer=async(offer)=>{
    return await Offer.create(offer);
}
const updateOffer=async(offerID, offer)=>{
    await Offer.find(offerID).update(offer);
    return true;
  
}
const deleteOffer=async(offerId)=>{
 await Offer.findByIdAndDelete(offerId);
 return true;
}

const getOffer=async()=>{
    return await Offer.find()
}

const getOfferByID= async(offerID)=>{
    return await Offer.findById(offerID)
}

module.exports = {
    createOffer,
    updateOffer,
    deleteOffer,
    getOffer,
    getOfferByID
};  