import { Await, defer, useLoaderData } from "react-router-dom";
import { getAllPosts } from "../services/PostService";
import Ipost from "../models/PostInterface";
import PostsList from "../components/PostsList";

import LoadingSpinner from "../components/LoadingSpinner";
import React from "react";

const PostsPage: React.FC = () => {
  const { posts } = useLoaderData() as { posts: Ipost[] };

  return (
    <React.Suspense fallback={<LoadingSpinner />}>
      <Await
        resolve={posts}
        children={(resolvedPosts) => <PostsList posts={resolvedPosts} />}
      />
    </React.Suspense>
  );
};

export default PostsPage;

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
