import Ipost from "../models/PostInterface";
import { database } from "./Firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const addPost = async (
  authorId: string,
  authorName: string,
  authorImage: string,
  comment: string,
  date: string
) => {
  try {
    const response = await addDoc(collection(database, "posts"), {
      authorId: authorId,
      authorName: authorName,
      authorImage: authorImage,
      comment: comment,
      date: date,
    });
    console.log(response.id);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getAllPosts = async () => {
  const postsArray: Ipost[] = [];

  const querySnapshot = await getDocs(collection(database, "posts"));
  querySnapshot.forEach((doc) => {
    postsArray.push({
      id: doc.id,
      authorId: doc.data().authotId,
      authorName: doc.data().authorName,
      authorImage: doc.data().authorImage,
      comment: doc.data().comment,
      date: doc.data().date,
    });
  });
  return postsArray;
};

// const updatePost = async (postId: string, newData: Ipost) => {
//   try {
//     const postRef = ref(database, `/posts/${postId}`);
//     await set(postRef, newData);
//     console.log(`Post ${postId} has been updated successfully`);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const deletePost = async (postId: string) => {
//   try {
//     // Create a reference to the post with the specified ID
//     const postRef = ref(database, `/posts/${postId}`);

//     // Delete the post from the database
//     await remove(postRef);

//     console.log(`Post ${postId} deleted successfully`);
//   } catch (error) {
//     console.log(error);
//   }
// };

export { addPost, getAllPosts };
