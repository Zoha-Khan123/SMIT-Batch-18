# 📘 Firebase Firestore

This documentation provides a comprehensive, code-backed technical breakdown of the Firebase Firestore implementation in this module, detailing the codebase structure, individual files, core database functions, and overall application data flow.

---

## 📚 Topics Covered

1. **Exact Directory Structure**
2. **Firestore Introduction**
3. **Firebase Configuration & Firestore Initialization**
4. **Saving User Profile Data in Firestore**
5. **Blog Creation & Publishing**
6. **Fetching Blogs from Firestore**
7. **Querying User-Specific Blogs by User UID**
8. **Rendering Blogs as Dashboard Cards**
9. **Navigation to Blog Detail Page ("Read More")**
10. **Fetching a Single Blog by Document ID**
11. **Complete Firestore Application Data Flow**
12. **Actual Firestore SDK Functions Used**
13. **File-by-File Code Explanation**
14. **Summary & Final Revision**

---

# 1. 📁 Exact Directory Structure

The following tree represents the exact structure of files and folders inside the `Firestore` directory:

```text
Firebase/Firestore/
├── blog-details/
│   ├── blog-detail.css
│   ├── blog-detail.html
│   └── blog-detail.js
├── create-blog/
│   ├── create-blog.css
│   ├── create-blog.html
│   └── create-blog.js
├── dashboard/
│   ├── dashboard.css
│   ├── dashboard.html
│   └── dashboard.js
├── firebase/
│   ├── firebase-auth.js
│   ├── firebase-config.js
│   └── firebase-firestore.js
├── login/
│   ├── login.css
│   ├── login.html
│   └── login.js
├── signup/
│   ├── signup.css
│   ├── signup.html
│   └── signup.js
├── index.html
├── user-pic.webp
└── README.md
```

---

# 2. ⚡ Firestore Introduction

**Cloud Firestore** is Google's flexible, scalable NoSQL cloud database for web and mobile development. In this project:
- Data is stored in **Collections** (`users` and `blogs`).
- Each collection contains individual **Documents** with key-value data fields.
- Firestore operates directly from the client side using Firebase SDK methods.

---

# 3. ⚙️ Firebase Configuration & Firestore Initialization

Firestore is initialized using the shared `app` instance created in `firebase-config.js`.

### 📄 Code (`firebase/firebase-config.js`):
```js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCcmGHZq6n1f-it0106buVy3OJO0PgvuLM",
  authDomain: "batch-18-class-01.firebaseapp.com",
  projectId: "batch-18-class-01",
  storageBucket: "batch-18-class-01.firebasestorage.app",
  messagingSenderId: "1084497946404",
  appId: "1:1084497946404:web:edfd170b979c135df5b5b1",
  measurementId: "G-XTVB5ZCRB7"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
```

### 📄 Code (`firebase/firebase-firestore.js` - Initialization snippet):
```js
import { getFirestore, collection, addDoc, query, where, getDocs, getDoc, doc } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";
import { app } from "./firebase-config.js";

const db = getFirestore(app);
```

### 💡 Line-by-Line Explanation:
- `import { getFirestore, ... }`: Imports Firestore methods from the official v12.18.0 CDN SDK.
- `import { app }`: Imports initialized app instance from `firebase-config.js`.
- `const db = getFirestore(app)`: Initializes and exports the Firestore database service instance `db`.

---

# 4. 👤 Saving User Profile Data in Firestore

When a user signs up via Firebase Auth, their details (`userId`, `name`, `email`) are saved into the `users` Firestore collection.

### 📄 Code (`firebase/firebase-firestore.js`):
```js
const addUserInDb = async (userId, name, email) => {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "users"), {
      userId,
      name,
      email
    });
    console.log("Document written with ID: ", docRef.id);
}
```

### 📄 Invocation in `firebase/firebase-auth.js`:
```js
const signup = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        console.log("Signup successfull", user);
        localStorage.setItem("userId", user.uid);
        await addUserInDb(user.uid, name, email);
        window.location.href = "../dashboard/dashboard.html";
      })
      .catch((error) => console.log(error.message));
}
```

### 💡 Logical Explanation:
- `createUserWithEmailAndPassword`: Registers user in Firebase Auth and returns user payload containing `user.uid`.
- `localStorage.setItem("userId", user.uid)`: Stores user's unique ID locally.
- `addUserInDb(user.uid, name, email)`: Calls `addDoc()` to insert a new document containing `userId`, `name`, and `email` inside the `"users"` collection.

---

# 5. ✍️ Blog Creation & Publishing

Users create blogs through the rich text editor (Quill.js) interface in `create-blog.html`.

