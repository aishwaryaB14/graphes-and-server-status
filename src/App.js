import React, { Component } from 'react'
import StatusPage from '../src/views/components/StatusPage';
import './Style.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store/store';
import Login from '../src/views/components/Login';
import { PersistGate } from 'redux-persist/lib/integration/react';

 
 export default class App extends Component {
   render() {
     return (
       <div>
          <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <div>
            <Route exact path="/" component={Login} /> 
              <Route exact path="/StatusPage" component={StatusPage} />
             
            </div>
          </Router>
        </PersistGate>
      </Provider>
       </div>
     )
   }
 }
 
