import React from 'react';
import store from '../../redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Header from '../Header';
import Login from '../Login';
import MainPage from '../MainPage';
import Footer from '../Footer';
import SingleItem from '../SingleItem';
import CartContainer from '../Cart';
import './App.scss';

const App = () => {
  return (
    <Provider store={store} >
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/products/:id' component={SingleItem} />
          <Route exact path='/shopping-cart' component={CartContainer}/>
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
