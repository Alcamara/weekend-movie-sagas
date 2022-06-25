import React, { useEffect } from 'react';
import { useDispatch, useSelector, LI } from 'react-redux';
import { Link } from 'react-router-dom';
import './MovieList.css'

//MUI
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    function fetchMovieDetail(MovieId) {
        dispatch({
            type:'FETCH_MOVIE_DETAILS',
            payload: MovieId
            
        })
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                       
                        <Card sx={{ minWidth: 200 }} key={movie.id} >
                            <Typography>
                                {movie.title}
                            </Typography>
                            <Link 
                            onClick={()=>{
                                fetchMovieDetail(movie.id)
                            }} 
                            to={`/details/${movie.id}`}>
                                <img src={movie.poster} alt={movie.title}/>
                            </Link>
                        </Card>
                        
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;