import SearchBar from "../SearchBar/SearchBar"
import style from './Nav.module.css'
import { NavLink } from "react-router-dom"


const Nav = ({ onSearch, randomChar, logOut }) => {
    return (
        <div className={style.containerNav}>
            <div className={style.leftSB}>
                <NavLink to='/home'>
                    <button>Home</button>
                </NavLink>
                <NavLink to='/about'>
                    <button>About</button>
                </NavLink>
                <button onClick={randomChar}>Random</button>
                <button onClick={logOut}>Log out</button>
            </div>
            <div className={style.rigthSB}>
                <SearchBar onSearch={onSearch} />
            </div>
        </div>
    )
}
export default Nav