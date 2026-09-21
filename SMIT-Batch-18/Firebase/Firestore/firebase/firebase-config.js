  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-analytics.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCcmGHZq6n1f-it0106buVy3OJO0PgvuLM",
    authDomain: "batch-18-class-01.firebaseapp.com",
    projectId: "batch-18-class-01",
    storageBucket: "batch-18-class-01.firebasestorage.app",
    messagingSenderId: "1084497946404",
    appId: "1:1084497946404:web:edfd170b979c135df5b5b1",
    measurementId: "G-XTVB5ZCRB7"
  };

  // Initialize Firebase
  
  
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);