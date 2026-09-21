import { getBlogDetailInDb } from "../firebase/firebase-firestore.js";

const params = new URLSearchParams(window.location.search)
console.log(params);

const blogId = params.get("id")
console.log(blogId);


const blogDetail = await getBlogDetailInDb(blogId)

document.getElementById("title").innerText = blogDetail.blogTitle

document.getElementById("authorId").innerText = blogDetail.userId
document.getElementById("category").innerText = blogDetail.blogCategory
document.getElementById("content").innerHTML = blogDetail.blogContent
