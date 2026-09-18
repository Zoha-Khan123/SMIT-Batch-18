# 📘 JavaScript — Complete Frontend API Guide

## 📚 Topics Covered

1. **What is an API? (API kya hoti hai)**
2. **Why use APIs? (API kyun use hoti hai)**
3. **Client & Server Basic Concept**
4. **API Request**
5. **API Response**
6. **API Endpoint**
7. **API URL / Base URL**
8. **What is HTTP? (HTTP kya hai)**
9. **HTTP Request Basic Structure**
10. **HTTP Response Basic Structure**
11. **HTTP Methods: GET, POST, PUT, PATCH, DELETE**
12. **HTTP Status Codes: 200, 201, 400, 401, 403, 404, 500**
13. **JSON**
14. **Request Headers**
15. **Content-Type**
16. **Request Body**
17. **Response Body**
18. **Query Parameters**
19. **Path Parameters**
20. **fetch()**
21. **Promise**
22. **.then()**
23. **.catch()**
24. **async/await**
25. **try/catch**
26. **response.json()**
27. **response.ok**
28. **API Error Handling**
29. **Loading State**
30. **Displaying API Data in HTML (API Data ko HTML mein display karna)**
31. **GET API Request**
32. **POST API Request**
33. **PUT/PATCH Request**
34. **DELETE Request**
35. **Request with Headers (Headers ke sath Request)**
36. **Request with JSON Body (JSON Body ke sath Request)**
37. **API Response Handling**
38. **What is Postman? (Postman kya hai)**
39. **GET in Postman**
40. **POST in Postman**
41. **Headers in Postman**
42. **Body in Postman**
43. **JSON in Postman**
44. **Response in Postman**
45. **Status Code in Postman**
46. **File Upload Concept**
47. **`<input type="file">`**
48. **File Object**
49. **FileList**
50. **FormData**
51. **formData.append()**
52. **multipart/form-data**
53. **Sending File via fetch() (File ko API ke through fetch() se send karna)**
54. **Upload Response Handling**
55. **Complete API Revision & Summary**
56. **Beginner Practice Tasks**

---

# 1. 🔌 What is an API?

**API** stands for **Application Programming Interface**.

An API is a software interface that allows two different applications to communicate and share data with each other.

> 💡 **Real-World Analogy:** Think of an API like a waiter in a restaurant. You (the Client) look at the menu and give your order to the waiter (the API). The waiter takes your request to the kitchen (the Server), gets the prepared food (the Data), and serves it back to your table.

```text
+------------------+                 +------------------+                 +------------------+
|   Browser / UI   | ---- Request -->|       API        | ---- Request -->|  Server / DB     |
|     (Client)     | <-- Response ---|    (Interface)   | <-- Response ---|    (Database)    |
+------------------+                 +------------------+                 +------------------+
```

---

# 2. ❓ Why Use APIs?

Modern web applications rely heavily on APIs instead of hardcoding data inside frontend files.

## Key Benefits:

1. **Live Data Integration:** Web applications can fetch real-time data from external services (e.g., live weather updates, stock prices).
2. **Security & Protection:** Direct database access is never given to the frontend browser. APIs control what data can be viewed or edited securely.
3. **Code Reusability:** A single backend API can serve multiple applications simultaneously (Web App, Android App, iOS App).
4. **Separation of Concerns:** Frontend developers focus on UI/UX, while backend services handle database logic.

---

# 3. 💻 Client & Server Basic Concept

The web operates on the **Client-Server Architecture**.

```text
  [ Client ] (Browser / Mobile App)
      │
      │  1. Request (Ask for data)
      ▼
  [ Server ] (Remote Computer / Database)
      │
      │  2. Response (Send data back)
      ▼
  [ Client ] (Render on Screen)
```

## Client
- The **Client** is the device or browser that requests information or services.
- Examples: Google Chrome, Safari, React Application, Mobile App.

## Server
- The **Server** is a remote computer that stores application data, processes incoming client requests, and sends back appropriate responses.
- Examples: Firebase, Node.js Backend, Payment Gateway, Database Server.

---

# 4. 📤 API Request

An **API Request** is a message sent by the client to the server asking for data or requesting an action to be performed on the server.

## Components of an API Request:
- **URL / Endpoint:** Where the request is sent.
- **HTTP Method:** What action to take (Fetch, Create, Update, Delete).
- **Headers:** Additional metadata about the request (e.g., Authentication token, Data format).
- **Body:** Data payload sent along with POST or PUT requests.

