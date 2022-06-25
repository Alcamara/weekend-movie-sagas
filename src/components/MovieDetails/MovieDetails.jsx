import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import Details from "../Details/Details"

export default function MovieDetails(){
    const movie = useSelector(store => store.movieDetails)

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