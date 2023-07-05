// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDsqZkZ3ix3-gHcyCnZzE97d1kiFhnrCDA",
  authDomain: "challenge-2c18f.firebaseapp.com",
  projectId: "challenge-2c18f",
  storageBucket: "challenge-2c18f.appspot.com",
  messagingSenderId: "955192994117",
  appId: "1:955192994117:web:cdf3e7130a96892ff6762c",
  measurementId: "G-XZ23W62D5G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};
