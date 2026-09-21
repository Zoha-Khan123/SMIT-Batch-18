# 📘 Firebase Authentication

This documentation provides an exact, detailed breakdown of the codebase in this folder, explaining its structure, individual files, core Firebase Authentication methods, and overall execution flow.

---

## 📚 Topics Covered

1. **Exact Directory Structure**
2. **Firebase Configuration (`firebase/firebase-config.js`)**
3. **Core Authentication Logic (`firebase/firebase-auth.js`)**
4. **Firebase SDK Methods Used**
5. **Signup Module (`signup/`)**
6. **Login Module (`login/`)**
7. **Protected Dashboard Module (`dashboard/`)**
8. **Root Navigation (`index.html`)**
9. **Complete Application Execution Flow**

---

# 1. 📁 Exact Directory Structure

The following tree represents the exact structure of files and folders inside the `Authentication` directory:

```text
Firebase/Authentication/
├── .vscode/
│   └── settings.json
├── dashboard/
│   ├── dashboard.html
│   └── dashboard.js
├── firebase/
│   ├── firebase-auth.js
│   └── firebase-config.js
├── login/
│   ├── login.css
│   ├── login.html
│   └── login.js
├── signup/
│   ├── signup.css
│   ├── signup.html
│   └── signup.js
├── index.html
└── README.md
```

---

# 2. ⚙️ Firebase Configuration (`firebase/firebase-config.js`)

This file initializes the Firebase application using project credentials generated in the Firebase Console.

### 📄 Code (`firebase/firebase-config.js`):

```js
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-analytics.js";

// Your web app's Firebase configuration
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
```

### 💡 Line-by-Line Explanation:
- **Lines 3–4:** Imports `initializeApp` from the Firebase App CDN SDK (v12.18.0) and `getAnalytics` from Analytics SDK.
- **Lines 10–18 (`firebaseConfig`):** JavaScript object storing project credentials required to identify and connect your web frontend to your Firebase cloud backend.
- **Line 21 (`export const app = initializeApp(firebaseConfig)`):** Passes `firebaseConfig` into `initializeApp()` to establish a connection instance and exports `app` so other files can consume it.
- **Line 22 (`const analytics = getAnalytics(app)`):** Initializes Google Analytics for the application instance.

---

# 3. 🔐 Core Authentication Logic (`firebase/firebase-auth.js`)

This file centralizes all authentication operations (signup, login, logout, auth listeners, route protection) and exports helper functions to be used by UI scripts.

### 📄 Code (`firebase/firebase-auth.js`):

```js
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
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
}

const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("login successfull", user);
            window.location.href = "../dashboard/dashboard.html"
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
```

### 💡 Detailed Function Explanations:

1. **`const auth = getAuth(app)`**
   - Initializes the Authentication service instance for the configured Firebase app.

2. **`signup(email, password)`**
   - **Purpose:** Registers a new user account with Firebase Authentication.
   - **Logic:** Calls `createUserWithEmailAndPassword(auth, email, password)`. On successful registration (`.then`), logs the `user` object (containing `uid`) to console and redirects the browser to `../dashboard/dashboard.html`. If an error occurs (`.catch`), logs the `errorMessage`.

3. **`login(email, password)`**
   - **Purpose:** Authenticates an existing user with their email and password.
   - **Logic:** Calls `signInWithEmailAndPassword(auth, email, password)`. Upon successful credentials verification (`.then`), logs the user payload and redirects to `../dashboard/dashboard.html`. Logs error message on failure.

4. **`logout()`**
   - **Purpose:** Terminate the user's active session.
   - **Logic:** Calls `signOut(auth)`. When sign-out succeeds, logs confirmation and redirects browser back to `../login/login.html`.

5. **`redirectIfLogin()`**
   - **Purpose:** Prevents logged-in users from accessing guest pages (like signup and login).
   - **Logic:** Listens for auth state updates using `onAuthStateChanged(auth, callback)`. If a valid `user` object exists, redirects immediately to `../dashboard/dashboard.html`.

6. **`protectPage()`**
   - **Purpose:** Secures private routes (like dashboard).
   - **Logic:** Listens via `onAuthStateChanged(auth, callback)`. If `user` is `null` (not authenticated), redirects the browser immediately to `../login/login.html`.

---

# 4. 🛠️ Firebase SDK Methods Used

Below are the exact Firebase Authentication SDK methods imported and used in `firebase-auth.js`:

| SDK Method | Source Package | Purpose in Project |
|---|---|---|
| `initializeApp(config)` | `firebase-app.js` | Initializes the root Firebase app instance. |
| `getAuth(app)` | `firebase-auth.js` | Retrieves the Auth service handle bound to `app`. |
| `createUserWithEmailAndPassword(auth, email, password)` | `firebase-auth.js` | Registers new user credentials in Firebase Auth. |
| `signInWithEmailAndPassword(auth, email, password)` | `firebase-auth.js` | Validates credentials and logs in existing user. |
| `signOut(auth)` | `firebase-auth.js` | Clears active authentication state/session. |
| `onAuthStateChanged(auth, callback)` | `firebase-auth.js` | Listens for real-time authentication state changes. |

