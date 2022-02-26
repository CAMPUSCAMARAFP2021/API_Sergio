var router= require('express').Router();
var achievesControllers=require('../controllers/achieves');

router.get('/',async(req,res)=>{
    const {achieve} = req;
    const achieves = await achievesControllers.getAchieve(achieve);
    res.json(achieves);
});

router.get('/:achieveID',async(req,res)=>{
    const {achieveID}=req.params;
    const achieves=await achievesControllers.getAchieve(achieveID);
    res.json(achieves)
});

router.post('/',async(req,res)=>{
    const {achieve} = req.body;
    const achieves=await achievesControllers.createAchieve(achieve);
    res.json(achieves);
})

module.exports = router;