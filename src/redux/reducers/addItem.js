import { ADD_ITEM, DEL_ITEM, INCREMENT_ITEM_QUANTITY } from '../constants/actionTypes';

const addItem = [];

const addItems = (state = addItem, action) => {
  switch (action.type) {
    case ADD_ITEM:
        const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem) {
    
        return state.map((item) =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        
        return [...state, { ...action.payload, quantity: 1 }];
      }

    case DEL_ITEM:
      return state.filter((item) => item.id !== action.payload.id);

    case INCREMENT_ITEM_QUANTITY:
      return state.map((item) =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );

    default:
      return state;
  }
};

export default addItems;