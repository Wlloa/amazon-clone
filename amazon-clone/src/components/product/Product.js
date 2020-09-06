import React from 'react';
import './Product.css';

const Product = ({image, title, price, rating, isPrime})=> {
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
                        .map((_)=>(
                        <p>⭐</p> 
                        ))
                    }
                </div>
                <button className="product__btn">Add to basket</button>
            </div>
            
        </div>
    )
};

export default Product;