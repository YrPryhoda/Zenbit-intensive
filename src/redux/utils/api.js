import fire from 'fire';

export const fetchOne = async (ref, orderedField, searchData) => {
  try {
    let user = {};
    await fire.database().ref(ref)
      .orderByChild(orderedField)
      .equalTo(searchData)
      .once('value')
      .then(snap => {
        user = snap.val()
      });
    return user[Object.keys(user)];
  } catch (error) {
    console.error(error)
  }
}
export const fetchAll = async (ref) => {
  try {
    let database = [];
    await fire.database()
      .ref(ref)
      .once('value')
      .then(snapshot => {
        database = snapshot.val();
      });
    return database;
  } catch (error) {
    console.error(error)
  }
}
export const fetchById = async (ref, field, id) => {
  try {
    let res = {};
    await fire.database()
      .ref(ref)
      .orderByChild(field)
      .once('value')
      .then(snap => {
        res = snap.val().find(el => el.id === +id)
      });
    return res;
  } catch (error) {
    console.error(error);
  }
}

export const setDataById = async (path, data) => {
  try {
    await fire.database().ref(path).set(data);
    return true;
  } catch (error) {
    console.error(error)
  }
}
export const editDataById = async (path, data) => {
  try {
    await fire.database().ref(path).update(data);
    return true;
  } catch (error) {
    console.error(error)
  }
}