```js
// Conceptual Request Setup
var apiTargetUrl = "https://jsonplaceholder.typicode.com/users";
console.log("Preparing API Request to:", apiTargetUrl);
```

---

# 5. 📥 API Response

An **API Response** is the message returned by the server back to the client after processing the incoming request.

## Components of an API Response:
- **Status Code:** Indicates if the request succeeded or failed (e.g., `200 OK`, `404 Not Found`).
- **Response Headers:** Server metadata (e.g., content type, server timestamp).
- **Response Body:** The main data payload returned by the server (usually in JSON format).

```js
// Conceptual Response Data
var mockServerResponse = {
  status: 200,
  data: {
    id: 1,
    name: "John Doe",
    email: "john@example.com"
  }
};

console.log("User Name Received:", mockServerResponse.data.name);
```

---

# 6. 🎯 API Endpoint

An **API Endpoint** is a specific URL path on a server where a particular resource or service can be accessed.

> **Endpoint = Specific location on the server that handles a specific dataset.**

## Examples:
Base Server Address: `https://api.example.com`

- `https://api.example.com/users` ➔ Users Endpoint
- `https://api.example.com/products` ➔ Products Endpoint
- `https://api.example.com/orders` ➔ Orders Endpoint

---

# 7. 🌐 API URL / Base URL

An API URL consists of two main parts:

1. **Base URL:** The primary domain address of the API server.
2. **Endpoint / Path:** The specific route for the desired resource.

```text
https://api.example.com / v1 / users
\_____________________/   \________/
       Base URL            Endpoint
```

## JavaScript Code Example:

```js
var baseUrl = "https://jsonplaceholder.typicode.com";
var usersRoute = "/users";
var postsRoute = "/posts";

var fullUsersUrl = baseUrl + usersRoute;
var fullPostsUrl = baseUrl + postsRoute;

console.log("Full Users URL:", fullUsersUrl);
console.log("Full Posts URL:", fullPostsUrl);
```

---

# 8. 🚦 What is HTTP?

**HTTP** stands for **Hypertext Transfer Protocol**.

It is the foundation protocol used for communication between web browsers (Clients) and web servers.

> **HTTP = The communication rules and language used by Client and Server.**

When security and encryption are added, it is called **HTTPS** (Hypertext Transfer Protocol Secure).

---

# 9. 📋 HTTP Request Basic Structure

When a client sends a request over HTTP, the message follows a standardized format:

```text
GET /users HTTP/1.1
Host: api.example.com
User-Agent: Mozilla/5.0
Accept: application/json
Authorization: Bearer secret_token_123
```

## Structure Breakdown:

1. **Request Line:** Contains the HTTP Method (`GET`), Path (`/users`), and Protocol Version (`HTTP/1.1`).
2. **Headers:** Key-value metadata providing details about the client and request environment.
3. **Blank Line:** Separates headers from the body.
4. **Body:** Optional data payload (used in POST, PUT, PATCH requests).

---

# 10. 📩 HTTP Response Basic Structure

The server responds over HTTP using a similar standardized structure:

```text
HTTP/1.1 200 OK
Date: Thu, 17 Sep 2026 12:00:00 GMT
Content-Type: application/json
Content-Length: 68

{
  "id": 1,
  "status": "active"
}
```

## Structure Breakdown:

1. **Status Line:** Protocol Version (`HTTP/1.1`), Status Code (`200`), and Status Text (`OK`).
2. **Headers:** Metadata sent by the server (`Content-Type`, `Date`, etc.).
3. **Body:** The actual returned data payload.

---

# 11. 🛠️ HTTP Methods: GET, POST, PUT, PATCH, DELETE

HTTP Methods inform the server what action needs to be performed on a resource. These correspond to **CRUD** operations (Create, Read, Update, Delete).

| HTTP Method | CRUD Action | Purpose | Has Request Body? |
| --- | --- | --- | --- |
| **GET** | Read | Fetch or read data from the server | No |
| **POST** | Create | Create a new record on the server | Yes |
| **PUT** | Update (Full) | Completely replace an existing record | Yes |
| **PATCH** | Update (Partial) | Modify specific fields of an existing record | Yes |
| **DELETE** | Delete | Remove a record from the server | Optional / No |

---

# 12. 🔢 HTTP Status Codes: 200, 201, 400, 401, 403, 404, 500

