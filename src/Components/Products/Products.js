import React from 'react';

const Products = (props) => {
    const{addToCart, product} = props;
    const {name, id} = product;
    return (
        <div style={{border: "2px solid black", margin: "5px"}}>
            <h2>{name}</h2>
            <button onClick={()=> addToCart(id, name)} >Add to cart</button>
            
        </div>
    );
};

export default Products;