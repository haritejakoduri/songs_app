const fs = require('fs');
const path = require('path');
const MusicInfoGeter=require('./musicData')
const MusicPath='/mnt/sda8/songs'
const fileName='/songs.json'
function scanFiles(){
    function getallFiles(d){
       return fs.statSync(d).isDirectory() ? fs.readdirSync(d).map(f => getallFiles(path.join(d, f))): d;
    }
    function flatDeep(arr, d = 1) {
        return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), []): arr.slice();
    };
    fs.writeFile(MusicPath+fileName, JSON.stringify(flatDeep(getallFiles(MusicPath),Infinity)), 'utf8', (err)=>{
        err?console.log('err'):console.log('completed');
        let rawdata = fs.readFileSync(MusicPath+fileName);
        let songs = JSON.parse(rawdata);
        for(i=0;i<songs.length;i++){
            MusicInfoGeter(songs[i])
        }
    });
}
scanFiles()
module.exports=scanFiles;