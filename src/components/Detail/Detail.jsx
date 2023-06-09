import axios from 'axios'
import {useState, useEffect} from 'react'
import { NavLink, useParams} from 'react-router-dom'
import style from './Detail.module.css'

const Detail = () => {
    const {id} = useParams()
    const [character, setCharacter] = useState({})
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div className={style.containerDetail}>
            <img src={character.image && character.image} alt="" />
            <h2>Name: {character.name && character.name}</h2>
            <h2>Status: {character.status && character.status}</h2>
            <h2>Species: {character.species && character.species}</h2>
            <h2>Gender: {character.gender && character.gender}</h2>
            <h2>Ogirins: {character.origin?.name && character.origin?.name}</h2>
            <br />
            <h1>Detalles:</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi sequi a deserunt placeat sunt tempora vero molestiae ea fugiat iste beatae voluptate doloribus, eum non laboriosam voluptates quam eligendi excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt soluta voluptatem dolorem. Voluptatibus soluta quas quis alias facilis! Sit neque quaerat voluptatem itaque repellat voluptas magni perferendis et nulla consequatur.</p>

            <NavLink to='/home'>
                <button>Home</button>
            </NavLink>
        </div>
    )
}
export default Detail;