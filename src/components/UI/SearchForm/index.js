import React from 'react'
import { Form, Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { onSearch } from 'redux/actions/shop';
import { withRouter } from 'react-router-dom';
import './search.scss';
const SearchForm = ({
  database,
  onSearch,
  history,
  match
}) => {
  const onFinish = values => {
    const { searchInput } = values;
    if (!searchInput.trim()) {
      return false;
    }
    onSearch(database, searchInput, history);

  };
  return (
    <Form
      name="normal_login"
      className="search-form"
      onFinish={onFinish}>
      <Form.Item
        className='search-input'
        name="searchInput"
        rules={[{ min: 2, message: "Минимум 2 символа" }]}
      >
        <Input
          prefix={<SearchOutlined className="site-form-item-icon" />}
          placeholder="Что ищем ?" />
      </Form.Item>
      <Form.Item>
        <Button type="primary"
          htmlType="submit"
          className="login-form-button">
          Поиск
        </Button>
      </Form.Item>
    </Form>
  )
}

export default connect(null, { onSearch })(withRouter(SearchForm));
