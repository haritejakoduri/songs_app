const express=require('express');
const config = require('config');
const scanFiles=require('./Music/scanFiles')
const api=require('./api/index');
const connet=require('./db/connect')
const app=express()
const PORT=config.get('Port');
connet()
app.get('/',(req,res)=>{
    res.send('hello world')
})
app.use('/api',api)
app.get('/musicScan',(req,res)=>{
    scanFiles()
    console.log('scanning')
})
app.listen(PORT,()=>{
    console.log('running on port 5000')
})