---

# 5. 📝 Signup Module (`signup/`)

The `signup` directory contains UI markup, styling, and DOM handling logic for user registration.

### 📄 HTML (`signup/signup.html` key snippet):
```html
<form id="signupForm">
    <label for="name">Full Name</label>
    <input type="text" id="name" placeholder="Enter your name" required>

    <label for="email">Email</label>
    <input type="email" id="email" placeholder="Enter your email" required>

    <label for="password">Password</label>
    <input type="password" id="password" placeholder="Enter password" required>

    <button type="submit">Sign Up</button>
</form>

<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script type="module" src="signup.js"></script>
```

### 📄 JS (`signup/signup.js`):
```js
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
```

### 💡 Logical Breakdown:
- **Line 3 (`redirectIfLogin()`):** Ensures logged-in users are redirected to the dashboard immediately upon landing on the page.
- **Lines 6–13 (`handleSignup`):** Form submit event handler. Prevents default page reload via `e.preventDefault()`, reads input values from `#email` and `#password`, passes them to `signup(email, password)` from `firebase-auth.js`, and resets form input fields.

---

# 6. 🔑 Login Module (`login/`)

The `login` directory contains UI markup, styling, and DOM handling logic for user login.

### 📄 HTML (`login/login.html` key snippet):
```html
<form id="loginForm">
    <label for="email">Email</label>
    <input type="email" id="email" placeholder="Enter your email" required>

    <label for="password">Password</label>
    <input type="password" id="password" placeholder="Enter password" required>

    <button type="submit">Login</button>
</form>

<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="login.js" type="module"></script>
```

### 📄 JS (`login/login.js`):
```js
import { login, redirectIfLogin } from "../firebase/firebase-auth.js"

redirectIfLogin()
const loginForm = document.getElementById("loginForm")

const handleLogin = (e) => {
    e.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    login(email,password)
    e.target.reset()
}

loginForm.addEventListener("submit",handleLogin)
```

### 💡 Logical Breakdown:
- **Line 3 (`redirectIfLogin()`):** Redirects authenticated users away from the login screen to `dashboard.html`.
- **Lines 7–14 (`handleLogin`):** Captures the submit event, stops default refresh, extracts credentials from `#email` and `#password` input elements, calls `login(email, password)`, and clears form inputs.

---

# 7. 🛡️ Protected Dashboard Module (`dashboard/`)

The `dashboard` directory contains the protected page accessible only after authentication.

### 📄 HTML (`dashboard/dashboard.html`):
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <nav>
     <button id="logoutBtn">Logout</button>
    </nav>

    <script type="module" src="dashboard.js"></script>
</body>
</html>
```

### 📄 JS (`dashboard/dashboard.js`):
```js
import { logout, protectPage } from "../firebase/firebase-auth.js"
protectPage()

const logoutBtn = document.getElementById("logoutBtn")
logoutBtn.addEventListener("click",logout)
```

### 💡 Logical Breakdown:
- **Line 2 (`protectPage()`):** Executed immediately when the script loads. Checks authentication state; if unauthenticated, redirects user to `../login/login.html`.
- **Lines 4–5:** Attaches `logout()` function as click handler for `#logoutBtn`.

---

# 8. 🌐 Root Navigation (`index.html`)

The root `index.html` file serves as a simple navigation hub for the project.

### 📄 Code (`index.html`):
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <nav>
        <a href="/signup/signup.html">signup</a>
        <a href="/login/login.html">login</a>
    </nav>
</body>
</html>
```

---

# 9. 🔁 Complete Application Execution Flow

The full authentication lifecycle across all files operates as follows:

```text
                      [ index.html ]
                            │
               ┌────────────┴────────────┐
               ▼                         ▼
      [ signup/signup.html ]    [ login/login.html ]
               │                         │
      redirectIfLogin()         redirectIfLogin()
     (Logged in? ──> Dash)     (Logged in? ──> Dash)
               │                         │
        Fill & Submit             Fill & Submit
               │                         │
     createUserWithEmail       signInWithEmail
        AndPassword()             AndPassword()
               │                         │
               └────────────┬────────────┘
                            ▼
               [ Firebase Auth Success ]
                            │
              Redirect to dashboard.html
                            │
                            ▼
                [ dashboard/dashboard.html ]
                            │
                      protectPage()
            (Not logged in? ──> Login Page)
                            │
                  Click Logout Button
                            │
                       signOut(auth)
                            │
                  Redirect to login.html
```

---

> 🎓 **Summary:** This module manages full client-side user authentication using Firebase Auth SDK, protecting private routes (`dashboard.html`) and redirecting guest routes (`signup.html`, `login.html`) dynamically based on real-time authentication state listeners.
