import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDZWq30_Wkp63DStcURBKkId1cP3aZPCDE",
    authDomain: "je-project-manager-rjs.firebaseapp.com",
    databaseURL: "https://je-project-manager-rjs.firebaseio.com",
    projectId: "je-project-manager-rjs",
    storageBucket: "je-project-manager-rjs.appspot.com",
    messagingSenderId: "699909879389",
    appId: "1:699909879389:web:67f177b46b3da575c6bfb4",
    measurementId: "G-6M1THJTF22"
  };

  const fBase = firebase.initializeApp(firebaseConfig);

  export default fBase;
  