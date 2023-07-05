import React from 'react'
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { UseStateValue } from './StateProvider';
import {GetCartTotal} from './Reducer.js';

function Subtotal() {
    const [{cart}] = UseStateValue();

    return (
        <div className = 'subtotal'>
            <CurrencyFormat
                renderText = {(value) => (
                    <>
                        <p>
                            Subtotal ({cart.length} items):
                            <strong>{value}</strong>
                        </p>
                        <small className ="subtotal__gift">
                            <input type = "checkbox" />
                            This Order Contains a Gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value = {GetCartTotal(cart)}
                // value = {0}
                displayType = {"text"}
                thousandSeparator ={true}
                prefix = {"$"}
            />
            <button>Proceed to Checkout </button>
        </div>
    )
}

export default Subtotal
