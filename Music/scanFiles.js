const fs = require('fs');
const path = require('path');
const config=require('config')
const MusicInfoGeter=require('./musicData');
const {storeSongData}=require('../db/songs')
const MusicPath='/mnt/sda8/songs'
const fileName=config.get('file_name')
async function scanFiles(){
    function getallFiles(d){
       return fs.statSync(d).isDirectory() ? fs.readdirSync(d).map(f => getallFiles(path.join(d, f))): d;
    }
    function flatDeep(arr, d = 1) {
        return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), []): arr.slice();
    };
    fs.writeFile(MusicPath+fileName, JSON.stringify(flatDeep(getallFiles(MusicPath),Infinity)), 'utf8',async (err)=>{
        err?console.log('err'):console.log('completed');
        let rawdata = fs.readFileSync(MusicPath+fileName);
        let songs = JSON.parse(rawdata);
        for(i=0;i<songs.length;i++){
           let metadata= await MusicInfoGeter(songs[i])
           if(metadata){
           let needed_metadata={
                path:songs[i],
                song_name:metadata.common.title,
                album_name:metadata.common.album,
                image:{data: metadata.common.picture[0].data, imagetype: metadata.common.picture[0].format},
                artists:metadata.common.artists,
                composer:metadata.common.composer,
                track:{
                    thisTrack:metadata.common.track.no,
                    allTracks:metadata.common.track.of
                },
                info:{
                    duration:metadata.format.duration,
                }
           }
              let result=await storeSongData(needed_metadata)
           }

        }
    });
    return true
}
module.exports=scanFiles;