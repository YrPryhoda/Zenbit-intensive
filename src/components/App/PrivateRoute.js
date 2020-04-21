import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({
  component: Component,
  auth: { isLogin },
  ...rest }) => (
    <Route
      {...rest}
      render={
        props => {
          return !localStorage.getItem('user') &&
            !localStorage.getItem('userToken') ?
            (<Redirect to='/login' />) :
            (<Component {...props} />)
        }
      }
    />
  );

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(PrivateRoute);