HTTP Status Codes are 3-digit numbers returned by the server to communicate the outcome of a request.

```text
1xx ➔ Informational
2xx ➔ Success
3xx ➔ Redirection
4xx ➔ Client Error (Problem with request)
5xx ➔ Server Error (Problem on server)
```

## Key Status Codes Table:

| Code | Status Text | Meaning |
| --- | --- | --- |
| **200** | OK | Request succeeded, data retrieved successfully. |
| **201** | Created | New resource successfully created (POST). |
| **400** | Bad Request | Invalid request format or missing data. |
| **401** | Unauthorized | Authentication is required (Not logged in). |
| **403** | Forbidden | Client does not have access permissions. |
| **404** | Not Found | Requested URL or resource does not exist. |
| **500** | Internal Server Error | Server crashed or encountered an internal bug. |

---

# 13. 📦 JSON

**JSON** stands for **JavaScript Object Notation**.

It is a lightweight text-based data format used universally for transmitting data between client and server.

## JSON Syntax Rules:
- Keys must be wrapped in **double quotes (`""`)**.
- String values must be wrapped in **double quotes (`""`)**.
- Functions, `undefined`, and single quotes are **not allowed** in JSON.

## JavaScript Object vs JSON String:

```js
// JavaScript Object (In memory)
var userObject = {
  name: "Sarah",
  age: 22,
  isStudent: true
};

// JSON String (Transmitted over network)
var jsonString = '{"name": "Sarah", "age": 22, "isStudent": true}';

// Conversion Functions:
var serializedJson = JSON.stringify(userObject); // Object -> JSON String
var parsedObject = JSON.parse(jsonString);        // JSON String -> Object

console.log("Serialized JSON:", serializedJson);
console.log("Parsed Object Name:", parsedObject.name);
```

---

# 14. 📑 Request Headers

**Request Headers** pass additional information (metadata) along with the request to help the server process it correctly.

## Common Headers:
- `Content-Type`: Tells the server what format the request body is in.
- `Authorization`: Sends security tokens (e.g., Bearer tokens, API keys).
- `Accept`: Tells the server what format the client expects back.

```js
// Conceptual Headers Object
var requestHeaders = {
  "Content-Type": "application/json",
  "Authorization": "Bearer my_access_token_123"
};

console.log("Headers Configured:", requestHeaders);
```

---

# 15. 🏷️ Content-Type

The `Content-Type` header informs the server about the data format sent inside the Request Body.

## Common Content-Type Values:
- `application/json` ➔ Standard JSON payload.
- `multipart/form-data` ➔ Used for file uploads.
- `application/x-www-form-urlencoded` ➔ Standard HTML form data.

---

# 16. 📝 Request Body

The **Request Body** contains the actual payload data sent from the client to the server when creating or updating data (POST, PUT, PATCH).

```js
// User Payload Object
var newRecord = {
  title: "Learning Frontend APIs",
  content: "Understanding HTTP and fetch API"
};

// Serialize payload before sending
var requestPayload = JSON.stringify(newRecord);
console.log("Payload String:", requestPayload);
```

---

# 17. 📜 Response Body

The **Response Body** is the actual data returned by the server after processing a request.

```js
// Server Response JSON String
var rawResponseText = '{"id": 101, "message": "Record saved successfully"}';

// Parse Response
var responseData = JSON.parse(rawResponseText);
console.log("Server Message:", responseData.message);
```

---

# 18. ❓ Query Parameters

**Query Parameters** are appended to the end of a URL to filter, sort, or paginate data.

- Query parameters start with a **`?`** question mark.
- Multiple parameters are joined using an **`&`** ampersand.
- Format: `key=value`.

```text
https://api.example.com/products?category=laptops&limit=5&page=1
                                ^                ^       ^
                             Start Params       AND     AND
```

## JavaScript Example:

```js
var baseUrl = "https://jsonplaceholder.typicode.com/posts";
var filterUserId = 1;

var fullQueryUrl = baseUrl + "?userId=" + filterUserId;
console.log("Query Parameter URL:", fullQueryUrl);
```

---

# 19. 📌 Path Parameters

**Path Parameters** are embedded directly inside the URL path to identify a specific single resource by its unique ID.

```text
https://api.example.com/users/42
                             ^^
                    Path Parameter (ID = 42)
```

## Query Parameters vs Path Parameters:

