import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../Redux/Actions/cartActions';

const Cart = (props) => {
    console.log(props);
    const {cart, removeFromCart} = props;
    return (
        <div>
            <h2>This is cart</h2>
            <ul>
                {
                    cart.map(pd=> <li>{pd.productName} <button onClick={() => removeFromCart(pd.cartId)} >X</button> </li> )
                }
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart,
    }
}

const mapDispatchToProps = {
    removeFromCart: removeFromCart,
}

export default connect (mapStateToProps, mapDispatchToProps)(Cart);