const express = require('express');
const router = express.Router();

//for to be used with mongo
const mongoose = require('mongoose');
let Photo = mongoose.model('Photo');

//Adding Redis
// const redisClient = require('redis').createClient;
// const redis = redisClient(6379, 'localhost');

//Get api listening
router.get('/', (req, res) => {
  res.send('api works');
});


// Get all photos
router.get('/photos', (req, res) => {
  let search_q = req.query.search_q;
  console.log("The query is ", search_q);
  if (search_q === undefined || search_q === "") {
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
  }
  else {
    Photo.find({country: search_q}, (err, photos, count) => {
      if (err) {
        console.log(err);
      }
      res.json(photos.map((photo) => {
        return {
          "url": photo.url,
          "tags": photo.tags,
          "country": photo.country,
          "name": photo.name
        }
      }));
    });
  }

});

// // Get photos matching the specific tag or country
// router.get('/photos/search', (req, res) => {
//   // Get query string
//   let search_q = req.query.search_q;
//   console.log("The queue is ", search_q);
//   Photo.find({country: search_q}, (err, photos, count) => {
//     if (err) {
//       console.log(err);
//     }
//     res.json(photos.map((photo) => {
//       return {
//         "url": photo.url,
//         "tags": photo.tags,
//         "country": photo.country,
//         "name": photo.name
//       }
//     }));
//   });
// });


// router.get('/photos/SSearch', (req, res) => {
//   let country = req.query.country;
//   let i = 0;
//   if (country && country.match(/[a-z]/i)){
//     country = country.charAt(0).toUpperCase();
//   }
//   else {
//     country = "";
//   }
//   let cursor = 0;
//   redisClient().zscan("countries", cursor, "MATCH", "*"+country+"*", (err, reply) => {
//     if (err){
//       console.error("ERROR IN REDIS SCAN");
//     }
//     cursor = reply[0];
//     if (cursor === '0'){
//       if (reply[1].length === 0){
//         res.send("Nothing found");
//       }
//       else{
//         let result = [];
//         for (i = 0; i < reply[1].length; i = i+2){
//           let found = {
//             country: reply[1][i],
//             score: parseInt(reply[1][i+1])
//           };
//           result.push(found);
//         }
//         res.json(result);
//       }
//     }
//   });
// });
module.exports = router;
