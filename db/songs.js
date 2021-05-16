const mongoose=require('mongoose')
const songSchema =new mongoose.Schema({
    path:String,
    song_name:String,
    album_name:String,
    image:{data: Buffer, imagetype: String},
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
    path:data.path,
    song_name:data.song_name,
    album_name:data.album_name,
    image:{data: data.image.data, imagetype: data.image.format},
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
return result;
}
module.exports={
    storeSongData:storeSongData
}