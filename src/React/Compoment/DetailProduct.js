import React, { useEffect } from 'react'
import Header from './Header'
import "../css/DetailCard.css"
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { detailProduct } from '../../Redux/slices/DetaileSlices';
export default function DetailProduct() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product, status, error } = useSelector((state) => state.detail);

    useEffect(() => {
        dispatch(detailProduct(id));
    }, [dispatch, id]);

    if (status === 'loading') {
        return <div>Đang tải sản phẩm...</div>;
    }

    if (status === 'failed') {
        return <div>Lỗi: {error}</div>;
    }

    if (!product) {
        return <div>Không tìm thấy sản phẩm!</div>;
    }

    return (
        <div>
            <Header />
            <div className='container centerDetailer'>
                <div className='detailCard'>
                    <div className='card'>
                        <div>
                            <img src={product.image} className='img-fluid'></img>
                        </div>
                        <div className='card-title'>{product.name}</div>
                        <div className='card-text'>{product.description}</div>
                        <div>{product.price}</div>
                    </div>

                </div>
            </div>
        </div>
    )
}