| Feature | Path Parameter | Query Parameter |
| --- | --- | --- |
| **Syntax** | `/users/5` | `/users?id=5` |
| **Purpose** | Identify a specific single item | Filter, sort, or search list items |
| **Requirement** | Mandatory part of route | Usually optional |

```js
var baseUrl = "https://jsonplaceholder.typicode.com/users";
var userId = 5;

// Construct Path Parameter URL
var pathParamUrl = baseUrl + "/" + userId;
console.log("Path Parameter URL:", pathParamUrl);
```

---

# 20. 🌐 fetch()

`fetch()` is a built-in browser API function used to send HTTP requests and fetch resources asynchronously across the network.

- By default, `fetch()` sends a **GET request**.
- `fetch()` always returns a **Promise**.

```js
// Basic fetch call
var fetchPromise = fetch("https://jsonplaceholder.typicode.com/users");
console.log("Fetch Initiated:", fetchPromise);
```

---

# 21. ⏳ Promise

A **Promise** is a JavaScript object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.

## The 3 States of a Promise:

1. **Pending:** Initial state, request is still executing.
2. **Fulfilled (Resolved):** Operation completed successfully (data returned).
3. **Rejected:** Operation failed (error occurred).

```text
               +---- Fulfilled (Resolved) ➔ .then()
               |
  [ Promise ]--+
               |
               +---- Rejected ➔ .catch()
```

---

# 22. 🔗 .then()

The `.then()` method is invoked when a Promise is **fulfilled**. It receives the result and executes a callback function.

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then(function(response) {
    console.log("Response headers received!");
    return response.json();
  })
  .then(function(data) {
    console.log("Fetched User List:", data);
  });
```

---

# 23. 🛡️ .catch()

The `.catch()` method handles errors when a Promise is **rejected** (e.g., network failure, internet disconnection).

```js
fetch("https://invalid-domain-url-test.com/data")
  .then(function(response) {
    return response.json();
  })
  .catch(function(error) {
    console.log("Network error caught:", error.message);
  });
```

---

# 24. ⚡ async/await

`async` and `await` provide a clean, modern syntax for working with Promises, making asynchronous code look like synchronous code.

- `async`: Placed before a function declaration to indicate it handles promises.
- `await`: Placed before a promise call to pause code execution until the promise settles.

```js
async function loadUsers() {
  var response = await fetch("https://jsonplaceholder.typicode.com/users");
  var usersData = await response.json();
  console.log("Users loaded via async/await:", usersData);
}

loadUsers();
```

---

# 25. 🚪 try/catch

When using `async/await`, error handling is performed using standard **`try...catch`** blocks.

```js
async function loadUsersSafely() {
  try {
    var response = await fetch("https://jsonplaceholder.typicode.com/users");
    var users = await response.json();
    console.log("Success Users Data:", users);
  } catch (error) {
    console.log("Error caught in catch block:", error.message);
  }
}

loadUsersSafely();
```

---

# 26. 📄 response.json()

The raw response object returned by `fetch()` represents an HTTP response stream. The `response.json()` method reads the stream to completion and parses the JSON text into a JavaScript Object.

- `response.json()` returns a **Promise**.

```js
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(function(res) {
    return res.json(); // Parses JSON body stream
  })
  .then(function(user) {
    console.log("User Name:", user.name);
  });
```

---

# 27. 🟢 response.ok

`response.ok` is a boolean property on the response object (`true` or `false`). It evaluates to `true` if the HTTP status code is in the range **200–299**.

> ⚠️ **Critical Rule:** `fetch()` does NOT reject a promise on HTTP error status codes like 404 or 500. You MUST check `response.ok` manually.

```js
fetch("https://jsonplaceholder.typicode.com/users/99999") // Non-existent user
  .then(function(response) {
    if (!response.ok) {
      console.log("HTTP Error Status:", response.status); // 404
      throw new Error("HTTP request failed with status " + response.status);
    }
    return response.json();
  })
  .catch(function(err) {
    console.log("Caught Error:", err.message);
  });
