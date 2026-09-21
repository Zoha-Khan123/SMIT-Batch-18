import { login, redirectIfLogin } from "../firebase/firebase-auth.js"

redirectIfLogin()

const loginForm = document.getElementById("loginForm")
 


const handleLogin = (e) => {
    e.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    login(email,password)
}
loginForm.addEventListener("submit",handleLogin)