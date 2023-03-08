import Ipost from "../models/PostInterface";
import { database } from "./Firebase";
import { ref, push, query, get, set, remove } from "firebase/database";

const getUserBio = async (uid: string) => {
  const postsQuery = query(ref(database, `/userInfo/${uid}/bio/`));
  const data = await get(postsQuery);
  console.log(data);
  let bio: string | null;

  if (data.exists()) {
    bio = data.val();
  } else bio = null;
  return bio;
};

const addUserBio = async (uid: string, bio: string) => {
  try {
    const response = await push(ref(database, `/userInfo/${uid}`), {
      bio: bio,
    });
    console.log(response.key);
    return response;
  } catch (error) {
    console.log(error);
  }
};

// const getAllPosts = async () => {
//   const postsQuery = query(ref(database, "/posts"));
//   const data = await get(postsQuery);
//   const postsArray: Ipost[] = [];
//   if (data.exists()) {
//     const postsObject = data.val();

//     for (const postId in postsObject) {
//       const post = postsObject[postId];
//       postsArray.push({
//         id: postId,
//         author: post.author,
//         comment: post.comment,
//         authorImage: post.authorImage,
//         date: post.date,
//       });
//     }
//   }
//   return postsArray;
// };

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
//};

export { getUserBio, addUserBio };
