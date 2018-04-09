import firebase from "firebase"
const config = {
    apiKey: "AIzaSyDryvUwkCQEJqEj3efH7PmGa2Jd9Zh5PxM",
    authDomain: "ups-warehouse-app.firebaseapp.com",
    databaseURL: "https://ups-warehouse-app.firebaseio.com",
    projectId: "ups-warehouse-app",
    storageBucket: "ups-warehouse-app.appspot.com",
    messagingSenderId: "478176690801"
};
  firebase.initializeApp(config);
  export default firebase
