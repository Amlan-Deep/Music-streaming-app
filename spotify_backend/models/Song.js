const mongoose = require('mongoose');

// create mongoose schema
const Song = new mongoose.Schema({
   name: {
       type: String,
       required: true
   },
   thumbnail: {
       type: String,
       required: true
   },
   track: {
       type: String,
       required: true
   },
   artist:{
         type: mongoose.Schema.Types.ObjectId,
         ref:"User",
    },
});

//create a model
const SongModel = mongoose.model('Song', Song);
module.exports = SongModel;