import { useEffect, useState, memo, useMemo } from "react";
import PostsList from "../components/PostsList";
import Ipost from "../interfaces/PostInterface";
import { getAllPosts } from "../services/DbServices";

const PostsPage = () => {
  const [postsData, setPostsData] = useState<Ipost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const retrievePosts = async () => {
    const posts = await getAllPosts();
    setPostsData(posts);
    setIsLoading(false);
  };

  useEffect(() => {
    console.log("Running useEffect");
    retrievePosts();
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

export default memo(PostsPage);
