# 📘 JavaScript — API Lecture

A comprehensive guide to understanding and using APIs in JavaScript.

---

## 📚 Topics Covered

1. **API Fundamentals** (What is an API, Why use it, Client vs Server, Request & Response, Base URL & Endpoint)
2. **HTTP Basics** (HTTP, Request & Response Structure, HTTP Methods, Status Codes)
3. **Data Formats & Parameters** (JSON, Headers & Content-Type, Request/Response Body, Query vs Path Parameters)
4. **JavaScript `fetch()` API** (`fetch()`, Promise, `.then()` / `.catch()`, `async/await`, `try/catch`, `response.json()`, `response.ok`, Error Handling, Loading State, HTML Display)
5. **Practical API Operations** (GET, POST, PUT/PATCH, DELETE Requests)
6. **API Testing with Postman** (Postman, GET/POST in Postman, Headers, Body, Response & Status Codes)
7. **File Uploads & FormData** (File Upload, `<input type="file">`, File Object & FileList, `FormData`, `formData.append()`, `multipart/form-data`, Uploading with `fetch()`)
8. **Summary & Student Practice Tasks**

---

# 1. 🔌 API Fundamentals

### 1.1 What is an API? & Why Use It?
- **API (Application Programming Interface):** A bridge that allows your webpage to request data from a server.
- **Why use it?** Webpages need live data (like weather, products, or user profiles) stored safely on a server instead of hardcoding it.

### 1.2 Client vs Server
- **Client:** Your browser / app requesting data.
- **Server:** A remote computer storing database records.

```text
[ Client (Browser) ] ── Send Request ──> [ API ] ── Send Request ──> [ Server / DB ]
[ Client (Browser) ] <── Receive Data ── [ API ] <── Return Response ── [ Server / DB ]
```

### 1.3 API Request, Response, Base URL & Endpoint
- **Request:** The message sent by the browser to ask for data.
- **Response:** The message sent back by the server with data.
- **Base URL:** Main server domain (e.g., `https://api.example.com`).
- **Endpoint:** Specific route for data (e.g., `/users` or `/products`).

```js
// Base URL + Endpoint = Full API URL
var baseUrl = "https://jsonplaceholder.typicode.com";
var endpoint = "/users";
var fullUrl = baseUrl + endpoint; // "https://jsonplaceholder.typicode.com/users"
```

---

# 2. 🚦 HTTP Basics

### 2.1 What is HTTP?
**HTTP (Hypertext Transfer Protocol)** is the set of rules browsers and servers use to talk to each other.

### 2.2 HTTP Request & Response Structure
- **Request contains:** HTTP Method + Headers (metadata) + Body (data payload).
- **Response contains:** Status Code + Headers + Body (returned data).

### 2.3 HTTP Methods (CRUD Operations)
| Method | Action | Purpose |
| --- | --- | --- |
| **GET** | Read | Fetch data from server (No request body) |
| **POST** | Create | Send new data to server |
| **PUT** | Replace | Replace an existing record completely |
| **PATCH** | Update | Update specific fields of a record |
| **DELETE** | Remove | Delete a record from server |

### 2.4 HTTP Status Codes
- **200 (OK):** Request succeeded.
- **201 (Created):** New data created successfully.
- **400 (Bad Request):** Invalid request sent by client.
- **401 (Unauthorized):** Login / Token required.
- **403 (Forbidden):** Permission denied.
- **404 (Not Found):** Endpoint or item does not exist.
- **500 (Server Error):** Backend server crashed.

---

# 3. 📦 Data Formats & Parameters

### 3.1 JSON (JavaScript Object Notation)
Text format used to exchange data between client and server.
- **Rules:** Double quotes (`""`) for keys and strings. No functions.

```js
var userObj = { name: "Ali", age: 20 };

// Convert JS Object to JSON String (for sending to server)
var jsonString = JSON.stringify(userObj);

// Convert JSON String to JS Object (after receiving from server)
var parsedObj = JSON.parse(jsonString);
```

### 3.2 Request Headers & Content-Type
Headers send extra information. `Content-Type` tells the server what format the request body is using.

```js
var headers = {
  "Content-Type": "application/json", // Tells server body is JSON
  "Authorization": "Bearer token123"  // Security token
};
```

### 3.3 Request Body vs Response Body
- **Request Body:** Data sent from client to server (in POST/PUT/PATCH).
- **Response Body:** Data sent back from server to client.

### 3.4 Query Parameters vs Path Parameters
- **Path Parameter (`/users/5`):** Used to identify a specific item by ID.
- **Query Parameter (`/users?role=admin`):** Used to filter or sort lists (starts with `?`).

```js
var pathUrl = "https://jsonplaceholder.typicode.com/users/5";      // Path Param (User ID 5)
var queryUrl = "https://jsonplaceholder.typicode.com/posts?userId=1"; // Query Param (Filter by userId)
```

---

# 4. 🌐 JavaScript `fetch()` API

### 4.1 Promises, `.then()` and `async/await`
`fetch()` sends a request and returns a **Promise** (Pending, Resolved, or Rejected).

