const express=require('express');
const path=require('path')
const config = require('config');
const mongoose=require('mongoose')
const scanFiles=require('./Music/scanFiles')
const api=require('./api/index');
const connet=require('./db/connect')
const {getSongs}=require('./db/songs')
const app=express()
app.use(express.json())
const PORT=config.get('Port');
app.use('/public',express.static(path.join(__dirname,'public')))
connet()
app.get('/',(req,res)=>{
    res.send('hello world')
})
app.post('/music',(req,res)=>{
    res.sendFile(req.body.path,(err)=>{
        console.log(err)
    })
})
app.post('/search',async (req,res)=>{
    console.log(req.body)   
    let result=await getSongs(req.body)
    res.send(result)
})
app.use('/api',api)
app.get('/musicScan',async (req,res)=>{
    const k=await scanFiles()
    k?res.send('sucessfully scanned'):res.send('error occured')
})
app.listen(PORT,()=>{
    console.log('running on port 5000')
})