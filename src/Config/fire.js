import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB-EW1lJwDYmBgvY69TcsaHDWi-dYzqBEQ",
  authDomain: "project-fun-3fd82.firebaseapp.com",
  databaseURL: "https://project-fun-3fd82.firebaseio.com",
  projectId: "project-fun-3fd82",
  storageBucket: "project-fun-3fd82.appspot.com",
  messagingSenderId: "461750986541",
  appId: "1:461750986541:web:60947409c8d15ca6b615a4",
  measurementId: "G-W22D3Q8KNM"
};
  // Instantiate a Firebase app.  
  const fire = firebase.initializeApp(firebaseConfig);
  
export default fire;