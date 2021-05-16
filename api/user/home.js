const express =require('express')
const router=express.Router()
router.get('/',(req,res)=>{
    res.send('your are in home page')
})
module.exports=router