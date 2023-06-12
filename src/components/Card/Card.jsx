import style from './Card.module.css'
import { Link, useLocation } from 'react-router-dom'
import { add_fav, remove_fav } from '../../redux/actions'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'

const Card = ({ id, name, status, species, gender, origin, image, onClose, add_fav, remove_fav, myFavorites }) => {
   const [isFav, setIsFav] = useState(false);
   const location = useLocation()

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         remove_fav(id)
      } else {
         setIsFav(true)
         add_fav({id, name, status, species, gender, origin, image})
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   return (
      <div className={style.containerCard}>
         <div className={style.divLike}>
            <button className={style.like} onClick={handleFavorite}>{ isFav ? '❤️' : '🤍' }</button>
         </div>
         <div className={style.top}>
            <img src={image} alt='Personaje' />
            <h2>Name: {name}</h2>

            <h2>Species: {species}</h2>
            <h2>Gender: {gender}</h2>
            
         </div>

         <div className={style.botonesCard}>
            <Link to={`/detail/${id}`}>
               <button className={style.btnCard} >Detail</button>
            </Link>
            {location.pathname !== '/favorites' && <button className={style.btnCard} onClick={() => onClose(id)}>Close</button>}
            
         </div>
      </div>
   );
}
export function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
   }
}

export function mapDispatchToProps(dispatch) {
   return {
      add_fav: (character) => dispatch(add_fav(character)),
      remove_fav: (id) => dispatch(remove_fav(id))
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);