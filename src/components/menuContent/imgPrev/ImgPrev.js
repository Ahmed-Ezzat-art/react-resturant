import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setImgPrev, addPreviewImg } from '../../../redux/actions';
import currencyFormatter from 'currency-formatter'
import './style.css';


const ImgPrev = () => {

    const dispatch = useDispatch();
    const { imgPrevProducts } = useSelector(state => state.allReducers);

    // useEffect(() => {
    //     axios.get("data.json").then(res => {
    //         dispatch(setImgPrev(res.data.imgPreview))
    //     })
    // }, [])

    const getImgPrevData = async () => {
        await axios.get("data.json").then(res => {
            dispatch(setImgPrev(res.data.imgPreview))
        }) 
    }

    useEffect(() => {
        getImgPrevData()
    })


    return (
        <section className="img-prev">
            <div className="container">
                <div className="section-title">
                    <h2 className="curveText">tasty and good price</h2>
                    <span className="line"></span>
                </div>

                <div className="row">
                    {
                        imgPrevProducts.map(item => (
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={item.id}>
                                <div className="prev-content">
                                    <img src={item.img} alt={item.title} />
                                    <div className="prev-layer">
                                        <span>{currencyFormatter.format(item.price, { code: 'EGP', precision: 0 })}</span>
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                        <button
                                            onClick={() => dispatch(addPreviewImg(item.id))}
                                        >
                                            <i className="fas fa-cart-plus"></i>
                                            add to cart</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </section>
    )
}

export default ImgPrev
