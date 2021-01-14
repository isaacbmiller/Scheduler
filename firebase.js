import * as firebase from 'firebase';

import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDs1ZKOAiNIGzAKUmkpAsgArbhcduTT0-k",
    authDomain: "scheduler-d6c69.firebaseapp.com",
    databaseURL: "https://scheduler-d6c69-default-rtdb.firebaseio.com",
    projectId: "scheduler-d6c69",
    storageBucket: "scheduler-d6c69.appspot.com",
    messagingSenderId: "443929780407",
    appId: "1:443929780407:web:7dd4444e0bc3ed30786d32",
    measurementId: "G-6EMJBLVS10"
  };

firebase.initializeApp(firebaseConfig);

export { firebase };


// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/8.2.2/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/8.2.2/firebase-analytics.js"></script>

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>