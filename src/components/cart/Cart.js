import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    incProduct, decProduct, removeProduct,
    removeAll
} from '../../redux/actions';
import currencyFormatter from 'currency-formatter';
import './style.css';

class Cart extends Component {



    render() {

        const { info } = this.props

        return (
            <div className="cart">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                {
                                    info.allProducts.length ? (
                                        <React.Fragment>
                                            <div className="col-md-8 col-sm-12">
                                                {
                                                    info.allProducts.map(item => (

                                                        <div className="cart-content" key={item.id}>

                                                            <div className="cart-img">
                                                                <img src={item.img} alt={item.title} />
                                                            </div>

                                                            <div className="cart-info">

                                                                <div className="cart-info-header">
                                                                    <h4>{item.title}</h4>
                                                                    <span>{currencyFormatter.format(item.price, { code: 'EGP', precision: 0 })}</span>
                                                                </div>

                                                                <p>{item.desc}</p>

                                                                <div className="item-price">

                                                                    <div>
                                                                        <span className="pro-quantity">Quantity</span>
                                                                        <div className="change-quantity">
                                                                            <span className="dec" onClick={() => this.props.decProduct(item.id)}>-</span>
                                                                            <span>{item.quantity}</span>
                                                                            <span className="inc" onClick={() => this.props.incProduct(item.id)}>+</span>
                                                                        </div>
                                                                    </div>

                                                                    <div className="total-price-content">
                                                                        <span className="total-price">Total price</span>
                                                                        <span className="total">{currencyFormatter.format(item.price * item.quantity, { code: 'EGP', precision: 0 })}</span>
                                                                    </div>

                                                                    <button className="delete"
                                                                        onClick={() => this.props.removeItem(item.id)}>
                                                                        <i className="fas fa-trash"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    ))

                                                }

                                                <button onClick={() => this.props.removeAll()}
                                                    className="deleteAll"
                                                ><i className="fas fa-trash"></i> clear cart</button>

                                            </div>

                                            <div className="col-md-4 col-sm-12">
                                                <div className="summary">
                                                    <h3>products info</h3>
                                                    <div className="summary-desc">
                                                        <div>
                                                            <span>Total products</span>
                                                            <span>{`${this.props.totalQuantity}`}</span>
                                                        </div>
                                                        <div>
                                                            <span>Total price </span>
                                                            <span>{currencyFormatter.format(this.props.totalPrice, { code: 'EGP', precision: 0 })}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </React.Fragment>

                                    )
                                        : <div className="empty">
                                            <h3>your cart is empty</h3>
                                        </div>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        info: state.allReducers,
        totalQuantity: state.allReducers.totalQuantity,
        totalPrice: state.allReducers.totalPrice
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incProduct: (id) => { dispatch(incProduct(id)) },
        decProduct: (id) => { dispatch(decProduct(id)) },
        removeItem: (id) => { dispatch(removeProduct(id)) },
        removeAll: () => { dispatch(removeAll()) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
