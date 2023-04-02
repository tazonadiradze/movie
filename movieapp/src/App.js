import Home from './Components/Home/Home';

import { Route, Routes } from 'react-router-dom';
import DATA from './Data.json'
import './App.css';
import Favorite from './Components/Favorite/Favorite';
import MovieDetails from './Components/Movies/MovieDetails';



function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Favorite' element={<Favorite />} />
        {DATA.map((movie) => {
          return <Route key={movie.id} path={`/movies/${movie.id}`} element={<MovieDetails movie={movie} />} />
        })}
      </Routes>



    </div>

  )
}

export default App;