### 📄 Code (`create-blog/create-blog.js`):
```js
import { protectPage } from "../firebase/firebase-auth.js";
import { addBlogInDb } from "../firebase/firebase-firestore.js";

protectPage();

const quill = new Quill('#editor', { theme: 'snow' });
const blogForm = document.getElementById("blogForm");

const addBlog = async (e) => {
  e.preventDefault();
  const blogTitle = document.getElementById("blogTitle").value;
  const blogCategory = document.getElementById("blogCategory").value;
  const blogContent = quill.root.innerHTML;

  await addBlogInDb(blogTitle, blogCategory, blogContent);
  e.target.reset();
  quill.setText("");
  window.location.href = "../dashboard/dashboard.html";
}
blogForm.addEventListener("submit", addBlog);
```

### 📄 Database Helper (`firebase/firebase-firestore.js`):
```js
const userId = localStorage.getItem("userId");

const addBlogInDb = async (blogTitle, blogCategory, blogContent, blogImage) => {
    const docRef = await addDoc(collection(db, "blogs"), {
      userId,
      blogTitle,
      blogCategory,
      blogContent
    });
    console.log("Document written with ID: ", docRef.id);
}
```

### 💡 Logical Explanation:
- Reads form fields `#blogTitle`, `#blogCategory`, and HTML content from Quill editor (`quill.root.innerHTML`).
- `addBlogInDb(...)` uses `addDoc(collection(db, "blogs"), ...)` to store `userId`, `blogTitle`, `blogCategory`, and rich-text `blogContent` inside the `"blogs"` collection.

---

# 6. 🔍 Fetching Blogs Querying by User UID

The dashboard displays blogs belonging specifically to the logged-in user.

### 📄 Code (`firebase/firebase-firestore.js`):
```js
const getBlogInDb = async () => {
  const q = query(collection(db, "blogs"), where("userId", "==", userId));

  let allBlogs = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    allBlogs.push({ ...doc.data(), id: doc.id });
  });
  console.log("All blogs", allBlogs);

  return allBlogs;
}
```

### 💡 Logical Explanation:
- `userId = localStorage.getItem("userId")`: Gets active logged-in user ID.
- `query(collection(db, "blogs"), where("userId", "==", userId))`: Creates a query filtering `"blogs"` collection where the document field `userId` equals current `userId`.
- `getDocs(q)`: Executes query and returns snapshot documents.
- `querySnapshot.forEach(...)`: Maps each document data (`...doc.data()`) along with its auto-generated document ID (`id: doc.id`) into an array `allBlogs` and returns it.

---

# 7. 🎴 Displaying Blogs as Dashboard Cards

Fetched user blogs are dynamically injected into DOM elements on the Dashboard.

### 📄 Code (`dashboard/dashboard.js`):
```js
import { logout, protectPage } from "../firebase/firebase-auth.js";
import { getBlogInDb } from "../firebase/firebase-firestore.js";

protectPage();

const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", logout);

const myBlogs = await getBlogInDb();
console.log("my blogs", myBlogs);

const blogCards = document.getElementById("blogCards");
for (const blog of myBlogs) {
    blogCards.innerHTML += `
        <div class="blog_card_1">
            <h5>${blog.blogCategory}</h5>
            <h1>${blog.blogTitle}</h1>
            <p>${blog.blogContent}</p>
            <p>Author ID: ${blog.userId}</p>
            <button onclick="window.location.href = '../blog-details/blog-detail.html?id=${blog.id}'">Read More</button>
        </div>`;
}
```

### 💡 Logical Explanation:
- `await getBlogInDb()` retrieves blog documents for the current user.
- Loops through `myBlogs` array and appends dynamic card HTML into `#blogCards` container.
- Embeds `blog.id` as a URL query parameter (`?id=${blog.id}`) in the "Read More" button click handler.

---

# 8. 📖 Navigation to Blog Detail Page ("Read More")

When a user clicks "Read More" on any blog card:
- Browser navigates to `../blog-details/blog-detail.html?id=<BLOG_DOCUMENT_ID>`.
- The target document ID is passed cleanly in the browser's URL search parameters.

---

# 9. 📄 Fetching a Single Blog by Document ID

The Detail page extracts the `id` from the URL parameters and fetches the single corresponding blog document from Firestore.

### 📄 Code (`firebase/firebase-firestore.js`):
```js
const getBlogDetailInDb = async (blogId) => {
  const docRef = doc(db, "blogs", blogId);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}
```

