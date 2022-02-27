var router= require('express').Router();
var userControllers=require('../controllers/users');

var offerRouter=require('./offer')
router.get('/',async(req,res)=>{
    const result=userControllers.getUser()
    res.json(result)
})
router.post('/login',async(req,res)=>{
    const user=req.body;
    const{name,passwd}=user
    const result=await userControllers.login(name,passwd);
   res.json(result)
})

router.post('/register',async(req,res)=>{
    const user =req.body;
    const result=await userControllers.createUser(user)
    res.json(result)
})

router.get('/:userID/offer',async(req,res)=>{
    const{userID}=req.params;
    req.user=await userControllers.getUser(userID);
    next();
},offerRouter);

module.exports=router;