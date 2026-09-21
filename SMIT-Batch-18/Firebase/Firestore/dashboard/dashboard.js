import { logout, protectPage } from "../firebase/firebase-auth.js"
import { getBlogInDb } from "../firebase/firebase-firestore.js"
protectPage()

const logoutBtn = document.getElementById("logoutBtn")
logoutBtn.addEventListener("click",logout)

const myBlogs = await getBlogInDb()
console.log("my blogs",myBlogs);


const blogCards = document.getElementById("blogCards")
for(const blog of myBlogs){
    blogCards.innerHTML += `
        <div class="blog_card_1">
                <h5>${blog.blogCategory}</h5>
                <h1>${blog.blogTitle}</h1>
                <p>${blog.blogContent}</p>
                <p>Author ID: ${blog.userId}</p>
                <button onclick = "window.location.href = '../blog-details/blog-detail.html?id=${blog.id}'">Read  More</button>
            </div>`
}

