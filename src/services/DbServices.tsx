import Ipost from "../interfaces/PostInterface";
import { database } from "./Firebase";
import { ref, push, query, get} from "firebase/database";

const writePostData = async (
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

export { writePostData, getAllPosts };
