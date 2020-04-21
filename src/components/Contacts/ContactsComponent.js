import React from 'react'
import { Layout } from 'antd';

const ContactsComponent = ({
  data: { name, message },
  onChangeValue, eventMsg,
  onSubmit
}) => <Layout className='login-form contacts-block'>
    <div className='contacts'>
      <p className='contacts-field'>
        Ярослав </p>
      <a type='_blank' href=''> Facebook </a>
      <a type='_blank' href=''> Instagram </a>
      <a type='_blank' href=''> Telegram </a>
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
      <div className='form-field' >
        <label htmlFor='name' className='form-label'> Ваше имя  </label>
        <input type='text'
          name='name'
          id='name'
          className='form-input input-login'
          value={name}
          placeholder='Ваше имя'
          onChange={e => onChangeValue(e)} />
      </div>
      <div className='form-field' >
        <label htmlFor='message' className='form-label'> Задайте нам вопрос  </label>
        <textarea
          name='message'
          id='message'
          className='form-input input-password'
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
  </Layout>

export default ContactsComponent  
