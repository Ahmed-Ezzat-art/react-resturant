import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './style.css';

const New = () => {

    const [newPro, setNewPro] = useState([])
    const [grid, setGrid] = useState(true)

    const getNew = async () => {

        const response = await axios.get("data.json")
        setNewPro(response.data.new)
    }

    useEffect(() => {
        getNew()
    }, []);

    const setClassList = () => {
        let newBox = document.querySelector(".new-box");
        newBox.classList.remove("grid");
        newBox.classList.add("list");
        document.querySelector(".listBtn").classList.add("active");
        document.querySelector(".gridBtn").classList.remove("active");
        setGrid(false)
    }

    const setClassGrid = () => {
        let newBox = document.querySelector(".new-box");
        newBox.classList.remove("list");
        newBox.classList.add("grid");
        document.querySelector(".listBtn").classList.remove("active");
        document.querySelector(".gridBtn").classList.add("active");
        setGrid(true)
    }

    return (
        <section>
            <div className="container">
                <div className="new-header">
                    <div className="new-title">
                        <h2 className="curveText">new in our menu</h2>
                    </div>

                    <div className="new-icons-switch">
                        <i className="fas fa-th-list fa-fw fa-2x listBtn" onClick={setClassList}></i>
                        <i className="fas fa-th fa-fw fa-2x active gridBtn" onClick={setClassGrid}></i>
                    </div>
                </div>

                <div className="new-box grid">
                    {grid ? <div className="row">
                        {
                            newPro.map(item => (

                                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={item.id}>
                                    <div className="new-content">
                                        <div className="new-img">
                                            <img src={item.img} alt={item.title} />
                                        </div>

                                        <div className="new-info">
                                            <h4>{item.title}</h4>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                        : <div className="row">
                            {
                                newPro.map(item => (

                                    <div className="col-md-6 col-xs-12" key={item.id}>
                                        <div className="new-content">
                                            <div className="new-img">
                                                <img src={item.img} alt={item.title} />
                                            </div>

                                            <div className="new-info">
                                                <h4>{item.title}</h4>
                                                <p>{item.desc}</p>
                                                <div className="new-icons">
                                                    <i className={`${item.star}`}></i>
                                                    <i className={`${item.star}`}></i>
                                                    <i className={`${item.star}`}></i>
                                                    <i className={`${item.star}`}></i>
                                                    <i className={`${item.star}`}></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    }
                </div>
            </div>
        </section>
    )
}

export default New
