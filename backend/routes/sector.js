var router= require('express').Router();
var sectorsControllers=require('../controllers/sectors');

router.get('/',async(req,res)=>{
const sectors=await sectorsControllers.getsector(req);
res.json(sectors);
});

router.get('/:sectorID',async(req,res)=>{
    const {sectorID}=req.params;
    const sectors=await sectorsControllers.getsector(sectorID);
    res.json(sectors)
});

router.post('/addsector',async(req,res)=>{
    const {sector} = req.body;
    const sectors=await offersControllers.createOffer(sector);
    res.json(sectors);
})

module.exports = router;