import {
    IMGPREV_PRODUCTS,
    FILTER_PRODUCTS,
    SLIDER_PRODUCTS,
    BLOG1,
    BLOG2,
    ADD_SLIDER_PRODUCTS,
    ADD_IMGPREV_PRODUCTS,
    ADD_FILTER_PRODUCTS,
    INC_PRODUCT,
    DEC_PRODUCT,
    REMOVE_PRODUCT,
    REMOVE_ALL


} from "./types"


export const setSliderPro = (products) => {
    return {
        type: SLIDER_PRODUCTS,
        payload: products
    }
}

export const setImgPrev = (products) => {
    return {
        type: IMGPREV_PRODUCTS,
        payloadImg: products
    }
}


export const setFilterPro = (products) => {
    return {
        type: FILTER_PRODUCTS,
        filterItems: products
    }
}

export const setBlog1 = (products) => {
    return {
        type: BLOG1,
        payload: products
    }
}

export const setBlog2 = (products) => {
    return {
        type: BLOG2,
        payload: products
    }
}

/* /==================================================
                    add products to cart ;
 // =================================================== */

// 1 =>  slider products  
export const addSlider = (id) => {
    return {
        type: ADD_SLIDER_PRODUCTS,
        id
    }
}

// 2 => image preview 

export const addPreviewImg = (id) => {
    return {
        type: ADD_IMGPREV_PRODUCTS,
        id
    }
}

// 3 => filter products 

export const addFilterPro = (id) => {
    return {
        type: ADD_FILTER_PRODUCTS,
        id
    }
}

//      set product quantity 

export const incProduct = (id) => {
    return {
        type: INC_PRODUCT,
        id,
    }
}


export const decProduct = (id) => {
    return {
        type: DEC_PRODUCT,
        id,
    }
}


// ===========   remove one product

export const removeProduct = (id) => {
    return {
        type: REMOVE_PRODUCT,
        id
    }
}

export const removeAll = () => {
    return {
        type: REMOVE_ALL,

    }
}