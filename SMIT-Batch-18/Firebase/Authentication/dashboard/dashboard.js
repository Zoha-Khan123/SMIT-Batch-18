import { logout, protectPage } from "../firebase/firebase-auth.js"
protectPage()

const logoutBtn = document.getElementById("logoutBtn")
logoutBtn.addEventListener("click",logout)