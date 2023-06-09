import style from './Card.module.css'
import { Link } from 'react-router-dom'

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   return (
      <div className={style.containerCard}>
         <div className={style.top}>
            <img src={image} alt='Personaje' />
            <h2>Name: {name}</h2>
            <h2>Status: {status}</h2>
            <h2>Species: {species}</h2>
            <h2>Gender: {gender}</h2>
            <h2>Origin: {origin}</h2>
         </div>

         <div className={style.bottom}>
            <Link to={`/detail/${id}`}>
               <button >Detail</button>
            </Link>
            <button onClick={() => onClose(id)}>Close</button>
         </div>
      </div>
   );
}
