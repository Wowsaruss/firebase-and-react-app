import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyBm4YrCPX3mVjppVSOUV81dsSDjpGvKlfs",
    authDomain: "fir-and-react-app.firebaseapp.com",
    databaseURL: "https://fir-and-react-app.firebaseio.com",
    projectId: "fir-and-react-app",
    storageBucket: "fir-and-react-app.appspot.com",
    messagingSenderId: "1010840729030"
  };
var fire = firebase.initializeApp(config);
export default fire;