import { actionTypes } from "./action";
const initialState = {
  items: [],
  totalQuantity: 0,
};
export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TO_CART:
      const newItem = payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        const updatedItems = state.items.map((item) =>
          item.id === existingItem.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: item.totalPrice + newItem.price,
              }
            : item
        );
        return {
          ...state,
          items: updatedItems,
          totalQuantity: state.totalQuantity + 1,
        };
      } else {
        return {
          ...state,
          items: [
            ...state.items,
            {
              id: newItem.id,
              price: newItem.price,
              quantity: 1,
              totalPrice: newItem.price,
              title: newItem.title,
            },
          ],
          totalQuantity: state.totalQuantity + 1,
        };
      }

    case actionTypes.REMOVE_FROM_CART:
      const id = payload;
      const itemToRemove = state.items.find((item) => item.id === id);
      if (itemToRemove) {
        if (itemToRemove.quantity === 1) {
          return {
            ...state,
            items: state.items.filter((item) => item.id !== payload),
            totalQuantity: Math.max(0, state.totalQuantity - 1),
          };
        } else {
          const newUpdate = state.items.map((item) =>
            item.id === itemToRemove.id
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                  totalPrice: item.totalPrice - itemToRemove.price,
                }
              : item
          );

          return {
            ...state,
            items: newUpdate,
            totalQuantity: state.totalQuantity - 1,
          };
        }
      }
      return state;

    default:
      return state;
  }
};
