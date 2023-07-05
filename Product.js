import React from 'react'
import './Product.css';
import { UseStateValue } from "./StateProvider";

function product({id,title,image,price,rating}) {

    const [dispatch] = UseStateValue();

    const addToCart = () => {
        //dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image:image,
                price: price,
                rating : rating,
            },
        });
    };

    return (
        <div className = 'product'>
            <div className = 'product__info'>
                <p>
                    {title}  {/* This is the main usage of props in react */}
                </p>
                <p clasname = 'product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className = 'product__rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
            </div>
            <img 
                src = {image} 
                alt = ""
            />

            <button onClick = {addToCart}>Add to Cart</button>
        </div>
    )
}

export default product
