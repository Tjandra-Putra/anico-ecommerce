import * as actionTypes from "./actions";

// =========== GLOBAL STATE ===========
const initialState = {
    myCart: [], // contains a list of objects
    totalPrice: 0,
};

const reducer = (state = initialState, action) => {
    // FUNCTION: ADD TO CART
    // eslint-disable-next-line default-case
    switch (action.type) {
        case actionTypes.ADD_TO_CART: {
            // if item already exist in cart, increment the quantity by 1
            if (state.myCart.some((item) => item.id === action.product.id)) {
                const itemIndex = state.myCart.findIndex((item) => {
                    return item.id === action.product.id;
                });

                action.product.quantity++;

                const myCartArray = [...state.myCart];
                myCartArray[itemIndex] = action.product;

                return {
                    ...state,
                    myCart: myCartArray,
                };
            }
            // adding new item to cart first time
            else {
                action.product.quantity = 1;

                let array = [...state.myCart];
                array.push(action.product);

                return {
                    ...state,
                    myCart: array,
                };
            }
        }

        // FUNCTION: REMOVE CART ITEM
        case actionTypes.REMOVE_CART_ITEM: {
            const myCartArray = [...state.myCart];
            myCartArray.splice(action.index, 1);

            return {
                ...state,
                myCart: myCartArray,
            };
        }

        // FUNCTION: INCREASE CART ITEM QUANTITY
        case actionTypes.INCREASE_CART_QUANTITY: {
            // index value of item
            const itemIndex = state.myCart.findIndex((item) => {
                return item.id === action.itemId;
            });

            const itemObj = { ...state.myCart[itemIndex] };

            action.currentQuantity++;
            itemObj.quantity = action.currentQuantity;

            const itemArray = [...state.myCart];
            itemArray[itemIndex] = itemObj;

            return {
                ...state,
                myCart: itemArray,
            };
        }

        // FUNCTION: DECREASE CART ITEM QUANTITY
        case actionTypes.DECREASE_CART_QUANTITY: {
            // index value of item
            const itemIndex = state.myCart.findIndex((item) => {
                return item.id === action.itemId;
            });

            const itemObj = { ...state.myCart[itemIndex] };

            action.currentQuantity--;
            itemObj.quantity = action.currentQuantity;

            // if quantity is zero, remove item from cart
            if (itemObj.quantity === 0) {
                const itemArray = [...state.myCart];
                itemArray.splice(itemIndex, 1);
                return {
                    ...state,
                    myCart: itemArray,
                };
            }

            const itemArray = [...state.myCart];
            itemArray[itemIndex] = itemObj;

            return {
                ...state,
                myCart: itemArray,
            };
        }
    }

    return state;
};

export default reducer;
