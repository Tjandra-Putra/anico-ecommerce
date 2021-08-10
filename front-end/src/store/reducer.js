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
        case actionTypes.ADD_TO_CART:
            // default value of quantity is 1 when cart is empty
            if (state.myCart.length === 0) {
                action.product.quantity = 1;
            }

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
                let array = [...state.myCart];
                array.push(action.product);

                return {
                    ...state,
                    myCart: array,
                };
            }

        // FUNCTION: REMOVE CART ITEM
        case actionTypes.REMOVE_CART_ITEM:
            const myCartArray = [...state.myCart];
            myCartArray.splice(action.index, 1);

            return {
                ...state,
                myCart: myCartArray,
            };
    }

    return state;
};

export default reducer;
