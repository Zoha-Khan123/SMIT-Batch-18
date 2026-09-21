import { protectPage } from "../firebase/firebase-auth.js";
import { addBlogInDb } from "../firebase/firebase-firestore.js";

protectPage()

 const quill = new Quill('#editor', {
    theme: 'snow'
  });
 
const blogForm = document.getElementById("blogForm")

const addBlog = async (e) => {
  e.preventDefault()
  const blogTitle = document.getElementById("blogTitle").value
  const blogCategory = document.getElementById("blogCategory").value
  const blogContent = quill.root.innerHTML

  await addBlogInDb(blogTitle,blogCategory,blogContent)
  e.target.reset()
  quill.setText("")
  window.location.href = "../dashboard/dashboard.html"

}
blogForm.addEventListener("submit",addBlog)

