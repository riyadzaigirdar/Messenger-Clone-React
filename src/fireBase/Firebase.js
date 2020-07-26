import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBBEc75sTE1lXAq2NlaxoSIyvmj58vPOP0",
    authDomain: "sigma-myth-280905.firebaseapp.com",
    databaseURL: "https://sigma-myth-280905.firebaseio.com",
    projectId: "sigma-myth-280905",
    storageBucket: "sigma-myth-280905.appspot.com",
    messagingSenderId: "250098111450",
    appId: "1:250098111450:web:266b109d18e85b71ed66e3",
    measurementId: "G-R8XDR5FLS0"
})

const db = firebaseApp.firestore()

export default db