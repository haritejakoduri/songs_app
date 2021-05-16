const mongoose=require('mongoose')
const songSchema =new mongoose.Schema({
    song_name:String,
    album_name:String,
    image:{data: Buffer, contentType: String},
    artists:[String],
    composer:[String],
    track:{
        thisTrack:Number,
        allTracks:Number
    },
    info:{
        duration:Number,
    }
})
const Song = mongoose.model('Song',songSchema);
async function storeSongData(data) {
const song =new Song({
    song_name:data.song_name,
    album_name:data.album_name,
    image:{data: data.image.data, contentType: data.image.format},
    artists:data.artists,
    composer:data.composer,
    track:{
        thisTrack:data.thisTrack,
        allTracks:data.allTracks
    },
    info:{
        duration:data.duration,
    }
})
const result =await song.save();   
console.log(result)
}
module.exports={
    storeSongData:storeSongData
}