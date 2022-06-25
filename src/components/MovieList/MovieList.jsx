import React, { useEffect } from 'react';
import { useDispatch, useSelector, LI } from 'react-redux';
import { Link } from 'react-router-dom';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    function fetchMovieDetail() {
        console.log('in fn');
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                       
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <Link onClick={fetchMovieDetail} to={`/details/${movie.id}`}>
                                <img src={movie.poster} alt={movie.title}/>
                            </Link>
                        </div>
                        
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;