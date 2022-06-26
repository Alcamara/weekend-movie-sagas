import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//css
import './MovieForm.css'
//Material UI
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

//bootstrap
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


export default function MovieForm(){
    const dispatch = useDispatch();
    const [formData,SetFormData] = useState({title:'', poster:'', description:'', genre: '' })
    const genres = useSelector(store => store.genres)
    console.log(genres);

    useEffect(()=>{
        dispatch({
            type:'FETCH_GENRES'
        })
    },[])

    const onSubmit = (evt)=>{
        evt.preventDefault()
        console.log(formData);
        
        dispatch({
            type:'ADD_MOVIE',
            payload: formData
        })
    }
    

    return(
        <div>
            <h3>Movie Form</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <input 
                        onChange={(evt)=>{
                            SetFormData({
                                ...formData,
                                title: evt.target.value})
                        }} 
                        type="text"
                         placeholder='Movie Title'
                    />
                    <input
                        onChange={(evt)=>{
                            SetFormData({
                                ...formData,
                                poster: evt.target.value})
                        }}  
                        type="text" 
                        placeholder='URL Image'
                        />
                    <select
                        onChange={(evt)=>{
                            SetFormData({
                                ...formData,
                                genre: evt.target.value})
                        }} 
                        name="movie-genres" 
                        id="genres">
                            <option selected disabled  value='Genres'>Movie Genres</option>
                            {genres.map(genre =>(
                                <option key={genre.id} id={genre.id} value={genre.name}>{genre.name}</option>
                            ))}
                        
                       
                    </select>
                </div>

                <div>
                    <textarea
                        onChange={(evt)=>{
                            SetFormData({
                                ...formData,
                                description: evt.target.value})
                        }} 
                        placeholder='Movie Description' 
                        name="movie-description" 
                        id="" 
                        rows="5">

                    </textarea>
                </div>
                
                <div>
                    <button>
                        Add Movies
                    </button>
                </div>
            </form>
        
        </div>
    )
}