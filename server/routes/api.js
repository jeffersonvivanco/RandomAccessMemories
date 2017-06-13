const express = require('express');
const router = express.Router();

//for to be used with mongo
const mongoose = require('mongoose');
let Photo = mongoose.model('Photo');



//Get api listening
router.get('/', (req, res) => {
  res.send('api works');
});


//Get all photos
router.get('/photos', (req, res) => {
  Photo.find({}, (err, photos, count) => {
    if (err)
      console.log(err);
    res.json(photos.map((photo) => {
      return {
        "url" : photo.url,
        "tags" : photo.tags,
        "country" : photo.country,
        "name" : photo.name
      }
    }));
  });
});


module.exports = router;
