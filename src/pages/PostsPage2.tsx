import { Await, defer, useLoaderData } from "react-router-dom";
import { getAllPosts } from "../services/PostService";
import Ipost from "../models/PostInterface";
import PostsList from "../components/PostsList";
import { Suspense } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

interface LoaderData {
  posts: Ipost[];
}

const PostsPage2: React.FC = () => {
  const { posts } = useLoaderData() as LoaderData;

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Await resolve={posts}>
        <PostsList posts={posts} />
      </Await>
    </Suspense>
  );

  //   return <PostsList posts={posts} />;
};

export default PostsPage2;

export const loader = async () => {
  try {
    const posts = await getAllPosts();
    console.log("Fetched all posts.");
    return defer({ posts });
  } catch (e) {
    console.log(e);
    throw new Response(JSON.stringify({ message: "Unable to fetch posts." }), {
      status: 500,
    });
  }
};
