import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, NavLink, useRouteMatch } from 'react-router-dom';

export default function Products(props) {
    const {cats} = props
    const { id } = useParams();

    const productId = cats.find(prod => prod.id === parseInt(id))

    return (
        <div className='products-container'>
            <h2>All Products in the {productId.category_name} category:</h2>
            <div className="product-card-container"> 
                <div className="listed-products">
                    {productId.products.map(prod => {
                        return (
                            <div className="product-card" key={prod.product_id}>
                                <h3>{prod.name}</h3>
                                <img src={prod.img}></img>
                                <p>Price: ${prod.price_usd}</p>
                                <p>Description: {prod.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )

}