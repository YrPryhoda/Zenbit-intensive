import React from 'react';
import { store, persistor } from 'redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import NoPrivateRoute from './NoPrivateRoute';
import Header from 'components/UI/Header';
import NotFound from 'components/UI/NotFound';
import Login from 'components/Login';
import MainPage from 'components/MainPage';
import Footer from 'components/UI/Footer';
import SingleItem from 'components/SingleItem';
import CartContainer from 'components/Cart';
import Dashboard from 'components/Dashboard';
import EditProfile from 'components/Dashboard/EditProfile';
import Register from 'components/Register';
import Contacts from 'components/Contacts';
import './App.scss';

const App = () => {
  return (
    <Provider store={store} >
      <Router>
        <PersistGate persistor={persistor} >
          <Header />
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route exact path='/page/:page' component={MainPage} />
            <Route exact path='/category/:category/:categoryName'
              render={props => <MainPage {...props} />
              } />
            <Route exact path='/search/query=:searchName'
              render={props => <MainPage {...props} />
              } />
            <Route exact path='/search/not-found'
              render={props => <NotFound {...props} />
              } />
            <NoPrivateRoute exact path='/login' component={Login} />
            <NoPrivateRoute exact path='/registration' component={Register} />
            <Route exact path='/products/:id' component={SingleItem} />
            <Route exact path='/contacts' component={Contacts} />
            <PrivateRoute exact path='/shopping-cart' component={CartContainer} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute exact path='/dashboard/edit-profile/:userId' component={EditProfile} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </PersistGate>
      </Router>
    </Provider>
  );
}

export default App;
