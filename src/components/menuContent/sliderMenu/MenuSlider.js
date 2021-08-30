import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSliderPro, addSlider } from '../../../redux/actions'
import axios from 'axios';
import Carousel from 'react-elastic-carousel';
import './style.css';
import currencyFormatter from 'currency-formatter';


const MenuProducts = () => {
    const dispatch = useDispatch();
    const { sliderProducts } = useSelector(state => state.allReducers)

    useEffect(() => {
        axios.get("data.json").then(res => (
            dispatch(setSliderPro(res.data.sliderProd))
        ))
    }, [dispatch])

    /*  owl carousel  */
    const breakPoints = [
        { width: 500, itemsToShow: 1 },
        { width: 768, itemsToShow: 2 },
        { width: 1200, itemsToShow: 3 },
        { width: 1400, itemsToShow: 3 }
    ]
    return (
        <div>
            <div className="container">
                <div className="section-title">
                    <img src="images/logo/titleImg.png" alt="cake" />
                    <h2 className="curveText">we are professional at our skills</h2>
                    <span className="line"></span>
                </div>


                <Carousel breakPoints={breakPoints}
                    enableAutoPlay
                    preventDefaultTouchmoveEvent
                >
                    {
                        sliderProducts.map(item => (
                            <React.Fragment key={item.id}>
                                <div className="slider-content">
                                    <div className="slider-img">
                                        <img src={item.img} alt={item.title} />
                                    </div>

                                    <div className="slider-info">
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                        <span>{currencyFormatter.format(item.price, { code: 'EGP', precision: 0 })}</span>
                                        <button className="shoppingBtn"
                                            onClick={() => dispatch(addSlider(item.id))}
                                        >
                                            <i className="fas fa-cart-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))
                    }

                </Carousel>

                {/* <div className="scrollbtn">
                    <i className="fas fa-arrow-up"></i>
                </div> */}

            </div >
        </div >
    )
}

export default MenuProducts
