import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDTSVRvjQaH5SgdvAtSbBVwUH4E3ok_ENU",
    authDomain: "signal-build-1.firebaseapp.com",
    projectId: "signal-build-1",
    storageBucket: "signal-build-1.appspot.com",
    messagingSenderId: "207066587727",
    appId: "1:207066587727:web:918b68e25f970a14ae403a",
    measurementId: "G-F1BMTK40QN"
  };

  let app;

if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig)
} else{
    app = firebase.app();
}

const db = app.firestore();
const auth = app.auth();


export {db,auth};