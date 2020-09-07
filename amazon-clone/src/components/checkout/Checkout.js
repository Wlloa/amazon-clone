import React from 'react';
import './Checkout.css';
import { useStateValue } from '../../provider/StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

const Checkout = ()=>{

    const [{basket}] = useStateValue();

    return(
        <div className="checkout">
            <div className="checkut__left">
                <img
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.JPG" 
                    alt="" 
                    className="checkout__ad"/>

                <div>
                {basket?.length === 0?(
                    <div>
                            <h2>Your Basket is empty</h2>
                            <p>
                                You have no item in your basket. To buy one or more items
                                , click "Add to basket" next to the item.
                            </p>
                        </div>
                ):(
                    <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                        {basket?.map(item=>(
                            <CheckoutProduct
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
                    
                </div>
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal/>
                </div>
            )}
            
        </div>
    )
};

export default Checkout;