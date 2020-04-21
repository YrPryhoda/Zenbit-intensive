import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCo8V65tYP-eW_Ovr78zbxhlx6CHQaOHhQ",
  authDomain: "go-zenbit.firebaseapp.com",
  databaseURL: "https://go-zenbit.firebaseio.com",
  projectId: "go-zenbit",
  storageBucket: "go-zenbit.appspot.com",
  messagingSenderId: "227933677602",
  appId: "1:227933677602:web:8d74b7600da6efc03f027b",
  measurementId: "G-8TZ4CXZRLH"
};
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;