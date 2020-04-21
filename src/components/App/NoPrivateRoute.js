import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const NoPrivateRoute = ({
  component: Component,
  auth: { isLogin },
  ...rest }) => (
    <Route
      {...rest}
      render={
        props => {
          console.log(isLogin)
          return isLogin ?
          (<Redirect to='/' />) :
          (<Component {...props} />)
      } }
    />
  );

NoPrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(NoPrivateRoute);
