import React from 'react'
import Header from '../Compoment/Header'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../Redux/slices/CartSlices';

export default function Cart() {
    const { item, totalQuantity } = useSelector((state) => state.cart);

    const dispatch = useDispatch();
    return (
        <div>
            <Header />
            <div className='container mt-3'>
                <table class="table table-success table-striped">
                    <tr>
                        <th>
                            Image
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Description
                        </th>
                        <th>
                            Price
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                    {item.map((items) => (
                        <tr key={items.id}>
                            <td>
                                {items.image}
                            </td>
                            <td>
                                {items.name}
                            </td>
                            <td>
                                {items.description}
                            </td>
                            <td>
                                {items.price}
                            </td>
                            <td>
                                <button onClick={() => dispatch(removeFromCart(items.id))} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}
