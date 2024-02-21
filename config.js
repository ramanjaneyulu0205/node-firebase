const firebase = require("firebase");
const firebaseConfig = {
    apiKey: "AIzaSyCMioSKUb_GprdARb2b0xIO9Hf9eneNQPg",
    authDomain: "node-firebase-73c74.firebaseapp.com",
    projectId: "node-firebase-73c74",
    storageBucket: "node-firebase-73c74.appspot.com",
    messagingSenderId: "566688481552",
    appId: "1:566688481552:web:c1e89b2ae294c19a40e595",
    measurementId: "G-E2J314J0KZ",
  };
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = User;