const express =require('express')
const router=express.Router()
router.get('/',(req,res)=>{
    res.send('your are in login page')
})
module.exports=router
