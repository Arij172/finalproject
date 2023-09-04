import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return ( 
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                        Welcome to our world of creativity and craftsmanship! We're A&B, two best friends with a shared love for handmade jewelry. Our creations are a fusion of creativity and craftsmanship, offering you unique pieces that tell a story. Thank you for joining us on this artistic journey. Explore, enjoy, and adorn yourself with our handmade treasures.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/img/A&B world0.jpg" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About