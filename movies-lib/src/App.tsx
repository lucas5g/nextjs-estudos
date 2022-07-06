import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
export default function App() {
    return (
        <div className='bg-black text-white h-screen'>
            <Navbar />
            <h2>Movies Lib</h2>
            <Routes >
                <Route path='/' element={<Home />} />
                <Route path='/movie/:id' element={<p>movie</p>} />
                <Route path='/search' element={<p>search</p>} />

            </Routes>
        </div>
    )
}