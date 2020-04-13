import React from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import './spinner.scss';

const Spinner = () => {
  return ( 
    <div className='spinner-block'>
      <LoadingOutlined className='spinner'/>
    </div>
  )
}

export default Spinner
