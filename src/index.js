import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';

import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './store';
import {history} from './history';
import HomePage from './Views/HomePage';
import Signin from './Views/Signin';
import Signup from './Views/Signup';
import ApproveView from './Views/ApproveView';
import StoreHomeView from './Views/StoreHome';
import ProductView from './Views/Store/Product';
import ProfileView from './Views/ProfileView';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>  
      <Router history={history}>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/Signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/profile" component={ProfileView} />
            <Route path="/store/product/:productId" component={ProductView} />
            <Route path="/store" component={StoreHomeView} />
            <Route path="/activate/:userid/:token" component={ApproveView} />

        </Switch>
      </Router>    
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
