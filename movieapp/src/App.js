import Movies from './Components/Movies/Movies';
import Header from './Components/Header/Header';
import { useState } from 'react';
import './App.css';



function App() {
  const [search, setSearch] = useState('')

  return (
    <div>
      <Header />
      <div className='search'>
        <input value={search} type='search' />
      </div>
      {/* i am not use reusable input as there is one of them */}

      <Movies />
    </div>

  )
}

export default App;

