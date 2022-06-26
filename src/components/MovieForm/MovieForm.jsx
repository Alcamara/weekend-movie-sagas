import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
//css
import './MovieForm.css';

//Material UI
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function MovieForm(){
    const history = useHistory()
    const dispatch = useDispatch();
    const [formData,SetFormData] = useState({title:'', poster:'', description:'', genre_id: 0 })
    const genres = useSelector(store => store.genres)
    

    useEffect(()=>{
        dispatch({
            type:'FETCH_GENRES'
        })
    },[])

   function onSubmit(evt){
        evt.preventDefault()
        console.log(formData);

    dispatch({
            type:'ADD_MOVIE',
            payload: formData
        })
            
            history.push('/')
      
    }
    

    return(
        <div>
            <h3>Movie Form</h3>
            <form onSubmit={onSubmit}>
            <div>
                    <FormControl>
                        <InputLabel>Movie Title</InputLabel>
                        <OutlinedInput
                            onChange={(evt)=>{
                                SetFormData({
                                    ...formData,
                                    title: evt.target.value})
                            }} 
                            id="outlined-basic" 
                            label="Movie Title" 
                            variant="outlined" />
                    </FormControl>
                    <FormControl>
                        <InputLabel>URL Image</InputLabel>
                        <OutlinedInput
                            onChange={(evt)=>{
                                SetFormData({
                                    ...formData,
                                    poster: evt.target.value})
                            }}  
                            id="outlined-basic" 
                            label="URL Image" 
                            variant="outlined" />
                    </FormControl>
                    <FormControl sx={{ minWidth:150}}>
                        <InputLabel>Movie Genres</InputLabel>
                        <Select
                            onChange={(evt)=>{
                                SetFormData({
                                    ...formData,
                                    genre_id: Number(evt.target.value)})
                            }} 
                            label='Movie Genres'
                        >
                        {genres.map(genre =>(
                                <MenuItem 
                                    key={genre.id} 
                                    id={genre.id} 
                                    value={genre.id}>
                                        {genre.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
                    <InputLabel >Movie Description</InputLabel>
                    <OutlinedInput
                        onChange={(evt)=>{
                            SetFormData({
                                ...formData,
                                description: evt.target.value})
                        }} 
                        id="outlined-multiline-static"
                        label="Movie Description"
                        multiline
                        rows={4}
                    />
                    </FormControl>
                </div>
            </form>
        
        </div>
    )
}