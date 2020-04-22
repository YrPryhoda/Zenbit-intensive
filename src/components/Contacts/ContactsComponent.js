import React from 'react'
import { Layout } from 'antd';
import {
  FacebookOutlined, InstagramOutlined,
  SendOutlined, GithubOutlined
} from '@ant-design/icons';

const ContactsComponent = ({
  data: { name, phone, message },
  onChangeValue, eventMsg,
  onSubmit
}) => <Layout className='login-form contact-form '>
    <div className='contacts-block'>
      <div className='contacts'>
        <div className='contact-links'>
          <span className='hide-md'> Ссылки на меня: </span>
          <a target='_blank'
          href='https://www.facebook.com/profile.php?id=100017238488331'
          rel="noopener noreferrer">
            <FacebookOutlined className='fb'/> Facebook </a>
          <a target='_blank' 
          href='https://www.instagram.com/certainly.yr'
          rel="noopener noreferrer">
            <InstagramOutlined className='insta' /> Instagram </a>
          <a target='_blank' 
          href='https://t.me/valarok'
          rel="noopener noreferrer">
            <SendOutlined className='tg' /> Telegram </a>
          <a target='_blank' 
          href='https://github.com/YrPryhoda'
          rel="noopener noreferrer">
            <GithubOutlined className='gh' /> GitHub </a>
        </div>
      </div>
      <form className='form-form form-contact'
        onSubmit={e => onSubmit(e)}>
        <h2 className='large-h2'> Форма обратной связи</h2>
        <div className='error-div' >
          {
            !!eventMsg.length && (
              <p className={`${eventMsg[eventMsg.length - 1].type}-msg`}>
                {eventMsg[eventMsg.length - 1].message}
              </p>
            )
          }
        </div>
        <div className='form-field contacts-field' >
          <label htmlFor='name' className='contacts-label'> Ваше имя  </label>
          <input type='text'
            name='name'
            id='name'
            className='contacts-input'
            value={name}
            placeholder='Ваше имя'
            onChange={e => onChangeValue(e)} />
        </div>
        <div className='form-field contacts-field' >
          <label htmlFor='phone' className='contacts-label'> Контактный телефон  </label>
          <input type='text'
            name='phone'
            id='phone'
            className='contacts-input'
            value={phone}
            placeholder='Формат 0ХХ-ХХХ-ХХ-ХХ'
            onChange={e => onChangeValue(e)} />
        </div>
        <div className='form-field contacts-field' >
          <label htmlFor='message' className='contacts-label'> Задайте нам вопрос  </label>
          <textarea
            rows='6'
            name='message'
            id='message'
            className='contacts-input'
            value={message}
            placeholder='Опишите суть вопроса'
            onChange={e => onChangeValue(e)} >
          </textarea>
        </div>
        <div className='form-field' >
          <input type='submit' value='Задать вопрос'
            className='button button-submit' />
        </div>
      </form>
    </div>
  </Layout>

export default ContactsComponent  
