import React from 'react';
import { useStateValue } from '../../provider/StateProvider';
import {getBasketTotal} from '../../provider/Reducer';
import "./Subtotal.css";

const Subtotal = ()=>{

    const [{basket}] = useStateValue();

    return(
        <div className="subtotal">
            <span>{`Subtotal (${basket?.length}) items`} <strong>${getBasketTotal(basket)}</strong></span>
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;