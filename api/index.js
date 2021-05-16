const express=require('express');
const router=express.Router()
const loginRoute=require('./user/login')
const signupRoute=require('./user/signup')
const homeRoute=require('./user/home')
router.use('/login',loginRoute)
router.use('/signup',signupRoute)
router.use('/home',homeRoute)
module.exports=router;