import firebase from 'firebase';


  const firebaseConfig = {
    apiKey: "AIzaSyAH6p_zHgNZhc_8iklNo-wI_rRm_h_qBVM",
    authDomain: "projectfun-fccc1.firebaseapp.com",
    databaseURL: "https://projectfun-fccc1.firebaseio.com",
    projectId: "projectfun-fccc1",
    storageBucket: "projectfun-fccc1.appspot.com",
    messagingSenderId: "791855658328",
    appId: "1:791855658328:web:8192635535a0f61a3e212d",
    measurementId: "G-4FN2NLG4T8"
  };
  // Instantiate a Firebase app.  
  const fire = firebase.initializeApp(firebaseConfig);
  
export default fire;