let signupBtn = document.querySelector("#signup");
let loginBtn = document.querySelector("#sign-in");
function validateForm() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (email === '') {
      alert('Email must be filled out');
      return false;
  }

  if (password === '') {
      alert('Password must be filled out');
      return false;
  }

  return true; 
}

function forgotPassword() {

}

/*
function validateForm() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (email === '') {
      alert('Email must be filled out');
      return false;
  }

  if (password === '') {
      alert('Password must be filled out');
      return false;
  }

  
  return true; 
}

function forgotPassword() {

}




function register() {
  alert("Hello! You have successfully register!");
}

//register page

    function validateForm() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('signin-password').value;

        if (name === '') {
            alert('User name must be filled out');
            return false;
        }

        if (email === '') {
            alert('Email must be filled out');
            return false;
        }

        if (password === '') {
            alert('Password must be filled out');
            return false;
        }

        // Add more validation checks if needed
        return true; // Return true if the form is valid
    }

    function register() {
      
    }

/*
function validateForm() {
  let x = document.forms["form"]["name"]["email"]["password"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
/*

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
 

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBixEGJkAl1pOzQYY3NjbQqNCMzzu0pn-4",
    authDomain: "database-226a5.firebaseapp.com",
    projectId: "database-226a5",
    storageBucket: "database-226a5.appspot.com",
    messagingSenderId: "57004885693",
    appId: "1:57004885693:web:7be83188478f496c5dd9d4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //inputs

  const email = document.getElementById('signin-email').value;
  const password = document.getElementById('signin-password').value;

  //submit button
  const button =document.getElementById('button');
  button.addEventListener("click", function(event){
  alert(5);
  }) */
