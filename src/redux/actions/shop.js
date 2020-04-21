import {
  GET_ALL_ITEMS, GET_BACK_SIDE, GET_ITEM_BY_ID,
  ASK_QUESTION
} from '../types';
import fire from 'fire';


export const getAllItems = () => async dispatch => {
  try {
    const database = await fire.database().ref('products');
    database.once('value', snapshot => {
      const state = snapshot.val();
      dispatch({
        type: GET_ALL_ITEMS,
        payload: state
      })
    });
  } catch (err) {
    console.log(err);
  }
}

export const getItemById = (id) => async dispatch => {
  let itemById = {};
  await fire.database()
    .ref("products")
    .orderByChild("id")
    .once('value', (snap) => {
      return itemById = snap.val().find(el => el.id === +id)
    });
  dispatch({
    type: GET_ITEM_BY_ID,
    payload: itemById
  })
}
export const getBackSide = (id) => dispatch => {
  dispatch({
    type: GET_BACK_SIDE,
    payload: id
  })
}
export const askQuestion = (user, data) => dispatch => {

  dispatch ({
    type: ASK_QUESTION,
    payload: data
  })
}