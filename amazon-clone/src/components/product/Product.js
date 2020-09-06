import React from 'react';
import './Product.css';
import { useStateValue } from '../../provider/StateProvider';

const Product = ({id, image, title, price, rating})=> {

    const [{basket, dispatch}] = useStateValue();

    const addToBasket = ()=>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                    id,
                    image,
                    title,
                    price,
                    rating
            }
        });
    }

    return(
        <div className="product">
            <div className="product_image_container">
                <img src={image} alt="" className="product__img"/>
            </div>
            <div className="product_description">
                <span className="product__title">{title}</span>
                <span className="product__price">${price}</span>
                <div className="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_, index)=>(
                        <p key={index}>⭐</p> 
                        ))
                    }
                </div>
                <button onClick={addToBasket} className="product__btn">Add to basket</button>
            </div>
            
        </div>
    )
};

export default Product;