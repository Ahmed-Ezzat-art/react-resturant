import React from 'react';
import MenuSlider from '../menuContent/sliderMenu/MenuSlider'
import ImgPrev from '../menuContent/imgPrev/ImgPrev';
import FilterImg from '../menuContent/filterImg/FilterImg';


const MenuProducts = () => {

    return (
        <React.Fragment>

            <MenuSlider />
            <ImgPrev />
            <FilterImg />

        </React.Fragment>
    )
}

export default MenuProducts
