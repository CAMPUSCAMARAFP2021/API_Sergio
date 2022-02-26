var router= require('express').Router();
var experiencesControllers=require('../controllers/experiences');

router.get('/',async(req,res)=>{
const experiences=await experiencesControllers.getexperience(req);
res.json(experiences);
});

router.get('/:experienceID',async(req,res)=>{
    const {experienceID}=req.params;
    const experiences=await experiencesControllers.getexperience(experienceID);
    res.json(experiences)
});

router.post('/addexperience',async(req,res)=>{
    const {experience} = req.body;
    const experiences=await offersControllers.createOffer(experience);
    res.json(experiences);
})

module.exports = router;