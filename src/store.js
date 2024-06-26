import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {authReducer} from './Reducers/authReducer';
import {generalReducer} from './Reducers/generalReducer';
import Cookie from 'js-cookie';

const user = Cookie.getJSON('userInstance')|| null;
var initialState = 0;
if(user){
    initialState = {
        loggedin: true,
        user: user
    }
} else {
    initialState = {}
}
const Red = combineReducers({
    user : authReducer,
    general: generalReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Red, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;