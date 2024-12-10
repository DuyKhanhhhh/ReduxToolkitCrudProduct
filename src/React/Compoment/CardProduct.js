import React from 'react'
import "../css/BoxFood.css"
import { Link, useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/slices/CartSlices';

export default function CardProduct({ product }) {
    const dispatch = useDispatch();
    function formatNumberWithCommas(number) {
        return number.toLocaleString('de-DE');
    }
    const handleAddToCart = () => {
        dispatch(addToCart(product));
    }
    return (
        <div className='col-6 col-md-4 mb-4'>
            <div className='card'>
                <Link to={`/detail/${product.id}`}>
                    <div>
                        <img className='img' src={product.image}></img>
                    </div>
                    <div className='name'>{product.name}</div>
                    <div className='price'>{formatNumberWithCommas(product.price)}</div>
                </Link>

                <button className='btn btn-success' onClick={handleAddToCart}>AddToCart</button>
            </div>

        </div >
    )
}
