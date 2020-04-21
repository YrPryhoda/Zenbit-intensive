import React from 'react';
import store from 'redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import NoPrivateRoute from './NoPrivateRoute';
import Header from 'components/UI/Header';
import Login from 'components/Login';
import MainPage from 'components/MainPage';
import Footer from 'components/UI/Footer';
import SingleItem from 'components/SingleItem';
import CartContainer from 'components/Cart';
import Register from 'components/Register';
import Contacts from 'components/Contacts';
import './App.scss'; 

const App = () => {
  return (
    <Provider store={store} >
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <NoPrivateRoute exact path='/login' component={Login} />
          <NoPrivateRoute exact path='/registration' component={Register} />
          <Route exact path='/products/:id' component={SingleItem} />
          <Route exact path='/contacts' component={Contacts} />
          <PrivateRoute exact path='/shopping-cart' component={CartContainer} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
