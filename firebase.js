import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

//config file from firebase
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "signal-build-1",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
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
