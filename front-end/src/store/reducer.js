import * as actionTypes from "./actions";

// =========== GLOBAL STATE ===========
const initialState = {
    myCart: [], // contains a list of objects
    totalPrice: 0,
};

const reducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            // setting default quantity
            // action.product.quantity = 1;

            let array = [...state.myCart];
            array.push(action.product);

            return {
                ...state,
                myCart: array,
            };
    }

    return state;
};

export default reducer;