### 📄 Code (`blog-details/blog-detail.js`):
```js
import { getBlogDetailInDb } from "../firebase/firebase-firestore.js";

const params = new URLSearchParams(window.location.search);
console.log(params);

const blogId = params.get("id");
console.log(blogId);

const blogDetail = await getBlogDetailInDb(blogId);

document.getElementById("title").innerText = blogDetail.blogTitle;
document.getElementById("authorId").innerText = blogDetail.userId;
document.getElementById("category").innerText = blogDetail.blogCategory;
document.getElementById("content").innerHTML = blogDetail.blogContent;
```

### 💡 Logical Explanation:
- `new URLSearchParams(window.location.search).get("id")`: Extracts `blogId` from URL query parameters.
- `doc(db, "blogs", blogId)`: Creates a reference to the specific document inside `"blogs"`.
- `getDoc(docRef)`: Retrieves document snapshot.
- Populates DOM elements (`#title`, `#authorId`, `#category`, `#content`) with retrieved document fields.

---

# 10. 🔁 Complete Firestore Application Data Flow

The complete data lifecycle in our application operates as follows:

```text
User Signup (Name, Email, Password)
 ↓
Firebase Authentication (returns user.uid)
 ↓
Firestore User Document (`users` collection)
 ↓
Create Blog (Title, Category, Quill Rich-Text Content)
 ↓
Firestore Blogs Collection (`blogs` collection with userId)
 ↓
Get User Blogs (Query where userId == current userId)
 ↓
Render Blog Cards on Dashboard
 ↓
User Clicks "Read More" (passes ?id=documentId in URL)
 ↓
Single Blog Detail Page (getDoc by Document ID)
```

---

# 11. 🛠️ Actual Firestore SDK Functions Used

The table below lists all Firestore functions imported and utilized in `firebase-firestore.js`:

| Function | Package Source | Usage in Project |
|---|---|---|
| `getFirestore(app)` | `firebase-firestore.js` | Initializes Firestore database instance. |
| `collection(db, path)` | `firebase-firestore.js` | References a target collection (`"users"` or `"blogs"`). |
| `addDoc(collectionRef, data)` | `firebase-firestore.js` | Adds a new document with auto-generated ID. |
| `query(collectionRef, ...constraints)` | `firebase-firestore.js` | Constructs a query object. |
| `where(field, op, value)` | `firebase-firestore.js` | Filters documents where `userId == current userId`. |
| `getDocs(queryRef)` | `firebase-firestore.js` | Executes query and returns matching document snapshots. |
| `doc(db, path, docId)` | `firebase-firestore.js` | Creates a reference to a single specific document. |
| `getDoc(docRef)` | `firebase-firestore.js` | Fetches snapshot data of a single document by ID. |

---

# 12. 📁 File-by-File Code Explanation

### 1. `firebase/firebase-config.js`
Initializes root Firebase app using project credentials and exports `app`.

### 2. `firebase/firebase-auth.js`
Handles user `signup`, `login`, `logout`, `redirectIfLogin`, and `protectPage`. On signup, invokes `addUserInDb` to record user details in Firestore.

### 3. `firebase/firebase-firestore.js`
Main database module exporting:
- `addUserInDb`: Inserts user metadata to `"users"` collection.
- `addBlogInDb`: Writes blog payload to `"blogs"` collection.
- `getBlogInDb`: Queries and returns array of user blogs.
- `getBlogDetailInDb`: Fetches single blog document data by `blogId`.

### 4. `signup/signup.html` & `signup/signup.js`
Renders user registration form, collects name/email/password, calls `signup()` helper function.

### 5. `login/login.html` & `login/login.js`
Renders login form, authenticates user, sets `userId` in `localStorage`, redirects to dashboard.

### 6. `create-blog/create-blog.html` & `create-blog/create-blog.js`
Integrates Quill.js text editor, captures blog details, invokes `addBlogInDb()`, redirects to dashboard.

### 7. `dashboard/dashboard.html` & `dashboard/dashboard.js`
Protects route via `protectPage()`, fetches user blogs via `getBlogInDb()`, renders blog cards with "Read More" redirection buttons.

### 8. `blog-details/blog-detail.html` & `blog-details/blog-detail.js`
Parses blog ID from query parameters, fetches single blog via `getBlogDetailInDb()`, populates detail view DOM.

### 9. `index.html`
Simple landing navigation page linking to Home and Login routes.

---

# 13. 🎓 Summary & Final Revision

In this module:
- **Authentication & Database Sync:** Firebase Auth handles user identity, while user profiles are stored in Firestore's `users` collection.
- **Data Association:** Every blog document stored in `blogs` collection retains a `userId` foreign key.
- **Security & Route Protection:** `protectPage()` protects private routes (`dashboard.html`, `create-blog.html`), and `where("userId", "==", userId)` ensures users query their own blog posts.
- **Document Lookup:** Single blog detail view relies on Firestore `getDoc` by document ID passed seamlessly through URL parameters.
