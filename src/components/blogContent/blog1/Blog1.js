import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setBlog1 } from '../../../redux/actions';

import './style.css';


const Blog1 = () => {

    const dispatch = useDispatch();
    const { blogProducts1 } = useSelector(state => state.allReducers);

    useEffect(() => {
        const fetchData = async () => {
            await axios.get("data.json").then(res => {
                dispatch(setBlog1(res.data.blog1))
            })
        }
        fetchData()

    },[dispatch])

    return (
        <section className="blog1">
            <div className="container">
                <div className="section-title">
                    <h2 className="curveText">our blogs</h2>
                    <span className="line"></span>
                </div>

                <div className="row">
                    {
                        blogProducts1.map(item => (
                            <div className="col-md-4 col-sm-6 col-xs-12" key={item.id}>
                                <div className="blog1-content">
                                    <div className="blog1-img">
                                        <img src={item.img} alt={item.title} />
                                    </div>

                                    <div className="blog1-info">
                                        <h4>{item.title}</h4>
                                        <span>{item.meal}</span>
                                        <p>{item.desc}</p>
                                        <button>read more</button>
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

export default Blog1
