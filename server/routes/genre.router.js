const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/',(req,res)=>{
  //variable to hold sql syntax
  const genres = `
    SELECT * FROM genres;
  `
  pool.query(genres)
    .then((results)=>{
      res.send(results.rows)
    })
    .catch((err)=>{
      console.log('Query failed', err)
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id;

  console.log(id);
  /* 
    Get movie title, image, description, and an array of genres
  */
  const movieDetailQuery = `
    SELECT movies.id, movies.title, movies.poster, movies.description, array_agg(genres.name) AS genreList FROM movies
    JOIN movies_genres ON movies_genres.movie_id = movies.id
    JOIN genres ON genres.id = movies_genres.genre_id
    WHERE movies.id = $1
    GROUP BY movies.id, movies.title, movies.poster, movies.description;
  `

  const queryParams = [
    id
  ]

  pool.query(movieDetailQuery,queryParams)
    .then((results)=>{
      console.log(results.rows);

      //sent query to client
      res.send(results.rows)
    })
    .catch((err)=>{
      console.log('Get failed', err);
    })
  
});

module.exports = router;