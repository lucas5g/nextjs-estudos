import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

interface MovieCard{
    movie: {
        id: number
        title: string
        poster_path: string

    },
    showLink: boolean
}
export function MovieCard({ movie, showLink = true }:MovieCard) {
    return (
        <div>
            <img 
                src={`${import.meta.env.VITE_IMG_URL}/${movie.poster_path}`} 
                alt={movie.title} />
            <h2>
                {movie.title}
            </h2>
            <p>
                <FaStar />
            </p>
            {showLink &&
                <Link to={`/movie/${movie.id}`}>
                    Detalhes
                </Link>
            }
            

        </div>
    )
}