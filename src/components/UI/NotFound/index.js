import React from 'react'
import { Link } from 'react-router-dom';
import './not-found.scss';
import image from './notFound.jpg';
const NotFound = () => {
  return (
    <div className='login-form not-found'>
      <h2 className='large-h2'> Увы, ничего не найдено! </h2>
      <img src={image}
        alt='not found image'
        className='img-not-found'
      />
      <p>Но вы можене вернуться на <Link to='/'> главную страницу</Link>
        {' '} и поискать что то другое</p>
    </div>
  )
}

export default NotFound
