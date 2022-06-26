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
    return(
        <div>
            <h3>Movie Form</h3>
            <form>
                <div>
                    <input type="text" placeholder='Movie Title'/>
                    <input type="text" placeholder='URL Image'/>
                    <select name="movie-genres" id="genres">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
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