```

---

# 28. 🚨 API Error Handling

Robust frontend code must handle both **Network Failures** and **HTTP Error Statuses**.

```js
async function fetchApiData(url) {
  try {
    var response = await fetch(url);
    
    // Check HTTP Status Code
    if (!response.ok) {
      throw new Error("Server responded with error status: " + response.status);
    }
    
    var data = await response.json();
    return data;
  } catch (error) {
    // Catch Network Error or Thrown HTTP Error
    console.log("API Fetch Failed:", error.message);
    alert("Failed to load data: " + error.message);
  }
}
```

---

# 29. ⏳ Loading State

While an API request is in progress, displaying a **Loading Indicator** provides good user experience.

```html
<div id="loadingIndicator">Loading data, please wait...</div>
<ul id="userList"></ul>
```

```js
async function displayUsersWithLoading() {
  var loadingEl = document.getElementById("loadingIndicator");
  var userListEl = document.getElementById("userList");

  // Show loader
  loadingEl.style.display = "block";

  try {
    var response = await fetch("https://jsonplaceholder.typicode.com/users");
    var users = await response.json();

    // Hide loader
    loadingEl.style.display = "none";

    // Populate List Items
    for (var i = 0; i < users.length; i++) {
      var listItem = document.createElement("li");
      listItem.textContent = users[i].name + " (" + users[i].email + ")";
      userListEl.appendChild(listItem);
    }
  } catch (error) {
    loadingEl.textContent = "Error loading data!";
  }
}
```

---

# 30. 🖼️ Displaying API Data in HTML

Once data is fetched from an API, we manipulate the DOM to dynamically display the data on the webpage.

```html
<div id="cardsContainer"></div>
```

```js
function renderUserCards(usersArray) {
  var container = document.getElementById("cardsContainer");
  container.innerHTML = ""; // Clear existing contents

  for (var i = 0; i < usersArray.length; i++) {
    var user = usersArray[i];
    var card = document.createElement("div");
    card.className = "user-card";
    card.innerHTML = "<h3>" + user.name + "</h3><p>Email: " + user.email + "</p><p>City: " + user.address.city + "</p>";
    container.appendChild(card);
  }
}
```

---

# 31. 📥 GET API Request

A GET request retrieves resources from the server.

```js
async function fetchPosts() {
  try {
    var response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) throw new Error("HTTP error " + response.status);
    var posts = await response.json();
    console.log("Total Posts Fetched:", posts.length);
  } catch (error) {
    console.log("GET Request Error:", error);
  }
}
```

---

# 32. 📤 POST API Request

A POST request sends new data payload to the server to create a resource.

```js
async function createPost() {
  var newPostPayload = {
    title: "Learning Frontend APIs",
    body: "Understanding fetch POST requests",
    userId: 1
  };

  try {
    var response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPostPayload)
    });

    var result = await response.json();
    console.log("POST Response Status:", response.status); // 201
    console.log("Created Object:", result);
  } catch (error) {
    console.log("POST Request Error:", error);
  }
}
```

---

# 33. 🔄 PUT/PATCH Request

PUT completely replaces an existing resource, while PATCH partially updates specific fields.

```js
// PUT Request Example (Update Post ID 1)
async function updatePost(postId) {
  var updatedData = {
    id: postId,
    title: "Updated Post Title",
    body: "Updated content body text.",
    userId: 1
  };

  try {
    var response = await fetch("https://jsonplaceholder.typicode.com/posts/" + postId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedData)
    });

    var result = await response.json();
    console.log("PUT Update Result:", result);
  } catch (error) {
    console.log("PUT Request Error:", error);
  }
}
```

---

# 34. ❌ DELETE Request

A DELETE request removes a specified resource from the server.

```js
async function deletePost(postId) {
  try {
    var response = await fetch("https://jsonplaceholder.typicode.com/posts/" + postId, {
      method: "DELETE"
    });

    if (response.ok) {
      console.log("Post " + postId + " deleted successfully. Status:", response.status);
    }
  } catch (error) {
    console.log("DELETE Request Error:", error);
  }
}
```

---

# 35. 🔑 Request with Headers

When APIs require authorization tokens or specific headers:

```js
async function fetchProtectedData() {
  var authToken = "my_bearer_token_xyz789";

  try {
    var response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + authToken,
        "Accept": "application/json"
      }
    });

    var data = await response.json();
    console.log("Protected Data Fetched:", data);
  } catch (error) {
    console.log("Authorized Fetch Error:", error);
  }
}
```

---

# 36. 📦 Request with JSON Body

When sending JSON data, remember to stringify the JavaScript object and set `Content-Type: application/json`.

```js
var userPayload = { name: "Alice", role: "Developer" };

var fetchOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(userPayload)
};

