var router= require('express').Router();
var offersControllers=require('../controllers/offers.js');

router.get('/',async(req,res)=>{
    const {user} = req;
    const offers = user ? await offersControllers.getOffers(user): await offersControllers.getOffers();
    res.json(offers);
});

router.get('/:offerID', async(req, res) => {
    const {offerID} = req.params;
    const offer = await offersControllers.getOfferByID(offerID);
    res.json(offer);
})

router.delete('/:offerID', async(req, res) => {
    const {offerID} = req.params;
    const offer = await offersControllers.deleteOffer(offerID);
    res.json(offer);
})


router.post('/',async(req,res)=>{   
    const {offer} = req.body;
    console.log(req.user._id)
    offer.user = req.user._id;
    const offers=await offersControllers.createOffer(offer, req.offer);
    res.json(offers)
})

module.exports = router;