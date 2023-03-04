import { useEffect, useState } from "react";
import PostsList from "../components/PostsList";
import PostForm from "../components/PostForm";
import Ipost from "../interfaces/PostInterface";
import { getAllPosts } from "../services/DbServices";

const PostsPage = () => {
  const [postsData, setPostsData] = useState<Ipost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const retrievePosts = async () => {
    const posts = await getAllPosts();

    setPostsData(posts);
  };

  useEffect(() => {
    console.log("Running useEffect");

    retrievePosts();
    setIsLoading(false);
  }, []);

  return (
    <div className="mt-24">
      {isLoading ? (
        <p>Loading posts...</p>
      ) : (
        <main>
          <PostsList posts={postsData} />
        </main>
      )}
    </div>
  );
};

export default PostsPage;
