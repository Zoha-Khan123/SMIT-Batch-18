import { getFirestore  , collection, addDoc , query, where, getDocs , getDoc, doc} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";
import { app } from "./firebase-config.js";


const db = getFirestore(app);

const addUserInDb = async (userId , name , email ) => {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "users"), {
      userId,
      name,
      email
    });
    console.log("Document written with ID: ", docRef.id);
}
const userId = localStorage.getItem("userId")

const addBlogInDb = async (blogTitle , blogCategory , blogContent , blogImage ) => {
    // Add a new document with a generated id.

    
    const docRef = await addDoc(collection(db, "blogs"), {
      userId,
      blogTitle,
      blogCategory,
      blogContent
    });
    console.log("Document written with ID: ", docRef.id);
}



const getBlogInDb = async () => {

const q = query(collection(db, "blogs"), where("userId", "==", userId));

let allBlogs = [] ;
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  allBlogs.push( {...doc.data() , id : doc.id})
});
console.log("All blogs", allBlogs);

return allBlogs
}


const getBlogDetailInDb =async (blogId) => {
  const docRef = doc(db, "blogs" , blogId );
  const docSnap = await getDoc(docRef);
  return docSnap.data()
} 


export {addUserInDb , addBlogInDb , getBlogInDb , getBlogDetailInDb}