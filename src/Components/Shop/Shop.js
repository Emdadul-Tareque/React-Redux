import React from 'react';
import { connect } from 'react-redux';
import Products from '../Products/Products';
import { addToCart } from '../Redux/Actions/cartActions';

const Shop = (props) => {
    const {products, addToCart} = props;
    console.log(props);
    
    return (
        <div>
            <h1>This is Shop</h1>
            {
                products.map(product => <Products  addToCart = {addToCart} product = {product}></Products>)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart,
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);