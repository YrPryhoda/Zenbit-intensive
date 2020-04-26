import React from 'react'
import Sidebar from './Sidebar';
import ItemList from './ItemList';
import Spinner from 'components/UI/Spinner';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import { filterByCategory } from 'redux/actions/shop';
import ButtonTop from 'components/UI/ButtonTop';


const MainContainer = ({
  shop: {
    loading,
    pagination,
    database
  },
  onBackSide,
  isBackSide,
  filterByCategory,
  onAddToCart,
  match,
}) => {
  const { Content } = Layout;
  const onClickSidebar = (shopCategory) => {
    filterByCategory(database, shopCategory);
  }

  return (
    <Layout className="main-container">
      <Sidebar
        match={match}
        onClickSidebar={onClickSidebar} />
      <Content className='container'>
        {
          !pagination.showedItems.length? (<Spinner />) : (
            <>
              {pagination.showedItems.map((el, index) => <ItemList
                key={index}
                item={el}
                onClick={onBackSide}
                isBackSide={isBackSide}
                onAddToCart={onAddToCart} />)}
            </>)
        }
      </Content>
      <ButtonTop />
    </Layout>
  )
}
const mapStateToProps = state => ({
  shop: state.shop
});

export default connect(mapStateToProps, { filterByCategory })(MainContainer)
