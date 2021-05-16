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
app.get('/musicScan',async (req,res)=>{
    const k=await scanFiles()
    k?res.send('sucessfully scanned'):res.send('error occured')
})
app.listen(PORT,()=>{
    console.log('running on port 5000')
})