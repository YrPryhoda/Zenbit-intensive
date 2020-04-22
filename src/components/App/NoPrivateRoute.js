import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const NoPrivateRoute = ({
  component: Component,
  auth,
  ...rest }) => (
    <Route
      {...rest}
      render={
        props => {
          return auth ?
            (<Redirect to='/' />) :
            (<Component {...props} />)
        }
      }
    />
  );

NoPrivateRoute.propTypes = {
  auth: PropTypes.bool.isRequired
}
const mapStateToProps = state => ({
  auth: state.auth.isLogin
});
export default connect(mapStateToProps)(NoPrivateRoute);
