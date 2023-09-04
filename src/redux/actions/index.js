// actions/index.js

import { ADD_ITEM, DEL_ITEM, INCREMENT_ITEM_QUANTITY } from '../constants/actionTypes';

export const addItem = (product) => {
    return {
        type: ADD_ITEM, 
        payload: product
    };
}

export const delItem = (product) => {
    return {
        type: DEL_ITEM,
        payload: product
    };
}

export const incrementItemQuantity = (productId) => {
    return {
        type: INCREMENT_ITEM_QUANTITY,
        payload: productId,
    };
};
