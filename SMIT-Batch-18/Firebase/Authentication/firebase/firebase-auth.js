import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
import { app } from "./firebase-config.js";


const auth = getAuth(app);

const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("signup successfully", user);
            window.location.href = "../dashboard/dashboard.html"

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);

            // ..
        });

}

const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("login successfull", user);
            window.location.href = "../dashboard/dashboard.html"


            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);

        });

}


const logout = () => {
    signOut(auth).then(() => {
        console.log(" Sign-out successful.");
        window.location.href = "../login/login.html"

    }).catch((error) => {
        console.log(error);
    });

}


const redirectIfLogin = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            window.location.href = "../dashboard/dashboard.html"
        }
    });
}


const protectPage = () => {
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            window.location.href = "../login/login.html"
        }
    });
}



export { signup, login, logout , redirectIfLogin , protectPage }