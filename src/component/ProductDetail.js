import React from 'react'
import { useParams } from 'react-router'
import DATA from '../Data';
import { useDispatch ,useSelector } from 'react-redux';
import {addItem,incrementItemQuantity} from '../redux/actions/index'

const ProductDetail = () => {
    const proid = useParams();
    const proDetail = DATA.find((x) => x.id === parseInt(proid.id, 10));
    const product = proDetail || {};


    const dispatch = useDispatch();
    const cart = useSelector((state) => state.addItem);
    const cartItem = cart.find((item) => item.id === product.id);
    const isProductInCart = !!cartItem;
    const buttonText = isProductInCart ? 'Add one more' : 'Add to Cart';
    const quantity = isProductInCart ? cartItem.quantity : 0;

    const handleCart = () => {
      if (!isProductInCart) {
        dispatch(addItem(product));
      } else {
        console.log('Incrementing quantity for product:', product.id);
        dispatch(incrementItemQuantity(product.id));
      }
    };
    return (
        <>
        <div className="container my-5 py-3">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center mx-auto product">
                    <img src={product.img} alt={product.title}height="400px" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="display-5 fw-bold">{product.title}</h1>
                    <hr />
                    <h2 className="my-4">{product.price}dt</h2>
                    <p className="lead">{product.desc}</p>
                    <p>Quantity in Cart: {quantity}</p>
                    <button onClick={()=>handleCart(product)} className="btn btn-outline-primary my-5">{buttonText}</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductDetail;