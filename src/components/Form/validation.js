const validation = (userData) => {
    const errors = {};
    
    if(!/^\S+@\S+\.\S+$/.test(userData.email)){
        errors.email = 'El email no es valido'
    }
    if(!userData.email){
        errors.email = 'Debe ingresar un email'
    }
    if(userData.email.length > 35){
        errors.email = 'El email no debe superar lo 35 caracteres'
    }
    if(!/.*\d+.*/.test(userData.password)){
        errors.password = 'El password debe contener al menos un numero'
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'EL password debe tener una longitud de entre 6 a 10 caracteres'
    }
    return errors;
}

export default validation;