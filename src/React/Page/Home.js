import React, { useEffect } from 'react'
import Header from '../Compoment/Header'
import "../css/BoxFood.css"
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { listProduct } from '../../Redux/slices/ProductSlices';
import CardProduct from '../Compoment/CardProduct';

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProduct());

    }, [dispatch]);

    const { items, search, loading, error } = useSelector((state) => state.products);

    const filteredProducts = items.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) {
        return <Spinner animation="border" />;
    }

    if (error) {
        return <p>{error}</p>;
    }


    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='container'>
                <div className='row mt-4'>
                    {filteredProducts.map((product) => (
                        <CardProduct key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div >
    )
}
