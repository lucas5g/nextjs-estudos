import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
export default function App() {
    return (
        <div className='bg-black text-white h-screen'>
            <Navbar />
            <Routes >
                <Route path='/' element={<Home />} />
                <Route path='/movie/:id' element={<Movie />} />
                <Route path='/search' element={<p>search</p>} />

            </Routes>
        </div>
    )
}