import style from './SearchBar.module.css'
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
   const [id, setId] = useState('')

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div className={style.containerSB}>
         <input type='search' onChange={handleChange} value={id}/>
         <button className={style.btnAgregar} onClick={() => {onSearch(id); setId('')}}>Agregar</button>
      </div>
   );
}
export default SearchBar