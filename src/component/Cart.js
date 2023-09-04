import React from 'react';
import { useDispatch } from 'react-redux';
import { delItem } from "../redux/actions/index";
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import './Cart.css'; 
const Cart = () => {
    const cartItems = useSelector((state) => state.addItem);
    const dispatch = useDispatch()

    const handleClose = (item) => {
        dispatch(delItem(item))
    }
    const removeItem = (item) => {
        dispatch(delItem(item))
    }
    
    const renderCartItem = (cartItem) => {
        return(
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <button onClick={()=>handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.img} alt={cartItem.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p className="lead fw-bold">{cartItem.price} dt</p>
                            <p>Quantity: {cartItem.quantity}</p>
                            <button onClick={() => removeItem(cartItem)} className="btn btn-outline-danger">Remove</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                    </div>
                </div>
        );
    }

    const renderCart = () => (
        <>
            {cartItems.length === 0 ? emptyCart() : cartItems.map(renderCartItem)}
            <div className="container">
                <div className="row">
                    <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">Proceed To Checkout</NavLink>
                </div>
            </div>
        </>
    );

    return (
        <>
            {cartItems.length === 0 ? emptyCart() : renderCart()}
        </>
    );
}

export default Cart;