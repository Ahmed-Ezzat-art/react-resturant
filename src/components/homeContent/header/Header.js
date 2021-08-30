import React from 'react'
import './style.css'

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="header-content">
                                <div className="col-md-6 col-sm-12">
                                    <div className="header-desc">
                                        <h1>
                                            resturant with special foods
                                        </h1>
                                        <p>
                                            A vast number of foods are both healthy and tasty.
                                            By filling your plate with fruits, vegetables,
                                            quality protein, and other whole foods.
                                        </p>

                                        <button>Read more</button>
                                    </div>
                                </div>

                                <div className="col-md-6 col-sm-12">
                                    <div className="header-img">
                                        <img src="images/bg/buger.png"
                                            alt="burger"
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default Header


/*
<div className="section-title">
                <h2 className="curveText">
                    our popular foods
                </h2>

                <span className="line"></span>
            </div>
*/