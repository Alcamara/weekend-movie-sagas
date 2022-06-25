const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  /* 
    Get movie title, image, description, and an array of genres
  */
  const movieDetailQuery = `
    SELECT movies.id, movies.title, movies.poster, movies.description, array_agg(genres.name) AS genreList FROM movies
    JOIN movies_genres ON movies_genres.movie_id = movies.id
    JOIN genres ON genres.id = movies_genres.genre_id
    WHERE movies.id = 11
    GROUP BY movies.id, movies.title, movies.poster, movies.description;
  `

  pool.query(movieDetailQuery)
    .then((results)=>{
      //console.log(results.rows);

      //sent query to client
      res.send(results.rows)
    })
    .catch((err)=>{
      console.log('Get failed', err);
    })
  
});

module.exports = router;