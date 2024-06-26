import {BEST_SELLER_FETCHED, BEST_SELLER_ERROR, PRODUCT_FETCHED, PRODUCT_FETCH_ERROR} from '../Constants/generalConstants';

function generalReducer(state = {}, action) {
    switch (action.type) {
        case BEST_SELLER_FETCHED:{
            return {
                bestsellerarr: action.payload
            }
        }
        case BEST_SELLER_ERROR:{
            return {
                error: action.payload
            }
        }
        case PRODUCT_FETCHED:{
            return {
                product: action.payload
            }
        }
        case PRODUCT_FETCH_ERROR:{
            return {
                error: action.payload
            }
        }
        default: return state;
    }
}
export {generalReducer};