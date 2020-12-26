import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/cartActions"


const initialState = {
    cart: [],
    products: [
        {name: "Lenovo", id: 1},
        {name: "Asus", id:2},
        {name: "Dell", id: 3},
        {name: "Apple", id: 4},
        {name: "Hp", id: 5}
    ]
}

const cartReducers = (state= initialState, action) => {
    switch(action.type){
        case ADD_TO_CART: 
            console.log(action);
            const newItem = {
                productId: action.id,
                productName: action.name,
                cartId: state.cart.length + 1
            }
            const newCart = [...state.cart, newItem];
            return {...state, cart: newCart}

        case REMOVE_FROM_CART:
            const cartId = action.cartId;
            const remainCart = state.cart.filter(item => item.cartId !== cartId);
            return {...state, cart: remainCart}
        
        default:
            return state;
    }
}

export default cartReducers;