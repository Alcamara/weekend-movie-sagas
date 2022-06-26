//MUI
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
export default function Details({movie}){
    return (
        <div>
            <h2>{movie[0].title}</h2>
            <img src={movie[0].poster}  alt="simple pick" />
            <p>{movie[0].description}</p>
            <h4>Genres</h4>
            <p>{movie[0].genrelist.map(genre => (
                genre
            )).join(', ')}</p>
        </div>
    )
}