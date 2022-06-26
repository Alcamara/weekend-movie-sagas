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
    const [formData,SetFormData] = useState({title:'', poster:'', description:'', genre_id: 0 })
    const genres = useSelector(store => store.genres)
    console.log(genres);

    useEffect(()=>{
        dispatch({
            type:'FETCH_GENRES'
        })
    },[])
    

    return(
        <div>
            <h3>Movie Form</h3>
            <form>
                <div>
                    <input type="text" placeholder='Movie Title'/>
                    <input type="text" placeholder='URL Image'/>
                    <select name="movie-genres" id="genres">
                        {genres.map(genre =>(
                            <option id={genre.id} value={genre.name}>{genre.name}</option>
                        ))}
                        
                       
                    </select>
                </div>
                <div>
                    <textarea
                        placeholder='Movie Description' 
                        name="movie-description" 
                        id="" 
                        rows="5">

                    </textarea>
                </div>
                
                
                
                

            </form>
        
        </div>
    )
}