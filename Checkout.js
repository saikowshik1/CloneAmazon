import React from 'react'
import './Checkout.css';
import CartItem from './CartItem.js';
import Subtotal from './Subtotal.js';
import {UseStateValue} from './StateProvider';

function Checkout() {
    
    const [{cart,user}] = UseStateValue();

    return (
        <div className = "checkout">
            <div className = "checkout__left">
                <img 
                    // className = "checkout__ad"
                    src= "https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />
                
                <div>
                    <h3>Hello, {user?user.email:'Guest'}</h3>
                    <h2 className = "checkout__title">
                        Your Shopping Cart
                    </h2>
                
                {/* Dynamic Items can be done as shown below */}
                
                {cart.map(item => (
                    <CartItem
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                    />
                ))}

                </div>
            </div>

            <div className = "checkout__right">
                <Subtotal/>
            </div>

        </div>
    )
}

export default Checkout
