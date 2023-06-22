import './App.module.css';
import style from './App.module.css'
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards.jsx';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites'
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
const URL = 'http://localhost:3001/rickandmorty/login/';
// const email = 'eze_valdiviezo@yahoo.com';
// const password = '38408507';

const App = () => {
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)
   const navigate = useNavigate()
   const location = useLocation()

   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      } catch (error) {
         console.log(error.message);
      }
   };

   const onSearch = async (id) => {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if (data.name) {
            if (!characters.find((char) => char.id === data.id)) {
               setCharacters((oldChars) => [...oldChars, data]);
            }
         }
      } catch (error) {
         alert('¡No hay personajes con este ID!');
      }
   };
   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== id)
      setCharacters(charactersFiltered)
   };

   const randomChar = () => {
      const randomNumber = Math.floor(Math.random() * 826 + 1);
      const url = `https://rickandmortyapi.com/api/character/${randomNumber}`;
      fetch(url)
         .then((res) => res.json())
         .then((data) => {
            if (data.name && !characters.find((char) => char.id === data.id)) {
               const newCharacter = { ...data, id: data.id }
               if (characters.length < 826) {
                  setCharacters([...characters, newCharacter]);
               } else {
                  window.alert(`solo existen 826 personajes`);
               }
            }
         });
   };

   const logOut = () => {
      setCharacters([])
      setAccess(false)
      navigate('/')
   };


   return (
      <div className={style.App}>
         {location.pathname !== '/' && <Nav onSearch={onSearch} randomChar={randomChar} logOut={logOut} />}
         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='*' element={<Error />} />
         </Routes>
      </div>
   );
};
export default App;

