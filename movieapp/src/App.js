import Home from './Components/Home/Home';

import { Route, Routes } from 'react-router-dom';

import './App.css';
import Favorite from './Components/Favorite/Favorite';



function App() {


  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/Favorite' element={<Favorite />} />
      </Routes>



    </div>

  )
}

export default App;

