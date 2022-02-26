var router= require('express').Router();
var corporatesControllers=require('../controllers/corporates');

router.get('/',async(req,res)=>{
    const {corporate} = req;
    const corporates = await corporatesControllers.getCorporate(corporate);
    res.json(corporates);
});

router.get('/:corporateID',async(req,res)=>{
    const {corporateID}=req.params;
    const corporates=await corporatesControllers.getcorporate(corporateID);
    res.json(corporates)
});

router.post('/',async(req,res)=>{
    const {corporate} = req.body;
    const corporates=await corporatesControllers.createCorporate(corporate);
    res.json(corporates);
})

module.exports = router;