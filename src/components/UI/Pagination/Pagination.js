import React from 'react'
import {withRouter} from 'react-router-dom';
import { Pagination } from 'antd';

const PagesPagination = ({
  data,
  onPagination,
  history,
  pagination: {
    activePage, itemsOnPage, totalItems
  }
}) => {
  const onClick = (page, pageSize) => {
    onPagination(page, itemsOnPage, data)
    history.push(`/page/${page}`);

  }
  return (
    <div className='my-pagination'>
      <Pagination
        current={activePage}
        pageSize={itemsOnPage}
        total={totalItems} 
        onChange = {onClick}
        />
    </div>
  )
}

export default withRouter(PagesPagination)
