import React, { useState, useEffect } from 'react'
import EditComponent from './EditComponent.jsx';
import validator from 'validator';
const EditProfile = ({
  editProfileById,
  user,
  onErrorField,
  onEventMsg,
  history
}) => {
  const [currentUser, setCurrentUser] = useState({
    name: user.name || '',
    phone: user.phone || '',
    email: user.email || ''
  })
  const onChangeInput = e => {
    setCurrentUser({
      ...currentUser,
      [e.target.name]: e.target.value
    })
  }
  const onSetForm = e => {
    e.preventDefault();
    const { isMobilePhone, isEmail, isEmpty } = validator;
    const { phone, email } = currentUser;
    switch (true) {
      case !isEmpty(email, { ignore_whitespace: true }) && !isEmail(email):
        return onEventMsg('Не корректный Email', 'error');
      case !isEmpty(phone, { ignore_whitespace: true }) && !isMobilePhone(phone):
        return onEventMsg('Это не номер телефона', 'error');
      default:
        let resData = {};
        for (let key in currentUser) {
          !isEmpty(currentUser[key]) && (resData = { ...currentUser, [key]: currentUser[key] })
        }
        return editProfileById(user.id, resData, history);
    }
  }
  return <EditComponent
    eventMsg={onErrorField}
    currentUser={currentUser}
    onChangeInput={onChangeInput}
    onSetForm={onSetForm}
  />
}


export default EditProfile
