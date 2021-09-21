import React, { useState, useEffect } from "react";
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import "../App.css";
import Products from "./Products";


export default function Categories(props) {
    
    const { cats } = props
    
    return (
        <div className='category-main'>
            <h2>Select category below</h2>
            <div className='category-card-container'>
                <div className='listed-items'>
                    {cats.map(category => {
                        return (
                        <CategoryDetails key={category.id} details={category} />
                        )
                     })}
                </div>
            </div>
        </div>
    )   
}

function CategoryDetails(props) {

    // const [productDetails, setProductDetails] = useState()
    const { category_name , url } = props.details

    const history = useHistory();

    const routeToProducts = () => {
        history.push(`/categories/${props.details.id}`)
    }

    return (
        <div className="product-category" onClick= {routeToProducts} >
            <h2>Category: {category_name}</h2>
            <div className="category-image">
                <img src={url}></img>
            </div>
        </div>
    )
}

