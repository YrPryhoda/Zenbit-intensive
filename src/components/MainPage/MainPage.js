import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import Sidebar from './Sidebar';
import ItemList from './ItemList';
import Spinner from '../Spinner';
import { connect } from 'react-redux';
import { getAllItems, getBackSide } from '../../redux/actions/shop';
import { addToCart } from '../../redux/actions/cart';
import './main-page.scss';

const MainPage = ({
  shop: { database, loading, isBackSide, idBackSide },
  getAllItems, getBackSide, addToCart, auth
}) => {
  useEffect(() => {
    getAllItems();
  }, []);
  const onBackSide = (id) => {
    getBackSide(id);
  }
  const onAddToCart = (id) => {
    auth && addToCart(id, 1);
  }
  const { Content } = Layout;
  return (
    <Layout>
      <Content className='main-page'>
        <div className='main-title'>
          <h2 className='large-h2'>Страница товаров</h2>
        </div>
        <Layout className="main-container">
          <Sidebar />
          <Content className='container'>
            {
              loading && database.length === 0 ? (<Spinner />) : (
                <Fragment>
                  {database.map((el, index) => <ItemList
                    key={index}
                    item={el}
                    onClick={onBackSide}
                    isBackSide={isBackSide}
                    idBackSide={idBackSide}
                    onAddToCart={onAddToCart} />)}
                </Fragment>)
            }
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
}

MainPage.propTypes = {
  shop: PropTypes.object.isRequired,
  getAllItems: PropTypes.func.isRequired,
  addToCart: PropTypes.func,
  auth: PropTypes.bool
}
const mapStateToProps = (state) => ({
  shop: state.shop,
  auth: state.auth.isLogin
})
const mapDispatchToProps = {
  getAllItems, getBackSide, addToCart
}
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
