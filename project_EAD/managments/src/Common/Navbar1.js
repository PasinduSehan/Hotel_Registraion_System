/*import React, { useState } from "react";
import "./Navbar1.css";
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from "react-router-dom";


const Navbar1 = () => {
    const[click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = ()  => setClick(false)

    return (  
        <>
            <nav className="navbar1">
                <div className="container flex_space">
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click? "fas fa-times": "fas fa-times"}></i>
                    </div>
                    <ul className={click?  "nav-menu active": "nav-menu"}>
                            <li> <Link to ="/" onClick={closeMobileMenu}>Home</Link> </li>
                            <li>  <Link to ="/about" onClick={closeMobileMenu}>About</Link> </li>
                            <li> <Link to ="/gallery" onClick={closeMobileMenu}>Gallery</Link> </li>
                            <li> <Link to ="/destination" onClick={closeMobileMenu}>Destination</Link> </li>
                            <li>  <Link to ="/blog" onClick={closeMobileMenu}>Blog</Link> </li>
                            <li>  <Link to ="/testimonali" onClick={closeMobileMenu}>Testimonail</Link> </li>
                            <li> <Link to ="/contact" onClick={closeMobileMenu}>Contact Us</Link> </li>
                       
                    </ul>
                    <div className="login-area flex">
                       <li>
                            <Link to="/sign-in">
                               <i className="far fa-chevron-right">Sign In</i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/register">
                               <i className="far fa-chevron-right">Register</i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                        
                                <button className='primary-btn'>Request a Quote</button>
                            </Link>
                        </li>
                    </div>
                </div>
            </nav>

         <header>
            <div className="container flex_space">
                <div className="logo">
                <img src="image/logo3.png" alt="Logo" class="small-logo" />

                </div>
                <div className="contact flex_space">
                    <div className="box flex_space">
                        
                        <div className="box flex_space">
                        </div>
                        <div className="box flex_space">
                        <div className="icons">
                            <i className="fas fa-phone-volume"></i>
                        </div>
                        <div className="text">
                            <h4>
                                Call Us Hours
                            </h4>
                            <Link to="/contact">+11 0235 657 12</Link>
                        </div>
                    </div>
                    <div className="box flex_space">
                        <div className="icons">
                            <i className="far fa-evelope"></i>
                        </div>
                        <div className="text">
                            <h4>
                                Working Hours
                            </h4>
                            <Link to="/contact">Monday - Sunday: 9.00am to 6.00pm</Link>
                        </div>
                    </div>
                </div>
            </div>
         </header>

        </>
    );
};

export default Navbar1;

*/



import React, { useState } from "react";
import "./Navbar1.css";
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from "react-router-dom";


const Navbar1 = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar1">
                <div className="container flex_space">
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
                        <li>  <Link to ="/about" onClick={closeMobileMenu}>About</Link> </li>
                            <li> <Link to ="/gallery" onClick={closeMobileMenu}>Gallery</Link> </li>
                            <li> <Link to ="/destination" onClick={closeMobileMenu}>Destination</Link> </li>
                            <li>  <Link to ="/blog" onClick={closeMobileMenu}>Blog</Link> </li>
                            <li>  <Link to ="/testimonali" onClick={closeMobileMenu}>Testimonail</Link> </li>
                            <li> <Link to ="/contact" onClick={closeMobileMenu}>Contact Us</Link> </li>
                    </ul>
                    <div className="login-area flex">
                    <li>
                            <Link to="/sign-in">
                               <i className="far fa-chevron-right">Admin</i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/register">
                               <i className="far fa-chevron-right">Register</i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/btn">
                        
                                <button className='primary-btn'>Book Now </button>
                            </Link>
                        </li>
                    </div>
                </div>
            </nav>

            <header>
                <div className="container flex_space">
                    <div className="logo">
                        <img src="image/logo3.png" alt="Logo" className="small-logo" />
                    </div>
                    <div className="contact flex_space">
                    <div className="box flex_space">
                        </div>
                    <div className="box flex_space">
                            <div className="icons">
                                <i className="far fa-clock"></i>
                            </div>
                            <div className="text">
                                <h4>Working Us</h4>
                                <Link to="/contact">Monday - Sunday 9.00am to 6.00pm</Link>
                            </div>
                            </div>
                            <div className="contact flex_space">
                    <div className="box flex_space"></div>
                        </div>
                        <div className="box flex_space">
                            <div className="icons">
                                <i className="fas fa-phone-volume"></i>
                            </div>
                            <div className="text">
                                <h4>Call Us </h4>
                                <Link to="/contact">+11 0235 657 12</Link>
                            </div>
                        </div>
                      
                        <div className="box flex_space">
                            <div className="icons">
                                <i className="far fa-envelope"></i>
                            </div>
                            <div className="text">
                                <h4>Mail Us</h4>
                                <Link to="/contact">RoyalHotel@gmail.com</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
        </>
    );
};

export default Navbar1;



