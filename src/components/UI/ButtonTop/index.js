import React, { useRef } from 'react'
import { UpOutlined } from '@ant-design/icons';
import './button-top.scss';
import _ from 'lodash';

const ButtonTop = () => {
  const btn = useRef(null);
  const onScroll = () => {
    if (btn.current) {
      if (window.pageYOffset > 30) {
        btn.current.style.opacity = '1'
        btn.current.style.display = 'flex'
      } else {
        btn.current.style.opacity = '0';
      }
    }
  }
  const onClick = e => {
    window.scrollTo(0, 0);
  }
  window.onscroll = _.debounce(onScroll, 400, {
    'leading': true,
  });
  return (
    <div className='button-top-block'
      ref={btn}
      onClick={e => onClick(e)}
    >
      <UpOutlined />
    </div>
  )
}

export default ButtonTop
