const mongoose=require('mongoose');
function connect() {
    mongoose.connect('mongodb://localhost/songs',{useNewUrlParser:true,useUnifiedTopology: true}).then(()=>{
        console.log('connected to mongodb')
    }).catch(err=>console.log('could not connect to mongodb..',err))
}
module.exports=connect;