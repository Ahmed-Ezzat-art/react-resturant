import React from 'react'

const SideMenu = () => {
    return (
        <div className="side-menu">
            <div className="cog-box">
                <i className="fas fa-cog fa-fw fa-spin cog"></i>
            </div>
            <div className="side-menu-logo">
                <img src="images/logo/logo1.png" alt="logo" />
            </div>

            <div className="colo-menu">
                <h3>for light</h3>
                <p>
                    White theme color you want to use ?
                </p>
                <ul>
                    <li data-color="#ea1e63" className="item-color1" style={{ background: "#ea1e63" }}></li>
                    <li data-color="#5eb93d" className="item-color1" style={{ background: "#5eb93d" }}></li>
                    <li data-color="#1ca7ec" className="item-color1" style={{ background: "#1ca7ec" }}></li>
                    <li data-color="#e64c2a" className="item-color1" style={{ background: "#e64c2a" }}></li>
                    <li data-color="#f045ae" className="item-color1" style={{ background: "#f045ae" }}></li>
                    <li data-color="#d3242b" className="item-color1" style={{ background: "#d3242b" }}></li>
                </ul>

                <div className="dark-menu">
                    <h3>for dark</h3>
                    <ul>
                        <li data-color="#ea1e63" className="item-color2" style={{ background: "#ea1e63" }}></li>
                        <li data-color="#f1cb0e" className="item-color2" style={{ background: "#f1cb0e" }}></li>
                        <li data-color="#63c240" className="item-color2" style={{ background: "#63c240" }}></li>
                        <li data-color="#d44e4b" className="item-color2" style={{ background: "#d44e4b" }}></li>
                        <li data-color="#ea6f75" className="item-color2" style={{ background: "#ea6f75" }}></li>
                        <li data-color="#05b3b6" className="item-color2" style={{ background: "#05b3b6" }}></li>
                        <li data-color="#19a2f7" className="item-color2" style={{ background: "#19a2f7" }}></li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default SideMenu
