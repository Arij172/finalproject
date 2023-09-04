import React from 'react';
import './Footer.css'; 
const Footer = () => {
return (
    <footer className="footer">
        <div className="container">
        <div className="row">
            <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: A&BWORLD@gmail.com</p>
            <p>Phone: 29847644</p>
            </div>
        <div className="col-md-4">
            <h5>Links</h5>
            <ul className="list-unstyled  custom-list-style">
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            </div>
            <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled custom-list-style-follow">
                <li><a href="#"><i className="fa fa-facebook"></i> Facebook</a></li>
                <li><a href="#"><i className="fa fa-twitter"></i> Twitter</a></li>
                <li><a href="#"><i className="fa fa-instagram"></i> Instagram</a></li>
            </ul>
        </div>
        </div>
    </div>
    <div className="text-center py-3">
        &copy; {new Date().getFullYear()} A&B WORLD. All rights reserved.
    </div>
    </footer>
);
}

export default Footer;