// Initialize Firebase (ADD YOUR OWN DATA)

  // import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
  function initializeApp() {
const firebaseConfig = {
  apiKey: "AIzaSyA7RiMn0jJcAeLKhwlHJEWD9f-Aks0mjv8",
  authDomain: "real-time-location-83017.firebaseapp.com",
  databaseURL: "https://real-time-location-83017-default-rtdb.firebaseio.com",
  projectId: "real-time-location-83017",
  storageBucket: "real-time-location-83017.appspot.com",
  messagingSenderId: "1084063734304",
  appId: "1:1084063734304:web:b8d90d0fd1498522be3a45",
  measurementId: "G-57VVMC6Q5Y"
};

const Swal = require('sweetalert2')

firebase.initializeApp(firebaseConfig);
firebase.analytics();
const firestore= firebase.firestore()
// const analytics = getAnalytics(app);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  
  var phone = getInputVal('phone');
  var email = getInputVal('email');
  var password = getInputVal('text');

  // Save message
  saveMessage(name, phone, email,  password);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  })
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, phone, email,  password){

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    phone:phone,
   password:password
  });

}
  }