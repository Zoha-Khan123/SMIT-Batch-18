import { redirectIfLogin, signup } from "../firebase/firebase-auth.js"

redirectIfLogin()
const signupForm = document.getElementById("signupForm")

const handleSignup = (e) => {
    e.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    signup(email,password)
    e.target.reset()
}



signupForm.addEventListener("submit",handleSignup)