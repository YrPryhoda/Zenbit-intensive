import {
  GET_ALL_ITEMS, GET_BACK_SIDE,
  GET_ITEM_BY_ID, ASK_QUESTION,
  NEXT_PAGE, SEARCH_ITEM,
  SHOW_BY_CATEGORY, SHOW_AVILABLE_ITEMS
} from '../types';
import { fetchAll, fetchById, setDataById } from 'redux/utils/api';
import { onEvent } from 'redux/actions/auth';
import { v4 } from 'uuid';

export const getAllItems = () => async dispatch => {
  const state = await fetchAll('products');
  dispatch({
    type: GET_ALL_ITEMS,
    payload: state
  })
}
export const showAvilableItems = (
  database,
  match,
  count,
) => dispatch => {
  const activePage = +match.params.page || 1;
  let total;
  let showedItems;
  if (match.params.searchName) {
    showedItems = database.filter(el => el.title.toLowerCase()
      .includes(match.params.searchName.toLowerCase()))
    total = showedItems.length;
  } else if (match.params.category) {
    showedItems = database.filter(el => el.category === match.params.categoryName)
    total = showedItems.length;
  } else {
    showedItems = database.slice(activePage * count - count, activePage * count);
    total = database.length;
  }
  dispatch({
    type: SHOW_AVILABLE_ITEMS,
    payload: {
      total,
      activePage,
      showedItems
    }
  })
}

export const onPagination = (page = 1, itemsOnPage, data) => dispatch => {
  const filtredPage = page * itemsOnPage;
  const showedItems = data.slice(filtredPage - itemsOnPage, filtredPage);
  dispatch({
    type: NEXT_PAGE,
    payload: { activePage: page, showedItems }
  })
}
export const filterByCategory = (database, shopCategory) => dispatch => {
  const showedItems = database.filter(el => el.category === shopCategory);
  const total = showedItems.length;
  dispatch({
    type: SHOW_BY_CATEGORY,
    payload: {
      total,
      showedItems,
      activeCategory: shopCategory
    }
  })
}
export const onSearch = (database, searchInput, history) => dispatch => {
  const res = database.filter(el => el.title.toLowerCase().includes(searchInput.toLowerCase()))
  if (res.length) {
    history.push(`/search/query=${searchInput}`);
    dispatch({
      type: SEARCH_ITEM,
      payload: {
        showedItems: res,
        totalItems: res.length
      }
    })
  } else {
    history.push(`/search/not-found`);
  }
}

export const getItemById = (id) => async dispatch => {
  let itemById = await fetchById('products', 'id', id);
  dispatch({
    type: GET_ITEM_BY_ID,
    payload: itemById
  });
}
export const getBackSide = (id) => dispatch => {
  dispatch({
    type: GET_BACK_SIDE,
    payload: id
  })
}
export const askQuestion = (user, data) => async dispatch => {
  let formedData = {};
  const { name, phone, message } = data;
  !user.id ?
    formedData = {
      id: `anonim-${v4()}`,
      name,
      phone,
      message
    } :
    formedData = {
      id: user.id,
      name,
      phone,
      login: user.login,
      message
    };
  await setDataById(`FAQ/${formedData.id}`, formedData);
  dispatch({
    type: ASK_QUESTION,
    payload: formedData
  })
  onEvent(dispatch, 'Ваше обращение успешно отправлено', 'success');

}