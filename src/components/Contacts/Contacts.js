import React, { useState, useEffect } from 'react'
import ContactsComponent from './ContactsComponent';
import { isLength, isMobilePhone } from 'validator'

const Contacts = ({ askQuestion, user, eventMsg, onEventMsg }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    setData({
      name: user.name || '',
      phone: user.phone || '',
      message: ''
    })
  }, [user.name]);
  const onChangeValue = e => {
    setData({
      ...data, [e.target.name]: e.target.value
    })
  }
  const onSubmit = e => {
    e.preventDefault();
    switch (true) {
      case !data.name || !data.message || !data.phone:
        return onEventMsg('Не оставляйте пустые поля', 'error');
      case isLength(data.name, { max: 1 }):
        return onEventMsg('Укажите имя не меньше 2 символов', 'error');
      case isMobilePhone(data.phone, ['us-UA', 'ru-RU']):
        return onEventMsg('Укажите корректный номер', 'error');
      case isLength(data.message, { max: 10 }):
        return onEventMsg('Опишите свой вопрос чуть более подробно', 'error');
      default:
        askQuestion(user, data);
        setData({
          name: user.name || '',
          phone: '',
          message: ''
        })
    }
  }
  return <ContactsComponent
    data={data}
    onChangeValue={onChangeValue}
    onSubmit={onSubmit}
    eventMsg={eventMsg}
  />
}

export default Contacts
