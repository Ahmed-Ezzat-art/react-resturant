import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {
    const { totalQuantity } = useSelector(state => state.allReducers);
    return (
        <nav className="fixed-top">
            <div className="container">
                <div className="nav-content">

                    <div className="nav-logo">
                        <Link to="/">
                            <img src="images/logo/logo1.png" className="logo" alt="logo" />
                        </Link>
                    </div>

                    <div className="nav-links">
                        <ul>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/feature">Features</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </ul>
                    </div>

                    <div className="nav-icons">
                        <ul>
                            <li className="moon">
                                <i className="fas fa-moon"></i>
                            </li>

                            <li>
                                <Link to="/cart">
                                    <i className="fas fa-shopping-basket fa-fw"></i>
                                    <span className="nav-quantity">{totalQuantity}</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/register">
                                    <i className="fas fa-power-off fa-fw"></i>
                                </Link>
                            </li>

                            <li className="barsBtn">
                                <i className="fas fa-bars"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar