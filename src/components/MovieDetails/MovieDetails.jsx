import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import Details from "../Details/Details"

export default function MovieDetails(){
    const movie = useSelector(store => store.movieDetails)
    
    if (movie.length !== 0) {
        console.log(movie);
    }

    const {id} = useParams()
    return (
        <div>
            { movie.length !== 0 && 
                <Details movie={movie} />
            }
        </div>
    )
}

/*
    
            
*/