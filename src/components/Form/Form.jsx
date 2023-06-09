import { useState } from "react";
import validation from './validation'
import style from './Form.module.css'
import logo from './LOGO.png'

const Form = ({ login }) => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }

    return (
        <div className={style.containerForm}>
            <img src={logo} alt="img" />
            <form onSubmit={handleSubmit}>
                <img src="https://i.pinimg.com/200x150/13/7b/54/137b540a18c16c296b995a908ef6bb1c.jpg" alt="" />
                <div className={style.inputs}>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" value={userData.email} onChange={handleChange} />
                    {errors.email && <p style={{ color: 'red' }}> {errors.email}</p>}
                    
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" value={userData.password} onChange={handleChange} />
                    {errors.password && <p style={{ color: 'red' }}> {errors.password}</p>}
                </div>
                <div className={style.boton}>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form;