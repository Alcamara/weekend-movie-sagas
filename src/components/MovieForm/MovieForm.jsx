import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
//css
import './MovieForm.css';

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
                    <input 
                        onChange={(evt)=>{
                            SetFormData({
                                ...formData,
                                title: evt.target.value})
                        }} 
                        type="text"
                        placeholder='Movie Title'
                        required
                    />
                    <input
                        onChange={(evt)=>{
                            SetFormData({
                                ...formData,
                                poster: evt.target.value})
                        }}  
                        type="text" 
                        placeholder='URL Image'
                        required/>
                    <select
                        onChange={(evt)=>{
                            SetFormData({
                                ...formData,
                                genre_id: Number(evt.target.value)})
                        }} 
                        name="movie-genres" 
                        id="genres" required>
                            <option 
                                selected disabled  
                                value='Genres'>
                                    Movie Genre
                            </option>
                            {genres.map(genre =>(
                                <option 
                                    key={genre.id} 
                                    id={genre.id} 
                                    value={genre.id}>
                                        {genre.name}
                                </option>
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
                        rows="5"
                        required>

                    </textarea>
                </div>
                
                <div>
                    <button>
                        Cancel
                    </button>
                    <button>
                        Save
                    </button>
                </div>
            </form>
        
        </div>
    )
}