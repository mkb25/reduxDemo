import { ActionTypes } from "../types/actionTypes";


export const addProd = (prod) => {
    return {
        type: ActionTypes.add_prod,
        payload: prod,
    };
}

export const removeProd = (prod) => {
    return {
        type: ActionTypes.remove_prod,
        payload: prod,
    };
}