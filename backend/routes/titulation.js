var router= require('express').Router();
var titulationsControllers=require('../controllers/titulations');

router.get('/',async(req,res)=>{
const titulations=await titulationsControllers.gettitulation(req);
res.json(titulations);
});

router.get('/:titulationID',async(req,res)=>{
    const {titulationID}=req.params;
    const titulations=await titulationsControllers.gettitulation(titulationID);
    res.json(titulations)
});

router.post('/addtitulation',async(req,res)=>{
    const {titulation} = req.body;
    const titulations=await offersControllers.createOffer(titulation);
    res.json(titulations);
})

module.exports = router;