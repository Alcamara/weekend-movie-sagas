import { useParams } from "react-router-dom"

export default function MovieDetails(){
    const {id} = useParams()
    return (
        <div>
            <h2>Title {id} </h2>
            <img src="https://dyn1.heritagestatic.com/lf?set=path%5B1%2F6%2F1%2F1%2F1611768%5D&call=url%5Bfile%3Aproduct.chain%5D" height='200' alt="simple pick" />
            <p>Lorem ipsum dolor sit amet, consectetur
                 adipisicing elit. Tempora, cum?
            </p>
            <h4>Genres</h4>
            <p>Lorem ipsum dolor sit.</p>
        </div>
    )
}