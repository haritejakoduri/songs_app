const mm = require('music-metadata');
const util = require('util');
const fs = require('fs');
let MusicInfoGeter= async (songs) => {
    try {
      return await mm.parseFile(songs);
       //util.inspect(metadata, { showHidden: false, depth: null });
    } catch (error) {
      //console.error(error.message);
      return false
    }
}
module.exports = MusicInfoGeter;