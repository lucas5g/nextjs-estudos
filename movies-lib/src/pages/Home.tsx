import axios from "axios"
import { useEffect, useState } from "react"
import { MovieCard } from "../components/MovieCard"

interface Movie{
    id: number
    title: string 
}

export function Home(){

    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        
        axios.get(`${import.meta.env.VITE_API_URL}/movie/top_rated`, {
            params:{
                api_key: import.meta.env.VITE_API_KEY
            }
        }).then( res => {
            setMovies(res.data.results)
            console.log(res.data)
        })
       
    }, [])
    return (
        <div>
            <h2>Melhores filmes:</h2>
            {movies.map( movie => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </div>
    )
}