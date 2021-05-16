const express =require('express')
const router=express.Router()
router.get('/',(req,res)=>{
    res.send('your are in signup page')
})
module.exports=router