import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider, useDispatch } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';



// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_MOVIE_DETAILS', fetchMovieDetails);
    yield takeEvery('FETCH_GENRES', fetchGenres);
    yield takeEvery('ADD_MOVIE', addMovie)
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

function* fetchMovieDetails(action){
    console.log(action.payload);

    let response;

    try {
        //make axios request to get movie title, image, 
        //description, and an array of genres and store into response
      response =  yield axios.get('/api/genre/'+ action.payload)
      yield put({type:"SET_MOVIE_DETAILS", payload: response.data})
    } catch (err) {
        console.log('Get Details failed', err);
    }

    //console.log(response.data);

}

function* fetchGenres(action){
    console.log('in fetchGenres', action.type);
    try {
        const response = yield axios.get('/api/genre')
        yield put({type:"SET_GENRES", payload: response.data})
    } catch (error) {
        console.log('Get request failed',error);
    }
}

function* addMovie(action){
    console.log('in addMovie');
    try {

        yield axios.post('/api/movie', action.payload)

        yield put({
                type: 'FETCH_MOVIES'
            })
        
    } catch (error) {
        console.log('Axios post request failed',error);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

//Used to store movie details return from the server
const movieDetails = (state = [], action) =>{
    switch (action.type) {
        case 'SET_MOVIE_DETAILS':
            
            return  action.payload;
    
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}



// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movieDetails
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