fetch("https://jsonplaceholder.typicode.com/users", fetchOptions)
  .then(function(res) { return res.json(); })
  .then(function(data) { console.log("Created Record:", data); });
```

---

# 37. 🏁 API Response Handling

Standard workflow for handling API responses:

```js
async function handleResponse(url, options) {
  try {
    var response = await fetch(url, options);
    
    if (response.status === 200 || response.status === 201) {
      var data = await response.json();
      return { success: true, data: data };
    } else if (response.status === 401) {
      return { success: false, error: "Unauthorized access. Please login." };
    } else if (response.status === 404) {
      return { success: false, error: "Requested resource not found." };
    } else {
      return { success: false, error: "Server status error: " + response.status };
    }
  } catch (networkError) {
    return { success: false, error: "Network Failure: " + networkError.message };
  }
}
```

---

# 38. 🚀 What is Postman?

**Postman** is an API testing and documentation application used by developers to test API endpoints before writing frontend code.

> **Why use Postman?**  
> Postman allows you to construct requests, set headers, and test API endpoints instantly without creating HTML forms or writing JavaScript code.

```text
+-------------------+                   +-------------------+
|     Postman       | ---- Request ---> |    API Server     |
|   (Testing GUI)   | <--- Response --- | (e.g., Firebase)  |
+-------------------+                   +-------------------+
```

---

# 39. 📥 GET in Postman

How to test a GET request in Postman:

1. Open Postman and open a new request tab (`+`).
2. Select **`GET`** from the HTTP method dropdown.
3. Paste the API URL in the address bar:  
   `https://jsonplaceholder.typicode.com/users`
4. Click the **Send** button.
5. Inspect the response status and JSON payload in the bottom pane.

```text
[GET v]  https://jsonplaceholder.typicode.com/users   [ Send ]
```

---

# 40. 📤 POST in Postman

How to test a POST request in Postman:

1. Select **`POST`** from the method dropdown.
2. Enter the URL: `https://jsonplaceholder.typicode.com/posts`
3. Click the **Body** tab.
4. Select the **raw** radio button and set the format dropdown to **`JSON`**.
5. Paste your JSON payload into the text area and click **Send**.

---

# 41. 📑 Headers in Postman

Configuring request headers in Postman:

1. Click the **Headers** tab under the URL bar.
2. Enter header Key-Value pairs:
   - Key: `Content-Type` ➔ Value: `application/json`
   - Key: `Authorization` ➔ Value: `Bearer <your_token>`

| Header Key | Header Value |
| --- | --- |
| `Content-Type` | `application/json` |
| `Authorization` | `Bearer secret_token_123` |

---

# 42. 📝 Body in Postman

Postman Body options explained:

- **none:** No request body sent (used for GET/DELETE).
- **raw:** Used for custom JSON, XML, or plain text payloads.
- **form-data:** Used for uploading binary files or multipart forms (`multipart/form-data`).
- **x-www-form-urlencoded:** Standard form submission encoding.

---

# 43. 📦 JSON in Postman

When writing JSON inside Postman's raw body editor, always follow strict JSON syntax:

```json
{
  "title": "Postman API Testing",
  "body": "Testing endpoints before writing code",
  "userId": 1
}
```

> ⚠️ **Note:** Keys and strings must use double quotes (`""`). Single quotes will produce a syntax error.

---

# 44. 📜 Response in Postman

After clicking **Send**, the bottom pane displays:

- **Pretty Tab:** Formatted and color-coded JSON response.
- **Raw Tab:** Unformatted raw response string.
- **Status, Time & Size:** Indicates HTTP status code, request duration in ms, and response payload size.

---

# 45. 🔢 Status Code in Postman

The HTTP status code is highlighted in the top-right of the response panel:

- `200 OK`: Request succeeded.
- `201 Created`: Resource successfully created.
- `400 Bad Request`: Invalid JSON syntax or missing required fields.
- `404 Not Found`: Incorrect endpoint URL.
- `500 Internal Server Error`: Backend server crashed.

---

# 46. 📁 File Upload Concept

Binary files (such as images, PDFs, audio, and video) cannot be sent inside standard JSON objects (`{"file": ...}`).

> **File Upload = Packaging binary files into a FormData object and sending them via multipart HTTP request.**

To upload files from the browser, we use the HTML `<input type="file">`, JavaScript **`FormData`** API, and **`multipart/form-data`** encoding.

---

