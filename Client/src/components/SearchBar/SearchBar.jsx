import style from './SearchBar.module.css'
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
   const [id, setId] = useState('')

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div className={style.containerSB}>
         <input type='search' onChange={handleChange} value={id} placeholder='N° 1 - 826'/>
         <button className={style.btnAgregar} onClick={() => {onSearch(id); setId('')}}>Add</button>
      </div>
   );
}
export default SearchBar