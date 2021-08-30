import React from 'react'
import Footer from '../footer/Footer'
import Header from '../homeContent/header/Header'
import New from '../homeContent/new/New'
import Popular from '../homeContent/popular/Popular'
import './style.css'



const Home = () => {



    return (
        <React.Fragment>
            <Header />
            <Popular />
            <New />
            <div className="scrollbtn">
                <i className="fas fa-arrow-up"></i>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Home