# 47. 📥 `<input type="file">`

The HTML file input element allows users to select files from their local device.

```html
<!-- Single File Selection -->
<input type="file" id="singleFileInput" />

<!-- Multiple File Selection -->
<input type="file" id="multiFileInput" multiple />

<!-- Restrict File Types (Images Only) -->
<input type="file" id="imageInput" accept="image/*" />
```

---

# 48. 📄 File Object

When a user selects a file, JavaScript represents it as a **File Object**.

## Key Properties of a File Object:
- `name`: File name string (e.g., `"avatar.png"`).
- `size`: Size of the file in bytes (e.g., `1048576` bytes = 1MB).
- `type`: MIME type string (e.g., `"image/png"`, `"application/pdf"`).
- `lastModified`: Last modified timestamp.

```js
var fileInput = document.getElementById("singleFileInput");

fileInput.addEventListener("change", function(event) {
  var selectedFile = event.target.files[0]; // First File Object
  
  if (selectedFile) {
    console.log("File Name:", selectedFile.name);
    console.log("File Size (KB):", (selectedFile.size / 1024).toFixed(2));
    console.log("File Type:", selectedFile.type);
  }
});
```

---

# 49. 📚 FileList

The `inputElement.files` property returns a **FileList** object, which is an array-like list of selected File objects.

```js
var multiInput = document.getElementById("multiFileInput");

multiInput.addEventListener("change", function() {
  var fileList = multiInput.files; // FileList Collection
  console.log("Total files selected:", fileList.length);

  for (var i = 0; i < fileList.length; i++) {
    var file = fileList[i];
    console.log("File #" + (i + 1) + ": " + file.name);
  }
});
```

---

# 50. 📦 FormData

**FormData** is a built-in browser object used to construct key-value pairs representing form fields and binary file objects for API submission.

```js
// Create a new FormData instance
var formData = new FormData();
console.log("FormData instance created:", formData);
```

---

# 51. ➕ formData.append()

The `formData.append(key, value)` method adds text fields or File objects to the FormData instance.

```js
var formData = new FormData();

// 1. Append text field
formData.append("username", "John Doe");
formData.append("role", "Developer");

// 2. Append File object
var fileInput = document.getElementById("singleFileInput");
var fileToUpload = fileInput.files[0];

if (fileToUpload) {
  formData.append("profilePicture", fileToUpload, fileToUpload.name);
}
```

---

# 52. 🌐 multipart/form-data

File upload HTTP requests must use the **`multipart/form-data`** content type.

> ⚠️ **CRITICAL RULE:**  
> When sending a `FormData` object with `fetch()`, **DO NOT** manually define the `Content-Type` header! The browser automatically sets `Content-Type: multipart/form-data` along with the required boundary string.

```js
// ❌ INCORRECT (Do NOT manually set Content-Type for FormData)
// headers: { "Content-Type": "multipart/form-data" }

// ✅ CORRECT (Let the browser handle headers automatically)
fetch(uploadUrl, {
  method: "POST",
  body: formData // Browser attaches boundary automatically
});
```

---

# 53. 📤 Sending File via fetch()

Complete implementation of a file upload form using `fetch()` and `FormData`:

```html
<form id="uploadForm">
  <input type="text" id="userNameInput" placeholder="Enter your name" />
  <input type="file" id="userAvatarInput" accept="image/*" />
  <button type="submit">Upload Profile</button>
</form>
<div id="uploadStatus"></div>
```

```js
var uploadForm = document.getElementById("uploadForm");

uploadForm.addEventListener("submit", function(e) {
  e.preventDefault(); // Stop default form submit reload

  var nameVal = document.getElementById("userNameInput").value;
  var avatarInput = document.getElementById("userAvatarInput");
  var statusDiv = document.getElementById("uploadStatus");

  if (avatarInput.files.length === 0) {
    alert("Please select a file to upload!");
    return;
  }

  var selectedFile = avatarInput.files[0];

  // Construct FormData
  var formData = new FormData();
  formData.append("username", nameVal);
  formData.append("avatar", selectedFile);

  statusDiv.textContent = "Uploading file, please wait...";

  // Send API Request
  fetch("https://httpbin.org/post", { // Testing Endpoint
    method: "POST",
    body: formData
    // Note: No manual Content-Type header!
  })
  .then(function(res) {
    if (!res.ok) throw new Error("Upload failed with status " + res.status);
    return res.json();
  })
  .then(function(data) {
    console.log("Upload Response:", data);
    statusDiv.textContent = "File uploaded successfully!";
  })
  .catch(function(err) {
    console.log("Upload Error:", err.message);
    statusDiv.textContent = "Upload failed: " + err.message;
  });
});
```

