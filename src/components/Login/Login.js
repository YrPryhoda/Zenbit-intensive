import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { login, onEventMsg } from '../../redux/actions/auth';
import { withRouter } from 'react-router-dom';
import LoginForm from './LoginForm';
import './login.scss';

const Login = ({ auth: { isLogin, eventMsg }, login, onEventMsg, history }) => {
  const [form, setForm] = useState({
    login: '',
    password: '',
  })
  const onChange = e => setForm({
    ...form, [e.target.name]: e.target.value
  })
  const onSubmit = e => {
    e.preventDefault();
    let key = 0;
    for (key in form) {
      switch (true) {
        case form[key].trim().length === 0:
          return onEventMsg('Поле не может быть пустым');
        case key === 'username' && form[key].trim().length < 2:
          return onEventMsg('Имя не может быть меньше 2 символов');
        case key === 'password' && form[key].trim().length < 6:
          return onEventMsg('Пароль не может быть короче 6 символов');
        default:
          continue;
      }
    }
    if (!eventMsg.length) {
      login(form, history);
    }
  }
  return <LoginForm
    isLogin={isLogin}
    eventMsg={eventMsg}
    onChange={onChange}
    onSubmit={onSubmit}
    form={form}
  />
}
Login.propTypes = {
  auth: PropTypes.object,
  login: PropTypes.func,
  onEventMsg: PropTypes.func
}
const mapStateToProps = (state) => ({
  auth: state.auth
})
const mapDispatchToProps = {
  login, onEventMsg
}
export default connect(
  mapStateToProps, mapDispatchToProps
)(
  withRouter(Login)
);
