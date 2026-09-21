import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut , onAuthStateChanged} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
import { app } from "./firebase-config.js";
import { addUserInDb } from "./firebase-firestore.js";

const auth = getAuth(app);


const signup =  (name , email,password) => {

    createUserWithEmailAndPassword(auth, email, password)
      .then( async (userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log("Signup successfull" , user);
        localStorage.setItem("userId",user.uid)
        await addUserInDb(user.uid , name , email)
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

const login = (email , password) => {

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("Login successfull");
    localStorage.setItem("userId",user.uid)
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
    console.log("Sign-out successful.");
    localStorage.clear("userId")
    window.location.href = "../login/login.html"
}).catch((error) => {
    console.log(error);
});
}

const redirectIfLogin = () => {
  
 const unsubscribe = onAuthStateChanged(auth, (user) => {
   unsubscribe()
   
   if(user){
     window.location.href = "../dashboard/dashboard.html"
    }
  });
}

const protectPage = () => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe()
      
      if(!user){
        window.location.href = "../login/login.html"
      }
    });
}


export {signup , login , logout , redirectIfLogin , protectPage}
