import {  signup } from "../firebase/firebase-auth.js"
import { redirectIfLogin } from "../firebase/firebase-auth.js"
redirectIfLogin()
const signupForm = document.getElementById("signupForm")

const handleSignup = (e) => {
    e.preventDefault()
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    signup(name , email,password)
   
   

}



signupForm.addEventListener("submit",handleSignup)