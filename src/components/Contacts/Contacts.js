import React, { useState, useEffect } from 'react'
import ContactsComponent from './ContactsComponent';

const Contacts = ({ askQuastion, user, eventMsg, onEventMsg }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    setData({
      name: user.name,
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
      case !data.name || !data.message:
        return onEventMsg('Не оставляйте пустые поля', 'error');
      case data.name.trim().length < 2:
        return onEventMsg('Укажите имя не меньше 2 символов', 'error');
      case data.message.trim().length < 12:
        return onEventMsg('Опишите свой вопрос чуть более подробно', 'error');
      default:
        askQuastion(user, data);
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
