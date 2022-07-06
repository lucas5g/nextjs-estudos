import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'
export function Navbar() {
    return (
        <nav className="text-yellow-400 hover:text-yellow-600 transition">
            <h2>
                <Link to='/'>
                    <BiCameraMovie /> MoviesLib
                </Link>
            </h2>
            <form action="">
                <input 
                    type="text" 
                    placeholder="Busque um filme" />
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>
            {/* <Link to='/movie/1'>Movie</Link> */}
            {/* <Link to="/search">Search</Link> */}
        </nav>
    )
}