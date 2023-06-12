import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from './action-type';

export const add_fav = (character) => {
    return {type: ADD_FAV, payload: character}
};

export const remove_fav = (id) => {
    return {type: REMOVE_FAV, payload: id}
};

export const filterCards = (gender) => {
    return {type: FILTER, payload: gender}
}
export const orderCards = (order) => {
    return {type: ORDER, payload: order}
}