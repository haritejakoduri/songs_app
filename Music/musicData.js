const mm = require('music-metadata');
const util = require('util');
const fs = require('fs');
let MusicInfoGeter= async (songs) => {
    try {
      const metadata = await mm.parseFile(songs);
      console.log(util.inspect(metadata, { showHidden: false, depth: null }));
    } catch (error) {
      console.error(error.message);
    }
}
module.exports = MusicInfoGeter;