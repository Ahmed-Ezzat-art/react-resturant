import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './style.css';

const Feature = () => {

    const [features, setFeatures] = useState([]);
    const fetchFeature = async () => {
        const response = await axios.get("data.json")
        setFeatures(response.data.features);
    }

    useEffect(() => {
        fetchFeature();
    }, []);

    
    return (
        <section className="feature">
            <div className="section-title">
                <h2 className="curveText">our features</h2>
                <span className="line"></span>
            </div>

            <div className="container">
                <div className="row">
                    {
                        features.map(item => (
                            <div className="col-md-4 col-sm-6 col-xs-12" key={item.id}>
                                <div className="feature-content">
                                    <div className="feature-icon">
                                        <i className={`${item.icon} fa-fw fa-2x`}></i>
                                    </div>

                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>

                <div className="scrollbtn">
                    <i className="fas fa-arrow-up"></i>
                </div>
            </div>
        </section>
    )
}

export default Feature
