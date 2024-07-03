const mongoose = require('mongoose');

// create mongoose schema
const User = new mongoose.Schema({
   firstName: {
       type: String,
       required: true
   },
   lastName: {
       type: String,
       required: false
   },
   email: {
       type: String,
       required: true
   },
   username: {
       type: String,
       required: true
   },
   likedSongs: {
       type: String,
       default:"",
   },
   likedPlaylists:{
         type: String,
         default:"",
   },
   subscribedArtists:{
            type: String,
            default:"",
   }
});

//create a model
const UserModel = mongoose.model('User', User);
module.exports = UserModel;