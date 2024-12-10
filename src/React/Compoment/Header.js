import React from 'react'
import "../css/Header.css"
import { useDispatch } from 'react-redux'
import { searchProduct } from '../../Redux/slices/ProductSlices';
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router';

export default function Header() {
    const dispatch = useDispatch();
    const handleSeach = (event) => {
        dispatch(searchProduct(event.target.value))
    }
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <Link to={"/home"} className="navbar-brand">Navbar</Link>
                    <form className="d-flex" role="search">
                        <input
                            onChange={handleSeach}
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                    </form>
                    <Link to={'/cart'} >
                        <CiShoppingCart className='iconCart' />
                    </Link>
                </div>
            </nav>
        </div>
    )
}
