import style from './Error.module.css'
const Error = () => {
    return (
        <div className={style.containerError}>
            <div>
                <h1 className={style.error}>Error: 404</h1>
            </div>
        </div>
    )
}
export default Error;