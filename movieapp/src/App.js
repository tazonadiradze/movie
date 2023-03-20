import Movies from './Components/Movies/Movies';
import Header from './Components/Header/Header';
import Data from '../src/Data.json'
import { useState } from 'react';
import './App.css';



function App() {
  const [search, setSearch] = useState('')
  console.log(Data)

  const filteredData = Data.filter((item) => {
    return item.Title.toLowerCase().includes(search.toLocaleLowerCase())
  })


  return (
    <div>
      <Header />
      <div className='search'>
        <input className='input' value={search} type='text' onChange={(e) => { setSearch(e.target.value) }} placeholder='Search' />
        <div>

        </div>
      </div>
      {/* i am not use reusable input as there is one of them */}

      <Movies filter={filteredData} />
    </div>

  )
}

export default App;

