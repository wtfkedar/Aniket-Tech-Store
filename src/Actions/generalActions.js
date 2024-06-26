import Axios from 'axios';
import { history } from '../history';
import {PRODUCT_FETCHED, PRODUCT_FETCH_ERROR} from '../Constants/generalConstants';


function fetchProduct(productId) {
    return dispatch => {
        console.log(productId)
        Axios.get("https://techstore1.herokuapp.com/products/getproduct/"+productId)
        .then(function(response) { 
                dispatch({type: PRODUCT_FETCHED, payload: response});
        }).catch(function(error) {
            // dispatch({type: PRODUCT_FETCH_ERROR, payload: error});
        });
    };
}
export {fetchProduct}