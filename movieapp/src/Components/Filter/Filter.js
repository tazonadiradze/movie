import { useState } from 'react'
import Data from '../../../src/Data.json'
import Movies from '../Movies/Movies'
import './Filter.css'
const Filter = () => {

 const [search, setSearch] = useState('')
 const [showFilter, setShowFilter] = useState(false)
 console.log(Data)



 const filteredData = Data.filter((item) => {
  return item.Title.toLowerCase().includes(search.toLowerCase())

 })




 return (
  <div className='allWraper'>
   <div className='search'>

    <input value={search} type='text' className='input' onChange={(e) => { setSearch(e.target.value) }} placeholder='Search' />


   </div>
   <Movies filter={filteredData} />
  </div>
 )



}

export default Filter