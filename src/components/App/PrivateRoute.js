import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({
  component: Component,
  auth,
  ...rest }) => (
    <Route
      {...rest}
      render={
        props => {
          return !auth ?
            (<Redirect to='/login' />) :
            (<Component {...props} />)
        }
      }
    />
  );

PrivateRoute.propTypes = {
  auth: PropTypes.bool.isRequired
}
const mapStateToProps = state => ({
  auth: state.auth.isLogin
});
export default connect(mapStateToProps)(PrivateRoute);
