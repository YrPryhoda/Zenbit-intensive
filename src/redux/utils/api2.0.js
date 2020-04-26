import fire from 'fire';

export const firebaseCall = async (
  ref = '',
  method = 'getOne',
  order = '',
  equalTo = '',
) => {
  let res = [];
  const data = await fire.database().ref(ref)
  if (method === 'getOne') {
    await data .orderByChild(order)
    .once('value')
    .then(snap => {
      res = snap.val().find(el => el[order] === +equalTo)
    });
  } else {
    await data.once('value')
      .then(snap => {
        res = snap.val()
      });
  }
  return new Promise((resolve, reject) => {
      return resolve(res)
  })
}

export default state => next => action => {
  if (action.type !== 'API_REQUEST' || !action.apiData) {
    return next(action)
  }
  const {
    ref,
    method,
    order,
    equalTo,
    types
  } = action.apiData;

  next({ type: types.REQUEST })

  const onSuccess = (responce) => next({
    type: types.SUCCESS,
    payload: responce
  })
  const onError = (err) => next({
    type: types.FAIL,
    payload: {
      errorName: err.name,
      errorMsg: err.message
    }
  })
  firebaseCall(ref, method, order, equalTo)
    .then(onSuccess)
    .catch(error => onError(error))
}