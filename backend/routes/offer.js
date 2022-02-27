var router= require('express').Router();
var offersControllers=require('../controllers/offers.js');

router.get('/',async(req,res)=>{
    const {offer} = req;
    const offers = await offersControllers.getOffer(offer);
    res.json(offers);
});

router.get('/:offerID', async(req, res) => {
    const {offerID} = req.params;
    const offer = await offersControllers.getOfferByID(offerID);
    res.json(offer);
})

router.post('/addoffer',async(req,res)=>{
    const offer = req.body;
    console.log(req.user._id)
    offer.user = req.user._id;
    const offers=await offersControllers.createOffer(offer, req.offer);
    
    res.redirect('/home.html?authorization='+ offers)
})

module.exports = router;