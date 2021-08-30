import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setBlog2 } from '../../../redux/actions';

import './style.css';


const Blog2 = () => {

    const dispatch = useDispatch();
    const { blogProducts2 } = useSelector(state => state.allReducers);

    useEffect(() => {
        const fetchData = async () => {
            await axios.get("data.json").then(res => {
                dispatch(setBlog2(res.data.blog2))
            })
        }
        fetchData()
    },[dispatch])

    return (
        <section className="blog2">
            <div className="container">
                <div className="section-title">
                    <h2 className="curveText">more blogs</h2>
                    <span className="line"></span>
                </div>

                <div className="row">
                    {
                        blogProducts2.map(item => (
                            <div className="col-md-4 col-sm-6 col-xs-12" key={item.id}>
                                <div className="blog2-content">
                                    <div className="blog2-img">
                                        <img src={item.img} alt={item.title} />
                                    </div>

                                    <div className="blog2-info">
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                        {
                                            item.id === 1 &&
                                            <div className="blog-icons">
                                                <i className={item.star}></i>
                                                <i className={item.star}></i>
                                                <i className={item.star}></i>
                                                <i className={item.star}></i>
                                                <i className={item.star}></i>
                                            </div>

                                        }


                                        {
                                            item.id === 2 &&
                                            <div className="blog-icons">
                                                <i className={item.star}></i>
                                                <i className={item.star}></i>
                                                <i className={item.star}></i>
                                                <i className={item.star}></i>
                                                <i className={item.starEmpty}></i>
                                            </div>

                                        }


                                        {
                                            item.id === 3 &&
                                            <div className="blog-icons">
                                                <i className={item.star}></i>
                                                <i className={item.star}></i>
                                                <i className={item.star}></i>
                                                <i className={item.star}></i>
                                                <i className={item.halfStar}></i>
                                            </div>

                                        }


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

export default Blog2