#### Option A: Using `.then()` & `.catch()`
```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then(function(response) {
    return response.json(); // Convert response stream to JS Object
  })
  .then(function(data) {
    console.log("Users:", data);
  })
  .catch(function(error) {
    console.log("Error:", error.message);
  });
```

#### Option B: Using `async/await` & `try/catch` (Recommended)
```js
async function getUsers() {
  try {
    var response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    // Check if HTTP status is 200-299
    if (!response.ok) {
      throw new Error("HTTP error status: " + response.status);
    }
    
    var data = await response.json();
    console.log("Users:", data);
  } catch (error) {
    console.log("Fetch Error:", error.message);
  }
}
```

> 💡 **Important:** `fetch()` only rejects on network failure. Always check `response.ok` to handle HTTP errors (like 404 or 500).

### 4.2 Loading State & HTML Display
Show a loading message while waiting for API data, then display it in the HTML DOM.

```html
<div id="loading">Loading...</div>
<ul id="userList"></ul>
```

```js
async function loadAndDisplayUsers() {
  var loadingEl = document.getElementById("loading");
  var listEl = document.getElementById("userList");

  try {
    var response = await fetch("https://jsonplaceholder.typicode.com/users");
    var users = await response.json();

    loadingEl.style.display = "none"; // Hide loading text

    for (var i = 0; i < users.length; i++) {
      var li = document.createElement("li");
      li.textContent = users[i].name + " (" + users[i].email + ")";
      listEl.appendChild(li);
    }
  } catch (err) {
    loadingEl.textContent = "Failed to load data!";
  }
}
```

---

# 5. 🛠️ Practical API Operations (CRUD)

### 5.1 GET Request (Fetch Data)
```js
async function getData() {
  var res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  var data = await res.json();
  console.log("Fetched Item:", data);
}
```

### 5.2 POST Request (Send New Data)
```js
async function createData() {
  var newPost = { title: "Hello", body: "World", userId: 1 };

  var res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost)
  });

  var result = await res.json();
  console.log("Created Record (Status " + res.status + "):", result);
}
```

### 5.3 PUT / PATCH Request (Update Data)
```js
async function updateData(id) {
  var updatedPost = { title: "Updated Title", body: "Updated Body", userId: 1 };

  var res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedPost)
  });

  var result = await res.json();
  console.log("Updated Result:", result);
}
```

### 5.4 DELETE Request (Delete Data)
```js
async function deleteData(id) {
  var res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
    method: "DELETE"
  });

  if (res.ok) {
    console.log("Deleted item " + id + " successfully!");
  }
}
```

---

# 6. 🚀 API Testing with Postman

**Postman** is a tool to test APIs without writing frontend code.

1. **GET Request:** Select `GET`, paste URL, click **Send**.
2. **POST Request:** Select `POST`, paste URL, go to `Body` -> `raw` -> select `JSON`, paste payload, click **Send**.
3. **Headers Tab:** Add headers like `Content-Type: application/json` or `Authorization`.
4. **Response Pane:** Check returned status code (e.g., `200 OK`, `201 Created`) and JSON output.

---

# 7. 📁 File Uploads with FormData

### 7.1 File Object & `<input type="file">`
In HTML, `<input type="file">` lets users pick files. In JS, `input.files[0]` gives the selected **File Object** (with `name`, `size`, `type`).

### 7.2 FormData & `multipart/form-data`
To upload files via API, pack them into a **`FormData`** object.

> ⚠️ **Rule:** Do NOT manually set `Content-Type` header when sending `FormData`. Browser attaches boundary automatically!

```html
<input type="file" id="avatarInput" />
<button onclick="uploadFile()">Upload</button>
```

```js
async function uploadFile() {
  var fileInput = document.getElementById("avatarInput");
  
  if (fileInput.files.length === 0) {
    alert("Select a file first!");
    return;
  }

  var formData = new FormData();
  formData.append("avatar", fileInput.files[0]); // Append file object

  var res = await fetch("https://httpbin.org/post", {
    method: "POST",
    body: formData // Browser handles headers automatically
  });

  var result = await res.json();
  console.log("Upload Success:", result);
}
```

---

# 8. 🔄 Quick Summary & Practice Tasks

### 💡 Quick Summary Cheat-Sheet
- **GET:** Read data (`fetch(url)`).
- **POST:** Create data (`method: "POST"`, `body: JSON.stringify(data)`).
- **PUT/DELETE:** Update or remove data.
- **response.ok:** Checks if HTTP status is 200–299.
- **FormData:** Used to upload files (`formData.append("file", fileObj)`).

---

### 📝 Practice Tasks

1. **Task 1 (GET):** Fetch user list from `https://jsonplaceholder.typicode.com/users` and display user names inside an HTML list (`<ul>`).
2. **Task 2 (POST):** Create an HTML form with `Title` and `Body` inputs. On submit, POST the data to `https://jsonplaceholder.typicode.com/posts` and log the response.
3. **Task 3 (Error Handling):** Fetch `https://jsonplaceholder.typicode.com/invalid404`, check `response.ok`, and display `"Error 404: Not Found"` on screen.
4. **Task 4 (File Upload):** Add a file input, pack the selected image into `FormData`, send it to `https://httpbin.org/post`, and console log the result.
