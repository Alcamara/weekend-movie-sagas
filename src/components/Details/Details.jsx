import { Link } from 'react-router-dom';

//MUI
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


export default function Details({movie}){
    return (
        <div>
            <Card  sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }} >
                <CardContent>
                    <Typography component="div" variant="h4" >
                        {movie[0].title}
                    </Typography>
                </CardContent>
                <CardContent>
                    <img src={movie[0].poster} height='250' alt="simple pick" />
                </CardContent>
                <CardContent>
                    <Typography paragraph  variant="body2">
                        {movie[0].description}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography>
                        Genres
                    </Typography>
                    <Typography>
                        {movie[0].genrelist.map(genre => (
                        genre
                    )).join(', ')}
                    </Typography>
                </CardContent>
                <Link to='/'>
                    back
                </Link>
            </Card>
        </div>
    )
}