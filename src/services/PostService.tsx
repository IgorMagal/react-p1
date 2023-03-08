import Ipost from "../models/PostInterface";
import { database } from "./Firebase";
import { ref, push, query, get, set, remove } from "firebase/database";

const addPost = async (
  author: string,
  comment: string,
  authorImage: string,
  date: string
) => {
  try {
    const response = await push(ref(database, "/posts"), {
      author: author,
      comment: comment,
      authorImage: authorImage,
      date: date,
    });
    console.log(response.key);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getAllPosts = async () => {
  const postsQuery = query(ref(database, "/posts"));
  const data = await get(postsQuery);
  const postsArray: Ipost[] = [];
  if (data.exists()) {
    const postsObject = data.val();

    for (const postId in postsObject) {
      const post = postsObject[postId];
      postsArray.push({
        id: postId,
        author: post.author,
        comment: post.comment,
        authorImage: post.authorImage,
        date: post.date,
      });
    }
  }
  return postsArray;
};

const updatePost = async (postId: string, newData: Ipost) => {
  try {
    const postRef = ref(database, `/posts/${postId}`);
    await set(postRef, newData);
    console.log(`Post ${postId} has been updated successfully`);
  } catch (error) {
    console.log(error);
  }
};

const deletePost = async (postId: string) => {
  try {
    // Create a reference to the post with the specified ID
    const postRef = ref(database, `/posts/${postId}`);

    // Delete the post from the database
    await remove(postRef);

    console.log(`Post ${postId} deleted successfully`);
  } catch (error) {
    console.log(error);
  }
};

export { addPost, getAllPosts, updatePost, deletePost };
