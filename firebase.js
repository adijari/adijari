(function() {
  const config = {
    //YOUR CONFIGS
  apiKey: "AIzaSyBORCiP50-U-HwW8-nTWO582FBeUbQ-Gdw",
  authDomain: "potiot-d7ce2.firebaseapp.com",
  databaseURL: "https://potiot-d7ce2.firebaseio.com",
  projectId: "potiot-d7ce2",
  storageBucket: "potiot-d7ce2.appspot.com",
  messagingSenderId: "444460466801",
  appId: "1:444460466801:web:da7f7404a638fcb15cd1d0",
  measurementId: "G-626QLFN1GS"

  };

  firebase.initializeApp(config);
  const object = document.getElementById('object');
  const dbBigTextEvaluationStudentsRef = firebase.database().ref().child('Variable');
  dbBigTextEvaluationStudentsRef.on('value', snap => {
object.innerText = JSON.stringify(snap.val(),null,3) 
});

 
}());