import React, { useEffect, useState } from 'react'
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterPro, addFilterPro } from '../../../redux/actions';
import currencyFormatter from 'currency-formatter';
import axios from 'axios';

const FilterImg = () => {
    const dispatch = useDispatch();
    const { filterProducts } = useSelector(state => state.allReducers);

    const [items, setItems] = useState([])

    useEffect(() => {

        axios.get("data.json").then(res => {
            dispatch(setFilterPro(res.data.filterPro))
            setItems(res.data.filterPro)

        })

    },[dispatch])


    const filterItems = categoryItem => {
        const filterItem = filterProducts.filter(prod => prod.category === categoryItem)
        setItems(filterItem)
    }


    return (
        <section className="filter-prod">
            <div className="container">
                <div className="section-title">
                    <h2 className="curveText">our testy menu today</h2>
                    <span className="line"></span>
                </div>

                <div className="filter-tabs">
                    <button className="tabBtn" onClick={() => setItems(filterProducts)}>All</button>
                    <button className="tabBtn" onClick={() => filterItems("dessert")}>Dessert</button>
                    <button className="tabBtn" onClick={() => filterItems("meat")}>Meat</button>
                    <button className="tabBtn" onClick={() => filterItems("pizza")}>Pizza</button>
                    <button className="tabBtn" onClick={() => filterItems("sandwitch")}>Sandwitch</button>
                </div>

                <div className="row">
                    {
                        items.map(item => (
                            <div className="col-md-6 col-sm-12 col-xs-12"
                                key={item.id}>
                                <div className="filter-content">
                                    <div className="filter-img">
                                        <img src={item.img} alt={item.title} />
                                    </div>

                                    <div className="filter-info">
                                        <div className="filter-info-header">
                                            <h4>{item.title}</h4>
                                            <span>{currencyFormatter.format(item.price, { code: "EGP", precision: 0 })}</span>
                                        </div>
                                        <p>{item.desc}</p>
                                        <button
                                            onClick={() => dispatch(addFilterPro(item.id))}
                                        ><i className="fas fa-cart-plus"></i></button>
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

export default FilterImg
