import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDHLs1BYQUKM71V0KJ8kwoujl9mPcDsZcs",
    authDomain: "netflix-clone-ef610.firebaseapp.com",
    projectId: "netflix-clone-ef610",
    storageBucket: "netflix-clone-ef610.appspot.com",
    messagingSenderId: "603154457620",
    appId: "1:603154457620:web:12376c8cead54e0627b301"
  };
  const firebaseapp = firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore()
  const auth = firebase.auth()

  export {auth}
  export default db