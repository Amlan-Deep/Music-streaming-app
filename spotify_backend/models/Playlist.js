const mongoose = require('mongoose');

// create mongoose schema
const Playlist = new mongoose.Schema({
   name: {
       type: String,
       required: true
   },
   thumbnail: {
       type: String,
       required: true
   },
   owner:{
         type: mongoose.Schema.Types.ObjectId,
         ref:"User",
    },
    songs:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Song",
    },
    ],
    collaborators:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
    ],


});

//create a model
const PlaylistModel = mongoose.model('Playlist', Playlist);
module.exports = PlaylistModel;