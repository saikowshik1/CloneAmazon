import React from 'react'
import './CartItem.css';
import { UseStateValue } from './StateProvider';

function CartItem({id, image, title, price, rating}) {

    const [, dispatch] = UseStateValue();
    //cart is not used so i kept comma

    const removeFromCart = () => {
    //remove the item from basket
        dispatch({
            type: 'REMOVE_FROM_CART',
            id:id,  //find the item by id and remove the product
        });
    }

    //dispatch is used for making an action
    //cart is used for retrival of items

    return (
        <div className = 'cartitem'>
            <img
                src = {image}
                alt=""
            />
            <div className = 'cartitem__info'>
                <p className = 'cartitem__title'><strong>{title}</strong>
                </p>
                <p className = 'cartitem__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className = 'cartitem__rating'>
                    {Array(rating).fill().map((_,i) => (
                        <p>🌟</p>
                    ))}
                </div>
                <button onClick = {removeFromCart}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CartItem
