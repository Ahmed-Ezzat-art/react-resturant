
import {
    FILTER_PRODUCTS,
    IMGPREV_PRODUCTS,
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

const initState = {
    allProducts: [],
    totalPrice: 0,
    totalQuantity: 0,
    sliderProducts: [],
    imgPrevProducts: [],
    filterProducts: [],
    blogProducts1: [],
    blogProducts2: []
}

console.log(initState.allProducts)

export const allReducers = (state = initState, action) => {
    let findPro,
        findIndex
    switch (action.type) {
        case SLIDER_PRODUCTS:
            return {
                ...state,
                sliderProducts: [...action.payload]
            }

        case IMGPREV_PRODUCTS:
            return {
                ...state,
                imgPrevProducts: [...action.payloadImg]
            }

        case FILTER_PRODUCTS:
            return {
                ...state,
                filterProducts: [...action.filterItems]
            }

        case BLOG1:
            return {
                ...state,
                blogProducts1: [...action.payload]
            }

        case BLOG2:
            return {
                ...state,
                blogProducts2: [...action.payload]
            }

        /*  ==========================================
                        add  products to cart 
           ============================================*/

        //   add slider products  

        case ADD_SLIDER_PRODUCTS:
            let sliderPro = state.sliderProducts.find(item => item.id === action.id)
            let addedProduct1 = state.allProducts.find(item => item.id === action.id)
            // console.log(sliderPro)
            if (addedProduct1) {
                return state
            } else {
                return {
                    ...state,
                    allProducts: [...state.allProducts, sliderPro],
                    totalQuantity: state.totalQuantity + sliderPro.quantity,
                    totalPrice: state.totalPrice + sliderPro.price
                }
            }


        //  add image preview 

        case ADD_IMGPREV_PRODUCTS:
            let imgPrevPro = state.imgPrevProducts.find(item => item.id === action.id)
            let addedProduct2 = state.allProducts.find(item => item.id === action.id)

            if (addedProduct2) {
                return state
            } else {
                return {
                    ...state,
                    allProducts: [...state.allProducts, imgPrevPro],
                    totalQuantity: state.totalQuantity + imgPrevPro.quantity,
                    totalPrice: state.totalPrice + imgPrevPro.price
                }
            }


        //  add filter products

        case ADD_FILTER_PRODUCTS:
            let filterPro = state.filterProducts.find(item => item.id === action.id)
            let addedProduct3 = state.allProducts.find(item => item.id === action.id)

            if (addedProduct3) {
                return state
            } else {
                return {
                    ...state,
                    allProducts: [...state.allProducts, filterPro],
                    totalQuantity: state.totalQuantity + filterPro.quantity,
                    totalPrice: state.totalPrice + filterPro.price
                }
            }

        //   set product quantity 
        case INC_PRODUCT:
            findPro = state.allProducts.find(item => item.id === action.id)
            findIndex = state.allProducts.findIndex(item => item.id === action.id)
            findPro.quantity += 1;
            state.allProducts[findIndex] = findPro
            return {
                ...state,
                totalQuantity: state.totalQuantity + 1,
                totalPrice: state.totalPrice + findPro.price
            }

        case DEC_PRODUCT:
            findPro = state.allProducts.find(item => item.id === action.id)
            findIndex = state.allProducts.findIndex(item => item.id === action.id)
            if (findPro.quantity <= 1) {
                return state
            } else {
                findPro.quantity -= 1;
                state.allProducts[findIndex] = findPro
                return {
                    ...state,
                    totalQuantity: state.totalQuantity - 1,
                    totalPrice: state.totalPrice - findPro.price
                }
            }




        // ===============      remove product

        case REMOVE_PRODUCT:
            findPro = state.allProducts.find(item => item.id === action.id)

            return {
                ...state,
                allProducts: state.allProducts.filter(item => item.id !== action.id),
                totalQuantity: state.totalQuantity - findPro.quantity,
                totalPrice: state.totalPrice - findPro.price * findPro.quantity
            }

        case REMOVE_ALL:
            return {
                ...state,
                allProducts: [],
                totalPrice: 0,
                totalQuantity: 0
            }


        default:
            return state
    }
}