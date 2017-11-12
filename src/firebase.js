import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyBc9KOT7SAhf3PTm9ZmOkRtUTYeSHxT9pw",
  authDomain: "platzimusic-2e38d.firebaseapp.com",
  databaseURL: "https://platzimusic-2e38d.firebaseio.com",
  projectId: "platzimusic-2e38d",
  storageBucket: "platzimusic-2e38d.appspot.com",
  messagingSenderId: "758614405021"
};
firebase.initializeApp(config);

export const firebaseAuth = firebase.auth();
export const firebaseDatabase = firebase.database();;

export default firebase
