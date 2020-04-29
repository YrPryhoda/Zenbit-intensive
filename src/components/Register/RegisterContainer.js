import React, { useState } from 'react'
import RegisterForm from './RegisterForm';
import validator from 'validator'
const RegisterContainer = ({
  auth: { eventMsg }, history,
  getRegister, onEventMsg
}) => {
  const [data, setData] = useState({
    name: '',
    login: '',
    password: '',
    confirmPassword: ''
  });
  const onChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  const onRegisterClick = (e) => {
    e.preventDefault();
    const { login, password, confirmPassword } = data;
    switch (true) {
      case !login || !password || !confirmPassword:
        return onEventMsg('Заполните обязательные поля');
      case !validator.isAlphanumeric(login):
        return onEventMsg('Логин должен состоять из a-Z, 0-9 символов');
      case login.length < 2:
        return onEventMsg('Логин не меньше 2 символов');
      case password.length < 6:
        return onEventMsg('Пароль не меньше 6 символов');
      case password !== confirmPassword:
        return onEventMsg('Пароли не совпадают');
      default:
        getRegister(data, history);
    }
  }
  return <RegisterForm regData={data}
    onChange={onChange}
    onRegisterClick={onRegisterClick}
    eventMsg={eventMsg}
  />
}

export default RegisterContainer;
