import * as actionTypes from "./actions";

// =========== GLOBAL STATE ===========
const initialState = {
    myCart: [], // contains a list of objects
    totalAmount: 0,
};

const reducer = (state = initialState, action) => {
    // FUNCTION: ADD TO CART
    // eslint-disable-next-line default-case
    switch (action.type) {
        case actionTypes.ADD_TO_CART: {
            // return index of item that has already existing in the cart. add to existing cart item if exists.
            const itemIndex = state.myCart.findIndex((item) => {
                return (
                    item.id === action.product.id &&
                    item.size === action.product.size
                );
            });

            // if item exists in cart, index -1 means does not exist
            if (itemIndex !== -1) {
                const myCartArray = [...state.myCart];
                myCartArray[itemIndex].quantity++;

                return {
                    ...state,
                    myCart: myCartArray,
                };
            }
            // adding new item to cart first time
            else {
                let array = [...state.myCart];

                var tempProductObj = { ...action.product };
                tempProductObj.quantity = 1;
                array.push(tempProductObj);

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
                return (
                    item.id === action.itemId && item.size === action.itemSize
                );
            });

            console.log("INDEX" + itemIndex);
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
                return (
                    item.id === action.itemId && item.size === action.itemSize
                );
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

        // FUNCTION: TOTAL CART AMOUNT
        case actionTypes.TOTAL_CART_AMOUNT: {
            return {
                ...state,
                totalAmount: action.totalAmount,
            };
        }
    }

    return state;
};

export default reducer;
