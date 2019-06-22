
var firebase = require("firebase-admin");

var serviceAccount = require("../test-project-5f46a-firebase-adminsdk-b8s9g-23e07d93d0.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://test-project-5f46a.firebaseio.com"
});

const db = firebase.firestore();

//let docRef = db.collection('users').doc('alovelace');

// let setAda = docRef.set({
//   first: 'Ada',
//   last: 'Lovelace',
//   born: 1815   //มัน defile auto type
// });

// let aTuringRef = db.collection('users').doc('aturing');

// let setAlan = aTuringRef.set({
//   'first': 'Alan',
//   'middle': 'Mathison',
//   'last': 'Turing',
//   'born': 1912
// });

//read data
const docRef = db.collection('users').doc('aturing');
docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});


// let updateTuringRef = db.collection('users').doc('aturing');

// let setAlan = updateTuringRef.update({
//   'first': 'Alan',
//   'middle': 'Mathison',
//   'last': 'Turing',
//   'born': 1912,
//   'die': 2002 
// });

// db.collection("users").doc("alovelace").delete().then(function() {
//     console.log("Document successfully deleted!");
//   }).catch(function(error) {
//     console.error("Error removing document: ", error);
//   });

db.collection('users').doc('aturing')
    .onSnapshot(function(doc) {
        console.log("Current data: ", doc && doc.data());
    });