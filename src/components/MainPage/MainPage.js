import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import SearchForm from 'components/UI/SearchForm';
import PagesPagination from 'components/UI/Pagination';
import { connect } from 'react-redux';
import { getAllItems, showAvilableItems, getBackSide } from 'redux/actions/shop';
import { addToCart, calcSummTotal } from 'redux/actions/cart';
import './main-page.scss';
import MainContainer from './MainContainer';

const MainPage = ({
  cart,
  match,
  shop: { database, loading, isBackSide, pagination },
  getAllItems, getBackSide, addToCart, showAvilableItems,
  calcSummTotal,
  auth: { isLogin, user }
}) => {
  useEffect(() => {
    getAllItems();
  }, []);
  useEffect(() => {
    showAvilableItems(
      database,
      match,
      pagination.itemsOnPage,
      pagination.category
    );
  }, [database]);
  useEffect(() => {
    calcSummTotal(cart)
  }, [cart])
  const onBackSide = (id) => {
    getBackSide(id);
  }
  const onAddToCart = (id) => {
    const dataById = database.find(el => el.id === id);
    isLogin && addToCart(user.id, dataById);
  }
  const { Content } = Layout;
  return (
    <Layout>
      <Content className='main-page'>
        <SearchForm
          database={database}
          showedItems={pagination.showedItems}
        />
        <div className='main-title'>
          <h2 className='large-h2'>Страница товаров</h2>
        </div>
        <MainContainer
          match={match}
          onAddToCart={onAddToCart}
          isBackSide={isBackSide}
          onBackSide={onBackSide}
          pagination={pagination}
          loading={loading}
        />
        <PagesPagination
          pagination={pagination}
          data={database}
        />
      </Content>
    </Layout>
  );
}

MainPage.propTypes = {
  shop: PropTypes.object.isRequired,
  getAllItems: PropTypes.func.isRequired,
  addToCart: PropTypes.func,
  auth: PropTypes.object
}
const mapStateToProps = (state) => ({
  shop: state.shop,
  auth: state.auth,
  cart: state.cart.addedToCart
})
const mapDispatchToProps = {
  getAllItems, getBackSide, addToCart, showAvilableItems, calcSummTotal
}
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
