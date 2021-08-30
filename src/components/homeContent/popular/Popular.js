import React, { useEffect, useState } from 'react'
import "./style.css"
import axios from 'axios'
const Popular = () => {
    const [popular, setPopular] = useState([]);
    useEffect(() => {
        axios.get("data.json").then(res => {
            setPopular(res.data.popular)
        })
    }, [])


    return (
        <section>
            <div className="section-title">
                <h2 className="curveText">
                    our popular foods
                </h2>

                <span className="line"></span>
            </div>

            <div className="container">
                <div className="row">
                    {
                        popular.map(item => (
                            <div className="col-xl-3 col-md-4 col-sm-6 col-xs-12" key={item.id}>
                                <div className="pop-box">
                                    <div className="pop-img">
                                        <img src={item.img} alt={item.title} />
                                    </div>

                                    <div className="pop-info">
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                        {item.id === 1 || item.id === 3 ?
                                            <div className="icons">
                                                <i className={`${item.star}`}></i>
                                                <i className={`${item.star}`}></i>
                                                <i className={`${item.star}`}></i>
                                                <i className={`${item.star}`}></i>
                                                <i className={`${item.star}`}></i>
                                            </div>
                                            : <div className="icons">
                                                <i className={`${item.star}`}></i>
                                                <i className={`${item.star}`}></i>
                                                <i className={`${item.star}`}></i>
                                                <i className={`${item.star}`}></i>
                                                <i className={`${item.starEmpty}`}></i>
                                            </div>
                                        }
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

export default Popular
