import './App.module.css';
import style from './App.module.css'
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards.jsx';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
const email = 'eze_valdiviezo@yahoo.com';
const password = '38408507';

const App = () => {
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)
   const navigate = useNavigate()
   const location = useLocation()

   const onSearch = (id) => {
      if (id > 826) {
         window.alert('¡No hay personajes con este ID!');
      } else {
         axios(`https://rickandmortyapi.com/api/character/${id}`)
            .then(({ data }) => {
               if (data.name) {
                  if (!characters.find((char) => char.id === data.id)) {
                     setCharacters((oldChars) => [...oldChars, data]);
                  } else {
                     window.alert('¡El personaje ya existe en pantalla!');
                  }
               } else {
                  window.alert('¡No hay personajes con este ID!');
               }
            });
      }

   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== id)
      setCharacters(charactersFiltered)
   }

   const login = (userData) => {
      if (userData.email === email && userData.password === password) {
         setAccess(true)
         navigate('/home')
      }
   }

   const randomChar = () => {
      const randomNumber = Math.floor(Math.random() * 826 + 1);
      const url = `https://rickandmortyapi.com/api/character/${randomNumber}`;
      fetch(url)
         .then((res) => res.json())
         .then((data) => {
            if (data.name && !characters.find((char) => char.id === data.id)) {
               if (characters.length < 826) {
                  setCharacters([...characters, data]);
               } else {
                  window.alert(`solo numeros hasta el 826 y solo 8 cartas`);
               }
            }
         });
   };

   const logOut = () => {
      setCharacters([])
      setAccess(false)
      navigate('/')
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   return (
      <div className={style.App}>
         {/* {location.pathname =='*' && <Error/>} */}
         {location.pathname !== '/' && <Nav onSearch={onSearch} randomChar={randomChar} logOut={logOut}/>}
         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favorites' element={<Favorites />} />
         </Routes>
      </div>
      // <div className='App'>
      //    {!access ? (
      //       <>
      //          <Routes>
      //             <Route path='/' element={<Form login={login} />}></Route>
      //             {/* <Route path='*' element={<Error />}></Route> */}
      //          </Routes>
      //       </>
      //    ) : (
      //       <>
      //          <Nav onSearch={onSearch} randomChar={randomChar} logOut={logOut} />
      //          <Routes>
      //             <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}></Route>
      //             <Route path='/about' element={<About />}></Route>
      //             <Route path='/detail/:id' element={<Detail />}></Route>
      //             <Route path='/favorites' element={<Favorites />}></Route>
      //          </Routes>
      //       </>
      //    )}
      // </div>
   );
}

export default App;
