import React from 'react';
import './style.css';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <div className="footer-content">
                            <h3>about us</h3>
                            <p>
                                There are many variations of passages
                                of Lorem Ipsum available, but the
                                majority have suffered alteration
                                in some form, by injected humour,
                                or randomised words which don't
                                look even slightly believable.
                                If you are going to use a passage
                                of Lorem Ipsum
                            </p>

                            <ul className="footer-icons">
                                <li><i className="fab fa-facebook-f"></i></li>
                                <li><i className="fab fa-twitter"></i></li>
                                <li><i className="fab fa-linkedin-in"></i></li>
                                <li><i className="fab fa-pinterest"></i></li>
                                <li><i className="fas fa-rss"></i></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-6 col-xs-12">
                        <div className="footer-desc">
                            <h3>opening hours</h3>
                            <ul className="open-hours">
                                <li>
                                    <span>saturday</span>
                                    <span>5pm - 11pm</span>
                                </li>

                                <li>
                                    <span>sunday</span>
                                    <span>5pm - 11pm</span>
                                </li>

                                <li>
                                    <span>monday</span>
                                    <span>5pm - 11pm</span>
                                </li>

                                <li>
                                    <span>tuesday</span>
                                    <span>6pm - midnight</span>
                                </li>

                                <li>
                                    <span>wednesday</span>
                                    <span>6pm - midnight</span>
                                </li>

                                <li>
                                    <span>thursday</span>
                                    <span>3pm - midnight</span>
                                </li>

                                <li>
                                    <span>friday</span>
                                    <span>closed</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
                <p className="desc">&copy; all rights reserved have been desgined by Ahmed Ezzat</p>
        </footer>
    )
}

export default Footer