---

# 54. 📥 Upload Response Handling

When a file upload completes, the server usually returns a response containing the file URL or file ID.

```js
async function uploadAndDisplayFile() {
  var fileInput = document.getElementById("userAvatarInput");
  var payload = new FormData();
  payload.append("file", fileInput.files[0]);

  try {
    var response = await fetch("https://api.escuelajs.co/api/v1/files/upload", {
      method: "POST",
      body: payload
    });

    if (!response.ok) {
      throw new Error("Server upload error status: " + response.status);
    }

    var result = await response.json();
    console.log("Uploaded Image URL:", result.location);

    // Render uploaded image on screen
    var imgElement = document.createElement("img");
    imgElement.src = result.location;
    imgElement.width = 200;
    document.body.appendChild(imgElement);

  } catch (error) {
    console.log("Upload handling error:", error.message);
  }
}
```

---

# 🔄 55. Complete API Revision & Summary

## Core Concepts Overview:

```text
               API (Client-Server Communication)
                               │
       ┌───────────────────────┴───────────────────────┐
       ▼                                               ▼
 HTTP Fundamentals                              JavaScript Fetch
 ├── Methods: GET, POST, PUT, DELETE            ├── fetch(url, options)
 ├── Status: 200, 201, 400, 404, 500             ├── Promises & async/await
 ├── Payload: JSON (stringify/parse)           ├── response.ok & response.json()
 └── Headers: Content-Type, Auth                └── FormData for File Uploads
```

## Quick Summary Table:

| Concept / Task | Purpose | Code Snippet Example |
| --- | --- | --- |
| **GET Request** | Fetch data | `fetch(url).then(r => r.json())` |
| **POST Request** | Create resource | `fetch(url, { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data) })` |
| **Error Handling** | Catch HTTP/Network errors | `if (!res.ok) throw new Error(res.status);` inside `try/catch` |
| **File Upload** | Upload binary file | `formData.append('file', fileObj); fetch(url, { method: 'POST', body: formData });` |
| **JSON Parse** | Convert JSON string ➔ JS Object | `JSON.parse(jsonString)` |
| **JSON Stringify** | Convert JS Object ➔ JSON string | `JSON.stringify(jsObject)` |

---

# 📝 56. Beginner Practice Tasks

Solve these hands-on tasks to solidify your understanding of Frontend APIs:

## Task 1: Fetch and Render User Cards (GET Request)
1. Use the free testing API URL: `https://jsonplaceholder.typicode.com/users`
2. Create a button labeled `Load Users`. When clicked, send a GET request.
3. Dynamically create HTML cards displaying each user's `Name`, `Email`, and `Company Name`.
4. Display a loading message while fetching data.

## Task 2: Create a New Post Form (POST Request)
1. Create an HTML form with `Title` and `Body` input fields and a `Submit` button.
2. On form submission, send a POST request to `https://jsonplaceholder.typicode.com/posts`.
3. Display a success message on the screen with the newly created post ID returned by the API.

## Task 3: Error Handling Practice (404 Error)
1. Fetch data from an invalid URL: `https://jsonplaceholder.typicode.com/invalidpage`
2. Check `response.ok` to detect the 404 HTTP status code.
3. Display a red alert banner on the UI saying `"Resource not found! (Error 404)"`.

## Task 4: File Selection Metadata Viewer (File Object)
1. Add an `<input type="file" accept="image/*">` element.
2. When a user selects an image, extract the `File` object and display its `Name`, `Size (in KB)`, and `MIME Type` in a paragraph element.

## Task 5: Profile Picture Upload (FormData & fetch)
1. Create an HTML form with a text input for `Name` and a file input for `Profile Picture`.
2. Construct a `FormData` object and append both values.
3. Send a POST request to `https://httpbin.org/post` and log the server response to verify the file upload payload.

---

# 📚 Official Documentation & References

- [MDN Fetch API Guide](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [MDN FormData Reference](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
- [JSONPlaceholder Free Fake REST API](https://jsonplaceholder.typicode.com/guide/)
- [Postman Learning Center](https://learning.postman.com/docs/getting-started/overview/)
