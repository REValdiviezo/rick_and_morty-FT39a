import SearchBar from "../SearchBar/SearchBar"
import style from './Nav.module.css'
import { NavLink, useLocation } from "react-router-dom"



const Nav = ({ onSearch, randomChar, logOut, }) => {
    const location = useLocation()
    return (
        <div className={style.containerNav}>
            <div className={style.leftSB}>
                <NavLink to='/home'>
                    <button className={style.btnNav}>Home</button>
                </NavLink>
                <NavLink to='/about'>
                    <button className={style.btnNav}>About</button>
                </NavLink>
                    {location.pathname === '/home' && <button className={style.btnNav} onClick={randomChar}>Random</button>}
                    <button className={style.btnNav} onClick={logOut}>Log out</button>
                <NavLink to='/favorites'>
                    <button className={style.btnNav}>Favorite</button>
                </NavLink>
            </div>
            <div className={style.rigthSB}>
                <SearchBar onSearch={onSearch} />
            </div>
        </div>
    )
}
export default Nav