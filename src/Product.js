/*
import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({id,title,image,price,rating}) {
    const [{basket}, dispatch] = useStateValue();  
    
    console.log("this is shit",basket)
    
    const addToBasket = () => {
        //add item to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        })
    };
    return (
        <div className="product">
            <div className="product__info">
                <p>{id}</p>
                <p>{title}</p>
                <p className="product__price" >
                   <small>₹</small>
                   <strong>{price}</strong>
                </p>

                <div className="product__rating">
                {Array(rating)
                        .fill()
                        .map((_ ) => (
                            <p>⭐️</p>
                        ))}
                </div> 
            </div>
              
              <img src={image} alt="" />
              
            <button onClick={addToBasket} className="but">Add to Basket</button>
        </div>
    )
}

export default Product
*/
import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
    const [{}, dispatch] = useStateValue();    
    const addToBasket = () => {
        //add item to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        })
    };
    return (
     
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐️</p>
                    ))}
                </div>
            </div>
            <img src={image} alt="" />
            <button  onClick={addToBasket}>Add to basket</button>
        </div>
        
    )
}

export default Product